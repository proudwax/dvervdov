modules.define('form', ['i-bem-dom', 'BEMHTML', 'form-field'], function(provide, bemDom, BEMHTML, FormField, Form) {

provide(Form.declMod({ modName: 'async', modVal: true }, {
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
            data = this.onSerialize(this.domElem[0]),
            xhttp = new XMLHttpRequest();

        this.setMod('waiting');

        if (domForm[0].method.toLowerCase() == 'get') {
            xhttp.open(domForm[0].method, domForm[0].action + '?' + data, true);
            xhttp.send();
        } else {
            xhttp.open(domForm[0].method, domForm[0].action, true);
            xhttp.send(data);
        }    

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                _this.onSuccessForm(JSON.parse(this.responseText));
            }
        };
    },

    onSerialize: function (form) {
        var data = [].map.call(form.querySelectorAll('input, select, textarea'), function (field) {
            return field.name + '=' + encodeURIComponent(field.value).replace(/%20/g, '+');
        });

        return data.join('&');
    },

    onSuccessForm: function (response) {
        var success = BEMHTML.apply({ block: 'form', elem: 'success', content: response.message }),
            thisNode = this.domElem[0];

        this.setMod('success');
        bemDom.append(thisNode, success);
    }
}));

});
