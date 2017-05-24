block('colors').content()(function() {

    let colors_base = this.data.filter.data[0].color_filter;
    let colors = this.data.filter.data[1].color;

    color_base = colors_base.map(function (item) {
        return {
            block: 'color',
            image: 'http://lorempixel.com/100/100/?' + Math.random(),
            type: item.type,
            name: item.name,
            val: item.val,
            text: item.text
        };
    });

    color = colors.map(function (item) {
        return {
            block: 'color',
            image: 'http://lorempixel.com/100/100/?' + Math.random(),
            type: item.type,
            name: item.name,
            val: item.val,
            text: item.text
        };
    });

    return [
        {
            elem: 'title',
            content: 'Colors base'
        },
        {
            elem: 'list',
            content: color_base
        },
        {
            elem: 'title',
            content: 'Colors'
        },
        {
            elem: 'list',
            content: color
        }
    ];

});
