block('brands-list').content()(function() {

    let brands = this.data.brands.map(function (item) {
        return {
            elem: 'col',
            elemMods: { lw: 6, mw: 6, sw: 12 },
            content: [
                {
                    block: 'brands',
                    url: item.path,
                    title: item.name,
                    content: [
                        {
                            elem: 'image',
                            content: [
                                {
                                    block: 'image',
                                    url: item.image + '?' + Math.random(),
                                    alt: item.name
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    });

    return [
        {
            elem: 'title',
            content: 'List brands'
        },
        {
            block: 'row',
            content: brands
        }
    ];

});
