modules.define('product-buy', ['i-bem-dom', 'form', 'button', 'modal', 'cart'], function(provide, bemDom, Form, Button, Modal, Cart) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var _this = this;
                this._form = this.findMixedBlock(Form);
                this._modal = this.findChildBlock(Modal);
                this._cart = this.findMixedBlock(Cart);

                this._elem('submit')._events(Button).on('click', function (e) {
                    _this._form.onSendForm()
                        .then(function (serverData) {
                            var json = JSON.parse(serverData);
                            if (json.Items.hasOwnProperty(_this.params.name)) {
                                _this._modal
                                    .setContent('<p class="product-buy__info">Товар добавлен в <a href="/cart/">корзину</a>.</p>')
                                    .setMod('visible');
                                    
                                _this._cart._elem('link').setMod('show', 'add'); 
                            } else {
                                _this._modal
                                    .setContent('<p class="product-buy__info">Произошла ошибка, для заказа связжитесь с менеджером.</a>')
                                    .setMod('visible');
                            }

                            return json;
                        })
                        .catch(console.log.bind(console));
                });
            }
        }
    }
}));

});
