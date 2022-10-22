/*!
  hey, [be]Lazy.js - v1.8.2 - 2016.10.25
  A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
  (function(q,m){"function"===typeof define&&define.amd?define(m):"object"===typeof exports?module.exports=m():q.Blazy=m()})(this,function(){function q(b){var c=b._util;c.elements=E(b.options);c.count=c.elements.length;c.destroyed&&(c.destroyed=!1,b.options.container&&l(b.options.container,function(a){n(a,"scroll",c.validateT)}),n(window,"resize",c.saveViewportOffsetT),n(window,"resize",c.validateT),n(window,"scroll",c.validateT));m(b)}function m(b){for(var c=b._util,a=0;a<c.count;a++){var d=c.elements[a],e;a:{var g=d;e=b.options;var p=g.getBoundingClientRect();if(e.container&&y&&(g=g.closest(e.containerClass))){g=g.getBoundingClientRect();e=r(g,f)?r(p,{top:g.top-e.offset,right:g.right+e.offset,bottom:g.bottom+e.offset,left:g.left-e.offset}):!1;break a}e=r(p,f)}if(e||t(d,b.options.successClass))b.load(d),c.elements.splice(a,1),c.count--,a--}0===c.count&&b.destroy()}function r(b,c){return b.right>=c.left&&b.bottom>=c.top&&b.left<=c.right&&b.top<=c.bottom}function z(b,c,a){if(!t(b,a.successClass)&&(c||a.loadInvisible||0<b.offsetWidth&&0<b.offsetHeight))if(c=b.getAttribute(u)||b.getAttribute(a.src)){c=c.split(a.separator);var d=c[A&&1<c.length?1:0],e=b.getAttribute(a.srcset),g="img"===b.nodeName.toLowerCase(),p=(c=b.parentNode)&&"picture"===c.nodeName.toLowerCase();if(g||void 0===b.src){var h=new Image,w=function(){a.error&&a.error(b,"invalid");v(b,a.errorClass);k(h,"error",w);k(h,"load",f)},f=function(){g?p||B(b,d,e):b.style.backgroundImage='url("'+d+'")';x(b,a);k(h,"load",f);k(h,"error",w)};p&&(h=b,l(c.getElementsByTagName("source"),function(b){var c=a.srcset,e=b.getAttribute(c);e&&(b.setAttribute("srcset",e),b.removeAttribute(c))}));n(h,"error",w);n(h,"load",f);B(h,d,e)}else b.src=d,x(b,a)}else"video"===b.nodeName.toLowerCase()?(l(b.getElementsByTagName("source"),function(b){var c=a.src,e=b.getAttribute(c);e&&(b.setAttribute("src",e),b.removeAttribute(c))}),b.load(),x(b,a)):(a.error&&a.error(b,"missing"),v(b,a.errorClass))}function x(b,c){v(b,c.successClass);c.success&&c.success(b);b.removeAttribute(c.src);b.removeAttribute(c.srcset);l(c.breakpoints,function(a){b.removeAttribute(a.src)})}function B(b,c,a){a&&b.setAttribute("srcset",a);b.src=c}function t(b,c){return-1!==(" "+b.className+" ").indexOf(" "+c+" ")}function v(b,c){t(b,c)||(b.className+=" "+c)}function E(b){var c=[];b=b.root.querySelectorAll(b.selector);for(var a=b.length;a--;c.unshift(b[a]));return c}function C(b){f.bottom=(window.innerHeight||document.documentElement.clientHeight)+b;f.right=(window.innerWidth||document.documentElement.clientWidth)+b}function n(b,c,a){b.attachEvent?b.attachEvent&&b.attachEvent("on"+c,a):b.addEventListener(c,a,{capture:!1,passive:!0})}function k(b,c,a){b.detachEvent?b.detachEvent&&b.detachEvent("on"+c,a):b.removeEventListener(c,a,{capture:!1,passive:!0})}function l(b,c){if(b&&c)for(var a=b.length,d=0;d<a&&!1!==c(b[d],d);d++);}function D(b,c,a){var d=0;return function(){var e=+new Date;e-d<c||(d=e,b.apply(a,arguments))}}var u,f,A,y;return function(b){if(!document.querySelectorAll){var c=document.createStyleSheet();document.querySelectorAll=function(a,b,d,h,f){f=document.all;b=[];a=a.replace(/\[for\b/gi,"[htmlFor").split(",");for(d=a.length;d--;){c.addRule(a[d],"k:v");for(h=f.length;h--;)f[h].currentStyle.k&&b.push(f[h]);c.removeRule(0)}return b}}var a=this,d=a._util={};d.elements=[];d.destroyed=!0;a.options=b||{};a.options.error=a.options.error||!1;a.options.offset=a.options.offset||100;a.options.root=a.options.root||document;a.options.success=a.options.success||!1;a.options.selector=a.options.selector||".b-lazy";a.options.separator=a.options.separator||"|";a.options.containerClass=a.options.container;a.options.container=a.options.containerClass?document.querySelectorAll(a.options.containerClass):!1;a.options.errorClass=a.options.errorClass||"b-error";a.options.breakpoints=a.options.breakpoints||!1;a.options.loadInvisible=a.options.loadInvisible||!1;a.options.successClass=a.options.successClass||"b-loaded";a.options.validateDelay=a.options.validateDelay||25;a.options.saveViewportOffsetDelay=a.options.saveViewportOffsetDelay||50;a.options.srcset=a.options.srcset||"data-srcset";a.options.src=u=a.options.src||"data-src";y=Element.prototype.closest;A=1<window.devicePixelRatio;f={};f.top=0-a.options.offset;f.left=0-a.options.offset;a.revalidate=function(){q(a)};a.load=function(a,b){var c=this.options;void 0===a.length?z(a,b,c):l(a,function(a){z(a,b,c)})};a.destroy=function(){var a=this._util;this.options.container&&l(this.options.container,function(b){k(b,"scroll",a.validateT)});k(window,"scroll",a.validateT);k(window,"resize",a.validateT);k(window,"resize",a.saveViewportOffsetT);a.count=0;a.elements.length=0;a.destroyed=!0};d.validateT=D(function(){m(a)},a.options.validateDelay,a);d.saveViewportOffsetT=D(function(){C(a.options.offset)},a.options.saveViewportOffsetDelay,a);C(a.options.offset);l(a.options.breakpoints,function(a){if(a.width>=window.screen.width)return u=a.src,!1});setTimeout(function(){q(a)})}});
;/*})'"*/
;/*})'"*/
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);
;/*})'"*/
;/*})'"*/
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);
;/*})'"*/
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.readandspell.com/sites/all/modules/jquery_update/replace/ui/external/jquery.cookie.js. */
jQuery.cookie=function(key,value,options){if(arguments.length>1&&(value===null||typeof value!=="object")){options=jQuery.extend({},options);if(value===null)options.expires=-1;if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days)};return(document.cookie=[encodeURIComponent(key),'=',options.raw?String(value):encodeURIComponent(String(value)),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''))};options=value||{};var result,decode=options.raw?function(s){return s}:decodeURIComponent;return(result=new RegExp('(?:^|; )'+encodeURIComponent(key)+'=([^;]*)').exec(document.cookie))?decode(result[1]):null};
/* Source and licensing information for the above line(s) can be found at https://www.readandspell.com/sites/all/modules/jquery_update/replace/ui/external/jquery.cookie.js. */
;/*})'"*/
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){var e=0,i={},s={};i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="hide",s.height=s.paddingTop=s.paddingBottom=s.borderTopWidth=s.borderBottomWidth="show",t.widget("ui.accordion",{version:"1.10.2",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t(),content:this.active.length?this.active.next():t()}},_createIcons:function(){var e=this.options.icons;e&&(t("<span>").addClass("ui-accordion-header-icon ui-icon "+e.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?(this._activate(e),undefined):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),"disabled"===t&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!e),undefined)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),a=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:a=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:a=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:a=this.headers[0];break;case i.END:a=this.headers[s-1]}a&&(t(e.target).attr("tabIndex",-1),t(a).attr("tabIndex",0),a.focus(),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().focus()},refresh:function(){var e=this.options;this._processPanels(),(e.active===!1&&e.collapsible===!0||!this.headers.length)&&(e.active=!1,this.active=t()),e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var i,s=this.options,n=s.heightStyle,a=this.element.parent(),o=this.accordionId="ui-accordion-"+(this.element.attr("id")||++e);this.active=this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(e){var i=t(this),s=i.attr("id"),n=i.next(),a=n.attr("id");s||(s=o+"-header-"+e,i.attr("id",s)),a||(a=o+"-panel-"+e,n.attr("id",a)),i.attr("aria-controls",a),n.attr("aria-labelledby",s)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(s.event),"fill"===n?(i=a.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.headers.each(function(){i-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===n&&(i=0,this.headers.next().each(function(){i=Math.max(i,t(this).css("height","").height())}).height(i))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),a=n[0]===s[0],o=a&&i.collapsible,r=o?t():n.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:o?t():n,newPanel:r};e.preventDefault(),a&&!i.collapsible||this._trigger("beforeActivate",e,l)===!1||(i.active=o?!1:this.headers.index(n),this.active=a?t():n,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),a||(n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass("ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-expanded":"false","aria-hidden":"true"}),s.prev().attr("aria-selected","false"),i.length&&s.length?s.prev().attr("tabIndex",-1):i.length&&this.headers.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),i.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(t,e,n){var a,o,r,h=this,l=0,c=t.length&&(!e.length||t.index()<e.index()),u=this.options.animate||{},d=c&&u.down||u,p=function(){h._toggleComplete(n)};return"number"==typeof d&&(r=d),"string"==typeof d&&(o=d),o=o||d.easing||u.easing,r=r||d.duration||u.duration,e.length?t.length?(a=t.show().outerHeight(),e.animate(i,{duration:r,easing:o,step:function(t,e){e.now=Math.round(t)}}),t.hide().animate(s,{duration:r,easing:o,complete:p,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?l+=i.now:"content"!==h.options.heightStyle&&(i.now=Math.round(a-e.outerHeight()-l),l=0)}}),undefined):e.animate(i,r,o,p):t.animate(s,r,o,p)},_toggleComplete:function(t){var e=t.oldPanel;e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}})})(jQuery);
;/*})'"*/
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.readandspell.com/misc/ajax.js. */
(function($){Drupal.ajax=Drupal.ajax||{};Drupal.settings.urlIsAjaxTrusted=Drupal.settings.urlIsAjaxTrusted||{};Drupal.behaviors.AJAX={attach:function(context,settings){for(var base in settings.ajax)if(!$('#'+base+'.ajax-processed').length){var element_settings=settings.ajax[base];if(typeof element_settings.selector=='undefined')element_settings.selector='#'+base;$(element_settings.selector).each(function(){element_settings.element=this;Drupal.ajax[base]=new Drupal.ajax(base,this,element_settings)});$('#'+base).addClass('ajax-processed')};$('.use-ajax:not(.ajax-processed)').addClass('ajax-processed').each(function(){var element_settings={};element_settings.progress={type:'throbber'};if($(this).attr('href')){element_settings.url=$(this).attr('href');element_settings.event='click'};var base=$(this).attr('id');Drupal.ajax[base]=new Drupal.ajax(base,this,element_settings)});$('.use-ajax-submit:not(.ajax-processed)').addClass('ajax-processed').each(function(){var element_settings={};element_settings.url=$(this.form).attr('action');element_settings.setClick=true;element_settings.event='click';element_settings.progress={type:'throbber'};var base=$(this).attr('id');Drupal.ajax[base]=new Drupal.ajax(base,this,element_settings)})}};Drupal.ajax=function(base,element,element_settings){var defaults={url:'system/ajax',event:'mousedown',keypress:true,selector:'#'+base,effect:'none',speed:'none',method:'replaceWith',progress:{type:'throbber',message:Drupal.t('Please wait...')},submit:{js:true}};$.extend(this,defaults,element_settings);this.element=element;this.element_settings=element_settings;this.url=element_settings.url.replace(/\/nojs(\/|$|\?|&|#)/g,'/ajax$1');if(Drupal.settings.urlIsAjaxTrusted[element_settings.url])Drupal.settings.urlIsAjaxTrusted[this.url]=true;this.wrapper='#'+element_settings.wrapper;if(this.element.form)this.form=$(this.element.form);var ajax=this;ajax.options={url:ajax.url,data:ajax.submit,beforeSerialize:function(element_settings,options){return ajax.beforeSerialize(element_settings,options)},beforeSubmit:function(form_values,element_settings,options){ajax.ajaxing=true;return ajax.beforeSubmit(form_values,element_settings,options)},beforeSend:function(xmlhttprequest,options){ajax.ajaxing=true;return ajax.beforeSend(xmlhttprequest,options)},success:function(response,status,xmlhttprequest){if(typeof response=='string')response=$.parseJSON(response);if(response!==null&&!Drupal.settings.urlIsAjaxTrusted[ajax.url])if(xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token')!=='1'){var customMessage=Drupal.t("The response failed verification so will not be processed.");return ajax.error(xmlhttprequest,ajax.url,customMessage)};return ajax.success(response,status)},complete:function(xmlhttprequest,status){ajax.ajaxing=false;if(status=='error'||status=='parsererror')return ajax.error(xmlhttprequest,ajax.url)},dataType:'json',type:'POST'};if(navigator.userAgent.indexOf("MSIE")===-1)ajax.options.iframeSrc='about:blank';$(ajax.element).bind(element_settings.event,function(event){if(!Drupal.settings.urlIsAjaxTrusted[ajax.url]&&!Drupal.urlIsLocal(ajax.url))throw new Error(Drupal.t('The callback URL is not local and not trusted: !url',{'!url':ajax.url}));return ajax.eventResponse(this,event)});if(element_settings.keypress)$(ajax.element).keypress(function(event){return ajax.keypressResponse(this,event)});if(element_settings.prevent)$(ajax.element).bind(element_settings.prevent,false)};Drupal.ajax.prototype.keypressResponse=function(element,event){var ajax=this;if(event.which==13||(event.which==32&&element.type!='text'&&element.type!='textarea')){$(ajax.element_settings.element).trigger(ajax.element_settings.event);return false}};Drupal.ajax.prototype.eventResponse=function(element,event){var ajax=this;if(ajax.ajaxing)return false;try{if(ajax.form){if(ajax.setClick)element.form.clk=element;ajax.form.ajaxSubmit(ajax.options)}else{ajax.beforeSerialize(ajax.element,ajax.options);$.ajax(ajax.options)}}catch(e){ajax.ajaxing=false;alert("An error occurred while attempting to process "+ajax.options.url+": "+e.message)};if(typeof element.type!='undefined'&&(element.type=='checkbox'||element.type=='radio')){return true}else return false};Drupal.ajax.prototype.beforeSerialize=function(element,options){if(this.form){var settings=this.settings||Drupal.settings;Drupal.detachBehaviors(this.form,settings,'serialize')};options.data['ajax_html_ids[]']=[];$('[id]').each(function(){options.data['ajax_html_ids[]'].push(this.id)});options.data['ajax_page_state[theme]']=Drupal.settings.ajaxPageState.theme;options.data['ajax_page_state[theme_token]']=Drupal.settings.ajaxPageState.theme_token;for(var key in Drupal.settings.ajaxPageState.css)options.data['ajax_page_state[css]['+key+']']=1;for(var key in Drupal.settings.ajaxPageState.js)options.data['ajax_page_state[js]['+key+']']=1};Drupal.ajax.prototype.beforeSubmit=function(form_values,element,options){};Drupal.ajax.prototype.beforeSend=function(xmlhttprequest,options){if(this.form){options.extraData=options.extraData||{};options.extraData.ajax_iframe_upload='1';var v=$.fieldValue(this.element);if(v!==null)options.extraData[this.element.name]=Drupal.checkPlain(v)};$(this.element).addClass('progress-disabled').attr('disabled',true);if(this.progress.type=='bar'){var progressBar=new Drupal.progressBar('ajax-progress-'+this.element.id,eval(this.progress.update_callback),this.progress.method,eval(this.progress.error_callback));if(this.progress.message)progressBar.setProgress(-1,this.progress.message);if(this.progress.url)progressBar.startMonitoring(this.progress.url,this.progress.interval||1500);this.progress.element=$(progressBar.element).addClass('ajax-progress ajax-progress-bar');this.progress.object=progressBar;$(this.element).after(this.progress.element)}else if(this.progress.type=='throbber'){this.progress.element=$('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');if(this.progress.message)$('.throbber',this.progress.element).after('<div class="message">'+this.progress.message+'</div>');$(this.element).after(this.progress.element)}};Drupal.ajax.prototype.success=function(response,status){if(this.progress.element)$(this.progress.element).remove();if(this.progress.object)this.progress.object.stopMonitoring();$(this.element).removeClass('progress-disabled').removeAttr('disabled');Drupal.freezeHeight();for(var i in response)if(response.hasOwnProperty(i)&&response[i]['command']&&this.commands[response[i]['command']])this.commands[response[i]['command']](this,response[i],status);if(this.form){var settings=this.settings||Drupal.settings;Drupal.attachBehaviors(this.form,settings)};Drupal.unfreezeHeight();this.settings=null};Drupal.ajax.prototype.getEffect=function(response){var type=response.effect||this.effect,speed=response.speed||this.speed,effect={};if(type=='none'){effect.showEffect='show';effect.hideEffect='hide';effect.showSpeed=''}else if(type=='fade'){effect.showEffect='fadeIn';effect.hideEffect='fadeOut';effect.showSpeed=speed}else{effect.showEffect=type+'Toggle';effect.hideEffect=type+'Toggle';effect.showSpeed=speed};return effect};Drupal.ajax.prototype.error=function(xmlhttprequest,uri,customMessage){Drupal.displayAjaxError(Drupal.ajaxError(xmlhttprequest,uri,customMessage));if(this.progress.element)$(this.progress.element).remove();if(this.progress.object)this.progress.object.stopMonitoring();$(this.wrapper).show();$(this.element).removeClass('progress-disabled').removeAttr('disabled');if(this.form){var settings=this.settings||Drupal.settings;Drupal.attachBehaviors(this.form,settings)}};Drupal.ajax.prototype.commands={insert:function(ajax,response,status){var wrapper=response.selector?$(response.selector):$(ajax.wrapper),method=response.method||ajax.method,effect=ajax.getEffect(response),new_content_wrapped=$('<div></div>').html(response.data),new_content=new_content_wrapped.contents();if(new_content.length!=1||new_content.get(0).nodeType!=1)new_content=new_content_wrapped;switch(method){case'html':case'replaceWith':case'replaceAll':case'empty':case'remove':var settings=response.settings||ajax.settings||Drupal.settings;Drupal.detachBehaviors(wrapper,settings)};wrapper[method](new_content);if(effect.showEffect!='show')new_content.hide();if($('.ajax-new-content',new_content).length>0){$('.ajax-new-content',new_content).hide();new_content.show();$('.ajax-new-content',new_content)[effect.showEffect](effect.showSpeed)}else if(effect.showEffect!='show')new_content[effect.showEffect](effect.showSpeed);if(new_content.parents('html').length>0){var settings=response.settings||ajax.settings||Drupal.settings;Drupal.attachBehaviors(new_content,settings)}},remove:function(ajax,response,status){var settings=response.settings||ajax.settings||Drupal.settings;Drupal.detachBehaviors($(response.selector),settings);$(response.selector).remove()},changed:function(ajax,response,status){if(!$(response.selector).hasClass('ajax-changed')){$(response.selector).addClass('ajax-changed');if(response.asterisk)$(response.selector).find(response.asterisk).append(' <span class="ajax-changed">*</span> ')}},alert:function(ajax,response,status){alert(response.text,response.title)},css:function(ajax,response,status){$(response.selector).css(response.argument)},settings:function(ajax,response,status){if(response.merge){$.extend(true,Drupal.settings,response.settings)}else ajax.settings=response.settings},data:function(ajax,response,status){$(response.selector).data(response.name,response.value)},invoke:function(ajax,response,status){var $element=$(response.selector);$element[response.method].apply($element,response.arguments)},restripe:function(ajax,response,status){$('> tbody > tr:visible, > tr:visible',$(response.selector)).removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even')},add_css:function(ajax,response,status){$('head').prepend(response.data);var match,importMatch=/^@import url\("(.*)"\);$/igm;if(document.styleSheets[0].addImport&&importMatch.test(response.data)){importMatch.lastIndex=0;while(match=importMatch.exec(response.data))document.styleSheets[0].addImport(match[1])}},updateBuildId:function(ajax,response,status){$('input[name="form_build_id"][value="'+response.old+'"]').val(response['new'])}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.readandspell.com/misc/ajax.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.readandspell.com/sites/all/modules/jquery_update/js/jquery_update.js. */
(function(D){var beforeSerialize=D.ajax.prototype.beforeSerialize;D.ajax.prototype.beforeSerialize=function(element,options){beforeSerialize.call(this,element,options);options.data['ajax_page_state[jquery_version]']=D.settings.ajaxPageState.jquery_version}})(Drupal);;
/* Source and licensing information for the above line(s) can be found at https://www.readandspell.com/sites/all/modules/jquery_update/js/jquery_update.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.readandspell.com/sites/all/modules/admin_menu/admin_devel/admin_devel.js. */
(function($){jQuery.extend({debug:function(){window.debug=window.debug||[];args=jQuery.makeArray(arguments);if(typeof this=='object'){var name=(args.length?args[0]:window.debug.length),data=this}else{var name=(args.length>1?args.pop():window.debug.length),data=args[0]};window.debug[name]=data;if(typeof console!='undefined')console.log(name,data);return this}});jQuery.fn.debug=jQuery.debug})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.readandspell.com/sites/all/modules/admin_menu/admin_devel/admin_devel.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.readandspell.com/sites/all/modules/autoupload/js/autoupload.js. */
(function($){Drupal.behaviors.autoUpload={attach:function(context,settings){$('.form-item input.form-submit[value=Upload]',context).hide();$('.form-item input.form-file',context).change(function(){$parent=$(this).closest('.form-item');setTimeout(function(){if(!$('.error',$parent).length)$('input.form-submit[value=Upload]',$parent).mousedown()},100)})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.readandspell.com/sites/all/modules/autoupload/js/autoupload.js. */
;/*})'"*/
// Generated by CoffeeScript 1.7.1
(function() {
  var $, cardFromNumber, cardFromType, cards, defaultFormat, formatBackCardNumber, formatBackExpiry, formatCardNumber, formatExpiry, formatForwardExpiry, formatForwardSlashAndSpace, hasTextSelected, luhnCheck, reFormatCVC, reFormatCardNumber, reFormatExpiry, reFormatNumeric, replaceFullWidthChars, restrictCVC, restrictCardNumber, restrictExpiry, restrictNumeric, safeVal, setCardType,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  $ = window.jQuery || window.Zepto || window.$;

  $.payment = {};

  $.payment.fn = {};

  $.fn.payment = function() {
    var args, method;
    method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    return $.payment.fn[method].apply(this, args);
  };

  defaultFormat = /(\d{1,4})/g;

  $.payment.cards = cards = [
    {
      type: 'maestro',
      patterns: [5018, 502, 503, 506, 56, 58, 639, 6220, 67],
      format: defaultFormat,
      length: [12, 13, 14, 15, 16, 17, 18, 19],
      cvcLength: [3],
      luhn: true
    }, {
      type: 'forbrugsforeningen',
      patterns: [600],
      format: defaultFormat,
      length: [16],
      cvcLength: [3],
      luhn: true
    }, {
      type: 'dankort',
      patterns: [5019],
      format: defaultFormat,
      length: [16],
      cvcLength: [3],
      luhn: true
    }, {
      type: 'visa',
      patterns: [1,2,3,4,5,6,7,8,9,0],
      format: defaultFormat,
      length: [13, 16],
      cvcLength: [3],
      luhn: true
    }, {
      type: 'mastercard',
      patterns: [51, 52, 53, 54, 55, 22, 23, 24, 25, 26, 27],
      format: defaultFormat,
      length: [16],
      cvcLength: [3],
      luhn: true
    }, {
      type: 'amex',
      patterns: [34, 37],
      format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
      length: [15],
      cvcLength: [3, 4],
      luhn: true
    }, {
      type: 'dinersclub',
      patterns: [30, 36, 38, 39],
      format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
      length: [14],
      cvcLength: [3],
      luhn: true
    }, {
      type: 'discover',
      patterns: [60, 64, 65, 622],
      format: defaultFormat,
      length: [16],
      cvcLength: [3],
      luhn: true
    }, {
      type: 'unionpay',
      patterns: [62, 88],
      format: defaultFormat,
      length: [16, 17, 18, 19],
      cvcLength: [3],
      luhn: false
    }, {
      type: 'jcb',
      patterns: [35],
      format: defaultFormat,
      length: [16],
      cvcLength: [3],
      luhn: true
    }
  ];

  cardFromNumber = function(num) {
    var card, p, pattern, _i, _j, _len, _len1, _ref;
    num = (num + '').replace(/\D/g, '');
    for (_i = 0, _len = cards.length; _i < _len; _i++) {
      card = cards[_i];
      _ref = card.patterns;
      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
        pattern = _ref[_j];
        p = pattern + '';
        if (num.substr(0, p.length) === p) {
          return card;
        }
      }
    }
  };

  cardFromType = function(type) {
    var card, _i, _len;
    for (_i = 0, _len = cards.length; _i < _len; _i++) {
      card = cards[_i];
      if (card.type === type) {
        return card;
      }
    }
  };

  luhnCheck = function(num) {
    var digit, digits, odd, sum, _i, _len;
    odd = true;
    sum = 0;
    digits = (num + '').split('').reverse();
    for (_i = 0, _len = digits.length; _i < _len; _i++) {
      digit = digits[_i];
      digit = parseInt(digit, 10);
      if ((odd = !odd)) {
        digit *= 2;
      }
      if (digit > 9) {
        digit -= 9;
      }
      sum += digit;
    }
    return sum % 10 === 0;
  };

  hasTextSelected = function($target) {
    var _ref;
    if (($target.prop('selectionStart') != null) && $target.prop('selectionStart') !== $target.prop('selectionEnd')) {
      return true;
    }
    if ((typeof document !== "undefined" && document !== null ? (_ref = document.selection) != null ? _ref.createRange : void 0 : void 0) != null) {
      if (document.selection.createRange().text) {
        return true;
      }
    }
    return false;
  };

  safeVal = function(value, $target) {
    var currPair, cursor, digit, error, last, prevPair;
    try {
      cursor = $target.prop('selectionStart');
    } catch (_error) {
      error = _error;
      cursor = null;
    }
    last = $target.val();
    $target.val(value);
    if (cursor !== null && $target.is(":focus")) {
      if (cursor === last.length) {
        cursor = value.length;
      }
      if (last !== value) {
        prevPair = last.slice(cursor - 1, +cursor + 1 || 9e9);
        currPair = value.slice(cursor - 1, +cursor + 1 || 9e9);
        digit = value[cursor];
        if (/\d/.test(digit) && prevPair === ("" + digit + " ") && currPair === (" " + digit)) {
          cursor = cursor + 1;
        }
      }
      $target.prop('selectionStart', cursor);
      return $target.prop('selectionEnd', cursor);
    }
  };

  replaceFullWidthChars = function(str) {
    var chars, chr, fullWidth, halfWidth, idx, value, _i, _len;
    if (str == null) {
      str = '';
    }
    fullWidth = '\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19';
    halfWidth = '0123456789';
    value = '';
    chars = str.split('');
    for (_i = 0, _len = chars.length; _i < _len; _i++) {
      chr = chars[_i];
      idx = fullWidth.indexOf(chr);
      if (idx > -1) {
        chr = halfWidth[idx];
      }
      value += chr;
    }
    return value;
  };

  reFormatNumeric = function(e) {
    var $target;
    $target = $(e.currentTarget);
    return setTimeout(function() {
      var value;
      value = $target.val();
      value = replaceFullWidthChars(value);
      value = value.replace(/\D/g, '');
      return safeVal(value, $target);
    });
  };

  reFormatCardNumber = function(e) {
    var $target;
    $target = $(e.currentTarget);
    return setTimeout(function() {
      var value;
      value = $target.val();
      value = replaceFullWidthChars(value);
      value = $.payment.formatCardNumber(value);
      return safeVal(value, $target);
    });
  };

  formatCardNumber = function(e) {
    var $target, card, digit, length, re, upperLength, value;
    digit = String.fromCharCode(e.which);
    if (!/^\d+$/.test(digit)) {
      return;
    }
    $target = $(e.currentTarget);
    value = $target.val();
    card = cardFromNumber(value + digit);
    length = (value.replace(/\D/g, '') + digit).length;
    upperLength = 16;
    if (card) {
      upperLength = card.length[card.length.length - 1];
    }
    if (length >= upperLength) {
      return;
    }
    if (($target.prop('selectionStart') != null) && $target.prop('selectionStart') !== value.length) {
      return;
    }
    if (card && card.type === 'amex') {
      re = /^(\d{4}|\d{4}\s\d{6})$/;
    } else {
      re = /(?:^|\s)(\d{4})$/;
    }
    if (re.test(value)) {
      e.preventDefault();
      return setTimeout(function() {
        return $target.val(value + ' ' + digit);
      });
    } else if (re.test(value + digit)) {
      e.preventDefault();
      return setTimeout(function() {
        return $target.val(value + digit + ' ');
      });
    }
  };

  formatBackCardNumber = function(e) {
    var $target, value;
    $target = $(e.currentTarget);
    value = $target.val();
    if (e.which !== 8) {
      return;
    }
    if (($target.prop('selectionStart') != null) && $target.prop('selectionStart') !== value.length) {
      return;
    }
    if (/\d\s$/.test(value)) {
      e.preventDefault();
      return setTimeout(function() {
        return $target.val(value.replace(/\d\s$/, ''));
      });
    } else if (/\s\d?$/.test(value)) {
      e.preventDefault();
      return setTimeout(function() {
        return $target.val(value.replace(/\d$/, ''));
      });
    }
  };

  reFormatExpiry = function(e) {
    var $target;
    $target = $(e.currentTarget);
    return setTimeout(function() {
      var value;
      value = $target.val();
      value = replaceFullWidthChars(value);
      value = $.payment.formatExpiry(value);
      return safeVal(value, $target);
    });
  };

  formatExpiry = function(e) {
    var $target, digit, val;
    digit = String.fromCharCode(e.which);
    if (!/^\d+$/.test(digit)) {
      return;
    }
    $target = $(e.currentTarget);
    val = $target.val() + digit;
    if (/^\d$/.test(val) && (val !== '0' && val !== '1')) {
      e.preventDefault();
      return setTimeout(function() {
        return $target.val("0" + val + " / ");
      });
    } else if (/^\d\d$/.test(val)) {
      e.preventDefault();
      return setTimeout(function() {
        var m1, m2;
        m1 = parseInt(val[0], 10);
        m2 = parseInt(val[1], 10);
        if (m2 > 2 && m1 !== 0) {
          return $target.val("0" + m1 + " / " + m2);
        } else {
          return $target.val("" + val + " / ");
        }
      });
    }
  };

  formatForwardExpiry = function(e) {
    var $target, digit, val;
    digit = String.fromCharCode(e.which);
    if (!/^\d+$/.test(digit)) {
      return;
    }
    $target = $(e.currentTarget);
    val = $target.val();
    if (/^\d\d$/.test(val)) {
      return $target.val("" + val + " / ");
    }
  };

  formatForwardSlashAndSpace = function(e) {
    var $target, val, which;
    which = String.fromCharCode(e.which);
    if (!(which === '/' || which === ' ')) {
      return;
    }
    $target = $(e.currentTarget);
    val = $target.val();
    if (/^\d$/.test(val) && val !== '0') {
      return $target.val("0" + val + " / ");
    }
  };

  formatBackExpiry = function(e) {
    var $target, value;
    $target = $(e.currentTarget);
    value = $target.val();
    if (e.which !== 8) {
      return;
    }
    if (($target.prop('selectionStart') != null) && $target.prop('selectionStart') !== value.length) {
      return;
    }
    if (/\d\s\/\s$/.test(value)) {
      e.preventDefault();
      return setTimeout(function() {
        return $target.val(value.replace(/\d\s\/\s$/, ''));
      });
    }
  };

  reFormatCVC = function(e) {
    var $target;
    $target = $(e.currentTarget);
    return setTimeout(function() {
      var value;
      value = $target.val();
      value = replaceFullWidthChars(value);
      value = value.replace(/\D/g, '').slice(0, 4);
      return safeVal(value, $target);
    });
  };

  restrictNumeric = function(e) {
    var input;
    if (e.metaKey || e.ctrlKey) {
      return true;
    }
    if (e.which === 32) {
      return false;
    }
    if (e.which === 0) {
      return true;
    }
    if (e.which < 33) {
      return true;
    }
    input = String.fromCharCode(e.which);
    return !!/[\d\s]/.test(input);
  };

  restrictCardNumber = function(e) {
    var $target, card, digit, value;
    $target = $(e.currentTarget);
    digit = String.fromCharCode(e.which);
    if (!/^\d+$/.test(digit)) {
      return;
    }
    if (hasTextSelected($target)) {
      return;
    }
    value = ($target.val() + digit).replace(/\D/g, '');
    card = cardFromNumber(value);
    if (card) {
      return value.length <= card.length[card.length.length - 1];
    } else {
      return value.length <= 16;
    }
  };

  restrictExpiry = function(e) {
    var $target, digit, value;
    $target = $(e.currentTarget);
    digit = String.fromCharCode(e.which);
    if (!/^\d+$/.test(digit)) {
      return;
    }
    if (hasTextSelected($target)) {
      return;
    }
    value = $target.val() + digit;
    value = value.replace(/\D/g, '');
    if (value.length > 6) {
      return false;
    }
  };

  restrictCVC = function(e) {
    var $target, digit, val;
    $target = $(e.currentTarget);
    digit = String.fromCharCode(e.which);
    if (!/^\d+$/.test(digit)) {
      return;
    }
    if (hasTextSelected($target)) {
      return;
    }
    val = $target.val() + digit;
    return val.length <= 4;
  };

  setCardType = function(e) {
    var $target, allTypes, card, cardType, val;
    $target = $(e.currentTarget);
    val = $target.val();
    cardType = $.payment.cardType(val) || 'unknown';
    if (!$target.hasClass(cardType)) {
      allTypes = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = cards.length; _i < _len; _i++) {
          card = cards[_i];
          _results.push(card.type);
        }
        return _results;
      })();
      $target.removeClass('unknown');
      $target.removeClass(allTypes.join(' '));
      $target.addClass(cardType);
      $target.toggleClass('identified', cardType !== 'unknown');
      return $target.trigger('payment.cardType', cardType);
    }
  };

  $.payment.fn.formatCardCVC = function() {
    this.on('keypress', restrictNumeric);
    this.on('keypress', restrictCVC);
    this.on('paste', reFormatCVC);
    this.on('change', reFormatCVC);
    this.on('input', reFormatCVC);
    return this;
  };

  $.payment.fn.formatCardExpiry = function() {
    this.on('keypress', restrictNumeric);
    this.on('keypress', restrictExpiry);
    this.on('keypress', formatExpiry);
    this.on('keypress', formatForwardSlashAndSpace);
    this.on('keypress', formatForwardExpiry);
    this.on('keydown', formatBackExpiry);
    this.on('change', reFormatExpiry);
    this.on('input', reFormatExpiry);
    return this;
  };

  $.payment.fn.formatCardNumber = function() {
    this.on('keypress', restrictNumeric);
    this.on('keypress', restrictCardNumber);
    this.on('keypress', formatCardNumber);
    this.on('keydown', formatBackCardNumber);
    this.on('keyup', setCardType);
    this.on('paste', reFormatCardNumber);
    this.on('change', reFormatCardNumber);
    this.on('input', reFormatCardNumber);
    this.on('input', setCardType);
    return this;
  };

  $.payment.fn.restrictNumeric = function() {
    this.on('keypress', restrictNumeric);
    this.on('paste', reFormatNumeric);
    this.on('change', reFormatNumeric);
    this.on('input', reFormatNumeric);
    return this;
  };

  $.payment.fn.cardExpiryVal = function() {
    return $.payment.cardExpiryVal($(this).val());
  };

  $.payment.cardExpiryVal = function(value) {
    var month, prefix, year, _ref;
    _ref = value.split(/[\s\/]+/, 2), month = _ref[0], year = _ref[1];
    if ((year != null ? year.length : void 0) === 2 && /^\d+$/.test(year)) {
      prefix = (new Date).getFullYear();
      prefix = prefix.toString().slice(0, 2);
      year = prefix + year;
    }
    month = parseInt(month, 10);
    year = parseInt(year, 10);
    return {
      month: month,
      year: year
    };
  };

  $.payment.validateCardNumber = function(num) {
    var card, _ref;
    num = (num + '').replace(/\s+|-/g, '');
    if (!/^\d+$/.test(num)) {
      return false;
    }
    card = cardFromNumber(num);
    if (!card) {
      return false;
    }
    return (_ref = num.length, __indexOf.call(card.length, _ref) >= 0) && (card.luhn === false || luhnCheck(num));
  };

  $.payment.validateCardExpiry = function(month, year) {
    var currentTime, expiry, _ref;
    if (typeof month === 'object' && 'month' in month) {
      _ref = month, month = _ref.month, year = _ref.year;
    }
    if (!(month && year)) {
      return false;
    }
    month = $.trim(month);
    year = $.trim(year);
    if (!/^\d+$/.test(month)) {
      return false;
    }
    if (!/^\d+$/.test(year)) {
      return false;
    }
    if (!((1 <= month && month <= 12))) {
      return false;
    }
    if (year.length === 2) {
      if (year < 70) {
        year = "20" + year;
      } else {
        year = "19" + year;
      }
    }
    if (year.length !== 4) {
      return false;
    }
    expiry = new Date(year, month);
    currentTime = new Date;
    expiry.setMonth(expiry.getMonth() - 1);
    expiry.setMonth(expiry.getMonth() + 1, 1);
    return expiry > currentTime;
  };

  $.payment.validateCardCVC = function(cvc, type) {
    var card, _ref;
    cvc = $.trim(cvc);
    if (!/^\d+$/.test(cvc)) {
      return false;
    }
    card = cardFromType(type);
    if (card != null) {
      return _ref = cvc.length, __indexOf.call(card.cvcLength, _ref) >= 0;
    } else {
      return cvc.length >= 3 && cvc.length <= 4;
    }
  };

  $.payment.cardType = function(num) {
    var _ref;
    if (!num) {
      return null;
    }
    return ((_ref = cardFromNumber(num)) != null ? _ref.type : void 0) || null;
  };

  $.payment.formatCardNumber = function(num) {
    var card, groups, upperLength, _ref;
    num = num.replace(/\D/g, '');
    card = cardFromNumber(num);
    if (!card) {
      return num;
    }
    upperLength = card.length[card.length.length - 1];
    num = num.slice(0, upperLength);
    if (card.format.global) {
      return (_ref = num.match(card.format)) != null ? _ref.join(' ') : void 0;
    } else {
      groups = card.format.exec(num);
      if (groups == null) {
        return;
      }
      groups.shift();
      groups = $.grep(groups, function(n) {
        return n;
      });
      return groups.join(' ');
    }
  };

  $.payment.formatExpiry = function(expiry) {
    var mon, parts, sep, year;
    parts = expiry.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/);
    if (!parts) {
      return '';
    }
    mon = parts[1] || '';
    sep = parts[2] || '';
    year = parts[3] || '';
    if (year.length > 0) {
      sep = ' / ';
    } else if (sep === ' /') {
      mon = mon.substring(0, 1);
      sep = '';
    } else if (mon.length === 2 || sep.length > 0) {
      sep = ' / ';
    } else if (mon.length === 1 && (mon !== '0' && mon !== '1')) {
      mon = "0" + mon;
      sep = ' / ';
    }
    return mon + sep + year;
  };

}).call(this);

;/*})'"*/
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.readandspell.com/sites/all/modules/lazy/lazy.js. */
(function($){'use strict';Drupal.behaviors.lazy={attach:function(context,settings){var options=settings.lazy?settings.lazy:{};Drupal.lazy=new Blazy(options)}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.readandspell.com/sites/all/modules/lazy/lazy.js. */
;/*})'"*/
/*!
	Colorbox 1.6.4
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(A+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in x[0]&&!x[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),x.focus())}function c(t){c.str!==t&&(x.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){A=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),A=W.index(_.el),-1===A&&(W=W.add(_.el),A=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!U){U=$=!0,c(_.get("className")),x.css({visibility:"hidden",display:"block",opacity:""}),I=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(I),j=T.height()+k.height()+b.outerHeight(!0)-b.height(),D=C.width()+H.width()+b.outerWidth(!0)-b.width(),N=I.outerHeight(!0),z=I.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=Math.max((l!==!1?Math.min(h,a(l,"x")):h)-z-D,0),_.h=Math.max((f!==!1?Math.min(s,a(f,"y")):s)-N-j,0),I.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(F).hide(),x.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){x||(V=!1,E=t(i),x=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),L=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),y=n(se,"Wrapper"),b=n(se,"Content").append(F=n(se,"Title"),R=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),S=t('<button type="button"/>').attr({id:Z+"Slideshow"}),L),B=t('<button type="button"/>').attr({id:Z+"Close"}),y.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(R).add(S)),e.body&&!x.parent().length&&t(e.body).append(v,x.append(y,M))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return x?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;U&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),U&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if($=!0,q=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-N-j:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-z-D:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-z-D,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-N-j,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){L.show()},100),_.get("inline")){var c=t(e).eq(0);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),q=_.get("createImg"),t(q).addClass(Z+"Photo").bind("error."+Z,function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;_.get("retinaImage")&&i.devicePixelRatio>1&&(q.height=q.height/i.devicePixelRatio,q.width=q.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){q.height-=q.height*e,q.width-=q.width*e},_.mw&&q.width>_.mw&&(e=(q.width-_.mw)/q.width,o()),_.mh&&q.height>_.mh&&(e=(q.height-_.mh)/q.height,o())),_.h&&(q.style.marginTop=Math.max(_.mh-q.height,0)/2+"px"),W[1]&&(_.get("loop")||W[A+1])&&(q.style.cursor="pointer",t(q).bind("click."+Z,function(){J.next()})),q.style.width=q.width+"px",q.style.height=q.height+"px",h(q)},1)}),q.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,x,y,b,T,C,H,k,W,E,I,M,L,F,R,S,K,P,B,O,_,j,D,N,z,A,q,U,$,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullscreen=!0,i}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[A+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){S.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),x.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),S.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),x.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,S.hide(),t(),ae.unbind(ne,e).unbind(ie,t),x.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),S.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;return e=e||{},t.isFunction(o)&&(o=t("<a/>"),e.open=!0),o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(x[0].style.width,10)-D+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(x[0].style.height,10)-j+"px"}var r,h,s,l=0,d=0,c=x.offset();if(E.unbind("resize."+Z),x.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,x.css({position:"fixed"})):(l=h,d=s,x.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-z-D-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-z-D,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-N-j-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-N-j,0)/2),x.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:_.w+z+D,height:_.h+N+j,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||x.css(r),x.dequeue().animate(r,{duration:e||0,complete:function(){n(),$=!1,y[0].style.width=_.w+z+D+"px",y[0].style.height=_.h+N+j+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;U&&(t=t||{},t.width&&(_.w=a(t.width,"x")-z-D),t.innerWidth&&(_.w=a(t.innerWidth,"x")),I.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-N-j),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=I.scrollTop(),I.css({height:"auto"}),_.h=I.height()),I.css({height:_.h}),e&&I.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||I.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||I.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if(U){var d,g="none"===_.get("transition")?0:_.get("speed");I.remove(),I=n(se,"LoadedContent").append(i),I.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(q).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&x[0].style.removeAttribute("filter")}var n,o,a=W.length;U&&(o=function(){clearTimeout(Q),L.hide(),u(ne),_.get("onComplete")},F.html(_.get("title")).show(),I.show(),a>1?("string"==typeof _.get("current")&&R.html(_.get("current").replace("{current}",A+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>A?"show":"hide"]().html(_.get("next")),P[_.get("loop")||A?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=_.get("createIframe"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),"class":Z+"Iframe"}).one("load",o).appendTo(I),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?x.fadeTo(g,1,i):i())},"fade"===_.get("transition")?x.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!$&&W[1]&&(_.get("loop")||W[A+1])&&(A=h(1),f(W[A]))},J.prev=function(){!$&&W[1]&&(_.get("loop")||A)&&(A=h(-1),f(W[A]))},J.close=function(){U&&!G&&(G=!0,U=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),x.stop().fadeTo(_.get("fadeOut")||0,0,function(){x.hide(),v.hide(),u(he),I.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){x&&(x.stop(),t[Y].close(),x.stop(!1,!0).remove(),v.remove(),G=!1,x=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);
;/*})'"*/
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.readandspell.com/sites/all/modules/colorbox/js/colorbox.js. */
(function($){Drupal.behaviors.initColorbox={attach:function(context,settings){if(!$.isFunction($('a, area, input',context).colorbox)||typeof settings.colorbox==='undefined')return;if(settings.colorbox.mobiledetect&&window.matchMedia){var mq=window.matchMedia("(max-device-width: "+settings.colorbox.mobiledevicewidth+")");if(mq.matches)return};settings.colorbox.rel=function(){if($(this).data('colorbox-gallery')){return $(this).data('colorbox-gallery')}else return $(this).attr('rel')};$('.colorbox',context).once('init-colorbox').each(function(){$(this).colorbox(settings.colorbox)});$(context).bind('cbox_complete',function(){Drupal.attachBehaviors('#cboxLoadedContent')})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.readandspell.com/sites/all/modules/colorbox/js/colorbox.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.readandspell.com/sites/all/modules/colorbox/styles/default/colorbox_style.js. */
(function($){Drupal.behaviors.initColorboxDefaultStyle={attach:function(context,settings){$(context).bind('cbox_complete',function(){if($('#cboxTitle:empty',context).length==false){$('#cboxLoadedContent img',context).bind('mouseover',function(){$('#cboxTitle',context).slideDown()});$('#cboxOverlay',context).bind('mouseover',function(){$('#cboxTitle',context).slideUp()})}else $('#cboxTitle',context).hide()})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.readandspell.com/sites/all/modules/colorbox/styles/default/colorbox_style.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.readandspell.com/sites/all/modules/colorbox/js/colorbox_load.js. */
(function($){Drupal.behaviors.initColorboxLoad={attach:function(context,settings){if(!$.isFunction($.colorbox)||typeof settings.colorbox==='undefined')return;if(settings.colorbox.mobiledetect&&window.matchMedia){var mq=window.matchMedia("(max-device-width: "+settings.colorbox.mobiledevicewidth+")");if(mq.matches)return};$.urlParams=function(url){var p={},e,a=/\+/g,r=/([^&=]+)=?([^&]*)/g,d=function(s){return decodeURIComponent(s.replace(a,' '))},q=url.split('?');while(e=r.exec(q[1])){e[1]=d(e[1]);e[2]=d(e[2]);switch(e[2].toLowerCase()){case'true':case'yes':e[2]=true;break;case'false':case'no':e[2]=false;break};if(e[1]=='width')e[1]='innerWidth';if(e[1]=='height')e[1]='innerHeight';p[e[1]]=e[2]};return p};$('.colorbox-load',context).once('init-colorbox-load',function(){var params=$.urlParams($(this).attr('href'));$(this).colorbox($.extend({},settings.colorbox,params))})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.readandspell.com/sites/all/modules/colorbox/js/colorbox_load.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.readandspell.com/sites/all/modules/jswatchdog/jswatchdog.js. */
Drupal.watchdog=function(type,message,variables,severity,link){"use strict";var data,i;data={type:'js: '+type,message:message,severity:severity||Drupal.watchdog.NOTICE,link:link||window.location.pathname};for(i in variables)if(variables.hasOwnProperty(i))data['variables['+i+']']=variables[i];if(Drupal.settings.jswatchdog.limit>0)jQuery.post(Drupal.settings.basePath+'jswatchdog',data);Drupal.settings.jswatchdog.limit--};Drupal.watchdog.EMERG=0;Drupal.watchdog.ALERT=1;Drupal.watchdog.CRITICAL=2;Drupal.watchdog.ERROR=3;Drupal.watchdog.WARNING=4;Drupal.watchdog.NOTICE=5;Drupal.watchdog.INFO=6;Drupal.watchdog.DEBUG=7;;
/* Source and licensing information for the above line(s) can be found at https://www.readandspell.com/sites/all/modules/jswatchdog/jswatchdog.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.readandspell.com/sites/all/modules/persistent_url_parameters/js/jquery.cookie.js. */
jQuery.cookie=function(key,value,options){if(arguments.length>1&&(value===null||typeof value!=="object")){options=jQuery.extend({},options);if(value===null)options.expires=-1;if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days)};return(document.cookie=[encodeURIComponent(key),'=',options.raw?String(value):encodeURIComponent(String(value)),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''))};options=value||{};var result,decode=options.raw?function(s){return s}:decodeURIComponent;return(result=new RegExp('(?:^|; )'+encodeURIComponent(key)+'=([^;]*)').exec(document.cookie))?decode(result[1]):null};
/* Source and licensing information for the above line(s) can be found at https://www.readandspell.com/sites/all/modules/persistent_url_parameters/js/jquery.cookie.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.readandspell.com/sites/all/modules/persistent_url_parameters/js/persistent_url_parameters.js. */
(function($){'use strict';Drupal.behaviors.persistent_url_parameters={attach:function(context,settings){var querystring=window.location.href.slice(window.location.href.indexOf('?')+1);querystring=decodeURI(querystring);var list=Drupal.settings.persistent_url_parameters.list;list=list.split('|');var is_present=false;list.forEach(function(entry){if(querystring.toLowerCase().match(entry+'='))is_present=true});if(is_present){var parameters_in_cookie=$.cookie('persistent_url_parameters');if(typeof parameters_in_cookie==='undefined'){$.cookie('persistent_url_parameters',querystring,{path:'/',expires:1})}else if(typeof parameters_in_cookie!=='undefined'&&!(querystring.match(parameters_in_cookie)&&querystring.length===parameters_in_cookie.length)){$.cookie('persistent_url_parameters',querystring,{path:'/',expires:1})}else querystring=parameters_in_cookie;$('a').each(function(event){if($(this).hasClass('link-string-processed'))return false;var href=$(this).attr('href'),target=$(this).attr('target');if(href&&(!target||target!=='_blank')&&(href!=="javascript:void(0)")&&(href!=='#'))if(typeof href!=='undefined'&&href.match('^#')!=='undefined'&&href.match('^#')===null){if(href.match(/\?/)){var anchor_params=href.slice(href.indexOf('?')+1),anchor_path=href.slice(0,href.indexOf('?'));if(anchor_params.match('#')){var anchor_params_without_hash=anchor_params.slice(0,anchor_params.indexOf('#')),anchor_hash=anchor_params.slice(anchor_params.indexOf('#'));if(!anchor_params_without_hash.match(querystring)){var overridden_params=Drupal.behaviors.persistent_url_parameters.remove_overridden_link_params(anchor_params_without_hash,querystring);overridden_params=typeof overridden_params=='undefined'?'':overridden_params+'&';href=anchor_path+'?'+overridden_params+querystring+anchor_hash}}else if(!anchor_params.match(querystring)){var overridden_params=Drupal.behaviors.persistent_url_parameters.remove_overridden_link_params(anchor_params,querystring);overridden_params=typeof overridden_params=='undefined'?'':overridden_params+'&';href=anchor_path+'?'+overridden_params+querystring}}else if(!href.match(/admin/g))href+='?'+querystring;$(this).attr('href',encodeURI(href));$(this).addClass('link-string-processed')}})}},remove_overridden_link_params:function(link_params,query_string_params){var query_key_array=[],query_string_params_array=query_string_params.split('&');for(var i=0;i<query_string_params_array.length;i++)query_key_array.push(query_string_params_array[i].split('=')[0]);var link_params_array=link_params.split('&');for(var i=0;i<link_params_array.length;i++){var link_param=link_params_array[i].split('=')[0];for(var j=0;j<query_key_array.length;j++)if(link_param==query_key_array[j]){link_params_array.splice(i,1);i--}};return link_params_array.join("&")}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.readandspell.com/sites/all/modules/persistent_url_parameters/js/persistent_url_parameters.js. */
;/*})'"*/
/* Source and licensing information for the line(s) below can be found at https://www.readandspell.com/sites/all/modules/responsive_menus/styles/responsive_menus_simple/js/responsive_menus_simple.js. */
(function($){var toggler_click=function(){$(this).parent().toggleClass('responsive-toggled')}
function remove_mouse_events(menuElement){var jqVersion=$.fn.jquery;if(jqVersion<1.7){$(menuElement).die('mouseover mouseout mouseenter mouseleave');$(menuElement+' li').die('mouseover mouseout mouseenter mouseleave');$(menuElement+' li a').die('mouseover mouseout mouseenter mouseleave')}else{$(menuElement).off('hover');$(menuElement+' li').off('hover');$(menuElement+' li a').off('hover')};$(menuElement).unbind('mouseover mouseout mouseenter mouseleave');$(menuElement+' li').unbind('mouseover mouseout mouseenter mouseleave');$(menuElement+' li a').unbind('mouseover mouseout mouseenter mouseleave')}
function store_classes_ids(menuElement){if(!$(menuElement).attr('id'))$(menuElement).attr('id','rm-no-id-main');if(!$(menuElement).attr('class'))$(menuElement).attr('class','rm-no-class');$(menuElement).data('removeattr',true).data('rmids',$(menuElement).attr('id')).data('rmclasses',$(menuElement).attr('class'));var incr=0;$(menuElement).find('ul').each(function(){incr++;if(!$(this).attr('id'))$(this).attr('id','rm-no-id-'+incr);if(!$(this).attr('class'))$(this).attr('class','rm-no-class');$(this).data('removeattr',true).data('rmids',$(this).attr('id')).data('rmclasses',$(this).attr('class'))});$(menuElement).addClass('responsive-menus-simple')}
function remove_classes_ids(menuElement){$(menuElement).find('ul').each(function(){$(this).attr('class','rm-removed').attr('id','rm-removed')});$(menuElement).attr('class','responsive-menus-simple').attr('id','rm-removed')};Drupal.behaviors.responsive_menus={attach:function(context,settings){settings.responsive_menus=settings.responsive_menus||{};$('body').once('responsive-menus-load',function(){if(!$('meta[name=viewport]').length>0)$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0">');var windowWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;$.each(settings.responsive_menus,function(ind,iteration){if(iteration.responsive_menus_style!='responsive_menus_simple')return true;if(!iteration.selectors.length)return true;var $media_unit=iteration.media_unit||'px';if($media_unit==='em'){var $base_font_size=parseFloat($('body').css('font-size')),$media_size=iteration.media_size*$base_font_size||768}else var $media_size=iteration.media_size||768;var toggler_class='',toggler_text=iteration.toggler_text;$.each(iteration.selectors,function(index,value){if($(value).length<1)return true;if($(value).length>1){$(value).each(function(val_index){if(!$(this).parents('ul').length)if(!$(this).hasClass('responsive-menus-simple')){toggler_class='responsive-menus-'+ind+'-'+index+'-'+val_index;if(iteration.remove_attributes)store_classes_ids(this);$(this).wrap('<div data-mediasize="'+$media_size+'" class="responsive-menus '+toggler_class+'" />');$('.'+toggler_class).prepend('<span class="toggler">'+toggler_text+'</span>');$('.'+toggler_class+' .toggler').bind('click',toggler_click);if(iteration.disable_mouse_events)remove_mouse_events(this);if(iteration.absolute)$('.'+toggler_class).addClass('absolute');if(windowWidth<=$media_size){if(iteration.remove_attributes)remove_classes_ids(this);$('.'+toggler_class).addClass('responsified')}}})}else if(!$(value).hasClass('responsive-menus-simple')){toggler_class='responsive-menus-'+ind+'-'+index;if(iteration.remove_attributes)store_classes_ids(value);$(value).wrap('<div data-mediasize="'+$media_size+'" class="responsive-menus '+toggler_class+'" />');$('.'+toggler_class).prepend('<span class="toggler">'+toggler_text+'</span>');$('.'+toggler_class+' .toggler').bind('click',toggler_click);if(iteration.disable_mouse_events)remove_mouse_events(value);if(iteration.absolute)$('.'+toggler_class).addClass('absolute');if(windowWidth<=$media_size){if(iteration.remove_attributes)remove_classes_ids(value);$('.'+toggler_class).addClass('responsified')}}})});$(window).resize(function(){windowWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;$('.responsive-menus').each(function(menuIndex,menuValue){var mediasize=$(this).data('mediasize')||768;if($(this).width()>windowWidth){$(this).data('nonresponsive',true);$(this).width(windowWidth)};var menuElement=$(this).find('.responsive-menus-simple');if(windowWidth>=mediasize){if(menuElement.data('removeattr')){menuElement.addClass(menuElement.data('rmclasses'));menuElement.attr('id',menuElement.data('rmids'));menuElement.find('ul').each(function(){$(this).addClass($(this).data('rmclasses'));$(this).attr('id',$(this).data('rmids'))})};$(this).removeClass('responsified')};if(windowWidth<=mediasize){if($(this).data('nonresponsive')&&$(this).width()<windowWidth)$(this).width(windowWidth);if(menuElement.data('removeattr'))remove_classes_ids(menuElement);$(this).addClass('responsified')}})})})}}}(jQuery));;
/* Source and licensing information for the above line(s) can be found at https://www.readandspell.com/sites/all/modules/responsive_menus/styles/responsive_menus_simple/js/responsive_menus_simple.js. */
;/*})'"*/
