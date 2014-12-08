$(document).ready(function(){
	var day = true;
	$("#night").click(function(){

		if (day==true){
			$("body").removeClass("greyback");
			$("body").addClass("plumback");
			$("a").removeClass("blacktext");
			$("a").addClass("whitetext");
			day = false;
		}

		else if (day==false){
			$("body").removeClass("plumback");
			$("body").addClass("greyback");
			$("a").removeClass("whitetext");
			$("a").addClass("blacktext");
			day = true;
		}

	});
});
