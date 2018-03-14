({
    mustDeps: [
    ],
    shouldDeps: [
        { block: 'icon', mods: { cart: 'white' } },
        { block: 'cart-action', elem: 'cost' },
        { block: 'button', mods: { theme: 'dver', type: 'link', size: 'l', view: 'action' } }
    ]
},
    {
        tech: 'js',
        mustDeps: [
            { elem: 'cost', tech: 'bemhtml' }
        ]
    })
