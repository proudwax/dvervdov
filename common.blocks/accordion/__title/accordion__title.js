modules.define('accordion__title', ['i-bem-dom', 'checkbox', 'events'], function(provide, bemDom, Checkbox, Events) {

provide(bemDom.declElem('accordion', 'title', {
    _onCheckboxChanged: function(e) {
        var accordionEmitter = new Events.Emitter();


        // accordionEmitter.on('accordionChange', function (e) {
        //     console.log(e);
        // });
        accordionEmitter.emit('accordionChange');
    }
}, {
    lazyInit : true,

    onInit : function() {
        this._events(Checkbox).on({ modName: 'checked', modVal: '*' }, this.prototype._onCheckboxChanged);
    }
}
));

});
