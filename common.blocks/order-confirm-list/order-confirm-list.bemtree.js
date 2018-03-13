block('order-confirm-list')(
    content()(function () {
        var data = this.data = this.ctx.data = [
            {
                'title': 'Александрия (Американский орех)',
                'image': 'http://dvervdom.com/netcat_files/images/bonaveri/domenico/products/alexandriya_116_1.jpg',
                'price': { 'old': 10000, 'current': 5000 },
                'count': 2,
                vendor: { name: 'Vendor', path: '#vendor' },
                collection: 'Collection 1',
                material: 'Шпон',
                url: '#1'
            },
            {
                'title': 'Александрия (Дуб светлый)',
                'image': 'http://dvervdom.com/netcat_files/images/bonaveri/domenico/products/alexandriya_44_3.jpg',
                'price': { 'old': 10000, 'current': 5000 },
                'count': 1,
                vendor: { name: 'Vendor', path: '#vendor' },
                collection: 'Collection 1',
                material: 'Шпон',
                url: '#2'
            }
        ];

        return [
            {
                elem: 'header',
                content: [
                    {
                        elem: 'title',
                        content: 'Состав заказа'
                    }
                ]
            },
            {
                elem: 'content',
                content: data.map(function (item) {
                    return {
                        elem: 'item',
                        content: [
                            {
                                block: 'product-order',
                                data: item
                            }
                        ]
                    };
                })
            },
            {
                elem: 'footer',
                content: [
                    {
                        elem: 'total',
                        content: [
                            'Общая стоимость:',
                            {
                                elem: 'cost',
                                content: data.reduce(function (prev, curr) {
                                    return prev + curr.price.current;
                                }, 0) + ' руб.'
                            }
                        ]
                    }
                ]
            }
        ]
    })
)
