modules.define('count', ['i-bem-dom', 'button', 'input'], function (provide, bemDom, Button, Input) {

    provide(bemDom.declBlock(this.name, {
        beforeSetMod: {
            'js': {
                'inited': function () {
                    var control = this.findChildBlock(Input).findChildElem('control').domElem[0],
                        maxLength = this.params.range[1].toString().length;

                    control.setAttribute('maxlength', maxLength);
                }
            }
        },
        onSetMod: {
            'js': {
                'inited': function () {
                    this._minus = this.findChildBlock({ block: Button, modName: 'count', modVal: 'decrement' });
                    this._plus = this.findChildBlock({ block: Button, modName: 'count', modVal: 'increment' });
                    this._input = this.findChildBlock({ block: Input, modName: 'count', modVal: true });
                    this._val = this.getVal();

                    this._inputChange();

                    this._input._domEvents().on('change', function () {
                        this._inputChange();
                        if (this._val = this._val != this.getVal()) {
                            this._emit('change', { val: this.getVal() });
                        }
                    }.bind(this));

                    this._plus._events(Button).on('click', function () {
                        this._input.setVal(parseInt(this._input.getVal()) + 1);
                        this._inputChange()
                            ._emit('change', { val: this.getVal() });
                    }.bind(this));

                    this._minus._events(Button).on('click', function () {
                        this._input.setVal(parseInt(this._input.getVal()) - 1);
                        this._inputChange()
                            ._emit('change', { val: this.getVal() });
                    }.bind(this));
                }
            }
        },

        _inputChange: function () {
            var val = this._input.getVal(),
                rangeFrom = this.params.range[0],
                rangeTo = this.params.range[1];

            if (val <= rangeFrom || Math.ceil(val) != val) {
                this._input.setVal(rangeFrom);
                val = rangeFrom;
            } else if (val >= rangeTo) {
                this._input.setVal(rangeTo);
                val = rangeTo;
            }

            if (val == rangeFrom) {
                this._minus.setMod('disabled', true);
            } else {
                this._minus.delMod('disabled');
            }

            if (val == rangeTo) {
                this._plus.setMod('disabled', true);
            } else {
                this._plus.delMod('disabled');
            }

            return this;
        },

        getVal: function () {
            return this._input.getVal();
        },

        setVal: function (val) {
            this._input.setVal(val);

            return this;
        }
    }));

});
