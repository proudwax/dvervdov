modules.define('image', ['i-bem-dom', 'functions__throttle'], function(provide, bemDom, throttle) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js': {
            'inited': function () {
                this._offsetTop = this.domElem.offset().top - bemDom.win.height();
                this._attrSrc = this.domElem[0].dataset.url;

                this.setMod('lazy', !!this._attrSrc);
            }
        },

        'lazy': {
            true: function () {
                if(bemDom.win.scrollTop() < this._offsetTop){
                    throttle(this._domEvents(bemDom.win).on('scroll resize', this._onInit), 300);
                } else {
                    this._getSrc(this._attrSrc);
                }
            },
            '': function () {
                this._domEvents(bemDom.win).un('scroll resize', this._onInit);
                delete this.domElem[0].dataset.url;
            }
        }
    },

    _onInit: function () {
        this._offsetTop = this.domElem.offset().top - bemDom.win.height();
        if(bemDom.win.scrollTop() >= this._offsetTop){
            this._getSrc(this._attrSrc);
        }
    },

    _onloadImage: function (path) {
        if (path) {
            return new Promise ((resolve, reject) => {
                let img = new Image();

                img.onload = (() => { return resolve(path); });
                img.onerror = (() => { return reject(path); });

                img.src = path;
            });
        }
    },

    _getSrc: function (path) {
        var promiseImg = this._onloadImage(path),
            _this = this;

        promiseImg.then(
            function (res) {
                _this.domElem[0].src = res;
                _this.delMod('lazy');
            }
        ).catch(
            function (err) {
                console.error(err);
            }
        );
    }
}));

});
