modules.define('popup', ['i-bem-dom', 'popup__close'], function(provide, bemDom, Close, Popup) {

provide(bemDom.declBlock(Popup, {
    onSetMod: {
        'js': {
            'inited': function() {
                this._event(Close).on('click', function () {
                    this.delMod('visible');
                });
            }
        }
    },
}));

});
