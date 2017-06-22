block('form-master').content()(function() {

    var fields = [
        { label: 'Имя', type: 'input', name: 'Name', placeholder: 'Ваше имя', required: 'Обязательно для заполнения', validate: 'pattern', pattern: {pattern: { value: '[a-zа-я_-]{3,}', message: 'Заполните имя правильно' } } },
        { label: 'Email', type: 'input', name: 'Email', placeholder: 'Ваш  Email', required: 'Обязательно для заполнения', validate: 'email', pattern: { email: { message: 'Заполните email правильно' } } },
        { label: 'Телефон', type: 'input', name: 'Phone', placeholder: 'Ваш номер телефона', required: 'Обязательно для заполнения', validate: 'phone', pattern: { phone: { mask: '+7(000)000-00-00', message: 'Заполните телефон правильно' } } }
    ];

    var bemjson = fields.map(function (item) {
        return {
            block: 'form-field',
            name: item.type,
            mods : {
                theme: 'dver',
                type : item.type,
                required : true,
                validate: item.validate,
                message : 'popup',
                size: 'm'
            },
            directions : ['top-left'],
            js: {
                pattern: item.pattern.pattern ? item.pattern.pattern : false,
                email: item.pattern.email ? item.pattern.email : false,
                phone: item.pattern.phone ? item.pattern.phone : false,
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
                    autocomplete: false,
                    placeholder: item.placeholder
                }
            ]
        }
    });

    return {
        block: 'form',
        mods: {
            theme : 'dver',
            'has-validation' : true,
            async: true
        },
        action: '/server.txt',
        method: 'GET',
        content: [
            {
                elem: 'header',
                content: [
                    {
                        elem: 'title',
                        content: 'Вызов мастера'
                    },
                    {
                        elem: 'desc',
                        content: 'Консультация и вызов мастера бесплатно!'
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
