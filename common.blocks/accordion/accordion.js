modules.define('accordion', ['i-bem-dom', 'checkbox'], function(provide, bemDom, Checkbox) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var _this = this,
                    titles = this.findChildElems('title');

                this._items = [];

                titles._entities.forEach(function (item, i) {
                    var titleName = item.findMixedBlock(Checkbox).getName();

                    _this._items[titleName] = item.findParentElem('item');
                });
                // выполняется при первом BEM-событии "accordionChange"
            }
        }
    },

    _onCheckboxChanged: function(e, data) {
        this._items[data.name].setMod('checked', data.flag);
        // выполняется при каждом DOM-событии "accordionChange"
    }
}
, {
    lazyInit : true,

    onInit : function() {
        this._events('title').on('accordionChange', this.prototype._onCheckboxChanged);
    }
}
));

});
