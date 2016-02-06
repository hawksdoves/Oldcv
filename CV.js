

/*var headerDist = document.getElementById("header").offsetHeight;
document.getElementById("container").style.marginTop = headerDist + 'px'; can use this to move container below header on first load only*/

/*function init() {
	window.addEventListener('resize', function(event) {
   		var headerDist = document.getElementById("header").offsetHeight;
		document.getElementById("container").style.marginTop = headerDist + 'px';
	}); this is jquery. does not work- trying to make the above run again, whenever the screen changes size
};*/

var employLink = document.getElementById("employ");

employLink.onclick = function(){
	var headerDist = document.getElementById("header").offsetHeight;
	var employDist = document.getElementById("employment").offsetTop;
	window.scrollTo(window.scrollX, employDist-headerDist); 
};


var educLink = document.getElementById("educ");

educLink.onclick = function(){
	var headerDist = document.getElementById("header").offsetHeight;
	var educDist = document.getElementById("education").offsetTop;	
		console.log(educLink);
console.log(educDist);
console.log(headerDist);	
	window.scrollTo(window.scrollX, educDist-headerDist); 
};

var othLink = document.getElementById("otherHead");

othLink.onclick = function(){
	var headerDist = document.getElementById("header").offsetHeight;
	var othDist = document.getElementById("other").offsetTop;	
	window.scrollTo(window.scrollX, othDist-headerDist); 
};

var hobLink = document.getElementById("hobbiesHead");

hobLink.onclick = function(){
	var headerDist = document.getElementById("header").offsetHeight;
var hobDist = document.getElementById("hobbies").offsetTop;	
	window.scrollTo(window.scrollX, hobDist-headerDist); 
};

var contactLink = document.getElementById("contactHead");

 contactLink.onclick = function(){
	var headerDist = document.getElementById("header").offsetHeight;
	var footerDist = document.getElementById("footer").offsetTop;	
	window.scrollTo(window.scrollX, footerDist-headerDist); 
};