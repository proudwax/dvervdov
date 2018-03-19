block('product-buy')(
    content()(function () {
        return [ 
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
