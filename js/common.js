head.ready(function() {

	$(window).scroll(function(){
		t = $(this).scrollTop();
		b = $('body');
		if(t>100){
			b.addClass('is-nottop');
		}
		else{
			b.removeClass('is-nottop')
		}
	});

	$('.search__switcher a').click(function(event) {
		$('.search__switcher a').removeClass('is-active');
		$(this).addClass('is-active');
		return false;
	});
	
	$('.superslider__playpause').click(function(event) {
		$('.superslider').cycle('stop');
	});
});