modules.define('popup', ['objects'], function(provide, objects, Popup) {

provide(Popup.declMod({ modName : 'theme', modVal : 'dver' }, {
    _getDefaultParams : function() {
        return objects.extend(
            this.__base(),
            {
                mainOffset : 5,
                viewportOffset : 10
            });
    }
}));

});
