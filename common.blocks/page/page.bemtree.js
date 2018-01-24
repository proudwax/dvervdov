block('page').content()(function() {

    this.data = this.ctx.data = {
        contacts: {
            phone: '+7(812)765-43-21',
            mail: 'info@info.com',
            address: 'СПб, ул. , д.',
        },
        nav: [
            { text: 'Межкомнатные двери', url: '#2' },
            { text: 'Входные двери', url: '#3' },
            { text: 'Акции', url: '#4' },
            { text: 'Контакты', url: '#5' }
        ],
        promo: [
            // { image: 'http://dvervdom.yazvyazda.ru/netcat_files/images/bonaveri/domenico/products/alexandriya_big_78_1.jpg', text: 'Text 1', path: '#1' },
            // { image: 'http://dvervdom.yazvyazda.ru/netcat_files/images/bonaveri/trento/products/valentiya_1_shb_big_2392.jpg', text: 'Text 2', path: '#2' },
            // { image: 'http://dvervdom.yazvyazda.ru/netcat_files/images/bonaveri/francesco/products/valentiya_1_big_2073.jpg', text: 'Text 3', path: '#3' },
            // { image: 'http://dvervdom.yazvyazda.ru/netcat_files/14/19/portofino_5_art_steklo_100_mm_big_136.jpg', text: 'Text 4', path: '#4' },
            // { image: 'http://dvervdom.yazvyazda.ru/netcat_files/images/bonaveri/velvet/products/valentiya_1_shb__velvet_big_234.jpg', text: 'Text 5', path: '#5' }
            { image: 'http://lorempixel.com/800/400/', title: 'Text 1', description: 'description text', path: '#1' },
            { image: 'http://lorempixel.com/400/400/', title: 'Text 2', description: 'description text', path: '#2' },
            { image: 'http://lorempixel.com/400/200/', title: 'Text 3', description: 'description text', path: '#3' },
            { image: 'http://lorempixel.com/400/200/', title: 'Text 4', description: 'description text', path: '#4' },
            { image: 'http://lorempixel.com/400/400/', title: 'Text 5', description: 'description text', path: '#5' },
            { image: 'http://lorempixel.com/400/400/', title: 'Text 6', description: 'description text', path: '#6' }
        ],
        brands: [
            { name: 'Vendor 1', path: '#vendor-1', image: 'http://lorempixel.com/300/200/' },
            { name: 'Vendor 2', path: '#vendor-2', image: 'http://lorempixel.com/300/200/' },
            { name: 'Vendor 3', path: '#vendor-3', image: 'http://lorempixel.com/300/200/' },
            { name: 'Vendor 4', path: '#vendor-4', image: 'http://lorempixel.com/300/200/' }
        ],
        products: [
            { name: 'Text 1', price: { current: 9000, old: 10000 }, vendor: { name: 'Vendor', path: '#vendor' }, collection: 'Domenico', material: 'Шпон', 'veneer-color': 'Дуб светлый', 'glass-color': 'Светлое', image: 'http://lorempixel.com/200/400/', path: '#product-1' },
            { name: 'Text 2', price: { current: 9000, old: 10000 }, vendor: { name: 'Vendor', path: '#vendor' }, collection: 'Domenico', material: 'Шпон', 'veneer-color': 'Дуб светлый', 'glass-color': 'Светлое', image: 'http://lorempixel.com/200/400/', path: '#product-2' },
            { name: 'Text 3', price: { current: 9000, old: 10000 }, vendor: { name: 'Vendor', path: '#vendor' }, collection: 'Domenico', material: 'Шпон', 'veneer-color': 'Дуб светлый', 'glass-color': 'Светлое', image: 'http://lorempixel.com/200/400/', path: '#product-3' },
            { name: 'Text 4', price: { current: 9000, old: 10000 }, vendor: { name: 'Vendor', path: '#vendor' }, collection: 'Domenico', material: 'Шпон', 'veneer-color': 'Дуб светлый', 'glass-color': 'Светлое', image: 'http://lorempixel.com/200/400/', path: '#product-4' },
            { name: 'Long name Text 5', price: { current: 9000, old: 10000 }, vendor: { name: 'Vendor', path: '#vendor' }, collection: 'Domenico', material: 'Шпон', 'veneer-color': 'Дуб светлый', 'glass-color': 'Светлое', image: 'http://lorempixel.com/200/400/', path: '#product-5' },
            { name: 'Text 6', price: { current: 9000, old: 10000 }, vendor: { name: 'Vendor', path: '#vendor' }, collection: 'Domenico', material: 'Шпон', 'veneer-color': 'Дуб светлый', 'glass-color': 'Светлое', image: 'http://lorempixel.com/200/400/', path: '#product-6' },
            { name: 'Text 7', price: { current: 9000, old: 10000 }, vendor: { name: 'Vendor', path: '#vendor' }, collection: 'Domenico', material: 'Шпон', 'veneer-color': 'Дуб светлый', 'glass-color': 'Светлое', image: 'http://lorempixel.com/200/400/', path: '#product-7' },
            { name: 'Very very very long name Text 8', price: { current: 9000, old: 10000 }, vendor: { name: 'Vendor', path: '#vendor' }, collection: 'Domenico', material: 'Шпон', 'veneer-color': 'Дуб светлый', 'glass-color': 'Светлое', image: 'http://lorempixel.com/200/400/', path: '#product-8' }
        ],
        filter: {
            "data":  [
                {
                    "color_filter":[
                        {
                            "fields":{
                                "Colors_for_filter_ID":"1",
                                "Colors_for_filter_Name":"\u0411\u0435\u043b\u044b\u0439"
                            },
                            "name":"filter_Color_filter[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"1",
                            "text":"\u0411\u0435\u043b\u044b\u0439"
                        },
                        {
                            "fields":{
                                "Colors_for_filter_ID":"2",
                                "Colors_for_filter_Name":"\u041a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439"
                            },
                            "name":"filter_Color_filter[]",
                            "type":"checkbox",
                            "checked":"true",
                            "val":"2",
                            "text":"\u041a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439"
                        },
                        {
                            "fields":{
                                "Colors_for_filter_ID":"3",
                                "Colors_for_filter_Name":"\u0427\u0451\u0440\u043d\u044b\u0439"
                            },
                            "name":"filter_Color_filter[]",
                            "type":"checkbox",
                            "checked":"true",
                            "val":"3",
                            "text":"\u0427\u0451\u0440\u043d\u044b\u0439"
                        }
                    ]
                },
                {
                    "color":[
                        {
                            "fields":{
                                "Message_ID":"1",
                                "Name":"\u0414\u0443\u0431 \u0431\u0443\u0440\u0433\u0443\u043d\u0434\u0441\u043a\u0438\u0439",
                                "Image":"dub_burgundskiy_1.jpg:image\/jpeg:641:images\/bonaveri\/colors\/dub_burgundskiy_1_5.jpg"
                            },
                            "name":"filter_Color[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"1",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"2",
                                "Name":"\u0414\u0443\u0431 \u0441\u0435\u0440\u044b\u0439",
                                "Image":"dub_seryy_2.jpg:image\/jpeg:629:images\/bonaveri\/colors\/dub_seryy_2_5.jpg"
                            },
                            "name":"filter_Color[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"2",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"4",
                                "Name":"\u041a\u0440\u0430\u0441\u043d\u043e\u0435 \u0434\u0435\u0440\u0435\u0432\u043e",
                                "Image":"krasnoe_derevo_4.jpg:image\/jpeg:1889:images\/bonaveri\/colors\/krasnoe_derevo_4_5.jpg"
                            },
                            "name":"filter_Color[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"4",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"5",
                                "Name":"\u0421\u0432\u0435\u0442\u043b\u044b\u0439 \u0430\u043d\u0435\u0433\u0440\u0438",
                                "Image":"svetlyy_anegri_5.jpg:image\/jpeg:1700:images\/bonaveri\/colors\/svetlyy_anegri_5_5.jpg"
                            },
                            "name":"filter_Color[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"5",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"6",
                                "Name":"\u0412\u0435\u043d\u0433\u0435",
                                "Image":"venge_6.jpg:image\/jpeg:1488:images\/bonaveri\/colors\/venge_6_5.jpg"
                            },
                            "name":"filter_Color[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"6",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"7",
                                "Name":"\u0427\u0435\u0440\u043d\u044b\u0439 \u0430\u0431\u0440\u0438\u043a\u043e\u0441",
                                "Image":"chernyy_abrikos_7.jpg:image\/jpeg:591:images\/bonaveri\/colors\/chernyy_abrikos_7_5.jpg"
                            },
                            "name":"filter_Color[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"7",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"9",
                                "Name":"\u0414\u0443\u0431 \u0441\u0432\u0435\u0442\u043b\u044b\u0439",
                                "Image":"dub_svetlyy_9.jpg:image\/jpeg:641:images\/bonaveri\/colors\/dub_svetlyy_9_5.jpg"
                            },
                            "name":"filter_Color[]",
                            "type":"checkbox",
                            "checked":"true",
                            "val":"9",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"10",
                                "Name":"\u0410\u043c\u0435\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u0438\u0439 \u043e\u0440\u0435\u0445",
                                "Image":"amerikanskiy_oreh_10.jpg:image\/jpeg:1833:images\/bonaveri\/colors\/amerikanskiy_oreh_10_5.jpg"
                            },
                            "name":"filter_Color[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"10",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"11",
                                "Name":"\u0422\u0435\u043c\u043d\u044b\u0439 \u0430\u043d\u0435\u0433\u0440\u0438",
                                "Image":"temnyy_anegri_11.jpg:image\/jpeg:596:images\/bonaveri\/colors\/temnyy_anegri_11_5.jpg"
                            },
                            "name":"filter_Color[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"11",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"14",
                                "Name":"\u042f\u0441\u0435\u043d\u044c \u0447\u0435\u0440\u043d\u044b\u0439",
                                "Image":"yasen__chernyy_14.jpg:image\/jpeg:451:images\/bonaveri\/colors\/yasen__chernyy_14.jpg"
                            },
                            "name":"filter_Color[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"14",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"16",
                                "Name":"\u0414\u0443\u0431 \u043a\u043e\u043d\u044c\u044f\u043a",
                                "Image":"dub_kon_yak_16.jpg:image\/jpeg:7960:images\/bonaveri\/colors\/dub_kon_yak_16.jpg"
                            },
                            "name":"filter_Color[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"16",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"18",
                                "Name":"\u042f\u0441\u0435\u043d\u044c \u043a\u0430\u043f\u0443\u0447\u0438\u043d\u043e",
                                "Image":"yasen__kapuchino_18.jpg:image\/jpeg:17219:images\/bonaveri\/colors\/yasen__kapuchino_18.jpg"
                            },
                            "name":"filter_Color[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"18",
                            "text":""
                        }
                    ]
                },
                {
                    "glass":[
                        {
                            "fields":{
                                "Message_ID":"1",
                                "Name":"\u0411\u0440\u043e\u043d\u0437\u0430 \u0441\u0442\u0440\u0430\u0437\u044b",
                                "Image":"bronza_strazy_1.jpg:image\/jpeg:804:images\/bonaveri\/glasses\/bronza_strazy_1_5.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"1",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"3",
                                "Name":"\u0411\u0440\u043e\u043d\u0437\u0430 \u0424\u044c\u044e\u0437\u0438\u043d\u0433",
                                "Image":"bronza_f_yuzing_3.jpg:image\/jpeg:1467:images\/bonaveri\/glasses\/bronza_f_yuzing_3_5.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"3",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"4",
                                "Name":"\u0421\u0432\u0435\u0442\u043b\u043e\u0435 \u0424\u044c\u044e\u0437\u0438\u043d\u0433",
                                "Image":"svetloe_f_yuzing_4.jpg:image\/jpeg:1489:images\/bonaveri\/glasses\/svetloe_f_yuzing_4_5.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"4",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"5",
                                "Name":"\u0421\u0432\u0435\u0442\u043b\u043e\u0435",
                                "Image":"svetloe_5.jpg:image\/jpeg:1308:images\/bonaveri\/glasses\/svetloe_5_5.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"5",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"6",
                                "Name":"\u0411\u0440\u043e\u043d\u0437\u0430",
                                "Image":"bronza_6.jpg:image\/jpeg:373:images\/bonaveri\/glasses\/bronza_6_5.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"6",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"7",
                                "Name":"\u0413\u043b\u0443\u0445\u0430\u044f",
                                "Image":"gluhaya_7.jpg:image\/jpeg:1559:images\/bonaveri\/glasses\/gluhaya_7_5.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"7",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"8",
                                "Name":"\u0421\u0432\u0435\u0442\u043b\u043e-\u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439",
                                "Image":"svetlo-korichnevyy_8.jpg:image\/jpeg:531:images\/bonaveri\/glasses\/svetlo_korichnevyy_8.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"8",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"9",
                                "Name":"\u0421\u0438\u043b\u044c\u0432\u0435\u0440 \u043c\u0435\u0442\u0430\u043b\u0438\u043a",
                                "Image":"sil_ver_metalik_9.jpg:image\/jpeg:532:images\/bonaveri\/glasses\/sil_ver_metalik_9.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"9",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"10",
                                "Name":"\u0422\u0451\u043c\u043d\u043e-\u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439",
                                "Image":"temno-korichnevyy_10.jpg:image\/jpeg:532:images\/bonaveri\/glasses\/temno_korichnevyy_10.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"10",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"11",
                                "Name":"\u0427\u0435\u0440\u043d\u044b\u0439",
                                "Image":"chernyy_11.jpg:image\/jpeg:451:images\/bonaveri\/glasses\/chernyy_11.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"11",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"12",
                                "Name":"\u0411\u0435\u043b\u044b\u0439",
                                "Image":"belyy_12.jpg:image\/jpeg:1135:images\/bonaveri\/glasses\/belyy_12.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"12",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"13",
                                "Name":"\u041a\u043b\u0435\u043e (\u0432\u0438\u0442\u0440\u0430\u0436), \u0441\u0432\u0435\u0442\u043b\u043e\u0435",
                                "Image":"kleo_(vitrazh),_svetloe_13.jpg:image\/jpeg:1472:images\/bonaveri\/glasses\/kleo__vitrazh___svetloe_13.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"13",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"14",
                                "Name":"\u0411\u044c\u044f\u043d\u043a\u0430 (\u0432\u0438\u0442\u0440\u0430\u0436), \u0431\u0440\u043e\u043d\u0437\u0430",
                                "Image":"b_yanka_(vitrazh),_bronza_14.jpg:image\/jpeg:1502:images\/bonaveri\/glasses\/b_yanka__vitrazh___bronza_14.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"14",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"15",
                                "Name":"\u0410\u0437\u0430\u043b\u0438\u044f (\u0432\u0438\u0442\u0440\u0430\u0436), \u0441\u0432\u0435\u0442\u043b\u043e\u0435",
                                "Image":"azaliya_(vitrazh),_svetloe_15.jpg:image\/jpeg:1365:images\/bonaveri\/glasses\/azaliya__vitrazh___svetloe_15.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"15",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"16",
                                "Name":"\u0410\u043b\u044c\u0431\u0430 (\u0432\u0438\u0442\u0440\u0430\u0436), \u0431\u0440\u043e\u043d\u0437\u0430",
                                "Image":"al_ba_(vitrazh),_bronza_16.jpg:image\/jpeg:1520:images\/bonaveri\/glasses\/al_ba__vitrazh___bronza_16.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"16",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"17",
                                "Name":"\u0411\u044c\u044f\u043d\u043a\u0430 (\u0432\u0438\u0442\u0440\u0430\u0436), \u0441\u0432\u0435\u0442\u043b\u043e\u0435",
                                "Image":"b_yanka_(vitrazh),_svetloe_17.jpg:image\/jpeg:1453:images\/bonaveri\/glasses\/b_yanka__vitrazh___svetloe_17.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"17",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"18",
                                "Name":"\u0410\u043b\u044c\u0431\u0430 (\u0432\u0438\u0442\u0440\u0430\u0436), \u0441\u0432\u0435\u0442\u043b\u043e\u0435",
                                "Image":"al_ba_(vitrazh),_svetloe_18.jpg:image\/jpeg:1467:images\/bonaveri\/glasses\/al_ba__vitrazh___svetloe_18.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"18",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"19",
                                "Name":"\u041a\u043b\u0435\u043e (\u0432\u0438\u0442\u0440\u0430\u0436), \u0431\u0440\u043e\u043d\u0437\u0430",
                                "Image":"kleo_(vitrazh),_bronza_19.jpg:image\/jpeg:1378:images\/bonaveri\/glasses\/kleo__vitrazh___bronza_19.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"19",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"20",
                                "Name":"\u0410\u0437\u0430\u043b\u0438\u044f (\u0432\u0438\u0442\u0440\u0430\u0436), \u0431\u0440\u043e\u043d\u0437\u0430",
                                "Image":"azaliya_(vitrazh),_bronza_20.jpg:image\/jpeg:1395:images\/bonaveri\/glasses\/azaliya__vitrazh___bronza_20.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"20",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"21",
                                "Name":"\u041f\u0430\u043b\u0435\u0440\u043c\u043e, \u0431\u0440\u043e\u043d\u0437\u0430",
                                "Image":"palermo,_bronza_21.jpg:image\/jpeg:1309:images\/bonaveri\/glasses\/palermo__bronza_21.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"21",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"22",
                                "Name":"\u0424\u0440\u0430\u043d\u0447\u0435\u0441\u043a\u0430, \u0441\u0432\u0435\u0442\u043b\u043e\u0435",
                                "Image":"francheska,_svetloe_22.jpg:image\/jpeg:1394:images\/bonaveri\/glasses\/francheska__svetloe_22.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"22",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"23",
                                "Name":"\u0424\u043b\u043e\u0440\u0435\u043d\u0446\u0438\u044f, \u0441\u0432\u0435\u0442\u043b\u043e\u0435",
                                "Image":"florentsiya,_svetloe_23.jpg:image\/jpeg:1387:images\/bonaveri\/glasses\/florentsiya__svetloe_23.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"23",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"24",
                                "Name":"\u0424\u0435\u0434\u0435\u0440\u0438\u043a\u0430, \u0441\u0432\u0435\u0442\u043b\u043e\u0435",
                                "Image":"federika,_svetloe_24.jpg:image\/jpeg:1420:images\/bonaveri\/glasses\/federika__svetloe_24.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"24",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"25",
                                "Name":"\u0421\u0430\u043d\u0434\u0440\u0430, \u0441\u0432\u0435\u0442\u043b\u043e\u0435",
                                "Image":"sandra,_svetloe_25.jpg:image\/jpeg:1547:images\/bonaveri\/glasses\/sandra__svetloe_25.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"25",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"26",
                                "Name":"\u041f\u0430\u043b\u0435\u0440\u043c\u043e, \u0441\u0432\u0435\u0442\u043b\u043e\u0435",
                                "Image":"palermo,_svetloe_26.jpg:image\/jpeg:1302:images\/bonaveri\/glasses\/palermo__svetloe_26.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"26",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"27",
                                "Name":"\u0410\u043c\u0435\u043b\u0438\u044f, \u0441\u0432\u0435\u0442\u043b\u043e\u0435",
                                "Image":"ameliya,_svetloe_27.jpg:image\/jpeg:1488:images\/bonaveri\/glasses\/ameliya__svetloe_27.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"27",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"29",
                                "Name":"\u0410\u0434\u0435\u043b\u0438\u043d\u0430, \u0431\u0440\u043e\u043d\u0437\u0430",
                                "Image":"adelina,_bronza_29.jpg:image\/jpeg:837:images\/bonaveri\/glasses\/adelina__bronza_29.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"29",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"30",
                                "Name":"\u0412\u0430\u043b\u0435\u043d\u0442\u0438\u044f, \u0441\u0432\u0435\u0442\u043b\u043e\u0435",
                                "Image":"valentiya,_svetloe_30.jpg:image\/jpeg:1381:images\/bonaveri\/glasses\/valentiya__svetloe_30.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"30",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"31",
                                "Name":"\u0410\u0434\u0435\u043b\u0438\u043d\u0430 (\u0432\u0438\u0442\u0440\u0430\u0436), \u0441\u0432\u0435\u0442\u043b\u043e\u0435",
                                "Image":"adelina_(vitrazh),_svetloe_31.jpg:image\/jpeg:686:images\/bonaveri\/glasses\/adelina__vitrazh___svetloe_31.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"31",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"32",
                                "Name":"\u0424\u0440\u0430\u043d\u0447\u0435\u0441\u043a\u0430, \u0431\u0440\u043e\u043d\u0437\u0430",
                                "Image":"francheska,_bronza_32.jpg:image\/jpeg:753:images\/bonaveri\/glasses\/francheska__bronza_32.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"32",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"33",
                                "Name":"\u0424\u0435\u0434\u0435\u0440\u0438\u043a\u0430, \u0431\u0440\u043e\u043d\u0437\u0430",
                                "Image":"federika,_bronza_33.jpg:image\/jpeg:734:images\/bonaveri\/glasses\/federika__bronza_33.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"33",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"34",
                                "Name":"\u0421\u0430\u043d\u0434\u0440\u0430, \u0431\u0440\u043e\u043d\u0437\u0430",
                                "Image":"sandra,_bronza_34.jpg:image\/jpeg:948:images\/bonaveri\/glasses\/sandra__bronza_34.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"34",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"35",
                                "Name":"\u041b\u0443\u0447\u0438\u0430\u043d\u0430, \u0431\u0440\u043e\u043d\u0437\u0430",
                                "Image":"luchiana,_bronza_35.jpg:image\/jpeg:821:images\/bonaveri\/glasses\/luchiana__bronza_35.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"35",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"36",
                                "Name":"\u0410\u043c\u0435\u043b\u0438\u044f, \u0431\u0440\u043e\u043d\u0437\u0430",
                                "Image":"ameliya,_bronza_36.jpg:image\/jpeg:1505:images\/bonaveri\/glasses\/ameliya__bronza_36.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"36",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"37",
                                "Name":"\u0424\u043b\u043e\u0440\u0435\u043d\u0446\u0438\u044f, \u0431\u0440\u043e\u043d\u0437\u0430",
                                "Image":"florentsiya,_bronza_37.jpg:image\/jpeg:1374:images\/bonaveri\/glasses\/florentsiya__bronza_37.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"37",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"38",
                                "Name":"\u0412\u0430\u043b\u0435\u043d\u0442\u0438\u044f, \u0431\u0440\u043e\u043d\u0437\u0430",
                                "Image":"valentiya,_bronza_38.jpg:image\/jpeg:1330:images\/bonaveri\/glasses\/valentiya__bronza_38.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"38",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"39",
                                "Name":"\u0418\u0437\u0430\u0431\u0435\u043b\u043b\u0430, \u0431\u0440\u043e\u043d\u0437\u0430",
                                "Image":"izabella,_bronza_39.jpg:image\/jpeg:1390:images\/bonaveri\/glasses\/izabella__bronza_39.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"39",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"40",
                                "Name":"\u0418\u0437\u0430\u0431\u0435\u043b\u043b\u0430 (\u0432\u0438\u0442\u0440\u0430\u0436), \u0441\u0432\u0435\u0442\u043b\u043e\u0435",
                                "Image":"izabella_(vitrazh),_svetloe_40.jpg:image\/jpeg:626:images\/bonaveri\/glasses\/izabella__vitrazh___svetloe_40.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"40",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"41",
                                "Name":"\u0412\u0435\u0440\u0441\u0430\u043b\u044c (\u0432\u0438\u0442\u0440\u0430\u0436), \u0441\u0432\u0435\u0442\u043b\u043e\u0435",
                                "Image":"versal__(vitrazh),_svetloe_41.jpg:image\/jpeg:1041:images\/bonaveri\/glasses\/versal___vitrazh___svetloe_41.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"41",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"42",
                                "Name":"\u0410\u0434\u0435\u043b\u0438\u043d\u0430, \u0441\u0432\u0435\u0442\u043b\u043e\u0435",
                                "Image":"adelina,_svetloe_42.jpg:image\/jpeg:1602:images\/bonaveri\/glasses\/adelina__svetloe_42.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"42",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"43",
                                "Name":"\u0418\u0437\u0430\u0431\u0435\u043b\u043b\u0430, \u0441\u0432\u0435\u0442\u043b\u043e\u0435",
                                "Image":"izabella,_svetloe_43.jpg:image\/jpeg:626:images\/bonaveri\/glasses\/izabella__svetloe_43.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"43",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"44",
                                "Name":"\u0418\u0437\u0430\u0431\u0435\u043b\u043b\u0430 (\u0432\u0438\u0442\u0440\u0430\u0436), \u0431\u0440\u043e\u043d\u0437\u0430",
                                "Image":"izabella_(vitrazh),_bronza_44.jpg:image\/jpeg:1269:images\/bonaveri\/glasses\/izabella__vitrazh___bronza_44.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"44",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"45",
                                "Name":"\u0410\u0434\u0435\u043b\u0438\u043d\u0430 (\u0432\u0438\u0442\u0440\u0430\u0436), \u0431\u0440\u043e\u043d\u0437\u0430",
                                "Image":"adelina_(vitrazh),_bronza_45.jpg:image\/jpeg:1341:images\/bonaveri\/glasses\/adelina__vitrazh___bronza_45.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"45",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"46",
                                "Name":"\u0412\u0435\u0440\u0441\u0430\u043b\u044c (\u0432\u0438\u0442\u0440\u0430\u0436), \u0431\u0440\u043e\u043d\u0437\u0430",
                                "Image":"versal__(vitrazh),_bronza_46.jpg:image\/jpeg:1437:images\/bonaveri\/glasses\/versal___vitrazh___bronza_46.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"46",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"47",
                                "Name":"\u041b\u0443\u0447\u0438\u0430\u043d\u0430, \u0441\u0432\u0435\u0442\u043b\u043e\u0435",
                                "Image":"luchiana,_svetloe_47.jpg:image\/jpeg:1374:images\/bonaveri\/glasses\/luchiana__svetloe_47.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"47",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"48",
                                "Name":"\u0421\u0432\u0435\u0442\u044f\u0449\u0438\u0439\u0441\u044f \u0441\u0432\u0435\u0442\u043b\u043e-\u0441\u0438\u043d\u0438\u0439",
                                "Image":"svetyaschiysya_svetlo-siniy_48.jpg:image\/jpeg:533:images\/bonaveri\/glasses\/svetyaschiysya_svetlo_siniy_48.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"48",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"49",
                                "Name":"\u041a\u0440\u0430\u0441\u043d\u044b\u0439",
                                "Image":"krasnyy_49.jpg:image\/jpeg:532:images\/bonaveri\/glasses\/krasnyy_49.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"49",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"50",
                                "Name":"\u0421\u0432\u0435\u0442\u043b\u043e-\u043e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439",
                                "Image":"svetlo-oranzhevyy_50.jpg:image\/jpeg:531:images\/bonaveri\/glasses\/svetlo_oranzhevyy_50.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"50",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"52",
                                "Name":"\u041d\u0430\u0441\u044b\u0449\u0435\u043d\u043d\u044b\u0439 \u0436\u0451\u043b\u0442\u044b\u0439",
                                "Image":"nasyschennyy_zheltyy_52.jpg:image\/jpeg:532:images\/bonaveri\/glasses\/nasyschennyy_zheltyy_52.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"52",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"53",
                                "Name":"\u0421\u0432\u0435\u0442\u043b\u043e-\u0431\u0435\u0436\u0435\u0432\u044b\u0439",
                                "Image":"svetlo-bezhevyy_53.jpg:image\/jpeg:532:images\/bonaveri\/glasses\/svetlo_bezhevyy_53.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"53",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"54",
                                "Name":"\u041f\u0443\u0440\u043f\u0443\u0440\u043d\u044b\u0439",
                                "Image":"purpurnyy_54.jpg:image\/jpeg:532:images\/bonaveri\/glasses\/purpurnyy_54.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"54",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"55",
                                "Name":"\u0413\u043b\u0443\u0431\u043e\u043a\u0438\u0439 \u0441\u0438\u043d\u0438\u0439",
                                "Image":"glubokiy_siniy_55.jpg:image\/jpeg:535:images\/bonaveri\/glasses\/glubokiy_siniy_55.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"55",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"56",
                                "Name":"\u0421\u0432\u0435\u0442\u044f\u0449\u0438\u0439\u0441\u044f \u0441\u0438\u043d\u0438\u0439",
                                "Image":"svetyaschiysya_siniy_56.jpg:image\/jpeg:532:images\/bonaveri\/glasses\/svetyaschiysya_siniy_56.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"56",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"57",
                                "Name":"\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439",
                                "Image":"oranzhevyy_57.jpg:image\/jpeg:532:images\/bonaveri\/glasses\/oranzhevyy_57.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"57",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"58",
                                "Name":"\u042f\u0440\u043a\u043e-\u0437\u0435\u043b\u0451\u043d\u044b\u0439",
                                "Image":"yarko-zelenyy_58.jpg:image\/jpeg:1129:images\/bonaveri\/glasses\/yarko_zelenyy_58.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"58",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"59",
                                "Name":"\u0413\u0440\u0430\u0446\u0438\u044f, \u0441\u0432\u0435\u0442\u043b\u043e\u0435",
                                "Image":"gratsiya,_svetloe_59.jpg:image\/jpeg:1384:images\/bonaveri\/glasses\/gratsiya__svetloe_59.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"59",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"60",
                                "Name":"\u041a\u0430\u043c\u0435\u043b\u0438\u044f, \u0447\u0435\u0440\u043d\u043e\u0435",
                                "Image":"kameliya,_chernoe_60.jpg:image\/jpeg:1473:images\/bonaveri\/glasses\/kameliya__chernoe_60.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"60",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"61",
                                "Name":"\u0413\u0440\u0430\u0446\u0438\u044f, \u0447\u0435\u0440\u043d\u043e\u0435",
                                "Image":"gratsiya,_chernoe_61.jpg:image\/jpeg:1365:images\/bonaveri\/glasses\/gratsiya__chernoe_61.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"61",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"62",
                                "Name":"\u0421\u0442\u0435\u043b\u043b\u0430, \u0437\u0435\u0440\u043a\u0430\u043b\u043e",
                                "Image":"stella,_zerkalo_62.jpg:image\/jpeg:1472:images\/bonaveri\/glasses\/stella__zerkalo_62.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"62",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"63",
                                "Name":"\u041a\u0430\u043c\u0435\u043b\u0438\u044f, \u0431\u0440\u043e\u043d\u0437\u0430",
                                "Image":"kameliya,_bronza_63.jpg:image\/jpeg:1502:images\/bonaveri\/glasses\/kameliya__bronza_63.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"63",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"64",
                                "Name":"\u0413\u0440\u0430\u0446\u0438\u044f, \u0431\u0440\u043e\u043d\u0437\u0430",
                                "Image":"gratsiya,_bronza_64.jpg:image\/jpeg:1466:images\/bonaveri\/glasses\/gratsiya__bronza_64.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"64",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"65",
                                "Name":"\u042d\u043a\u0441\u043a\u043b\u044e\u0437\u0438\u0432, \u0431\u0440\u043e\u043d\u0437\u0430",
                                "Image":"exklyuziv,_bronza_65.jpg:image\/jpeg:596:images\/bonaveri\/glasses\/exklyuziv__bronza_65.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"65",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"66",
                                "Name":"\u041a\u043e\u0441\u043c\u043e\u0441, \u0431\u0440\u043e\u043d\u0437\u0430",
                                "Image":"kosmos,_bronza_66.jpg:image\/jpeg:561:images\/bonaveri\/glasses\/kosmos__bronza_66.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"66",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"67",
                                "Name":"\u042d\u043a\u0441\u043a\u043b\u044e\u0437\u0438\u0432, \u0447\u0435\u0440\u043d\u043e\u0435",
                                "Image":"exklyuziv,_chernoe_67.jpg:image\/jpeg:680:images\/bonaveri\/glasses\/exklyuziv__chernoe_67.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"67",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"68",
                                "Name":"\u041a\u043e\u0441\u043c\u043e\u0441, \u0447\u0435\u0440\u043d\u043e\u0435",
                                "Image":"kosmos,_chernoe_68.jpg:image\/jpeg:651:images\/bonaveri\/glasses\/kosmos__chernoe_68.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"68",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"69",
                                "Name":"\u042d\u043a\u0441\u043a\u043b\u044e\u0437\u0438\u0432, \u0441\u0432\u0435\u0442\u043b\u043e\u0435",
                                "Image":"exklyuziv,_svetloe_69.jpg:image\/jpeg:600:images\/bonaveri\/glasses\/exklyuziv__svetloe_69.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"69",
                            "text":""
                        },
                        {
                            "fields":{
                                "Message_ID":"70",
                                "Name":"\u041a\u043e\u0441\u043c\u043e\u0441, \u0441\u0432\u0435\u0442\u043b\u043e\u0435",
                                "Image":"kosmos,_svetloe_70.jpg:image\/jpeg:563:images\/bonaveri\/glasses\/kosmos__svetloe_70.jpg"
                            },
                            "name":"filter_Glass[]",
                            "type":"checkbox",
                            "checked":"false",
                            "val":"70",
                            "text":""
                        }
                    ]
                }
            ],
            "filter":[
                {
                    "name":"material",
                    "values":{
                        "":"",
                        "\u0428\u043f\u043e\u043d":"\u0428\u043f\u043e\u043d"
                    }
                },
                {
                    "name":"color",
                    "values":{
                        "":"",
                        "1":"1",
                        "2":"2",
                        "4":"4",
                        "5":"5",
                        "6":"6",
                        "7":"7",
                        "9":"9",
                        "10":"10",
                        "11":"11",
                        "14":"14",
                        "16":"16",
                        "18":"18"
                    }
                },
                {
                    "name":"glass",
                    "values":{
                        "":"",
                        "1":"1",
                        "3":"3",
                        "4":"4",
                        "5":"5",
                        "6":"6",
                        "7":"7",
                        "8":"8",
                        "9":"9",
                        "10":"10",
                        "11":"11",
                        "12":"12",
                        "13":"13",
                        "14":"14",
                        "15":"15",
                        "16":"16",
                        "17":"17",
                        "18":"18",
                        "19":"19",
                        "20":"20",
                        "21":"21",
                        "22":"22",
                        "23":"23",
                        "24":"24",
                        "25":"25",
                        "26":"26",
                        "27":"27",
                        "29":"29",
                        "30":"30",
                        "31":"31",
                        "32":"32",
                        "33":"33",
                        "34":"34",
                        "35":"35",
                        "36":"36",
                        "37":"37",
                        "38":"38",
                        "39":"39",
                        "40":"40",
                        "41":"41",
                        "42":"42",
                        "43":"43",
                        "44":"44",
                        "45":"45",
                        "46":"46",
                        "47":"47",
                        "48":"48",
                        "49":"49",
                        "50":"50",
                        "52":"52",
                        "53":"53",
                        "54":"54",
                        "55":"55",
                        "56":"56",
                        "57":"57",
                        "58":"58",
                        "59":"59",
                        "60":"60",
                        "61":"61",
                        "62":"62",
                        "63":"63",
                        "64":"64",
                        "65":"65",
                        "66":"66",
                        "67":"67",
                        "68":"68",
                        "69":"69",
                        "70":"70"
                    }
                },
                {
                    "name":"color_filter",
                    "values":{
                        "":"",
                        "1":"1",
                        "2":"2",
                        "3":"3"
                    }
                }
            ]
        }
    };

    return [
        { block: 'header' },
        {
            block: 'main',
            // mods: { serp: true }
            // mods: { product: true }
            mods: { order: true }
            // mods: { catalog: true }
            // mods: { home: true }
        },
        {
            block: 'service-offers'
        },
        { block: 'footer' }
    ];
});
