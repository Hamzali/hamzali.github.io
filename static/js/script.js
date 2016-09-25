
//sticky header class handling.
$(window).scroll(function() {
	if ($(this).scrollTop() > 1){  
    	$('header').addClass("sticky");
  	}
  	else{
    	$('header').removeClass("sticky");
  	}
});
//~

// Collapse About 
var isClicked = false;
aboutEffect = function(){
	if(isClicked){
		$(this).addClass("about_closed");
		$(this).removeClass("about_opened");
		isClicked = false;
	}else{
		$(this).addClass("about_opened");
		$(this).removeClass("about_closed");
		isClicked = true;
	}
};
$("#about").click(aboutEffect)
//~

function setDesign(){
	var offsetTop = $("header").css("height(integer)");
	offsetTop +=  $(".shirt-slider h1").css("height(integer)");
	var offsetLeft = $("#shirt").css("margin-left")
	
	$("#design").css({"position":"absolute", "top": offsetTop + "px", "left": offsetLeft});	
	$("#slider").css({"position":"absolute", "top": offsetTop + "px"});		
}

setDesign();
$(window).resize(setDesign);


// Click events for arrows
var designs = ["design-1", "design-2"];
var i = 0;
var htmlImg = document.getElementById("design");
//Change images.
function leftClick() {
	i--;
	if(i < 0){
		i =  designs.length - 1;
	}

	htmlImg.setAttribute("src", "static/images/" + designs[i] + ".png");
}

function rightClick() {
	i++;
	if(i > designs.length - 1){
		i = 0;
	}
	htmlImg.setAttribute("src", "static/images/" + designs[i] + ".png");
}
