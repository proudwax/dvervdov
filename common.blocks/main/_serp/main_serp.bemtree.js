block('main').mod('serp', true).content()(function() {

    return [
        {
            block: 'breadcrumbs'
        },
        {
            block: 'row',
            mix: { block: 'content' },
            content: [
                {
                    elem: 'col',
                    elemMods: { lw: 12, mw: 12, sw: 12 },
                    content: [
                        {
                            block: 'serp'
                        }
                    ]
                }
            ]
        }
    ];
});
