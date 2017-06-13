block('main').mod('home', true).content()(function() {

    return [
        {
            block: 'promo',
            mods: { main: true }
        },
        {
            block: 'brands-list'
        },
        {
            block: 'content',
            content: [
                {
                    block: 'similar'
                }
            ]
        },

        {
            block: 'row',
            content: [
                {
                    block: 'content',
                    mix: {
                        block: 'row',
                        elem: 'col',
                        elemMods: { lw: 8, mw: 7, sw: 12 },
                    },
                    content: [
                        {
                            block: 'article',
                            mods: { main: true },
                        }
                    ]
                },
                {
                    elem: 'col',
                    elemMods: { lw: 4, mw: 5, sw: 12 },
                    content: [
                        {
                            block: 'tabs',
                            mods: { theme: 'dver', type: 'button', size: 'l' },
                            tabs: [
                                {
                                   title: 'Заказ звонка',
                                   content: applyCtx(
                                       {
                                           block: 'form',
                                           mods: { callback: true },
                                       }
                                   )
                                },
                                {
                                   title: 'Заказ мастера',
                                   content: applyCtx(
                                       {
                                           block: 'form',
                                           mods: { master: true },
                                       }
                                   )
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'service-offers'
        },
        {
            block : 'form',
            mods : { theme : 'islands', message : 'popup' },
            directions : ['right-top'],
            method : 'GET',
            content : [
                {
                    elem : 'header',
                    content : 'Simple form example'
                },
                {
                    elem : 'content',
                    content : [
                        {
                            block : 'form-field',
                            name : 'radioGroup',
                            mods : {
                                type : 'radio-group',
                                required : true,
                                message : 'text'
                            },
                            content : [
                                {
                                    block : 'radio-group',
                                    mods : { theme : 'islands', size : 'l' },
                                    options : [
                                        { text : 'Radio 1', val : '1' },
                                        { text : 'Radio 2', val : '2' },
                                        { text : 'Radio 3', val : '3' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'fieldset',
                            legend : {
                                tag : 'h4',
                                content : 'form part'
                            },
                            content : [
                                {
                                    block : 'form-field',
                                    name : 'input',
                                    mods : {
                                        theme : 'islands',
                                        type : 'input'
                                    },
                                    content : [
                                        {
                                            elem : 'label',
                                            content : [
                                                {
                                                    block : 'label',
                                                    content : 'Input'
                                                }
                                            ]
                                        },
                                        {
                                            elem : 'control',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'islands', size : 'l' }
                                                }
                                            ]
                                        }
                                    ]
                                },
                            ]
                        }
                    ]
                }
            ]
        }
    ];
});
