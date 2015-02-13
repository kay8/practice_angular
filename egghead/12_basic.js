var app = angular.module("behaviorApp", []);

app.directive("enter", function() {
/*	return {
		link: function() {

		}
	};*/

	return function(scope, element) {
		element.bind("mouseenter", function(){
			console.log("I am inside of you");
		});
	};

});

app.directive("leave", function() {

	return function(scope, element) {
		element.bind("mouseleave", function(){
			console.log("I am leaving");
		});
	};

});