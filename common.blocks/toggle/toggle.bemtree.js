block('toggle').content()(function() {
    return [
        {
            block: 'button',
            mods: { theme: 'islands', size: 'l' },
            icon: {
                block: 'icon',
                mods: { toggle: true }
            }
        }
    ];
});
