

	export default () => {
		var dynamic = $('.online-dynamic');
		dynamic.html(randomInteger(27, 47));
		
		function randomInteger(min, max) {
			var rand = min + Math.random() * (max + 1 - min);
			return Math.floor(rand);
		}
		function formTs() {
			var people = $('.online-people');
		var sold = $('.online-sold');
		
	
		
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
		}, 4000);
		
	
	 setInterval(function () {
		setTimeout(function () {
			dynamic.html(randomInteger(27, 47));
	}, 2000);
			}, 4000);
		}
		setTimeout(formTs, 2000);
		
	
	};