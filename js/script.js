$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $('nav').removeClass('visible').addClass('hidden');
    } else{
        $('nav').removeClass('hidden').addClass('visible');
    }
    checkMenu();
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
