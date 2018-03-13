block('tabs')(
    js()(true),

    content()(function() {
        var ctx = this.ctx,
            radioGroup = {
                block: 'radio-group',
                mix: { block: this.name, elem: 'group' },
                mods: this.extend({ theme: 'islands', size: 'm', type: 'line' }, ctx.mods),
                name: ctx.name || 'tabs',
                options: []
            },
            hasChecked = false,
            tabsContainer = [];

        ctx.tabs && ctx.tabs.forEach(function (item, i) {

            var tabContent = {
                    elem: 'content',
                    js: { id: i },
                    elemMods: {},
                    content: item.content
                };

            radioGroup.options.push({
                val: i,
                text: item.title,
                mix: { block: ctx.name, elem: 'tab' }
            });

            if (!hasChecked && item.checked === true) {
                hasChecked = true;
                radioGroup.val = i;
                tabContent.elemMods.checked = true;
            }

            tabsContainer.push(tabContent);

        });

        if (!hasChecked) {
            radioGroup.val = 0;
            tabsContainer[0].elemMods.checked = true;
        }

        return [
            radioGroup,
            {
                elem: 'container',
                content: tabsContainer
            }
        ];
    })
);
