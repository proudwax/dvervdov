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
                // выполняется при первом BEM-событии "change"
            }
        }
    },

    _onCheckboxChanged: function(e) {
        var flag = e.bemTarget.hasMod('checked');

        this._items[e.bemTarget.getName()].setMod('checked', flag);
        // выполняется при каждом DOM-событии "change"
    }
}, {
    lazyInit : true,

    onInit : function() {
        this._events(Checkbox).on({ modName: 'checked', modVal: '*' }, this.prototype._onCheckboxChanged);
    }
}));

});
