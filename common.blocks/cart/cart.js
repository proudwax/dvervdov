modules.define('cart', ['i-bem-dom', 'form', 'product-cart', 'cart-action', 'cart-list'], function (provide, bemDom, Form, ProductCart, CartAction, CartList) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            'js': {
                'inited': function () {
                    var _this = this;
                    this._form = this.findMixedBlock(Form);
                    this._products = this.findChildBlocks(ProductCart);
                    this._cartCost = this.findChildBlock(CartAction);
                    this._cartList = this.findChildBlock(CartList);
 
                    this._products.forEach(function (item) {
                        item._events(ProductCart).on('change', function (e, data) {
                            var name = data.item.params.name;

                            _this._form.onSendForm()
                                .then(function (serverData) {
                                    var json = JSON.parse(serverData);

                                    data.item.updatePrice(json.Items[name]);
                                    _this._cartCost.updatePrice(json.TotalItemPrice);

                                    return json;
                                })
                                .catch(console.log.bind(console));
                        });

                        item._events(ProductCart).on('remove', function (e, data) {
                            _this._form.onSendForm(data.params)
                                .then(function (serverData) {
                                    var json = JSON.parse(serverData);

                                    _this._cartCost.updatePrice(json.TotalItemPrice);
                                    _this._cartList.destructItem();

                                    return json;
                                })
                                .catch(console.log.bind(console));

                        });
                    });
                }
            }
        },
    }));

});
