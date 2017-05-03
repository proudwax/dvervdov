modules.define('popup', ['i-bem-dom', 'popup__close', 'button'], function(provide, bemDom, Close, Button, Popup) {

provide(bemDom.declBlock(Popup, {
    onSetMod: {
        'js': {
            'inited': function() {
                this._events(this.findChildElem(Close)).on('click', function () {
                    this.delMod('visible');
                });
            }
        }
    },
}));

});
