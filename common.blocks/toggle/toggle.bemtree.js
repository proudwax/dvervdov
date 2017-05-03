block('toggle').content()(function() {
    return [
        {
            block: 'button',
            mods: { theme: 'islands', size: 'm' },
            icon: {
                block: 'icon',
                mods: { toggle: true }
            }
        }
    ];
});
