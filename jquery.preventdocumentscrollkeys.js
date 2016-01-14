/**
* @name @ebay/jquery-prevent-document-scroll-keys
* @function $.fn.preventDocumentScrollKeys
* @version 0.1.2
* @author Ian McBurnie <ianmcburnie@hotmail.com>
* @desc Prevent main page scroll when pressing any scroll key (e.g. down arrow, spacebar) with focus on given selector.
* @requires @ebay/jquery-common-keys
* @todo store hash of selectors to avoid duplicate event handlers
*/
(function ($, window, document, undefined) {

    $.fn.preventDocumentScrollKeys = function preventDocumentScrollKeys() {
        $(document).commonKeys();
        $(this).preventDocumentSpaceKeyScroll();
        $(this).preventDocumentArrowKeyScroll();
    };

    $.fn.preventDocumentSpaceKeyScroll = function preventDocumentSpaceKeyScroll() {
        $(document).on('space.commonKeyDown', $(this).selector, function(e) {
            e.preventDefault();
        });
    };

    $.fn.preventDocumentArrowKeyScroll = function preventDocumentArrowKeyScroll() {
        $(document).on('uparrow.commonKeyDown downarrow.commonKeyDown', $(this).selector, function(e) {
            e.preventDefault();
        });
    };

}(jQuery, window, document));
