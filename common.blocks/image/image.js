modules.define('image', ['i-bem-dom', 'functions__throttle'], function(provide, bemDom, throttle) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {
                this.__base.apply(this, arguments);

				this._offsetTop = this.domElem.offset().top - bemDom.win.height();

                if(bemDom.win.scrollTop() < this._offsetShow){
					throttle(this._domEvents(bemDom.win).on('scroll resize', function(e){
						this._offsetTop = this.domElem.offset().top - bemDom.win.height();
						this._onLoad();
					}), 300);
				}
            }
        }
    },

    _onClick: function () {
        console.log(this);
    }
}));

});
