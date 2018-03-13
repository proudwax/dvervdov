block('brands')(
    match(function (ctx, json) { return json.url; })(
        tag()('a'),

        addAttrs()((ctx, json) => ({ href: json.url, title: json.title }))
    )
);
