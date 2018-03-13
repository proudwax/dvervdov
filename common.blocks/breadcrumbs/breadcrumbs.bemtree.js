block('breadcrumbs').content()(function() {

    var links = [
        { url: '/', content: 'Main' },
        { url: '/catalog/', content: 'Catalog and Catalog' },
        { url: '/catalog/#vendor', content: 'Vendor long long phrase' }
    ];

    return links.map(function (item) {
        return {
            elem: 'item',
            url: item.url,
            content: item.content
        }
    });

});
