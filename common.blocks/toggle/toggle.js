modules.define('toggle', ['i-bem-dom', 'button'], function(provide, bemDom, Button) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {
                
            }
        }
    }
}));

});
