block('cart-list')(
    content()(function () {
        var data = this.data = this.ctx.data;

        return [
            {
                elem: 'header',
                content: [
                    {
                        elem: 'title',
                        content: 'Состав заказа'
                    }
                ]
            },
            {
                elem: 'content',
                content: data.map(function (item) {
                    return {
                        elem: 'item',
                        content: [
                            {
                                block: 'product-cart',
                                data: item
                            }
                        ]
                    };
                })
            }
        ]
    })
)
