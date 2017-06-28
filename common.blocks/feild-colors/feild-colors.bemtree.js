block('feild-colors').content()(function() {

    let colors_base = this.data.filter.data[0].color_filter;
    let colors = this.data.filter.data[1].color;

    color_base = colors_base.map(function (item) {
        return {
            image: {
                url: 'http://lorempixel.com/100/100/?' + Math.random()
            },
            val: item.val,
            text: item.text
        };
    });

    color = colors.map(function (item) {
        return {
            image: {
                url: 'http://lorempixel.com/100/100/?' + Math.random()
            },
            val: item.val,
            text: item.fields.Name
        };
    });

    return [
        {
            block: 'form-field',
            name: colors_base[0].name,
            mods : {
                theme: 'dver',
                type: 'checkbox-group',
                size: 'l'
            },
            content : [
                {
                    block: 'checkbox-group',
                    mods: {
                        theme: 'dver',
                        size: 'l',
                        image: true
                    },
                    name: colors_base[0].name,
                    options: color_base
                }
            ]
        },
        {
            elem: 'divider'
        },
        {
            block: 'form-field',
            name: colors[0].name,
            mods : {
                theme: 'dver',
                type: 'checkbox-group',
                size: 'l'
            },
            content : [
                {
                    block: 'checkbox-group',
                    mods: {
                        theme: 'dver',
                        size: 'l',
                        image: true
                    },
                    name: colors[0].name,
                    options: color
                }
            ]
        }
    ];

});
