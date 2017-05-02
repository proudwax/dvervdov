block('search')(
    js()(true),

    content()(function () {
        return [
            {
                block: 'button',
                mods: { theme: 'islands', size: 'm' },
                icon: {
                    block: 'icon',
                    mods: { search: true }
                }
            },
            {
                block: 'popup',
                mods: { theme: 'islands', target: 'anchor', autoclosable: true, search: true },
                // directions: ['bottom-right'],
                viewportOffset: 0,
                content: [
                    {
                        block: 'control-group',
                        content: [
                            {
                                block: 'input',
                                mods: { theme: 'islands', size: 'm', 'has-clear': true, type: 'search', width: 'available' },
                                val: 'Введите запрос'
                            },
                            {
                                block: 'button',
                                mods: { theme: 'islands', size: 'm', type: 'submit' },
                                icon: {
                                    block: 'icon',
                                    mods: { search: true }
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    })
);
