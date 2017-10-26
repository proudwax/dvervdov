block('serp').content()(function() {

    return [
        {
            elem: 'title',
            content: 'Search'
        },
        {
            block: 'row',
            content: 'items'
        },
        {
            block: 'pager',
            mix: { block: this.block, elem: 'pager' }
        }
    ];

});
