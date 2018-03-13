block('product-cart')(
    addJs()(function () {
        return {
            price: this.ctx.data.price.current
        };
    }),

    elem('title')(
        tag()('a'),

        addAttrs()(function () {
            return {
                href: this.ctx.url
            }
        })
    ),

    elem('image')(
        tag()('a'),

        addAttrs()(function () {
            return {
                href: this.ctx.url
            }
        })
    )
);
