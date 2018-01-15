modules.define('callback', ['i-bem-dom', 'button', 'input', 'modal', 'form-callback'], function (provide, bemDom, Button, Input, Modal, FormCallback) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {
                var callback = this.domElem[0],
                    modal = this.findChildBlock(Modal),
                    inputForm = this.findChildBlock(FormCallback).findChildBlock(Input);

                modal.domElem[0].style.zIndex = 1001;

                this._events(Button).on('click', function() {
                    modal.setMod('visible');
                    inputForm.setMod('focused');
                });
            }
        }
    }
}));

});
