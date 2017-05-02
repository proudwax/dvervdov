block('nav')(
    elem('item')(
        tag()('a'),

        addAttrs()(function () {
            let attrs = {
                href: this.ctx.url
            };

            return attrs;
        })
    )
);
