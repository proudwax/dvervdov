block('cart').content()(function() {
    return [
        {
            block: 'button',
            mods: { theme: 'islands', size: 'm' },
            icon: {
                block: 'icon',
                mods: { cart: true }
            }
        },
        {
            block: 'popup',
            mods: { theme: 'islands', target: 'anchor', autoclosable: true, cart: true },
            content: [
                'cart'
            ]
        }
    ];
});
