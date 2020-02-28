

	export default () => {
		var people = $('.online-people');
		var sold = $('.online-sold');
		var dynamic = $('.online-dynamic');
		
		function randomInteger(min, max) {
			var rand = min + Math.random() * (max + 1 - min);
			return Math.floor(rand);
		}
		
		let counter = 1;
		setInterval(function() {
			if (counter == 1){
				people.fadeIn();
				sold.fadeOut();
				counter = 0;
			} else {
				people.fadeOut();
				sold.fadeIn();
				counter = 1;
			}
		}, 2000);
		
		
		setInterval(function () {
		setTimeout(function () {
			dynamic.html(randomInteger(27, 47));
		}, 2000);
			}, 4000);
		
	
	};