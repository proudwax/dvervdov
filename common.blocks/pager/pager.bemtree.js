block('pager').content()(function() {

    var pages = [
        { text: '1', url: '#1', current: false },
        { text: '2', url: '#2', current: false },
        { text: '3', url: '#3', current: false },
        { text: '4', url: '#4', current: true },
        { text: '5', url: '#5', current: false }
    ],
    pager = [];

    pager = pages.map(function (item) {
        return {
            block: 'button',
            mods: {  theme: 'dver', size: 'm', type: 'link', view: (item.current && 'action') },
            url: item.url,
            text: item.text
        }
    });

    return [
        {
            elem: 'prev',
            content: [
                {
                    block: 'button',
                    mods: {  theme: 'dver', size: 'm', type: 'link', pager: 'prev' },
                    url: '#prev',
                    text: 'Назад'
                }
            ]
        },
        {
            elem: 'pages',
            content: [
                {
                    block: 'control-group',
                    content: pager
                }
            ]
        },
        {
            elem: 'next',
            content: [
                {
                    block: 'button',
                    mods: {  theme: 'dver', size: 'm', type: 'link', pager: 'next' },
                    url: '#next',
                    text: 'Вперед'
                }
            ]
        }
    ];

});
