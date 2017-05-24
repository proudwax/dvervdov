block('range')(
    js()((ctx, json) => {
        return {
            start: json.start,
            range: { 'min': json.min, '50%': (json.max - json.min)/2, 'max': json.max }
        }
    }),

    match((ctx, json) => { return json.title; })(
        content()((ctx, json) => {
            return [
                {
                    elem: 'title',
                    content: json.title
                },
                applyNext()
            ]
        })
    ),

    content()((ctx, json) => {

        let inputs = json.start.map((item) => {
            return {
                elem: 'input',
                mix: { block: 'row', elem: 'col', elemMods: { s: true }, },
                content: [
                    {
                        block: 'input',
                        mods: {
                            theme: 'dver',
                            size: 'l'
                        },
                        name: json.name,
                        val: item
                    }
                ]
            };
        })

        return [
            applyNext(),
            {
                elem: 'box',
                mix: { block: 'row' },
                content: inputs
            },
            {
                elem: 'control'
            }
        ]
    })

    // content()((ctx, json) => {
    //         return {
    //             elem: 'inner',
    //             cls: 'multirange original',
    //             content: applyNext()
    //         };
    //     }
    // ),
    //
    // elem('inner')(
    //     tag()('input'),
    //
    //     addAttrs()((ctx, json) => {
    //         return {
    //             type: 'range',
    //             multiple: true,
    //             value: '10, 80'
    //         }
    //     })
    // )
);


// <input type="text" name="filter_Price[]" value="0">
// <input type="text" name="filter_Price[]" value="17040">
