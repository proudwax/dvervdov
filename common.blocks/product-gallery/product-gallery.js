modules.define('product-gallery', ['i-bem-dom', 'jquery_slick', 'jquery_colorbox', 'input'], function(provide, bemDom, Slick, ColorBox, Input) {

provide(bemDom.declBlock(this.name, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                var id = this.params.id,
                    list = this.findChildElem('list')
                    items = this.findChildElems('item');

                list.domElem.slick({
                    dots: false,
                    infinite: false,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    cssEase: 'ease-out',
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 4
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 2
                            }
                        }
                    ]
                });

                items._entities.map(function (item) {
                    item.findChildElem('image').domElem.colorbox({
                        rel: id,
                        fixed: true,
                        innerWidth: '80%',
                        innerHeight: '80%',
                        maxWidth: '1200px'
                        // width: '100% - 20px',
                        // height: '100% - 20px'
                    });
                });
            }
        }
    }

}));

});
