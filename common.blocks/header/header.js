modules.define('header', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {
                this.__self.storage = this;
            }
        }
    }
},
{
    storage: {},

    getPositionLeft: function () {
        return this.storage.domElem[0].offsetLeft;
    }
}
));

});
