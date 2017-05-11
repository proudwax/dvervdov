block('tile').mod('main', true).content()(function() {

    let _block = this.ctx;

    function getTileSize (i) {
        return i == 0 ?  { 'size': 'wide' } : false;
    }

    let tile = this.data.promo.map(function (item, i) {
        return {
            elem: 'item',
            elemMods: getTileSize(i),
            url: item.path,
            content: [
                {
                    elem: 'title',
                    content: item.text
                },
                {
                    block: 'image',
                    mix: { block: _block.block, elem: 'image' },
                    alt: item.text,
                    url: item.image + '?' + Math.random()
                }
            ]
        };
    });

    // return {
    //     elem: 'row',
    //     content: tile
    // };

    return {
        elem: 'row',
        content: [
            {
                elem: 'row',
                elemMods: { vertical: true, w: 8 },
                content: [
                    {
                        elem: 'item',
                        content: 'text'
                    },
                    {
                        elem: 'row',
                        content: [
                            {
                                elem: 'item',
                                content: 'text'
                            },
                            {
                                elem: 'row',
                                elemMods: { vertical: true },
                                content: [
                                    {
                                        elem: 'item',
                                        content: 'text'
                                    },
                                    {
                                        elem: 'item',
                                        content: 'text'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                elem: 'row',
                elemMods: { vertical: true },
                content: [
                    {
                        elem: 'item',
                        content: 'text'
                    },
                    {
                        elem: 'item',
                        content: 'text'
                    }
                ]
            }
        ]
    }

});
