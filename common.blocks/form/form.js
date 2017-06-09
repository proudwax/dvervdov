modules.define('form', ['i-bem-dom', 'button'], function(provide, bemDom, Button) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js': {
            'inited' : function() {
                // выполняется при первом DOM-событии "click"
            }
        },

        'waiting': {
            true: function () {
                console.log('re');
                // добавить подгрузку из BEMHTML спиннера с ожиданием, запустить проверку полей + отправку сообщения
            }
        }
    },

    _onClick: function(e) {
        console.log(this);

        this.setMod('waiting');
        // выполняется при каждом DOM-событии "click"
    }
}, {
    lazyInit : true,

    onInit : function() {
        this._events(Button).on(
            'click',
            this.prototype._onClick);  // в момент клика будет создан экземпляр блока и вызван его метод _onClick
    }
}));

});
