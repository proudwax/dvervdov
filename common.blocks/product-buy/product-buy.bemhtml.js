block('product-buy')(
    match(function (node, ctx) { return !ctx.js; })(
        js()(function (node, ctx) {
            return {
                name: ctx.name
            }
        })
    ),

    addAttrs()(function (node, ctx) {
        return {
            method: ctx.method || 'get',
            action: ctx.action
        }
    }),

    content()(function (node, ctx) {
        var hiddenInputs = ctx.hiddenInputs.map(function (item) {
            return {
                tag: 'input',
                attrs: { name: item.name, type: 'hidden', value: item.value }
            };
        }); 

        return [
            hiddenInputs,
            applyNext(),
            {
                block: 'modal',
                mix: {block: this.block, elem: 'modal' },
                mods: { theme: 'dver', autoclosable: true }
            }
        ];
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
            content: apply('content')
        }
    })
);
