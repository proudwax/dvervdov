/**
 * @module form-master
 */
modules.define('form-filter',
    ['i-bem-dom', 'form'],
    function(provide, bemDom, Form) {
/**
 * form-callback block
 */
provide(bemDom.declBlock(this.name, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._form = this.findChildBlock(Form);
                this._form._domEvents().on('submit', function(e, val) {
                    this._form.domElem[0].submit();
                    console.log(this);
                }.bind(this));
            }
        }
    }

}));

});
