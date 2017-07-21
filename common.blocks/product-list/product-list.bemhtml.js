block('product-list')(
    // js()(true),

    content()(function() {
        var ctx = this.ctx;

        var items = ctx.options && ctx.options.map(function (item) {
            return {
                elem: 'item',
                content: item
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

    elem('container')(
        tag()('ul')
    ),

    elem('item')(
        tag()('li')
    ),

    elem('title')(
        tag()('h3')
    )
);
