block('search').content()(function() {
    return [
        {
            block: 'button',
            mods: { theme: 'islands', size: 'l' },
            icon: {
                block: 'icon',
                mods: { search: true }
            }
        },
        // {
        //     block: 'popup',
        //     mods: { theme: 'islands', target: 'position', autoclosable: true, search: true },
        //     content: [
        //         {
        //             block: 'form',
        //             mods: { search: true }
        //         }
        //     ]
        // }
    ];
});
