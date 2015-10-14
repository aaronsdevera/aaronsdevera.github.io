$(document).ready(function(){
	var day = true;
	$("#night").click(function(){

		if (day==true){
			$(this).empty();
			$(this).text("click here to read in day mode");
			$("body").removeClass("greyback");
			$("body").addClass("plumback");
			$("a").removeClass("blacktext");
			$("a").addClass("whitetext");
			day = false;
		}

		else if (day==false){
			$(this).empty();
			$(this).text("click here to read in night mode");
			$("body").removeClass("plumback");
			$("body").addClass("greyback");
			$("a").removeClass("whitetext");
			$("a").addClass("blacktext");
			day = true;
		}

	});
});
