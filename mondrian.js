$(document).ready(function() {

	var paint = "white"

	$(".color").click(function() {
		paint = $(this).css("background-color");
	})

	$(".row").click(function() {
		$(this).css("background-color", paint);
	});
});