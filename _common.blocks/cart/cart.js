modules.define('cart', ['i-bem-dom', 'button', 'popup'], function(provide, bemDom, Button, Popup) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {
                let button = this.findChildBlock(Button),
                    popup = this.findChildBlock(Popup)
                        .setAnchor(button);

                this._events(Button).on('click', function() {
                    popup.setMod('visible');
                });
            }
        }
    }
}));

});
