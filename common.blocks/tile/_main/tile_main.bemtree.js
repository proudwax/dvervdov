block('tile').mod('main', true).content()(function() {

    let _block = this.ctx,
        i = 0;

    function getTileSize (i) {
        switch (i) {
            case 0:
                return { 'size': 'tall' };
                break;
            case 1:
                return { 'size': 'tall' };
                break;
            case 2:
                return { 'size': 'low' };
                break;
            case 3:
                return { 'size': 'low' };
                break;
            default:
                return { 'size': 'tall' };
        }
    }

    let tile = this.data.promo.map(function (item, i) {
        return {
            block: _block.block,
            elem: 'item',
            elemMods: getTileSize(i),
            url: item.path,
            content: [
                {
                    elem: 'title',
                    content: item.title
                },
                {
                    elem: 'description',
                    content: item.description
                },
                {
                    tag: 'div',
                    cls: 'tile__banner',
                    attrs: {
                        style: 'background-image: url(' + item.image + '?' + Math.random() +')'
                    }
                }
            ]
        };
    });

    return {
        block: 'row',
        content: [
            {
                elem: 'col',
                elemMods: { lw: (tile.length > 4 ? 8 : 12), mw: 12, sw: 12 },
                content: [
                    {
                        block: 'row',
                        mods: { vertical: true },
                        content: [
                            {
                                elem: 'col',
                                elemMods: { mw: 12 },
                                content: tile[i++]
                            },
                            {
                                elem: 'col',
                                elemMods: { mw: 12 },
                                content: [
                                    {
                                        block: 'row',
                                        content: [
                                            {
                                                elem: 'col',
                                                elemMods: { mw: 6, sw: 12 },
                                                content: [
                                                    {
                                                        block: 'row',
                                                        mods: { vertical: true },
                                                        content: tile[i++]
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'col',
                                                elemMods: { mw: 6, sw: 0 },
                                                content: [
                                                    {
                                                        block: 'row',
                                                        mods: { vertical: true },
                                                        content: [
                                                            {
                                                                elem: 'col',
                                                                elemMods: { mw: 12 },
                                                                content: tile[i++]
                                                            },
                                                            {
                                                                elem: 'col',
                                                                elemMods: { mw: 12 },
                                                                content: tile[i++]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                elem: 'col',
                elemMods: { lw: 4, mw: 0, sw: 0 },
                content: [
                    {
                        block: 'row',
                        mods: { vertical: true },
                        content: [
                            tile[i++],
                            tile[i++]
                        ]
                    }
                ]
            }
        ]
    };

});
