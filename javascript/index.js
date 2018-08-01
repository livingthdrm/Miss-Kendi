jQuery(document).scroll(function() {
    if (jQuery(this).scrollTop() > 175) {
        jQuery('.row1').css({
           'position': 'fixed',
           'top': '0',
           'width': '950px'
        });
    } 
    else {
        jQuery('.row1').css('position','static');
    }
});