/*
 * Touché
 * An touch and device event handler
 * Eivind Ingebrigtsen 2010
 * Distributed under the MIT licence
 */
var touche = function(){
  window.touche = this;
  var t = this,
      d = window.document;

  t.settings = {
      'touch'         : null,
    	'platform'      : navigator.userAgent,
      'style'         : document.styleSheets,
    	'mapEvents'     : {'mousedown' : 'touchstart', 'mousemove': 'touchmove', 'mouseup': 'touchend'},
	    'removeEvents'  : ['mouseover', 'mouseout'],
	    'devices'       : ['iPhone', 'Andorid', 'S60	Palm','Samsung','Iris','Firefox','MicroB','IE Mobile','BlackBerry']
  };  

	this.init = function(){
    var device = this._checkPlatform();
    if(device && device.touch){
      this._makeTouch();
    }
  };
  this._killEvent = function(ev){ ev.stopPropagation();return false;};
  this._makeTouch = function(){
    // removing hovering styles
    var removes = t.settings.removeEvents;
    for (var k in removes){
      d.addEventListener(removes[k], t._killEvent, true);
    }
    // mapping new events
    var map = t.settings.mapEvents;
    for (var o in map){
      d.addEventListener(map[o], function(ev, o){        
        ev.target.dispatchEvent(o);
      }, true);
    }    
  };
  this._styleHandler = function(){    
  };
  // Technique from Juriy Zaytsev
  // http://thinkweb2.com/projects/prototype/detecting-event-support-without-browser-sniffing/
  this._eventSupported = function( eventName ) { 
    var el = document.createElement("div"); 
    eventName = "on" + eventName; 

    var isSupported = (eventName in el); 
    if ( !isSupported ) { 
      el.setAttribute(eventName, "return;"); 
      isSupported = typeof el[eventName] === "function"; 
    } 
    el = null; 

    return isSupported; 
  };
  this._checkPlatform = function(){ return {touch: true}; };
  this._setEvents = function(){};
  this._destroy = function(){};
  this.init();
};
touche();
