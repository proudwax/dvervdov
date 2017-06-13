block('form').mod('master', true).content()(function() {
    return [
        {
            elem: 'header',
            content: [
                {
                    elem: 'title',
                    content: 'Заказ замерщика'
                },
                {
                    elem: 'desc',
                    content: 'Вызов мастера бесплатно! Мы поможем Вам.'
                }
            ]
        },
        {
            elem: 'field',
            content: [
                {
                    block: 'input',
                    mods: { theme: 'dver', size: 'l', width: 'available', 'has-clear': true },
                    placeholder: 'Ваши имя'
                }
            ]
        },
        {
            elem: 'field',
            content: [
                {
                    block: 'input',
                    mods: { theme: 'dver', size: 'l', width: 'available', 'has-clear': true },
                    placeholder: 'Телефон для связи'
                }
            ]
        },
        {
            elem: 'action',
            content: [
                {
                    block: 'button',
                    mix: { block: 'form', elem: 'send' },
                    mods: { theme: 'islands', size: 'l', type: 'submit' },
                    icon: {
                        block: 'icon',
                        mods: { send: true }
                    },
                    text: 'Отправить'
                }
            ]
        }
    ];
});
