block('image')(
    js()(true),

    addAttrs()((ctx, json) => {
        return {
            'data-url': json.url,
            src: false
        };
    })

    // mods()((ctx, json) => {
    //     return {
    //         lazy: true
    //     };
    // })

);
