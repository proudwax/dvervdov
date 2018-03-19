modules.define('cart__link', ['i-bem-dom', 'button', 'BEMHTML'], function (provide, bemDom, Button, BEMHTML) {

provide(bemDom.declElem('cart', 'link', {
    onSetMod: {
        js: {
            inited: function() {
                this._button = this.findMixedBlock(Button);
            }
        },

        show: {
            empty: function () {
                this._button
                    .delMod('view');
                
                bemDom.update(
                    this.domElem,
                    BEMHTML.apply({ block: 'icon', mods: { cart: true } })
                );
            },

            add: function () {
                this._button
                    .setMod('view', 'action');

                bemDom.update(
                    this.domElem,
                    BEMHTML.apply({ block: 'icon', mods: { cart: 'white' } })
                );
            }
        }
    }
}));

});
