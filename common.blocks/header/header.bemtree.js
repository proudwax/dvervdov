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
            elem: 'action',
            content: [
                {
                    elem: 'search',
                    content: [
                        {
                            block: 'search'
                        }
                    ]
                },
                {
                    elem: 'cart',
                    content: [
                        {
                            block: 'cart'
                        }
                    ]
                },
                {
                    elem: 'toggle',
                    content: [
                        {
                            block: 'toggle'
                        }
                    ]
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
