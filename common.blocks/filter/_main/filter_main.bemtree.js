block('filter').mod('main', true).content()(function() {

    return [
        {
            elem: 'field',
            content: [
                {
                    block: 'colors'
                }
            ]
        },
        {
            elem: 'field',
            mix: { block: 'row', elem: 'col', elemMods : { sw : 0 } },
            content: [
                {
                    block: 'glasses'
                }
            ]
        },
        {
            elem: 'field',
            content: [
                {
                    block: 'range',
                    title: 'Price (RUR)',
                    name: 'filter_Price[]',
                    start: [90, 200],
                    text: ['from', 'to'],
                    min: 50,
                    max: 300
                }
            ]
        },
        {
            elem: 'action',
            mix: { block: 'row' },
            content: [
                {
                    elem: 'reset',
                    mix: { block: 'row', elem: 'col', elemMods : { sw : 12, mw : 6, lw: 6, sol : true } },
                    content: [
                        {
                            block: 'button',
                            mods: {
                                theme: 'dver',
                                size: 'l',
                                type: 'submit',
                                width: 'available'
                            },
                            val: 'Reset',
                            text: 'Reset'
                        }
                    ]
                },
                {
                    elem: 'submit',
                    mix: { block: 'row', elem: 'col', elemMods : { sw : 12, mw : 6, lw: 6 } },
                    content: [
                        {
                            block: 'button',
                            mods: {
                                theme: 'dver',
                                size: 'l',
                                type: 'submit',
                                view: 'action',
                                width: 'available'
                            },
                            text: 'Search'
                        }
                    ]
                }
            ]
        }
    ];
});
