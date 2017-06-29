block('list')(
    elem('title')(
        tag()('h2')
    ),

    elem('item')(
        tag()('a'),

        addAttrs()(function () {
            return {
                href: this.ctx.url
            }
        }),

        content()(function () {
            return {
                elem: 'text',
                content: this.ctx.text
            }
        })
    ),

    elem('text')(
        tag()('span')
    )
);
