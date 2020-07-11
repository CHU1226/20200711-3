$(document).ready(function() {
	$('#pic1').click(function(){
		$('#PIC').attr('src', 'img/new1.jpg');
	});
	$('#pic2').click(function(){
		$('#PIC').attr('src', 'img/new3.jpg');
	});
	$('.event-textbx').hide();
	$('.event-textbx:first').show();
	$('.event-imgbx img').click(function(){
		$('.event-textbx').hide();
		var tab = $(this).attr('href');
		$(tab).fadeIn();
		return false
	});
	$('.shop-box').click(function(){
		var pdcard = $(this).attr('href');
		$(pdcard).css('right', '0');
	});
	$('.pdcard-text .btn').click(function(event) {
		$('.pdcard').css('right','-130%');
	});
	$('#logon').click(function(){
		$('form#log').fadeIn();
		$('.bg-dark').fadeIn();
	});
	$('.close2').click(function(){
		$('form#log').fadeOut();
		$('form#reg').fadeOut();
		$('.bg-dark').fadeOut();
	});
	$('.reg').click(function(){
		$('form#log').fadeOut();
		$('form#reg').fadeIn();
		$('.bg-dark').fadeIn();
		return	false
	});
	$('.pdcard .btn-primary').click(function(){
		cart=0;
		cart++;
		$('#car').text("購物車("+cart+")");	
	});
});