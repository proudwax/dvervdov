modules.define('product-gallery', ['i-bem-dom', 'jquery_slick', 'input'], function(provide, bemDom, Slick, Input) {

provide(bemDom.declBlock(this.name, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                var list = this.findChildElem('list');

                list.domElem.slick({
                    dots: false,
                    infinite: false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    cssEase: 'ease-out',
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3
                        }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1
                        }
                        }
                    ]
                });
            }
        }
    }

}));

});
