modules.define('product-slider', ['i-bem-dom', 'jquery_slick', 'input'], function(provide, bemDom, Slick, Input) {

provide(bemDom.declBlock(this.name, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                var list = this.findChildElem('list');

                list.domElem.slick({
                    dots: true,
                    infinite: false,
                    speed: 250,
                    fade: true,
                    cssEase: 'ease-out'
                });
            }
        }
    }

}));

});
