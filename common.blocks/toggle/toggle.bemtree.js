block('toggle').content()(function() {
    return [
        {
            block: 'button',
            mods: { theme: 'dver', size: 'l' },
            icon: {
                block: 'icon',
                mods: { toggle: true }
            }
        }
    ];
});
