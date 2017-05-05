block('content').mod('main', true).content()(function() {
    return [
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
