/*
 * Touché
 * An touch and device event handler
 * Eivind Ingebrigtsen 2010
 * Distributed under the MIT licence
 */
var touche = function(){
  window.touche = this;
	this.platform = navigator.userAgent;
	this.events = {'tap','touchstart', 'touchmove', 'touchend'};
	this.devents = {'mouseover', 'mouseout'};	
	this.devices = ['iPhone', 'Andorid', 'S60	Palm','Samsung','Iris','Firefox','MicroB','IE Mobile','BlackBerry']
  this._init = function(){};
  this._checkPlatform = function(){};
  this._setEvents = function(){};
  this._destroy = function(){};
  return {
  }
}