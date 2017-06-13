block('form-callback').content()(function() {

    var fields = [
        { label: 'Name', type: 'input', name: 'Name', placeholder: 'your name', required: 'required Name!' },
        { label: 'Phone', type: 'input', name: 'Phone', placeholder: 'your phone', required: 'required Phone!' }
    ];

    var bemjson = fields.map(function (item) {
        return {
            block: 'form-field',
            name: item.type,
            mods : {
                theme: 'islands',
                type : item.type,
                required : true,
                message : 'popup'
            },
            directions : ['top-left'],
            js: {
                required: {
                   message: item.required
               }
            },
            content : [
                {
                    block: 'label',
                    content: item.label
                },
                {
                    block: item.type,
                    mods : {
                        theme : 'islands',
                        'has-clear': true,
                        size : 'l'
                    },
                    name: item.name,
                    placeholder: item.placeholder
                }
            ]
        }
    });

    console.log(bemjson);

    // return [
    //     {
    //         elem: 'header',
    //         content: [
    //             {
    //                 elem: 'title',
    //                 content: 'Заказ обратного звонка'
    //             },
    //             {
    //                 elem: 'desc',
    //                 content: 'Не можете определиться?! Мы поможем Вам.'
    //             }
    //         ]
    //     },
    //     {
    //         elem: 'content'
    //     },
    //     {
    //         elem: 'footer',
    //         content: [
    //             {
    //                 block: 'button',
    //                 mix: { block: 'form', elem: 'send' },
    //                 mods: { theme: 'islands', size: 'l', type: 'submit' },
    //                 icon: {
    //                     block: 'icon',
    //                     mods: { send: true }
    //                 },
    //                 text: 'Отправить'
    //             }
    //         ]
    //     }
    // ];
});
