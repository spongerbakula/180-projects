$(document).ready(function() {
	var d = new Date()
	day = d.getDay()
	msg = ["Sunday Funday!", 
			"Case of the Mondays",
			"Taco Tuesday",
			"Humpday!",
			"Thirsty Thursday time!",
			"TGIF",
			"It's the freakin' weekend!"]

	$('#' + day).attr('id', 'today');
	$("#block").text(msg[day]);
})