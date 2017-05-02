block('header').content()(function() {
    return [
        {
            elem: 'logo',
            content: [
                {
                    block: 'logo'
                }
            ]
        },
        {
            elem: 'contacts',
            content: [
                {
                    block: 'contacts',
                    content: [
                        {
                            elem: 'phone',
                            elemMods: { header: true },
                            tel: this.data.phone,
                            content: this.data.phone
                        }
                    ]
                }
            ]
        },
        {
            elem: 'search',
            content: [
                {
                    block: 'search',
                    content: 'search'
                }
            ]
        },
        {
            elem: 'cart',
            content: [
                {
                    block: 'cart',
                    content: 'cart'
                }
            ]
        },
        {
            elem: 'toggle',
            content: [
                {
                    block: 'toggle',
                    content: 'toggle'
                }
            ]
        },
        {
            elem: 'nav',
            content: [
                {
                    block: 'nav',
                    content: 'nav'
                }
            ]
        }
    ];
});
