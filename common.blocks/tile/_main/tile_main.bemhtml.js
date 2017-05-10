block('tile').mod('main')(
    js()(true),

    elem('item')(
        tag()('a'),

        addAttrs()(function () {
            return {
                href: this.ctx.url
            }
        }),

        content()(function () {
            return [
                { tag: 'canvas', cls: 'tile__canvas', attrs: { height: 400, width: 400 } },
                applyNext()
            ]
        })
    )

    // content()(function() {
    //     let newElem = { elem: 'row', content: [] },
    //         contRow = 0,
    //         colInRow = applyNext().length > 4 ? 3 : 2;
    //
	//     return applyNext().reduce((prev, cur, i) => {
    //
	//         if (i % colInRow == 0 && i != 0) {
    //             contRow ++;
    //             prev.push(newElem);
	//         }
    //
    //         prev[contRow].content.push(cur);
	//         return prev;
	//     }, [{ elem: 'row', content: [] }]);
	// })
);
