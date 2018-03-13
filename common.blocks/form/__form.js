modules.define('form', ['i-bem-dom'], function(provide, bemDom, Form) {

provide(bemDom.declBlock(Form, {
    onSetMod: {
        'js': {
            'inited' : function() {
                // выполняется при первом DOM-событии "click"
                console.log(this);
            }
        }
    }

}));

});
