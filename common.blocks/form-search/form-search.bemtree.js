block('form-search').content()(function() {
    return {
        block: 'form',
        mods: {
            theme : 'dver',
            'has-validation' : true
        },
        action: '/search',
        method: 'GET',
        content: [
            {
                block: 'form-field',
                name: 'input',
                mods : {
                    theme: 'dver',
                    type : 'input',
                    required : true,
                    validate: 'pattern',
                    message : 'popup',
                    size: 'm'
                },
                directions : ['top-left'],
                js: {
                    pattern: {
                        value: '[^\S]+',
                        message: 'Поле не должно быть пустым'
                    },
                    required: {
                        message: 'Необходимо для заполнения'
                   }
                },
                content : [
                    {
                        block: 'control-group',
                        mods: { search: true },
                        content: [
                            {
                                block: 'input',
                                mods: { theme: 'dver', size: 'l', type: 'search', width: 'available', 'has-clear': true, focused : true },
                                name: 'search',
                                autocomplete: false,
                                placeholder: 'Введите запрос'
                            },
                            {
                                block: 'button',
                                mods: { theme: 'dver', size: 'l', type: 'submit' },
                                icon: {
                                    block: 'icon',
                                    mods: { search: true }
                                }
                            },
                            {
                                block: 'button',
                                mix: { block: 'popup', elem: 'close' },
                                mods: { theme: 'dver', size: 'l', type: 'link' },
                                icon: {
                                    block: 'icon',
                                    mods: { close: true }
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    };
});
