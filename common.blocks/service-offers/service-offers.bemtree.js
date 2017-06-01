block('service-offers').content()(function() {

    return [
        {
            elem: 'list',
            content: [
                {
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
                },
                {
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
                },
                {
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
        }
    ];

});
