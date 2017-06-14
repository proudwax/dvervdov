block('form-callback').content()(function() {

    var fields = [
        { label: 'Имя', type: 'input', name: 'Name', placeholder: 'Ваше имя', required: 'Обязательно для заполнения' },
        { label: 'Телефон', type: 'input', name: 'Phone', placeholder: 'Ваш номер телефона', required: 'Обязательно для заполнения' }
    ];

    var bemjson = fields.map(function (item) {
        return {
            block: 'form-field',
            name: item.type,
            mods : {
                theme: 'dver',
                type : item.type,
                required : true,
                message : 'popup',
                size: 'm'
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
                    mods : { size : 'm' },
                    content: item.label
                },
                {
                    block: item.type,
                    mods : {
                        theme : 'dver',
                        'has-clear': true,
                        width: 'available',
                        size : 'm'
                    },
                    name: item.name,
                    placeholder: item.placeholder
                }
            ]
        }
    });

    return {
        block: 'form',
        mods: {
            theme : 'dver',
            'has-validation' : true
        },
        action: 'get',
        method: 'GET',
        content: [
            {
                elem: 'header',
                content: [
                    {
                        elem: 'title',
                        content: 'Заказ обратного звонка'
                    },
                    {
                        elem: 'desc',
                        content: 'Не можете определиться?! Мы поможем Вам.'
                    }
                ]
            },
            {
                elem: 'content',
                content: bemjson
            },
            {
                elem: 'footer',
                content: [
                    {
                        block: 'button',
                        mods: { theme: 'dver', size: 'l', type: 'submit', view : 'action' },
                        icon: {
                            block: 'icon',
                            mods: { send: true }
                        },
                        text: 'Отправить'
                    }
                ]
            }
        ]
    };
});
