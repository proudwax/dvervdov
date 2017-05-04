block('page').content()(function() {

    this.data = this.ctx.data = {
        phone: '+7(812)765-43-21',
        mail: 'info@info.com',
        address: 'СПб, ул. , д.'
    };

    return [
        { block: 'header' },
        {
            block: 'content',
            mods: { main: true }
        },
        { block: 'footer' }
    ];
});
