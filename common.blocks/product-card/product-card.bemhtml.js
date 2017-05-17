block('product-card')(
    // js()(true),

    content()((ctx, json) => {
        return applyNext().reduce((prev, cur) => {
            if (cur.elem !== 'vendor') {
                prev[0].content.push(cur);
            } else {
                prev.push(cur);
            }
            return prev;
        }, [{ elem: 'inner', url: json.url ? json.url : false, content: [] }]);
    }),

    elem('inner')(
        tag()('span'),

        match((ctx, json) => { return json.url })(
            tag()('a'),

            addAttrs()((ctx, json) => {
                return {
                    href: json.url
                }
            })
        )
    ),

    elem('image')(
        content()((ctx, json) => {
            return {
                block: 'image',
                url: json.url + '?' + Math.random()
            }
        })
    ),

    elem('vendor')(
        match((ctx, json) => { return json.url })(
            tag()('a'),

            addAttrs()((ctx, json) => {
                return {
                    href: json.url
                }
            })
        )

    )
);
