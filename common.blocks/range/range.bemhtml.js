block('range')(
    js()((ctx, json) => {
        return {
            start: json.start,
            range: { 'min': json.min, 'max': json.max }
        }
    }),

    content()((ctx, json) => {

        let inputs = json.start.map((item) => {
            return {
                elem: 'input',
                content: [
                    {
                        block: 'input',
                        mods: {
                            theme: 'islands',
                            size: 'm'
                        },
                         val: item
                    }
                ]
            };
        })

        return [
            {
                elem: 'control',
                content: applyNext()
            },
            {
                elem: 'box',
                content: inputs
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
