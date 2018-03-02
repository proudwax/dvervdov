block('count')(
    js()(true),

    content()(function (node, ctx) {
        var count = this.ctx.count,
            units = this.ctx.units;

        return [
            {
                block: 'control-group',
                content: [
                    {
                        block: 'button',
                        mods: {
                            theme: 'dver',
                            size: 'm',
                            count: 'decrement'
                        },
                        icon: {
                            block: 'icon',
                            mods: { minus: true }
                        }
                    },
                    {
                        block: 'input',
                        mods: {
                            theme: 'dver',
                            size: 'm',
                            count: true,
                        },
                        maxLength: 2,
                        name: 'count',
                        val: count || 1
                    },
                    {
                        block: 'button',
                        mods: {
                            theme: 'dver',
                            size: 'm',
                            count: 'increment'
                        },
                        icon: {
                            block: 'icon',
                            mods: { plus: true }
                        }
                    }
                ]
            }
        ];
    })
);
