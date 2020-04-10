export default () => {

	function randomInteger(min, max) {
		var rand = min + Math.random() * (max + 1 - min);
		return Math.floor(rand);
	}
	 let counter = 1;
    setInterval(function () {

			let  randNum = randomInteger(27, 47);
      if (counter == 1) {
			

				$(".online-people p").fadeOut(1100,function() {
					$(this).text('116 продаж за последний час');
				}).fadeIn();
				counter = 0;
      } else {
		
				$(".online-people p").fadeOut(1100,function() {
					$(this).text('Сейчас на сайте ' + randNum + ' человек');
				}).fadeIn();
				counter = 1;
      }
    }, 6000);
  






  // function formTs() {
  //   var people = $(".online-people");
  //   var sold = $(".online-sold");

  //   var dynamic = $(".online-dynamic");

  //   function randomInteger(min, max) {
  //     var rand = min + Math.random() * (max + 1 - min);
  //     return Math.floor(rand);
  //   }

  //   let counter = 0;
  //   setInterval(function () {
  //     if (counter == 1) {
  //       people.fadeIn(0);
  //       sold.fadeOut(0);
  //       counter = 0;

  //       dynamic.text(randomInteger(27, 47));
  //     } else {
  //       people.fadeOut(0);
  //       sold.fadeIn(0);
  //       counter = 1;

	// 			dynamic.text(randomInteger(27, 47));
				
  //     }
  //   }, 4000);
  // }
  // setTimeout(formTs, 0);
};
