block('filter').mod('main', true).content()(function() {
    return {
        block: 'range',
        name: 'filter_Price[]',
        start: [90, 200],
        text: ['from', 'to'],
        min: 50,
        max: 300
    };
});
