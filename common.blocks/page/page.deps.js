({
    mustDeps: [
    ],
    shouldDeps: [
        { block: 'header' },
        { block: 'main', mods: { home: true, catalog: true, product: true, serp: true, order: true, cart: true } },
        'service-offers',
        { block: 'footer' }
    ]
})
