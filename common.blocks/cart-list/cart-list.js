modules.define('cart-list', ['i-bem-dom', 'BEMHTML'], function (provide, bemDom, BEMHTML) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {

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
        this.setMod('empty');
        
        bemDom.update(this._elem('content').domElem, BEMHTML.apply({ block: 'cart-list', elem: 'empty', content: text || 'Ваша корзина пуста' }));
    }
}));

});
