block('content').mod('main', true).content()(function() {
    return [
        {
                block: 'row',
                content: [
                    {
                        elem: 'col',
                        elemMods: { lw: 6, mw: 6, sw: 12 },
                        content: [
                            {
                                block: 'filter',
                                content: 'filter'
                            }
                        ]
                    },
                    {
                        elem: 'col',
                        elemMods: { lw: 6, mw: 6, sw: 12 },
                        content: [
                            {
                                block: 'brands-list'
                            }
                        ]
                    }
                ]
        },
        {
            elem: 'similar',
            content: [
                {
                    block: 'similar'
                }
            ]

        },
        {
            elem: 'article',
            content: [
                {
                    block: 'article',
                    mods: { main: true },
                    content: 'article'
                }
            ]
        }

    ];
});
