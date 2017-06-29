block('list').content()(function() {

    var list = [
        { text: 'vendor 1', url: '#vendor1' },
        { text: 'vendor 2', url: '#vendor2' },
        { text: 'vendor 3', url: '#vendor3' },
        { text: 'vendor 4', url: '#vendor4' }
    ];

    list = list.map(function (item) {
        return {
            elem: 'item',
            url: item.url,
            text: item.text
        };
    });

    return [
        {
            elem: 'title',
            content: 'Vendors list'
        },
        {
            elem: 'container',
            content: list
        }
    ];

});
