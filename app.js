var content = $('.content');

$('.item').on('mouseenter', function(){
	var currentBg = $('.bg').eq(1),
		nextBg = $('.bg').eq(0);


	nextBg.css('background-image', 'url(' + this.getAttribute('data-bg') + ')');
	currentBg.fadeOut();
	nextBg.fadeIn(function(){
		currentBg.hide().prependTo('body');
	});
});

$('.bg').on('mouseenter', function(){
	var currentBg = $('.bg').eq(1),
		nextBg = $('.bg').eq(0);

	if (currentBg.css('background-image') === 'url(file:///D:/Workspace/traveller/img/traveller.jpg)'){
		return;
	}

	nextBg.css('background-image', 'url(img/traveller.jpg)');
	currentBg.fadeOut();
	nextBg.fadeIn(function(){
		currentBg.hide().prependTo('body');
	});
});

function changeBg(currentBg, nextBg, url){
	url = url || 'url(img/traveller.jpg)';
}