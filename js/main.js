//	## main.js



$(document).ready(function() {
	$.getJSON( "backgrounds.php", function(data) {
	  $('#backimgs').cycleInit(data, 4000, 4000)
	});
	
	setTimeout(function() {$('#startPage').css('opacity', 1)}, 1000);
	
	$('#startPage').on('click', function(){
		$('#startPage').css('opacity', 0);
		$('#mainPage').css('visibility', 'visible');
		$('#mainPage').css('opacity', 1);
		
		setTimeout(function() {$('#backimgs').cycleStart()}, 2000);
	})
})




$(document).keyup(function(e) {
});