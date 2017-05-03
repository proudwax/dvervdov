modules.define('popup', ['i-bem-dom', 'popup__close'], function(provide, bemDom, Close, Popup) {

provide(bemDom.declBlock(Popup, {
    _onCloseClick: function() {
        this.delMod('visible');
    }
},
{
    lazyInit: true,

    onInit: function() {
        this._events(Close).on('click', this.prototype._onCloseClick);
    }
}));

});
