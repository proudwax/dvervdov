block('menu-burger')(
    elem('checkbox')(
        tag()('input'),

        addAttrs()( _ => {
            return {
                type: 'checkbox'
            }
        })
    ),

    elem('burger-line')(
        tag()('span')
    )
);