block('slider').mod('main', true).content()(function() {

    let arrImage = [
        { url: 'http://lorempixel.com/900/300/', alt: 'test1', path: '#slider-1' },
        { url: 'http://lorempixel.com/900/300/', alt: 'test2', path: '#slider-2' },
        { url: 'http://lorempixel.com/900/300/', alt: 'test3', path: '#slider-3' },
        { url: 'http://lorempixel.com/900/300/', alt: 'test4', path: '#slider-4' },
        { url: 'http://lorempixel.com/900/300/', alt: 'test5', path: '#slider-5' }
    ];

    let slider = arrImage.map(function (item) {
        return [
            {
                block: 'image',
                alt: item.alt,
                url: item.url + '?' + Math.random()
            }
        ];
    });

    return {
        elem: 'content',
        content: slider
    };

});
