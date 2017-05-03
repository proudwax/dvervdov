modules.define('toggle', ['i-bem-dom', 'button'], function(provide, bemDom, Button) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {
                // let nav = this.findParentBlock(Nav);


                this._events(Button).on('click', function () {
                    // nav.toggleMod('opened');
                    console.log(this);
                });
            }
        }
    }
}));

});
