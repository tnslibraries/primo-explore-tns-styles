'use strict';

angular.module('tnsStyles', [])

.controller('tnsStylesController', ['angularLoad', '$scope', function () {

var ctrl = this;

try {
	this.recordid = this.parentCtrl.item.delivery.holding;
	this.numberofLibraries = this.recordid.length;
	this.numberOfInternetLibraries = 0;
	this.g = 0;

	//iterate through all elements of the array

    for (var i=0, len=this.numberofLibraries; i < len; i++){

    	//check to see if there is an internet resource string match
        var libraryToCheck = this.recordid[i].libraryCode;
        var stringToCheck = "WEB";
    	if (libraryToCheck.indexOf(stringToCheck) !== -1) {
    				this.numberOfInternetLibraries++;
									}
		var stringToCheck = "CU";
		if (libraryToCheck.indexOf(stringToCheck) !== -1) {
    				this.numberOfInternetLibraries++;
									}
						}

var a = this.numberOfInternetLibraries;
var b = this.numberofLibraries;

if ( a == b ) 
	{ document.getElementById("getit_link1_1").style.setProperty('display', 'none', 'important'); } 

	  else this.hideGetIt = 0;
	
} catch(e) {
this.recordid = null;
}
	
	// let vm = this;
	// var item = this.parentCtrl.item;
	// var holdings = this.parentCtrl.item.delivery.link;
	// var availLibraries = holdings.length;

}])

.component('prmOpacAfter', 
{
 bindings: { parentCtrl: '<' },
 controller: 'tnsStylesController',
 template: '<div style="display:none;">{{ $ctrl.numberOfInternetLibraries }} of {{ $ctrl.numberofLibraries }} and {{ $ctrl.hideGetIt }}</div>'
});