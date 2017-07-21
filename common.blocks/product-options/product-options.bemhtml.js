block('product-options')(
    // js()(true),

    content()(function() {
        var ctx = this.ctx;

        var items = ctx.options && ctx.options.map(function (item) {
            return {
                elem: 'item',
                elemMods: { current: item.current },
                url: item.url,
                title: item.name,
                content: [
                    {
                        elem: 'image',
                        alt: item.name,
                        url: item.path
                    },
                    {
                        elem: 'text',
                        content: item.name
                    }
                ]
            }
        });

        return [
            {
                elem: 'title',
                content: ctx.title
            },
            {
                elem: 'container',
                content: items
            }
        ];
    }),

    elem('item')(
        tag()('a'),

        addAttrs()((ctx, json) => {
            return {
                href: json.url,
                title: json.title
            }
        }),

        match((ctx, json) => { return ctx.elemMods.current; })(
            tag()('span'),

            addAttrs()((ctx, json) => {
                return {
                    href: undefined,
                    title: undefined
                }
            })
        )
    ),

    elem('title')(
        tag()('h3')
    ),

    elem('text')(
        tag()('span')
    ),

    elem('image')(
        tag()('span'),

        content()((ctx, json) => {
            return {
                block: 'image',
                alt: json.alt,
                url: json.url + '?' + Math.random()
            }
        })
    )
);
