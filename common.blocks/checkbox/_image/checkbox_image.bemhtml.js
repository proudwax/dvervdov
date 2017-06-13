block('checkbox').mod('image')(
    content()((ctx, json) => {

        return applyNext().map(function (item) {
            if (item.elem == 'box') {
                item = [
                    item,
                    {
                        elem: 'image',
                        content: [
                            {
                                block: 'image',
                                url: ctx.ctx.image.url,
                                alt: ctx.ctx.text
                            }
                        ]
                    }
                ]
            }
            return item;
        });
    }),

    elem('image')(
        tag()('span')
    )
);
