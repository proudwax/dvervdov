modules.define('product-cart', ['i-bem-dom', 'count'], function (provide, bemDom, Count) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    this._count = this.findChildBlock(Count);

                    this._count._events(Count).on('change', function (e, data) {
                        console.log(e);
                        console.log(data);
                    });
                }
            }
        }
    }));

});
