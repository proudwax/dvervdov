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
                            range: [1, 30]
                        }
                    ]
                },
                {
                    elem: 'price',
                    content: data.price.current + ' руб.'
                }
            ]
        }
    ]
});
