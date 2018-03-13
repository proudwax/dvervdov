block('product-order').content()(function() {
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
                    content: data.count + ' шт.'
                },
                {
                    elem: 'price',
                    content: data.price.current + ' руб.'
                }
            ]
        }
    ]
});
