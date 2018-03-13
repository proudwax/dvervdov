modules.define('popup__close', ['i-bem-dom', 'button'], function(provide, bemDom, Button) {

provide(bemDom.declElem('popup', 'close', {
    _onClick: function() {
        this._emit('click');
    }
},
{
    lazyInit: true,

    onInit: function() {
        this._events(Button).on('click', this.prototype._onClick);
    }
}));

});
