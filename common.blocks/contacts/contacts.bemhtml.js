block('contacts')(
    elem('phone')(
        tag()('a'),

        addAttrs()(function () {

            let attrs = {
                href: 'tel:' + this.ctx.tel.replace(/[^0-9]/g, '').replace(/^[7-8]/g, '+7')
            };

            return attrs;
        })
    ),

    content()(function () {
        return [
            applyNext(),
            {
                elem: 'bg'
            }
        ];
    })
);
