modules.define('product-cart-price', ['i-bem-dom', 'BEMHTML'], function (provide, bemDom, BEMHTML) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                }
            }
        },

        redraw: function (data) {
            if (data.Qty != this.params.count) {
                var block = BEMHTML.apply({ block: 'product-cart-price', price: data.ItemPrice, count: data.Qty, unit: this.params.unit });

                bemDom.replace(this.domElem, block);
            }
        }
    }));

});
