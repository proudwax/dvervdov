modules.define('jquery_slick', ['jquery'], function(provide, $) {
    window.jQuery = $;
    /* borschik:include:../../node_modules/slick-carousel/slick/slick.min.js */;
	provide($);
});
