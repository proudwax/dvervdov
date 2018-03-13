block('cart-action').content()(function() {
    var data = this.data = this.ctx.data;

    return [
        {
            elem: 'header'
        },
        {
            elem: 'content',
            content: [
                'Общая стоимость:',
                {
                    elem: 'cost',
                    content: data.reduce(function (prev, curr) {
                        return prev + curr.price.current;
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
                    text: 'Отправить'
                }
            ]
        }
    ];
});
