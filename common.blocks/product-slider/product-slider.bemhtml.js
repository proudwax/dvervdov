block('product-slider')(
    js()(true),

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
