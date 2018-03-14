block('cart-action').content()(function () {
    var data = this.data = this.ctx.data;

    return [
        {
            elem: 'header',
            content: 'Общая стоимость:'
        },
        {
            elem: 'content',
            content: [
                {
                    elem: 'cost',
                    content: data.reduce(function (prev, curr) {
                        return prev + curr.price;
                    }, 0) + ' руб.'
                }
            ]
        },
        {
            elem: 'footer',
            content: [
                {
                    block: 'button',
                    mods: { theme: 'dver', size: 'l', type: 'submit', view: 'action' },
                    icon: {
                        block: 'icon',
                        mods: { cart: 'white' }
                    },
                    text: 'Оформить'
                }
            ]
        }
    ];
});
