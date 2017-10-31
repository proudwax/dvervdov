block('serp').content()(function() {

    var data = [
        { title: 'test 1', text: 'more text', url: '#1' },
        { title: 'test 2', text: 'more text', url: '#2' },
        { title: 'test 3', text: 'more text', url: '#3' },
        { title: 'test 4', text: 'more text', url: '#4' },
        { title: 'test 5', text: 'more text', url: '#5' },
    ];

    var list = data.map(function(item) {
        return {
            elem: 'item',
            content: [
                {
                    block: 'snippet',
                    url: item.url,
                    title: item.title,
                    content: item.text
                }
            ]
        };
    });

    return [
        {
            elem: 'title',
            content: 'Search'
        },
        {
            elem: 'form-search',
            content: [
                {
                    block: 'form-search'
                }
            ]
        },
        {
            elem: 'list',
            content: list
        },
        {
            block: 'pager',
            mix: { block: this.block, elem: 'pager' }
        }
    ];

});
