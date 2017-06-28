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
                        // {
                        //     block: 'accordion',
                        //     mods: { theme: 'dver', size: 'l' },
                        //     items: [
                        //         {
                        //             title: 'Colors',
                        //             checked: true,
                        //             content: applyCtx(
                        //                 {
                        //                     block: 'colors'
                        //                 }
                        //             )
                        //         },
                        //         {
                        //             title: 'Glasses',
                        //             content: applyCtx(
                        //                 {
                        //                     block: 'glasses'
                        //                 }
                        //             )
                        //         },
                        //         {
                        //             title: 'Price (RUR)',
                        //             checked: true,
                        //             content: applyCtx({
                        //                 block: 'range',
                        //                 name: 'filter_Price[]',
                        //                 start: [90, 200],
                        //                 text: ['from', 'to'],
                        //                 min: 50,
                        //                 max: 300
                        //             })
                        //         }
                        //     ]
                        // }
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
