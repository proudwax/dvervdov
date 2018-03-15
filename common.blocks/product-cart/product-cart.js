modules.define('product-cart', ['i-bem-dom', 'count', 'button', 'product-cart-price'], function (provide, bemDom, Count, Button, PriceCart) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    this._count = this.findChildBlock(Count);
                    this._remove = this.findChildBlock({ block: Button, modName: 'remove', modVal: true });

                    this._count._events(Count).on('change', function (e, data) {
                        this._emit('change', { item: this });
                    }.bind(this));

                    this._remove._events(Button).on('click', function (e) {
                        this._emit('remove', { item: this, params: { name: this._remove.getName(), value: this._remove.getVal() } });
                    }.bind(this));
                }
            }
        },

        updatePrice: function (data) {
            this.findChildBlock(PriceCart).redraw(data);

            return this;
        }
    }));

});
