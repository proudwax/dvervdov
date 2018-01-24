modules.define('product', ['i-bem-dom', 'jquery_colorbox'], function(provide, bemDom, ColorBox) {

provide(bemDom.declBlock(this.name, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.findChildElem('preview').domElem.colorbox({
                    fixed: true,
                    innerWidth: '100%',
                    innerHeight: '100%',
                    maxWidth: '1200px'
                });
            }
        }
    }

}));

});
