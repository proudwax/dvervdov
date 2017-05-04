modules.define('toggle', ['i-bem-dom', 'button'], function(provide, bemDom, Button) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'active': {
            'true': function() {
                this.findChildBlock(Button).setMod('view', 'action');
            },
            '': function() {
                this.findChildBlock(Button).delMod('view');
            }
        }
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
