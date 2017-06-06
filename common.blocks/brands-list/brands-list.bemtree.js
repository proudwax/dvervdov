block('brands-list').content()(function() {

    let brands = this.data.brands.map(function (item) {
        return {
            elem: 'col',
            // elemMods: { lw: 6, mw: 6, sw: 12 },
            elemMods: { l:true, m: true, sw: 0 },
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
                    block: 'row',
                    mods: { sac: true },
                    content: brands
                }
            ]
        }
    ];

});
