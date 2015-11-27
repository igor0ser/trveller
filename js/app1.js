$(document).on('ready', function(){
	var content = $('.content');

	$('section').on('mouseenter', function(){
		var currentBg = $('.bg').eq(1),
			nextBg = $('.bg').eq(0);
		url = this.getAttribute('data-bg');

		changeBg(currentBg, nextBg, url);
	});

	$('.bg').on('mouseenter', function(){
		var currentBg = $('.bg').eq(1);


		if (currentBg.css('background-image').includes('traveller.jpg') ){
			return;
		}
		var nextBg = $('.bg').eq(0);

		changeBg(currentBg, nextBg);
	});

	function changeBg(currentBg, nextBg, url){
		url = url || 'img/traveller.jpg';
		nextBg.css('background-image', 'url(' + url + ')');
		
		currentBg.fadeOut('slow');
		nextBg.fadeIn('slow', function(){
			currentBg.hide().prependTo('body');
		});
	}
})