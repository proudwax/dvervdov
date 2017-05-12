block('tile')(
    js()(true),

    elem('item')(
        tag()('a'),

        addAttrs()(function () {
            return {
                href: this.ctx.url
            }
        })
    )
);
