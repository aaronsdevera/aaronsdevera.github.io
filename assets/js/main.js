

$(document).ready(function(){


	$("#terminal").hide();
	$("#about").hide();
	$("#portfolio").hide();
	$("#fingerprint").hide();

	$("#about_button").click(function(){
			$("#portfolio").hide();
  		$("#about").toggle();
	});

	$("#portfolio_button").click(function(){
			$("#about").hide();
  		$("#portfolio").toggle();
	});

	$("#parent_list").click(function(){
		$(".inner_list").toggle();
	});

	$("#gpg").mouseover(function(){
		$("#fingerprint").fadeIn(500);
	});


/*
	var terminalOn = false;
	var clearStyle = function(){
			$("#header").removeClass("black_back");
			$("#header").removeClass("white_text");
			$("#header").removeClass("white_back");
			$("#header").removeClass("black_text");

			$("#nav_button").removeClass("black_back");
			$("#nav_button").removeClass("white_text");
			$("#nav_button").removeClass("white_back");
			$("#nav_button").removeClass("black_text");

			$("html").removeClass("white_back");
			$("html").removeClass("black_back");
			$("html").removeClass("img_back");
			$("html").removeClass("grad_back");

			$("#terminal input").removeClass("black_back");
			$("#terminal input").removeClass("white_text");
			$("#terminal input").removeClass("white_back");
			$("#terminal input").removeClass("black_text");
	};


	$('html').keydown(function(e){
		//document.getElementById('in').value = "";
		if(e.keyCode == 192){
			if (terminalOn == false){
				$("#terminal").show();
				document.getElementById('in').value = "";
				terminalOn = true;
			}

			else if (terminalOn == true){
				document.getElementById('in').value = "";
				$("#terminal").hide();
				terminalOn = false;
			}
		}

		else if(e.keyCode == 13){
			var termInput = document.getElementById('in').value;
			if (termInput == "night"){
				clearStyle();

				console.log("Initiating night mode.");

				$("#header").addClass("white_back");
				$("#header").addClass("black_text");
				$("#nav_button").addClass("white_back");
				$("#nav_button").addClass("black_text");
				$("html").addClass("black_back");
				$("#terminal input").addClass("white_back");
				$("#terminal input").addClass("black_text");

			}

			else if (termInput == "day"){
				clearStyle();

				console.log("Initiating day mode.");

				$("html").addClass("white_back");
				$("#header").addClass("black_back");
				$("#header").addClass("white_text");
				$("#nav_button").addClass("black_back");
				$("#nav_button").addClass("white_text");
				$("#terminal input").addClass("black_back");
				$("#terminal input").addClass("white_text");
			}

			else if (termInput == "image"){
				clearStyle();

				console.log("Initiating image mode.");

				$("html").addClass("img_back");
				$("#header").addClass("black_back");
				$("#header").addClass("white_text");
				$("#nav_button").addClass("black_back");
				$("#nav_button").addClass("white_text");
				$("#terminal input").addClass("black_back");
				$("#terminal input").addClass("white_text");
			}

			else if (termInput == "gradient"){
				clearStyle();

				console.log("Initiating gradient mode.");

				$("html").addClass("grad_back");
				$("#header").addClass("black_back");
				$("#header").addClass("white_text");
				$("#nav_button").addClass("black_back");
				$("#nav_button").addClass("white_text");
				$("#terminal input").addClass("black_back");
				$("#terminal input").addClass("white_text");
			}

			else if (termInput == "trans"){

				console.log("Initiating transparent mode.");

				$("#header").addClass("transparent");
				$("#nav_button").addClass("transparent");
				$("#terminal input").addClass("transparent");
			}


			document.getElementById('in').value = "";
		}
	});

	*/
});
