/**
 * @module form-order
 */
modules.define('form-order',
    ['i-bem-dom', 'form'],
    function(provide, bemDom, Form) {
/**
 * form-order block
 */
provide(bemDom.declBlock(this.name, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._form = this.findChildBlock(Form);
                this._form._domEvents().on('submit', function(e, val) {
                    this._form.validate()
                        .then(function (fieldsStatuses) {
                            if(this._form.checkFields(fieldsStatuses)) {
                                document.querySelector('input[name="posting"]').value = 1
                                this._form.domElem[0].submit();
                            } else {
                                this._form.getInvalidFields().then(function (invalidFields) {
                                    invalidFields[0].getControl().setMod('focused');
                                });
                                this._form.setMessageVal(fieldsStatuses.message);
                                this._form.getMessage().show();
                            }

                        }.bind(this));
                }.bind(this));
            }
        }
    }

}));

});
