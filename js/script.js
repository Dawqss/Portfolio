$(window).ready(function() {
	setTimeout(function(){$('#loading-screen').addClass('none');}, 1000);
	});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $('nav').removeClass('visible').addClass('hidden');
    } else{
        $('nav').removeClass('hidden').addClass('visible');
    }
    checkMenu();
    if($(document).scrollTop()>500){
    	setTimeout(function(){
    		$('.left_door').animate({'right': '+200%'}, {queue: false, duration: 800, easing: 'linear'});
			$('.left_door').animate({'left': '-200%'}, {queue: false, duration: 800, easing: 'linear'});
			$('.right_door').animate({'right': '-200%'}, {queue: false, duration: 800, easing: 'linear'});
			$('.right_door').animate({'left': '+200%'}, {queue: false, duration: 800, easing: 'linear'});
    	}, 800);
    } else if ($(document).scrollTop()>283 && $(window).width() <= 425) {
    	setTimeout(function(){
    		$('.left_door').animate({'right': '+200%'}, {queue: false, duration: 800, easing: 'linear'});
			$('.left_door').animate({'left': '-200%'}, {queue: false, duration: 800, easing: 'linear'});
			$('.right_door').animate({'right': '-200%'}, {queue: false, duration: 800, easing: 'linear'});
			$('.right_door').animate({'left': '+200%'}, {queue: false, duration: 800, easing: 'linear'});
    	}, 800);
    } else if ($(document).scrollTop()>213 && $(window).width() <= 320) {
    	setTimeout(function(){
    		$('.left_door').animate({'right': '+200%'}, {queue: false, duration: 800, easing: 'linear'});
			$('.left_door').animate({'left': '-200%'}, {queue: false, duration: 800, easing: 'linear'});
			$('.right_door').animate({'right': '-200%'}, {queue: false, duration: 800, easing: 'linear'});
			$('.right_door').animate({'left': '+200%'}, {queue: false, duration: 800, easing: 'linear'});
    	}, 800);
    }
});

function checkMenu(){
	var checkHidden = 'hidden';
	var checkVisible = 'visible';
	if ($('nav').attr('class') == checkHidden) {
		$('#menu_button').removeClass('menu_button_hidden').addClass('visible');
	} else if ($('nav').attr('class') == checkVisible) {
		$('#menu_button').removeClass('visible').addClass('menu_button_hidden');
	}
}

$('#button_nav').click(function(){
	$('#menu_button').removeClass('visible').addClass('menu_button_hidden');
	$('nav').removeClass('hidden').addClass('visible');
});

