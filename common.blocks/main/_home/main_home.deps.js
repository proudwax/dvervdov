({
    shouldDeps: [
        { block: 'promo', mods: { main: true } },
        // { block: 'form', mods: { callback: true, master: true } },
        'service-offers',
        { block: 'form', mods: { theme : 'islands', 'has-validation' : true } },
        { block: 'form-field', mods: { type : 'input', required : true, message : 'popup' } },
        { block: 'message', mods: { type: 'popup' } },
        'content',
        'article',
        'similar',
        'form-callback',
        'tabs',
        'brands-list',
        { block: 'input', mods: { theme: 'islands', 'has-calendar': true, size: 'm' } },
        'app'
    ]
})
