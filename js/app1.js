$(document).on('ready', function(){
	var content = $('.content');

	$('section').on('mouseenter', function(){
		var currentBg = $('.bg').eq(1),
			nextBg = $('.bg').eq(0);
		url = this.getAttribute('data-bg');

		changeBg(currentBg, nextBg, url);
	});

	$('.bg, .header, .content-header').on('mouseenter', function(){
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

	$('.search-input').on('keypress', function(event){
		if (event.which === 13){
			$('#search-input').prop('checked', false);
		}
	})

	for (var i = 1; i < 10; i++){
		var image = new Image();
		image.src = "img/i" + i + ".jpg";
		image.onload = function() {
		console.log('Картинка в кэше!');
		};
	}
})