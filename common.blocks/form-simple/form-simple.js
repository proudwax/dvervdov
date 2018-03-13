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

            return new Promise(function (resolve, reject) {
                var xhttp = new XMLHttpRequest();
                xhttp.open('GET', url, true);

                xhttp.onload = function () {
                    if (this.status == 200) {
                        resolve(this.response);
                    } else {
                        var error = new Error(this.statusText);
                        error.code = this.status;
                        reject(error);
                    }
                };

                xhttp.onerror = function () {
                    reject(new Error("Network Error"));
                };

                xhttp.send();
            });

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
