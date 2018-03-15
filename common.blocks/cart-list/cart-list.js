modules.define('cart-list', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                
                console.log();
            }
        }
    },

    destructItem: function() {
        this._elems('item').find(function (item) {
            return item.hasMod('removing') && bemDom.destruct(item.domElem);
        });

        this._elems('item').size() == 0 && this.cartEmpty();
    },

    cartEmpty: function(text) {
        this._elem('content').domElem.text(text || 'Ваша корзина пуста');
    }
}));

});
