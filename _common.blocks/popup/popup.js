modules.define('popup', ['i-bem-dom', 'popup__close'], function(provide, bemDom, Close, Popup) {

provide(bemDom.declBlock(Popup, {
    onSetMod: {
        'js': {
            'inited': function() {
                this._events(this._elem(Close)).on('click', this._onCloseClick);
            }
        }
    },
    _onCloseClick: function() {
        this.delMod('visible');
    }
}));

});
