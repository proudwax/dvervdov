block('breadcrumbs').content()(function() {

    var links = [
        { url: '/', content: 'Main' },
        { url: '/catalog/', content: 'Catalog' },
        { url: '/catalog/#vendor', content: 'Vendor' }
    ];

    return links.map(function (item) {
        return {
            elem: 'item',
            url: item.url,
            content: item.content
        }
    });

});
