block('product-cart')(
    addJs()(function (node, ctx) {
        return {
            name: ctx.data.name,
        };
    }),

    content()(function (node, ctx) {
        return [
            {
                elem: 'image',
                url: ctx.data.url,
                content: [
                    {
                        block: 'image',
                        url: ctx.data.image + '?' + Math.random()
                    }
                ]
            },
            {
                elem: 'container',
                content: [
                    {
                        elem: 'title',
                        url: ctx.data.url,
                        content: ctx.data.title
                    },
                    {
                        elem: 'count',
                        content: [
                            {
                                block: 'count',
                                count: ctx.data.count,
                                range: [1, 30],
                                name: ctx.data.name
                            }
                        ]
                    },
                    {
                        elem: 'price',
                        content: [
                            {
                                block: 'product-cart-price',
                                count: ctx.data.count,
                                price: ctx.data.price,
                                unit: 'руб.'
                            }
                        ]
                    },
                    {
                        elem: 'remove',
                        content: [
                            {
                                block: 'button',
                                mods: { theme: 'dver', size: 'm', type: 'submit' },
                                name: ctx.data.name,
                                val: 0,
                                icon: {
                                    block: 'icon',
                                    mods: { remove: true }
                                }
                            }
                        ]
                    }
                ]
            }
        ];
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
    ),
);
