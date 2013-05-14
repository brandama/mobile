$(document).ready(function() {

	var count = 0;	
	var total_questions = $(".quiz > .question").length;
	
	$(function () {
		var $ids = $("div[id^='question_']")
		.map(function () {
			return this.id; 
		}).get();
		//alert($ids);
	});
		
	//When the a link (button in this case) is clicked
	$(".quiz .question span a").click(function(){
		
		if (!($(this).parent("span").hasClass("answered"))) {
		
			// adds answered class so user cannot change answer
			$(this).parent("span").addClass("answered");
			
			// runs if they did not click the correct answer
			if (!($(this).hasClass("correct"))) {
				// puts strike-through wrong answer and makes their answer red for incorrect
				// $(this).addClass("wronganswer");
				// $(this).siblings(".correct").addClass("realanswer");
				
				// If the answer is incorrect
				$(this).parent().parent().children("div").prepend('<p>INCORRECT</p>');
				$(this).parent().parent().children("div").addClass("wrongbox");
				$(this).parent().parent().children("div").fadeTo(500, 1);
			}
			
			// runs if they clicked the correct answer
			if ($(this).hasClass("correct")) {
				//adds one to quiz total correct tally
				count++;
				// adds correct answer class
				$(this).addClass("correctanswer");
				// if the anser is correct
				$(this).parent().parent().children("div").prepend('<p>CORRECT</p>');
				$(this).parent().parent().children("div").addClass("rightbox");
				$(this).parent().parent().children("div").fadeTo(750, 1);
			}
			
			if ($('span.answered').length == total_questions) {
				$('.quizresults').fadeIn('slow');
				$('.quiztotal').html('You got a '+count+' out of '+total_questions+' on the quiz.');
			}
		}
		
	});
	
	// $("a").click(function () {
		 // $(this).toggle();
	// });
	
	
	// $('a').click(function(){ 
		// $(this).buttonMarkup({ theme: "a" });
	// });


});