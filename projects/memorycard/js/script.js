$(document).ready(function() {
	
var cards = [1,2,3,4,5,6,7,8,9],
	current = null,
	count = 0,
	time = 100,
	click = new Audio('sound/clicked.wav'),
	error = new Audio('sound/beep-03.wav'),
	success = new Audio('sound/clicked2.wav'),
	fail = new Audio('sound/fail.mp3'),
	success2 = new Audio('sound/applause.mp3'),
	nhacnen = new Audio('sound/europa.mp3');

//shuffle card
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//card flipped
function clicked(){
	if($(this).hasClass('flipped')){
		return;
	}
	$(this).toggleClass('flipped');
	click.play();

	if (!current){
		current = $(this);
	}else {
		if(current.attr('data-name') != $(this).attr('data-name')){
			var that = $(this);
			setTimeout(function(){
				current.toggleClass('flipped');
				that.toggleClass('flipped');
				current = null;
				error.play();
			},500);
		} else {
			var that = $(this);
			setTimeout(function(){
				that.css('opacity', '0');
				current.css('opacity', '0');
				current = null;			
				success.play();

				count++;	
				if(count == 9){
				$('.win').show().css('opacity', '1');
				clearInterval(run);
				success2.play();
				nhacnen.pause();
				} 
			},500);
		}
	}
};

//play
$('#go').on('click',function(){
	$('.popup').hide();
	$('.win').hide();
	$('.lose').hide();
	nhacnen.play();
		run = setInterval(function(){
		var bar = document.getElementById("bar"); 
		time--;
		bar.style.width = time + '%';
		console.log(time);
		if(time > 30 && time < 60){
			bar.style.background = '#009900';
		}		
		if(time<30){
			bar.style.background = 'red';
		}
		if(time < 0){
			clearInterval(run);
			$('.lose').show().css('opacity', '1');
			fail.play();
			nhacnen.pause();
		}
	},560);
});

//play again
$('#again').on('click', function(){
	window.location.href = 'index.html';
})

//load card in html
$(function() {
	cards = cards.concat(cards);
	cards = shuffle(cards);
	var html = '';
	for(var i = 0; i < cards.length ; i++){
		html += '<div class="card" data-name="' + cards[i] + '">' + 
		'<div class="front"><img src="image/' + cards[i] + '.jpg"/></div>' + 
		'<div class="back"><img src="image/pretty.jpg"/></div>' + 
		'</div>';
	}
	$('.grid').html(html);

	$('.card').on('click', clicked);

});

});