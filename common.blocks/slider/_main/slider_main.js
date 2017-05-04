modules.define('slider', ['i-bem-dom', 'plugin__slick'], function(provide, bemDom, Slick, Slider) {

provide(Slider.declMod({ modName: 'main', modVal: true }, {
    onSetMod: {
        'js': {
            'inited': function() {

                this.findChildElem('content').domElem.slick();

                // console.log();
            }
        }
    }
}));

});
