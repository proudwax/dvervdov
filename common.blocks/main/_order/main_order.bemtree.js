block('main').mod('cart', true).content()(function() {

    return [
        {
            block: 'row',
            content: [
                {
                    elem: 'col',
                    elemMods: { lw: 7, mw: 12, sw: 12 },
                    content: [
                        {
                            block: 'order-confirm-list',
                            mix: { block: 'content' }
                        }
                    ] 
                },
                {
                    elem: 'col',
                    elemMods: { lw: 5, mw: 12, sw: 12 },
                    content: [
                        {
                            block: 'order-contacts',
                            mix: { block: 'content' },
                        }
                    ]
                }
            ]
        }
    ];
});
