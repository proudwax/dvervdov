block('form').mod('search', true).content()(function() {
    return [
        {
            block: 'control-group',
            mods: { search: true },
            content: [
                {
                    block: 'input',
                    mods: { theme: 'islands', size: 'l', type: 'search', width: 'available', focused : true },
                    placeholder: 'Введите запрос'
                },
                {
                    block: 'button',
                    mods: { theme: 'islands', size: 'l', type: 'submit' },
                    icon: {
                        block: 'icon',
                        mods: { search: true }
                    }
                },
                {
                    block: 'button',
                    mods: { theme: 'islands', size: 'l', type: 'link', close: true },
                    icon: {
                        block: 'icon',
                        mods: { close: true }
                    }
                }
            ]
        }
    ];
});
