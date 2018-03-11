({
    mustDeps: [
        'mq'
    ],
    shouldDeps: [
        'count',
        'product-cart-price',
        { block: 'button', mods: { theme: 'dver', type: 'submit', size: 'm' } },
        { block: 'icon', mods: { remove: true } }
    ]
})
