modules.define('cart-action', ['i-bem-dom', 'BEMHTML'], function (provide, bemDom, BEMHTML) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function () {

                }
            }
        },

        updatePrice: function(data) {
            var cost = data + ' ' + this.params.unit;
            bemDom.update(this._elem('cost').domElem, BEMHTML.apply({ block: 'cart-action', elem: 'cost', tag: '', content: cost }));

            return this;
        } 
    }));

});
