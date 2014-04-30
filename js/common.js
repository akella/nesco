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
});