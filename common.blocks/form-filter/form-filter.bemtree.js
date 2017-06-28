block('form-filter').content()(function() {

    var content = {
        block: 'accordion',
        mods: { theme: 'dver', size: 'l' },
        items: [
            {
                title: 'Colors',
                checked: true,
                content: applyCtx(
                    {
                        block: 'feild-colors'
                    }
                )
            },
            {
                title: 'Glasses',
                content: applyCtx(
                    {
                        block: 'feild-glasses'
                    }
                )
            },
            {
                title: 'Price (RUR)',
                checked: true,
                content: applyCtx({
                    block: 'range',
                    name: 'filter_Price[]',
                    start: [90, 200],
                    text: ['from', 'to'],
                    min: 50,
                    max: 300
                })
            }
        ]
    };

    return {
        block: 'form',
        mods: {
            theme : 'dver'
        },
        action: '#filter',
        method: 'GET',
        content: [
            {
                elem: 'content',
                content: content
            },
            {
                elem: 'footer',
                content: [
                    {
                        elem: 'action',
                        content: [
                            {
                                elem: 'action-item',
                                content: [
                                    {
                                        block: 'button',
                                        mods: { theme: 'dver', size: 'l', type: 'submit', view: 'action', width: 'available' },
                                        icon: {
                                            block: 'icon',
                                            mods: { filter: true }
                                        },
                                        text: 'Отправить'
                                    }
                                ]
                            },
                            {
                                elem: 'action-item',
                                content: [
                                    {
                                        block: 'button',
                                        mods: { theme: 'dver', size: 'l', width: 'available' },
                                        icon: {
                                            block: 'icon',
                                            mods: { refresh: true }
                                        },
                                        text: 'Сбросить'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };
});
