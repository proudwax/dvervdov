block('search').content()(function() {
    return [
        {
            block: 'button',
            mods: { theme: 'dver', size: 'l' },
            icon: {
                block: 'icon',
                mods: { search: true }
            }
        },
        {
            block: 'popup',
            mods: { theme: 'dver', target: 'position', autoclosable: true, search: true },
            mix : { block : 'z-index-group', mods : { level : 1 } },
            content: [
                {
                    block: 'form-search'
                }
            ]
        }
    ];
});
