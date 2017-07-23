block('breadcrumbs')(
    content()(ctx => {
        return {
            elem: 'list',
            content: applyNext()
        }
    }),

    elem('item')(
        tag()('a'),

        addAttrs()(ctx => {
            return {
                href: ctx.ctx.url
            }
        }),

        match(function () { return this.isLast() })(
            attrs()(function () {
                return delete applyNext().href;
            }),

            tag()('span')
        )
    )
);
