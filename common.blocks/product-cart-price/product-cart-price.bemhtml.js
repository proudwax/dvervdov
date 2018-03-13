block('product-cart-price')(
    addJs()(function (ctx, json) {
        return {
            price: json.price,
            count: json.count,
            unit: json.unit
        }
    }),

    match(function (ctx, json) { return json.count > 1 })(
        content()(function (ctx, json) {
            return [
                {
                    elem: 'total',
                    content: json.price * json.count + ' ' + json.unit || 'руб.'
                },
                {
                    elem: 'price-count',
                    content: json.price + ' ' + (json.unit || 'руб.') + ' × ' + json.count
                }
            ];
        })
    ),

    match(function (ctx, json) { return json.count == 1 })(
        content()(function (ctx, json) {
            return {
                elem: 'total',
                content: json.price + ' ' + json.unit || 'руб.'
            };
        })
    ),

    elem('total')(
        tag()('span')
    ),

    elem('price-count')(
        tag()('span')
    )

);
