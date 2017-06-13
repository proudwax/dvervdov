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
            block: 'form-callback'
        }
        // {
        //     block : 'app',
        //     js : true,
        //     content : [
        //         {
        //             block: 'form',
        //             mods: {
        //                 theme : 'islands',
        //                 'has-validation' : true
        //             },
        //             action: 'get',
        //             method: 'GET',
        //             content: [
        //                 {
        //                     block : 'form-field',
        //                     name : 'input',
        //                     mods : {
        //                         theme: 'islands',
        //                         type : 'input',
        //                         required : true,
        //                         message : 'popup'
        //                     },
        //                     directions : ['top-left'],
        //                     js: {
        //                         required: {
        //                            message: 'Super required Name!'
        //                        }
        //                     },
        //                     content : [
        //                         {
        //                             block : 'label',
        //                             content : 'Name'
        //                         },
        //                         {
        //                             block : 'input',
        //                             mods : {
        //                                 theme : 'islands',
        //                                 size : 'l'
        //                             },
        //                             name : 'firstName'
        //                         }
        //                     ]
        //                 },
        //                 {
        //                     block : 'form-field',
        //                     name : 'input',
        //                     mods : {
        //                         theme: 'islands',
        //                         type : 'input',
        //                         required : true,
        //                         message : 'popup'
        //                     },
        //                     directions : ['top-left'],
        //                     js: {
        //                         required: {
        //                            message: 'Super required Phone!'
        //                        }
        //                     },
        //                     content : [
        //                         {
        //                             block : 'label',
        //                             content : 'Phone'
        //                         },
        //                         {
        //                             block : 'input',
        //                             mods : {
        //                                 theme : 'islands',
        //                                 size : 'l'
        //                             },
        //                             name : 'firstName'
        //                         }
        //                     ]
        //                 },
        //                 {
        //                     block : 'button',
        //                     mods : {
        //                         theme : 'dver',
        //                         size : 'l',
        //                         type : 'submit',
        //                         view : 'action'
        //                     },
        //                     text : 'Submit'
        //                 }
        //             ]
        //         }
        //     ]
        // }
    ];
});
