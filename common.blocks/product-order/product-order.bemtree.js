block('product-order').content()(function() {
    var data = this.data = this.ctx.data = {
        'title': 'Product',
        'image': 'http://lorempixel.com/80/200/',
        'price': {
            'old': 10000,
            'current': 5000
        },
        'count': 1,
        vendor: { name: 'Vendor', path: '#vendor' },
        collection: 'Collection 1',
        material: 'Шпон'
    };

    return [
        {
            elem: 'image',
            content: [
                {
                    block: 'image',
                    url: data.image + '?' + Math.random()
                }
            ]
        },
        {
            elem: 'container',
            content: [
                {
                    elem: 'title',
                    content: data.title
                },
                {
                    elem: 'count',
                    content: data.count + ' шт.'
                },
                {
                    elem: 'price',
                    content: data.price.current
                },
                {
                    elem: 'remove',
                    content: 'X'
                }
            ]
        }
    ]
});
