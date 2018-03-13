block('checkbox-group').mod('image')(
    content()((ctx, json) => {
        return applyNext().map(function (item, i) {
            item[1].mods.image = true;
            item[1].image = ctx.ctx.options[i].image;

            return item;
        });
    }),

    elem('image')(
        tag()('span')
    )
);
