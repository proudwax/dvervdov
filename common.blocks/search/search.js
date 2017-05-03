modules.define('search', ['i-bem-dom', 'button', 'popup', 'functions__throttle'], function(provide, bemDom, Button, Popup, throttle) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {
                let search = this.domElem[0],
                    button = this.findChildBlock({ block: Button, modName: 'close-popup', modVal: true }),
                    popup = this.findChildBlock(Popup);

                this._initPosition(search, popup);

                throttle(this._resizeWin(search, popup), 300);

                button._events(Button).on('click', function() {
                    popup.delMod('visible');
                });

                this._events(Button).on('click', function() {
                    popup.setMod('visible');
                });
            }
        }
    },

    _initPosition: function (search, popup) {
        let top = search.offsetHeight + search.offsetTop,
            left = (window.innerWidth - 1200) / 2;

        left = left > 0 ? left : 0;

        return popup.setPosition(left, top);
    },

    _resizeWin: function(search, popup) {
		this._domEvents(bemDom.win).on('resize', function(e) {
			this._initPosition(search, popup);
		});
	}
}));

});
