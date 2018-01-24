block('order-confirm-list')(
    content()(function () {
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
                content: [
                    {
                        elem: 'item',
                        content: [
                            {
                                block: 'product-order'
                            }
                        ]
                    },
                    {
                        elem: 'item',
                        content: [
                            {
                                block: 'product-order'
                            }
                        ]
                    }
                ]
            },
            {
                elem: 'footer',
                content: 'Итог'
            }
        ]
    })
)
