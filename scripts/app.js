angular.module('ComponentIntro', []).controller('mainCtrl', function mainCtrl() {

  this.name = "Introduction to Component";
  this.stringContent = "Yeah, It works..."
  this.actionContent = function(){
  	 // Implement whatever Action you would like to perform here
  	 // But right now, would like to display a text to show how it works.
  	  return "This is the function section";
  }
});