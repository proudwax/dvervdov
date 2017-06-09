modules.define('tabs', ['i-bem-dom', 'radio-group'], function(provide, bemDom, RadioGroup) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var _this = this;

                this._radiogroup = this.findChildBlock(RadioGroup);
                this._listContent = [];

                this.findChildElems('content').forEach(function (item) {
                    _this._listContent[item.params.id] = item;
                });

                // выполняется при первом BEM-событии "change"
            }
        }
    },

    _onChangeRadioGroup: function(e) {
        var radioGroupVal = this._radiogroup.getVal();

        this.findChildElems('content').delMod('checked');
        this._listContent[radioGroupVal].setMod('checked');

        // выполняется при каждом DOM-событии "change"
    }
}, {
    lazyInit : true,

    onInit : function() {
        this._events(RadioGroup).on(
            'change',
            this.prototype._onChangeRadioGroup);  // в момент клика будет создан экземпляр блока и вызван его метод _onChangeRadioGroup
    }
}));

});
