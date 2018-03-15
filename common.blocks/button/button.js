modules.define('button', ['i-bem-dom'], function (provide, bemDom, Button) {

    provide(bemDom.declBlock(Button, {
        getName: function () {
            return this.domElem[0].name;
        },

        getVal: function () {
            return this.domElem[0].value;
        }
    }));

});
