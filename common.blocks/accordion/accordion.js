modules.define('accordion', ['i-bem-dom', 'events'], function(provide, bemDom, Events) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                // var _this = this,
                //     titles = this.findChildElems('title');
                //
                // this._items = [];

                // titles._entities.forEach(function (item, i) {
                //     var titleName = item.findMixedBlock(Checkbox).getName();
                //
                //     _this._items[titleName] = item.findParentElem('item');
                // });
                // выполняется при первом BEM-событии "change"

                console.log(this);

            }
        }
    },

    _onCheckboxChanged: function(e) {
        console.log(e);

        // выполняется при каждом DOM-событии "change"
    }
}
, {
    lazyInit : true,

    onInit : function() {
        this._events().on('accordionChange', this.prototype._onCheckboxChanged);
    }
}
));

});
