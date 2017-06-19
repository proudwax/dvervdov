({
    shouldDeps: [
        { block: 'form', mods: { theme : 'islands', 'has-validation' : true } },
        { block: 'form-field', mods: { type: 'input', required: true, message: 'popup', validate: ['phone', 'email', 'pattern'] } },
        { block: 'button', mods: { theme: 'dver', size: 'l', type: 'submit', view : 'action' } },
        { block: 'input', mods: { theme: 'dver', size: 'm', 'has-clear': true, width: 'available' } },
        { block: 'popup', mods: { theme: 'dver' } },
        { block: 'icon', mods: { send: true } },
        'label'
    ]
})
