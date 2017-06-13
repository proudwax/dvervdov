modules.define('plugin__slick', ['jquery'], function(provide, $) {
    window.jQuery = $;
    /* borschik:include:../../libs/slick/js/slick.min.js */;
	provide($);
});
