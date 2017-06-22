block('cart').content()(function() {
    return [
        {
            block: 'button',
            mods: { theme: 'dver', size: 'l' },
            icon: {
                block: 'icon',
                mods: { cart: true }
            }
        },
        {
            block: 'popup',
            mods: { theme: 'dver', target: 'anchor', autoclosable: true, cart: true },
            content: [
                'cart'
            ]
        }
    ];
});
