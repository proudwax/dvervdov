modules.define('form', ['i-bem-dom', 'BEMHTML', 'form-field'], function(provide, bemDom, BEMHTML, FormField, Form) {

provide(bemDom.declBlock(Form, {
    onSetMod: {
        'js': {
            'inited' : function() {
                // выполняется при первом DOM-событии "click"
            }
        },

        'waiting': {
            true: function () {
                var wait = BEMHTML.apply({ block: 'form', elem: 'waiting' }),
                    thisNode = this.domElem[0],
                    fields = this.findChildBlocks(FormField);

                fields._entities.map(function (field) {
                    field.getMessage() && field.getMessage().hide();
                });

                bemDom.append(thisNode, wait);
                // добавить подгрузку из BEMHTML спиннера с ожиданием, запустить проверку полей + отправку сообщения
            },

            '': function () {
                bemDom.destruct(this.findChildElem('waiting').domElem);
            }
        },

        'success': {
            true: function () {
                this.delMod('waiting');
            }
        },
    },

    onSendForm: function () {
        var _this = this,
            domForm = this.domElem,
            xhttp = new XMLHttpRequest();

        this.setMod('waiting');

        xhttp.open(domForm[0].method, domForm[0].action, true);
        xhttp.send();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                _this.onSuccessForm(JSON.parse(this.responseText));
            }
        };
    },

    onSuccessForm: function (response) {
        var success = BEMHTML.apply({ block: 'form', elem: 'success', content: response.message }),
            thisNode = this.domElem[0];

        this.setMod('success');
        bemDom.append(thisNode, success);
    }

}));

});
