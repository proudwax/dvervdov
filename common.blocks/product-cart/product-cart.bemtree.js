block('product-cart').content()(function () {
    var data = this.data = this.ctx.data;

    return [
        {
            elem: 'image',
            url: data.url,
            content: [
                {
                    block: 'image',
                    url: data.image + '?' + Math.random()
                }
            ]
        },
        {
            elem: 'container',
            content: [
                {
                    elem: 'title',
                    url: data.url,
                    content: data.title
                },
                {
                    elem: 'count',
                    content: [
                        {
                            block: 'count',
                            count: data.count,
                            range: [1, 30],
                            name: 'cart[1][1]'
                        }
                    ]
                },
                {
                    elem: 'price',
                    // content: data.price.current + ' руб.'
                    content: [
                        {
                            block: 'product-cart-price',
                            count: data.count,
                            price: data.price.current,
                            unit: 'руб.'
                        }
                    ]
                },
                {
                    elem: 'remove',
                    content: [
                        {
                            block: 'button',
                            mods: { theme: 'dver', size: 'm', type: 'submit' },
                            name: 'cart[1][1]',
                            val: 0,
                            icon: {
                                block: 'icon',
                                mods: { remove: true }
                            }
                        }
                    ]
                }
            ]
        }
    ]
});
