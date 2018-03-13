modules.define('content', ['i-bem-dom', 'button'], function(provide, bemDom, Button) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        
    },

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
