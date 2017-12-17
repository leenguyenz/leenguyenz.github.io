$(document).ready(function() {
	
var allQuestion = [{
		question: "Sông dài nhất thế giới ?",
		answer : {ans1: "Amazon",ans2: "Trường Giang",ans3: "Nile",ans4: "Mekong"},
		correct: "3"
	},{
		question: "Thủ đô của Pháp ?",
		answer : { ans1: "Paris", ans2: "Tokyo", ans3: "Madrid", ans4: "Berlin"},
		correct: "1"
	},{
		question: "Sat trong tiếng Anh là thứ mấy trong tuần?",
		answer : {ans1: "Thứ 3",ans2: "Thứ 5",ans3: "Thứ 7",ans4: "Chủ nhật"},
		correct: "3"
	},{
		question: "Thăng Long Hà Nội 1000 tuổi vào năm nào?",
		answer : {ans1: "2009",ans2: "2010",ans3: "2011",ans4: "2012"},
		correct: "2"
	},{
		question: "Ngọn núi nào cao nhất Nhật Bản?",
		answer : {ans1: "Himalchuli", ans2: "Everest", ans3: "Fansipan", ans4: "Phú Sĩ"},
		correct: "4"
	}];

var Quiz = $(function() {
	
	score = 0;
	questionIndex = 0;

	//Load answer and question
	function loadQuestion(index){ 
		$("#title").html("Quiz number "  + (questionIndex + 1) + " / 5");
		$("#question").html(allQuestion[index].question);
		$("#a1").html(allQuestion[index].answer.ans1);
		$("#a2").html(allQuestion[index].answer.ans2);
		$("#a3").html(allQuestion[index].answer.ans3);
		$("#a4").html(allQuestion[index].answer.ans4);
	}
	loadQuestion(questionIndex);

	// Next question function
	$("#next").click(function() {

		var clicked = $("input[type=radio]:checked");

		if($("input[type=radio]").is(':checked')){
			$('#messenger').html('');
		}else{
			$('#messenger').html('Hãy chọn 1 trong các đáp án trên!');
			return;
		}

		var answerVal = clicked.val();

		if(allQuestion[questionIndex].correct === answerVal){
			score += 1;
		}

		// clicked checked = false
		$('input[type=radio]').removeAttr('checked');

		questionIndex += 1;

		if(questionIndex === allQuestion.length - 1){
			$("#next").html('Finish');
		}

		if(questionIndex === allQuestion.length){
			$("#quiz").hide();

			if(score == 5){
				$("#result").html("Tuyệt vời! Bạn trả lời đúng tất cả");
			}
			else if(score == 0){
				$("#result").html("<p>Rất tiếc bạn không trả lời đúng câu nào!</p>");
				$("button[id=replay]").show().addClass('animated bounceInDown');
			}
			else{
				$("#result").html("Bạn trả lời đúng " + score + '/5 câu');
				$("button[id=replay]").show().addClass('animated bounceInDown');
			}
		}

		loadQuestion(questionIndex);
	});
	
	// replay button if question error
	$("#replay").click(function() {
		window.location.href = 'index.html';
	});


	//Change theme
	var position = 0;
	$("#theme").click(function() {
		var backgroundImage = ['nice1','nice2','nice3','nice4','nice5']
		var quizTheme = ["#cad3e7", "#68e3c5", "#f075f0", "#ff531a", "#a6733f" ];
		var resultTheme = ["#e9deed","#bed9f3", "#f7d4e2", "#cffcfc", "#e8cbb0"];
		var titleTheme = ["red", "blue", "green", "purple", "gray"];
		var questionTheme = ["#e8584a","#067966","#9494d1", "#8ce2d9", "#cce6ff"];
		var labelTheme = ["#7d3636", "#0e251c","#3c2e6b", "#ca1b00", "#00284d"];
		var replayTheme = ["#ac3939", "#1c4a4a","#d9266e", "#2a6f69","#004f99"];
		var messengerTheme = ["#99000a", "#73262d", "#402759","#af6a8c", "#f7d4e0"];
		var nextTheme = ["#0047b3", "#7b1e3d", "#0d0d59", "#783a4a", "#f0a8c0"];
		var labelHover = ["#b30000", "#6a7c0e", "#ffd24d", "#dbbdbd", "#e46791"];

		position++;

		if (position > quizTheme.length - 1){
    		position = 0;
 		};

 		$("#quiz").css('background-image', 'url(css/' + backgroundImage[position] + '.jpg' + ')');
 		$("#result").css('background-image', 'url(css/' + backgroundImage[position] + '.jpg' + ')');
 		$("label").css('background', labelTheme[position]);
 		$("#title").css('color', titleTheme[position]);
 		$("#messenger").css('color', messengerTheme[position]);
 		$("#question").css('background', questionTheme[position]);
 		$("label").css('background', labelTheme[position]);
 		$("#replay").css('background', replayTheme[position]);
 		$("button[id=next]").css('background', nextTheme[position]);

 		$("label").addClass('radius');
		$("#question").addClass('radius');

		$("label").hover(function() {
			$(this).css("background",labelHover[position]);
		}, function() {
			$(this).css("background",labelTheme[position]);
		});	

		$('label').click(function() {
			$('label').removeClass('active');
			$(this).addClass('active');
		});

		$('#next').click(function() {
			$('label').removeClass('active');
		});
	});
});


});