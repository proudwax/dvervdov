block('main').mod('home', true).content()(function() {

    return [
        {
            block: 'promo',
            mods: { main: true }
        },
        {
            block: 'content',
            content: [
                {
                    block: 'row',
                    content: [
                        {
                            block: 'filter',
                            mods: { main: true },
                            mix: {
                                block: 'row',
                                elem: 'col',
                                elemMods: { lw: 6, mw: 12, sw: 12 },
                            }
                        },
                        {
                            block: 'brands-list',
                            mix: {
                                block: 'row',
                                elem: 'col',
                                elemMods: { lw: 6, mw: 0, sw: 0 }
                            }
                        }
                    ]
                }
            ]
        },
        {
            block: 'content',
            content: [
                {
                    block: 'similar'
                },
                {
                    block: 'article',
                    mods: { main: true },
                    content: 'article'
                }
            ]
        }
    ];
});
