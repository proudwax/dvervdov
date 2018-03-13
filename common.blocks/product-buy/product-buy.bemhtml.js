block('product-buy')(
    js()(true),

    tag()('form'),

    addAttrs()(function () {
        return {
            method: 'post',
            action: '/addToCart/'
        };
    })
);
