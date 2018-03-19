({
    mustDeps: [
    ],
    shouldDeps: [
        { elem: 'link' },
        'cart-list',
        'cart-action',
        { block: 'button', mods: { theme: 'dver', type: 'link', size: 'l', view: 'action' } },
        { block: 'icon', mods: { cart: [true, 'white'] } }
    ]
})
