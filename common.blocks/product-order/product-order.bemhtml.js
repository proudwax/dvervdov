block('product-order')(
    // js()(true),

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
    )
);
