modules.define('form-simple', ['i-bem-dom'], function (provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    var response = this.onSendForm();
                    console.log(response);
                }
            }
        },

        onSerialize: function (form) {
            var data = [].map.call(form.querySelectorAll('input, select, textarea'), function (field) {
                return field.name + '=' + encodeURIComponent(field.value).replace(/%20/g, '+');
            });

            return data.join('&');
        },

        onSendForm: function () {
            var _this = this,
                domForm = this.domElem,
                data = this.onSerialize(this.domElem[0]),
                xhttp = new XMLHttpRequest();

            if (domForm[0].method.toLowerCase() == 'get') {
                xhttp.open(domForm[0].method, domForm[0].action + '?' + data, true);
                xhttp.send();
            } else {
                xhttp.open(domForm[0].method, domForm[0].action, true);
                xhttp.send(data);
            }

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    return JSON.parse(this.responseText);
                }
            };
        }
    }));

});
