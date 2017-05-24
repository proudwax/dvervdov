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
                    block: 'button',
                    mods: {
                        theme: 'dver',
                        size: 'l',
                        type: 'submit'
                    },
                    val: 'Reset',
                    text: 'Reset'
                },
                {
                    block: 'button',
                    mods: {
                        theme: 'dver',
                        size: 'l',
                        type: 'submit',
                        view: 'action'
                    },
                    text: 'Search'
                }
            ]
        }
    ];
});
