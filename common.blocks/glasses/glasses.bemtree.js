block('glasses').content()(function() {

    let glasses = this.data.filter.data[2].glass;

    glass = glasses.map(function (item) {
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
                    name: glasses[0].name,
                    options: glass
                }
            ]
        }
    ];

});
