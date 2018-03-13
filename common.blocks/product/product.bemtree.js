block('product').content()(function() {
    this.data = this.ctx.data = {
        'title': 'Product',
        'price': {
            'old': 10000,
            'current': 5000
        },
        'slider': [
            { image: '../../common.blocks/product/images/dver1.jpg', title: 'Text 1', description: 'description text', path: '#1' },
            { image: '../../common.blocks/product/images/dver2.jpg', title: 'Text 2', description: 'description text', path: '#2' },
            { image: '../../common.blocks/product/images/dver3.jpg', title: 'Text 3', description: 'description text', path: '#3' },
            { image: '../../common.blocks/product/images/dver4.jpg', title: 'Text 4', description: 'description text', path: '#4' }
        ],
        'colors-list': [
            { name: 'Color long name 1', path: 'http://lorempixel.com/400/400/', current: true, url: '#product-1' },
            { name: 'Color 2', path: 'http://lorempixel.com/400/400/', current: false, url: '#product-2' },
            { name: 'Color 3', path: 'http://lorempixel.com/400/400/', current: false, url: '#product-3' }
        ],
        'glasses-list': [
            { name: 'Glass 1', path: 'http://lorempixel.com/400/400/', current: false, url: '#product-1' },
            { name: 'Glass 2', path: 'http://lorempixel.com/400/400/', current: true, url: '#product-2' },
            { name: 'Glass 3', path: 'http://lorempixel.com/400/400/', current: false, url: '#product-3' }
        ],
        gallery: [
            { image: '../../common.blocks/product/images/dver1.jpg' },
            { image: '../../common.blocks/product/images/dver2.jpg' },
            { image: '../../common.blocks/product/images/dver3.jpg' },
            { image: 'http://lorempixel.com/1024/1024/' },
            { image: 'http://lorempixel.com/1024/1024/' },
            { image: 'http://lorempixel.com/1024/1024/' },
            { image: 'http://lorempixel.com/1024/1024/' },
            { image: 'http://lorempixel.com/1024/1024/' },
            { image: 'http://lorempixel.com/1024/1024/' }
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
                            elem: 'preview',
                            url: 'http://dver.yazvyazda.ru/netcat_files/images/bonaveri/domenico/products/alexandriya_78_1.jpg',
                            content: [
                                {
                                    block: 'image',
                                    url: 'http://dver.yazvyazda.ru/netcat_files/images/bonaveri/domenico/products/alexandriya_78_1.jpg',
                                    alt: 'Previev'
                                }
                            ]
                        },
                        {
                            block: 'product-slider',
                            items: this.data.slider
                        }
                    ]
                },
                {
                    elem: 'options',
                    content: [
                        {
                            elem: 'options-item',
                            mix: { elem: 'row' },
                            content: [
                                {
                                    elem: 'price',
                                    mix: { elem: 'col', elemMods: { half: true } },
                                    content: [
                                        {
                                            elem: 'price-old',
                                            content: this.data.price.old
                                        },
                                        {
                                            elem: 'price-current',
                                            content: this.data.price.current
                                        }
                                    ]
                                },
                                {
                                    elem: 'buy',
                                    mix: { elem: 'col', elemMods: { half: true } },
                                    content: [
                                        {
                                            block: 'product-buy'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'options-item',
                            content: [
                                {
                                    block: 'product-list',
                                    title: 'Features',
                                    options: [this.data.vendor.name, this.data.collection, this.data.material]
                                }
                            ]
                        },
                        {
                            elem: 'options-item',
                            content: [
                                {
                                    block: 'product-options',
                                    title: 'Colors',
                                    options: this.data['colors-list']
                                }
                            ]
                        },
                        {
                            elem: 'options-item',
                            content: [
                                {
                                    block: 'product-options',
                                    title: 'Glasses',
                                    options: this.data['glasses-list']
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            elem: 'gallery',
            content: [
                {
                    block: 'product-gallery',
                    items: this.data.gallery
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
