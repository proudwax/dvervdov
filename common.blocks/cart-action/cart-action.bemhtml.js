block('cart-action')(
    js()(function (node, ctx) {
        return {
            unit: ctx.unit
        }
    }),

    content()(function () {
        return {
            elem: 'container',
            content: applyNext()
        }
    })
);
