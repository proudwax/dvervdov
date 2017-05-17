modules.define('header', ['i-bem-dom', 'toggle', 'nav', 'functions__throttle'], function(provide, bemDom, Toggle, Nav, throttle) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {
                this.__self.storage = this;
                this._events(Toggle).on('click', this._onToggleClick);
            }
        }
    },

    _onToggleClick: function () {
        this.findChildBlock(Nav).toggleMod('opened');
        this.findChildBlock(Toggle).toggleMod('active');
    }
},
{
    storage: {},

    getPositionLeft: function () {
        return this.storage.domElem[0].offsetLeft;
    }
//     lazyInit: true,
//
//     onInit: function() {
//         this._events(Toggle).on('click', this.prototype._onToggleClick);
//     }
}
));

});
