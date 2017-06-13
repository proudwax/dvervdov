block('glasses').content()(function() {

    let glasses = this.data.filter.data[2].glass;

    // console.log(glasses);

    glass = glasses.map(function (item) {
        return {
            elem: 'item',
            mix: { block: 'row', elem: 'col', elemMods : { sw : 12, mw : 4, lw: 6 } },
            content: [
                {
                    block: 'checkbox',
                    mods: {
                        theme: 'dver',
                        size: 'l',
                        image: true,
                        text: 'ellipsis',
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
            content: 'Glasses'
        },
        {
            elem: 'list',
            mix: { block: 'row' },
            content: glass
        }
    ];

});
