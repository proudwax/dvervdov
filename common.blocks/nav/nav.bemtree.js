block('nav').content()(function() {
    let nav = this.data.nav.map(function (item) {
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
