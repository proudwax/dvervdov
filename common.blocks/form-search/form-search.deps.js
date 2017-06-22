({
    shouldDeps: [
        { block: 'form', mods: { theme : 'dver', 'has-validation' : true } },
        { block: 'form-field', mods: { type: 'input', required: true, message: 'popup', validate: 'pattern' } },
        { block: 'control-group', mods: { search: true } },
        { block: 'input', mods: { theme: 'dver', size: 'l', type: 'search', 'has-clear': true, width: 'available' } },
        { block: 'button', mods: { theme: 'dver', size: 'l', type: 'submit', view : 'action' } },
        { block: 'icon', mods: { search: true, close: true } },
        { block: 'popup', elem: 'close', mods: { theme: 'dver' } }
    ]
})
