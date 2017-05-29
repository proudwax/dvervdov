block('form').mod('callback', true).content()(function() {
    return [
        {
            elem: 'title',
            content: 'Заказ обратного звонка'
        },
        {
            elem: 'desc',
            content: 'Не можете определиться?! Мы поможем Вам.'
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
