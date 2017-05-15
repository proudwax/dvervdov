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
                    price: item.price    
                }
            ]
        };
    });

    return {
        block: 'row',
        content: products
    };

});
