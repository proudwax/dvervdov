modules.define('range', ['i-bem-dom', 'plugin__range', 'input'], function(provide, bemDom, Range, Input) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {

                var inputRange = this._elem('control').domElem[0],
                    inputList = this.findChildBlocks(Input)._entities,
                    inputValues = [];

                Range.create(inputRange, {
                    pips: {
                		mode: 'range',
                		density: 50
                	},
                	connect: true,
                    // tooltips: true,
                    step: 1,
                    start: this.params.start,
                	range: this.params.range,
                    format: {
                        to: function (value) { return parseInt(value); },
                        from: function (value) { return value; }
                    }
                });

                inputRange.noUiSlider.on('update', function (values, index) {
                    inputList[index].setVal(values[index]);
                });

                for (var i = 0; i < inputList.length; i++) {
                    inputValues.push(null);
                }

                inputList.map(function (item, index) {

                    item._domEvents().on('change', inputValues, function () {

                        inputValues[index] = this.getVal();

                        inputRange.noUiSlider.set(inputValues);
                    });
                });
            }
        }
    }
}));

});
