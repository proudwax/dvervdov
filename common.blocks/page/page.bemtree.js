block('page').content()(function() {

    this.data = this.ctx.data = {
        contacts: {
            phone: '+7(812)765-43-21',
            mail: 'info@info.com',
            address: 'СПб, ул. , д.',
        },
        promo: [
            { image: 'http://dvervdom.yazvyazda.ru/netcat_files/images/bonaveri/domenico/products/alexandriya_big_78_1.jpg', text: 'Text 1', path: '#1' },
            { image: 'http://dvervdom.yazvyazda.ru/netcat_files/images/bonaveri/trento/products/valentiya_1_shb_big_2392.jpg', text: 'Text 2', path: '#2' },
            { image: 'http://dvervdom.yazvyazda.ru/netcat_files/images/bonaveri/francesco/products/valentiya_1_big_2073.jpg', text: 'Text 3', path: '#3' },
            { image: 'http://dvervdom.yazvyazda.ru/netcat_files/14/19/portofino_5_art_steklo_100_mm_big_136.jpg', text: 'Text 4', path: '#4' },
            { image: 'http://dvervdom.yazvyazda.ru/netcat_files/images/bonaveri/velvet/products/valentiya_1_shb__velvet_big_234.jpg', text: 'Text 5', path: '#5' }
            // { image: 'http://lorempixel.com/900/300/', text: 'Text 1', path: '#1' },
            // { image: 'http://lorempixel.com/900/300/', text: 'Text 2', path: '#2' },
            // { image: 'http://lorempixel.com/900/300/', text: 'Text 3', path: '#3' },
            // { image: 'http://lorempixel.com/900/300/', text: 'Text 4', path: '#4' },
            // { image: 'http://lorempixel.com/900/300/', text: 'Text 5', path: '#5' }
        ]
    };

    return [
        { block: 'header' },
        {
            block: 'promo',
            mods: { main: true }
        },
        {
            block: 'content',
            mods: { main: true }
        },
        { block: 'footer' }
    ];
});
