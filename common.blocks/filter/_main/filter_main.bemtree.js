block('content').mod('main', true).content()(function() {
    return [
        {
                block: 'row',
                content: [
                    {
                        block: 'filter',
                        mix: {
                            block: 'row',
                            elem: 'col',
                            elemMods: { lw: 6, mw: 6, sw: 12 },
                        },
                        content: 'filter'
                    },
                    {
                        block: 'brands-list',
                        mix: {
                            block: 'row',
                            elem: 'col',
                            elemMods: { lw: 6, mw: 6, sw: 12 }
                        }
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
