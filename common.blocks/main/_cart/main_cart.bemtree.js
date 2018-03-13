block('main').mod('cart', true).content()(function() {

    return [
        {
            block: 'cart',
            action: '/server-cart.json',
            method: 'get'
        }
    ];
});
