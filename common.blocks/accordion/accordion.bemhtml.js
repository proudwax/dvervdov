block('accordion')(
    js()(true),

    content()(function() {
        var mods = this.mods;

        return {
            elem: 'container',
            content: (this.ctx.items || []).map(function (item, i) {
                return {
                    elem: 'item',
                    elemMods: { checked: !!item.checked },
                    content: [
                        {
                            block: 'checkbox',
                            mods: { theme: mods.theme, size: mods.size, type: 'button', checked: !!item.checked },
                            mix: { block: this.block, elem: 'title', js: true },
                            name: this.block + '-' + i,
                            val: i,
                            text: item.title
                        },
                        {
                            elem: 'content',
                            content: item.content
                        }
                    ]
                };
            }, this)
        };
    })
);
