block('cart')(
    js()(true),

    // tag()('form'),

    addAttrs()(function (node, ctx) {
        return {
            method: ctx.method || 'get',
            action: ctx.action
        }
    }),

    replace()(function (node, ctx) {
        return {
            block: 'form',
            mix: [].concat(
                apply('mix'),
                {
                    block: node.block,
                    mods: apply('mods'),
                    js: apply('js')
                }
            ),
            action: ctx.action,
            method: ctx.method,
            content: ctx.content
        }
    })
);
