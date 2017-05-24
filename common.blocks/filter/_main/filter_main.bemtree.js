block('filter').mod('main', true).content()(function() {
    return [
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
            elem: 'field',
            content: 'colors'
        }
    ];
});
