block('similar').content()(function() {

    let products = this.data.products.map(function (item) {
        return {
            elem: 'col',
            elemMods: { lw: 3, mw: 4, sw: 12 },
            content: [
                {
                    block: 'product-card',
                    src: item.image,
                    path: item.path,
                    name: item.name,
                    vendor: item.vendor,
                    price: item.price
                }
            ]
        };
    });

    return [
        {
            elem: 'title',
            content: 'Рекомендуемые товары'
        },
        {
            block: 'row',
            content: products
        }
    ];

});
