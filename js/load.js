$(document).ready(function() {
		$('#credit').hide(0).fadeIn(1000);
		$('.borboletas').hide();



	setTimeout(function(){
		$('#credit').fadeOut(1000);
	}, 1500);
	//
	setTimeout(function(){
		$('#title').show();
		$('.borboletas').show();
	}, 3000);
	//
  // setTimeout(function(){
	// 	$('#title').hide();
	// 	$('.borboletas').hide();
  // }, 7000);
	// 	//
  // setTimeout(function(){
	// 	  $('body').addClass('loaded');
	// 		$('body').removeClass("noscroll");
	// 	}, 6400);
 });
