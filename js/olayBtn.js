jQuery(function() {
  
	var showFlag = false;
	var pagetop = jQuery('#olayBtn');	
	pagetop.css('bottom', '-100px');
	var showFlag = false;
	
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 100) {
			if (showFlag == false) {
				showFlag = true;
				pagetop.stop().animate({'bottom' : '0'}, 200); 
			}
		} else {
			if (showFlag) {
				showFlag = false;
				pagetop.stop().animate({'bottom' : '-100px'}, 200); 
			}
		}
	});
});

jQuery(function() {
	var pagetop = jQuery('#pageTop');	
	pagetop.click(function () {
		jQuery('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
});