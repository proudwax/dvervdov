modules.define('product-cart', ['i-bem-dom', 'count', 'product-cart-price'], function (provide, bemDom, Count, PriceCart) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    this._count = this.findChildBlock(Count);

                    this._count._events(Count).on('change', function (e, data) {
                        this.findChildBlock(PriceCart).redraw(data.val);
                    }.bind(this));
                }
            }
        }
    }));

});
