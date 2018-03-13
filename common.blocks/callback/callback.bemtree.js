block('callback').content()(function() {
    return [
        {
            block: 'button',
            mods: { theme: 'dver', size: 'l' },
            icon: {
                block: 'icon',
                mods: { callback: true }
            }
        },
        {
            block: 'modal',
            mods: { theme: 'dver', autoclosable: true, 'has-close': true },
            mix : { block : 'z-index-group', mods : { level : 1 } },
            content: [
                {
                    block: 'form-callback'
                }
            ]
        }
    ];
});
