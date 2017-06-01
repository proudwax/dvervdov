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
                            elem: 'col',
                            elemMods: { lw: 6, mw: 12, sw: 0 },
                            mix: { block: 'row' },
                            content: [
                                {
                                    block: 'brands-list',
                                    mix: {
                                        block: 'row',
                                        elem: 'col',
                                        elemMods: { lw: 12, mw: 6 }
                                    }
                                },
                                {
                                    block: 'row',
                                    elem: 'col',
                                    elemMods: { lw: 12, mw: 6 },
                                    content: [
                                        {
                                            block: 'form',
                                            mods: { callback: true }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'service-offers'
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
