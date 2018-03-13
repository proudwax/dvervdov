block('product')(
    js()(true),

    elem('title')(
        tag()('h1')
    ),

    elem('price-old')(
        content()((ctx, json) => {
            return [
                applyNext(),
                ' руб.'
            ];
        })
    ),

    elem('price-current')(
        content()((ctx, json) => {
            return [
                applyNext(),
                ' руб.'
            ];
        })
    ),

    elem('preview')(
        match(function () {
            return this.ctx.url;
        })(
            tag()('a'),

            addAttrs()(function () {
                return {
                    href: this.ctx.url
                };
            })
        )
    )

);
