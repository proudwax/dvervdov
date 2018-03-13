modules.define('cart', ['i-bem-dom', 'form', 'product-cart', 'cart-action'], function (provide, bemDom, Form, ProductCart, CartAction) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            'js': {
                'inited': function () {
                    var _this = this;
                    this._form = this.findMixedBlock(Form);
                    this._products = this.findChildBlocks(ProductCart);
                    this._cartCost = this.findChildBlock(CartAction)._elem('cost');

                    this._products.forEach(function (item) {
                        item._events(ProductCart).on('change', function (e, data) {
                            var name = data.item.params.name;

                            _this._form.onSendForm().then(function (serverData) {
                                var json = JSON.parse(serverData);

                                data.item.updatePrice(json.Items[name]);
                                _this._cartCost.domElem.html(json.TotalItemPriceF);
                                // _this._cartCost.domElem[0].innerHTML(json.TotalItemPriceF);
                            });
                        });
                    })
                    // this.findChildBlock(PriceCart).redraw(data.val);
                    // this._emit('change', { item: this });
                }
            }
        },
    }));

});