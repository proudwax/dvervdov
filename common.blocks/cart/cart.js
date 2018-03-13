modules.define('cart', ['i-bem-dom', 'form', 'product-cart'], function(provide, bemDom, Form, ProductCart) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {
                var _this = this;
                this._form = this.findMixedBlock(Form);
                this._products = this.findChildBlocks(ProductCart);

                this._products.forEach(function (item) {
                    item._events(ProductCart).on('change', function (e, data) {
                        console.log(data);
                        _this._form.onSendForm().then(function (json) {
                            console.log(JSON.parse(json));
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
