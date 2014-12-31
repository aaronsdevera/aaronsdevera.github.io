

$(document).ready(function(){

	$("#terminal").hide();
	var terminalOn = false;


	$('html').keydown(function(e){
		if(e.keyCode == 192){
			if (terminalOn == false){
				$("#terminal").show();
				terminalOn = true;
			}

			else if (terminalOn == true){
				$("#terminal").hide();
				terminalOn = false;
			}

		}


		else if(e.keyCode == 13){
			var termInput = document.getElementById('in').value;
			if (termInput == "night"){
				console.log("Initiating night mode.");
				$("body").removeClass("greyback");
				$("body").addClass("plumback");
				$("a").removeClass("blacktext");
				$("a").addClass("whitetext");
				$("nav").removeClass("blackborder");
				$("nav").addClass("whiteborder");
			}

			else if (termInput == "day"){

				$("body").removeClass("plumback");
				$("body").addClass("greyback");
				$("a").removeClass("whitetext");
				$("a").addClass("blacktext");
				$("nav").removeClass("whiteborder");
				$("nav").addClass("blackborder");
			}
		}

	});


});
