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
            var image = this.ctx.image ? { elem: 'image', url: this.ctx.image } : null;

            return [
                image,
                {
                    elem: 'text',
                    content: this.ctx.text
                }
            ];
        })
    ),

    elem('image')(
        tag()('span'),
        
        content()( (ctx, json) => {
            return {
                block: 'image',
                url: json.url
            }
        })
    ),

    elem('text')(
        tag()('span')
    )
);
