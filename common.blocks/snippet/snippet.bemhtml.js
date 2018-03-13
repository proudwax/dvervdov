block('snippet')(
    content()((ctx, json) => {
        return [
            {
                elem: 'title',
                url: json.url,
                content: json.title
            },
            {
                elem: 'content',
                content: json.content
            }
        ]
    }),

    elem('title')(
        tag()('h2'),

        content()((ctx, json) => {
            return {
                elem: 'link',
                url: json.url,
                content: json.content
            }
        })
    ),

    elem('link')(
        tag()('a'),

        addAttrs()((ctx, json) => {
            return {
                href: json.url
            }
        })
    )
);
