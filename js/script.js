$(window).load(function() {
	var
		$slides = $('#slides'),
		$frame = $('<div id="frame"></div>'),
		$screen = $('<div id="screen"></div>')
			.append('<a class="nav_arrow" id="prev" href="#">prev</a><a class="nav_arrow" id="next" href="#">next</a></div>')
			.mouseover(function() {
				$slides.cycle('pause');
				$(this).find('.nav_arrow').show();
			})
			.mouseout(function() {
				$(this).find('.nav_arrow').hide();
				$slides.cycle('resume');
			}),
		$pager = $('<div id="pager"></div>').hover(
			function() { $slides.parent().find('.nav_arrow').show(); },
			function() { $slides.parent().find('.nav_arrow').hide(); }
		)
	; 
	
	$slides.after($frame);
	$frame.append($screen, $pager);
	$screen.append($slides);
	
	$slides.cycle({
		fx: 'scrollHorz',
		timeout: 4000,
		speed: 500,
		pauseOnPagerHover: true,
		prev: '#prev',
		next: '#next',
		pager: '#pager'
	});
});