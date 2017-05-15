block('product-card')(
    js()(true),

    tag()('a'),

    addAttrs()(function () {
        return {
            href: this.ctx.path
        }
    }),

    content()(function () {
        return [
            {
                elem: 'title',
                content: this.ctx.name
            },
            {
                elem: 'image',
            },
            {
                elem: 'price',
                content: this.ctx.price
            }
        ]
    })

);
