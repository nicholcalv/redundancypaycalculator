/*!
 * copy to clipboard
 */

function selectElementContents(el) {
    // Copy textarea, pre, div, etc.
    if (document.body.createTextRange) {
        // IE
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.select();
        textRange.execCommand("Copy");
    } 
    else if (window.getSelection && document.createRange) {
        // Non-Internet Explorer
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copy command was ' + msg);
        }
        catch (err) {
            console.log('Oops, unable to copy');
        }
    }
    
//	var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
//    if (!mobile){
		alert("Link code to Redundancy Calculator is copied to clipboard! It is ready for you to paste the code to your web page.");
//    }

} // end function selectElementContents(el)

function make_copy_button(el) {
    var copy_btn = document.createElement('input');
    copy_btn.type = "button";
    el.parentNode.insertBefore(copy_btn, el.nextSibling);
    copy_btn.onclick = function() {
        selectElementContents(el);
		window.getSelection().removeAllRanges();
    };

    if (document.queryCommandSupported("copy") || parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2]) >= 42) {
        // Copy works with Internet Explorer 4+, Chrome 42+, Firefox 41+, Opera 29+
        copy_btn.value = "Copy to Clipboard";
    }
    else {
        // Select only for Safari and older Chrome, Firefox and Opera
        copy_btn.value = "Select All (then press Ctrl + C to Copy)";
    }
}