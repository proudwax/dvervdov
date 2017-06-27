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
                        // {
                        //     block: 'filter',
                        //     mods: { main: true }
                        // }
                        {
                            block: 'accordion',
                            mods: { theme: 'dver', size: 'l' },
                            items: [
                                {
                                    title: 'Colors',
                                    checked: true,
                                    content: applyCtx(
                                        {
                                            block: 'colors'
                                        }
                                    )
                                },
                                {
                                    title: 'Glasses',
                                    content: applyCtx(
                                        {
                                            block: 'glasses'
                                        }
                                    )
                                },
                                {
                                    title: 'third',
                                    content: '3'
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: { lw: 9, mw: 8, sw: 12 },
                    content: [
                        {
                            block: 'similar'
                        }
                    ]
                }
            ]
        },
        {
            block: 'service-offers'
        }
    ];
});
