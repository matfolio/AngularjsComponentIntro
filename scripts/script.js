//injecting the module in here
function implicit() {
	// This implementation is only needed if you would like to pass
	// this component features forward to the controlling or parent 
	// component. For now this component is the parent one. 
	// Thus it would get its values from an external component or 
	// manual assignment using the '@' binding value 
}
angular.
module('ComponentIntro').component('testDetail', {
	// creating the component, its name which must 
	// match the mentioned element name in our view
	templateUrl: './views/template.html',

	controller: implicit,
	bindings: {
		name : '=', // would be assigned an object from the mainCrtl in the in index.html 
		passAsString : '@', // would be assigned a mere string, could be string literals or interpolation binding
    	passAsAction : '&' // would be assign a function--- Already implemented in the mainCtrl controller of the app.js
    }
});
