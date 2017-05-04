block('content').mod('main', true).content()(function() {
    return [
        {
            elem: 'slider',
            content: [
                {
                    block: 'slider',
                    mods: { main: true },
                    content: 'slider'
                }
            ]
        },
        {
            elem: 'banner',
            content: [
                {
                    block: 'bannter',
                    content: 'bannter'
                }
            ]
        },
        {
            elem: 'similar-products',
            content: [
                {
                    block: 'similar-products',
                    content: 'similar-products'
                }
            ]

        },
        {
            elem: 'article',
            content: [
                {
                    block: 'article',
                    mods: { main: true },
                    content: 'article'
                }
            ]
        }

    ];
});
