block('nav').content()(function() {
    let navList = [
        { text: 'Главная', url: '#1' },
        { text: 'Межкомнатные двери', url: '#2' },
        { text: 'Входные двери', url: '#3' },
        { text: 'Акции', url: '#4' },
        { text: 'Контакты', url: '#5' }
    ];

    let nav = navList.map(function (item) {
        return {
            elem: 'item',
            url: item.url,
            content: item.text
        }
    });

    return [
        {
            elem: 'list',
            content: nav
        }
    ];
});
