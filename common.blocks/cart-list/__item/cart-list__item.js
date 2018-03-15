modules.define('cart-list__item', ['i-bem-dom', 'product-cart'], function (provide, bemDom, ProductCart) {

provide(bemDom.declElem('cart-list', 'item', {
    onSetMod: {
        js: {
            inited: function() {
                this._events(ProductCart).on('remove', function (e, data) {
                    this.setMod('removing');
                });
            }
        }
    }
}));

});
