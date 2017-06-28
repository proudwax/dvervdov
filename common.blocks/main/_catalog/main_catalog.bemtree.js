block('main').mod('catalog', true).content()(function() {

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
                    elemMods: { lw: 3, mw: 4, sw: 0, border: true },
                    content: [
                        {
                            block: 'form-filter'
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: { lw: 9, mw: 8, sw: 12 },
                    content: [
                        {
                            block: 'catalog'
                        }
                    ]
                }
            ]
        }
    ];
});
