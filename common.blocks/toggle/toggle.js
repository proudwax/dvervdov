modules.define('toggle', ['i-bem-dom', 'button'], function(provide, bemDom, Button) {

provide(bemDom.declBlock(this.name, {
    _onClick: function() {
        console.log(this);
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
