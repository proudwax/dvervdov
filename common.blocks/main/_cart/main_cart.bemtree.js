block('main').mod('cart', true).content()(function() {

    return [
        {
            block: 'button',
            mix: [{ block: 'cart', js: { id: 'cart' } }, { block: 'cart', elem: 'link', js: true }],
            mods: { theme: 'dver', size: 'l', type: 'link', view: 'action' },
            icon: {
                block: 'icon',
                mods: { cart: 'white' }
            },
            url: '#1'
        },
        {
            block: 'cart',
            js: { id: 'cart' },
            action: '/server-cart.json',
            method: 'get'
        }
    ];
});
