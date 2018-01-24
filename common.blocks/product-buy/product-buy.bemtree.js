block('product-buy')(
    tag()('form'),
    
    addAttrs()(function () {
        return {
            method: 'post',
            action: '/addcart/'
        };
    }),

    content()(function () {
        return [
            {
                tag: 'input',
                attrs: { name: 're', type: 'hidden', value: '1' }
            },
            {
                block: 'button',
                mix: { block: this.block, elem: 'submit' },
                mods: { theme: 'dver', size: 'l', type: 'submit', view: 'action' },
                icon: {
                    block: 'icon',
                    mods: { cart: 'white' }
                },
                text: 'Купить'
            }
        ]
    })
)
