block('promo').mod('main', true).content()(function() {

    return {
        block: 'tile',
        mods: { main: true }
    }

    // return [
    //     {
    //         block: 'row',
    //         content: [
    //             {
    //                 elem: 'col',
    //                 elemMods: { mw: 9, sw: 12 },
    //                 content: [
    //                     {
    //                         block: 'slider',
    //                         mix: { block: this.ctx.block, elem: 'slider' },
    //                         mods: { main: true }
    //                     }
    //                 ]
    //             },
    //             {
    //                 elem: 'col',
    //                 elemMods: { mw: 3, sw: 0 },
    //                 content: [
    //                     {
    //                         block: 'banner',
    //                         mix: { block: this.ctx.block, elem: 'banner' },
    //                         mods: { main: true },
    //                         content: 'banner'
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // ];
});
