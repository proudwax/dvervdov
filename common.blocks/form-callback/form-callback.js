/**
 * @module app
 */
modules.define('form-callback',
    ['i-bem-dom', 'form'],
    function(provide, bemDom, Form) {
/**
 * app block
 */
provide(bemDom.declBlock(this.name, /** @lends app.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._form = this.findChildBlock(Form);
                this._form._domEvents().on('submit', function(e, val) {

                    this._form.validate()
                        .then(function (fieldsStatuses) {
                            if(this._form.checkFields(fieldsStatuses)) {
                                this._form.getMessage().hide();
                                console.log(val);
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
