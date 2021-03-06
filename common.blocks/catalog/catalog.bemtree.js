block('catalog').content()(function() {

    let products = this.data.products.map(function (item) {
        return {
            elem: 'col',
            elemMods: { lw: 4, mw: 6, sw: 12 },
            content: [
                {
                    block: 'product-card',
                    url: item.path,
                    title: item.name,
                    content: [
                        {
                            elem: 'image',
                            url: item.image
                        },
                        {
                            elem: 'title',
                            content: item.name
                        },
                        {
                            elem: 'price',
                            content: [
                                {
                                    elem: 'old',
                                    content: item.price.old + ' руб.'
                                },
                                {
                                    elem: 'current',
                                    content: item.price.current + ' руб.'
                                }
                            ]
                        },
                        {
                            elem: 'vendor',
                            url: item.vendor.path,
                            content: item.vendor.name
                        }
                    ]
                }
            ]
        };
    });

    return [
        {
            elem: 'title',
            content: 'Recomended products'
        },
        {
            block: 'row',
            content: products
        },
        {
            block: 'pager',
            mix: { block: this.block, elem: 'pager' }
        }
    ];

});
