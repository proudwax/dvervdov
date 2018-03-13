block('product-gallery')(
    // js()(true),
    js()(function () {
        return { id : this.generateId() };
    }),

    content()((ctx, json) => {
        let list =  json.items && json.items.map((item) => {
            return {
                elem: 'item',
                content: [
                    {
                        elem: 'image',
                        url: item.image,
                        alt: item.title
                    }
                ]
            }
        });

        return {
            elem: 'list',
            content: list
        };
    }),

    elem('image')(
        tag()('a'),

        addAttrs()((ctx, json) => {
            return {
                href: json.url + '?' + Math.random()
            };
        }),

        content()((ctx, json) => {
            return {
                block: 'image',
                alt: json.alt,
                url: json.url + '?' + Math.random()
            }
        })
    )
);
