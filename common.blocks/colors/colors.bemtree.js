block('colors').content()(function() {

    let colors_base = this.data.filter.data[0].color_filter;
    let colors = this.data.filter.data[1].color;

    color_base = colors_base.map(function (item) {
        return {
            elem: 'item',
            mix: { block: 'row', elem: 'col', elemMods : { sw : 12, mw : 6 } },
            content: [
                {
                    block: 'checkbox',
                    mods: {
                        theme: 'dver',
                        size: 'l',
                        image: true,
                        checked: item.checked
                    },
                    image: {
                        url: 'http://lorempixel.com/100/100/?' + Math.random()
                    },
                    name: item.name,
                    val: item.val,
                    text: item.text
                }
            ]
        };
    });

    color = colors.map(function (item) {
        return {
            elem: 'item',
            mix: { block: 'row', elem: 'col', elemMods : { sw : 12, mw : 6 } },
            content: [
                {
                    block: 'checkbox',
                    mods: {
                        theme: 'dver',
                        size: 'l',
                        image: true,
                        checked: item.checked
                    },
                    image: {
                        url: 'http://lorempixel.com/100/100/?' + Math.random()
                    },
                    name: item.name,
                    val: item.val,
                    text: item.fields.Name
                }
            ]
        };
    });

    return [
        {
            elem: 'title',
            content: 'Colors base'
        },
        {
            elem: 'list',
            mix: { block: 'row' },
            content: color_base
        },
        {
            elem: 'title',
            content: 'Colors'
        },
        {
            elem: 'list',
            mix: { block: 'row' },
            content: color
        }
    ];

});
