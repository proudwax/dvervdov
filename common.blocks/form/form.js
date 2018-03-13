modules.define('form', ['i-bem-dom'], function(provide, bemDom, Form) {

provide(bemDom.declBlock(Form, {
    onSerialize: function (form) {
        var data = [].map.call(form.querySelectorAll('input, select, textarea'), function (field) {
            return field.name + '=' + encodeURIComponent(field.value).replace(/%20/g, '+');
        });

        return data.join('&');
    },

    onSendForm: function () {
        var _this = this,
            domForm = this.domElem[0],
            data = this.onSerialize(domForm);

        return new Promise(function (resolve, reject) {
            var xhttp = new XMLHttpRequest();

            if (domForm.method.toLowerCase() == 'get') {
                xhttp.open(domForm.method, domForm.action + '?' + data, true);
                xhttp.send();
            } else {
                xhttp.open(domForm.method, domForm.action, true);
                xhttp.send(data);
            }

            xhttp.onreadystatechange = function () {
                if (xhttp.readyState != 4) return;

                if (xhttp.status == 200) {
                    resolve(xhttp.responseText);
                } else {
                    var error = new Error(xhttp.statusText);
                    error.code = xhttp.status;
                    reject(error);
                }
            };
        });
    }

}));

});
