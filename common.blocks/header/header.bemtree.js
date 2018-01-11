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
                            tel: this.data.contacts.phone,
                            content: this.data.contacts.phone
                        }
                    ]
                }
            ]
        },
        {
            elem: 'action',
            content: [
                {
                    elem: 'action-item',
                    elemMods: { callback: true },
                    content: [
                        {
                            block: 'callback'
                        }
                    ]
                },
                {
                    elem: 'action-item',
                    elemMods: { search: true },
                    content: [
                        {
                            block: 'search'
                        }
                    ]
                },
                {
                    elem: 'action-item',
                    elemMods: { cart: true },
                    content: [
                        {
                            block: 'cart'
                        }
                    ]
                },
                {
                    elem: 'action-item',
                    content: [
                        {
                            block: 'menu-burger'
                        }
                    ]
                }
            ]
        },
        {
            elem: 'nav',
            content: [
                {
                    block: 'nav'
                }
            ]
        }
    ];
});
