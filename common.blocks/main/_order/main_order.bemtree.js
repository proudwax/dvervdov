block('main').mod('order', true).content()(function() {

    return [
        {
            block: 'order-confirm-list',
            mix: { block: 'content' }
        },
        {
            block: 'order-contacts',
            mix: { block: 'content' },
        }
    ];
});
