block('cart').content()(function () {
    var data = [
        {
            'title': 'Александрия (Американский орех)',
            'image': 'http://dvervdom.com/netcat_files/images/bonaveri/domenico/products/alexandriya_116_1.jpg',
            'price': 5000,
            'count': 2,
            name: '540:2',
            vendor: 'Vendor',
            collection: 'Collection 1',
            material: 'Шпон',
            url: '#1'
        },
        {
            'title': 'Александрия (Дуб светлый)',
            'image': 'http://dvervdom.com/netcat_files/images/bonaveri/domenico/products/alexandriya_44_3.jpg',
            'price': 7500,
            'count': 1,
            name: '540:4',
            vendor: 'Vendor',
            collection: 'Collection 1',
            material: 'Шпон',
            url: '#2'
        }
    ];

    return [
        {
            block: 'row',
            content: [
                {
                    elem: 'col',
                    elemMods: { lw: 8, mw: 9, sw: 12 },
                    content: [
                        {
                            block: 'cart-list',
                            mix: { block: 'content' },
                            data: data
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: { lw: 4, mw: 3, sw: 12 },
                    content: [
                        {
                            block: 'cart-action',
                            mix: { block: 'content' },
                            unit: 'руб.',
                            data: data
                        }
                    ]
                }
            ]
        }
    ];
});
