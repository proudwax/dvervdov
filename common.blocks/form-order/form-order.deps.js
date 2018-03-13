({
    shouldDeps: [
        { block: 'form', mods: { theme: 'islands', 'has-validation': true, async: true } },
        { block: 'form-field', mods: { type: ['input', 'textarea'], required: true, message: 'popup', validate: ['phone', 'pattern'] } },
        { block: 'button', mods: { theme: 'dver', size: 'l', type: 'submit', view : 'action' } },
        { block: 'input', mods: { theme: 'dver', size: 'm', 'has-clear': true, width: 'available' } },
        { block: 'popup', mods: { theme: 'dver' } },
        { block: 'icon', mods: { send: true } },
        { block: 'textarea', mods: { theme: 'dver', size: 'm', width: 'available' } },
        'label'
    ]
})
