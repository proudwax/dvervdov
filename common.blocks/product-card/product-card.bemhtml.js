block('product-card')(
    js()(true),

    tag()('a'),

    addAttrs()(function () {
        return {
            href: this.ctx.path
        }
    }),

    content()(function () {
        let ctx = this.ctx;

        return [
            {
                elem: 'image',
                src: ctx.src
            },
            {
                elem: 'vendor',
                path: ctx.vendor.path,
                content: ctx.vendor.name
            },
            {
                elem: 'title',
                content: ctx.name
            },
            {
                elem: 'price',
                content: [
                    {
                        elem: 'old',
                        content: ctx.price.old + ' руб.'
                    },
                    {
                        elem: 'current',
                        content: ctx.price.current + ' руб.'
                    }
                ]
            }
        ]
    }),

    elem('image').content()(function (){
        return {
            block: 'image',
            url: this.ctx.src
        }
    }),

    elem('vendor')(
        // tag()('a'),

        addAttrs()(function () {
            return {
                href: this.ctx.path
            }
        })
    )


);
