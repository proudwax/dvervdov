block('count')(
    addJs()(function (node, ctx) {
        return {
            range: this.ctx.range || [1, 99]
        }
    }),

    content()(function (node, ctx) {
        var count = this.ctx.count;

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
