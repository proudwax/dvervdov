({
    mustDeps : 'i-bem-dom',
    shouldDeps: [
        { block: 'form', mods: { theme: 'dver' } },
        { block: 'accordion', mods: { theme: 'dver', size: 'l' } },
        'feild-colors',
        'feild-glasses',
        'range',
        { block: 'button', mods: { theme: 'dver', size: 'l', type: 'submit', view : 'action', width: 'available' } },
        { block: 'icon', mods: { filter: true, refresh: true } }
    ]
})
