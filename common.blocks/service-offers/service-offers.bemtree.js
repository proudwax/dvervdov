block('service-offers').content()(function() {

    return [
        {
            elem: 'list',
            mix: {
                block: 'row',
            },
            content: [
                {
                    block: 'row',
                    elem: 'col',
                    elemMods: { m: true, sw: 0 },
                    content: [
                        {
                            block: this.block,
                            elem: 'item',
                            elemMods: { quality:true },
                            content: [
                                {
                                    block: 'icon',
                                    mix: { block: this.block, elem: 'icon' },
                                    mods: { quality: true }
                                },
                                {
                                    elem: 'text',
                                    content: 'Качество работ'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'row',
                    elem: 'col',
                    elemMods: { m: true, sw: 0 },
                    content: [
                        {
                            block: this.block,
                            elem: 'item',
                            elemMods: { delivery:true },
                            content: [
                                {
                                    block: 'icon',
                                    mix: { block: this.block, elem: 'icon' },
                                    mods: { delivery: true }
                                },
                                {
                                    elem: 'text',
                                    content: 'Удобная доставка и монтаж'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'row',
                    elem: 'col',
                    elemMods: { m: true, sw: 0 },
                    content: [
                        {
                            block: this.block,
                            elem: 'item',
                            elemMods: { price: true },
                            content: [
                                {
                                    block: 'icon',
                                    mix: { block: this.block, elem: 'icon' },
                                    mods: { price: true }
                                },
                                {
                                    elem: 'text',
                                    content: 'Низкие цены'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'row',
                    elem: 'col',
                    elemMods: { m: true, sw: 0 },
                    content: [
                        {
                            block: this.block,
                            elem: 'item',
                            elemMods: { price: true },
                            content: [
                                {
                                    block: 'icon',
                                    mix: { block: this.block, elem: 'icon' },
                                    mods: { masters: true }
                                },
                                {
                                    elem: 'text',
                                    content: 'Профессиональные мастера'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];

});
