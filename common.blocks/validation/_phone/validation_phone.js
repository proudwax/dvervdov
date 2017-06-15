/**
 * @module validation_email
 */
modules.define('validation_phone', ['jquery_mask'], function(provide, jquery_mask) {

var DEFAULT_MESSAGE = 'Field requires phone inside';

provide(function(field) {
    if(!field.params.pattern && !field.params.pattern.value) {
        return function () {
            return null;
        };
    }

    var re = new RegExp(field.params.value);
    return function(val) {
        return !val || re.test(val)? null : {
            field : field.getName() || field.getId(),
            message : field.getValidationMessage('pattern') || DEFAULT_MESSAGE.replace(/%s/g, field.params.value)
        };
    };
});

});
