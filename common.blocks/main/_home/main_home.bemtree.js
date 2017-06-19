block('main').mod('home', true).content()(function() {

    return [
        {
            block: 'promo',
            mods: { main: true }
        },
        {
            block: 'brands-list'
        },
        {
            block: 'content',
            content: [
                {
                    block: 'similar'
                }
            ]
        },

        {
            block: 'row',
            content: [
                {
                    block: 'content',
                    mix: {
                        block: 'row',
                        elem: 'col',
                        elemMods: { lw: 8, mw: 7, sw: 12 },
                    },
                    content: [
                        {
                            block: 'article',
                            mods: { main: true },
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: { lw: 4, mw: 5, sw: 12 },
                    content: [
                        {
                            block: 'tabs',
                            mods: { theme: 'dver', type: 'button', size: 'l' },
                            tabs: [
                                {
                                   title: 'Заказ звонка',
                                   content: applyCtx(
                                       {
                                           block: 'form-callback'
                                       }
                                   )
                                },
                                {
                                   title: 'Заказ мастера',
                                   content: applyCtx(
                                       {
                                           block: 'form-master'
                                       }
                                   )
                                }
                            ]
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
