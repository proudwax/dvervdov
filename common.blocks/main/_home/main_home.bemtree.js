block('main').mod('home', true).content()(function() {

    return [
        {
            block: 'promo',
            mods: { main: true }
        },
        {
            block: 'brands-list'
        },
        // {
        //     block: 'row',
        //     content: [

        //         {
        //             elem: 'col',
        //             elemMods: { lw: 4, mw: 6, sw: 12 },
        //             content: [
        //                 {
        //                     block: 'form',
        //                     mods: { callback: true }
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     block: 'content',
        //     content: [
        //         {
        //             block: 'row',
        //             content: [
        //                 {
        //                     block: 'filter',
        //                     mods: { main: true },
        //                     mix: {
        //                         block: 'row',
        //                         elem: 'col',
        //                         elemMods: { lw: 6, mw: 12, sw: 12 },
        //                     }
        //                 },
        //                 {
        //                     elem: 'col',
        //                     elemMods: { lw: 6, mw: 12, sw: 0 },
        //                     mix: { block: 'row' },
        //                     content: [
        //                         {
        //                             block: 'brands-list',
        //                             mix: {
        //                                 block: 'row',
        //                                 elem: 'col',
        //                                 elemMods: { lw: 12, mw: 6 }
        //                             }
        //                         },
        //                         {
        //                             block: 'row',
        //                             elem: 'col',
        //                             elemMods: { lw: 12, mw: 6 },
        //                             content: [
        //                                 {
        //                                     block: 'form',
        //                                     mods: { callback: true }
        //                                 }
        //                             ]
        //                         }
        //                     ]
        //                 }
        //             ]
        //         }
        //     ]
        // },
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
                                           block: 'form',
                                           mods: { callback: true },
                                       }
                                   )
                                },
                                {
                                   title: 'Заказ звонка',
                                   content: applyCtx(
                                       {
                                           block: 'form',
                                           mods: { callback: true },
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
