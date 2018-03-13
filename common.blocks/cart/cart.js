modules.define('cart', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {
                console.log(this);
            }
        }
    },

    onSendForm: function () {
        var _this = this,
            domForm = this.domElem,
            data = this.onSerialize(this.domElem[0]),
            xhttp = new XMLHttpRequest();

        this.setMod('waiting');

        if (domForm[0].method.toLowerCase() == 'get') {
            xhttp.open(domForm[0].method, domForm[0].action + '?' + data, true);
            xhttp.send();
        } else {
            xhttp.open(domForm[0].method, domForm[0].action, true);
            xhttp.send(data);
        }

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(JSON.parse(this.responseText));
            }
        };
    },

    onSerialize: function (form) {
        var data = [].map.call(form.querySelectorAll('input, select, textarea'), function (field) {
            return field.name + '=' + encodeURIComponent(field.value).replace(/%20/g, '+');
        });

        return data.join('&');
    },
}));

});
