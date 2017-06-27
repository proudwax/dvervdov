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
                            mods: { theme: 'dver', size: 'm' },
                            items: [
                                {
                                    title: 'Colors',
                                    content: applyCtx(
                                        {
                                            block: 'colors'
                                        }
                                    )
                                },
                                {
                                    title: 'second',
                                    content: applyCtx({
                                        block: 'checkbox-group',
                                        mods: {
                                            theme: 'islands',
                                            size: 'm',
                                        },
                                        name: 'checkbox-line',
                                        options: [
                                            {
                                                val: 1,
                                                text: 'Блок'
                                            },
                                            {
                                                val: 2,
                                                text: 'Элемент'
                                            },
                                            {
                                                val: 3,
                                                text: 'Модификатор'
                                            }
                                        ]
                                    })
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
