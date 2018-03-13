block('menu-burger').content()(function() {
    return [
        {
            elem: 'checkbox'
        },
        {
            elem: 'burger'
        },
        {
            elem: 'nav',
            content: [
                {
                    elem: 'nav-item',
                    content: '1'
                },
                {
                    elem: 'nav-item',
                    content: '2'
                },
                {
                    elem: 'nav-item',
                    content: '3'
                }
            ]
        }
    ];
});
