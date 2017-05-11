(function ($hx_exports) { "use strict";
var $estr = function() { return js.Boot.__string_rec(this,''); };
var AOKRHInterface = $hx_exports.AOKRHInterface = function() { };
AOKRHInterface.__name__ = true;
AOKRHInterface.initIndexPage = function() {
	com.neobird.aokrh.IndexPage.get_instance().init();
};
AOKRHInterface.initRemotePage = function() {
	com.neobird.aokrh.RemotePage.get_instance().init();
};
AOKRHInterface.initRatUndTat = function() {
	com.neobird.aokrh.RatUndTat.get_instance().init();
};
AOKRHInterface.initKontakt = function() {
	com.neobird.aokrh.Kontakt.get_instance().init();
};
AOKRHInterface.onKontaktEmail = function() {
	console.log("AOKRHInterface.onKontaktEmail");
	return com.neobird.aokrh.Kontakt.get_instance().onKontaktEmail();
};
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.strDate = function(s) {
	var _g = s.length;
	switch(_g) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k1 = s.split("-");
		return new Date(k1[0],k1[1] - 1,k1[2],0,0,0);
	case 19:
		var k2 = s.split(" ");
		var y = k2[0].split("-");
		var t = k2[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
var Lambda = function() { };
Lambda.__name__ = true;
Lambda.exists = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) return true;
	}
	return false;
};
var List = function() {
	this.length = 0;
};
List.__name__ = true;
List.prototype = {
	iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
};
var Main = function() { };
Main.__name__ = true;
Main.main = function() {
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
var StringTools = function() { };
StringTools.__name__ = true;
StringTools.lpad = function(s,c,l) {
	if(c.length <= 0) return s;
	while(s.length < l) s = c + s;
	return s;
};
var com = {};
com.neobird = {};
com.neobird.aokrh = {};
com.neobird.aokrh.HybridBridge = function() { };
com.neobird.aokrh.HybridBridge.__name__ = true;
com.neobird.aokrh.HybridBridge.bindListener = function() {
	if(null == com.neobird.aokrh.HybridBridge.eventsListener) com.neobird.aokrh.HybridBridge.eventsListener = new com.neobird.aokrh.NativeEventsListener();
	var cordova = window.cordova;
	if(cordova != null) {
		cordova.exec(($_=com.neobird.aokrh.HybridBridge.eventsListener,$bind($_,$_.onReceivedEvent)),($_=com.neobird.aokrh.HybridBridge.eventsListener,$bind($_,$_.onReceivedEvent)),com.neobird.aokrh.HybridBridge.PLUGIN_NAME,com.neobird.aokrh.HybridBridge.ACTION_BIND_LISTENER,[]);
		com.neobird.aokrh.HybridBridge.initialized = true;
	}
};
com.neobird.aokrh.HybridBridge.toggleLoadie = function(on) {
	console.log("HybridBridge - toggleLoadie " + (on == null?"null":"" + on));
	if(!com.neobird.aokrh.HybridBridge.initialized) return;
	var cordova = window.cordova;
	if(cordova != null) cordova.exec(null,null,com.neobird.aokrh.HybridBridge.PLUGIN_NAME,com.neobird.aokrh.HybridBridge.ACTION_TOGGLE_LOADIE,[on]);
};
com.neobird.aokrh.HybridBridge.getCallEnabled = function(success) {
	if(!com.neobird.aokrh.HybridBridge.initialized) return;
	var cordova = window.cordova;
	if(cordova != null) cordova.exec(success,null,com.neobird.aokrh.HybridBridge.PLUGIN_NAME,com.neobird.aokrh.HybridBridge.GET_CALL_ENABLED,[]);
};
com.neobird.aokrh.HybridBridge.callPhone = function(title,message,phonenumber) {
	if(!com.neobird.aokrh.HybridBridge.initialized) return;
	console.log("HybridBridge - call '" + phonenumber + "' - title '" + title + "' - message '" + message + "'");
	var cordova = window.cordova;
	if(cordova != null) cordova.exec(null,null,com.neobird.aokrh.HybridBridge.PLUGIN_NAME,com.neobird.aokrh.HybridBridge.ACTION_CALL_PHONE,[title,message,phonenumber]);
};
com.neobird.aokrh.HybridBridge.displayMessageBox = function(title,message) {
	if(!com.neobird.aokrh.HybridBridge.initialized) return;
	console.log("HybridBridge - displaymessage - title '" + title + "' - message '" + message + "'");
	var cordova = window.cordova;
	if(cordova != null) cordova.exec(null,null,com.neobird.aokrh.HybridBridge.PLUGIN_NAME,com.neobird.aokrh.HybridBridge.ACTION_MESSAGEBOX,[title,message]);
};
com.neobird.aokrh.HybridBridge.checkInternet = function() {
	if(!com.neobird.aokrh.HybridBridge.initialized) return;
	console.log("HybridBridge - check Internet");
	var cordova = window.cordova;
	if(cordova != null) cordova.exec(null,null,com.neobird.aokrh.HybridBridge.PLUGIN_NAME,com.neobird.aokrh.HybridBridge.ACTION_CHECK_INET,[]);
};
com.neobird.aokrh.IndexPage = function() {
	this.deviceReady = false;
};
com.neobird.aokrh.IndexPage.__name__ = true;
com.neobird.aokrh.IndexPage.get_instance = function() {
	if(null == com.neobird.aokrh.IndexPage.instance) com.neobird.aokrh.IndexPage.instance = new com.neobird.aokrh.IndexPage();
	return com.neobird.aokrh.IndexPage.instance;
};
com.neobird.aokrh.IndexPage.prototype = {
	init: function() {
		com.neobird.aokrh.HybridBridge.toggleLoadie(false);
		var cordova = window.cordova;
		if(cordova != null) window.document.addEventListener("deviceready",$bind(this,this.onDeviceReady)); else this.onDeviceReady();
	}
	,onDeviceReady: function(_) {
		this.deviceReady = true;
		console.log("LocalPage - Device ready");
		com.neobird.aokrh.HybridBridge.getCallEnabled($bind(this,this.onCallEnabled));
	}
	,onCallEnabled: function(enabled) {
		if(enabled) {
			console.log("calling is enabled on device - change picture");
			var callButton = new js.JQuery("#call-button");
			callButton.attr("src","img/callbutton.png");
			callButton.unbind("click");
			callButton.bind("click",$bind(this,this.onCallButtonClicked));
		} else console.log("calling is not enabled on device - done");
	}
	,onCallButtonClicked: function(evt) {
		com.neobird.aokrh.HybridBridge.callPhone("AOK Rheinland / Hamburg","Unser telefonisches ServiceCenter können Sie 24 Std. täglich kostenlos unter 0800 0 326 326 anrufen.\nJetzt anrufen?","0800-0-326-326");
	}
};
com.neobird.aokrh.Kontakt = function() {
	this.deviceReady = false;
};
com.neobird.aokrh.Kontakt.__name__ = true;
com.neobird.aokrh.Kontakt.get_instance = function() {
	if(null == com.neobird.aokrh.Kontakt.instance) com.neobird.aokrh.Kontakt.instance = new com.neobird.aokrh.Kontakt();
	return com.neobird.aokrh.Kontakt.instance;
};
com.neobird.aokrh.Kontakt.prototype = {
	init: function() {
		var cordova = window.cordova;
		if(cordova != null) window.document.addEventListener("deviceready",$bind(this,this.onDeviceReady)); else this.onDeviceReady();
	}
	,onDeviceReady: function(_) {
		this.deviceReady = true;
		console.log("Kontakt - Device ready");
		com.neobird.aokrh.HybridBridge.bindListener();
		com.neobird.aokrh.HybridBridge.getCallEnabled($bind(this,this.onCallEnabled));
		
		$('#ko-content').height( $(window).height() - $('#header').outerHeight()-25 ) ;
	}
	,onKontaktEmail: function() {
		console.log("Kontakt.onKontaktEmail");
		var valid = validateForm(1);
		if(!valid) {
			console.log("Formular invalid - return");
			return false;
		}
		com.neobird.aokrh.HybridBridge.checkInternet();
		var vorname = window.document.getElementById("email-vorname").value;
		var nachname = window.document.getElementById("email-nachname").value;
		var plz = window.document.getElementById("email-plz").value;
		var email = window.document.getElementById("email-email").value;
		var message = window.document.getElementById("email-message").value;
		var ort = "-unbekannt-";
		var strasse = "-unbekannt-";
		var url = "http://serviceapp.rh.aok.de/webservice/" + "?action=send_mail" + "&vorname=" + encodeURIComponent(vorname) + "&name=" + encodeURIComponent(nachname) + "&email=" + encodeURIComponent(email) + "&plz=" + encodeURIComponent(plz) + "&fragen=" + encodeURIComponent(message) + "&strasse=" + encodeURIComponent(strasse) + "&ort=" + encodeURIComponent(ort);
		console.log(url);
		var request = new haxe.Http(url);
		request.onData = $bind(this,this.onKontaktEmailReceived);
		request.onError = $bind(this,this.onError);
		request.request(false);
		return false;
	}
	,onKontaktEmailReceived: function(data) {
		console.log("Kontakt - onMailAnfrageReceived '" + data + "'");
		com.neobird.aokrh.HybridBridge.displayMessageBox("AOK Rheinland / Hamburg","Ihre Anfrage wurde erfolgreich versendet.");
	}
	,onError: function(msg) {
		console.log("Kontakt - error: " + msg);
	}
	,onCallEnabled: function(enabled) {
		if(enabled) {
			console.log("calling is enabled on device - change picture");
			var callButton = new js.JQuery("#call-button");
			callButton.unbind("click");
			callButton.bind("click",$bind(this,this.onCallButtonClicked));
		} else console.log("calling is not enabled on device - done");
	}
	,onCallButtonClicked: function(evt) {
		com.neobird.aokrh.HybridBridge.callPhone("AOK Rheinland / Hamburg","Unser telefonisches ServiceCenter können Sie 24 Std. täglich kostenlos unter 0800 0 326 326 anrufen.\nJetzt anrufen?","0800-0-326-326");
	}
};
com.neobird.aokrh.EventType = { __ename__ : true, __constructs__ : ["EVENT_TEST","EVENT_RELOAD","EVENT_STARTPAGE","EVENT_UNKNOWN"] };
com.neobird.aokrh.EventType.EVENT_TEST = ["EVENT_TEST",0];
com.neobird.aokrh.EventType.EVENT_TEST.toString = $estr;
com.neobird.aokrh.EventType.EVENT_TEST.__enum__ = com.neobird.aokrh.EventType;
com.neobird.aokrh.EventType.EVENT_RELOAD = ["EVENT_RELOAD",1];
com.neobird.aokrh.EventType.EVENT_RELOAD.toString = $estr;
com.neobird.aokrh.EventType.EVENT_RELOAD.__enum__ = com.neobird.aokrh.EventType;
com.neobird.aokrh.EventType.EVENT_STARTPAGE = ["EVENT_STARTPAGE",2];
com.neobird.aokrh.EventType.EVENT_STARTPAGE.toString = $estr;
com.neobird.aokrh.EventType.EVENT_STARTPAGE.__enum__ = com.neobird.aokrh.EventType;
com.neobird.aokrh.EventType.EVENT_UNKNOWN = ["EVENT_UNKNOWN",3];
com.neobird.aokrh.EventType.EVENT_UNKNOWN.toString = $estr;
com.neobird.aokrh.EventType.EVENT_UNKNOWN.__enum__ = com.neobird.aokrh.EventType;
com.neobird.aokrh.EventTypes = function() { };
com.neobird.aokrh.EventTypes.__name__ = true;
com.neobird.aokrh.EventTypes.fromString = function(e) {
	switch(e) {
	case "testFunction":
		return com.neobird.aokrh.EventType.EVENT_TEST;
	case "reloadPage":
		return com.neobird.aokrh.EventType.EVENT_RELOAD;
	case "toStartPage":
		return com.neobird.aokrh.EventType.EVENT_STARTPAGE;
	default:
		return com.neobird.aokrh.EventType.EVENT_UNKNOWN;
	}
};
com.neobird.aokrh.NativeEventsListener = function() {
	console.log("NativeEventsListener - initializing");
};
com.neobird.aokrh.NativeEventsListener.__name__ = true;
com.neobird.aokrh.NativeEventsListener.prototype = {
	onReceivedEvent: function(commandData) {
		console.log("NativeEventsListener - onReceivedEvent " + JSON.stringify(commandData));
		if(null == commandData) {
			console.log("NativeEventsListener - onReceivedEvent - commandData empty");
			return;
		}
		var eventType = com.neobird.aokrh.EventTypes.fromString(commandData.eventType);
		switch(eventType[1]) {
		case 0:
			this.testEvent();
			break;
		case 1:
			this.reloadPage();
			break;
		case 2:
			this.toStartPage();
			break;
		default:
			console.log("NativeEventsListener - onReceivedEvent - unrecognized eventType '" + Std.string(eventType) + "'");
		}
	}
	,testEvent: function() {
		console.log("NativeEventsListener - testEvent");
	}
	,reloadPage: function() {
		console.log("NativeEventsListener - reloadPage");
		window.location.reload();
	}
	,toStartPage: function() {
		console.log("NativeEventsListener - toStartPage");
		window.location.assign("index.html");
	}
};
com.neobird.aokrh.RatUndTat = function() {
	this.deviceReady = false;
};
com.neobird.aokrh.RatUndTat.__name__ = true;
com.neobird.aokrh.RatUndTat.get_instance = function() {
	if(null == com.neobird.aokrh.RatUndTat.instance) com.neobird.aokrh.RatUndTat.instance = new com.neobird.aokrh.RatUndTat();
	return com.neobird.aokrh.RatUndTat.instance;
};
com.neobird.aokrh.RatUndTat.prototype = {
	init: function() {
		var cordova = window.cordova;
		if(cordova != null) window.document.addEventListener("deviceready",$bind(this,this.onDeviceReady)); else this.onDeviceReady();
	}
	,onDeviceReady: function(s_) {
		this.deviceReady = true;
		console.log("Rat und Tat - Device ready");
		com.neobird.aokrh.HybridBridge.toggleLoadie(true);
		com.neobird.aokrh.HybridBridge.bindListener();
		com.neobird.aokrh.HybridBridge.checkInternet();
		
		$('#rt-main').height( $(window).height() - $('#header').outerHeight()-39 ) ;
		this.getTipList();
	}
	,onError: function(msg) {
		console.log("Rat und Tat - " + msg);
	}
	,getCurrentTip: function() {
		console.log("Rat und Tat - getCurrentTip");
		var request = new haxe.Http("http://serviceapp.rh.aok.de/webservice/?action=tip_current");
		request.onData = $bind(this,this.onTipListReceived);
		request.onError = $bind(this,this.onError);
		request.request(false);
	}
	,getTipList: function() {
		console.log("Rat und Tat - getTipList");
		var request = new haxe.Http("http://serviceapp.rh.aok.de/webservice/?action=tip_limit&count=" + com.neobird.aokrh.RatUndTat.AMOUNT);
		request.onData = $bind(this,this.onTipListReceived);
		request.onError = $bind(this,this.onError);
		request.request(false);
	}
	,onTipListReceived: function(data) {
		console.log("Rat und Tat - onTipListReceived - " + data);
		var tips = JSON.parse(data);
		console.log("Rat und Tat - onTipListReceived - " + tips.length + " tips parsed");
		var idList = new Array();
		if(tips.length > 0) {
			var _g = 0;
			while(_g < tips.length) {
				var tip = tips[_g];
				++_g;
				idList.push(tip.id);
			}
			this.getDetails(idList.join(","));
		} else {
			console.log("Rat und Tat - onCurrentTipReceived - no current Tips");
			com.neobird.aokrh.HybridBridge.toggleLoadie(false);
		}
	}
	,getDetails: function(tipIds) {
		var request = new haxe.Http("http://serviceapp.rh.aok.de/webservice/?action=tip_details&id=" + tipIds);
		request.onData = $bind(this,this.onDetailsReceived);
		request.onError = $bind(this,this.onError);
		request.request(true);
	}
	,onDetailsReceived: function(data) {
		console.log("Rat und Tat - onDetailsReceived - " + data);
		var details = JSON.parse(data);
		console.log("Rat und Tat - onDetailsReceived - " + details.tips.length + " tips parsed");
		if(details.tips.length > 0) {
			var _g = 0;
			var _g1 = details.tips;
			while(_g < _g1.length) {
				var detail = _g1[_g];
				++_g;
				this.addDetailsToForm(detail);
			}
		} else console.log("Rat und Tat - onDetailsReceived - no tips received");
		com.neobird.aokrh.HybridBridge.toggleLoadie(false);
	}
	,addDetailsToForm: function(details) {
		var root = window.document.getElementById("rt-content");
		var rtEntry;
		var _this = window.document;
		rtEntry = _this.createElement("div");
		rtEntry.className = "rt-entry";
		root.appendChild(rtEntry);
		var rtDate;
		var _this1 = window.document;
		rtDate = _this1.createElement("p");
		rtDate.className = "rt-entry-date";
		var spanDate;
		var _this2 = window.document;
		spanDate = _this2.createElement("span");
		spanDate.style.color = "#218d52";
		var date = HxOverrides.strDate(details.publish);
		spanDate.innerHTML = StringTools.lpad(Std.string(date.getDate()),"0",2) + "." + StringTools.lpad(Std.string(date.getMonth() + 1),"0",2) + "." + Std.string(date.getFullYear());
		rtDate.appendChild(spanDate);
		rtEntry.appendChild(rtDate);
		var rtTitle;
		var _this3 = window.document;
		rtTitle = _this3.createElement("p");
		rtTitle.className = "rt-entry-title";
		rtTitle.innerHTML = details.title;
		rtEntry.appendChild(rtTitle);
		var rtTags;
		var _this4 = window.document;
		rtTags = _this4.createElement("p");
		rtTags.className = "rt-entry-tags";
		var categories = "";
		var _g = 0;
		var _g1 = details.categories;
		while(_g < _g1.length) {
			var category = _g1[_g];
			++_g;
			categories += category.name + ",";
		}
		categories = HxOverrides.substr(categories,0,categories.length - 1);
		rtTags.innerHTML = categories.toUpperCase();
		rtEntry.appendChild(rtTags);
		var rtText;
		var _this5 = window.document;
		rtText = _this5.createElement("p");
		rtText.className = "rt-entry-text";
		rtText.innerHTML = details.message;
		rtEntry.appendChild(rtText);
		var rtSubmitter;
		var _this6 = window.document;
		rtSubmitter = _this6.createElement("p");
		rtSubmitter.className = "rt-entry-submitter";
		rtSubmitter.innerHTML = "EINGEREICHT VON " + details.author.toUpperCase();
		rtEntry.appendChild(rtSubmitter);
		var rtSeparator;
		var _this7 = window.document;
		rtSeparator = _this7.createElement("img");
		rtSeparator.className = "rt-image";
		rtSeparator.src = "css/images/rtseparator.png";
		rtEntry.appendChild(rtSeparator);
	}
};
com.neobird.aokrh.RemotePage = function() {
	this.deviceReady = false;
};
com.neobird.aokrh.RemotePage.__name__ = true;
com.neobird.aokrh.RemotePage.get_instance = function() {
	if(null == com.neobird.aokrh.RemotePage.instance) com.neobird.aokrh.RemotePage.instance = new com.neobird.aokrh.RemotePage();
	return com.neobird.aokrh.RemotePage.instance;
};
com.neobird.aokrh.RemotePage.prototype = {
	init: function() {
		var cordova = window.cordova;
		if(cordova != null) window.document.addEventListener("deviceready",$bind(this,this.onDeviceReady)); else this.onDeviceReady();
	}
	,onDeviceReady: function(_) {
		this.deviceReady = true;
		console.log("RemotePage - Device ready");
		com.neobird.aokrh.HybridBridge.bindListener();
		com.neobird.aokrh.HybridBridge.checkInternet();
		com.neobird.aokrh.HybridBridge.toggleLoadie(true);
		var contentframe = window.document.getElementById("contentframe");
		var onIframeLoaded = function(_1) {
			com.neobird.aokrh.HybridBridge.toggleLoadie(false);
		};
		contentframe.onload = onIframeLoaded;
		var url = contentframe.attributes.getNamedItem("data-src").nodeValue;
		console.log("loading URL " + url);
		contentframe.src = url;
		
		$('#contentholder').height( $(window).height() - $('#header').outerHeight() ) ;
	}
};
var haxe = {};
haxe.Http = function(url) {
	this.url = url;
	this.headers = new List();
	this.params = new List();
	this.async = true;
};
haxe.Http.__name__ = true;
haxe.Http.prototype = {
	request: function(post) {
		var me = this;
		me.responseData = null;
		var r = this.req = js.Browser.createXMLHttpRequest();
		var onreadystatechange = function(_) {
			if(r.readyState != 4) return;
			var s;
			try {
				s = r.status;
			} catch( e ) {
				s = null;
			}
			if(s == undefined) s = null;
			if(s != null) me.onStatus(s);
			if(s != null && s >= 200 && s < 400) {
				me.req = null;
				me.onData(me.responseData = r.responseText);
			} else if(s == null) {
				me.req = null;
				me.onError("Failed to connect or resolve host");
			} else switch(s) {
			case 12029:
				me.req = null;
				me.onError("Failed to connect to host");
				break;
			case 12007:
				me.req = null;
				me.onError("Unknown host");
				break;
			default:
				me.req = null;
				me.responseData = r.responseText;
				me.onError("Http Error #" + r.status);
			}
		};
		if(this.async) r.onreadystatechange = onreadystatechange;
		var uri = this.postData;
		if(uri != null) post = true; else {
			var $it0 = this.params.iterator();
			while( $it0.hasNext() ) {
				var p = $it0.next();
				if(uri == null) uri = ""; else uri += "&";
				uri += encodeURIComponent(p.param) + "=" + encodeURIComponent(p.value);
			}
		}
		try {
			if(post) r.open("POST",this.url,this.async); else if(uri != null) {
				var question = this.url.split("?").length <= 1;
				r.open("GET",this.url + (question?"?":"&") + uri,this.async);
				uri = null;
			} else r.open("GET",this.url,this.async);
		} catch( e1 ) {
			me.req = null;
			this.onError(e1.toString());
			return;
		}
		if(!Lambda.exists(this.headers,function(h) {
			return h.header == "Content-Type";
		}) && post && this.postData == null) r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		var $it1 = this.headers.iterator();
		while( $it1.hasNext() ) {
			var h1 = $it1.next();
			r.setRequestHeader(h1.header,h1.value);
		}
		r.send(uri);
		if(!this.async) onreadystatechange(null);
	}
	,onData: function(data) {
	}
	,onError: function(msg) {
	}
	,onStatus: function(status) {
	}
};
var js = {};
js.Boot = function() { };
js.Boot.__name__ = true;
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js.Browser = function() { };
js.Browser.__name__ = true;
js.Browser.createXMLHttpRequest = function() {
	if(typeof XMLHttpRequest != "undefined") return new XMLHttpRequest();
	if(typeof ActiveXObject != "undefined") return new ActiveXObject("Microsoft.XMLHTTP");
	throw "Unable to create XMLHttpRequest object.";
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.__name__ = true;
Array.__name__ = true;
Date.__name__ = ["Date"];
var q = window.jQuery;
js.JQuery = q;
com.neobird.aokrh.HybridBridge.PLUGIN_NAME = "HybridBridge";
com.neobird.aokrh.HybridBridge.ACTION_BIND_LISTENER = "ACTION_BIND_LISTENER";
com.neobird.aokrh.HybridBridge.ACTION_TOGGLE_LOADIE = "ACTION_TOGGLE_LOADIE";
com.neobird.aokrh.HybridBridge.ACTION_CALL_PHONE = "ACTION_CALL_PHONE";
com.neobird.aokrh.HybridBridge.ACTION_CHECK_INET = "ACTION_CHECK_INET";
com.neobird.aokrh.HybridBridge.ACTION_MESSAGEBOX = "ACTION_MESSAGEBOX";
com.neobird.aokrh.HybridBridge.GET_CALL_ENABLED = "GET_CALL_ENABLED";
com.neobird.aokrh.HybridBridge.initialized = false;
com.neobird.aokrh.Kontakt.__meta__ = { obj : { expose : null}};
com.neobird.aokrh.RatUndTat.AMOUNT = 5;
Main.main();
})(typeof window != "undefined" ? window : exports);
