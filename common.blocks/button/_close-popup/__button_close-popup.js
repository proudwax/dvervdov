modules.define('button', ['popup'], function(provide, Popup, Button) {

provide(Button.declMod({ modName: 'close-popup', modVal: true }, {
    onSetMod: {
        'js': {
            'inited': function() {
                let popup = this.findParentBlock(Popup);

                this._events(Button).on('click', function() {
                    popup.delMod('visible');
                });
            }
        }
    }
}));

});
