modules.define('accordion__title', ['i-bem-dom', 'checkbox'], function(provide, bemDom, Checkbox) {

provide(bemDom.declElem('accordion', 'title', {
    _onCheckboxChanged: function(e) {
        var checkbox = this.findMixedBlock(Checkbox);

        this._emit('accordionChange', { name: checkbox.getName(), flag: checkbox.hasMod('checked') });
    }
}, {
    lazyInit : true,

    onInit : function() {
        this._events(Checkbox).on({ modName: 'checked', modVal: '*' }, this.prototype._onCheckboxChanged);
    }
}
));

});
