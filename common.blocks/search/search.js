modules.define('search', ['i-bem-dom', 'button', 'popup', 'header', 'functions__throttle'], function(provide, bemDom, Button, Popup, Header, throttle) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {
                let search = this.domElem[0],
                    popup = this.findChildBlock(Popup);

                // popup.domElem[0].style.zIndex = 1001;
                this._initPosition(search, popup);

                throttle(this._resizeWin(search, popup), 300);

                this._events(Button).on('click', function() {
                    popup.setMod('visible');
                });
            }
        }
    },

    _initPosition: function (search, popup) {
        let top = search.offsetHeight + search.offsetTop,
            left = Header.getPositionLeft();

        return popup.setPosition(left, top);
    },

    _resizeWin: function(search, popup) {
		this._domEvents(bemDom.win).on('resize', function(e) {
			this._initPosition(search, popup);
		});
	}
}));

});
