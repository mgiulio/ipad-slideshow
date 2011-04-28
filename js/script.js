$(window).load(function() {
	var
		$slides = $('#slides'),
		$frame = $('<div id="frame"></div>'),
		$prev = $('<a class="nav_arrow" id="prev" href="#">prev</a>'),
		$next = $('<a class="nav_arrow" id="next" href="#">next</a>'),
		$screen = $('<div id="screen"></div>')
			.append($prev, $next)
			.mouseover(function() { $slides.cycle('pause'); $prev.show(); $next.show(); })
			.mouseout(function() { $prev.hide(); $next.hide(); $slides.cycle('resume'); }),
		$pager = $('<div id="pager"></div>').hover(
			function() { $slides.cycle('pause'); $prev.show(); $next.show(); },
			function() { $prev.hide(); $next.hide(); $slides.cycle('resume'); }
		)
	; 
	
	$slides.after($frame);
	$frame.append($screen, $pager);
	$screen.append($slides);
	
	$slides.cycle({
		fx: 'scrollHorz',
		timeout: 4000,
		speed: 500,
		prev: '#prev',
		next: '#next',
		pager: '#pager'
	});
});