/**
 * @module form-master
 */
modules.define('form-filter',
    ['i-bem-dom', 'form', 'checkbox-group', 'button'],
    function(provide, bemDom, Form, CheckboxGroup, Button) {
/**
 * form-callback block
 */
provide(bemDom.declBlock(this.name, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                var _this = this;

                this._form = this.findChildBlock(Form);
                this._form._domEvents().on('submit', function(e, val) {
                    this._form.domElem[0].submit();
                }.bind(this));

                this._resresh = this.findChildElem('refresh').findMixedBlock(Button);
                this._checkboxArr = [];

                this.findChildBlocks(CheckboxGroup)._entities.map(function (checkboxes) {
                    return checkboxes.getCheckboxes()._entities.map(function (checkbox) {
                        _this._checkboxArr.push(checkbox);
                    });
                });

                this._resresh._events(Button).on('click', function (e) {
                    _this._checkboxArr.forEach(function (item) {
                        item.delMod('checked');
                    });
                });

            }
        }
    }

}));

});
