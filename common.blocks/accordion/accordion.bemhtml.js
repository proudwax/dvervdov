block('accordion')(
    js()(true),

    content()(function() {

        var ctx = this.ctx,
            container = [];

        container =  ctx.items && ctx.items.map(function (item, i) {
            return {
                    elem: 'item',
                    content: [
                        {
                            block: 'checkbox',
                            mods: { theme: ctx.mods && ctx.mods.theme, size: ctx.mods && ctx.mods.size, type: 'button' },
                            mix: { block: ctx.block, elem: 'title' },
                            name: ctx.block + '-' + i,
                            val: i,
                            text: item.title
                        },
                        {
                            elem: 'content',
                            content: item.content
                        }
                    ]
                };
        });

        return {
            elem: 'container',
            content: container
        };
    })
);
