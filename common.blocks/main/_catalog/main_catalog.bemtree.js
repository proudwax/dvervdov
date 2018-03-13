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
                    elemMods: { lw: 12, mw: 12, sw: 0, border: 'bottom' },
                    content: [
                        {
                            block: 'list'
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: { lw: 3, mw: 4, sw: 0, border: 'right' },
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
