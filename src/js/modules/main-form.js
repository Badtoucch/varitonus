

	export default () => {
		function formTs() {
			var people = $('.online-people');
		var sold = $('.online-sold');
		
		var dynamic = $('.online-dynamic');
		
		function randomInteger(min, max) {
			var rand = min + Math.random() * (max + 1 - min);
			return Math.floor(rand);
		}
		setInterval(function() {
			dynamic.text(randomInteger(27, 47));
		},8400);
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

		
		}
		setTimeout(formTs, 4000);
	};