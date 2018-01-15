/**
 * @module modal
 */

modules.define('modal', function (provide, Modal) {

provide(Modal.declMod({ modName : 'has-close', modVal : true }, /** @lends modal.prototype */{
    onSetMod: {
        'js': {
            'inited': function () {
                this.__base.apply(this, arguments);

                var _this = this;

                this._elem('close')._domEvents().on('click', function (e) {
                    _this.delMod('visible');
                });
            }
        }
    }
}));

});