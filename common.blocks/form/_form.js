modules.define('form', ['i-bem-dom', 'BEMHTML', 'button'], function(provide, bemDom, BEMHTML, Button, Form) {

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
                    thisNode = this.domElem[0];

                bemDom.append(thisNode, wait);
                // добавить подгрузку из BEMHTML спиннера с ожиданием, запустить проверку полей + отправку сообщения
            }
        }
    }
}));

});
