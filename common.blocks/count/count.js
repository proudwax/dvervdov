modules.define('count', ['i-bem-dom', 'button', 'input'], function(provide, bemDom, Button, Input) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {
                this._minus = this.findChildBlock({ block: Button, modName: 'count', modVal: 'decrement' }),
                this._plus = this.findChildBlock({ block: Button, modName: 'count', modVal: 'increment' }),
                this._input = this.findChildBlock({ block: Input, modName: 'count', modVal: true });

                this.inputChange();

                this._input._domEvents().on('change', function () {
                    this.inputChange();  
                }.bind(this));
                
                this._plus._events(Button).on('click', function () {
                    this._input.setVal(parseInt(this._input.getVal()) + 1);
                    this.inputChange();
                }.bind(this));

                this._minus._events(Button).on('click', function () {
                    this._input.setVal(parseInt(this._input.getVal()) - 1);
                    this.inputChange();
                }.bind(this));
            }
        }
    },

    inputChange: function () {
        var val = this._input.getVal();

        if (val < 1 || Math.ceil(val) != val) {
            this._input.setVal(1);
        }

        if (val == 1) {
            this._minus.setMod('disabled', true);
        } else {
            this._minus.delMod('disabled');
        }

        if (val == 99) {
            this._plus.setMod('disabled', true);
        } else {
            this._plus.delMod('disabled');
        }
    },


}));

});
