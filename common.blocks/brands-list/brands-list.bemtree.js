block('brands-list').content()(function() {

    let brands = this.data.brands.map(function (item) {
        return {
            elem: 'col',
            elemMods: { s: true },
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
            elem: 'inner',
            content: [
                {
                    elem: 'title',
                    content: 'List brands'
                },
                {
                    elem: 'content',
                    content: [
                        {
                            block: 'row',
                            mods: { sac: true },
                            content: brands
                        }
                    ]
                }
            ]
        }
    ];

});
