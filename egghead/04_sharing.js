
angular.module("app", ["ui.router"])

	.config(function config($stateProvider){
		$stateProvider.state("index", {
			url:"",
			controller:"FirstCtrl as first",
			templateUrl:"templates/04_first.html"
		})
		$stateProvider.state("second", {
			url:"/second",
			controller:"SecondCtrl as second",
			templateUrl:"templates/04_second.html"
		})
	})

	.service("greeting", function Greeting(){
		var greeting = this;
		greeting.message = "Defaults";
	})

	.controller("FirstCtrl", function FirstCtrl(greeting) {

	var first = this;
	first.greeting = greeting;
	})

	.controller("SecondCtrl", function SecondCtrl(greeting) {

	var second = this;
	second.greeting = greeting;
	})
