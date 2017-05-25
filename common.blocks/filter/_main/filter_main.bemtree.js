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
            content: [
                {
                    elem: 'submit',
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
                },
                {
                    elem: 'reset',
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
                }
            ]
        }
    ];
});
