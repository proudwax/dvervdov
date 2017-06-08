modules.define('tabs', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                // выполняется при первом DOM-событии "click"
            }
        }
    },

    _onClick: function(e) {
        // выполняется при каждом DOM-событии "click"
    }
}, {
    lazyInit : true,

    onInit : function() {
        this._domEvents().on(
            'click',
            this.prototype._onClick);  // в момент клика будет создан экземпляр блока и вызван его метод _onClick
    }
}));

});
