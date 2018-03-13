block('form-simple')(
    js()(true),

    tag()('form'),

    addAttrs()(function (ctx, json) {
        return {
            method: json.method || 'get',
            action: json.action || ''
        }
    })
);
