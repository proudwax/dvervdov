block('form-order').content()(function() {

    var fields = [
        { label: 'Имя', val: 'test', type: 'input', name: 'Name', placeholder: 'Ваше имя', required: 'Обязательно для заполнения', validate: 'pattern', pattern: {pattern: { value: '[a-zа-я_-]{3,}', message: 'Заполните имя правильно' } } },
        { label: 'Телефон', val: '7(111)111-11-1', type: 'input', name: 'Phone', placeholder: 'Ваш номер телефона', required: 'Обязательно для заполнения', validate: 'phone', pattern: { phone: { mask: '+7(000)000-00-00', message: 'Заполните телефон правильно' } } },
        { label: 'Email', val: 'test@test.ru', type: 'input', name: 'Email', placeholder: 'Ваш  Email', required: 'Обязательно для заполнения', validate: 'email', email: { message: 'Заполните email правильно' }, pattern: {} },
        { label: 'Город', val: 'test', type: 'input', name: 'City', placeholder: 'Город доставки', required: 'Обязательно для заполнения', pattern: {} },
        { label: 'Индекс', val: 'test', type: 'input', name: 'Index', placeholder: 'Индекс', required: 'Обязательно для заполнения', validate: 'pattern', pattern: { pattern: { value: '^[0-9]{6}$', message: 'Заполните индекс правильно' } } },
        { label: 'Адрес', val: 'test', type: 'input', name: 'Address', placeholder: 'Адрес доставки', required: 'Обязательно для заполнения', pattern: {} },
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
                    placeholder: item.placeholder,
                    val: item.val || null
                }
            ]
        }
    });

    return {
        block: 'form',
        mods: {
            theme : 'dver',
            'has-validation' : true,
            // async: true
        },
        action: '/server.txt',
        method: 'GET',
        content: [
            {
                elem: 'header',
                content: [
                    {
                        elem: 'title',
                        content: 'Контактные данные и адрес доставки'
                    },
                    {
                        elem: 'desc',
                        content: 'После заполнения, пожалуйста, проверьте данные.'
                    }
                ]
            },
            {
                elem: 'content',
                content: [
                    {
                        tag: 'input',
                        attrs: { name: 'posting', type: 'hidden', value: 0 }
                    },
                    bemjson,
                    {
                        block: 'form-field',
                        name: 'textarea',
                        mods: {
                            theme: 'dver',
                            type: 'textarea',
                            size: 'm'
                        },
                        content: [
                            {
                                block: 'label',
                                mods: { size: 'm' },
                                content: 'Примечание'
                            },
                            {
                                block: 'textarea',
                                mods: {
                                    theme: 'dver',
                                    width: 'available',
                                    size: 'm'
                                },
                                name: 'Comment',
                                placeholder: 'Текст примечания'
                            }
                        ]
                    }
                ]           
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
