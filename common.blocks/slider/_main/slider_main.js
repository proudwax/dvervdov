modules.define('slider', ['i-bem-dom', 'plugin__slick'], function(provide, bemDom, Slick, Slider) {

provide(Slider.declMod({ modName: 'main', modVal: true }, {
    onSetMod: {
        'js': {
            'inited': function() {

                this._elem('content').domElem.slick({
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                });

                this._elem('content').domElem.slick('reinit')
            }
        }
    }
}));

});
