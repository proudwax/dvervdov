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
                return false;
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
                    content: item.text
                },
                { tag: 'div', cls: 'tile__banner', attrs: { style: 'background-image: url(' + item.image + '?' + Math.random() +')' } },
            ]
        };
    });

    function getTile() {
        return i++;
    }

    return {
        block: 'row',
        content: [
            {
                elem: 'col',
                elemMods: { mw: 8, sw: 12 },
                content: [
                    {
                        block: 'row',
                        mods: { vertical: true },
                        content: [
                            {
                                elem: 'col',
                                elemMods: { mw: 12 },
                                content: tile[getTile()]
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
                                                        content: tile[getTile()]
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'col',
                                                elemMods: { mw: 6, sw: 12 },
                                                content: [
                                                    {
                                                        block: 'row',
                                                        mods: { vertical: true },
                                                        content: [
                                                            {
                                                                elem: 'col',
                                                                elemMods: { mw: 12 },
                                                                content: tile[getTile()]
                                                            },
                                                            {
                                                                elem: 'col',
                                                                elemMods: { mw: 12 },
                                                                content: tile[getTile()]
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
                elemMods: { mw: 4, sw: 12 },
                content: [
                    {
                        block: 'row',
                        mods: { vertical: true },
                        content: [
                            tile[getTile()],
                            tile[getTile()]
                        ]
                    }
                ]
            }
        ]
    };

});
