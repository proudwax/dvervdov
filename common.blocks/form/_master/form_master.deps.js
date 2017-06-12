([
    {
        shouldDeps: [
            { block: 'button', mods: { theme: 'dver', size: 'l' } },
            { block: 'icon', mods: { send: true } },
            { block: 'input', mods: { theme: 'dver', size: 'l', type: 'search', width: 'available', 'has-clear': true } }
        ]
    },
    {
        tech: 'js',
        mustDeps: [
            { elem: 'waiting', tech: 'bemhtml' }
        ]
    }
])
