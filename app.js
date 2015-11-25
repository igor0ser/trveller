var content = $('.content');

$('.item').on('mouseenter', function(){
	var currentBg = $('.bg').eq(1),
		nextBg = $('.bg').eq(0);


	// nextBg.css('background-image', 'url(' + this.getAttribute('data-bg') + ')');
	// currentBg.fadeOut();
	// nextBg.fadeIn(function(){
	// 	currentBg.hide().prependTo('body');
	// });
	url = this.getAttribute('data-bg');
	changeBg(currentBg, nextBg, url);
});

$('.bg').on('mouseenter', function(){
	var currentBg = $('.bg').eq(1);

	if (currentBg.css('background-image').includes('traveller.jpg') ){
	console.log('ok');
		return;
	}

	var nextBg = $('.bg').eq(0);
	// nextBg.css('background-image', 'url(img/traveller.jpg)');
	// currentBg.fadeOut();
	// nextBg.fadeIn(function(){
	// 	currentBg.hide().prependTo('body');
	// });
	changeBg(currentBg, nextBg);
});

function changeBg(currentBg, nextBg, url){
	url = url || 'img/traveller.jpg';
	nextBg.css('background-image', 'url(' + url + ')');
	currentBg.fadeOut();
	nextBg.fadeIn(function(){
		currentBg.hide().prependTo('body');
	});
}