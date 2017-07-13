block('product').content()(function() {
    this.data = this.ctx.data = {
        'title': 'Product',
        'price': {
            'old': 10000,
            'current': 5000
        },
        'slider': [
            { image: 'http://lorempixel.com/800/400/', title: 'Text 1', description: 'description text', path: '#1' },
            { image: 'http://lorempixel.com/800/400/', title: 'Text 2', description: 'description text', path: '#2' },
            { image: 'http://lorempixel.com/800/400/', title: 'Text 3', description: 'description text', path: '#3' }
        ],
        'colors-list': [
            { name: 'Color 1', path: 'http://lorempixel.com/400/400/', current: true, url: '#product-1' },
            { name: 'Color 2', path: 'http://lorempixel.com/400/400/', current: false, url: '#product-2' },
            { name: 'Color 3', path: 'http://lorempixel.com/400/400/', current: false, url: '#product-3' }
        ],
        'glasses-list': [
            { name: 'Glass 1', path: 'http://lorempixel.com/400/400/', current: true, url: '#product-1' },
            { name: 'Glass 2', path: 'http://lorempixel.com/400/400/', current: false, url: '#product-2' },
            { name: 'Glass 3', path: 'http://lorempixel.com/400/400/', current: false, url: '#product-3' }
        ],
        vendor: { name: 'Vendor', path: '#vendor' },
        collection: 'Collection 1',
        material: 'Шпон'
    };



    return [
        {
            elem: 'details',
            mix: { block: 'content' },
            content: [
                {
                    elem: 'header',
                    content: [
                        {
                            elem: 'title',
                            content: this.data.title
                        }
                    ]
                },
                {
                    elem: 'slider',
                    content: [
                        {
                            block: 'slider'
                        }
                    ]
                },
                {
                    elem: 'options',
                    content: 'options'
                }
            ]
        },
        {
            elem: 'description',
            mix: { block: 'content' },
            content: 'description'
        }
    ]
});
