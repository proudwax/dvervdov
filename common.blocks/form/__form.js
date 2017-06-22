modules.define('form', ['i-bem-dom', 'BEMHTML', 'form-field'], function(provide, bemDom, BEMHTML, FormField, Form) {

provide(bemDom.declBlock(Form, {
    onSetMod: {
        'js': {
            'inited' : function() {
                // выполняется при первом DOM-событии "click"
            }
        }
    }

}));

});
