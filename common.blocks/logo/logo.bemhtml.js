block('logo')(
    tag()('a'),

    addAttrs()(function () {
        let attrs = {
            href: '/'
        };

        return attrs;
    })
);
