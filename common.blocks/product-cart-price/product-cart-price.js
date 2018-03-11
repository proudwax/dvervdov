modules.define('product-cart-price', ['i-bem-dom', 'BEMHTML'], function (provide, bemDom, BEMHTML) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                }
            }
        },

        redraw: function (count) {
            if (count != this.params.count) {
                var block = BEMHTML.apply({ block: 'product-cart-price', price: this.params.price, count: count, unit: this.params.unit });

                bemDom.replace(this.domElem, block);
            }
        }
    }));

});
