block('product-card')(
    js()(true),

    tag()('a'),

    addAttrs()(function () {
        return {
            href: this.ctx.path
        }
    }),

    content()(function () {
        return [
            {
                elem: 'title',
                content: this.ctx.name
            },
            {
                elem: 'image',
                src: this.ctx.src
            },
            {
                elem: 'price',
                content: this.ctx.price
            }
        ]
    }),

    // elem('title')(
    //     content()(function () {
    //         return
    //     })
    // ),

    elem('image').content()(function (){
        return {
            block: 'image',
            url: this.ctx.src
        }
    })


);
