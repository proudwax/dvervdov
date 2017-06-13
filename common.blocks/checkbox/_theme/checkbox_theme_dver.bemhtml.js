// block('checkbox').mod('theme','dver')(
//     content()((ctx, json) => {
//         return applyNext().map(function (item) {
//             if (item.elem == 'box') {
//                 item = [
//                     item,
//                     {
//                         elem: 'image',
//                         content: [
//                             {
//                                 block: 'image',
//                                 url: 'http://lorempixel.com/100/100/?' + Math.random()
//                             }
//                         ]
//                     }
//                 ]
//             }
//             return item;
//         });
//     }),
//
//     elem('image')(
//         tag()('span')
//     )
// );
