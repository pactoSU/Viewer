# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
;
/*! jQuery v1.7.2 jquery.com | jquery.org/license */

(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */

(function(a,b){function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;return!b.href||!g||f.nodeName.toLowerCase()!=="map"?!1:(h=a("img[usemap=#"+g+"]")[0],!!h&&d(h))}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(a.ui.version)return;a.extend(a.ui,{version:"1.8.20",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;return a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.each(["Width","Height"],function(c,d){function h(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)}),c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?g["inner"+d].call(this):this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return typeof b!="number"?g["outer"+d].call(this,b):this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!d||!a.element[0].parentNode)return;for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;return b[d]>0?!0:(b[d]=1,e=b[d]>0,b[d]=0,e)},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}})})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.widget.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){return c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}}),d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;return e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e,f&&e.charAt(0)==="_"?h:(f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b)return h=f,!1}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))}),h)}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}return this._setOptions(e),this},_setOptions:function(b){var c=this;return a.each(b,function(a,b){c._setOption(a,b)}),this},_setOption:function(a,b){return this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.mouse.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(b){if(c)return;this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted)return b.preventDefault(),!0}return!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0,!0},_mouseMove:function(b){return!a.browser.msie||document.documentMode>=9||!!b.button?this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted):this._mouseUp(b)},_mouseUp:function(b){return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.position.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.ui=a.ui||{};var c=/left|center|right/,d=/top|center|bottom/,e="center",f={},g=a.fn.position,h=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return g.apply(this,arguments);b=a.extend({},b);var h=a(b.of),i=h[0],j=(b.collision||"flip").split(" "),k=b.offset?b.offset.split(" "):[0,0],l,m,n;return i.nodeType===9?(l=h.width(),m=h.height(),n={top:0,left:0}):i.setTimeout?(l=h.width(),m=h.height(),n={top:h.scrollTop(),left:h.scrollLeft()}):i.preventDefault?(b.at="left top",l=m=0,n={top:b.of.pageY,left:b.of.pageX}):(l=h.outerWidth(),m=h.outerHeight(),n=h.offset()),a.each(["my","at"],function(){var a=(b[this]||"").split(" ");a.length===1&&(a=c.test(a[0])?a.concat([e]):d.test(a[0])?[e].concat(a):[e,e]),a[0]=c.test(a[0])?a[0]:e,a[1]=d.test(a[1])?a[1]:e,b[this]=a}),j.length===1&&(j[1]=j[0]),k[0]=parseInt(k[0],10)||0,k.length===1&&(k[1]=k[0]),k[1]=parseInt(k[1],10)||0,b.at[0]==="right"?n.left+=l:b.at[0]===e&&(n.left+=l/2),b.at[1]==="bottom"?n.top+=m:b.at[1]===e&&(n.top+=m/2),n.left+=k[0],n.top+=k[1],this.each(function(){var c=a(this),d=c.outerWidth(),g=c.outerHeight(),h=parseInt(a.curCSS(this,"marginLeft",!0))||0,i=parseInt(a.curCSS(this,"marginTop",!0))||0,o=d+h+(parseInt(a.curCSS(this,"marginRight",!0))||0),p=g+i+(parseInt(a.curCSS(this,"marginBottom",!0))||0),q=a.extend({},n),r;b.my[0]==="right"?q.left-=d:b.my[0]===e&&(q.left-=d/2),b.my[1]==="bottom"?q.top-=g:b.my[1]===e&&(q.top-=g/2),f.fractions||(q.left=Math.round(q.left),q.top=Math.round(q.top)),r={left:q.left-h,top:q.top-i},a.each(["left","top"],function(c,e){a.ui.position[j[c]]&&a.ui.position[j[c]][e](q,{targetWidth:l,targetHeight:m,elemWidth:d,elemHeight:g,collisionPosition:r,collisionWidth:o,collisionHeight:p,offset:k,my:b.my,at:b.at})}),a.fn.bgiframe&&c.bgiframe(),c.offset(a.extend(q,{using:b.using}))})},a.ui.position={fit:{left:function(b,c){var d=a(window),e=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft();b.left=e>0?b.left-e:Math.max(b.left-c.collisionPosition.left,b.left)},top:function(b,c){var d=a(window),e=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop();b.top=e>0?b.top-e:Math.max(b.top-c.collisionPosition.top,b.top)}},flip:{left:function(b,c){if(c.at[0]===e)return;var d=a(window),f=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft(),g=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,h=c.at[0]==="left"?c.targetWidth:-c.targetWidth,i=-2*c.offset[0];b.left+=c.collisionPosition.left<0?g+h+i:f>0?g+h+i:0},top:function(b,c){if(c.at[1]===e)return;var d=a(window),f=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop(),g=c.my[1]==="top"?-c.elemHeight:c.my[1]==="bottom"?c.elemHeight:0,h=c.at[1]==="top"?c.targetHeight:-c.targetHeight,i=-2*c.offset[1];b.top+=c.collisionPosition.top<0?g+h+i:f>0?g+h+i:0}}},a.offset.setOffset||(a.offset.setOffset=function(b,c){/static/.test(a.curCSS(b,"position"))&&(b.style.position="relative");var d=a(b),e=d.offset(),f=parseInt(a.curCSS(b,"top",!0),10)||0,g=parseInt(a.curCSS(b,"left",!0),10)||0,h={top:c.top-e.top+f,left:c.left-e.left+g};"using"in c?c.using.call(b,h):d.css(h)},a.fn.offset=function(b){var c=this[0];return!c||!c.ownerDocument?null:b?this.each(function(){a.offset.setOffset(this,b)}):h.call(this)}),function(){var b=document.getElementsByTagName("body")[0],c=document.createElement("div"),d,e,g,h,i;d=document.createElement(b?"div":"body"),g={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},b&&a.extend(g,{position:"absolute",left:"-1000px",top:"-1000px"});for(var j in g)d.style[j]=g[j];d.appendChild(c),e=b||document.documentElement,e.insertBefore(d,e.firstChild),c.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",h=a(c).offset(function(a,b){return b}).offset(),d.innerHTML="",e.removeChild(d),i=h.top+h.left+(b?2e3:0),f.fractions=i>21&&i<22}()})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.draggable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},destroy:function(){if(!this.element.data("draggable"))return;return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy(),this},_mouseCapture:function(b){var c=this.options;return this.helper||c.disabled||a(b.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(b),this.handle?(c.iframeFix&&a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),c.containment&&this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.helper.addClass("ui-draggable-dragging"),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_mouseDrag:function(b,c){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute");if(!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp({}),!1;this.position=d.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";return a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=!1;a.ui.ddmanager&&!this.options.dropBehaviour&&(c=a.ui.ddmanager.drop(this,b)),this.dropped&&(c=this.dropped,this.dropped=!1);var d=this.element[0],e=!1;while(d&&(d=d.parentNode))d==document&&(e=!0);if(!e&&this.options.helper==="original")return!1;if(this.options.revert=="invalid"&&!c||this.options.revert=="valid"&&c||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)){var f=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){f._trigger("stop",b)!==!1&&f._clear()})}else this._trigger("stop",b)!==!1&&this._clear();return!1},_mouseUp:function(b){return this.options.iframeFix===!0&&a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?!0:!1;return a(this.options.handle,this.element).find("*").andSelf().each(function(){this==b.target&&(c=!0)}),c},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;return d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo),d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute"),d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[b.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,b.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(b.containment=="document"?0:a(window).scrollLeft())+a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b.containment=="document"?0:a(window).scrollTop())+(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)&&b.containment.constructor!=Array){var c=a(b.containment),d=c[0];if(!d)return;var e=c.offset(),f=a(d).css("overflow")!="hidden";this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c}else b.containment.constructor==Array&&(this.containment=b.containment)},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName),f=b.pageX,g=b.pageY;if(this.originalPosition){var h;if(this.containment){if(this.relative_container){var i=this.relative_container.offset();h=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else h=this.containment;b.pageX-this.offset.click.left<h[0]&&(f=h[0]+this.offset.click.left),b.pageY-this.offset.click.top<h[1]&&(g=h[1]+this.offset.click.top),b.pageX-this.offset.click.left>h[2]&&(f=h[2]+this.offset.click.left),b.pageY-this.offset.click.top>h[3]&&(g=h[3]+this.offset.click.top)}if(c.grid){var j=c.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY;g=h?j-this.offset.click.top<h[1]||j-this.offset.click.top>h[3]?j-this.offset.click.top<h[1]?j+c.grid[1]:j-c.grid[1]:j:j;var k=c.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX;f=h?k-this.offset.click.left<h[0]||k-this.offset.click.left>h[2]?k-this.offset.click.left<h[0]?k+c.grid[0]:k-c.grid[0]:k:k}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),b=="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(a){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.extend(a.ui.draggable,{version:"1.8.20"}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",b,f))})},stop:function(b,c){var d=a(this).data("draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,d.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("draggable"),e=this,f=function(b){var c=this.offset.click.top,d=this.offset.click.left,e=this.positionAbs.top,f=this.positionAbs.left,g=b.height,h=b.width,i=b.top,j=b.left;return a.ui.isOver(e+c,f+d,i,j,g,h)};a.each(d.sortables,function(f){this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(b)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c){var d=a("body"),e=a(this).data("draggable").options;d.css("cursor")&&(e._cursor=d.css("cursor")),d.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;d._cursor&&a("body").css("cursor",d._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(b,c){var d=a(this).data("draggable");d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"&&(d.overflowOffset=d.scrollParent.offset())},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=!1;if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!e.axis||e.axis!="x")d.overflowOffset.top+d.scrollParent[0].offsetHeight-b.pageY<e.scrollSensitivity?d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop-e.scrollSpeed);if(!e.axis||e.axis!="y")d.overflowOffset.left+d.scrollParent[0].offsetWidth-b.pageX<e.scrollSensitivity?d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft-e.scrollSpeed)}else{if(!e.axis||e.axis!="x")b.pageY-a(document).scrollTop()<e.scrollSensitivity?f=a(document).scrollTop(a(document).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<e.scrollSensitivity&&(f=a(document).scrollTop(a(document).scrollTop()+e.scrollSpeed));if(!e.axis||e.axis!="y")b.pageX-a(document).scrollLeft()<e.scrollSensitivity?f=a(document).scrollLeft(a(document).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<e.scrollSensitivity&&(f=a(document).scrollLeft(a(document).scrollLeft()+e.scrollSpeed))}f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c){var d=a(this).data("draggable"),e=d.options;d.snapElements=[],a(e.snap.constructor!=String?e.snap.items||":data(draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=e.snapTolerance,g=c.offset.left,h=g+d.helperProportions.width,i=c.offset.top,j=i+d.helperProportions.height;for(var k=d.snapElements.length-1;k>=0;k--){var l=d.snapElements[k].left,m=l+d.snapElements[k].width,n=d.snapElements[k].top,o=n+d.snapElements[k].height;if(!(l-f<g&&g<m+f&&n-f<i&&i<o+f||l-f<g&&g<m+f&&n-f<j&&j<o+f||l-f<h&&h<m+f&&n-f<i&&i<o+f||l-f<h&&h<m+f&&n-f<j&&j<o+f)){d.snapElements[k].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=!1;continue}if(e.snapMode!="inner"){var p=Math.abs(n-j)<=f,q=Math.abs(o-i)<=f,r=Math.abs(l-h)<=f,s=Math.abs(m-g)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n-d.helperProportions.height,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l-d.helperProportions.width}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m}).left-d.margins.left)}var t=p||q||r||s;if(e.snapMode!="outer"){var p=Math.abs(n-i)<=f,q=Math.abs(o-j)<=f,r=Math.abs(l-g)<=f,s=Math.abs(m-h)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o-d.helperProportions.height,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m-d.helperProportions.width}).left-d.margins.left)}!d.snapElements[k].snapping&&(p||q||r||s||t)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=p||q||r||s||t}}}),a.ui.plugin.add("draggable","stack",{start:function(b,c){var d=a(this).data("draggable").options,e=a.makeArray(a(d.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});if(!e.length)return;var f=parseInt(e[0].style.zIndex)||0;a(e).each(function(a){this.style.zIndex=f+a}),this[0].style.zIndex=f+e.length}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.droppable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect"},_create:function(){var b=this.options,c=b.accept;this.isover=0,this.isout=1,this.accept=a.isFunction(c)?c:function(a){return a.is(c)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},a.ui.ddmanager.droppables[b.scope]=a.ui.ddmanager.droppables[b.scope]||[],a.ui.ddmanager.droppables[b.scope].push(this),b.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){var b=a.ui.ddmanager.droppables[this.options.scope];for(var c=0;c<b.length;c++)b[c]==this&&b.splice(c,1);return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"),this},_setOption:function(b,c){b=="accept"&&(this.accept=a.isFunction(c)?c:function(a){return a.is(c)}),a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),c&&this._trigger("activate",b,this.ui(c))},_deactivate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),c&&this._trigger("deactivate",b,this.ui(c))},_over:function(b){var c=a.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return;this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",b,this.ui(c)))},_out:function(b){var c=a.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return;this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",b,this.ui(c)))},_drop:function(b,c){var d=c||a.ui.ddmanager.current;if(!d||(d.currentItem||d.element)[0]==this.element[0])return!1;var e=!1;return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var b=a.data(this,"droppable");if(b.options.greedy&&!b.options.disabled&&b.options.scope==d.options.scope&&b.accept.call(b.element[0],d.currentItem||d.element)&&a.ui.intersect(d,a.extend(b,{offset:b.element.offset()}),b.options.tolerance))return e=!0,!1}),e?!1:this.accept.call(this.element[0],d.currentItem||d.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",b,this.ui(d)),this.element):!1},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}}),a.extend(a.ui.droppable,{version:"1.8.20"}),a.ui.intersect=function(b,c,d){if(!c.offset)return!1;var e=(b.positionAbs||b.position.absolute).left,f=e+b.helperProportions.width,g=(b.positionAbs||b.position.absolute).top,h=g+b.helperProportions.height,i=c.offset.left,j=i+c.proportions.width,k=c.offset.top,l=k+c.proportions.height;switch(d){case"fit":return i<=e&&f<=j&&k<=g&&h<=l;case"intersect":return i<e+b.helperProportions.width/2&&f-b.helperProportions.width/2<j&&k<g+b.helperProportions.height/2&&h-b.helperProportions.height/2<l;case"pointer":var m=(b.positionAbs||b.position.absolute).left+(b.clickOffset||b.offset.click).left,n=(b.positionAbs||b.position.absolute).top+(b.clickOffset||b.offset.click).top,o=a.ui.isOver(n,m,k,i,c.proportions.height,c.proportions.width);return o;case"touch":return(g>=k&&g<=l||h>=k&&h<=l||g<k&&h>l)&&(e>=i&&e<=j||f>=i&&f<=j||e<i&&f>j);default:return!1}},a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(b,c){var d=a.ui.ddmanager.droppables[b.options.scope]||[],e=c?c.type:null,f=(b.currentItem||b.element).find(":data(droppable)").andSelf();g:for(var h=0;h<d.length;h++){if(d[h].options.disabled||b&&!d[h].accept.call(d[h].element[0],b.currentItem||b.element))continue;for(var i=0;i<f.length;i++)if(f[i]==d[h].element[0]){d[h].proportions.height=0;continue g}d[h].visible=d[h].element.css("display")!="none";if(!d[h].visible)continue;e=="mousedown"&&d[h]._activate.call(d[h],c),d[h].offset=d[h].element.offset(),d[h].proportions={width:d[h].element[0].offsetWidth,height:d[h].element[0].offsetHeight}}},drop:function(b,c){var d=!1;return a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(!this.options)return;!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance)&&(d=this._drop.call(this,c)||d),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],b.currentItem||b.element)&&(this.isout=1,this.isover=0,this._deactivate.call(this,c))}),d},dragStart:function(b,c){b.element.parents(":not(body,html)").bind("scroll.droppable",function(){b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)})},drag:function(b,c){b.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(b,c),a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;var d=a.ui.intersect(b,this,this.options.tolerance),e=!d&&this.isover==1?"isout":d&&this.isover==0?"isover":null;if(!e)return;var f;if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");g.length&&(f=a.data(g[0],"droppable"),f.greedyChild=e=="isover"?1:0)}f&&e=="isover"&&(f.isover=0,f.isout=1,f._out.call(f,c)),this[e]=1,this[e=="isout"?"isover":"isout"]=0,this[e=="isover"?"_over":"_out"].call(this,c),f&&e=="isout"&&(f.isout=0,f.isover=1,f._over.call(f,c))})},dragStop:function(b,c){b.element.parents(":not(body,html)").unbind("scroll.droppable"),b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)}}})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.resizable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.resizable",a.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1e3},_create:function(){var b=this,c=this.options;this.element.addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!c.aspectRatio,aspectRatio:c.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:c.helper||c.ghost||c.animate?c.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("resizable",this.element.data("resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=c.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");if(this.handles.constructor==String){this.handles=="all"&&(this.handles="n,e,s,w,se,sw,ne,nw");var d=this.handles.split(",");this.handles={};for(var e=0;e<d.length;e++){var f=a.trim(d[e]),g="ui-resizable-"+f,h=a('<div class="ui-resizable-handle '+g+'"></div>');h.css({zIndex:c.zIndex}),"se"==f&&h.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[f]=".ui-resizable-"+f,this.element.append(h)}}this._renderAxis=function(b){b=b||this.element;for(var c in this.handles){this.handles[c].constructor==String&&(this.handles[c]=a(this.handles[c],this.element).show());if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var d=a(this.handles[c],this.element),e=0;e=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth();var f=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join("");b.css(f,e),this._proportionallyResize()}if(!a(this.handles[c]).length)continue}},this._renderAxis(this.element),this._handles=a(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){if(!b.resizing){if(this.className)var a=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);b.axis=a&&a[1]?a[1]:"se"}}),c.autoHide&&(this._handles.hide(),a(this.element).addClass("ui-resizable-autohide").hover(function(){if(c.disabled)return;a(this).removeClass("ui-resizable-autohide"),b._handles.show()},function(){if(c.disabled)return;b.resizing||(a(this).addClass("ui-resizable-autohide"),b._handles.hide())})),this._mouseInit()},destroy:function(){this._mouseDestroy();var b=function(b){a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){b(this.element);var c=this.element;c.after(this.originalElement.css({position:c.css("position"),width:c.outerWidth(),height:c.outerHeight(),top:c.css("top"),left:c.css("left")})).remove()}return this.originalElement.css("resize",this.originalResizeStyle),b(this.originalElement),this},_mouseCapture:function(b){var c=!1;for(var d in this.handles)a(this.handles[d])[0]==b.target&&(c=!0);return!this.options.disabled&&c},_mouseStart:function(b){var d=this.options,e=this.element.position(),f=this.element;this.resizing=!0,this.documentScroll={top:a(document).scrollTop(),left:a(document).scrollLeft()},(f.is(".ui-draggable")||/absolute/.test(f.css("position")))&&f.css({position:"absolute",top:e.top,left:e.left}),this._renderProxy();var g=c(this.helper.css("left")),h=c(this.helper.css("top"));d.containment&&(g+=a(d.containment).scrollLeft()||0,h+=a(d.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:g,top:h},this.size=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.originalSize=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.originalPosition={left:g,top:h},this.sizeDiff={width:f.outerWidth()-f.width(),height:f.outerHeight()-f.height()},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio=typeof d.aspectRatio=="number"?d.aspectRatio:this.originalSize.width/this.originalSize.height||1;var i=a(".ui-resizable-"+this.axis).css("cursor");return a("body").css("cursor",i=="auto"?this.axis+"-resize":i),f.addClass("ui-resizable-resizing"),this._propagate("start",b),!0},_mouseDrag:function(b){var c=this.helper,d=this.options,e={},f=this,g=this.originalMousePosition,h=this.axis,i=b.pageX-g.left||0,j=b.pageY-g.top||0,k=this._change[h];if(!k)return!1;var l=k.apply(this,[b,i,j]),m=a.browser.msie&&a.browser.version<7,n=this.sizeDiff;this._updateVirtualBoundaries(b.shiftKey);if(this._aspectRatio||b.shiftKey)l=this._updateRatio(l,b);return l=this._respectSize(l,b),this._propagate("resize",b),c.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"}),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),this._updateCache(l),this._trigger("resize",b,this.ui()),!1},_mouseStop:function(b){this.resizing=!1;var c=this.options,d=this;if(this._helper){var e=this._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&a.ui.hasScroll(e[0],"left")?0:d.sizeDiff.height,h=f?0:d.sizeDiff.width,i={width:d.helper.width()-h,height:d.helper.height()-g},j=parseInt(d.element.css("left"),10)+(d.position.left-d.originalPosition.left)||null,k=parseInt(d.element.css("top"),10)+(d.position.top-d.originalPosition.top)||null;c.animate||this.element.css(a.extend(i,{top:k,left:j})),d.helper.height(d.size.height),d.helper.width(d.size.width),this._helper&&!c.animate&&this._proportionallyResize()}return a("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(a){var b=this.options,c,e,f,g,h;h={minWidth:d(b.minWidth)?b.minWidth:0,maxWidth:d(b.maxWidth)?b.maxWidth:Infinity,minHeight:d(b.minHeight)?b.minHeight:0,maxHeight:d(b.maxHeight)?b.maxHeight:Infinity};if(this._aspectRatio||a)c=h.minHeight*this.aspectRatio,f=h.minWidth/this.aspectRatio,e=h.maxHeight*this.aspectRatio,g=h.maxWidth/this.aspectRatio,c>h.minWidth&&(h.minWidth=c),f>h.minHeight&&(h.minHeight=f),e<h.maxWidth&&(h.maxWidth=e),g<h.maxHeight&&(h.maxHeight=g);this._vBoundaries=h},_updateCache:function(a){var b=this.options;this.offset=this.helper.offset(),d(a.left)&&(this.position.left=a.left),d(a.top)&&(this.position.top=a.top),d(a.height)&&(this.size.height=a.height),d(a.width)&&(this.size.width=a.width)},_updateRatio:function(a,b){var c=this.options,e=this.position,f=this.size,g=this.axis;return d(a.height)?a.width=a.height*this.aspectRatio:d(a.width)&&(a.height=a.width/this.aspectRatio),g=="sw"&&(a.left=e.left+(f.width-a.width),a.top=null),g=="nw"&&(a.top=e.top+(f.height-a.height),a.left=e.left+(f.width-a.width)),a},_respectSize:function(a,b){var c=this.helper,e=this._vBoundaries,f=this._aspectRatio||b.shiftKey,g=this.axis,h=d(a.width)&&e.maxWidth&&e.maxWidth<a.width,i=d(a.height)&&e.maxHeight&&e.maxHeight<a.height,j=d(a.width)&&e.minWidth&&e.minWidth>a.width,k=d(a.height)&&e.minHeight&&e.minHeight>a.height;j&&(a.width=e.minWidth),k&&(a.height=e.minHeight),h&&(a.width=e.maxWidth),i&&(a.height=e.maxHeight);var l=this.originalPosition.left+this.originalSize.width,m=this.position.top+this.size.height,n=/sw|nw|w/.test(g),o=/nw|ne|n/.test(g);j&&n&&(a.left=l-e.minWidth),h&&n&&(a.left=l-e.maxWidth),k&&o&&(a.top=m-e.minHeight),i&&o&&(a.top=m-e.maxHeight);var p=!a.width&&!a.height;return p&&!a.left&&a.top?a.top=null:p&&!a.top&&a.left&&(a.left=null),a},_proportionallyResize:function(){var b=this.options;if(!this._proportionallyResizeElements.length)return;var c=this.helper||this.element;for(var d=0;d<this._proportionallyResizeElements.length;d++){var e=this._proportionallyResizeElements[d];if(!this.borderDif){var f=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],g=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];this.borderDif=a.map(f,function(a,b){var c=parseInt(a,10)||0,d=parseInt(g[b],10)||0;return c+d})}if(!a.browser.msie||!a(c).is(":hidden")&&!a(c).parents(":hidden").length)e.css({height:c.height()-this.borderDif[0]-this.borderDif[2]||0,width:c.width()-this.borderDif[1]-this.borderDif[3]||0});else continue}},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset();if(this._helper){this.helper=this.helper||a('<div style="overflow:hidden;"></div>');var d=a.browser.msie&&a.browser.version<7,e=d?1:0,f=d?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+f,height:this.element.outerHeight()+f,position:"absolute",left:this.elementOffset.left-e+"px",top:this.elementOffset.top-e+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(a,b,c){return{width:this.originalSize.width+b}},w:function(a,b,c){var d=this.options,e=this.originalSize,f=this.originalPosition;return{left:f.left+b,width:e.width-b}},n:function(a,b,c){var d=this.options,e=this.originalSize,f=this.originalPosition;return{top:f.top+c,height:e.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),b!="resize"&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),a.extend(a.ui.resizable,{version:"1.8.20"}),a.ui.plugin.add("resizable","alsoResize",{start:function(b,c){var d=a(this).data("resizable"),e=d.options,f=function(b){a(b).each(function(){var b=a(this);b.data("resizable-alsoresize",{width:parseInt(b.width(),10),height:parseInt(b.height(),10),left:parseInt(b.css("left"),10),top:parseInt(b.css("top"),10)})})};typeof e.alsoResize=="object"&&!e.alsoResize.parentNode?e.alsoResize.length?(e.alsoResize=e.alsoResize[0],f(e.alsoResize)):a.each(e.alsoResize,function(a){f(a)}):f(e.alsoResize)},resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0},i=function(b,d){a(b).each(function(){var b=a(this),e=a(this).data("resizable-alsoresize"),f={},g=d&&d.length?d:b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(g,function(a,b){var c=(e[b]||0)+(h[b]||0);c&&c>=0&&(f[b]=c||null)}),b.css(f)})};typeof e.alsoResize=="object"&&!e.alsoResize.nodeType?a.each(e.alsoResize,function(a,b){i(a,b)}):i(e.alsoResize)},stop:function(b,c){a(this).removeData("resizable-alsoresize")}}),a.ui.plugin.add("resizable","animate",{stop:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d._proportionallyResizeElements,g=f.length&&/textarea/i.test(f[0].nodeName),h=g&&a.ui.hasScroll(f[0],"left")?0:d.sizeDiff.height,i=g?0:d.sizeDiff.width,j={width:d.size.width-i,height:d.size.height-h},k=parseInt(d.element.css("left"),10)+(d.position.left-d.originalPosition.left)||null,l=parseInt(d.element.css("top"),10)+(d.position.top-d.originalPosition.top)||null;d.element.animate(a.extend(j,l&&k?{top:l,left:k}:{}),{duration:e.animateDuration,easing:e.animateEasing,step:function(){var c={width:parseInt(d.element.css("width"),10),height:parseInt(d.element.css("height"),10),top:parseInt(d.element.css("top"),10),left:parseInt(d.element.css("left"),10)};f&&f.length&&a(f[0]).css({width:c.width,height:c.height}),d._updateCache(c),d._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(b,d){var e=a(this).data("resizable"),f=e.options,g=e.element,h=f.containment,i=h instanceof a?h.get(0):/parent/.test(h)?g.parent().get(0):h;if(!i)return;e.containerElement=a(i);if(/document/.test(h)||h==document)e.containerOffset={left:0,top:0},e.containerPosition={left:0,top:0},e.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight};else{var j=a(i),k=[];a(["Top","Right","Left","Bottom"]).each(function(a,b){k[a]=c(j.css("padding"+b))}),e.containerOffset=j.offset(),e.containerPosition=j.position(),e.containerSize={height:j.innerHeight()-k[3],width:j.innerWidth()-k[1]};var l=e.containerOffset,m=e.containerSize.height,n=e.containerSize.width,o=a.ui.hasScroll(i,"left")?i.scrollWidth:n,p=a.ui.hasScroll(i)?i.scrollHeight:m;e.parentData={element:i,left:l.left,top:l.top,width:o,height:p}}},resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.containerSize,g=d.containerOffset,h=d.size,i=d.position,j=d._aspectRatio||b.shiftKey,k={top:0,left:0},l=d.containerElement;l[0]!=document&&/static/.test(l.css("position"))&&(k=g),i.left<(d._helper?g.left:0)&&(d.size.width=d.size.width+(d._helper?d.position.left-g.left:d.position.left-k.left),j&&(d.size.height=d.size.width/d.aspectRatio),d.position.left=e.helper?g.left:0),i.top<(d._helper?g.top:0)&&(d.size.height=d.size.height+(d._helper?d.position.top-g.top:d.position.top),j&&(d.size.width=d.size.height*d.aspectRatio),d.position.top=d._helper?g.top:0),d.offset.left=d.parentData.left+d.position.left,d.offset.top=d.parentData.top+d.position.top;var m=Math.abs((d._helper?d.offset.left-k.left:d.offset.left-k.left)+d.sizeDiff.width),n=Math.abs((d._helper?d.offset.top-k.top:d.offset.top-g.top)+d.sizeDiff.height),o=d.containerElement.get(0)==d.element.parent().get(0),p=/relative|absolute/.test(d.containerElement.css("position"));o&&p&&(m-=d.parentData.left),m+d.size.width>=d.parentData.width&&(d.size.width=d.parentData.width-m,j&&(d.size.height=d.size.width/d.aspectRatio)),n+d.size.height>=d.parentData.height&&(d.size.height=d.parentData.height-n,j&&(d.size.width=d.size.height*d.aspectRatio))},stop:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.position,g=d.containerOffset,h=d.containerPosition,i=d.containerElement,j=a(d.helper),k=j.offset(),l=j.outerWidth()-d.sizeDiff.width,m=j.outerHeight()-d.sizeDiff.height;d._helper&&!e.animate&&/relative/.test(i.css("position"))&&a(this).css({left:k.left-h.left-g.left,width:l,height:m}),d._helper&&!e.animate&&/static/.test(i.css("position"))&&a(this).css({left:k.left-h.left-g.left,width:l,height:m})}}),a.ui.plugin.add("resizable","ghost",{start:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.size;d.ghost=d.originalElement.clone(),d.ghost.css({opacity:.25,display:"block",position:"relative",height:f.height,width:f.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof e.ghost=="string"?e.ghost:""),d.ghost.appendTo(d.helper)},resize:function(b,c){var d=a(this).data("resizable"),e=d.options;d.ghost&&d.ghost.css({position:"relative",height:d.size.height,width:d.size.width})},stop:function(b,c){var d=a(this).data("resizable"),e=d.options;d.ghost&&d.helper&&d.helper.get(0).removeChild(d.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.size,g=d.originalSize,h=d.originalPosition,i=d.axis,j=e._aspectRatio||b.shiftKey;e.grid=typeof e.grid=="number"?[e.grid,e.grid]:e.grid;var k=Math.round((f.width-g.width)/(e.grid[0]||1))*(e.grid[0]||1),l=Math.round((f.height-g.height)/(e.grid[1]||1))*(e.grid[1]||1);/^(se|s|e)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l):/^(ne)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l,d.position.top=h.top-l):/^(sw)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l,d.position.left=h.left-k):(d.size.width=g.width+k,d.size.height=g.height+l,d.position.top=h.top-l,d.position.left=h.left-k)}});var c=function(a){return parseInt(a,10)||0},d=function(a){return!isNaN(parseInt(a,10))}})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.selectable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.selectable",a.ui.mouse,{options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch"},_create:function(){var b=this;this.element.addClass("ui-selectable"),this.dragged=!1;var c;this.refresh=function(){c=a(b.options.filter,b.element[0]),c.addClass("ui-selectee"),c.each(function(){var b=a(this),c=b.offset();a.data(this,"selectable-item",{element:this,$element:b,left:c.left,top:c.top,right:c.left+b.outerWidth(),bottom:c.top+b.outerHeight(),startselected:!1,selected:b.hasClass("ui-selected"),selecting:b.hasClass("ui-selecting"),unselecting:b.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=c.addClass("ui-selectee"),this._mouseInit(),this.helper=a("<div class='ui-selectable-helper'></div>")},destroy:function(){return this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"),this._mouseDestroy(),this},_mouseStart:function(b){var c=this;this.opos=[b.pageX,b.pageY];if(this.options.disabled)return;var d=this.options;this.selectees=a(d.filter,this.element[0]),this._trigger("start",b),a(d.appendTo).append(this.helper),this.helper.css({left:b.clientX,top:b.clientY,width:0,height:0}),d.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var d=a.data(this,"selectable-item");d.startselected=!0,!b.metaKey&&!b.ctrlKey&&(d.$element.removeClass("ui-selected"),d.selected=!1,d.$element.addClass("ui-unselecting"),d.unselecting=!0,c._trigger("unselecting",b,{unselecting:d.element}))}),a(b.target).parents().andSelf().each(function(){var d=a.data(this,"selectable-item");if(d){var e=!b.metaKey&&!b.ctrlKey||!d.$element.hasClass("ui-selected");return d.$element.removeClass(e?"ui-unselecting":"ui-selected").addClass(e?"ui-selecting":"ui-unselecting"),d.unselecting=!e,d.selecting=e,d.selected=e,e?c._trigger("selecting",b,{selecting:d.element}):c._trigger("unselecting",b,{unselecting:d.element}),!1}})},_mouseDrag:function(b){var c=this;this.dragged=!0;if(this.options.disabled)return;var d=this.options,e=this.opos[0],f=this.opos[1],g=b.pageX,h=b.pageY;if(e>g){var i=g;g=e,e=i}if(f>h){var i=h;h=f,f=i}return this.helper.css({left:e,top:f,width:g-e,height:h-f}),this.selectees.each(function(){var i=a.data(this,"selectable-item");if(!i||i.element==c.element[0])return;var j=!1;d.tolerance=="touch"?j=!(i.left>g||i.right<e||i.top>h||i.bottom<f):d.tolerance=="fit"&&(j=i.left>e&&i.right<g&&i.top>f&&i.bottom<h),j?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,c._trigger("selecting",b,{selecting:i.element}))):(i.selecting&&((b.metaKey||b.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),c._trigger("unselecting",b,{unselecting:i.element}))),i.selected&&!b.metaKey&&!b.ctrlKey&&!i.startselected&&(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,c._trigger("unselecting",b,{unselecting:i.element})))}),!1},_mouseStop:function(b){var c=this;this.dragged=!1;var d=this.options;return a(".ui-unselecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-unselecting"),d.unselecting=!1,d.startselected=!1,c._trigger("unselected",b,{unselected:d.element})}),a(".ui-selecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-selecting").addClass("ui-selected"),d.selecting=!1,d.selected=!0,d.startselected=!0,c._trigger("selected",b,{selected:d.element})}),this._trigger("stop",b),this.helper.remove(),!1}}),a.extend(a.ui.selectable,{version:"1.8.20"})})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.sortable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.sortable",a.ui.mouse,{widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create:function(){var a=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?a.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},destroy:function(){a.Widget.prototype.destroy.call(this),this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var b=this.items.length-1;b>=0;b--)this.items[b].item.removeData(this.widgetName+"-item");return this},_setOption:function(b,c){b==="disabled"?(this.options[b]=c,this.widget()[c?"addClass":"removeClass"]("ui-sortable-disabled")):a.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(b,c){var d=this;if(this.reverting)return!1;if(this.options.disabled||this.options.type=="static")return!1;this._refreshItems(b);var e=null,f=this,g=a(b.target).parents().each(function(){if(a.data(this,d.widgetName+"-item")==f)return e=a(this),!1});a.data(b.target,d.widgetName+"-item")==f&&(e=a(b.target));if(!e)return!1;if(this.options.handle&&!c){var h=!1;a(this.options.handle,e).find("*").andSelf().each(function(){this==b.target&&(h=!0)});if(!h)return!1}return this.currentItem=e,this._removeCurrentsFromItems(),!0},_mouseStart:function(b,c,d){var e=this.options,f=this;this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(b),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!=this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),e.containment&&this._setContainment(),e.cursor&&(a("body").css("cursor")&&(this._storedCursor=a("body").css("cursor")),a("body").css("cursor",e.cursor)),e.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",e.opacity)),e.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",e.zIndex)),this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",b,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions();if(!d)for(var g=this.containers.length-1;g>=0;g--)this.containers[g]._trigger("activate",b,f._uiHash(this));return a.ui.ddmanager&&(a.ui.ddmanager.current=this),a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(b),!0},_mouseDrag:function(b){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs);if(this.options.scroll){var c=this.options,d=!1;this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-b.pageY<c.scrollSensitivity?this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop+c.scrollSpeed:b.pageY-this.overflowOffset.top<c.scrollSensitivity&&(this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop-c.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-b.pageX<c.scrollSensitivity?this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft+c.scrollSpeed:b.pageX-this.overflowOffset.left<c.scrollSensitivity&&(this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft-c.scrollSpeed)):(b.pageY-a(document).scrollTop()<c.scrollSensitivity?d=a(document).scrollTop(a(document).scrollTop()-c.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<c.scrollSensitivity&&(d=a(document).scrollTop(a(document).scrollTop()+c.scrollSpeed)),b.pageX-a(document).scrollLeft()<c.scrollSensitivity?d=a(document).scrollLeft(a(document).scrollLeft()-c.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<c.scrollSensitivity&&(d=a(document).scrollLeft(a(document).scrollLeft()+c.scrollSpeed))),d!==!1&&a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(var e=this.items.length-1;e>=0;e--){var f=this.items[e],g=f.item[0],h=this._intersectsWithPointer(f);if(!h)continue;if(g!=this.currentItem[0]&&this.placeholder[h==1?"next":"prev"]()[0]!=g&&!a.ui.contains(this.placeholder[0],g)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],g):!0)){this.direction=h==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(f))this._rearrange(b,f);else break;this._trigger("change",b,this._uiHash());break}}return this._contactContainers(b),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),this._trigger("sort",b,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(b,c){if(!b)return;a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,b);if(this.options.revert){var d=this,e=d.placeholder.offset();d.reverting=!0,a(this.helper).animate({left:e.left-this.offset.parent.left-d.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:e.top-this.offset.parent.top-d.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){d._clear(b)})}else this._clear(b,c);return!1},cancel:function(){var b=this;if(this.dragging){this._mouseUp({target:null}),this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var c=this.containers.length-1;c>=0;c--)this.containers[c]._trigger("deactivate",null,b._uiHash(this)),this.containers[c].containerCache.over&&(this.containers[c]._trigger("out",null,b._uiHash(this)),this.containers[c].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),a.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},a(c).each(function(){var c=(a(b.item||this).attr(b.attribute||"id")||"").match(b.expression||/(.+)[-=_](.+)/);c&&d.push((b.key||c[1]+"[]")+"="+(b.key&&b.expression?c[1]:c[2]))}),!d.length&&b.key&&d.push(b.key+"="),d.join("&")},toArray:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},c.each(function(){d.push(a(b.item||this).attr(b.attribute||"id")||"")}),d},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,d=this.positionAbs.top,e=d+this.helperProportions.height,f=a.left,g=f+a.width,h=a.top,i=h+a.height,j=this.offset.click.top,k=this.offset.click.left,l=d+j>h&&d+j<i&&b+k>f&&b+k<g;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?l:f<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<g&&h<d+this.helperProportions.height/2&&e-this.helperProportions.height/2<i},_intersectsWithPointer:function(b){var c=this.options.axis==="x"||a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,b.top,b.height),d=this.options.axis==="y"||a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,b.left,b.width),e=c&&d,f=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();return e?this.floating?g&&g=="right"||f=="down"?2:1:f&&(f=="down"?2:1):!1},_intersectsWithSides:function(b){var c=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,b.top+b.height/2,b.height),d=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,b.left+b.width/2,b.width),e=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();return this.floating&&f?f=="right"&&d||f=="left"&&!d:e&&(e=="down"&&c||e=="up"&&!c)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return a!=0&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return a!=0&&(a>0?"right":"left")},refresh:function(a){return this._refreshItems(a),this.refreshPositions(),this},_connectWith:function(){var a=this.options;return a.connectWith.constructor==String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(b){var c=this,d=[],e=[],f=this._connectWith();if(f&&b)for(var g=f.length-1;g>=0;g--){var h=a(f[g]);for(var i=h.length-1;i>=0;i--){var j=a.data(h[i],this.widgetName);j&&j!=this&&!j.options.disabled&&e.push([a.isFunction(j.options.items)?j.options.items.call(j.element):a(j.options.items,j.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),j])}}e.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var g=e.length-1;g>=0;g--)e[g][0].each(function(){d.push(this)});return a(d)},_removeCurrentsFromItems:function(){var a=this.currentItem.find(":data("+this.widgetName+"-item)");for(var b=0;b<this.items.length;b++)for(var c=0;c<a.length;c++)a[c]==this.items[b].item[0]&&this.items.splice(b,1)},_refreshItems:function(b){this.items=[],this.containers=[this];var c=this.items,d=this,e=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]],f=this._connectWith();if(f&&this.ready)for(var g=f.length-1;g>=0;g--){var h=a(f[g]);for(var i=h.length-1;i>=0;i--){var j=a.data(h[i],this.widgetName);j&&j!=this&&!j.options.disabled&&(e.push([a.isFunction(j.options.items)?j.options.items.call(j.element[0],b,{item:this.currentItem}):a(j.options.items,j.element),j]),this.containers.push(j))}}for(var g=e.length-1;g>=0;g--){var k=e[g][1],l=e[g][0];for(var i=0,m=l.length;i<m;i++){var n=a(l[i]);n.data(this.widgetName+"-item",k),c.push({item:n,instance:k,width:0,height:0,left:0,top:0})}}},refreshPositions:function(b){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());for(var c=this.items.length-1;c>=0;c--){var d=this.items[c];if(d.instance!=this.currentContainer&&this.currentContainer&&d.item[0]!=this.currentItem[0])continue;var e=this.options.toleranceElement?a(this.options.toleranceElement,d.item):d.item;b||(d.width=e.outerWidth(),d.height=e.outerHeight());var f=e.offset();d.left=f.left,d.top=f.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(var c=this.containers.length-1;c>=0;c--){var f=this.containers[c].element.offset();this.containers[c].containerCache.left=f.left,this.containers[c].containerCache.top=f.top,this.containers[c].containerCache.width=this.containers[c].element.outerWidth(),this.containers[c].containerCache.height=this.containers[c].element.outerHeight()}return this},_createPlaceholder:function(b){var c=b||this,d=c.options;if(!d.placeholder||d.placeholder.constructor==String){var e=d.placeholder;d.placeholder={element:function(){var b=a(document.createElement(c.currentItem[0].nodeName)).addClass(e||c.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return e||(b.style.visibility="hidden"),b},update:function(a,b){if(e&&!d.forcePlaceholderSize)return;b.height()||b.height(c.currentItem.innerHeight()-parseInt(c.currentItem.css("paddingTop")||0,10)-parseInt(c.currentItem.css("paddingBottom")||0,10)),b.width()||b.width(c.currentItem.innerWidth()-parseInt(c.currentItem.css("paddingLeft")||0,10)-parseInt(c.currentItem.css("paddingRight")||0,10))}}}c.placeholder=a(d.placeholder.element.call(c.element,c.currentItem)),c.currentItem.after(c.placeholder),d.placeholder.update(c,c.placeholder)},_contactContainers:function(b){var c=null,d=null;for(var e=this.containers.length-1;e>=0;e--){if(a.ui.contains(this.currentItem[0],this.containers[e].element[0]))continue;if(this._intersectsWith(this.containers[e].containerCache)){if(c&&a.ui.contains(this.containers[e].element[0],c.element[0]))continue;c=this.containers[e],d=e}else this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",b,this._uiHash(this)),this.containers[e].containerCache.over=0)}if(!c)return;if(this.containers.length===1)this.containers[d]._trigger("over",b,this._uiHash(this)),this.containers[d].containerCache.over=1;else if(this.currentContainer!=this.containers[d]){var f=1e4,g=null,h=this.positionAbs[this.containers[d].floating?"left":"top"];for(var i=this.items.length-1;i>=0;i--){if(!a.ui.contains(this.containers[d].element[0],this.items[i].item[0]))continue;var j=this.items[i][this.containers[d].floating?"left":"top"];Math.abs(j-h)<f&&(f=Math.abs(j-h),g=this.items[i])}if(!g&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[d],g?this._rearrange(b,g,null,!0):this._rearrange(b,null,this.containers[d].element,!0),this._trigger("change",b,this._uiHash()),this.containers[d]._trigger("change",b,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[d]._trigger("over",b,this._uiHash(this)),this.containers[d].containerCache.over=1}},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b,this.currentItem])):c.helper=="clone"?this.currentItem.clone():this.currentItem;return d.parents("body").length||a(c.appendTo!="parent"?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]),d[0]==this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(d[0].style.width==""||c.forceHelperSize)&&d.width(this.currentItem.width()),(d[0].style.height==""||c.forceHelperSize)&&d.height(this.currentItem.height()),d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)){var c=a(b.containment)[0],d=a(b.containment).offset(),e=a(c).css("overflow")!="hidden";this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(e?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(e?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName);this.cssPosition=="relative"&&(this.scrollParent[0]==document||this.scrollParent[0]==this.offsetParent[0])&&(this.offset.relative=this._getRelativeOffset());var f=b.pageX,g=b.pageY;if(this.originalPosition){this.containment&&(b.pageX-this.offset.click.left<this.containment[0]&&(f=this.containment[0]+this.offset.click.left),b.pageY-this.offset.click.top<this.containment[1]&&(g=this.containment[1]+this.offset.click.top),b.pageX-this.offset.click.left>this.containment[2]&&(f=this.containment[2]+this.offset.click.left),b.pageY-this.offset.click.top>this.containment[3]&&(g=this.containment[3]+this.offset.click.top));if(c.grid){var h=this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1];g=this.containment?h-this.offset.click.top<this.containment[1]||h-this.offset.click.top>this.containment[3]?h-this.offset.click.top<this.containment[1]?h+c.grid[1]:h-c.grid[1]:h:h;var i=this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0];f=this.containment?i-this.offset.click.left<this.containment[0]||i-this.offset.click.left>this.containment[2]?i-this.offset.click.left<this.containment[0]?i+c.grid[0]:i-c.grid[0]:i:i}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_rearrange:function(a,b,c,d){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?b.item[0]:b.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var e=this,f=this.counter;window.setTimeout(function(){f==e.counter&&e.refreshPositions(!d)},0)},_clear:function(b,c){this.reverting=!1;var d=[],e=this;!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var f in this._storedCSS)if(this._storedCSS[f]=="auto"||this._storedCSS[f]=="static")this._storedCSS[f]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!c&&d.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!c&&d.push(function(a){this._trigger("update",a,this._uiHash())});if(!a.ui.contains(this.element[0],this.currentItem[0])){c||d.push(function(a){this._trigger("remove",a,this._uiHash())});for(var f=this.containers.length-1;f>=0;f--)a.ui.contains(this.containers[f].element[0],this.currentItem[0])&&!c&&(d.push(function(a){return function(b){a._trigger("receive",b,this._uiHash(this))}}.call(this,this.containers[f])),d.push(function(a){return function(b){a._trigger("update",b,this._uiHash(this))}}.call(this,this.containers[f])))}for(var f=this.containers.length-1;f>=0;f--)c||d.push(function(a){return function(b){a._trigger("deactivate",b,this._uiHash(this))}}.call(this,this.containers[f])),this.containers[f].containerCache.over&&(d.push(function(a){return function(b){a._trigger("out",b,this._uiHash(this))}}.call(this,this.containers[f])),this.containers[f].containerCache.over=0);this._storedCursor&&a("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex),this.dragging=!1;if(this.cancelHelperRemoval){if(!c){this._trigger("beforeStop",b,this._uiHash());for(var f=0;f<d.length;f++)d[f].call(this,b);this._trigger("stop",b,this._uiHash())}return!1}c||this._trigger("beforeStop",b,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!=this.currentItem[0]&&this.helper.remove(),this.helper=null;if(!c){for(var f=0;f<d.length;f++)d[f].call(this,b);this._trigger("stop",b,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(b){var c=b||this;return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:b?b.element:null}}}),a.extend(a.ui.sortable,{version:"1.8.20"})})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.accordion.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:!0,clearStyle:!1,collapsible:!1,event:"click",fillSpace:!1,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:!1,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var b=this,c=b.options;b.running=0,b.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"),b.headers=b.element.find(c.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){if(c.disabled)return;a(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){if(c.disabled)return;a(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){if(c.disabled)return;a(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){if(c.disabled)return;a(this).removeClass("ui-state-focus")}),b.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");if(c.navigation){var d=b.element.find("a").filter(c.navigationFilter).eq(0);if(d.length){var e=d.closest(".ui-accordion-header");e.length?b.active=e:b.active=d.closest(".ui-accordion-content").prev()}}b.active=b._findActive(b.active||c.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"),b.active.next().addClass("ui-accordion-content-active"),b._createIcons(),b.resize(),b.element.attr("role","tablist"),b.headers.attr("role","tab").bind("keydown.accordion",function(a){return b._keydown(a)}).next().attr("role","tabpanel"),b.headers.not(b.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide(),b.active.length?b.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):b.headers.eq(0).attr("tabIndex",0),a.browser.safari||b.headers.find("a").attr("tabIndex",-1),c.event&&b.headers.bind(c.event.split(" ").join(".accordion ")+".accordion",function(a){b._clickHandler.call(b,a,this),a.preventDefault()})},_createIcons:function(){var b=this.options;b.icons&&(a("<span></span>").addClass("ui-icon "+b.icons.header).prependTo(this.headers),this.active.children(".ui-icon").toggleClass(b.icons.header).toggleClass(b.icons.headerSelected),this.element.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.children(".ui-icon").remove(),this.element.removeClass("ui-accordion-icons")},destroy:function(){var b=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"),this.headers.find("a").removeAttr("tabIndex"),this._destroyIcons();var c=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");return(b.autoHeight||b.fillHeight)&&c.css("height",""),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments),b=="active"&&this.activate(c),b=="icons"&&(this._destroyIcons(),c&&this._createIcons()),b=="disabled"&&this.headers.add(this.headers.next())[c?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(b){if(this.options.disabled||b.altKey||b.ctrlKey)return;var c=a.ui.keyCode,d=this.headers.length,e=this.headers.index(b.target),f=!1;switch(b.keyCode){case c.RIGHT:case c.DOWN:f=this.headers[(e+1)%d];break;case c.LEFT:case c.UP:f=this.headers[(e-1+d)%d];break;case c.SPACE:case c.ENTER:this._clickHandler({target:b.target},b.target),b.preventDefault()}return f?(a(b.target).attr("tabIndex",-1),a(f).attr("tabIndex",0),f.focus(),!1):!0},resize:function(){var b=this.options,c;if(b.fillSpace){if(a.browser.msie){var d=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}c=this.element.parent().height(),a.browser.msie&&this.element.parent().css("overflow",d),this.headers.each(function(){c-=a(this).outerHeight(!0)}),this.headers.next().each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")}else b.autoHeight&&(c=0,this.headers.next().each(function(){c=Math.max(c,a(this).height("").height())}).height(c));return this},activate:function(a){this.options.active=a;var b=this._findActive(a)[0];return this._clickHandler({target:b},b),this},_findActive:function(b){return b?typeof b=="number"?this.headers.filter(":eq("+b+")"):this.headers.not(this.headers.not(b)):b===!1?a([]):this.headers.filter(":eq(0)")},_clickHandler:function(b,c){var d=this.options;if(d.disabled)return;if(!b.target){if(!d.collapsible)return;this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header),this.active.next().addClass("ui-accordion-content-active");var e=this.active.next(),f={options:d,newHeader:a([]),oldHeader:d.active,newContent:a([]),oldContent:e},g=this.active=a([]);this._toggle(g,e,f);return}var h=a(b.currentTarget||c),i=h[0]===this.active[0];d.active=d.collapsible&&i?!1:this.headers.index(h);if(this.running||!d.collapsible&&i)return;var j=this.active,g=h.next(),e=this.active.next(),f={options:d,newHeader:i&&d.collapsible?a([]):h,oldHeader:this.active,newContent:i&&d.collapsible?a([]):g,oldContent:e},k=this.headers.index(this.active[0])>this.headers.index(h[0]);this.active=i?a([]):h,this._toggle(g,e,f,i,k),j.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header),i||(h.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected),h.next().addClass("ui-accordion-content-active"));return},_toggle:function(b,c,d,e,f){var g=this,h=g.options;g.toShow=b,g.toHide=c,g.data=d;var i=function(){if(!g)return;return g._completed.apply(g,arguments)};g._trigger("changestart",null,g.data),g.running=c.size()===0?b.size():c.size();if(h.animated){var j={};h.collapsible&&e?j={toShow:a([]),toHide:c,complete:i,down:f,autoHeight:h.autoHeight||h.fillSpace}:j={toShow:b,toHide:c,complete:i,down:f,autoHeight:h.autoHeight||h.fillSpace},h.proxied||(h.proxied=h.animated),h.proxiedDuration||(h.proxiedDuration=h.duration),h.animated=a.isFunction(h.proxied)?h.proxied(j):h.proxied,h.duration=a.isFunction(h.proxiedDuration)?h.proxiedDuration(j):h.proxiedDuration;var k=a.ui.accordion.animations,l=h.duration,m=h.animated;m&&!k[m]&&!a.easing[m]&&(m="slide"),k[m]||(k[m]=function(a){this.slide(a,{easing:m,duration:l||700})}),k[m](j)}else h.collapsible&&e?b.toggle():(c.hide(),b.show()),i(!0);c.prev().attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).blur(),b.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(a){this.running=a?0:--this.running;if(this.running)return;this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""}),this.toHide.removeClass("ui-accordion-content-active"),this.toHide.length&&(this.toHide.parent()[0].className=this.toHide.parent()[0].className),this._trigger("change",null,this.data)}}),a.extend(a.ui.accordion,{version:"1.8.20",animations:{slide:function(b,c){b=a.extend({easing:"swing",duration:300},b,c);if(!b.toHide.size()){b.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},b);return}if(!b.toShow.size()){b.toHide.animate({height:"hide",paddingTop:"hide",paddingBottom:"hide"},b);return}var d=b.toShow.css("overflow"),e=0,f={},g={},h=["height","paddingTop","paddingBottom"],i,j=b.toShow;i=j[0].style.width,j.width(j.parent().width()-parseFloat(j.css("paddingLeft"))-parseFloat(j.css("paddingRight"))-(parseFloat(j.css("borderLeftWidth"))||0)-(parseFloat(j.css("borderRightWidth"))||0)),a.each(h,function(c,d){g[d]="hide";var e=(""+a.css(b.toShow[0],d)).match(/^([\d+-.]+)(.*)$/);f[d]={value:e[1],unit:e[2]||"px"}}),b.toShow.css({height:0,overflow:"hidden"}).show(),b.toHide.filter(":hidden").each(b.complete).end().filter(":visible").animate(g,{step:function(a,c){c.prop=="height"&&(e=c.end-c.start===0?0:(c.now-c.start)/(c.end-c.start)),b.toShow[0].style[c.prop]=e*f[c.prop].value+f[c.prop].unit},duration:b.duration,easing:b.easing,complete:function(){b.autoHeight||b.toShow.css("height",""),b.toShow.css({width:i,overflow:d}),b.complete()}})},bounceslide:function(a){this.slide(a,{easing:a.down?"easeOutBounce":"swing",duration:a.down?1e3:200})}}})})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.autocomplete.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=0;a.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var b=this,c=this.element[0].ownerDocument,d;this.isMultiLine=this.element.is("textarea"),this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){if(b.options.disabled||b.element.propAttr("readOnly"))return;d=!1;var e=a.ui.keyCode;switch(c.keyCode){case e.PAGE_UP:b._move("previousPage",c);break;case e.PAGE_DOWN:b._move("nextPage",c);break;case e.UP:b._keyEvent("previous",c);break;case e.DOWN:b._keyEvent("next",c);break;case e.ENTER:case e.NUMPAD_ENTER:b.menu.active&&(d=!0,c.preventDefault());case e.TAB:if(!b.menu.active)return;b.menu.select(c);break;case e.ESCAPE:b.element.val(b.term),b.close(c);break;default:clearTimeout(b.searching),b.searching=setTimeout(function(){b.term!=b.element.val()&&(b.selectedItem=null,b.search(null,c))},b.options.delay)}}).bind("keypress.autocomplete",function(a){d&&(d=!1,a.preventDefault())}).bind("focus.autocomplete",function(){if(b.options.disabled)return;b.selectedItem=null,b.previous=b.element.val()}).bind("blur.autocomplete",function(a){if(b.options.disabled)return;clearTimeout(b.searching),b.closing=setTimeout(function(){b.close(a),b._change(a)},150)}),this._initSource(),this.menu=a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo||"body",c)[0]).mousedown(function(c){var d=b.menu.element[0];a(c.target).closest(".ui-menu-item").length||setTimeout(function(){a(document).one("mousedown",function(c){c.target!==b.element[0]&&c.target!==d&&!a.ui.contains(d,c.target)&&b.close()})},1),setTimeout(function(){clearTimeout(b.closing)},13)}).menu({focus:function(a,c){var d=c.item.data("item.autocomplete");!1!==b._trigger("focus",a,{item:d})&&/^key/.test(a.originalEvent.type)&&b.element.val(d.value)},selected:function(a,d){var e=d.item.data("item.autocomplete"),f=b.previous;b.element[0]!==c.activeElement&&(b.element.focus(),b.previous=f,setTimeout(function(){b.previous=f,b.selectedItem=e},1)),!1!==b._trigger("select",a,{item:e})&&b.element.val(e.value),b.term=b.element.val(),b.close(a),b.selectedItem=e},blur:function(a,c){b.menu.element.is(":visible")&&b.element.val()!==b.term&&b.element.val(b.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu"),a.fn.bgiframe&&this.menu.element.bgiframe(),b.beforeunloadHandler=function(){b.element.removeAttr("autocomplete")},a(window).bind("beforeunload",b.beforeunloadHandler)},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"),this.menu.element.remove(),a(window).unbind("beforeunload",this.beforeunloadHandler),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments),b==="source"&&this._initSource(),b==="appendTo"&&this.menu.element.appendTo(a(c||"body",this.element[0].ownerDocument)[0]),b==="disabled"&&c&&this.xhr&&this.xhr.abort()},_initSource:function(){var b=this,c,d;a.isArray(this.options.source)?(c=this.options.source,this.source=function(b,d){d(a.ui.autocomplete.filter(c,b.term))}):typeof this.options.source=="string"?(d=this.options.source,this.source=function(c,e){b.xhr&&b.xhr.abort(),b.xhr=a.ajax({url:d,data:c,dataType:"json",success:function(a,b){e(a)},error:function(){e([])}})}):this.source=this.options.source},search:function(a,b){a=a!=null?a:this.element.val(),this.term=this.element.val();if(a.length<this.options.minLength)return this.close(b);clearTimeout(this.closing);if(this._trigger("search",b)===!1)return;return this._search(a)},_search:function(a){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.source({term:a},this._response())},_response:function(){var a=this,b=++c;return function(d){b===c&&a.__response(d),a.pending--,a.pending||a.element.removeClass("ui-autocomplete-loading")}},__response:function(a){!this.options.disabled&&a&&a.length?(a=this._normalize(a),this._suggest(a),this._trigger("open")):this.close()},close:function(a){clearTimeout(this.closing),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.deactivate(),this._trigger("close",a))},_change:function(a){this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(b){return b.length&&b[0].label&&b[0].value?b:a.map(b,function(b){return typeof b=="string"?{label:b,value:b}:a.extend({label:b.label||b.value,value:b.value||b.label},b)})},_suggest:function(b){var c=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(c,b),this.menu.deactivate(),this.menu.refresh(),c.show(),this._resizeMenu(),c.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(new a.Event("mouseover"))},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(b,c){var d=this;a.each(c,function(a,c){d._renderItem(b,c)})},_renderItem:function(b,c){return a("<li></li>").data("item.autocomplete",c).append(a("<a></a>").text(c.label)).appendTo(b)},_move:function(a,b){if(!this.menu.element.is(":visible")){this.search(null,b);return}if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){this.element.val(this.term),this.menu.deactivate();return}this.menu[a](b)},widget:function(){return this.menu.element},_keyEvent:function(a,b){if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(a,b),b.preventDefault()}}),a.extend(a.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(b,c){var d=new RegExp(a.ui.autocomplete.escapeRegex(c),"i");return a.grep(b,function(a){return d.test(a.label||a.value||a)})}})})(jQuery),function(a){a.widget("ui.menu",{_create:function(){var b=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(c){if(!a(c.target).closest(".ui-menu-item a").length)return;c.preventDefault(),b.select(c)}),this.refresh()},refresh:function(){var b=this,c=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");c.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(c){b.activate(c,a(this).parent())}).mouseleave(function(){b.deactivate()})},activate:function(a,b){this.deactivate();if(this.hasScroll()){var c=b.offset().top-this.element.offset().top,d=this.element.scrollTop(),e=this.element.height();c<0?this.element.scrollTop(d+c):c>=e&&this.element.scrollTop(d+c-e+b.height())}this.active=b.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end(),this._trigger("focus",a,{item:b})},deactivate:function(){if(!this.active)return;this.active.children("a").removeClass("ui-state-hover").removeAttr("id"),this._trigger("blur"),this.active=null},next:function(a){this.move("next",".ui-menu-item:first",a)},previous:function(a){this.move("prev",".ui-menu-item:last",a)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(a,b,c){if(!this.active){this.activate(c,this.element.children(b));return}var d=this.active[a+"All"](".ui-menu-item").eq(0);d.length?this.activate(c,d):this.activate(c,this.element.children(b))},nextPage:function(b){if(this.hasScroll()){if(!this.active||this.last()){this.activate(b,this.element.children(".ui-menu-item:first"));return}var c=this.active.offset().top,d=this.element.height(),e=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-c-d+a(this).height();return b<10&&b>-10});e.length||(e=this.element.children(".ui-menu-item:last")),this.activate(b,e)}else this.activate(b,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))},previousPage:function(b){if(this.hasScroll()){if(!this.active||this.first()){this.activate(b,this.element.children(".ui-menu-item:last"));return}var c=this.active.offset().top,d=this.element.height(),e=this.element.children(".ui-menu-item").filter(function(){var b=a(this).offset().top-c+d-a(this).height();return b<10&&b>-10});e.length||(e=this.element.children(".ui-menu-item:first")),this.activate(b,e)}else this.activate(b,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element[a.fn.prop?"prop":"attr"]("scrollHeight")},select:function(a){this._trigger("selected",a,{item:this.active})}})}(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.button.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c,d,e,f,g="ui-button ui-widget ui-state-default ui-corner-all",h="ui-state-hover ui-state-active ",i="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",j=function(){var b=a(this).find(":ui-button");setTimeout(function(){b.button("refresh")},1)},k=function(b){var c=b.name,d=b.form,e=a([]);return c&&(d?e=a(d).find("[name='"+c+"']"):e=a("[name='"+c+"']",b.ownerDocument).filter(function(){return!this.form})),e};a.widget("ui.button",{options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",j),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.propAttr("disabled"):this.element.propAttr("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var b=this,h=this.options,i=this.type==="checkbox"||this.type==="radio",l="ui-state-hover"+(i?"":" ui-state-active"),m="ui-state-focus";h.label===null&&(h.label=this.buttonElement.html()),this.buttonElement.addClass(g).attr("role","button").bind("mouseenter.button",function(){if(h.disabled)return;a(this).addClass("ui-state-hover"),this===c&&a(this).addClass("ui-state-active")}).bind("mouseleave.button",function(){if(h.disabled)return;a(this).removeClass(l)}).bind("click.button",function(a){h.disabled&&(a.preventDefault(),a.stopImmediatePropagation())}),this.element.bind("focus.button",function(){b.buttonElement.addClass(m)}).bind("blur.button",function(){b.buttonElement.removeClass(m)}),i&&(this.element.bind("change.button",function(){if(f)return;b.refresh()}),this.buttonElement.bind("mousedown.button",function(a){if(h.disabled)return;f=!1,d=a.pageX,e=a.pageY}).bind("mouseup.button",function(a){if(h.disabled)return;if(d!==a.pageX||e!==a.pageY)f=!0})),this.type==="checkbox"?this.buttonElement.bind("click.button",function(){if(h.disabled||f)return!1;a(this).toggleClass("ui-state-active"),b.buttonElement.attr("aria-pressed",b.element[0].checked)}):this.type==="radio"?this.buttonElement.bind("click.button",function(){if(h.disabled||f)return!1;a(this).addClass("ui-state-active"),b.buttonElement.attr("aria-pressed","true");var c=b.element[0];k(c).not(c).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown.button",function(){if(h.disabled)return!1;a(this).addClass("ui-state-active"),c=this,a(document).one("mouseup",function(){c=null})}).bind("mouseup.button",function(){if(h.disabled)return!1;a(this).removeClass("ui-state-active")}).bind("keydown.button",function(b){if(h.disabled)return!1;(b.keyCode==a.ui.keyCode.SPACE||b.keyCode==a.ui.keyCode.ENTER)&&a(this).addClass("ui-state-active")}).bind("keyup.button",function(){a(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(b){b.keyCode===a.ui.keyCode.SPACE&&a(this).click()})),this._setOption("disabled",h.disabled),this._resetButton()},_determineButtonType:function(){this.element.is(":checkbox")?this.type="checkbox":this.element.is(":radio")?this.type="radio":this.element.is("input")?this.type="input":this.type="button";if(this.type==="checkbox"||this.type==="radio"){var a=this.element.parents().filter(":last"),b="label[for='"+this.element.attr("id")+"']";this.buttonElement=a.find(b),this.buttonElement.length||(a=a.length?a.siblings():this.element.siblings(),this.buttonElement=a.filter(b),this.buttonElement.length||(this.buttonElement=a.find(b))),this.element.addClass("ui-helper-hidden-accessible");var c=this.element.is(":checked");c&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.attr("aria-pressed",c)}else this.buttonElement=this.element},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(g+" "+h+" "+i).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title"),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments);if(b==="disabled"){c?this.element.propAttr("disabled",!0):this.element.propAttr("disabled",!1);return}this._resetButton()},refresh:function(){var b=this.element.is(":disabled");b!==this.options.disabled&&this._setOption("disabled",b),this.type==="radio"?k(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var b=this.buttonElement.removeClass(i),c=a("<span></span>",this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),d=this.options.icons,e=d.primary&&d.secondary,f=[];d.primary||d.secondary?(this.options.text&&f.push("ui-button-text-icon"+(e?"s":d.primary?"-primary":"-secondary")),d.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>"),d.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>"),this.options.text||(f.push(e?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||b.attr("title",c))):f.push("ui-button-text-only"),b.addClass(f.join(" "))}}),a.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(b,c){b==="disabled"&&this.buttons.button("option",b,c),a.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){var b=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(b?"ui-corner-left":"ui-corner-right").end().end()},destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy"),a.Widget.prototype.destroy.call(this)}})})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.dialog.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c="ui-dialog ui-widget ui-widget-content ui-corner-all ",d={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},e={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},f=a.attrFn||{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0,click:!0};a.widget("ui.dialog",{options:{autoOpen:!0,buttons:{},closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:!1,maxWidth:!1,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",collision:"fit",using:function(b){var c=a(this).css(b).offset().top;c<0&&a(this).css("top",b.top-c)}},resizable:!0,show:null,stack:!0,title:"",width:300,zIndex:1e3},_create:function(){this.originalTitle=this.element.attr("title"),typeof this.originalTitle!="string"&&(this.originalTitle=""),this.options.title=this.options.title||this.originalTitle;var b=this,d=b.options,e=d.title||"&#160;",f=a.ui.dialog.getTitleId(b.element),g=(b.uiDialog=a("<div></div>")).appendTo(document.body).hide().addClass(c+d.dialogClass).css({zIndex:d.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(c){d.closeOnEscape&&!c.isDefaultPrevented()&&c.keyCode&&c.keyCode===a.ui.keyCode.ESCAPE&&(b.close(c),c.preventDefault())}).attr({role:"dialog","aria-labelledby":f}).mousedown(function(a){b.moveToTop(!1,a)}),h=b.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g),i=(b.uiDialogTitlebar=a("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),j=a('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){j.addClass("ui-state-hover")},function(){j.removeClass("ui-state-hover")}).focus(function(){j.addClass("ui-state-focus")}).blur(function(){j.removeClass("ui-state-focus")}).click(function(a){return b.close(a),!1}).appendTo(i),k=(b.uiDialogTitlebarCloseText=a("<span></span>")).addClass("ui-icon ui-icon-closethick").text(d.closeText).appendTo(j),l=a("<span></span>").addClass("ui-dialog-title").attr("id",f).html(e).prependTo(i);a.isFunction(d.beforeclose)&&!a.isFunction(d.beforeClose)&&(d.beforeClose=d.beforeclose),i.find("*").add(i).disableSelection(),d.draggable&&a.fn.draggable&&b._makeDraggable(),d.resizable&&a.fn.resizable&&b._makeResizable(),b._createButtons(d.buttons),b._isOpen=!1,a.fn.bgiframe&&g.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var a=this;return a.overlay&&a.overlay.destroy(),a.uiDialog.hide(),a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),a.uiDialog.remove(),a.originalTitle&&a.element.attr("title",a.originalTitle),a},widget:function(){return this.uiDialog},close:function(b){var c=this,d,e;if(!1===c._trigger("beforeClose",b))return;return c.overlay&&c.overlay.destroy(),c.uiDialog.unbind("keypress.ui-dialog"),c._isOpen=!1,c.options.hide?c.uiDialog.hide(c.options.hide,function(){c._trigger("close",b)}):(c.uiDialog.hide(),c._trigger("close",b)),a.ui.dialog.overlay.resize(),c.options.modal&&(d=0,a(".ui-dialog").each(function(){this!==c.uiDialog[0]&&(e=a(this).css("z-index"),isNaN(e)||(d=Math.max(d,e)))}),a.ui.dialog.maxZ=d),c},isOpen:function(){return this._isOpen},moveToTop:function(b,c){var d=this,e=d.options,f;return e.modal&&!b||!e.stack&&!e.modal?d._trigger("focus",c):(e.zIndex>a.ui.dialog.maxZ&&(a.ui.dialog.maxZ=e.zIndex),d.overlay&&(a.ui.dialog.maxZ+=1,d.overlay.$el.css("z-index",a.ui.dialog.overlay.maxZ=a.ui.dialog.maxZ)),f={scrollTop:d.element.scrollTop(),scrollLeft:d.element.scrollLeft()},a.ui.dialog.maxZ+=1,d.uiDialog.css("z-index",a.ui.dialog.maxZ),d.element.attr(f),d._trigger("focus",c),d)},open:function(){if(this._isOpen)return;var b=this,c=b.options,d=b.uiDialog;return b.overlay=c.modal?new a.ui.dialog.overlay(b):null,b._size(),b._position(c.position),d.show(c.show),b.moveToTop(!0),c.modal&&d.bind("keydown.ui-dialog",function(b){if(b.keyCode!==a.ui.keyCode.TAB)return;var c=a(":tabbable",this),d=c.filter(":first"),e=c.filter(":last");if(b.target===e[0]&&!b.shiftKey)return d.focus(1),!1;if(b.target===d[0]&&b.shiftKey)return e.focus(1),!1}),a(b.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus(),b._isOpen=!0,b._trigger("open"),b},_createButtons:function(b){var c=this,d=!1,e=a("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),g=a("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);c.uiDialog.find(".ui-dialog-buttonpane").remove(),typeof b=="object"&&b!==null&&a.each(b,function(){return!(d=!0)}),d&&(a.each(b,function(b,d){d=a.isFunction(d)?{click:d,text:b}:d;var e=a('<button type="button"></button>').click(function(){d.click.apply(c.element[0],arguments)}).appendTo(g);a.each(d,function(a,b){if(a==="click")return;a in f?e[a](b):e.attr(a,b)}),a.fn.button&&e.button()}),e.appendTo(c.uiDialog))},_makeDraggable:function(){function f(a){return{position:a.position,offset:a.offset}}var b=this,c=b.options,d=a(document),e;b.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(d,g){e=c.height==="auto"?"auto":a(this).height(),a(this).height(a(this).height()).addClass("ui-dialog-dragging"),b._trigger("dragStart",d,f(g))},drag:function(a,c){b._trigger("drag",a,f(c))},stop:function(g,h){c.position=[h.position.left-d.scrollLeft(),h.position.top-d.scrollTop()],a(this).removeClass("ui-dialog-dragging").height(e),b._trigger("dragStop",g,f(h)),a.ui.dialog.overlay.resize()}})},_makeResizable:function(c){function h(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}c=c===b?this.options.resizable:c;var d=this,e=d.options,f=d.uiDialog.css("position"),g=typeof c=="string"?c:"n,e,s,w,se,sw,ne,nw";d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:d._minHeight(),handles:g,start:function(b,c){a(this).addClass("ui-dialog-resizing"),d._trigger("resizeStart",b,h(c))},resize:function(a,b){d._trigger("resize",a,h(b))},stop:function(b,c){a(this).removeClass("ui-dialog-resizing"),e.height=a(this).height(),e.width=a(this).width(),d._trigger("resizeStop",b,h(c)),a.ui.dialog.overlay.resize()}}).css("position",f).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var a=this.options;return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(b){var c=[],d=[0,0],e;if(b){if(typeof b=="string"||typeof b=="object"&&"0"in b)c=b.split?b.split(" "):[b[0],b[1]],c.length===1&&(c[1]=c[0]),a.each(["left","top"],function(a,b){+c[a]===c[a]&&(d[a]=c[a],c[a]=b)}),b={my:c.join(" "),at:c.join(" "),offset:d.join(" ")};b=a.extend({},a.ui.dialog.prototype.options.position,b)}else b=a.ui.dialog.prototype.options.position;e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.css({top:0,left:0}).position(a.extend({of:window},b)),e||this.uiDialog.hide()},_setOptions:function(b){var c=this,f={},g=!1;a.each(b,function(a,b){c._setOption(a,b),a in d&&(g=!0),a in e&&(f[a]=b)}),g&&this._size(),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",f)},_setOption:function(b,d){var e=this,f=e.uiDialog;switch(b){case"beforeclose":b="beforeClose";break;case"buttons":e._createButtons(d);break;case"closeText":e.uiDialogTitlebarCloseText.text(""+d);break;case"dialogClass":f.removeClass(e.options.dialogClass).addClass(c+d);break;case"disabled":d?f.addClass("ui-dialog-disabled"):f.removeClass("ui-dialog-disabled");break;case"draggable":var g=f.is(":data(draggable)");g&&!d&&f.draggable("destroy"),!g&&d&&e._makeDraggable();break;case"position":e._position(d);break;case"resizable":var h=f.is(":data(resizable)");h&&!d&&f.resizable("destroy"),h&&typeof d=="string"&&f.resizable("option","handles",d),!h&&d!==!1&&e._makeResizable(d);break;case"title":a(".ui-dialog-title",e.uiDialogTitlebar).html(""+(d||"&#160;"))}a.Widget.prototype._setOption.apply(e,arguments)},_size:function(){var b=this.options,c,d,e=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0}),b.minWidth>b.width&&(b.width=b.minWidth),c=this.uiDialog.css({height:"auto",width:b.width}).height(),d=Math.max(0,b.minHeight-c);if(b.height==="auto")if(a.support.minHeight)this.element.css({minHeight:d,height:"auto"});else{this.uiDialog.show();var f=this.element.css("height","auto").height();e||this.uiDialog.hide(),this.element.height(Math.max(f,d))}else this.element.height(Math.max(b.height-c,0));this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}}),a.extend(a.ui.dialog,{version:"1.8.20",uuid:0,maxZ:0,getTitleId:function(a){var b=a.attr("id");return b||(this.uuid+=1,b=this.uuid),"ui-dialog-title-"+b},overlay:function(b){this.$el=a.ui.dialog.overlay.create(b)}}),a.extend(a.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(a){return a+".dialog-overlay"}).join(" "),create:function(b){this.instances.length===0&&(setTimeout(function(){a.ui.dialog.overlay.instances.length&&a(document).bind(a.ui.dialog.overlay.events,function(b){if(a(b.target).zIndex()<a.ui.dialog.overlay.maxZ)return!1})},1),a(document).bind("keydown.dialog-overlay",function(c){b.options.closeOnEscape&&!c.isDefaultPrevented()&&c.keyCode&&c.keyCode===a.ui.keyCode.ESCAPE&&(b.close(c),c.preventDefault())}),a(window).bind("resize.dialog-overlay",a.ui.dialog.overlay.resize));var c=(this.oldInstances.pop()||a("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});return a.fn.bgiframe&&c.bgiframe(),this.instances.push(c),c},destroy:function(b){var c=a.inArray(b,this.instances);c!=-1&&this.oldInstances.push(this.instances.splice(c,1)[0]),this.instances.length===0&&a([document,window]).unbind(".dialog-overlay"),b.remove();var d=0;a.each(this.instances,function(){d=Math.max(d,this.css("z-index"))}),this.maxZ=d},height:function(){var b,c;return a.browser.msie&&a.browser.version<7?(b=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),c=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight),b<c?a(window).height()+"px":b+"px"):a(document).height()+"px"},width:function(){var b,c;return a.browser.msie?(b=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),c=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth),b<c?a(window).width()+"px":b+"px"):a(document).width()+"px"},resize:function(){var b=a([]);a.each(a.ui.dialog.overlay.instances,function(){b=b.add(this)}),b.css({width:0,height:0}).css({width:a.ui.dialog.overlay.width(),height:a.ui.dialog.overlay.height()})}}),a.extend(a.ui.dialog.overlay.prototype,{destroy:function(){a.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.slider.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=5;a.widget("ui.slider",a.ui.mouse,{widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var b=this,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=d.values&&d.values.length||1,h=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(d.disabled?" ui-slider-disabled ui-disabled":"")),this.range=a([]),d.range&&(d.range===!0&&(d.values||(d.values=[this._valueMin(),this._valueMin()]),d.values.length&&d.values.length!==2&&(d.values=[d.values[0],d.values[0]])),this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(d.range==="min"||d.range==="max"?" ui-slider-range-"+d.range:"")));for(var i=e.length;i<g;i+=1)h.push(f);this.handles=e.add(a(h.join("")).appendTo(b.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(a){a.preventDefault()}).hover(function(){d.disabled||a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")}).focus(function(){d.disabled?a(this).blur():(a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),a(this).addClass("ui-state-focus"))}).blur(function(){a(this).removeClass("ui-state-focus")}),this.handles.each(function(b){a(this).data("index.ui-slider-handle",b)}),this.handles.keydown(function(d){var e=a(this).data("index.ui-slider-handle"),f,g,h,i;if(b.options.disabled)return;switch(d.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:d.preventDefault();if(!b._keySliding){b._keySliding=!0,a(this).addClass("ui-state-active"),f=b._start(d,e);if(f===!1)return}}i=b.options.step,b.options.values&&b.options.values.length?g=h=b.values(e):g=h=b.value();switch(d.keyCode){case a.ui.keyCode.HOME:h=b._valueMin();break;case a.ui.keyCode.END:h=b._valueMax();break;case a.ui.keyCode.PAGE_UP:h=b._trimAlignValue(g+(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.PAGE_DOWN:h=b._trimAlignValue(g-(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(g===b._valueMax())return;h=b._trimAlignValue(g+i);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(g===b._valueMin())return;h=b._trimAlignValue(g-i)}b._slide(d,e,h)}).keyup(function(c){var d=a(this).data("index.ui-slider-handle");b._keySliding&&(b._keySliding=!1,b._stop(c,d),b._change(c,d),a(this).removeClass("ui-state-active"))}),this._refreshValue(),this._animateOff=!1},destroy:function(){return this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"),this._mouseDestroy(),this},_mouseCapture:function(b){var c=this.options,d,e,f,g,h,i,j,k,l;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),d={x:b.pageX,y:b.pageY},e=this._normValueFromMouse(d),f=this._valueMax()-this._valueMin()+1,h=this,this.handles.each(function(b){var c=Math.abs(e-h.values(b));f>c&&(f=c,g=a(this),i=b)}),c.range===!0&&this.values(1)===c.min&&(i+=1,g=a(this.handles[i])),j=this._start(b,i),j===!1?!1:(this._mouseSliding=!0,h._handleIndex=i,g.addClass("ui-state-active").focus(),k=g.offset(),l=!a(b.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:b.pageX-k.left-g.width()/2,top:b.pageY-k.top-g.height()/2-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,i,e),this._animateOff=!0,!0))},_mouseStart:function(a){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);return this._slide(a,this._handleIndex,c),!1},_mouseStop:function(a){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;return this.orientation==="horizontal"?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),d<0&&(d=0),this.orientation==="vertical"&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e,this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};return this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),this.options.values.length===2&&this.options.range===!0&&(b===0&&c>d||b===1&&c<d)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c,!0))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("change",a,c)}},value:function(a){if(arguments.length){this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(b,c){var d,e,f;if(arguments.length>1){this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),this._change(null,b);return}if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();d=this.options.values,e=arguments[0];for(f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()},_setOption:function(b,c){var d,e=0;a.isArray(this.options.values)&&(e=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments);switch(b){case"disabled":c?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.propAttr("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.propAttr("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(d=0;d<e;d+=1)this._change(null,d);this._animateOff=!1}},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a),a},_values:function(a){var b,c,d;if(arguments.length)return b=this.options.values[a],b=this._trimAlignValue(b),b;c=this.options.values.slice();for(d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;return Math.abs(c)*2>=b&&(d+=c>0?b:-b),parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var b=this.options.range,c=this.options,d=this,e=this._animateOff?!1:c.animate,f,g={},h,i,j,k;this.options.values&&this.options.values.length?this.handles.each(function(b,i){f=(d.values(b)-d._valueMin())/(d._valueMax()-d._valueMin())*100,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",a(this).stop(1,1)[e?"animate":"css"](g,c.animate),d.options.range===!0&&(d.orientation==="horizontal"?(b===0&&d.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({width:f-h+"%"},{queue:!1,duration:c.animate})):(b===0&&d.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({height:f-h+"%"},{queue:!1,duration:c.animate}))),h=f}):(i=this.value(),j=this._valueMin(),k=this._valueMax(),f=k!==j?(i-j)/(k-j)*100:0,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",this.handle.stop(1,1)[e?"animate":"css"](g,c.animate),b==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[e?"animate":"css"]({width:f+"%"},c.animate),b==="max"&&this.orientation==="horizontal"&&this.range[e?"animate":"css"]({width:100-f+"%"},{queue:!1,duration:c.animate}),b==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},c.animate),b==="max"&&this.orientation==="vertical"&&this.range[e?"animate":"css"]({height:100-f+"%"},{queue:!1,duration:c.animate}))}}),a.extend(a.ui.slider,{version:"1.8.20"})})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.tabs.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){function e(){return++c}function f(){return++d}var c=0,d=0;a.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:!1,cookie:null,collapsible:!1,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(!0)},_setOption:function(a,b){if(a=="selected"){if(this.options.collapsible&&b==this.options.selected)return;this.select(b)}else this.options[a]=b,this._tabify()},_tabId:function(a){return a.title&&a.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+e()},_sanitizeSelector:function(a){return a.replace(/:/g,"\\:")},_cookie:function(){var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+f());return a.cookie.apply(null,[b].concat(a.makeArray(arguments)))},_ui:function(a,b){return{tab:a,panel:b,index:this.anchors.index(a)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var b=a(this);b.html(b.data("label.tabs")).removeData("label.tabs")})},_tabify:function(c){function m(b,c){b.css("display",""),!a.support.opacity&&c.opacity&&b[0].style.removeAttribute("filter")}var d=this,e=this.options,f=/^#.+/;this.list=this.element.find("ol,ul").eq(0),this.lis=a(" > li:has(a[href])",this.list),this.anchors=this.lis.map(function(){return a("a",this)[0]}),this.panels=a([]),this.anchors.each(function(b,c){var g=a(c).attr("href"),h=g.split("#")[0],i;h&&(h===location.toString().split("#")[0]||(i=a("base")[0])&&h===i.href)&&(g=c.hash,c.href=g);if(f.test(g))d.panels=d.panels.add(d.element.find(d._sanitizeSelector(g)));else if(g&&g!=="#"){a.data(c,"href.tabs",g),a.data(c,"load.tabs",g.replace(/#.*$/,""));var j=d._tabId(c);c.href="#"+j;var k=d.element.find("#"+j);k.length||(k=a(e.panelTemplate).attr("id",j).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(d.panels[b-1]||d.list),k.data("destroy.tabs",!0)),d.panels=d.panels.add(k)}else e.disabled.push(b)}),c?(this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"),this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),this.lis.addClass("ui-state-default ui-corner-top"),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"),e.selected===b?(location.hash&&this.anchors.each(function(a,b){if(b.hash==location.hash)return e.selected=a,!1}),typeof e.selected!="number"&&e.cookie&&(e.selected=parseInt(d._cookie(),10)),typeof e.selected!="number"&&this.lis.filter(".ui-tabs-selected").length&&(e.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))),e.selected=e.selected||(this.lis.length?0:-1)):e.selected===null&&(e.selected=-1),e.selected=e.selected>=0&&this.anchors[e.selected]||e.selected<0?e.selected:0,e.disabled=a.unique(e.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"),function(a,b){return d.lis.index(a)}))).sort(),a.inArray(e.selected,e.disabled)!=-1&&e.disabled.splice(a.inArray(e.selected,e.disabled),1),this.panels.addClass("ui-tabs-hide"),this.lis.removeClass("ui-tabs-selected ui-state-active"),e.selected>=0&&this.anchors.length&&(d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash)).removeClass("ui-tabs-hide"),this.lis.eq(e.selected).addClass("ui-tabs-selected ui-state-active"),d.element.queue("tabs",function(){d._trigger("show",null,d._ui(d.anchors[e.selected],d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash))[0]))}),this.load(e.selected)),a(window).bind("unload",function(){d.lis.add(d.anchors).unbind(".tabs"),d.lis=d.anchors=d.panels=null})):e.selected=this.lis.index(this.lis.filter(".ui-tabs-selected")),this.element[e.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible"),e.cookie&&this._cookie(e.selected,e.cookie);for(var g=0,h;h=this.lis[g];g++)a(h)[a.inArray(g,e.disabled)!=-1&&!a(h).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");e.cache===!1&&this.anchors.removeData("cache.tabs"),this.lis.add(this.anchors).unbind(".tabs");if(e.event!=="mouseover"){var i=function(a,b){b.is(":not(.ui-state-disabled)")&&b.addClass("ui-state-"+a)},j=function(a,b){b.removeClass("ui-state-"+a)};this.lis.bind("mouseover.tabs",function(){i("hover",a(this))}),this.lis.bind("mouseout.tabs",function(){j("hover",a(this))}),this.anchors.bind("focus.tabs",function(){i("focus",a(this).closest("li"))}),this.anchors.bind("blur.tabs",function(){j("focus",a(this).closest("li"))})}var k,l;e.fx&&(a.isArray(e.fx)?(k=e.fx[0],l=e.fx[1]):k=l=e.fx);var n=l?function(b,c){a(b).closest("li").addClass("ui-tabs-selected ui-state-active"),c.hide().removeClass("ui-tabs-hide").animate(l,l.duration||"normal",function(){m(c,l),d._trigger("show",null,d._ui(b,c[0]))})}:function(b,c){a(b).closest("li").addClass("ui-tabs-selected ui-state-active"),c.removeClass("ui-tabs-hide"),d._trigger("show",null,d._ui(b,c[0]))},o=k?function(a,b){b.animate(k,k.duration||"normal",function(){d.lis.removeClass("ui-tabs-selected ui-state-active"),b.addClass("ui-tabs-hide"),m(b,k),d.element.dequeue("tabs")})}:function(a,b,c){d.lis.removeClass("ui-tabs-selected ui-state-active"),b.addClass("ui-tabs-hide"),d.element.dequeue("tabs")};this.anchors.bind(e.event+".tabs",function(){var b=this,c=a(b).closest("li"),f=d.panels.filter(":not(.ui-tabs-hide)"),g=d.element.find(d._sanitizeSelector(b.hash));if(c.hasClass("ui-tabs-selected")&&!e.collapsible||c.hasClass("ui-state-disabled")||c.hasClass("ui-state-processing")||d.panels.filter(":animated").length||d._trigger("select",null,d._ui(this,g[0]))===!1)return this.blur(),!1;e.selected=d.anchors.index(this),d.abort();if(e.collapsible){if(c.hasClass("ui-tabs-selected"))return e.selected=-1,e.cookie&&d._cookie(e.selected,e.cookie),d.element.queue("tabs",function(){o(b,f)}).dequeue("tabs"),this.blur(),!1;if(!f.length)return e.cookie&&d._cookie(e.selected,e.cookie),d.element.queue("tabs",function(){n(b,g)}),d.load(d.anchors.index(this)),this.blur(),!1}e.cookie&&d._cookie(e.selected,e.cookie);if(g.length)f.length&&d.element.queue("tabs",function(){o(b,f)}),d.element.queue("tabs",function(){n(b,g)}),d.load(d.anchors.index(this));else throw"jQuery UI Tabs: Mismatching fragment identifier.";a.browser.msie&&this.blur()}),this.anchors.bind("click.tabs",function(){return!1})},_getIndex:function(a){return typeof a=="string"&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a},destroy:function(){var b=this.options;return this.abort(),this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"),this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),this.anchors.each(function(){var b=a.data(this,"href.tabs");b&&(this.href=b);var c=a(this).unbind(".tabs");a.each(["href","load","cache"],function(a,b){c.removeData(b+".tabs")})}),this.lis.unbind(".tabs").add(this.panels).each(function(){a.data(this,"destroy.tabs")?a(this).remove():a(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))}),b.cookie&&this._cookie(null,b.cookie),this},add:function(c,d,e){e===b&&(e=this.anchors.length);var f=this,g=this.options,h=a(g.tabTemplate.replace(/#\{href\}/g,c).replace(/#\{label\}/g,d)),i=c.indexOf("#")?this._tabId(a("a",h)[0]):c.replace("#","");h.addClass("ui-state-default ui-corner-top").data("destroy.tabs",!0);var j=f.element.find("#"+i);return j.length||(j=a(g.panelTemplate).attr("id",i).data("destroy.tabs",!0)),j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"),e>=this.lis.length?(h.appendTo(this.list),j.appendTo(this.list[0].parentNode)):(h.insertBefore(this.lis[e]),j.insertBefore(this.panels[e])),g.disabled=a.map(g.disabled,function(a,b){return a>=e?++a:a}),this._tabify(),this.anchors.length==1&&(g.selected=0,h.addClass("ui-tabs-selected ui-state-active"),j.removeClass("ui-tabs-hide"),this.element.queue("tabs",function(){f._trigger("show",null,f._ui(f.anchors[0],f.panels[0]))}),this.load(0)),this._trigger("add",null,this._ui(this.anchors[e],this.panels[e])),this},remove:function(b){b=this._getIndex(b);var c=this.options,d=this.lis.eq(b).remove(),e=this.panels.eq(b).remove();return d.hasClass("ui-tabs-selected")&&this.anchors.length>1&&this.select(b+(b+1<this.anchors.length?1:-1)),c.disabled=a.map(a.grep(c.disabled,function(a,c){return a!=b}),function(a,c){return a>=b?--a:a}),this._tabify(),this._trigger("remove",null,this._ui(d.find("a")[0],e[0])),this},enable:function(b){b=this._getIndex(b);var c=this.options;if(a.inArray(b,c.disabled)==-1)return;return this.lis.eq(b).removeClass("ui-state-disabled"),c.disabled=a.grep(c.disabled,function(a,c){return a!=b}),this._trigger("enable",null,this._ui(this.anchors[b],this.panels[b])),this},disable:function(a){a=this._getIndex(a);var b=this,c=this.options;return a!=c.selected&&(this.lis.eq(a).addClass("ui-state-disabled"),c.disabled.push(a),c.disabled.sort(),this._trigger("disable",null,this._ui(this.anchors[a],this.panels[a]))),this},select:function(a){a=this._getIndex(a);if(a==-1)if(this.options.collapsible&&this.options.selected!=-1)a=this.options.selected;else return this;return this.anchors.eq(a).trigger(this.options.event+".tabs"),this},load:function(b){b=this._getIndex(b);var c=this,d=this.options,e=this.anchors.eq(b)[0],f=a.data(e,"load.tabs");this.abort();if(!f||this.element.queue("tabs").length!==0&&a.data(e,"cache.tabs")){this.element.dequeue("tabs");return}this.lis.eq(b).addClass("ui-state-processing");if(d.spinner){var g=a("span",e);g.data("label.tabs",g.html()).html(d.spinner)}return this.xhr=a.ajax(a.extend({},d.ajaxOptions,{url:f,success:function(f,g){c.element.find(c._sanitizeSelector(e.hash)).html(f),c._cleanup(),d.cache&&a.data(e,"cache.tabs",!0),c._trigger("load",null,c._ui(c.anchors[b],c.panels[b]));try{d.ajaxOptions.success(f,g)}catch(h){}},error:function(a,f,g){c._cleanup(),c._trigger("load",null,c._ui(c.anchors[b],c.panels[b]));try{d.ajaxOptions.error(a,f,b,e)}catch(g){}}})),c.element.dequeue("tabs"),this},abort:function(){return this.element.queue([]),this.panels.stop(!1,!0),this.element.queue("tabs",this.element.queue("tabs").splice(-2,2)),this.xhr&&(this.xhr.abort(),delete this.xhr),this._cleanup(),this},url:function(a,b){return this.anchors.eq(a).removeData("cache.tabs").data("load.tabs",b),this},length:function(){return this.anchors.length}}),a.extend(a.ui.tabs,{version:"1.8.20"}),a.extend(a.ui.tabs.prototype,{rotation:null,rotate:function(a,b){var c=this,d=this.options,e=c._rotate||(c._rotate=function(b){clearTimeout(c.rotation),c.rotation=setTimeout(function(){var a=d.selected;c.select(++a<c.anchors.length?a:0)},a),b&&b.stopPropagation()}),f=c._unrotate||(c._unrotate=b?function(a){e()}:function(a){a.clientX&&c.rotate(null)});return a?(this.element.bind("tabsshow",e),this.anchors.bind(d.event+".tabs",f),e()):(clearTimeout(c.rotation),this.element.unbind("tabsshow",e),this.anchors.unbind(d.event+".tabs",f),delete this._rotate,delete this._unrotate),this}})})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.datepicker.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function($,undefined){function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function bindHover(a){var b="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return a.bind("mouseout",function(a){var c=$(a.target).closest(b);if(!c.length)return;c.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(c){var d=$(c.target).closest(b);if($.datepicker._isDisabledDatepicker(instActive.inline?a.parent()[0]:instActive.input[0])||!d.length)return;d.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),d.addClass("ui-state-hover"),d.hasClass("ui-datepicker-prev")&&d.addClass("ui-datepicker-prev-hover"),d.hasClass("ui-datepicker-next")&&d.addClass("ui-datepicker-next-hover")})}function extendRemove(a,b){$.extend(a,b);for(var c in b)if(b[c]==null||b[c]==undefined)a[c]=b[c];return a}function isArray(a){return a&&($.browser.safari&&typeof a=="object"&&a.length||a.constructor&&a.constructor.toString().match(/\Array\(\)/))}$.extend($.ui,{datepicker:{version:"1.8.20"}});var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){return extendRemove(this._defaults,a||{}),this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase(),inline=nodeName=="div"||nodeName=="span";target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),nodeName=="input"?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(a,b){var c=a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:c,input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:b?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(a,b){var c=$(a);b.append=$([]),b.trigger=$([]);if(c.hasClass(this.markerClassName))return;this._attachments(c,b),c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),this._autoSize(b),$.data(a,PROP_NAME,b),b.settings.disabled&&this._disableDatepicker(a)},_attachments:function(a,b){var c=this._get(b,"appendText"),d=this._get(b,"isRTL");b.append&&b.append.remove(),c&&(b.append=$('<span class="'+this._appendClass+'">'+c+"</span>"),a[d?"before":"after"](b.append)),a.unbind("focus",this._showDatepicker),b.trigger&&b.trigger.remove();var e=this._get(b,"showOn");(e=="focus"||e=="both")&&a.focus(this._showDatepicker);if(e=="button"||e=="both"){var f=this._get(b,"buttonText"),g=this._get(b,"buttonImage");b.trigger=$(this._get(b,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:g,alt:f,title:f}):$('<button type="button"></button>').addClass(this._triggerClass).html(g==""?f:$("<img/>").attr({src:g,alt:f,title:f}))),a[d?"before":"after"](b.trigger),b.trigger.click(function(){return $.datepicker._datepickerShowing&&$.datepicker._lastInput==a[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=a[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(a[0])):$.datepicker._showDatepicker(a[0]),!1})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var d=function(a){var b=0,c=0;for(var d=0;d<a.length;d++)a[d].length>b&&(b=a[d].length,c=d);return c};b.setMonth(d(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort"))),b.setDate(d(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=$(a);if(c.hasClass(this.markerClassName))return;c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),$.data(a,PROP_NAME,b),this._setDate(b,this._getDefaultDate(b),!0),this._updateDatepicker(b),this._updateAlternate(b),b.settings.disabled&&this._disableDatepicker(a),b.dpDiv.css("display","block")},_dialogDatepicker:function(a,b,c,d,e){var f=this._dialogInst;if(!f){this.uuid+=1;var g="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+g+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),f=this._dialogInst=this._newInst(this._dialogInput,!1),f.settings={},$.data(this._dialogInput[0],PROP_NAME,f)}extendRemove(f.settings,d||{}),b=b&&b.constructor==Date?this._formatDate(f,b):b,this._dialogInput.val(b),this._pos=e?e.length?e:[e.pageX,e.pageY]:null;if(!this._pos){var h=document.documentElement.clientWidth,i=document.documentElement.clientHeight,j=document.documentElement.scrollLeft||document.body.scrollLeft,k=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[h/2-100+j,i/2-150+k]}return this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),f.settings.onSelect=c,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,f),this},_destroyDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();$.removeData(a,PROP_NAME),d=="input"?(c.append.remove(),c.trigger.remove(),b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(d=="div"||d=="span")&&b.removeClass(this.markerClassName).empty()},_enableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!1,c.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().removeClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b})},_disableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!0,c.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().addClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b}),this._disabledInputs[this._disabledInputs.length]=a},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return!0;return!1},_getInst:function(a){try{return $.data(a,PROP_NAME)}catch(b){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(a,b,c){var d=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?$.extend({},$.datepicker._defaults):d?b=="all"?$.extend({},d.settings):this._get(d,b):null;var e=b||{};typeof b=="string"&&(e={},e[b]=c);if(d){this._curInst==d&&this._hideDatepicker();var f=this._getDateDatepicker(a,!0),g=this._getMinMaxDate(d,"min"),h=this._getMinMaxDate(d,"max");extendRemove(d.settings,e),g!==null&&e.dateFormat!==undefined&&e.minDate===undefined&&(d.settings.minDate=this._formatDate(d,g)),h!==null&&e.dateFormat!==undefined&&e.maxDate===undefined&&(d.settings.maxDate=this._formatDate(d,h)),this._attachments($(a),d),this._autoSize(d),this._setDate(d,f),this._updateAlternate(d),this._updateDatepicker(d)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null},_doKeyDown:function(a){var b=$.datepicker._getInst(a.target),c=!0,d=b.dpDiv.is(".ui-datepicker-rtl");b._keyEvent=!0;if($.datepicker._datepickerShowing)switch(a.keyCode){case 9:$.datepicker._hideDatepicker(),c=!1;break;case 13:var e=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",b.dpDiv);e[0]&&$.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,e[0]);var f=$.datepicker._get(b,"onSelect");if(f){var g=$.datepicker._formatDate(b);f.apply(b.input?b.input[0]:null,[g,b])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 35:(a.ctrlKey||a.metaKey)&&$.datepicker._clearDate(a.target),c=a.ctrlKey||a.metaKey;break;case 36:(a.ctrlKey||a.metaKey)&&$.datepicker._gotoToday(a.target),c=a.ctrlKey||a.metaKey;break;case 37:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?1:-1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 38:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,-7,"D"),c=a.ctrlKey||a.metaKey;break;case 39:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?-1:1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 40:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,7,"D"),c=a.ctrlKey||a.metaKey;break;default:c=!1}else a.keyCode==36&&a.ctrlKey?$.datepicker._showDatepicker(this):c=!1;c&&(a.preventDefault(),a.stopPropagation())},_doKeyPress:function(a){var b=$.datepicker._getInst(a.target);if($.datepicker._get(b,"constrainInput")){var c=$.datepicker._possibleChars($.datepicker._get(b,"dateFormat")),d=String.fromCharCode(a.charCode==undefined?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||d<" "||!c||c.indexOf(d)>-1}},_doKeyUp:function(a){var b=$.datepicker._getInst(a.target);if(b.input.val()!=b.lastVal)try{var c=$.datepicker.parseDate($.datepicker._get(b,"dateFormat"),b.input?b.input.val():null,$.datepicker._getFormatConfig(b));c&&($.datepicker._setDateFromField(b),$.datepicker._updateAlternate(b),$.datepicker._updateDatepicker(b))}catch(d){$.datepicker.log(d)}return!0},_showDatepicker:function(a){a=a.target||a,a.nodeName.toLowerCase()!="input"&&(a=$("input",a.parentNode)[0]);if($.datepicker._isDisabledDatepicker(a)||$.datepicker._lastInput==a)return;var b=$.datepicker._getInst(a);$.datepicker._curInst&&$.datepicker._curInst!=b&&($.datepicker._curInst.dpDiv.stop(!0,!0),b&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));var c=$.datepicker._get(b,"beforeShow"),d=c?c.apply(a,[a,b]):{};if(d===!1)return;extendRemove(b.settings,d),b.lastVal=null,$.datepicker._lastInput=a,$.datepicker._setDateFromField(b),$.datepicker._inDialog&&(a.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(a),$.datepicker._pos[1]+=a.offsetHeight);var e=!1;$(a).parents().each(function(){return e|=$(this).css("position")=="fixed",!e}),e&&$.browser.opera&&($.datepicker._pos[0]-=document.documentElement.scrollLeft,$.datepicker._pos[1]-=document.documentElement.scrollTop);var f={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null,b.dpDiv.empty(),b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(b),f=$.datepicker._checkOffset(b,f,e),b.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":e?"fixed":"absolute",display:"none",left:f.left+"px",top:f.top+"px"});if(!b.inline){var g=$.datepicker._get(b,"showAnim"),h=$.datepicker._get(b,"duration"),i=function(){var a=b.dpDiv.find("iframe.ui-datepicker-cover");if(!!a.length){var c=$.datepicker._getBorders(b.dpDiv);a.css({left:-c[0],top:-c[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex($(a).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&$.effects[g]?b.dpDiv.show(g,$.datepicker._get(b,"showOptions"),h,i):b.dpDiv[g||"show"](g?h:null,i),(!g||!h)&&i(),b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus(),$.datepicker._curInst=b}},_updateDatepicker:function(a){var b=this;b.maxRows=4;var c=$.datepicker._getBorders(a.dpDiv);instActive=a,a.dpDiv.empty().append(this._generateHTML(a));var d=a.dpDiv.find("iframe.ui-datepicker-cover");!d.length||d.css({left:-c[0],top:-c[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()}),a.dpDiv.find("."+this._dayOverClass+" a").mouseover();var e=this._getNumberOfMonths(a),f=e[1],g=17;a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),f>1&&a.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",g*f+"em"),a.dpDiv[(e[0]!=1||e[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi"),a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),a==$.datepicker._curInst&&$.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var h=a.yearshtml;setTimeout(function(){h===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml),h=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(a){return{thin:1,medium:2,thick:3}[a]||a};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var d=a.dpDiv.outerWidth(),e=a.dpDiv.outerHeight(),f=a.input?a.input.outerWidth():0,g=a.input?a.input.outerHeight():0,h=document.documentElement.clientWidth+$(document).scrollLeft(),i=document.documentElement.clientHeight+$(document).scrollTop();return b.left-=this._get(a,"isRTL")?d-f:0,b.left-=c&&b.left==a.input.offset().left?$(document).scrollLeft():0,b.top-=c&&b.top==a.input.offset().top+g?$(document).scrollTop():0,b.left-=Math.min(b.left,b.left+d>h&&h>d?Math.abs(b.left+d-h):0),b.top-=Math.min(b.top,b.top+e>i&&i>e?Math.abs(e+g):0),b},_findPos:function(a){var b=this._getInst(a),c=this._get(b,"isRTL");while(a&&(a.type=="hidden"||a.nodeType!=1||$.expr.filters.hidden(a)))a=a[c?"previousSibling":"nextSibling"];var d=$(a).offset();return[d.left,d.top]},_hideDatepicker:function(a){var b=this._curInst;if(!b||a&&b!=$.data(a,PROP_NAME))return;if(this._datepickerShowing){var c=this._get(b,"showAnim"),d=this._get(b,"duration"),e=function(){$.datepicker._tidyDialog(b)};$.effects&&$.effects[c]?b.dpDiv.hide(c,$.datepicker._get(b,"showOptions"),d,e):b.dpDiv[c=="slideDown"?"slideUp":c=="fadeIn"?"fadeOut":"hide"](c?d:null,e),c||e(),this._datepickerShowing=!1;var f=this._get(b,"onClose");f&&f.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(!$.datepicker._curInst)return;var b=$(a.target),c=$.datepicker._getInst(b[0]);(b[0].id!=$.datepicker._mainDivId&&b.parents("#"+$.datepicker._mainDivId).length==0&&!b.hasClass($.datepicker.markerClassName)&&!b.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||b.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=c)&&$.datepicker._hideDatepicker()},_adjustDate:function(a,b,c){var d=$(a),e=this._getInst(d[0]);if(this._isDisabledDatepicker(d[0]))return;this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c),this._updateDatepicker(e)},_gotoToday:function(a){var b=$(a),c=this._getInst(b[0]);if(this._get(c,"gotoCurrent")&&c.currentDay)c.selectedDay=c.currentDay,c.drawMonth=c.selectedMonth=c.currentMonth,c.drawYear=c.selectedYear=c.currentYear;else{var d=new Date;c.selectedDay=d.getDate(),c.drawMonth=c.selectedMonth=d.getMonth(),c.drawYear=c.selectedYear=d.getFullYear()}this._notifyChange(c),this._adjustDate(b)},_selectMonthYear:function(a,b,c){var d=$(a),e=this._getInst(d[0]);e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10),this._notifyChange(e),this._adjustDate(d)},_selectDay:function(a,b,c,d){var e=$(a);if($(d).hasClass(this._unselectableClass)||this._isDisabledDatepicker(e[0]))return;var f=this._getInst(e[0]);f.selectedDay=f.currentDay=$("a",d).html(),f.selectedMonth=f.currentMonth=b,f.selectedYear=f.currentYear=c,this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))},_clearDate:function(a){var b=$(a),c=this._getInst(b[0]);this._selectDate(b,"")},_selectDate:function(a,b){var c=$(a),d=this._getInst(c[0]);b=b!=null?b:this._formatDate(d),d.input&&d.input.val(b),this._updateAlternate(d);var e=this._get(d,"onSelect");e?e.apply(d.input?d.input[0]:null,[b,d]):d.input&&d.input.trigger("change"),d.inline?this._updateDatepicker(d):(this._hideDatepicker(),this._lastInput=d.input[0],typeof d.input[0]!="object"&&d.input.focus(),this._lastInput=null)},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),d=this._getDate(a),e=this.formatDate(c,d,this._getFormatConfig(a));$(b).each(function(){$(this).val(e)})}},noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},iso8601Week:function(a){var b=new Date(a.getTime());b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?b.toString():b+"";if(b=="")return null;var d=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;d=typeof d!="string"?d:(new Date).getFullYear()%100+parseInt(d,10);var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=-1,j=-1,k=-1,l=-1,m=!1,n=function(b){var c=s+1<a.length&&a.charAt(s+1)==b;return c&&s++,c},o=function(a){var c=n(a),d=a=="@"?14:a=="!"?20:a=="y"&&c?4:a=="o"?3:2,e=new RegExp("^\\d{1,"+d+"}"),f=b.substring(r).match(e);if(!f)throw"Missing number at position "+r;return r+=f[0].length,parseInt(f[0],10)},p=function(a,c,d){var e=$.map(n(a)?d:c,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)}),f=-1;$.each(e,function(a,c){var d=c[1];if(b.substr(r,d.length).toLowerCase()==d.toLowerCase())return f=c[0],r+=d.length,!1});if(f!=-1)return f+1;throw"Unknown name at position "+r},q=function(){if(b.charAt(r)!=a.charAt(s))throw"Unexpected literal at position "+r;r++},r=0;for(var s=0;s<a.length;s++)if(m)a.charAt(s)=="'"&&!n("'")?m=!1:q();else switch(a.charAt(s)){case"d":k=o("d");break;case"D":p("D",e,f);break;case"o":l=o("o");break;case"m":j=o("m");break;case"M":j=p("M",g,h);break;case"y":i=o("y");break;case"@":var t=new Date(o("@"));i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"!":var t=new Date((o("!")-this._ticksTo1970)/1e4);i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"'":n("'")?q():m=!0;break;default:q()}if(r<b.length)throw"Extra/unparsed characters found in date: "+b.substring(r);i==-1?i=(new Date).getFullYear():i<100&&(i+=(new Date).getFullYear()-(new Date).getFullYear()%100+(i<=d?0:-100));if(l>-1){j=1,k=l;do{var u=this._getDaysInMonth(i,j-1);if(k<=u)break;j++,k-=u}while(!0)}var t=this._daylightSavingAdjust(new Date(i,j-1,k));if(t.getFullYear()!=i||t.getMonth()+1!=j||t.getDate()!=k)throw"Invalid date";return t},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,e=(c?c.dayNames:null)||this._defaults.dayNames,f=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,h=function(b){var c=m+1<a.length&&a.charAt(m+1)==b;return c&&m++,c},i=function(a,b,c){var d=""+b;if(h(a))while(d.length<c)d="0"+d;return d},j=function(a,b,c,d){return h(a)?d[b]:c[b]},k="",l=!1;if(b)for(var m=0;m<a.length;m++)if(l)a.charAt(m)=="'"&&!h("'")?l=!1:k+=a.charAt(m);else switch(a.charAt(m)){case"d":k+=i("d",b.getDate(),2);break;case"D":k+=j("D",b.getDay(),d,e);break;case"o":k+=i("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":k+=i("m",b.getMonth()+1,2);break;case"M":k+=j("M",b.getMonth(),f,g);break;case"y":k+=h("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":k+=b.getTime();break;case"!":k+=b.getTime()*1e4+this._ticksTo1970;break;case"'":h("'")?k+="'":l=!0;break;default:k+=a.charAt(m)}return k},_possibleChars:function(a){var b="",c=!1,d=function(b){var c=e+1<a.length&&a.charAt(e+1)==b;return c&&e++,c};for(var e=0;e<a.length;e++)if(c)a.charAt(e)=="'"&&!d("'")?c=!1:b+=a.charAt(e);else switch(a.charAt(e)){case"d":case"m":case"y":case"@":b+="0123456789";break;case"D":case"M":return null;case"'":d("'")?b+="'":c=!0;break;default:b+=a.charAt(e)}return b},_get:function(a,b){return a.settings[b]!==undefined?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()==a.lastVal)return;var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e,f;e=f=this._getDefaultDate(a);var g=this._getFormatConfig(a);try{e=this.parseDate(c,d,g)||f}catch(h){this.log(h),d=b?"":d}a.selectedDay=e.getDate(),a.drawMonth=a.selectedMonth=e.getMonth(),a.drawYear=a.selectedYear=e.getFullYear(),a.currentDay=d?e.getDate():0,a.currentMonth=d?e.getMonth():0,a.currentYear=d?e.getFullYear():0,this._adjustInstDate(a)},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var d=function(a){var b=new Date;return b.setDate(b.getDate()+a),b},e=function(b){try{return $.datepicker.parseDate($.datepicker._get(a,"dateFormat"),b,$.datepicker._getFormatConfig(a))}catch(c){}var d=(b.toLowerCase().match(/^c/)?$.datepicker._getDate(a):null)||new Date,e=d.getFullYear(),f=d.getMonth(),g=d.getDate(),h=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,i=h.exec(b);while(i){switch(i[2]||"d"){case"d":case"D":g+=parseInt(i[1],10);break;case"w":case"W":g+=parseInt(i[1],10)*7;break;case"m":case"M":f+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f));break;case"y":case"Y":e+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f))}i=h.exec(b)}return new Date(e,f,g)},f=b==null||b===""?c:typeof b=="string"?e(b):typeof b=="number"?isNaN(b)?c:d(b):new Date(b.getTime());return f=f&&f.toString()=="Invalid Date"?c:f,f&&(f.setHours(0),f.setMinutes(0),f.setSeconds(0),f.setMilliseconds(0)),this._daylightSavingAdjust(f)},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),(e!=a.selectedMonth||f!=a.selectedYear)&&!c&&this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),d=this._get(a,"showButtonPanel"),e=this._get(a,"hideIfNoPrevNext"),f=this._get(a,"navigationAsDateFormat"),g=this._getNumberOfMonths(a),h=this._get(a,"showCurrentAtPos"),i=this._get(a,"stepMonths"),j=g[0]!=1||g[1]!=1,k=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),l=this._getMinMaxDate(a,"min"),m=this._getMinMaxDate(a,"max"),n=a.drawMonth-h,o=a.drawYear;n<0&&(n+=12,o--);if(m){var p=this._daylightSavingAdjust(new Date(m.getFullYear(),m.getMonth()-g[0]*g[1]+1,m.getDate()));p=l&&p<l?l:p;while(this._daylightSavingAdjust(new Date(o,n,1))>p)n--,n<0&&(n=11,o--)}a.drawMonth=n,a.drawYear=o;var q=this._get(a,"prevText");q=f?this.formatDate(q,this._daylightSavingAdjust(new Date(o,n-i,1)),this._getFormatConfig(a)):q;var r=this._canAdjustMonth(a,-1,o,n)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+a.id+"', -"+i+", 'M');\""+' title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>":e?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>",s=this._get(a,"nextText");s=f?this.formatDate(s,this._daylightSavingAdjust(new Date(o,n+i,1)),this._getFormatConfig(a)):s;var t=this._canAdjustMonth(a,1,o,n)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+a.id+"', +"+i+", 'M');\""+' title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":e?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>",u=this._get(a,"currentText"),v=this._get(a,"gotoCurrent")&&a.currentDay?k:b;u=f?this.formatDate(u,v,this._getFormatConfig(a)):u;var w=a.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+dpuuid+'.datepicker._hideDatepicker();">'+this._get(a,"closeText")+"</button>",x=d?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?w:"")+(this._isInRange(a,v)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._gotoToday('#"+a.id+"');\""+">"+u+"</button>":"")+(c?"":w)+"</div>":"",y=parseInt(this._get(a,"firstDay"),10);y=isNaN(y)?0:y;var z=this._get(a,"showWeek"),A=this._get(a,"dayNames"),B=this._get(a,"dayNamesShort"),C=this._get(a,"dayNamesMin"),D=this._get(a,"monthNames"),E=this._get(a,"monthNamesShort"),F=this._get(a,"beforeShowDay"),G=this._get(a,"showOtherMonths"),H=this._get(a,"selectOtherMonths"),I=this._get(a,"calculateWeek")||this.iso8601Week,J=this._getDefaultDate(a),K="";for(var L=0;L<g[0];L++){var M="";this.maxRows=4;for(var N=0;N<g[1];N++){var O=this._daylightSavingAdjust(new Date(o,n,a.selectedDay)),P=" ui-corner-all",Q="";if(j){Q+='<div class="ui-datepicker-group';if(g[1]>1)switch(N){case 0:Q+=" ui-datepicker-group-first",P=" ui-corner-"+(c?"right":"left");break;case g[1]-1:Q+=" ui-datepicker-group-last",P=" ui-corner-"+(c?"left":"right");break;default:Q+=" ui-datepicker-group-middle",P=""}Q+='">'}Q+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+P+'">'+(/all|left/.test(P)&&L==0?c?t:r:"")+(/all|right/.test(P)&&L==0?c?r:t:"")+this._generateMonthYearHeader(a,n,o,l,m,L>0||N>0,D,E)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";var R=z?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(var S=0;S<7;S++){var T=(S+y)%7;R+="<th"+((S+y+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+A[T]+'">'+C[T]+"</span></th>"}Q+=R+"</tr></thead><tbody>";var U=this._getDaysInMonth(o,n);o==a.selectedYear&&n==a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,U));var V=(this._getFirstDayOfMonth(o,n)-y+7)%7,W=Math.ceil((V+U)/7),X=j?this.maxRows>W?this.maxRows:W:W;this.maxRows=X;var Y=this._daylightSavingAdjust(new Date(o,n,1-V));for(var Z=0;Z<X;Z++){Q+="<tr>";var _=z?'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(Y)+"</td>":"";for(var S=0;S<7;S++){var ba=F?F.apply(a.input?a.input[0]:null,[Y]):[!0,""],bb=Y.getMonth()!=n,bc=bb&&!H||!ba[0]||l&&Y<l||m&&Y>m;_+='<td class="'+((S+y+6)%7>=5?" ui-datepicker-week-end":"")+(bb?" ui-datepicker-other-month":"")+(Y.getTime()==O.getTime()&&n==a.selectedMonth&&a._keyEvent||J.getTime()==Y.getTime()&&J.getTime()==O.getTime()?" "+this._dayOverClass:"")+(bc?" "+this._unselectableClass+" ui-state-disabled":"")+(bb&&!G?"":" "+ba[1]+(Y.getTime()==k.getTime()?" "+this._currentClass:"")+(Y.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!bb||G)&&ba[2]?' title="'+ba[2]+'"':"")+(bc?"":' onclick="DP_jQuery_'+dpuuid+".datepicker._selectDay('#"+a.id+"',"+Y.getMonth()+","+Y.getFullYear()+', this);return false;"')+">"+(bb&&!G?"&#xa0;":bc?'<span class="ui-state-default">'+Y.getDate()+"</span>":'<a class="ui-state-default'+(Y.getTime()==b.getTime()?" ui-state-highlight":"")+(Y.getTime()==k.getTime()?" ui-state-active":"")+(bb?" ui-priority-secondary":"")+'" href="#">'+Y.getDate()+"</a>")+"</td>",Y.setDate(Y.getDate()+1),Y=this._daylightSavingAdjust(Y)}Q+=_+"</tr>"}n++,n>11&&(n=0,o++),Q+="</tbody></table>"+(j?"</div>"+(g[0]>0&&N==g[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),M+=Q}K+=M}return K+=x+($.browser.msie&&parseInt($.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),a._keyEvent=!1,K},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i=this._get(a,"changeMonth"),j=this._get(a,"changeYear"),k=this._get(a,"showMonthAfterYear"),l='<div class="ui-datepicker-title">',m="";if(f||!i)m+='<span class="ui-datepicker-month">'+g[b]+"</span>";else{var n=d&&d.getFullYear()==c,o=e&&e.getFullYear()==c;m+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" "+">";for(var p=0;p<12;p++)(!n||p>=d.getMonth())&&(!o||p<=e.getMonth())&&(m+='<option value="'+p+'"'+(p==b?' selected="selected"':"")+">"+h[p]+"</option>");m+="</select>"}k||(l+=m+(f||!i||!j?"&#xa0;":""));if(!a.yearshtml){a.yearshtml="";if(f||!j)l+='<span class="ui-datepicker-year">'+c+"</span>";else{var q=this._get(a,"yearRange").split(":"),r=(new Date).getFullYear(),s=function(a){var b=a.match(/c[+-].*/)?c+parseInt(a.substring(1),10):a.match(/[+-].*/)?r+parseInt(a,10):parseInt(a,10);return isNaN(b)?r:b},t=s(q[0]),u=Math.max(t,s(q[1]||""));t=d?Math.max(t,d.getFullYear()):t,u=e?Math.min(u,e.getFullYear()):u,a.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+a.id+"', this, 'Y');\" "+">";for(;t<=u;t++)a.yearshtml+='<option value="'+t+'"'+(t==c?' selected="selected"':"")+">"+t+"</option>";a.yearshtml+="</select>",l+=a.yearshtml,a.yearshtml=null}}return l+=this._get(a,"yearSuffix"),k&&(l+=(f||!i||!j?"&#xa0;":"")+m),l+="</div>",l},_adjustInstDate:function(a,b,c){var d=a.drawYear+(c=="Y"?b:0),e=a.drawMonth+(c=="M"?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+(c=="D"?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),(c=="M"||c=="Y")&&this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;return e=d&&e>d?d:e,e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return b==null?[1,1]:typeof b=="number"?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));return b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!d||b.getTime()<=d.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),$.fn.datepicker=function(a){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv),$.datepicker.initialized=!0);var b=Array.prototype.slice.call(arguments,1);return typeof a!="string"||a!="isDisabled"&&a!="getDate"&&a!="widget"?a=="option"&&arguments.length==2&&typeof arguments[1]=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b)):this.each(function(){typeof a=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this].concat(b)):$.datepicker._attachDatepicker(this,a)}):$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b))},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.8.20",window["DP_jQuery_"+dpuuid]=$})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.progressbar.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()}),this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this.oldValue=this._value(),this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove(),a.Widget.prototype.destroy.apply(this,arguments)},value:function(a){return a===b?this._value():(this._setOption("value",a),this)},_setOption:function(b,c){b==="value"&&(this.options.value=c,this._refreshValue(),this._value()===this.options.max&&this._trigger("complete")),a.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var a=this.options.value;return typeof a!="number"&&(a=0),Math.min(this.options.max,Math.max(this.min,a))},_percentage:function(){return 100*this._value()/this.options.max},_refreshValue:function(){var a=this.value(),b=this._percentage();this.oldValue!==a&&(this.oldValue=a,this._trigger("change")),this.valueDiv.toggle(a>this.min).toggleClass("ui-corner-right",a===this.options.max).width(b.toFixed(0)+"%"),this.element.attr("aria-valuenow",a)}}),a.extend(a.ui.progressbar,{version:"1.8.20"})})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
jQuery.effects||function(a,b){function c(b){var c;return b&&b.constructor==Array&&b.length==3?b:(c=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b))?[parseInt(c[1],10),parseInt(c[2],10),parseInt(c[3],10)]:(c=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b))?[parseFloat(c[1])*2.55,parseFloat(c[2])*2.55,parseFloat(c[3])*2.55]:(c=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b))?[parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16)]:(c=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b))?[parseInt(c[1]+c[1],16),parseInt(c[2]+c[2],16),parseInt(c[3]+c[3],16)]:(c=/rgba\(0, 0, 0, 0\)/.exec(b))?e.transparent:e[a.trim(b).toLowerCase()]}function d(b,d){var e;do{e=a.curCSS(b,d);if(e!=""&&e!="transparent"||a.nodeName(b,"body"))break;d="backgroundColor"}while(b=b.parentNode);return c(e)}function h(){var a=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,b={},c,d;if(a&&a.length&&a[0]&&a[a[0]]){var e=a.length;while(e--)c=a[e],typeof a[c]=="string"&&(d=c.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),b[d]=a[c])}else for(c in a)typeof a[c]=="string"&&(b[c]=a[c]);return b}function i(b){var c,d;for(c in b)d=b[c],(d==null||a.isFunction(d)||c in g||/scrollbar/.test(c)||!/color/i.test(c)&&isNaN(parseFloat(d)))&&delete b[c];return b}function j(a,b){var c={_:0},d;for(d in b)a[d]!=b[d]&&(c[d]=b[d]);return c}function k(b,c,d,e){typeof b=="object"&&(e=c,d=null,c=b,b=c.effect),a.isFunction(c)&&(e=c,d=null,c={});if(typeof c=="number"||a.fx.speeds[c])e=d,d=c,c={};return a.isFunction(d)&&(e=d,d=null),c=c||{},d=d||c.duration,d=a.fx.off?0:typeof d=="number"?d:d in a.fx.speeds?a.fx.speeds[d]:a.fx.speeds._default,e=e||c.complete,[b,c,d,e]}function l(b){return!b||typeof b=="number"||a.fx.speeds[b]?!0:typeof b=="string"&&!a.effects[b]?!0:!1}a.effects={},a.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(b,e){a.fx.step[e]=function(a){a.colorInit||(a.start=d(a.elem,e),a.end=c(a.end),a.colorInit=!0),a.elem.style[e]="rgb("+Math.max(Math.min(parseInt(a.pos*(a.end[0]-a.start[0])+a.start[0],10),255),0)+","+Math.max(Math.min(parseInt(a.pos*(a.end[1]-a.start[1])+a.start[1],10),255),0)+","+Math.max(Math.min(parseInt(a.pos*(a.end[2]-a.start[2])+a.start[2],10),255),0)+")"}});var e={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},f=["add","remove","toggle"],g={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.effects.animateClass=function(b,c,d,e){return a.isFunction(d)&&(e=d,d=null),this.queue(function(){var g=a(this),k=g.attr("style")||" ",l=i(h.call(this)),m,n=g.attr("class")||"";a.each(f,function(a,c){b[c]&&g[c+"Class"](b[c])}),m=i(h.call(this)),g.attr("class",n),g.animate(j(l,m),{queue:!1,duration:c,easing:d,complete:function(){a.each(f,function(a,c){b[c]&&g[c+"Class"](b[c])}),typeof g.attr("style")=="object"?(g.attr("style").cssText="",g.attr("style").cssText=k):g.attr("style",k),e&&e.apply(this,arguments),a.dequeue(this)}})})},a.fn.extend({_addClass:a.fn.addClass,addClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{add:b},c,d,e]):this._addClass(b)},_removeClass:a.fn.removeClass,removeClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{remove:b},c,d,e]):this._removeClass(b)},_toggleClass:a.fn.toggleClass,toggleClass:function(c,d,e,f,g){return typeof d=="boolean"||d===b?e?a.effects.animateClass.apply(this,[d?{add:c}:{remove:c},e,f,g]):this._toggleClass(c,d):a.effects.animateClass.apply(this,[{toggle:c},d,e,f])},switchClass:function(b,c,d,e,f){return a.effects.animateClass.apply(this,[{add:c,remove:b},d,e,f])}}),a.extend(a.effects,{version:"1.8.20",save:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.data("ec.storage."+b[c],a[0].style[b[c]])},restore:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.css(b[c],a.data("ec.storage."+b[c]))},setMode:function(a,b){return b=="toggle"&&(b=a.is(":hidden")?"show":"hide"),b},getBaseline:function(a,b){var c,d;switch(a[0]){case"top":c=0;break;case"middle":c=.5;break;case"bottom":c=1;break;default:c=a[0]/b.height}switch(a[1]){case"left":d=0;break;case"center":d=.5;break;case"right":d=1;break;default:d=a[1]/b.width}return{x:d,y:c}},createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper"))return b.parent();var c={width:b.outerWidth(!0),height:b.outerHeight(!0),"float":b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e=document.activeElement;return b.wrap(d),(b[0]===e||a.contains(b[0],e))&&a(e).focus(),d=b.parent(),b.css("position")=="static"?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]="auto")}),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),d.css(c).show()},removeWrapper:function(b){var c,d=document.activeElement;return b.parent().is(".ui-effects-wrapper")?(c=b.parent().replaceWith(b),(b[0]===d||a.contains(b[0],d))&&a(d).focus(),c):b},setTransition:function(b,c,d,e){return e=e||{},a.each(c,function(a,c){var f=b.cssUnit(c);f[0]>0&&(e[c]=f[0]*d+f[1])}),e}}),a.fn.extend({effect:function(b,c,d,e){var f=k.apply(this,arguments),g={options:f[1],duration:f[2],callback:f[3]},h=g.options.mode,i=a.effects[b];return a.fx.off||!i?h?this[h](g.duration,g.callback):this.each(function(){g.callback&&g.callback.call(this)}):i.call(this,g)},_show:a.fn.show,show:function(a){if(l(a))return this._show.apply(this,arguments);var b=k.apply(this,arguments);return b[1].mode="show",this.effect.apply(this,b)},_hide:a.fn.hide,hide:function(a){if(l(a))return this._hide.apply(this,arguments);var b=k.apply(this,arguments);return b[1].mode="hide",this.effect.apply(this,b)},__toggle:a.fn.toggle,toggle:function(b){if(l(b)||typeof b=="boolean"||a.isFunction(b))return this.__toggle.apply(this,arguments);var c=k.apply(this,arguments);return c[1].mode="toggle",this.effect.apply(this,c)},cssUnit:function(b){var c=this.css(b),d=[];return a.each(["em","px","%","pt"],function(a,b){c.indexOf(b)>0&&(d=[parseFloat(c),b])}),d}}),a.easing.jswing=a.easing.swing,a.extend(a.easing,{def:"easeOutQuad",swing:function(b,c,d,e,f){return a.easing[a.easing.def](b,c,d,e,f)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return b==0?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;g||(g=e*.3*1.5);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return b<1?-0.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,c,d,e,f,g){return g==b&&(g=1.70158),e*(c/=f)*c*((g+1)*c-g)+d},easeOutBack:function(a,c,d,e,f,g){return g==b&&(g=1.70158),e*((c=c/f-1)*c*((g+1)*c+g)+1)+d},easeInOutBack:function(a,c,d,e,f,g){return g==b&&(g=1.70158),(c/=f/2)<1?e/2*c*c*(((g*=1.525)+1)*c-g)+d:e/2*((c-=2)*c*(((g*=1.525)+1)*c+g)+2)+d},easeInBounce:function(b,c,d,e,f){return e-a.easing.easeOutBounce(b,f-c,0,e,f)+d},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(b,c,d,e,f){return c<f/2?a.easing.easeInBounce(b,c*2,0,e,f)*.5+d:a.easing.easeOutBounce(b,c*2-f,0,e,f)*.5+e*.5+d}})}(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.slide.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.slide=function(b){return this.queue(function(){var c=a(this),d=["position","top","bottom","left","right"],e=a.effects.setMode(c,b.options.mode||"show"),f=b.options.direction||"left";a.effects.save(c,d),c.show(),a.effects.createWrapper(c).css({overflow:"hidden"});var g=f=="up"||f=="down"?"top":"left",h=f=="up"||f=="left"?"pos":"neg",i=b.options.distance||(g=="top"?c.outerHeight({margin:!0}):c.outerWidth({margin:!0}));e=="show"&&c.css(g,h=="pos"?isNaN(i)?"-"+i:-i:i);var j={};j[g]=(e=="show"?h=="pos"?"+=":"-=":h=="pos"?"-=":"+=")+i,c.animate(j,{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){e=="hide"&&c.hide(),a.effects.restore(c,d),a.effects.removeWrapper(c),b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.transfer.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.transfer=function(b){return this.queue(function(){var c=a(this),d=a(b.options.to),e=d.offset(),f={top:e.top,left:e.left,height:d.innerHeight(),width:d.innerWidth()},g=c.offset(),h=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.options.className).css({top:g.top,left:g.left,height:c.innerHeight(),width:c.innerWidth(),position:"absolute"}).animate(f,b.duration,b.options.easing,function(){h.remove(),b.callback&&b.callback.apply(c[0],arguments),c.dequeue()})})}})(jQuery);;
/*jslint white: false, onevar: false, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true, sub: true, nomen: false */

/**
 * This file contains code that may be under the following license:
 *
 * SGI FREE SOFTWARE LICENSE B (Version 2.0, Sept. 18, 2008)
 * Copyright (C) 1991-2000 Silicon Graphics, Inc. All Rights Reserved.
 *
 * See http://oss.sgi.com/projects/FreeB/ for more information.
 *
 * All code in this file which is NOT under the SGI FREE SOFTWARE LICENSE B
 * is free and unencumbered software released into the public domain.
 *
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 *
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/** @type {Object} */

var GLU = {};

(function($) {
    /**
     * Unproject a screen point.
     *
     * @param {number} winX the window point for the x value.
     * @param {number} winY the window point for the y value.
     * @param {number} winZ the window point for the z value.
     * @param {Array.<number>} model the model-view matrix.
     * @param {Array.<number>} proj the projection matrix.
     * @param {Array.<number>} view the viewport coordinate array.
     * @param {Array.<number>} objPos the model point result.
     * @return {boolean} true if the unproject operation was successful, false otherwise.
     */
    $.unProject = function(winX, winY, winZ, model, proj, view, objPos) {

        /** @type {Array.<number>} */
        var inp = [
            winX,
            winY,
            winZ,
            1.0
        ];

        /** @type {Array.<number>} */
        var finalMatrix = [];

        $.multMatrices(model, proj, finalMatrix);
        if (!$.invertMatrix(finalMatrix, finalMatrix)) {
            return (false);
        }

        /* Map x and y from window coordinates */
        inp[0] = (inp[0] - view[0]) / view[2];
        inp[1] = (inp[1] - view[1]) / view[3];

        /* Map to range -1 to 1 */
        inp[0] = inp[0] * 2 - 1;
        inp[1] = inp[1] * 2 - 1;
        inp[2] = inp[2] * 2 - 1;

        /** @type {Array.<number>} */
        var out = [];

        $.multMatrixVec(finalMatrix, inp, out);

        if (out[3] === 0.0) {
            return false;
        }

        out[0] /= out[3];
        out[1] /= out[3];
        out[2] /= out[3];

        objPos[0] = out[0];
        objPos[1] = out[1];
        objPos[2] = out[2];

        return true;
    };

    /**
     * Project a screen point.
     *
     * @param {number} objX the object point for the x value.
     * @param {number} objY the object point for the y value.
     * @param {number} objZ the object point for the z value.
     * @param {Array.<number>} model the model-view matrix.
     * @param {Array.<number>} proj the projection matrix.
     * @param {Array.<number>} view the viewport coordinate array.
     * @param {Array.<number>} winPos the window point result.
     */
    $.project = function(objX, objY, objZ, model, proj, view, winPos) {

        /** @type {Array.<number>} */
        var inp = [
            objX,
            objY,
            objZ,
            1.0
        ];

        /** @type {Array.<number>} */
        var finalMatrix = [];

        $.multMatrices(model, proj, finalMatrix);

        /** @type {Array.<number>} */
        var out = [];

        $.multMatrixVec(finalMatrix, inp, out);

        /* Map to range 0 to 1 */
        out[0] = (out[0] + 1) / 2;
        out[1] = (out[1] + 1) / 2;
        out[2] = (out[2] + 1) / 2;

        /* Map x and y to window coordinates */
        out[0] = out[0] * view[2] + view[0];
        out[1] = out[1] * view[3] + view[1];

        winPos[0] = out[0];
        winPos[1] = out[1];
        winPos[2] = out[2];
    };

    /**
     * Multiply the matrix by the specified vector.
     *
     * @param {Array.<number>} matrix the matrix.
     * @param {Array.<number>} inp the vector.
     * @param {Array.<number>} out the output.
     */
    $.multMatrixVec = function(matrix, inp, out) {
        for (var i = 0; i < 4; i = i + 1) {
            out[i] =
                inp[0] * matrix[0 * 4 + i] +
                inp[1] * matrix[1 * 4 + i] +
                inp[2] * matrix[2 * 4 + i] +
                inp[3] * matrix[3 * 4 + i];
        }
    };

    /**
     * Multiply the specified matrices.
     *
     * @param {Array.<number>} a the first matrix.
     * @param {Array.<number>} b the second matrix.
     * @param {Array.<number>} r the result.
     */
    $.multMatrices = function(a, b, r) {
        for (var i = 0; i < 4; i = i + 1) {
            for (var j = 0; j < 4; j = j + 1) {
                r[i * 4 + j] =
                    a[i * 4 + 0] * b[0 * 4 + j] +
                    a[i * 4 + 1] * b[1 * 4 + j] +
                    a[i * 4 + 2] * b[2 * 4 + j] +
                    a[i * 4 + 3] * b[3 * 4 + j];
            }
        }
    };

    /**
     * Invert a matrix.
     *
     * @param {Array.<number>} m the matrix.
     * @param {Array.<number>} invOut the inverted output.
     * @return {boolean} true if successful, false otherwise.
     */
    $.invertMatrix = function(m, invOut) {
        /** @type {Array.<number>} */
        var inv = [];

        inv[0] = m[5] * m[10] * m[15] - m[5] * m[11] * m[14] - m[9] * m[6] * m[15] +
            m[9] * m[7] * m[14] + m[13] * m[6] * m[11] - m[13] * m[7] * m[10];
        inv[4] = -m[4] * m[10] * m[15] + m[4] * m[11] * m[14] + m[8] * m[6] * m[15] -
            m[8] * m[7] * m[14] - m[12] * m[6] * m[11] + m[12] * m[7] * m[10];
        inv[8] = m[4] * m[9] * m[15] - m[4] * m[11] * m[13] - m[8] * m[5] * m[15] +
            m[8] * m[7] * m[13] + m[12] * m[5] * m[11] - m[12] * m[7] * m[9];
        inv[12] = -m[4] * m[9] * m[14] + m[4] * m[10] * m[13] + m[8] * m[5] * m[14] -
            m[8] * m[6] * m[13] - m[12] * m[5] * m[10] + m[12] * m[6] * m[9];
        inv[1] = -m[1] * m[10] * m[15] + m[1] * m[11] * m[14] + m[9] * m[2] * m[15] -
            m[9] * m[3] * m[14] - m[13] * m[2] * m[11] + m[13] * m[3] * m[10];
        inv[5] = m[0] * m[10] * m[15] - m[0] * m[11] * m[14] - m[8] * m[2] * m[15] +
            m[8] * m[3] * m[14] + m[12] * m[2] * m[11] - m[12] * m[3] * m[10];
        inv[9] = -m[0] * m[9] * m[15] + m[0] * m[11] * m[13] + m[8] * m[1] * m[15] -
            m[8] * m[3] * m[13] - m[12] * m[1] * m[11] + m[12] * m[3] * m[9];
        inv[13] = m[0] * m[9] * m[14] - m[0] * m[10] * m[13] - m[8] * m[1] * m[14] +
            m[8] * m[2] * m[13] + m[12] * m[1] * m[10] - m[12] * m[2] * m[9];
        inv[2] = m[1] * m[6] * m[15] - m[1] * m[7] * m[14] - m[5] * m[2] * m[15] +
            m[5] * m[3] * m[14] + m[13] * m[2] * m[7] - m[13] * m[3] * m[6];
        inv[6] = -m[0] * m[6] * m[15] + m[0] * m[7] * m[14] + m[4] * m[2] * m[15] -
            m[4] * m[3] * m[14] - m[12] * m[2] * m[7] + m[12] * m[3] * m[6];
        inv[10] = m[0] * m[5] * m[15] - m[0] * m[7] * m[13] - m[4] * m[1] * m[15] +
            m[4] * m[3] * m[13] + m[12] * m[1] * m[7] - m[12] * m[3] * m[5];
        inv[14] = -m[0] * m[5] * m[14] + m[0] * m[6] * m[13] + m[4] * m[1] * m[14] -
            m[4] * m[2] * m[13] - m[12] * m[1] * m[6] + m[12] * m[2] * m[5];
        inv[3] = -m[1] * m[6] * m[11] + m[1] * m[7] * m[10] + m[5] * m[2] * m[11] -
            m[5] * m[3] * m[10] - m[9] * m[2] * m[7] + m[9] * m[3] * m[6];
        inv[7] = m[0] * m[6] * m[11] - m[0] * m[7] * m[10] - m[4] * m[2] * m[11] +
            m[4] * m[3] * m[10] + m[8] * m[2] * m[7] - m[8] * m[3] * m[6];
        inv[11] = -m[0] * m[5] * m[11] + m[0] * m[7] * m[9] + m[4] * m[1] * m[11] -
            m[4] * m[3] * m[9] - m[8] * m[1] * m[7] + m[8] * m[3] * m[5];
        inv[15] = m[0] * m[5] * m[10] - m[0] * m[6] * m[9] - m[4] * m[1] * m[10] +
            m[4] * m[2] * m[9] + m[8] * m[1] * m[6] - m[8] * m[2] * m[5];

        /** @type {number} */
        var det = m[0] * inv[0] + m[1] * inv[4] + m[2] * inv[8] + m[3] * inv[12];

        if (det === 0) {
            return false;
        }

        det = 1.0 / det;

        for (var i = 0; i < 16; i = i + 1) {
            invOut[i] = inv[i] * det;
        }

        return true;
    };

}(GLU));

/* EOF */
;
/**
* Copyright 2012 Infogosoft
*
* This file is part of jsdicom.
*
* jsdicom is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
*
* jsdicom is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License along with jsdicom. If not, see http://www.gnu.org/licenses/.
*/

var timer_event;
function log(s)
{
    var logEntry = $("<li>").html(s);
    $("#loglist").append(logEntry);
}

function log_element(elem_repr) {
    this.i = 0;
    this.i++;
    var elem_div = $("<div>").html(elem_repr);
    if(this.i % 2 == 0)
        elem_div.addClass("even");            
    $("#dicomheader").append(elem_div);
}


function DcmApp(viewareaid) {
    this.viewareaid = viewareaid;
    this.painter;

    this.last_mouse_canvas_pos = [NaN,NaN];
    this.last_mouse_image_pos = [NaN,NaN];
    this.mouse_down = false;

    this.series = {};
    this.curr_series_uid = "";
    this.files = []; // points to files-array in current series
    this.files_loaded = 0;
    this.curr_file_idx = 0;
    // tools
    this.curr_tool = new WindowLevelTool(this);
    this.curr_clut_r = ClutManager.r('Plain');
    this.curr_clut_g = ClutManager.g('Plain');
    this.curr_clut_b = ClutManager.b('Plain');
}

DcmApp.prototype.load_files = function(files)
{
    var app = this;
    this.curr_file_idx = 0;
    this.series = {};
    this.files = [];
    this.files_loaded = 0;
    for(var i=0;i<files.length;++i) {
        this.load_file(files[i], i, files.length);
    }
    $("#slider").slider({
        value: 0,
        max: files.length-1,
        slide: function(ui, event) {
            app.curr_file_idx = event.value; //$(this).slider('value');
            app.curr_tool.set_file(app.files[app.curr_file_idx]);
            app.draw_image();
        }
    });
}

DcmApp.prototype.load_urllist_from_url = function(url)
{
    var app = this;
    this.curr_file_idx = 0;
    this.files_loaded = 0;
    var files = [];

    $.ajax({
        async: false,
        dataType: "json",
        url: url,
        success: function(r){
            files = r;
        }
    });

    for(var i=0;i<files.length;++i) {
        this.load_url(files[i].href, i, files.length);
    }

    $("#slider").slider({
        value: 0,
        max: files.length-1,
        slide: function(ui, event) {
            app.curr_file_idx = event.value; //$(this).slider('value');
            app.curr_tool.set_file(app.files[app.curr_file_idx]);
            app.draw_image();
        }
    });
}

DcmApp.prototype.load_arraybuffer = function(abuf, index, file_count) {
    var app = this;
    var buffer = new Uint8Array(abuf);
    parser = new DicomParser(buffer);
    var file = parser.parse_file();
    if (file == undefined) {
        app.files[index] = undefined;
        return;
    }

    if (file.Modality == "CT" || file.Modality == "PT" || file.Modality == "MR") {
        imageOrientation = file.ImageOrientationPatient;
        file.imageOrientationRow = imageOrientation.slice(0,3);
        file.imageOrientationColumn = imageOrientation.slice(3,6);
        
        app.organize_file(file);
    } else if(file.modality == "US") {
        file.RescaleIntercept = 0;
        file.RescaleSlope = 1;
        app.files[index] = file;
        app.organize_file(file);
    } else {
        file.RescaleIntercept = 0;
        file.RescaleSlope = 1;
        app.organize_file(file);
        app.files[index] = file;
    }

    if(index == 0) {
        app.curr_series_uid = file.SeriesInstanceUID;
        app.files = app.series[app.curr_series_uid].files;
        app.draw_image();
    }
    ++app.files_loaded;
    if(app.files_loaded == file_count) {
        // All files are loaded
        app.setup_series_selection();
    }
}


DcmApp.prototype.load_file = function(file, index, file_count) {
    var reader = new FileReader();

    // Closure to bind app, 'this' will be reader
    reader.onload = (function(app) {
        return function(evt) {
            return app.load_arraybuffer(evt.target.result, index, file_count);
        }
    })(this);
    reader.readAsArrayBuffer(file);
}

DcmApp.prototype.load_url = function(url, index, file_count) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';

    // Closure to bind app, 'this' will be reader
    xhr.onload = (function(app) {
        return function(evt) {
            return app.load_arraybuffer(evt.target.response, index, file_count);
        }
    })(this);
    xhr.send();
}

DcmApp.prototype.organize_file = function(file) {
    var series_uid = file.SeriesInstanceUID;
    var series_desc = file.SeriesDescription;
    if(!this.series.hasOwnProperty(series_uid)) {
        var series = new DcmSeries();
        series.seriesUID = series_uid;
        series.seriesDescription = series_desc;
        this.series[series_uid] = series;
    }
    this.series[series_uid].files.push(file);
}


DcmApp.prototype.setup_series_selection = function() {
    fill_series_selection(this.series, this.curr_series_uid, function(cid) { return new CanvasPainter(cid) });
    this.set_series(this.curr_series_uid);
}

DcmApp.prototype.set_series = function(series_uid) {
    console.log("set_series");
    this.files = this.series[series_uid].files;
    var ww;
    var wl;
    if(this.files[0].WindowCenter !== undefined) {
        wl = this.files[0].WindowCenter;
        ww = this.files[0].WindowWidth;
        if(wl.constructor == Array) {
            app.update_window_preset_list(wl, ww);
            wl = wl[0];
        }
        if(ww.constructor == Array) {
            ww = ww[0];
        }
    } else if(this.files[0].RescaleSlope !== undefined) {
        // TODO check the actual datatype instead of using 65536...
        maxval = this.files[0].RescaleSlope * 65536 +
            this.files[0].RescaleIntercept;
        minval = this.files[0].RescaleIntercept;
        ww = maxval-minval;
        wl = (maxval+minval)/2;
    } else {
        // Min-max VOI
        var windowing = min_max_voi(this.files[0]);
        wl = windowing[0];
        ww = windowing[1];
        if(this.files[0].PixelRepresentation == 0x01) {
            wl -= (0x01 << this.files[0].HighBit);
        }
    }
    this.curr_file_idx = 0;
    this.set_windowing(wl, ww);
    this.draw_image();
}

DcmApp.prototype.set_pan = function(panx, pany) {
    this.painter.set_pan(panx, pany);
    this.last_mouse_image_pos = this.painter.unproject(this.last_mouse_canvas_pos);
    this.refreshmousemoveinfo();
}

DcmApp.prototype.get_pan = function(pan) {
    return this.painter.get_pan();
}

DcmApp.prototype.set_scale = function(scale) {
    this.painter.set_scale(scale);
    this.last_mouse_image_pos = this.painter.unproject(this.last_mouse_canvas_pos);
    this.refreshmousemoveinfo();
}

DcmApp.prototype.get_scale = function(scale) {
    return this.painter.get_scale();
}

DcmApp.prototype.set_windowing = function(wl, ww) {
    return this.painter.set_windowing(wl, ww);
}

DcmApp.prototype.get_windowing = function() {
    return this.painter.get_windowing();
}

DcmApp.prototype.set_slice_idx = function(idx) {
    if(idx < 0 || idx > this.files.length - 1)
        return;
    this.curr_file_idx = idx;
    this.draw_image();
}

DcmApp.prototype.get_slice_idx = function() {
    return this.curr_file_idx;
}

DcmApp.prototype.draw_image = function() {
    var curr_file = this.files[this.curr_file_idx];
    if(curr_file == undefined)
        return;
    $("#size_info").text(curr_file.Rows + "x" + curr_file.Columns);
    $("#sliceidx_info").text(this.curr_file_idx+1 + "/" + this.files.length);
    $("#slider").slider("option", "value", this.curr_file_idx);
    var windowing = this.painter.get_windowing();
    $("#ww_info").text(windowing[1]);
    $("#wl_info").text(windowing[0]);
    this.painter.set_file(curr_file);
    this.painter.set_cluts(this.curr_clut_r, this.curr_clut_g, this.curr_clut_b);
    this.painter.draw_image();
}

DcmApp.prototype.fill_metadata_table = function() {
    if(this.files.length == 0)
        return;
    fill_metadata_table(this.files[this.curr_file_idx]);
}

DcmApp.prototype.activate_tool = function(tool_identifier) { 
    this.curr_tool = new tools[tool_identifier](this);
    this.curr_tool.set_file(this.files[this.curr_file_idx]);
}

DcmApp.prototype.reset_levels = function() { 
    this.painter.reset_pan();
    this.painter.reset_windowing();
    this.painter.reset_scale();
    this.draw_image();
}

DcmApp.prototype.mousemoveinfo = function(canvas_pos, image_pos) {
    if (this.files.length <= this.curr_file_idx) {
        $("#density_info").html("");
        return;
    }

    var curr_file = this.files[this.curr_file_idx];
    if (curr_file == undefined)
        return;

    var rowcol = app.painter.image_coords_to_row_column(image_pos);
    var row = rowcol[0];
    var col = rowcol[1];

    var coord = curr_file.getPatientCoordinate(row,col);
    var ctval = curr_file.getCTValue(row, col);
    if (ctval == undefined) {
        $("#density").html("");
        return;
    }
    
    if (coord != undefined) {
        $("#density_info").html("value(" + coord.map(function(x) {return x.toFixed(1);}) + ") = " + ctval.toFixed(1));
    } else {
        $("#density_info").html("r,c = (" + row + ", " + col + "), val = " + ctval);
    }
}

DcmApp.prototype.set_clut = function(clutname) {
    this.curr_clut_r = ClutManager.r(clutname);
    this.curr_clut_g = ClutManager.g(clutname);
    this.curr_clut_b = ClutManager.b(clutname);
    this.draw_image();
}

DcmApp.prototype.refreshmousemoveinfo = function() {
    this.mousemoveinfo(this.last_mouse_canvas_pos, this.last_mouse_image_pos);
}

DcmApp.prototype.update_window_preset_list = function(wls, wws) { 
    var optgroup = $("#window-presets").find("optgroup")
    optgroup.empty();
    for(var i=0;i<wws.length;++i) {
        var option = $("<option>").val(wls[i] + "," + wws[i]).text(wls[i] + " - " + wws[i]);
        optgroup.append(option);
    }
}

DcmApp.prototype.set_window_preset = function(value) { 
    var spl = value.split(",");
    this.painter.set_windowing(parseFloat(spl[0]), parseFloat(spl[1]));
    this.draw_image();
}

DcmApp.prototype.rel_pos_from_event = function(evt) {
    var rel_pos = [-1, -1];
    rel_pos[0] = Math.floor(evt.pageX - $(this.canvas).offset().left);
    rel_pos[1] = Math.floor(evt.pageY - $(this.canvas).offset().top);
    return rel_pos;
}

DcmApp.prototype._init_painter = function(painter) {
    painter.set_cluts(this.curr_clut_r, this.curr_clut_g, this.curr_clut_b);
    painter.clut_bar_enabled = true;
    painter.init();
}

DcmApp.prototype.init = function() {
    // Create canvas inside this.divid
    this.viewarea = document.getElementById(this.viewareaid);
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'maincanvas'; // TODO: Unique of use of prefix
    this.canvas.width = this.viewarea.clientWidth - 1;
    this.canvas.height = this.viewarea.clientHeight - 1;
    this.canvas.style.border = '1px solid #aaa';
    this.viewarea.appendChild(this.canvas);
    // Create infobox
    create_image_infobox(this.viewarea);

    var painters = [
        function(cid) { return new GLPainter(cid); },
        function(cid) { return new CanvasPainter(cid); },
    ];
    for(var i in painters) {
        var painter = painters[i](this.canvas.id);
        try {
            painter.set_cluts(this.curr_clut_r, this.curr_clut_g, this.curr_clut_b);
            painter.clut_bar_enabled = true;
            painter.init();
            this.painter = painter;
            break;
        } catch(e) {
            console.log(e);
        }
    }
    if(!this.painter) {
        alert("Failed to create WebGL and Canvas context");
        return false;
    }

    var app = this;
    this.canvas.onmousemove = function(evt) {
        app.last_mouse_canvas_pos = app.rel_pos_from_event(evt);
        app.last_mouse_image_pos = app.painter.unproject(app.last_mouse_canvas_pos);
        if (app.curr_tool.mousemove !== undefined)
            app.curr_tool.mousemove(app.last_mouse_canvas_pos, app.last_mouse_image_pos);
        app.refreshmousemoveinfo();
        return false;
    }
    

    this.canvas.onmousedown = function(evt) {
        if (app.curr_tool.mousedown !== undefined) {
            var canvas_pos = app.rel_pos_from_event(evt);
            image_pos = app.painter.unproject(canvas_pos);
            app.curr_tool.mousedown(canvas_pos, image_pos);
        }
        app.mouse_down = true;
        return false;
    }

    this.canvas.onmouseup = function(evt) {
        if (app.curr_tool.mouseup !== undefined) {
            var canvas_pos = app.rel_pos_from_event(evt);
            image_pos = app.painter.unproject(canvas_pos);
            app.curr_tool.mouseup(canvas_pos, image_pos);
        }
        app.mouse_down = false;
        return false;
    }

    this.canvas.onmouseout = function(evt) {
        app.mouse_down = false;
        return false;
    }

    this.canvas.onclick = function(evt) {
        if (app.curr_tool.click !== undefined) {
            var canvas_pos = app.rel_pos_from_event(evt);
            image_pos = app.painter.unproject(canvas_pos);
            app.curr_tool.click(canvas_pos, image_pos);
        }
        return false;
    }

    function scrollListener(evt) {
        if (app.curr_tool.scroll !== undefined)
            app.curr_tool.scroll(evt.detail);
        return false;
    }
    function wheelListener(evt) {
        if (app.curr_tool.scroll !== undefined)
            app.curr_tool.scroll(evt.wheelDeltaY/3);
        return false;
    }
    
    this.canvas.addEventListener('DOMMouseScroll', scrollListener, false);
    this.canvas.addEventListener('mousewheel', wheelListener, false);

    document.getElementById("infobox").onmousemove = this.canvas.onmousemove;
    document.getElementById("infobox").onmousedown = this.canvas.onmousedown;
    document.getElementById("infobox").onmouseup = this.canvas.onmouseup;
    document.getElementById("infobox").onmouseout = this.canvas.onmouseout;
    document.getElementById("infobox").onclick = this.canvas.onclick;
    document.getElementById("infobox").addEventListener('DOMMouseScroll', scrollListener, false);

    window.onresize = function(evt) {
        // Update canvas dimension and redraw
        clearTimeout(timer_event);
        function resize_canvas() {
            var container = document.getElementById('view-area');
            var c = document.getElementById('maincanvas');
            c.width = container.clientWidth - 1;
            c.height = container.clientHeight - 1;
            app.painter.onresize();
        }
        timer_event = setTimeout(resize_canvas, 10);
    }
}
;
/**
* Copyright 2012 Infogosoft
*
* This file is part of jsdicom.
*
* jsdicom is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
*
* jsdicom is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License along with jsdicom. If not, see http://www.gnu.org/licenses/.
*/

function CanvasPainter(canvasid) {
    this.canvas = document.getElementById(canvasid);
    this.tempcanvas = document.createElement("canvas");
    this.ww;
    this.wl;
    this.file;
    this.scale = 1;
    this.pan = [0,0];
}

CanvasPainter.prototype.set_file = function(file) {
    this.file = file;
}

CanvasPainter.prototype.set_cluts = function(clut_r, clut_g, clut_b) {
    this.clut_r = clut_r;
    this.clut_g = clut_g;
    this.clut_b = clut_b;
}

CanvasPainter.prototype.set_windowing = function(wl, ww) {
    this.ww = ww;
    this.wl = wl;
}

CanvasPainter.prototype.reset_windowing = function() {
    this.ww = 200;
    this.wl = 40;
}

CanvasPainter.prototype.set_scale = function(scale) {
    this.scale = scale;
    this.draw_image();
}

CanvasPainter.prototype.get_scale = function(scale) {
    return this.scale;
}

CanvasPainter.prototype.reset_scale = function(scale) {
    this.scale = 1.0;
}

CanvasPainter.prototype.get_windowing = function() {
    return [this.wl, this.ww];
}

CanvasPainter.prototype.set_pan = function(panx, pany) {
    this.pan[0] = panx;
    this.pan[1] = pany;
    this.draw_image();
}

CanvasPainter.prototype.get_pan = function() {
    return this.pan;
}

CanvasPainter.prototype.reset_pan = function() {
    this.pan[0] = 0.0;
    this.pan[1] = 0.0;
}

CanvasPainter.prototype.pan_unit = function() {
    return 1;
}

CanvasPainter.prototype.init = function() {
}

CanvasPainter.prototype.onresize = function() {
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
    this.draw_image();
}

CanvasPainter.prototype.unproject = function(canvas_pos) {
    var canvas_scale = this.canvas.height/this.file.Rows;
    var targetWidth = this.file.Rows*this.scale*canvas_scale;
    var targetHeight = this.file.Columns*this.scale*canvas_scale;
    var xoffset = (this.canvas.width-targetWidth)/2+this.pan[0];
    var yoffset = (this.canvas.height-targetHeight)/2+this.pan[1];
    var imagepos = [0,0];
    var xscale = this.file.Columns/targetWidth;
    var yscale = this.file.Rows/targetHeight;
    imagepos[0] = Math.round((canvas_pos[0]-xoffset)*xscale);
    imagepos[1] = Math.round((canvas_pos[1]-yoffset)*yscale);//*(this.canvas.height/targetHeight);
    return imagepos;
}

CanvasPainter.prototype.image_coords_to_row_column = function(pt) {
    return [pt[0], pt[1]];
}

CanvasPainter.prototype.draw_image = function() {
    if(this.file == undefined)
        return;
    var ctx = this.canvas.getContext("2d");
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.tempcanvas.width = this.file.Rows;
    this.tempcanvas.height = this.file.Columns;
    var tempctx = this.tempcanvas.getContext("2d");

    var imageData = tempctx.createImageData(this.file.Columns, this.file.Rows);
    
    var lower_bound = this.wl - this.ww/2.0;
    var upper_bound = this.wl + this.ww/2.0;
    for(var row=0;row<this.file.Rows;++row) {
        for(var col=0;col<this.file.Columns;++col) {
            var data_idx = (col + row*this.file.Columns);
            var intensity = this.file.PixelData[data_idx];
            intensity = intensity * this.file.RescaleSlope + this.file.RescaleIntercept;
            var intensity = (intensity - lower_bound)/(upper_bound - lower_bound);
            if(intensity < 0.0)
                intensity = 0.0;
            if(intensity > 1.0)
                intensity = 1.0;

            intensity *= 255.0;

            var canvas_idx = (col + row*this.file.Columns)*4;
            var rounded_intensity = Math.round(intensity);
            imageData.data[canvas_idx] = this.clut_r[rounded_intensity];
            imageData.data[canvas_idx+1] = this.clut_g[rounded_intensity];
            imageData.data[canvas_idx+2] = this.clut_b[rounded_intensity];
            imageData.data[canvas_idx+3] = 0xFF;
        }
    }
    tempctx.putImageData(imageData, 0, 0);

    var canvas_scale = this.canvas.height/this.file.Rows;
    var targetWidth = this.file.Rows*this.scale*canvas_scale;
    var targetHeight = this.file.Columns*this.scale*canvas_scale;
    var xoffset = (this.canvas.width-targetWidth)/2;
    var yoffset = (this.canvas.height-targetHeight)/2;
    ctx.drawImage(this.tempcanvas, xoffset+this.pan[0], yoffset+this.pan[1], targetWidth, targetHeight);
}

CanvasPainter.prototype.canvas_scale = function() {
    return this.canvas.height/this.file.Rows;
}

CanvasPainter.prototype.target_height = function(canvas_scale) {
    return this.file.Columns*this.scale*canvas_scale;
}

CanvasPainter.prototype.target_width = function(canvas_scale) {
    return this.file.Columns*this.scale*canvas_scale;
}
;

/**
* Copyright 2012 Infogosoft
*
* This file is part of jsdicom.
*
* jsdicom is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
*
* jsdicom is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License along with jsdicom. If not, see http://www.gnu.org/licenses/.
*/

cluts = {
    "Plain":
        [
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]
        ],
    "Inverse":
        [
            [255, 254, 253, 252, 251, 250, 249, 248, 247, 246, 245, 244, 243, 242, 241, 240, 239, 238, 237, 236, 235, 234, 233, 232, 231, 230, 229, 228, 227, 226, 225, 224, 223, 222, 221, 220, 219, 218, 217, 216, 215, 214, 213, 212, 211, 210, 209, 208, 207, 206, 205, 204, 203, 202, 201, 200, 199, 198, 197, 196, 195, 194, 193, 192, 191, 190, 189, 188, 187, 186, 185, 184, 183, 182, 181, 180, 179, 178, 177, 176, 175, 174, 173, 172, 171, 170, 169, 168, 167, 166, 165, 164, 163, 162, 161, 160, 159, 158, 157, 156, 155, 154, 153, 152, 151, 150, 149, 148, 147, 146, 145, 144, 143, 142, 141, 140, 139, 138, 137, 136, 135, 134, 133, 132, 131, 130, 129, 128, 127, 126, 125, 124, 123, 122, 121, 120, 119, 118, 117, 116, 115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105, 104, 103, 102, 101, 100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
            [255, 254, 253, 252, 251, 250, 249, 248, 247, 246, 245, 244, 243, 242, 241, 240, 239, 238, 237, 236, 235, 234, 233, 232, 231, 230, 229, 228, 227, 226, 225, 224, 223, 222, 221, 220, 219, 218, 217, 216, 215, 214, 213, 212, 211, 210, 209, 208, 207, 206, 205, 204, 203, 202, 201, 200, 199, 198, 197, 196, 195, 194, 193, 192, 191, 190, 189, 188, 187, 186, 185, 184, 183, 182, 181, 180, 179, 178, 177, 176, 175, 174, 173, 172, 171, 170, 169, 168, 167, 166, 165, 164, 163, 162, 161, 160, 159, 158, 157, 156, 155, 154, 153, 152, 151, 150, 149, 148, 147, 146, 145, 144, 143, 142, 141, 140, 139, 138, 137, 136, 135, 134, 133, 132, 131, 130, 129, 128, 127, 126, 125, 124, 123, 122, 121, 120, 119, 118, 117, 116, 115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105, 104, 103, 102, 101, 100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
            [255, 254, 253, 252, 251, 250, 249, 248, 247, 246, 245, 244, 243, 242, 241, 240, 239, 238, 237, 236, 235, 234, 233, 232, 231, 230, 229, 228, 227, 226, 225, 224, 223, 222, 221, 220, 219, 218, 217, 216, 215, 214, 213, 212, 211, 210, 209, 208, 207, 206, 205, 204, 203, 202, 201, 200, 199, 198, 197, 196, 195, 194, 193, 192, 191, 190, 189, 188, 187, 186, 185, 184, 183, 182, 181, 180, 179, 178, 177, 176, 175, 174, 173, 172, 171, 170, 169, 168, 167, 166, 165, 164, 163, 162, 161, 160, 159, 158, 157, 156, 155, 154, 153, 152, 151, 150, 149, 148, 147, 146, 145, 144, 143, 142, 141, 140, 139, 138, 137, 136, 135, 134, 133, 132, 131, 130, 129, 128, 127, 126, 125, 124, 123, 122, 121, 120, 119, 118, 117, 116, 115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105, 104, 103, 102, 101, 100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
        ],
    "Blackbody":
        [
            [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99, 102, 105, 108, 111, 114, 117, 120, 123, 126, 129, 132, 135, 138, 141, 144, 147, 150, 153, 156, 159, 162, 165, 168, 171, 174, 177, 180, 183, 186, 189, 192, 195, 198, 201, 204, 207, 210, 213, 216, 219, 222, 225, 228, 231, 234, 237, 240, 243, 246, 249, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99, 102, 105, 108, 111, 114, 117, 120, 123, 126, 129, 132, 135, 138, 141, 144, 147, 150, 153, 156, 159, 162, 165, 168, 171, 174, 177, 180, 183, 186, 189, 192, 195, 198, 201, 204, 207, 210, 213, 216, 219, 222, 225, 228, 231, 234, 237, 240, 243, 246, 249, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99, 102, 105, 108, 111, 114, 117, 120, 123, 126, 129, 132, 135, 138, 141, 144, 147, 150, 153, 156, 159, 162, 165, 168, 171, 174, 177, 180, 183, 186, 189, 192, 195, 198, 201, 204, 207, 210, 213, 216, 219, 222, 225, 228, 231, 234, 237, 240, 243, 246, 249, 252, 255]
        ],
    "Rainbow":
        [
            [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 62, 60, 58, 56, 54, 52, 50, 48, 46, 44, 42, 40, 38, 36, 34, 32, 30, 28, 26, 24, 22, 20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 148, 152, 156, 160, 164, 168, 172, 176, 180, 184, 188, 192, 196, 200, 204, 208, 212, 216, 220, 224, 228, 232, 236, 240, 244, 248, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160, 168, 176, 184, 192, 200, 208, 216, 224, 232, 240, 248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 253, 251, 249, 247, 245, 243, 241, 239, 237, 235, 233, 231, 229, 227, 225, 223, 221, 219, 217, 215, 213, 211, 209, 207, 205, 203, 201, 199, 197, 195, 193, 192, 189, 186, 183, 180, 177, 174, 171, 168, 165, 162, 159, 156, 153, 150, 147, 144, 141, 138, 135, 132, 129, 126, 123, 120, 117, 114, 111, 108, 105, 102, 99, 96, 93, 90, 87, 84, 81, 78, 75, 72, 69, 66, 63, 60, 57, 54, 51, 48, 45, 42, 39, 36, 33, 30, 27, 24, 21, 18, 15, 12, 9, 6, 3],
            [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 148, 152, 156, 160, 164, 168, 172, 176, 180, 184, 188, 192, 196, 200, 204, 208, 212, 216, 220, 224, 228, 232, 236, 240, 244, 248, 252, 255, 247, 239, 231, 223, 215, 207, 199, 191, 183, 175, 167, 159, 151, 143, 135, 127, 119, 111, 103, 95, 87, 79, 71, 63, 55, 47, 39, 31, 23, 15, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
	    "Rainbow2":
        [
            [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 62, 60, 58, 56, 54, 52, 50, 48, 46, 44, 42, 40, 38, 36, 34, 32, 30, 28, 26, 24, 22, 20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 148, 152, 156, 160, 164, 168, 172, 176, 180, 184, 188, 192, 196, 200, 204, 208, 212, 216, 220, 224, 228, 232, 236, 240, 244, 248, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160, 168, 176, 184, 192, 200, 208, 216, 224, 232, 240, 248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 253, 251, 249, 247, 245, 243, 241, 239, 237, 235, 233, 231, 229, 227, 225, 223, 221, 219, 217, 215, 213, 211, 209, 207, 205, 203, 201, 199, 197, 195, 193, 192, 189, 186, 183, 180, 177, 174, 171, 168, 165, 162, 159, 156, 153, 150, 147, 144, 141, 138, 135, 132, 129, 126, 123, 120, 117, 114, 111, 108, 105, 102, 99, 96, 93, 90, 87, 84, 81, 78, 75, 72, 69, 66, 63, 60, 57, 54, 51, 48, 45, 42, 39, 36, 33, 30, 27, 24, 21, 18, 15, 12, 9, 6, 3],
            [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 148, 152, 156, 160, 164, 168, 172, 176, 180, 184, 188, 192, 196, 200, 204, 208, 212, 216, 220, 224, 228, 232, 236, 240, 244, 248, 252, 255, 247, 239, 231, 223, 215, 207, 199, 191, 183, 175, 167, 159, 151, 143, 135, 127, 119, 111, 103, 95, 87, 79, 71, 63, 55, 47, 39, 31, 23, 15, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
	    "Brown":
        [
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99, 102, 105, 108, 111, 114, 117, 120, 123, 126, 129, 132, 135, 138, 141, 144, 147, 150, 153, 156, 159, 162, 165, 168, 171, 174, 177, 180, 183, 186, 189, 192, 195, 198, 201, 204, 207, 210, 213, 216, 219, 222, 225, 228, 231, 234, 237, 240, 243, 246, 249, 252, 255],
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99, 102, 105, 108, 111, 114, 117, 120, 123, 126, 129, 132, 135, 138, 141, 144, 147, 150, 153, 156, 159, 162, 165, 168, 171, 174, 177, 180, 183, 186, 189, 192, 195, 198, 201, 204, 207, 210, 213, 216, 219, 222, 225, 228, 231, 234, 237, 240, 243, 246, 249, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
           [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99, 102, 105, 108, 111, 114, 117, 120, 123, 126, 129, 132, 135, 138, 141, 144, 147, 150, 153, 156, 159, 162, 165, 168, 171, 174, 177, 180, 183, 186, 189, 192, 195, 198, 201, 204, 207, 210, 213, 216, 219, 222, 225, 228, 231, 234, 237, 240, 243, 246, 249, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
    ]
};



function ClutManager() { }

ClutManager.r = function(clut_identifier) {
    return cluts[clut_identifier][0];
}
ClutManager.g = function(clut_identifier) {
    return cluts[clut_identifier][1];
}
ClutManager.b = function(clut_identifier) {
    return cluts[clut_identifier][2];
}
;
/**
* Copyright 2012 Infogosoft
*
* This file is part of jsdicom.
*
* jsdicom is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
*
* jsdicom is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License along with jsdicom. If not, see http://www.gnu.org/licenses/.
*/


function DcmSeries() {
    this.files = [];
    // Some interesting DicomTags?
    this.seriesUID;
    this.seriesDescription;
}
;
/**
* Copyright 2012 Infogosoft
*
* This file is part of jsdicom.
*
* jsdicom is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
*
* jsdicom is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License along with jsdicom. If not, see http://www.gnu.org/licenses/.
*/
// Embryonic impementation of the "DICOM model of the real-world", see 11_03pu.pdf, 64pp
//
// Remaining issues:
//
//  * How shall the classes be instatiated? (e.g. we want image series
//    as a single object, with attributes from the contituent images...)
// 
//  * How much should be implemented for now? Can we signal unimplementedness?
//
//  * Would we want inheritence? Combining modules -> iods? Probably
//    not inheritance, use module builders instead, and let iods be a
//    set of module builders.



assert = function(cond, message) {
    if(!cond)
        throw message;
}

DicomModel = {}

DicomModel.sopInstanceUIDs = {}

DicomModel.modalities = {
    "CT": DicomModel.CTImage,
    "PT": DicomModel.PETImage,
    "MR": DicomModel.MRImage,
    "RTIMAGE": DicomModel.RTImage,
    "RTPLAN": DicomModel.RTPlan,
    "RTSTRUCT": DicomModel.RTStructureSet,
    "RTDOSE": DicomModel.RTDose,
    "REG": DicomModel.Registration,
}

DicomModel.parseFile = function(file) {
    var sopInstanceUID = file.SOPInstanceUID;
    var modality = file.Modality;
    var obj = DicomModel.modalities[modality](file);
    DicomModel.sopInstanceUIDs[sopInstanceUID] = obj;
    return obj;
}

DicomModel.Patient = function(files) {
    this.files = files;
    this.studies = []
}

DicomModel.Study = function(files) {
    this.series = []
    if(!_verifySame(dcmdict.StudyInstanceUID))
    {
        alert("Broken series instantiation!");
        return;
    }

    this.studyInstanceUID = this.files[0].FrameOfReferenceUID;
}

DicomModel._verifySame = function(files, tag) {
    return files.every(function(file) { return file.get_element(tag).get_value() == files[0].ge_element(tag); });
}

DicomModel.Series = function(files) {
    this.files = files;
        
    // All files in a series must have some attribute values in common:
    if(!_verifySame(dcmdict.FrameOfReferenceUID) || 
       !_verifySame(dcmdict.SeriesInstanceUID) || 
       !_verifySame(dcmdict.Modality))
    {
        alert("Broken series instantiation!");
        return;
    }

    this.frameOfReference = this.files[0].FrameOfReferenceUID;

    this.addImages = function(images) {
        
    }
}

DicomModel.FrameOfReference = function(files) {
    this.series = []
}

DicomModel.RTImage = function(files) {
    assert(files.length == 1, "RT Image can only contain one file");
    this.files = files;
    this.plan;
}

DicomModel.RTDose = function(files) {
    assert(files.length == 1, "RT Dose can only contain one file");
    this.files = files;
    this.structureset;
    this.plan;
}

DicomModel.RTStructureSet = function(files) {
    assert(files.length == 1, "RT Structure Set can only contain one file");
    this.files = files;
    this.images = [];
}

DicomModel.Image = function(files) {
}

DicomModel.CTImage = function(files) {
}

DicomModel.RTPlan = function(files) {
    assert(files.length == 1, "RT Plan can only contain one file");
    this.files = files;
    this.structuresets = [];
    this.doses = [];
    this.images = [];
}

DicomModel.RTTreatmentRecord = function(files) {
    throw "Unimplemented IOD"
}

DicomModel.Registration = function(files) {
    this.frameOfReferences = [] // yeye, "drottningens av Saba festmarsch"
}

DicomModel.Fiducials = function(files) {
}

DicomModel.PresentationState = function(files) {
}

DicomModel.SRDocument = function(files) {
}

DicomModel.Waveform = function(files) {
}

DicomModel.MRSpectroscopy = function(files) {
}

DicomModel.RawData = function(files) {
}

DicomModel.EncapsulatedDocument = function(files) {
}

DicomModel.RealWorldValueMapping = function(files) {
}

DicomModel.StereometricRelationship = function(files) {
}

DicomModel.Surface = function(files) {
}

DicomModel.Measurements = function(files) {
}
;
// glMatrix v0.9.5
glMatrixArrayType=typeof Float32Array!="undefined"?Float32Array:typeof WebGLFloatArray!="undefined"?WebGLFloatArray:Array;var vec3={};vec3.create=function(a){var b=new glMatrixArrayType(3);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2]}return b};vec3.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];return b};vec3.add=function(a,b,c){if(!c||a==c){a[0]+=b[0];a[1]+=b[1];a[2]+=b[2];return a}c[0]=a[0]+b[0];c[1]=a[1]+b[1];c[2]=a[2]+b[2];return c};
vec3.subtract=function(a,b,c){if(!c||a==c){a[0]-=b[0];a[1]-=b[1];a[2]-=b[2];return a}c[0]=a[0]-b[0];c[1]=a[1]-b[1];c[2]=a[2]-b[2];return c};vec3.negate=function(a,b){b||(b=a);b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];return b};vec3.scale=function(a,b,c){if(!c||a==c){a[0]*=b;a[1]*=b;a[2]*=b;return a}c[0]=a[0]*b;c[1]=a[1]*b;c[2]=a[2]*b;return c};
vec3.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=Math.sqrt(c*c+d*d+e*e);if(g){if(g==1){b[0]=c;b[1]=d;b[2]=e;return b}}else{b[0]=0;b[1]=0;b[2]=0;return b}g=1/g;b[0]=c*g;b[1]=d*g;b[2]=e*g;return b};vec3.cross=function(a,b,c){c||(c=a);var d=a[0],e=a[1];a=a[2];var g=b[0],f=b[1];b=b[2];c[0]=e*b-a*f;c[1]=a*g-d*b;c[2]=d*f-e*g;return c};vec3.length=function(a){var b=a[0],c=a[1];a=a[2];return Math.sqrt(b*b+c*c+a*a)};vec3.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]};
vec3.direction=function(a,b,c){c||(c=a);var d=a[0]-b[0],e=a[1]-b[1];a=a[2]-b[2];b=Math.sqrt(d*d+e*e+a*a);if(!b){c[0]=0;c[1]=0;c[2]=0;return c}b=1/b;c[0]=d*b;c[1]=e*b;c[2]=a*b;return c};vec3.lerp=function(a,b,c,d){d||(d=a);d[0]=a[0]+c*(b[0]-a[0]);d[1]=a[1]+c*(b[1]-a[1]);d[2]=a[2]+c*(b[2]-a[2]);return d};vec3.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+"]"};var mat3={};
mat3.create=function(a){var b=new glMatrixArrayType(9);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9]}return b};mat3.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return b};mat3.identity=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a};
mat3.transpose=function(a,b){if(!b||a==b){var c=a[1],d=a[2],e=a[5];a[1]=a[3];a[2]=a[6];a[3]=c;a[5]=a[7];a[6]=d;a[7]=e;return a}b[0]=a[0];b[1]=a[3];b[2]=a[6];b[3]=a[1];b[4]=a[4];b[5]=a[7];b[6]=a[2];b[7]=a[5];b[8]=a[8];return b};mat3.toMat4=function(a,b){b||(b=mat4.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=0;b[4]=a[3];b[5]=a[4];b[6]=a[5];b[7]=0;b[8]=a[6];b[9]=a[7];b[10]=a[8];b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
mat3.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+"]"};var mat4={};mat4.create=function(a){var b=new glMatrixArrayType(16);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15]}return b};
mat4.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return b};mat4.identity=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a};
mat4.transpose=function(a,b){if(!b||a==b){var c=a[1],d=a[2],e=a[3],g=a[6],f=a[7],h=a[11];a[1]=a[4];a[2]=a[8];a[3]=a[12];a[4]=c;a[6]=a[9];a[7]=a[13];a[8]=d;a[9]=g;a[11]=a[14];a[12]=e;a[13]=f;a[14]=h;return a}b[0]=a[0];b[1]=a[4];b[2]=a[8];b[3]=a[12];b[4]=a[1];b[5]=a[5];b[6]=a[9];b[7]=a[13];b[8]=a[2];b[9]=a[6];b[10]=a[10];b[11]=a[14];b[12]=a[3];b[13]=a[7];b[14]=a[11];b[15]=a[15];return b};
mat4.determinant=function(a){var b=a[0],c=a[1],d=a[2],e=a[3],g=a[4],f=a[5],h=a[6],i=a[7],j=a[8],k=a[9],l=a[10],o=a[11],m=a[12],n=a[13],p=a[14];a=a[15];return m*k*h*e-j*n*h*e-m*f*l*e+g*n*l*e+j*f*p*e-g*k*p*e-m*k*d*i+j*n*d*i+m*c*l*i-b*n*l*i-j*c*p*i+b*k*p*i+m*f*d*o-g*n*d*o-m*c*h*o+b*n*h*o+g*c*p*o-b*f*p*o-j*f*d*a+g*k*d*a+j*c*h*a-b*k*h*a-g*c*l*a+b*f*l*a};
mat4.inverse=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=a[4],h=a[5],i=a[6],j=a[7],k=a[8],l=a[9],o=a[10],m=a[11],n=a[12],p=a[13],r=a[14],s=a[15],A=c*h-d*f,B=c*i-e*f,t=c*j-g*f,u=d*i-e*h,v=d*j-g*h,w=e*j-g*i,x=k*p-l*n,y=k*r-o*n,z=k*s-m*n,C=l*r-o*p,D=l*s-m*p,E=o*s-m*r,q=1/(A*E-B*D+t*C+u*z-v*y+w*x);b[0]=(h*E-i*D+j*C)*q;b[1]=(-d*E+e*D-g*C)*q;b[2]=(p*w-r*v+s*u)*q;b[3]=(-l*w+o*v-m*u)*q;b[4]=(-f*E+i*z-j*y)*q;b[5]=(c*E-e*z+g*y)*q;b[6]=(-n*w+r*t-s*B)*q;b[7]=(k*w-o*t+m*B)*q;b[8]=(f*D-h*z+j*x)*q;
b[9]=(-c*D+d*z-g*x)*q;b[10]=(n*v-p*t+s*A)*q;b[11]=(-k*v+l*t-m*A)*q;b[12]=(-f*C+h*y-i*x)*q;b[13]=(c*C-d*y+e*x)*q;b[14]=(-n*u+p*B-r*A)*q;b[15]=(k*u-l*B+o*A)*q;return b};mat4.toRotationMat=function(a,b){b||(b=mat4.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
mat4.toMat3=function(a,b){b||(b=mat3.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[4];b[4]=a[5];b[5]=a[6];b[6]=a[8];b[7]=a[9];b[8]=a[10];return b};mat4.toInverseMat3=function(a,b){var c=a[0],d=a[1],e=a[2],g=a[4],f=a[5],h=a[6],i=a[8],j=a[9],k=a[10],l=k*f-h*j,o=-k*g+h*i,m=j*g-f*i,n=c*l+d*o+e*m;if(!n)return null;n=1/n;b||(b=mat3.create());b[0]=l*n;b[1]=(-k*d+e*j)*n;b[2]=(h*d-e*f)*n;b[3]=o*n;b[4]=(k*c-e*i)*n;b[5]=(-h*c+e*g)*n;b[6]=m*n;b[7]=(-j*c+d*i)*n;b[8]=(f*c-d*g)*n;return b};
mat4.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2],f=a[3],h=a[4],i=a[5],j=a[6],k=a[7],l=a[8],o=a[9],m=a[10],n=a[11],p=a[12],r=a[13],s=a[14];a=a[15];var A=b[0],B=b[1],t=b[2],u=b[3],v=b[4],w=b[5],x=b[6],y=b[7],z=b[8],C=b[9],D=b[10],E=b[11],q=b[12],F=b[13],G=b[14];b=b[15];c[0]=A*d+B*h+t*l+u*p;c[1]=A*e+B*i+t*o+u*r;c[2]=A*g+B*j+t*m+u*s;c[3]=A*f+B*k+t*n+u*a;c[4]=v*d+w*h+x*l+y*p;c[5]=v*e+w*i+x*o+y*r;c[6]=v*g+w*j+x*m+y*s;c[7]=v*f+w*k+x*n+y*a;c[8]=z*d+C*h+D*l+E*p;c[9]=z*e+C*i+D*o+E*r;c[10]=z*
g+C*j+D*m+E*s;c[11]=z*f+C*k+D*n+E*a;c[12]=q*d+F*h+G*l+b*p;c[13]=q*e+F*i+G*o+b*r;c[14]=q*g+F*j+G*m+b*s;c[15]=q*f+F*k+G*n+b*a;return c};mat4.multiplyVec3=function(a,b,c){c||(c=b);var d=b[0],e=b[1];b=b[2];c[0]=a[0]*d+a[4]*e+a[8]*b+a[12];c[1]=a[1]*d+a[5]*e+a[9]*b+a[13];c[2]=a[2]*d+a[6]*e+a[10]*b+a[14];return c};
mat4.multiplyVec4=function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2];b=b[3];c[0]=a[0]*d+a[4]*e+a[8]*g+a[12]*b;c[1]=a[1]*d+a[5]*e+a[9]*g+a[13]*b;c[2]=a[2]*d+a[6]*e+a[10]*g+a[14]*b;c[3]=a[3]*d+a[7]*e+a[11]*g+a[15]*b;return c};
mat4.translate=function(a,b,c){var d=b[0],e=b[1];b=b[2];if(!c||a==c){a[12]=a[0]*d+a[4]*e+a[8]*b+a[12];a[13]=a[1]*d+a[5]*e+a[9]*b+a[13];a[14]=a[2]*d+a[6]*e+a[10]*b+a[14];a[15]=a[3]*d+a[7]*e+a[11]*b+a[15];return a}var g=a[0],f=a[1],h=a[2],i=a[3],j=a[4],k=a[5],l=a[6],o=a[7],m=a[8],n=a[9],p=a[10],r=a[11];c[0]=g;c[1]=f;c[2]=h;c[3]=i;c[4]=j;c[5]=k;c[6]=l;c[7]=o;c[8]=m;c[9]=n;c[10]=p;c[11]=r;c[12]=g*d+j*e+m*b+a[12];c[13]=f*d+k*e+n*b+a[13];c[14]=h*d+l*e+p*b+a[14];c[15]=i*d+o*e+r*b+a[15];return c};
mat4.scale=function(a,b,c){var d=b[0],e=b[1];b=b[2];if(!c||a==c){a[0]*=d;a[1]*=d;a[2]*=d;a[3]*=d;a[4]*=e;a[5]*=e;a[6]*=e;a[7]*=e;a[8]*=b;a[9]*=b;a[10]*=b;a[11]*=b;return a}c[0]=a[0]*d;c[1]=a[1]*d;c[2]=a[2]*d;c[3]=a[3]*d;c[4]=a[4]*e;c[5]=a[5]*e;c[6]=a[6]*e;c[7]=a[7]*e;c[8]=a[8]*b;c[9]=a[9]*b;c[10]=a[10]*b;c[11]=a[11]*b;c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15];return c};
mat4.rotate=function(a,b,c,d){var e=c[0],g=c[1];c=c[2];var f=Math.sqrt(e*e+g*g+c*c);if(!f)return null;if(f!=1){f=1/f;e*=f;g*=f;c*=f}var h=Math.sin(b),i=Math.cos(b),j=1-i;b=a[0];f=a[1];var k=a[2],l=a[3],o=a[4],m=a[5],n=a[6],p=a[7],r=a[8],s=a[9],A=a[10],B=a[11],t=e*e*j+i,u=g*e*j+c*h,v=c*e*j-g*h,w=e*g*j-c*h,x=g*g*j+i,y=c*g*j+e*h,z=e*c*j+g*h;e=g*c*j-e*h;g=c*c*j+i;if(d){if(a!=d){d[12]=a[12];d[13]=a[13];d[14]=a[14];d[15]=a[15]}}else d=a;d[0]=b*t+o*u+r*v;d[1]=f*t+m*u+s*v;d[2]=k*t+n*u+A*v;d[3]=l*t+p*u+B*
v;d[4]=b*w+o*x+r*y;d[5]=f*w+m*x+s*y;d[6]=k*w+n*x+A*y;d[7]=l*w+p*x+B*y;d[8]=b*z+o*e+r*g;d[9]=f*z+m*e+s*g;d[10]=k*z+n*e+A*g;d[11]=l*z+p*e+B*g;return d};mat4.rotateX=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[4],g=a[5],f=a[6],h=a[7],i=a[8],j=a[9],k=a[10],l=a[11];if(c){if(a!=c){c[0]=a[0];c[1]=a[1];c[2]=a[2];c[3]=a[3];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}else c=a;c[4]=e*b+i*d;c[5]=g*b+j*d;c[6]=f*b+k*d;c[7]=h*b+l*d;c[8]=e*-d+i*b;c[9]=g*-d+j*b;c[10]=f*-d+k*b;c[11]=h*-d+l*b;return c};
mat4.rotateY=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],g=a[1],f=a[2],h=a[3],i=a[8],j=a[9],k=a[10],l=a[11];if(c){if(a!=c){c[4]=a[4];c[5]=a[5];c[6]=a[6];c[7]=a[7];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}else c=a;c[0]=e*b+i*-d;c[1]=g*b+j*-d;c[2]=f*b+k*-d;c[3]=h*b+l*-d;c[8]=e*d+i*b;c[9]=g*d+j*b;c[10]=f*d+k*b;c[11]=h*d+l*b;return c};
mat4.rotateZ=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],g=a[1],f=a[2],h=a[3],i=a[4],j=a[5],k=a[6],l=a[7];if(c){if(a!=c){c[8]=a[8];c[9]=a[9];c[10]=a[10];c[11]=a[11];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}else c=a;c[0]=e*b+i*d;c[1]=g*b+j*d;c[2]=f*b+k*d;c[3]=h*b+l*d;c[4]=e*-d+i*b;c[5]=g*-d+j*b;c[6]=f*-d+k*b;c[7]=h*-d+l*b;return c};
mat4.frustum=function(a,b,c,d,e,g,f){f||(f=mat4.create());var h=b-a,i=d-c,j=g-e;f[0]=e*2/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=e*2/i;f[6]=0;f[7]=0;f[8]=(b+a)/h;f[9]=(d+c)/i;f[10]=-(g+e)/j;f[11]=-1;f[12]=0;f[13]=0;f[14]=-(g*e*2)/j;f[15]=0;return f};mat4.perspective=function(a,b,c,d,e){a=c*Math.tan(a*Math.PI/360);b=a*b;return mat4.frustum(-b,b,-a,a,c,d,e)};
mat4.ortho=function(a,b,c,d,e,g,f){f||(f=mat4.create());var h=b-a,i=d-c,j=g-e;f[0]=2/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=2/i;f[6]=0;f[7]=0;f[8]=0;f[9]=0;f[10]=-2/j;f[11]=0;f[12]=-(a+b)/h;f[13]=-(d+c)/i;f[14]=-(g+e)/j;f[15]=1;return f};
mat4.lookAt=function(a,b,c,d){d||(d=mat4.create());var e=a[0],g=a[1];a=a[2];var f=c[0],h=c[1],i=c[2];c=b[1];var j=b[2];if(e==b[0]&&g==c&&a==j)return mat4.identity(d);var k,l,o,m;c=e-b[0];j=g-b[1];b=a-b[2];m=1/Math.sqrt(c*c+j*j+b*b);c*=m;j*=m;b*=m;k=h*b-i*j;i=i*c-f*b;f=f*j-h*c;if(m=Math.sqrt(k*k+i*i+f*f)){m=1/m;k*=m;i*=m;f*=m}else f=i=k=0;h=j*f-b*i;l=b*k-c*f;o=c*i-j*k;if(m=Math.sqrt(h*h+l*l+o*o)){m=1/m;h*=m;l*=m;o*=m}else o=l=h=0;d[0]=k;d[1]=h;d[2]=c;d[3]=0;d[4]=i;d[5]=l;d[6]=j;d[7]=0;d[8]=f;d[9]=
o;d[10]=b;d[11]=0;d[12]=-(k*e+i*g+f*a);d[13]=-(h*e+l*g+o*a);d[14]=-(c*e+j*g+b*a);d[15]=1;return d};mat4.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+"]"};quat4={};quat4.create=function(a){var b=new glMatrixArrayType(4);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3]}return b};quat4.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];return b};
quat4.calculateW=function(a,b){var c=a[0],d=a[1],e=a[2];if(!b||a==b){a[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e));return a}b[0]=c;b[1]=d;b[2]=e;b[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e));return b};quat4.inverse=function(a,b){if(!b||a==b){a[0]*=1;a[1]*=1;a[2]*=1;return a}b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=a[3];return b};quat4.length=function(a){var b=a[0],c=a[1],d=a[2];a=a[3];return Math.sqrt(b*b+c*c+d*d+a*a)};
quat4.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=Math.sqrt(c*c+d*d+e*e+g*g);if(f==0){b[0]=0;b[1]=0;b[2]=0;b[3]=0;return b}f=1/f;b[0]=c*f;b[1]=d*f;b[2]=e*f;b[3]=g*f;return b};quat4.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2];a=a[3];var f=b[0],h=b[1],i=b[2];b=b[3];c[0]=d*b+a*f+e*i-g*h;c[1]=e*b+a*h+g*f-d*i;c[2]=g*b+a*i+d*h-e*f;c[3]=a*b-d*f-e*h-g*i;return c};
quat4.multiplyVec3=function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2];b=a[0];var f=a[1],h=a[2];a=a[3];var i=a*d+f*g-h*e,j=a*e+h*d-b*g,k=a*g+b*e-f*d;d=-b*d-f*e-h*g;c[0]=i*a+d*-b+j*-h-k*-f;c[1]=j*a+d*-f+k*-b-i*-h;c[2]=k*a+d*-h+i*-f-j*-b;return c};quat4.toMat3=function(a,b){b||(b=mat3.create());var c=a[0],d=a[1],e=a[2],g=a[3],f=c+c,h=d+d,i=e+e,j=c*f,k=c*h;c=c*i;var l=d*h;d=d*i;e=e*i;f=g*f;h=g*h;g=g*i;b[0]=1-(l+e);b[1]=k-g;b[2]=c+h;b[3]=k+g;b[4]=1-(j+e);b[5]=d-f;b[6]=c-h;b[7]=d+f;b[8]=1-(j+l);return b};
quat4.toMat4=function(a,b){b||(b=mat4.create());var c=a[0],d=a[1],e=a[2],g=a[3],f=c+c,h=d+d,i=e+e,j=c*f,k=c*h;c=c*i;var l=d*h;d=d*i;e=e*i;f=g*f;h=g*h;g=g*i;b[0]=1-(l+e);b[1]=k-g;b[2]=c+h;b[3]=0;b[4]=k+g;b[5]=1-(j+e);b[6]=d-f;b[7]=0;b[8]=c-h;b[9]=d+f;b[10]=1-(j+l);b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};quat4.slerp=function(a,b,c,d){d||(d=a);var e=c;if(a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]<0)e=-1*c;d[0]=1-c*a[0]+e*b[0];d[1]=1-c*a[1]+e*b[1];d[2]=1-c*a[2]+e*b[2];d[3]=1-c*a[3]+e*b[3];return d};
quat4.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+"]"};
/**
* Copyright 2012 Infogosoft
*
* This file is part of jsdicom.
*
* jsdicom is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
*
* jsdicom is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License along with jsdicom. If not, see http://www.gnu.org/licenses/.
*/

var FRAG_SHADER_8 = 0;
var FRAG_SHADER_16 = 1;
var FRAG_SHADER_RGB_8 = 2;

function ImageSlice(file, texture, rs, ri, alpha) {
    this.file = file;
    this.texture = texture;
    this.rs = rs;
    this.ri = ri;
    this.alpha = alpha;
}

function GLPainter(canvasid) {
    this.canvas = document.getElementById(canvasid);
    this.gl;
    this.shaderProgram;
    this.mvMatrix = mat4.create();
    this.pMatrix = mat4.create();
    this.squareVertexPositionBuffer;
    this.vertexIndexBuffer;
    //this.THE_TEXTURE;
    this.CLUT_TEXTURE;

    this.ww = 200;
    this.wl = 40;
    this.clut_r;
    this.clut_g;
    this.clut_b;
    this.ztrans = -1;
    this.xtrans = 0.0;
    this.ytrans = 0.0;
    this.fovy = 90;
    this.scale = 1;
    this.pan = [0,0];

    this.images = [];
    this.shaderPrograms = {};
    this.clut_bar_enabled = false;
}

GLPainter.prototype.fuse_files = function(file1, file2, alpha) {
    this.images.length = 0;
    this.images.push(new ImageSlice(file1,
                                    this.file_to_texture(file2),
                                    file2.RescaleSlope || 1.0,
                                    file2.RescaleIntercept || 0.0,
                                    1.0));
    this.images.push(new ImageSlice(file2,
                                    this.file_to_texture(file1),
                                    file1.RescaleSlope || 1.0,
                                    file1.RescaleIntercept || 0.0,
                                    alpha));
    this.rows = file1.Rows;
    this.columns = file1.Columns;
}

GLPainter.prototype.set_file = function(dcmfile) {
    this.images = [new ImageSlice(dcmfile,
                                  this.file_to_texture(dcmfile), 
                                  dcmfile.RescaleSlope || 1.0, 
                                  dcmfile.RescaleIntercept || 0.0,
                                  1.0)];
    this.rows = dcmfile.Rows;
    this.columns = dcmfile.Columns;
    //this.THE_TEXTURE = this.file_to_texture(dcmfile);
}

GLPainter.prototype.file_to_texture = function(dcmfile) {
    var internalFormat;
    raw_data = dcmfile.get_element(dcmdict.PixelData).data;
    switch(jQuery.trim(dcmfile.PhotometricInterpretation)) {
    case "MONOCHROME1":
        // TODO: MONOCHROME1 should use inverse cluts.
    case "MONOCHROME2":
        if(dcmfile.BitsStored <= 8) {
            internalFormat = this.gl.LUMINANCE;
        } else {
            internalFormat = this.gl.LUMINANCE_ALPHA;
            if(dcmfile.PixelRepresentation == 0x01) {
                if(!dcmfile._TwoCompPatched) {
                    for(var i=0;i<dcmfile.PixelData.length;++i) {
                        dcmfile.PixelData[i] = dcmfile.PixelData[i] ^ (0x1 << dcmfile.HighBit);
                    }
                    dcmfile._TwoCompPatched = true;
                }
            }
        }
        break;
    case "RGB":
        internalFormat = this.gl.RGB;
        break;
    default:
        alert("Unknown Photometric Interpretation" + dcmfile.PhotometricInterpretation + "!");
        return;
    }

    var texture = this.gl.createTexture(); 
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);  
    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true);
    this.gl.texImage2D(this.gl.TEXTURE_2D,       // target
                       0,                        // level
                       internalFormat,           // internalformat
                       dcmfile.Columns,          // width
                       dcmfile.Rows,             // height 
                       0,                        // border
                       internalFormat,           // format
                       this.gl.UNSIGNED_BYTE,    // type
                       dcmfile.get_element(dcmdict.PixelData).data);// Get raw Uint8array
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
                  
    this.gl.bindTexture(this.gl.TEXTURE_2D, null);
    return texture;
}


GLPainter.prototype.set_scale = function(scale) {
    this.scale = Math.min(Math.max(scale, 0.1), 10.0);
    this.draw_image();
}

GLPainter.prototype.get_scale = function(scale) {
    return this.scale;
}

GLPainter.prototype.reset_scale = function(scale) {
    this.scale = 1.0;
}

GLPainter.prototype.set_pan = function(panx, pany) {
    this.pan[0] = panx;
    this.pan[1] = pany;
    this.draw_image();
}

GLPainter.prototype.get_pan = function() {
    return this.pan;
}

GLPainter.prototype.reset_pan = function() {
    this.pan[0] = 0.0;
    this.pan[1] = 0.0;
}

GLPainter.prototype.reset_windowing = function() {
    this.ww = 200;
    this.wl = 40;
}

GLPainter.prototype.set_cluts = function(clut_r, clut_g, clut_b) {
    this.clut_r = clut_r;
    this.clut_g = clut_g;
    this.clut_b = clut_b;
    if(!this.gl)
        return;

    // Re-pack as rgb
    var rgb_clut = new Uint8Array(256*3);
    for(var i=0;i<256;++i) {
        rgb_clut[i*3] = this.clut_r[i];
        rgb_clut[i*3 + 1] = this.clut_g[i];
        rgb_clut[i*3 + 2] = this.clut_b[i];
    }

    this.CLUT_TEXTURE = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.CLUT_TEXTURE);
    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true);
    this.gl.texImage2D(this.gl.TEXTURE_2D,       // target
                       0,                        // level
                       this.gl.RGB,              // internalformat
                       256,                      // width
                       1,                        // height 
                       0,                        // border
                       this.gl.RGB,             // format
                       this.gl.UNSIGNED_BYTE,    // type
                       rgb_clut);                // data
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);

    this.gl.bindTexture(this.gl.TEXTURE_2D, null);
}

GLPainter.prototype.set_windowing = function(wl, ww) {
    this.wl = wl;
    this.ww = ww;
}
GLPainter.prototype.get_windowing = function() {
    return [this.wl, this.ww];
}

GLPainter.prototype.unproject = function(canvas_pos) {
    var viewportArray = [
        0, 0, this.gl.viewportWidth, this.gl.viewportHeight
    ];
    
    var projectedPoint = [];
    var unprojectedPoint = [];
    
    var flippedmvMatrix = mat4.create();

    mat4.identity(flippedmvMatrix);
    mat4.translate(flippedmvMatrix, [this.pan[0], this.pan[1], -1]);
    mat4.scale(flippedmvMatrix, [this.scale,this.scale,this.scale]);

    // Hack to fit image if height is greater than width
    if(this.canvas.height > this.canvas.width) {
        var canvas_scale = this.canvas.width/this.canvas.height;
        mat4.scale(flippedmvMatrix, [canvas_scale,canvas_scale,canvas_scale]);
    }

    GLU.project(
        0,0,0,
        flippedmvMatrix, this.pMatrix,
        viewportArray, projectedPoint);
    
    var successFar = GLU.unProject(
        canvas_pos[0], canvas_pos[1], projectedPoint[2], //windowPointX, windowPointY, windowPointZ,
        flippedmvMatrix, this.pMatrix,
        viewportArray, unprojectedPoint);

    return unprojectedPoint;
}

GLPainter.prototype.image_coords_to_row_column = function(pt) {
    return [Math.round((pt[0]+1)/2*this.columns), Math.round((pt[1]+1)/2*this.rows)]
}

GLPainter.prototype.unproject_row_column = function(canvas_pos) {
    var unprojectedPoint = this.unproject(canvas_pos);
    return image_coords_to_row_column(unprojectedPoint);;
}

GLPainter.prototype.update_projection_matrix = function() {
    mat4.perspective(this.fovy, this.gl.viewportWidth / this.gl.viewportHeight, 0.1, 100.0, this.pMatrix);
    mat4.identity(this.mvMatrix);
    mat4.translate(this.mvMatrix, [this.pan[0], -this.pan[1], -1]);
    mat4.scale(this.mvMatrix, [this.scale,this.scale,this.scale]);

    // Hack to fit image if height is greater than width
    if(this.canvas.height > this.canvas.width) {
        var canvas_scale = this.canvas.width/this.canvas.height;
        mat4.scale(this.mvMatrix, [canvas_scale,canvas_scale,canvas_scale]);
    }
}

GLPainter.prototype.draw_clut_bar = function() {
    if(!this.clut_bar_enabled)
        return;
    // Draw clut bar
    this.gl.viewport(10, 10, 50, this.canvas.height-100);
    var pMatrix = mat4.create();
    mat4.perspective(this.fovy, this.gl.viewportWidth / this.gl.viewportHeight, 0.1, 100.0, pMatrix);
    var mvMatrix = mat4.create();
    mat4.identity(mvMatrix);
    mat4.translate(mvMatrix, [0,0,-1]);
    mat4.scale(mvMatrix, [20,1,1]);
    mat4.rotate(mvMatrix, Math.PI/2, [0,0,1]);

    var shaderProgram = this.shaderPrograms[FRAG_SHADER_RGB_8];
    this.gl.useProgram(shaderProgram);

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.squareVertexPositionBuffer);
    this.gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute,
                                this.squareVertexPositionBuffer.itemSize,
                                this.gl.FLOAT,
                                false,
                                0,
                                0);

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.textureCoordBuffer);
    this.gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, this.textureCoordBuffer.itemSize, this.gl.FLOAT, false, 0, 0);

    // Clut texture
    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.CLUT_TEXTURE);
    this.gl.uniform1i(shaderProgram.samplerUniform, 0);

    this.gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
    this.gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);

    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer);
    this.gl.drawElements(this.gl.TRIANGLES, this.vertexIndexBuffer.numItems, this.gl.UNSIGNED_SHORT, 0);
    this.gl.viewport(0,0, this.canvas.width, this.canvas.height);
}

GLPainter.prototype.draw_image = function() {
    this.gl.viewport(0, 0, this.gl.viewportWidth, this.gl.viewportHeight);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    //this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    this.gl.disable(this.gl.BLEND);
    this.draw_clut_bar();

    this.gl.enable(this.gl.BLEND);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE);

    for(var imgidx in this.images) {
        this.update_projection_matrix();
        var image = this.images[imgidx];
        if(image.file.PixelAspectRatio != undefined) {
            mat4.scale(this.mvMatrix, [100/image.file.PixelAspectRatio, 1, 1]);
        }

        var shaderProgram;
        switch(jQuery.trim(image.file.PhotometricInterpretation)) {
            case "MONOCHROME1":
                // TODO: MONOCHROME1 should use inverse cluts.
            case "MONOCHROME2":
                if(image.file.BitsStored <= 8) {
                    shaderProgram = this.shaderPrograms[FRAG_SHADER_8];
                } else {
                    shaderProgram = this.shaderPrograms[FRAG_SHADER_16];
                }
                break;
            case "RGB":
                shaderProgram = this.shaderPrograms[FRAG_SHADER_RGB_8];
                break;
            default:
                alert("Unknown Photometric Interpretation" + image.file.PhotometricInterpretation + "!");
                return;
        }
        this.gl.useProgram(shaderProgram);

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.squareVertexPositionBuffer);
        this.gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 
                               this.squareVertexPositionBuffer.itemSize, 
                               this.gl.FLOAT, 
                               false, 
                               0, 
                               0);

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.textureCoordBuffer);
        this.gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, this.textureCoordBuffer.itemSize, this.gl.FLOAT, false, 0, 0);

        this.gl.activeTexture(this.gl.TEXTURE0);  
        this.gl.bindTexture(this.gl.TEXTURE_2D, image.texture);  
        this.gl.uniform1i(shaderProgram.samplerUniform, 0);

        // Clut texture
        this.gl.activeTexture(this.gl.TEXTURE1);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.CLUT_TEXTURE);
        this.gl.uniform1i(shaderProgram.clutSamplerUniform, 1);

        this.set_matrix_uniforms(shaderProgram);
        this.set_window_uniforms(shaderProgram, image);

        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer);
        this.gl.drawElements(this.gl.TRIANGLES, this.vertexIndexBuffer.numItems, this.gl.UNSIGNED_SHORT, 0);
    }


}

GLPainter.prototype.init = function(canvasid) {

    // Initialize main gl-canvas
    this.gl = this.canvas.getContext("experimental-webgl");
    this.gl.viewportWidth = this.canvas.width;
    this.gl.viewportHeight = this.canvas.height;


    this.init_shaders();
    this.init_buffers();
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    //this.gl.enable(this.gl.DEPTH_TEST);

    if (!this.gl) {
        throw "No GL-context";
    }
}

GLPainter.prototype.onresize = function() {
    this.gl.viewportWidth = this.canvas.clientWidth;
    this.gl.viewportHeight = this.canvas.clientHeight;
    this.draw_image();
}

GLPainter.prototype.compile_shader = function(str, shader_type) {

    shader = this.gl.createShader(shader_type);

    this.gl.shaderSource(shader, str);
    this.gl.compileShader(shader);

    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
        alert(this.gl.getShaderInfoLog(shader));
        return null;
    }
    return shader;

}

GLPainter.prototype.init_shaders = function() {
    var fragmentShader8 = this.compile_shader(fragment_shader_8, this.gl.FRAGMENT_SHADER);
    var fragmentShader16 = this.compile_shader(fragment_shader_16, this.gl.FRAGMENT_SHADER);
    var fragmentShaderRGB8 = this.compile_shader(fragment_shader_rgb_8, this.gl.FRAGMENT_SHADER);
    var vertexShader = this.compile_shader(vertex_shader, this.gl.VERTEX_SHADER);

    this.shaderPrograms[FRAG_SHADER_8] = this.create_shader_program(fragmentShader8, vertexShader);
    this.shaderPrograms[FRAG_SHADER_16] = this.create_shader_program(fragmentShader16, vertexShader);
    this.shaderPrograms[FRAG_SHADER_RGB_8] = this.create_shader_program(fragmentShaderRGB8, vertexShader);
}

GLPainter.prototype.create_shader_program = function(fragshader, vertshader) {
    var shaderProgram = this.gl.createProgram();
    this.gl.attachShader(shaderProgram, vertshader);
    this.gl.attachShader(shaderProgram, fragshader);
    this.gl.linkProgram(shaderProgram);

    if (!this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS)) {
        alert("Could not initialise shaders");
    }

    shaderProgram.vertexPositionAttribute = this.gl.getAttribLocation(shaderProgram, "aVertexPosition");
    this.gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
    shaderProgram.textureCoordAttribute = this.gl.getAttribLocation(shaderProgram, "aTextureCoord");  
    this.gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute); 

    shaderProgram.pMatrixUniform = this.gl.getUniformLocation(shaderProgram, "uPMatrix");
    shaderProgram.mvMatrixUniform = this.gl.getUniformLocation(shaderProgram, "uMVMatrix");
    shaderProgram.samplerUniform = this.gl.getUniformLocation(shaderProgram, "uSampler");
    shaderProgram.clutSamplerUniform = this.gl.getUniformLocation(shaderProgram, "uClutSampler");

    shaderProgram.wlUniform = this.gl.getUniformLocation(shaderProgram, "uWL");
    shaderProgram.wwUniform = this.gl.getUniformLocation(shaderProgram, "uWW");
    shaderProgram.riUniform = this.gl.getUniformLocation(shaderProgram, "uRI");
    shaderProgram.rsUniform = this.gl.getUniformLocation(shaderProgram, "uRS");
    shaderProgram.alphaUniform = this.gl.getUniformLocation(shaderProgram, "uAlpha");
    return shaderProgram;
}

GLPainter.prototype.set_matrix_uniforms = function(shaderProgram) {
    this.gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, this.pMatrix);
    this.gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, this.mvMatrix);
}

GLPainter.prototype.set_window_uniforms = function(shaderProgram, image) {
    // Hack for files with pixel representation in two complements
    var wl = this.wl;
    if(image.file.PixelRepresentation == 0x01)
        wl += parseFloat(0x1 << this.images[0].file.HighBit)
    this.gl.uniform1f(shaderProgram.wlUniform, wl);
    this.gl.uniform1f(shaderProgram.wwUniform, this.ww);
    this.gl.uniform1f(shaderProgram.rsUniform, image.rs);
    this.gl.uniform1f(shaderProgram.riUniform, image.ri);
    this.gl.uniform1f(shaderProgram.alphaUniform, image.alpha);
}

GLPainter.prototype.init_buffers = function() {
    this.squareVertexPositionBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.squareVertexPositionBuffer);
    vertices = [
        -1.0,  -1.0,  0.0,
         1.0,  -1.0,  0.0,
         1.0,   1.0,  0.0,
        -1.0,   1.0,  0.0
    ];
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);
    this.squareVertexPositionBuffer.itemSize = 3;
    this.squareVertexPositionBuffer.numItems = 4;
 
    // Texture coords
    this.textureCoordBuffer = this.gl.createBuffer();  
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.textureCoordBuffer);  
    
    var textureCoordinates = [  
        0.0,  0.0,  
        1.0,  0.0,  
        1.0,  1.0,  
        0.0,  1.0
    ];  
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(textureCoordinates),  
                  this.gl.STATIC_DRAW);
    this.textureCoordBuffer.itemSize = 2;
    this.textureCoordBuffer.numItems = 4;

    this.vertexIndexBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer);
    var vertexIndices = [
        0, 1, 2, 0, 2, 3    
    ];
    this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(vertexIndices), this.gl.STATIC_DRAW);
    this.vertexIndexBuffer.itemSize = 1;
    this.vertexIndexBuffer.numItems = 6;
}

GLPainter.prototype.pan_unit = function() {
    return 2.0/this.gl.viewportHeight;
}
;
/**
* Copyright 2012 Infogosoft
*
* This file is part of jsdicom.
*
* jsdicom is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
*
* jsdicom is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License along with jsdicom. If not, see http://www.gnu.org/licenses/.
*/
// Maybe use some cool js-templating, like mustasche?

function fill_series_selection(series, selected_uid, painter_factory) {
    var series_list = $("#series-selection");
    series_list.empty();
    var size = 128;
    var idx = 0;
    for(var uid in series) {
        idx++;
        instance_number_sort(series[uid].files);
        var item = $("<li>");
        var thumb_canvas = document.createElement("canvas");
        thumb_canvas.id = 'canvas_thumb_' + idx;
        thumb_canvas.width = size;
        thumb_canvas.height = size;
        item.append(thumb_canvas);
        item.addClass('series-link');
        if(uid == selected_uid) {
            item.addClass('series-selected');
        }
        //draw_thumbnail_to_canvas(series[uid].files[0], 
        //                         thumb_canvas.getContext('2d'), 
        //                         size);
        item.click((function(u) {
            return function() {
                series_list.find("li").removeClass('series-selected');
                $(this).addClass('series-selected');
                app.set_series(u);
            }
        })(uid));
        series_list.append(item);
        var painter = painter_factory(thumb_canvas.id);
        painter.init(thumb_canvas.id);
        painter.set_cluts(ClutManager.r('Plain'), ClutManager.g('Plain'), ClutManager.b('Plain'));
        painter.set_file(series[uid].files[0]);
        painter.set_windowing(40, 200);
        painter.draw_image();
    }
}

function fill_metadata_table(file) {
    $("#metadata-table tbody").empty();
    for(var key in file.data_elements) {
        var element = file.data_elements[key];
        var tag = $("<td>").html(tag_repr(element.tag));
        var dictmatch = dcmdict[element.tag];
        var name = $("<td>").html("unknown");
        if(dictmatch != undefined)
            var name = $("<td>").html(dcmdict[element.tag][1]);
        var value = $("<td>").html('N/A');
        var val = element.get_repr();
        if(val != undefined) {
            var value = $("<td>").html(element.get_repr());
        }

        var tr = $("<tr>").append(tag).append(name).append(value);
        /*if(i%2 == 0)
            tr.addClass("even");*/
        $("#metadata-table tbody").append(tr);
    }
}

function draw_thumbnail_to_canvas(file, ctx, size) {
    var imageData = ctx.createImageData(size, size);
    // use ww/wl from file
    var wl = 500;
    var ww = 1000;
    if(file.get_element(0x00281050) !== 0) {
        wl = file.get_element(0x00281050).get_value();
        wl = (wl.constructor == Array) ? wl[0] : wl;
        ww = file.get_element(0x00281051).get_value();
        ww = (ww.constructor == Array) ? ww[0] : ww;
    }
    var step = file.columns / size;

    for(var row=0;row<file.Rows;row+=step) {
        for(var col=0;col<file.Columns;col+=step) {
            var data_idx = (col + row*file.columns)*2;
            var intensity = file.PixelData[data_idx+1]*256.0 + file.PixelData[data_idx];
            intensity = intensity * file.RescaleSlope + file.RescaleIntercept;
            var lower_bound = wl - ww/2.0;
            var upper_bound = wl + ww/2.0;
            var intensity = (intensity - lower_bound)/(upper_bound - lower_bound);

            if(intensity < 0.0)
                intensity = 0.0;
            if(intensity > 1.0)
                intensity = 1.0;

            intensity *= 255.0;

            var canvas_idx = (col/step + (row/step)*size)*4;
            var rounded_intensity = Math.round(intensity);
            imageData.data[canvas_idx] = ClutManager.r('Plain')[rounded_intensity];
            imageData.data[canvas_idx+1] = ClutManager.g('Plain')[rounded_intensity];
            imageData.data[canvas_idx+2] = ClutManager.b('Plain')[rounded_intensity];
            imageData.data[canvas_idx+3] = 0xFF;
        }
    }
    ctx.putImageData(imageData, 0, 0);
}

function create_image_infobox(viewarea) {
    var infodiv = document.createElement('div');
    infodiv.id = 'infobox';
    infodiv.style.position = "absolute";
    infodiv.style.top = "6px";
    infodiv.style.color = "white";
    infodiv.style.fontSize = "14px";
    var infolist = document.createElement('ul');
    infolist.style.margin = "0px";
    infolist.style.paddingLeft = "7px";

    // Create list item and two p-tags for each property
    var attrs = [['size', 'Size'], ['ww', 'WW'], ['wl', 'WL'], ['sliceidx', 'Slice'], ['density', 'Density']];
    for(var idx in attrs) {
        var li = document.createElement('li');
        li.style.listStyle = 'none';
        li.style.margin = '0px';

        var plabel = document.createElement('p');
        plabel.style.cssFloat = 'left';
        plabel.innerHTML = attrs[idx][1];
        plabel.style.width = "50px";
        plabel.style.padding = "0px";
        plabel.style.margin = "0px";

        var pvalue = document.createElement('p');
        pvalue.style.cssFloat = 'left';
        pvalue.id = attrs[idx][0]+'_info';
        pvalue.style.padding = "0px";
        pvalue.style.margin = "0px";

        var cleardiv = document.createElement('div');
        cleardiv.style.clear = 'both';

        li.appendChild(plabel);
        li.appendChild(pvalue);
        li.appendChild(cleardiv);
        infolist.appendChild(li);
    }
    infodiv.appendChild(infolist);
    viewarea.appendChild(infodiv);
}
;
/**
* Copyright 2012 Infogosoft
*
* This file is part of jsdicom.
*
* jsdicom is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
*
* jsdicom is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License along with jsdicom. If not, see http://www.gnu.org/licenses/.
*/

var fragment_shader_8 = "\
\
varying highp vec2 vTextureCoord;\
uniform sampler2D uSampler;\
uniform highp float uWW;\
uniform highp float uWL;\
uniform highp float uRS;\
uniform highp float uRI;\
uniform highp float uAlpha;\
uniform sampler2D uClutSampler;\
\
void main(void) {  \
    highp vec4 texcolor = texture2D(uSampler, vTextureCoord); \
    highp float intensity = texcolor.r*65536.0;\
    highp float lower_bound = (uWW * -0.5) + uWL; \
    highp float upper_bound = (uWW *  0.5) + uWL; \
    intensity = (intensity - lower_bound)/(upper_bound - lower_bound);\
\
    gl_FragColor = vec4(intensity, intensity, intensity, uAlpha);\
}";

var fragment_shader_16 = "\
\
varying highp vec2 vTextureCoord;\
uniform sampler2D uSampler;\
uniform sampler2D uClutSampler;\
uniform highp float uWW;\
uniform highp float uWL;\
uniform highp float uRS;\
uniform highp float uRI;\
uniform highp float uAlpha;\
\
void main(void) {  \
    highp vec4 texcolor = texture2D(uSampler, vTextureCoord); \
    highp float intensity = texcolor.r*256.0 + texcolor.a*65536.0;\
    highp float rescaleIntercept = uRI;\
    highp float rescaleSlope = uRS;\
    intensity = intensity * rescaleSlope + rescaleIntercept;\
    highp float lower_bound = (uWW * -0.5) + uWL; \
    highp float upper_bound = (uWW *  0.5) + uWL; \
    intensity = (intensity - lower_bound)/(upper_bound - lower_bound);\
    highp vec4 clutcolor = texture2D(uClutSampler, vec2(intensity, intensity)); \
    gl_FragColor = vec4(clutcolor.r, clutcolor.g, clutcolor.b, uAlpha);\
}";

var fragment_shader_rgb_8 = "\
varying highp vec2 vTextureCoord;\
uniform sampler2D uSampler;\
uniform highp float uAlpha;\
\
void main()\
{\
    highp vec4 texcolor = texture2D(uSampler, vTextureCoord); \
    gl_FragColor = vec4(texcolor.r, texcolor.g, texcolor.b, 1.0);\
}";


var vertex_shader = "\
attribute vec3 aVertexPosition;\
attribute vec2 aTextureCoord;\
\
uniform mat4 uMVMatrix;\
uniform mat4 uPMatrix;\
\
varying highp vec2 vTextureCoord;\
\
void main(void) {\
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\
    vTextureCoord = aTextureCoord;\
}";

/**
* Copyright 2012 Infogosoft
*
* This file is part of jsdicom.
*
* jsdicom is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
*
* jsdicom is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License along with jsdicom. If not, see http://www.gnu.org/licenses/.
*/
// All tools may implement any of the following functions
// mousedown(x, y)
// mouseup(x, y)
// mousemove(x, y)
// mouseclick(x, y)
// draw(canvas)
// set_file(file)

function MeasureTool(app) {
    this.in_motion = false;
    this.app = app;
    this.file;
    this.startX;
    this.startY;
    this.currX;
    this.currY;

    this.click = function(canvas_pos, image_pos) {
        x = canvas_pos[0]; y = canvas_pos[1];
        if(this.in_motion) {
            this.in_motion = false;
            // Add line drawing obj to file
            if(this.file.measurelines === undefined)
                this.file.measurelines = [];
            this.file.measurelines.push([this.startX, this.startY, this.currX, this.currY]);
        } else {
            this.startX = x;
            this.startY = y;
            this.in_motion = true;
        }
    }

    this.mousemove = function(canvas_pos, image_pos) {
        x = canvas_pos[0]; y = canvas_pos[1];
        if(this.in_motion) {
            this.currX = x;
            this.currY = y;
            app.draw_image();
        }
    }

    this.postdraw = function(canvas) {
        // Draw current line
        if (this.in_motion) {
            canvas.beginPath();
            canvas.moveTo(this.startX, this.startY);
            canvas.lineTo(this.currX, this.currY);
            canvas.strokeStyle = '#f44'; // red
            canvas.lineWidth   = 4;
            canvas.stroke();
            canvas.closePath()
        }
        lines = this.file.measurelines;
        for(idx in lines) { 
            canvas.beginPath();
            canvas.moveTo(lines[idx][0], lines[idx][1]);
            canvas.lineTo(lines[idx][2], lines[idx][3]);
            canvas.strokeStyle = '#f44'; // red
            canvas.lineWidth   = 4;
            canvas.stroke();
            canvas.closePath()
        }
        
    }

    this.set_file = function(file) {
        this.file = file;
    }
    return this;
}

function WindowLevelTool(app) {
    this.is_mouse_down = false;
    this.app = app;
    this.last_mouse_pos_x = 0;
    this.last_mouse_pos_y = 0;

    this.scroll = function(detail) {
        this.app.set_slice_idx(this.app.get_slice_idx() + detail);
    }
    this.mousedown = function(canvas_pos, image_pos) {
        this.is_mouse_down = true;
    }

    this.mouseup = function(canvas_pos, image_pos) {
        this.is_mouse_down = false;
    }

    this.mousemove = function(canvas_pos, image_pos) {
        x = canvas_pos[0]; y = canvas_pos[1];
        if(this.is_mouse_down) {
            var curr_windowing = this.app.get_windowing();
            var xdiff = x - this.last_mouse_pos_x;
            var ydiff = y - this.last_mouse_pos_y
            app.set_windowing(curr_windowing[0] + xdiff, Math.max(curr_windowing[1] + ydiff, 0));
            app.draw_image();
        }
        this.last_mouse_pos_x = x;
        this.last_mouse_pos_y = y;
    }

    this.postdraw = function(canvas) {
    }

    this.click = function(canvas_pos, image_pos) {
    }

    this.set_file = function(file) {
    }
    return this;
}

function ZoomPanTool(app) {
    this.is_mouse_down = false;
    this.app = app;
    this.last_mouse_pos_x = 0;
    this.last_mouse_pos_y = 0;

    this.scroll = function(detail) {
        this.app.set_scale(this.app.get_scale() + detail/100.0);
    }

    this.mousedown = function(canvas_pos, image_pos) {
        this.is_mouse_down = true;
        var file = app.files[app.curr_file_idx];
        this.mouse_down_pos = canvas_pos;
        this.orig_pan = [0,0];
        var op = app.get_pan();
        this.orig_pan[0] = op[0];
        this.orig_pan[1] = op[1];
        // TODO: this should be the painter's (or perhaps the app's) responsibility
        this.pixel_size = app.painter.pan_unit();
    }

    this.mouseup = function(canvas_pos, image_pos) {
        this.is_mouse_down = false;
    }

    this.mousemove = function(canvas_pos, image_pos) {
        if(this.is_mouse_down) {
            var xdiff = (this.mouse_down_pos[0] - canvas_pos[0]);
            var ydiff = (this.mouse_down_pos[1] - canvas_pos[1]);
            var pan = [0,0];
            pan[0] += xdiff * this.pixel_size;
            pan[1] += ydiff * this.pixel_size;
            app.set_pan(this.orig_pan[0] - pan[0], this.orig_pan[1] - pan[1]);
        }
    }

    this.postdraw = function(canvas) {
    }

    this.click = function(canvas_pos, image_pos) {
    }

    this.set_file = function(file) {
    }
    return this;
}

tools = {
    'Windowing': WindowLevelTool,
    'Zoom/Pan': ZoomPanTool,
}
;
/*
	Touchy.js
	Socket-style finger management for touch events

	Jairaj Sethi
*/

(function(){function o(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&(a=a.attachEvent("on"+b,c),h[a]={name:b,callback:c})}function n(a){this.id=a;this.points=[];this.callbacks={start:[],move:[],end:[]}}function j(a){this.fingers=!a?[]:p(a,function(a){return new n(a)});this.callbacks={start:[],move:[],end:[]}}function k(a,b){return p(a,function(a){return{id:a.identifier,x:a.pageX,y:a.pageY,time:b}})}function l(a,b){function c(a){var c=[];d(a,function(a){var b=new n(a.id);b.points.push(a);
c.push([b,a]);i.add(b)});d(c,function(a){b.any&&b.any(i,a[0]);a[0].trigger("start",a[1])});i.trigger("start",a)}function e(a){var b=[];d(a,function(a){var c=i.get(a.id);c.points.push(a);b.push([c,a])});d(b,function(a){a[0].trigger("move",a[1])});i.trigger("move",a)}function r(a){var b=[];d(a,function(a){var c=i.get(a.id);c.points.push(a);b.push([c,a]);i.remove(c)});d(b,function(a){a[0].trigger("end",a[1])});i.trigger("end",a)}function f(a){var b=[];d(a,function(a){var c=g.get(a.id);c.points.push(a);
b.push([c,a])});d(b,function(a){a[0].trigger("move",a[1])});g.trigger("move",a)}function h(a,b){m();var c=s(b,function(b){var c=!0;d(a,function(a){a.id==b.id&&(c=!1)});return c});l(c)}function l(a){if(0!=a.length){g=new j;var c=[];d(a,function(a){var b=new n(a.id);b.points.push(a);c.push([b,a]);g.add(b)});var e=b[{1:"one",2:"two",3:"three",4:"four",5:"five"}[g.fingers.length]];e&&e.apply(window,[g].concat(g.fingers));d(c,function(a){a[0].trigger("start",a[1])});g.trigger("start",a)}}function m(){if(g){var a=
[];d(g.fingers,function(b){var c=b.points[b.points.length-1];b.points.push(c);a.push(c);b.trigger("end",b.point)});g.trigger("end",a);g=null}}"function"==typeof b&&(b={any:b});var i=new j,g;o(a,"touchstart",function(a){var b=k(a.touches,a.timeStamp),a=k(a.changedTouches,a.timeStamp);c(a);m();l(b)});o(a,"touchmove",function(a){var b=k(a.touches,a.timeStamp),a=k(a.changedTouches,a.timeStamp);e(a);f(a,b)});o(a,"touchend",function(a){var b=k(a.touches,a.timeStamp),a=k(a.changedTouches,a.timeStamp);r(a);
h(a,b)})}var d=function(){return Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var e=0,d=a.length;e<d;e++)e in a&&b.call(c,a[e],e,a)}}(),q=function(){return Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){for(var c=c||0,e=a.length;c<e;c++)if(c in a&&a[c]===b)return c;return-1}}(),p=function(){return Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var e=
a.length,d=Array(e),f=0;f<e;f++)f in a&&(d[f]=b.call(c,a[f],f,a));return d}}(),s=function(){return Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var e=[],d,f=0,h=a.length;f<h;f++)d=a[f],f in a&&b.call(c,d,f,a)&&e.push(d);return e}}(),h={};n.prototype.on=function(a,b){this.callbacks[a].push(b)};n.prototype.trigger=function(a,b){var c=this;d(this.callbacks[a],function(a){a.call(c,b)})};j.prototype.add=function(a){-1==q(this.fingers,a)&&this.fingers.push(a)};
j.prototype.remove=function(a){a=q(this.fingers,a);-1!=a&&this.fingers.splice(a,1)};j.prototype.get=function(a){var b;d(this.fingers,function(c){c.id==a&&(b=c)});return b};j.prototype.on=function(a,b){this.callbacks[a].push(b)};j.prototype.trigger=function(a,b){var c=this;d(this.callbacks[a],function(a){a.call(c,b)})};var m=function(a){a.preventDefault()};l.stopWindowBounce=function(){o(window,"touchmove",m)};l.startWindowBounce=function(){var a=window;if(a.removeEventListener)a.removeEventListener("touchmove",
m,!1);else if(a.detachEvent)for(var b in h)"touchmove"===h[b].name&&h[b].callback===m&&(a.detachEvent(b),delete h[b])};window.Touchy=l})();
/**
* Copyright 2012 Infogosoft
*
* This file is part of jsdicom.
*
* jsdicom is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
*
* jsdicom is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License along with jsdicom. If not, see http://www.gnu.org/licenses/.
*/

function instance_number_sort(filelist) {
    filelist.sort(function(a,b) {
        return a.InstanceNumber - b.InstanceNumber;
    });
}

function min_max_voi(file) {
    var min = Math.min.apply(this, file.PixelData);
    var max = Math.max.apply(this, file.PixelData);
    var center = min + (max-min)/2;
    var level = max-min;
    return [center, level];
}
;
/**
* Copyright 2012 Infogosoft
*
* This file is part of jsdicom.
*
* jsdicom is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
*
* jsdicom is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License along with jsdicom. If not, see http://www.gnu.org/licenses/.
*/

function GLPainter() {
    this.gl;
    this.shaderProgram;
    this.mvMatrix = mat4.create();
    this.pMatrix = mat4.create();
    this.squareVertexPositionBuffer;
    this.vertexIndexBuffer;
    this.THE_TEXTURE;

    this.ww = 200;
    this.wl = 40;
    this.ztrans_default = -2.41;
    this.ztrans = -2.41;
    this.xtrans = 0.0;
    this.ytrans = 0.0;
    this.fovy = 45;

    this.init = function(canvasid) {
        try {
            var canvas = document.getElementById(canvasid);
            this.gl = canvas.getContext("experimental-webgl");
            this.gl.viewportWidth = canvas.width;
            this.gl.viewportHeight = canvas.height;
        } catch (e) {
        }
        
        this.init_shaders();
        this.init_buffers();
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.enable(this.gl.DEPTH_TEST);

        if (!this.gl) {
            alert("Could not initialise WebGL, sorry :-(");
            return false;
        }
        return true;
    }

    this.get_shader = function(id) {
        var shaderScript = document.getElementById(id);
        if (!shaderScript) {
            return null;
        }

        var str = "";
        var k = shaderScript.firstChild;
        while (k) {
            if (k.nodeType == 3) {
                str += k.textContent;
            }
            k = k.nextSibling;
        }

        var shader;
        if (shaderScript.type == "x-shader/x-fragment") {
            shader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
        } else if (shaderScript.type == "x-shader/x-vertex") {
            shader = this.gl.createShader(this.gl.VERTEX_SHADER);
        } else {
            return null;
        }

        this.gl.shaderSource(shader, str);
        this.gl.compileShader(shader);

        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            alert(this.gl.getShaderInfoLog(shader));
            return null;
        }
        return shader;
    }



    this.init_shaders = function() {
        var fragmentShader = this.get_shader("shader-fs");
        var vertexShader = this.get_shader("shader-vs");

        this.shaderProgram = this.gl.createProgram();
        this.gl.attachShader(this.shaderProgram, vertexShader);
        this.gl.attachShader(this.shaderProgram, fragmentShader);
        this.gl.linkProgram(this.shaderProgram);

        if (!this.gl.getProgramParameter(this.shaderProgram, this.gl.LINK_STATUS)) {
            alert("Could not initialise shaders");
        }

        this.gl.useProgram(this.shaderProgram);

        this.shaderProgram.vertexPositionAttribute = this.gl.getAttribLocation(this.shaderProgram, "aVertexPosition");
        this.gl.enableVertexAttribArray(this.shaderProgram.vertexPositionAttribute);
        this.shaderProgram.textureCoordAttribute = this.gl.getAttribLocation(this.shaderProgram, "aTextureCoord");  
        this.gl.enableVertexAttribArray(this.shaderProgram.textureCoordAttribute); 

        this.shaderProgram.pMatrixUniform = this.gl.getUniformLocation(this.shaderProgram, "uPMatrix");
        this.shaderProgram.mvMatrixUniform = this.gl.getUniformLocation(this.shaderProgram, "uMVMatrix");
        this.shaderProgram.samplerUniform = this.gl.getUniformLocation(this.shaderProgram, "uSampler");
        this.shaderProgram.wlUniform = this.gl.getUniformLocation(this.shaderProgram, "uWL");
        this.shaderProgram.wwUniform = this.gl.getUniformLocation(this.shaderProgram, "uWW");
    }



    this.set_matrix_uniforms = function() {
        this.gl.uniformMatrix4fv(this.shaderProgram.pMatrixUniform, false, pMatrix);
        this.gl.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform, false, mvMatrix);
    }

    this.set_window_uniforms = function() {
        this.gl.uniform1f(this.shaderProgram.wlUniform, this.wl);
        this.gl.uniform1f(this.shaderProgram.wwUniform, this.ww);
    }

    this.init_buffers = function() {
        squareVertexPositionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, squareVertexPositionBuffer);
        vertices = [
            -1.0,  -1.0,  0.0,
             1.0,  -1.0,  0.0,
             1.0,   1.0,  0.0,
            -1.0,   1.0,  0.0
        ];
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);
        squareVertexPositionBuffer.itemSize = 3;
        squareVertexPositionBuffer.numItems = 4;
     
        // Texture coords
        textureCoordBuffer = this.gl.createBuffer();  
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, textureCoordBuffer);  
        
        var textureCoordinates = [  
            0.0,  0.0,  
            1.0,  0.0,  
            1.0,  1.0,  
            0.0,  1.0
        ];  
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(textureCoordinates),  
                      this.gl.STATIC_DRAW);
        textureCoordBuffer.itemSize = 2;
        textureCoordBuffer.numItems = 4;

        vertexIndexBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, vertexIndexBuffer);
        var vertexIndices = [
            0, 1, 2, 0, 2, 3    
        ];
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(vertexIndices), this.gl.STATIC_DRAW);
        vertexIndexBuffer.itemSize = 1;
        vertexIndexBuffer.numItems = 6;
    }

    this.set_file = function(dcmfile) {
        THE_TEXTURE = this.gl.createTexture(); 
        this.gl.bindTexture(this.gl.TEXTURE_2D, THE_TEXTURE);  
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true);
        this.gl.texImage2D(this.gl.TEXTURE_2D,        // target
                      0,                    // level
                      this.gl.LUMINANCE_ALPHA,   // internalformat
                      dcmfile.columns,      // width
                      dcmfile.rows,         // height 
                      0,                    // border
                      this.gl.LUMINANCE_ALPHA,   // format
                      this.gl.UNSIGNED_BYTE,     // type
                      dcmfile.pixel_data);  // data
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
                      
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
    }

    this.draw_image = function() {
        this.gl.viewport(0, 0, this.gl.viewportWidth, this.gl.viewportHeight);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        mat4.perspective(fovy, this.gl.viewportWidth / this.gl.viewportHeight, 0.1, 100.0, pMatrix);
        mat4.identity(mvMatrix);
        mat4.translate(mvMatrix, [xtrans, ytrans, ztrans]);

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, squareVertexPositionBuffer);
        this.gl.vertexAttribPointer(this.shaderProgram.vertexPositionAttribute, 
                               squareVertexPositionBuffer.itemSize, 
                               this.gl.FLOAT, 
                               false, 
                               0, 
                               0);

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, textureCoordBuffer);
        this.gl.vertexAttribPointer(this.shaderProgram.textureCoordAttribute, textureCoordBuffer.itemSize, this.gl.FLOAT, false, 0, 0);

        this.gl.activeTexture(this.gl.TEXTURE0);  
        this.gl.bindTexture(this.gl.TEXTURE_2D, THE_TEXTURE);  
        this.gl.uniform1i(this.shaderProgram.samplerUniform, 0);

        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, vertexIndexBuffer);
        this.set_matrix_uniforms();
        this.set_window_uniforms();
        this.gl.drawElements(this.gl.TRIANGLES, vertexIndexBuffer.numItems, this.gl.UNSIGNED_SHORT, 0);

    }
}
;
/**
* Copyright 2012 Infogosoft
*
* This file is part of jsdicom.
*
* jsdicom is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
*
* jsdicom is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License along with jsdicom. If not, see http://www.gnu.org/licenses/.
*/

function buffer_to_string(buffer, len)
{
    // Check for zeroes?
    var s = ""
    for(var i=0;i<len;++i) {
        if(buffer[i] == 0)
            break;
        s += String.fromCharCode(buffer[i]);
    }
    return s;
}

function buffer_to_string_float(buffer, len)
{
    var vals = buffer_to_string(buffer, len).split("\\").map(parseFloat);
    if(vals.length == 1)
        return vals[0];
    else
        return vals;
}

function buffer_to_unsigned_le(buffer, len) {
    var i = len-1;
    var n = 0;
    for(;i>=0;--i)
    {
        n = n*256 + buffer[i];
    }
    return n;
}

function buffer_to_unsigned_be(buffer, len) {
    var i = 0;
    var n = 0;
    for(;i<len;i++)
    {
        n = n*256 + buffer[i];
    }
    return n;
}

function buffer_to_uint16array_le(buffer, len) {
    retval = new Uint16Array(buffer.buffer, buffer.byteOffset, len/2);

    return retval;
}

function buffer_to_uint16array_be(buffer, len) {
    for(var i=0; i<len; i+=2) {
        ra = buffer[i];
        rb = buffer[i+1];
        buffer[i] = rb;
        buffer[i+1] = ra;
    }

    retval = new Uint16Array(buffer.buffer, buffer.byteOffset, len/2);

    return retval;
}

function buffer_to_uint8array(buffer, len) {
    return new Uint8Array(buffer.buffer, buffer.byteOffset, len);
}

function buffer_to_integer_string(buffer, len) {
    return parseInt(buffer_to_string(buffer, len));
}

// Converts value to readable format
var element_to_repr_le = {
    "SH": buffer_to_string,
    "AE": buffer_to_string,
    "AS": buffer_to_string,
    "DS": buffer_to_string,
    "CS": buffer_to_string,
    "UI": buffer_to_string,
    "DA": buffer_to_string,
    "PN": buffer_to_string,
    "TM": buffer_to_string,
    "UT": buffer_to_string,
    "US": buffer_to_unsigned_le,
    "UL": buffer_to_unsigned_le,
    "SS": buffer_to_unsigned_le,
    "IS": buffer_to_integer_string
};

var element_to_repr_be = {
    "SH": buffer_to_string,
    "AE": buffer_to_string,
    "AS": buffer_to_string,
    "DS": buffer_to_string,
    "CS": buffer_to_string,
    "UI": buffer_to_string,
    "DA": buffer_to_string,
    "PN": buffer_to_string,
    "TM": buffer_to_string,
    "UT": buffer_to_string,
    "US": buffer_to_unsigned_be,
    "UL": buffer_to_unsigned_be,
    "SS": buffer_to_unsigned_be,
    "IS": buffer_to_integer_string
};

var element_to_value_le = {
    "SH": buffer_to_string,
    "AE": buffer_to_string,
    "AS": buffer_to_string,
    "DS": buffer_to_string_float,
    "CS": buffer_to_string,
    "UI": buffer_to_string,
    "DA": buffer_to_string,
    "PN": buffer_to_string,
    "LO": buffer_to_string,
    "TM": buffer_to_string,
    "UT": buffer_to_string,
    "US": buffer_to_unsigned_le,
    "UL": buffer_to_unsigned_le,
    "SS": buffer_to_unsigned_le,
    "IS": buffer_to_integer_string,
    "OW": buffer_to_uint16array_le,
    "ox": buffer_to_uint16array_le,
    "OB": buffer_to_uint8array
};

var element_to_value_be = {
    "SH": buffer_to_string,
    "AE": buffer_to_string,
    "AS": buffer_to_string,
    "DS": buffer_to_string_float,
    "CS": buffer_to_string,
    "UI": buffer_to_string,
    "DA": buffer_to_string,
    "PN": buffer_to_string,
    "LO": buffer_to_string,
    "TM": buffer_to_string,
    "UT": buffer_to_string,
    "US": buffer_to_unsigned_be,
    "UL": buffer_to_unsigned_be,
    "SS": buffer_to_unsigned_be,
    "IS": buffer_to_integer_string,
    "OW": buffer_to_uint16array_be,
    "ox": buffer_to_uint16array_be,
    "OB": buffer_to_uint8array
};

function tag_repr(tag) {
    var t = tag.toString(16).toUpperCase();
    while(t.length < 8)
        t="0"+t;
    t = "(" + t.substr(0,4) + ", " + t.substr(4,4) + ")";
    return t;
}
// Element to stuff
function element_repr(elem) {
    // Convert tag to dicom format
    var tag = elem.tag.toString(16).toUpperCase();
    while(tag.length < 8)
        tag="0"+tag;
    tag = "(" + tag.substr(0,4) + ", " + tag.substr(4,4) + ")";
    if(elem.vr in element_to_repr)
    {
        return tag + " - " + element_to_repr[elem.vr](elem.data, elem.vl);
    }
    return tag + " VR: " + elem.vr;
}

/*function zero_out_pixel_padding(file, padding_value) {
    // Zero out all pixels with value PixelPaddingValue
    for(var i=0;i<file.pixel_data.length) {
        file.pixel_data
    }
}*/
;
/**
* Copyright 2012 Infogosoft
*
* This file is part of jsdicom.
*
* jsdicom is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
*
* jsdicom is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License along with jsdicom. If not, see http://www.gnu.org/licenses/.
*/
//
//  Copyright (C) 1994-2005, OFFIS
//
//  This software and supporting documentation were developed by
//
//    Kuratorium OFFIS e.V.
//    Healthcare Information and Communication Systems
//    Escherweg 2
//    D-26121 Oldenburg, Germany
//
//  THIS SOFTWARE IS MADE AVAILABLE,  AS IS,  AND OFFIS MAKES NO  WARRANTY
//  REGARDING  THE  SOFTWARE,  ITS  PERFORMANCE,  ITS  MERCHANTABILITY  OR
//  FITNESS FOR ANY PARTICULAR USE, FREEDOM FROM ANY COMPUTER DISEASES  OR
//  ITS CONFORMITY TO ANY SPECIFICATION. THE ENTIRE RISK AS TO QUALITY AND
//  PERFORMANCE OF THE SOFTWARE IS WITH THE USER.
//
//  Author:  Andrew Hewett, Marco Eichelberg
//
//  Purpose:
//  This is the global DICOM data dictionary for the dcmtk class library.
//
//  Last Update:      $Author: meichel $
//  Update Date:      $Date: 2005/11/15 16:59:25 $
//  Source File:      $Source: /share/dicom/cvs-depot/dcmtk/dcmdata/libsrc/dicom.dic,v $
//  CVS/RCS Revision: $Revision: 1.55 $
//  Status:           $State: Exp $
//
//  DANNE NOTE: This is stolen from dicom.dic, range elements has been removed for now

var dcmdict = {
    0x00000000: ["UL", "CommandGroupLength"],
    0x00000002: ["UI", "AffectedSOPClassUID"],
    0x00000003: ["UI", "RequestedSOPClassUID"],
    0x00000100: ["US", "CommandField"],
    0x00000110: ["US", "MessageID"],
    0x00000120: ["US", "MessageIDBeingRespondedTo"],
    0x00000600: ["AE", "MoveDestination"],
    0x00000700: ["US", "Priority"],
    0x00000800: ["US", "DataSetType"],
    0x00000900: ["US", "Status"],
    0x00000901: ["AT", "OffendingElement"],
    0x00000902: ["LO", "ErrorComment"],
    0x00000903: ["US", "ErrorID"],
    0x00001000: ["UI", "AffectedSOPInstanceUID"],
    0x00001001: ["UI", "RequestedSOPInstanceUID"],
    0x00001002: ["US", "EventTypeID"],
    0x00001005: ["AT", "AttributeIdentifierList"],
    0x00001008: ["US", "ActionTypeID"],
    0x00001020: ["US", "NumberOfRemainingSuboperations"],
    0x00001021: ["US", "NumberOfCompletedSuboperations"],
    0x00001022: ["US", "NumberOfFailedSuboperations"],
    0x00001023: ["US", "NumberOfWarningSuboperations"],
    0x00001030: ["AE", "MoveOriginatorApplicationEntityTitle"],
    0x00001031: ["US", "MoveOriginatorMessageID"],
    0x00020000: ["UL", "MetaElementGroupLength"],
    0x00020001: ["OB", "FileMetaInformationVersion"],
    0x00020002: ["UI", "MediaStorageSOPClassUID"],
    0x00020003: ["UI", "MediaStorageSOPInstanceUID"],
    0x00020010: ["UI", "TransferSyntaxUID"],
    0x00020012: ["UI", "ImplementationClassUID"],
    0x00020013: ["SH", "ImplementationVersionName"],
    0x00020016: ["AE", "SourceApplicationEntityTitle"],
    0x00020100: ["UI", "PrivateInformationCreatorUID"],
    0x00020102: ["OB", "PrivateInformation"],
    0x00040000: ["UL", "FileSetGroupLength"],
    0x00041130: ["CS", "FileSetID"],
    0x00041141: ["CS", "FileSetDescriptorFileID"],
    0x00041142: ["CS", "SpecificCharacterSetOfFileSetDescriptorFile"],
    0x00041200: ["up", "OffsetOfTheFirstDirectoryRecordOfTheRootDirectoryEntity"],
    0x00041202: ["up", "OffsetOfTheLastDirectoryRecordOfTheRootDirectoryEntity"],
    0x00041212: ["US", "FileSetConsistencyFlag"],
    0x00041220: ["SQ", "DirectoryRecordSequence"],
    0x00041400: ["up", "OffsetOfTheNextDirectoryRecord"],
    0x00041410: ["US", "RecordInUseFlag"],
    0x00041420: ["up", "OffsetOfReferencedLowerLevelDirectoryEntity"],
    0x00041430: ["CS", "DirectoryRecordType"],
    0x00041432: ["UI", "PrivateRecordUID"],
    0x00041500: ["CS", "ReferencedFileID"],
    0x00041504: ["up", "MRDRDirectoryRecordOffset"],
    0x00041510: ["UI", "ReferencedSOPClassUIDInFile"],
    0x00041511: ["UI", "ReferencedSOPInstanceUIDInFile"],
    0x00041512: ["UI", "ReferencedTransferSyntaxUIDInFile"],
    0x0004151A: ["UI", "ReferencedRelatedGeneralSOPClassUIDInFile"],
    0x00041600: ["UL", "NumberOfReferences"],
    0x00080000: ["UL", "IdentifyingGroupLength"],
    0x00080005: ["CS", "SpecificCharacterSet"],
    0x00080008: ["CS", "ImageType"],
    0x00080012: ["DA", "InstanceCreationDate"],
    0x00080013: ["TM", "InstanceCreationTime"],
    0x00080014: ["UI", "InstanceCreatorUID"],
    0x00080016: ["UI", "SOPClassUID"],
    0x00080018: ["UI", "SOPInstanceUID"],
    0x0008001A: ["UI", "RelatedGeneralSOPClassUID"],
    0x0008001B: ["UI", "OriginalSpecializedSOPClassUID"],
    0x00080020: ["DA", "StudyDate"],
    0x00080021: ["DA", "SeriesDate"],
    0x00080022: ["DA", "AcquisitionDate"],
    0x00080023: ["DA", "ContentDate"],
    0x00080024: ["DA", "OverlayDate"],
    0x00080025: ["DA", "CurveDate"],
    0x0008002A: ["DT", "AcquisitionDatetime"],
    0x00080030: ["TM", "StudyTime"],
    0x00080031: ["TM", "SeriesTime"],
    0x00080032: ["TM", "AcquisitionTime"],
    0x00080033: ["TM", "ContentTime"],
    0x00080034: ["TM", "OverlayTime"],
    0x00080035: ["TM", "CurveTime"],
    0x00080050: ["SH", "AccessionNumber"],
    0x00080052: ["CS", "QueryRetrieveLevel"],
    0x00080054: ["AE", "RetrieveAETitle"],
    0x00080056: ["CS", "InstanceAvailability"],
    0x00080058: ["UI", "FailedSOPInstanceUIDList"],
    0x00080060: ["CS", "Modality"],
    0x00080061: ["CS", "ModalitiesInStudy"],
    0x00080062: ["UI", "SOPClassesInStudy"],
    0x00080064: ["CS", "ConversionType"],
    0x00080068: ["CS", "PresentationIntentType"],
    0x00080070: ["LO", "Manufacturer"],
    0x00080080: ["LO", "InstitutionName"],
    0x00080081: ["ST", "InstitutionAddress"],
    0x00080082: ["SQ", "InstitutionCodeSequence"],
    0x00080090: ["PN", "ReferringPhysiciansName"],
    0x00080092: ["ST", "ReferringPhysiciansAddress"],
    0x00080094: ["SH", "ReferringPhysiciansTelephoneNumbers"],
    0x00080096: ["SQ", "ReferringPhysicianIdentificationSequence"],
    0x00080100: ["SH", "CodeValue"],
    0x00080102: ["SH", "CodingSchemeDesignator"],
    0x00080103: ["SH", "CodingSchemeVersion"],
    0x00080104: ["LO", "CodeMeaning"],
    0x00080105: ["CS", "MappingResource"],
    0x00080106: ["DT", "ContextGroupVersion"],
    0x00080107: ["DT", "ContextGroupLocalVersion"],
    0x0008010B: ["CS", "CodeSetExtensionFlag"],
    0x0008010C: ["UI", "CodingSchemeUID"],
    0x0008010D: ["UI", "CodeSetExtensionCreatorUID"],
    0x0008010F: ["CS", "ContextIdentifier"],
    0x00080110: ["SQ", "CodingSchemeIdentificationSequence"],
    0x00080112: ["LO", "CodingSchemeRegistry"],
    0x00080114: ["ST", "CodingSchemeExternalID"],
    0x00080115: ["ST", "CodingSchemeName"],
    0x00080116: ["ST", "ResponsibleOrganization"],
    0x00080201: ["SH", "TimezoneOffsetFromUTC"],
    0x00081010: ["SH", "StationName"],
    0x00081030: ["LO", "StudyDescription"],
    0x00081032: ["SQ", "ProcedureCodeSequence"],
    0x0008103E: ["LO", "SeriesDescription"],
    0x00081040: ["LO", "InstitutionalDepartmentName"],
    0x00081048: ["PN", "PhysiciansOfRecord"],
    0x00081049: ["SQ", "PhysiciansOfRecordIdentificationSequence"],
    0x00081050: ["PN", "PerformingPhysiciansName"],
    0x00081052: ["SQ", "PerformingPhysicianIdentificationSequence"],
    0x00081060: ["PN", "NameOfPhysiciansReadingStudy"],
    0x00081062: ["SQ", "PhysiciansReadingStudyIdentificationSequence"],
    0x00081070: ["PN", "OperatorsName"],
    0x00081072: ["SQ", "OperatorIdentificationSequence"],
    0x00081080: ["LO", "AdmittingDiagnosesDescription"],
    0x00081084: ["SQ", "AdmittingDiagnosesCodeSequence"],
    0x00081090: ["LO", "ManufacturersModelName"],
    0x00081100: ["SQ", "ReferencedResultsSequence"],
    0x00081110: ["SQ", "ReferencedStudySequence"],
    0x00081111: ["SQ", "ReferencedPerformedProcedureStepSequence"],
    0x00081115: ["SQ", "ReferencedSeriesSequence"],
    0x00081120: ["SQ", "ReferencedPatientSequence"],
    0x00081125: ["SQ", "ReferencedVisitSequence"],
    0x00081130: ["SQ", "ReferencedOverlaySequence"],
    0x0008113A: ["SQ", "ReferencedWaveformSequence"],
    0x00081140: ["SQ", "ReferencedImageSequence"],
    0x00081145: ["SQ", "ReferencedCurveSequence"],
    0x0008114A: ["SQ", "ReferencedInstanceSequence"],
    0x0008114B: ["SQ", "ReferencedRealWorldValueMappingInstanceSequence"],
    0x00081150: ["UI", "ReferencedSOPClassUID"],
    0x00081155: ["UI", "ReferencedSOPInstanceUID"],
    0x0008115A: ["UI", "SOPClassesSupported"],
    0x00081160: ["IS", "ReferencedFrameNumber"],
    0x00081195: ["UI", "TransactionUID"],
    0x00081197: ["US", "FailureReason"],
    0x00081198: ["SQ", "FailedSOPSequence"],
    0x00081199: ["SQ", "ReferencedSOPSequence"],
    0x00081200: ["SQ", "StudiesContainingOtherReferencedInstancesSequence"],
    0x00081250: ["SQ", "RelatedSeriesSequence"],
    0x00082111: ["ST", "DerivationDescription"],
    0x00082112: ["SQ", "SourceImageSequence"],
    0x00082120: ["SH", "StageName"],
    0x00082122: ["IS", "StageNumber"],
    0x00082124: ["IS", "NumberOfStages"],
    0x00082127: ["SH", "ViewName"],
    0x00082128: ["IS", "ViewNumber"],
    0x00082129: ["IS", "NumberOfEventTimers"],
    0x0008212A: ["IS", "NumberOfViewsInStage"],
    0x00082130: ["DS", "EventElapsedTimes"],
    0x00082132: ["LO", "EventTimerNames"],
    0x00082142: ["IS", "StartTrim"],
    0x00082143: ["IS", "StopTrim"],
    0x00082144: ["IS", "RecommendedDisplayFrameRate"],
    0x00082218: ["SQ", "AnatomicRegionSequence"],
    0x00082220: ["SQ", "AnatomicRegionModifierSequence"],
    0x00082228: ["SQ", "PrimaryAnatomicStructureSequence"],
    0x00082229: ["SQ", "AnatomicStructureSpaceOrRegionSequence"],
    0x00082230: ["SQ", "PrimaryAnatomicStructureModifierSequence"],
    0x00082240: ["SQ", "TransducerPositionSequence"],
    0x00082242: ["SQ", "TransducerPositionModifierSequence"],
    0x00082244: ["SQ", "TransducerOrientationSequence"],
    0x00082246: ["SQ", "TransducerOrientationModifierSequence"],
    0x00083001: ["SQ", "AlternateRepresentationSequence"],
    0x00083010: ["UI", "IrradiationEventUID"],
    0x00089007: ["CS", "FrameType"],
    0x00089092: ["SQ", "ReferencedImageEvidenceSequence"],
    0x00089121: ["SQ", "ReferencedRawDataSequence"],
    0x00089123: ["UI", "CreatorVersionUID"],
    0x00089124: ["SQ", "DerivationImageSequence"],
    0x00089154: ["SQ", "SourceImageEvidenceSequence"],
    0x00089205: ["CS", "PixelPresentation"],
    0x00089206: ["CS", "VolumetricProperties"],
    0x00089207: ["CS", "VolumeBasedCalculationTechnique"],
    0x00089208: ["CS", "ComplexImageComponent"],
    0x00089209: ["CS", "AcquisitionContrast"],
    0x00089215: ["SQ", "DerivationCodeSequence"],
    0x00089237: ["SQ", "ReferencedGrayscalePresentationStateSequence"],
    0x00089410: ["SQ", "ReferencedOtherPlaneSequence"],
    0x00089458: ["SQ", "FrameDisplaySequence"],
    0x00089459: ["FL", "RecommendedDisplayFrameRateInFloat"],
    0x00089460: ["CS", "SkipFrameRangeFlag"],
    0x00100000: ["UL", "PatientGroupLength"],
    0x00100010: ["PN", "PatientsName"],
    0x00100020: ["LO", "PatientID"],
    0x00100021: ["LO", "IssuerOfPatientID"],
    0x00100030: ["DA", "PatientsBirthDate"],
    0x00100032: ["TM", "PatientsBirthTime"],
    0x00100040: ["CS", "PatientsSex"],
    0x00100050: ["SQ", "PatientsInsurancePlanCodeSequence"],
    0x00100101: ["SQ", "PatientsPrimaryLanguageCodeSequence"],
    0x00100102: ["SQ", "PatientsPrimaryLanguageCodeModifierSequence"],
    0x00101000: ["LO", "OtherPatientIDs"],
    0x00101001: ["PN", "OtherPatientNames"],
    0x00101005: ["PN", "PatientsBirthName"],
    0x00101010: ["AS", "PatientsAge"],
    0x00101020: ["DS", "PatientsSize"],
    0x00101030: ["DS", "PatientsWeight"],
    0x00101040: ["LO", "PatientsAddress"],
    0x00101060: ["PN", "PatientsMothersBirthName"],
    0x00101080: ["LO", "MilitaryRank"],
    0x00101081: ["LO", "BranchOfService"],
    0x00101090: ["LO", "MedicalRecordLocator"],
    0x00102000: ["LO", "MedicalAlerts"],
    0x00102110: ["LO", "ContrastAllergies"],
    0x00102150: ["LO", "CountryOfResidence"],
    0x00102152: ["LO", "RegionOfResidence"],
    0x00102154: ["SH", "PatientsTelephoneNumbers"],
    0x00102160: ["SH", "EthnicGroup"],
    0x00102180: ["SH", "Occupation"],
    0x001021A0: ["CS", "SmokingStatus"],
    0x001021B0: ["LT", "AdditionalPatientHistory"],
    0x001021C0: ["US", "PregnancyStatus"],
    0x001021D0: ["DA", "LastMenstrualDate"],
    0x001021F0: ["LO", "PatientsReligiousPreference"],
    0x00104000: ["LT", "PatientComments"],
    0x00109431: ["FL", "ExaminedBodyThickness"],
    0x00120000: ["UL", "ClinicalTrialGroupLength"],
    0x00120010: ["LO", "ClinicalTrialSponsorName"],
    0x00120020: ["LO", "ClinicalTrialProtocolID"],
    0x00120021: ["LO", "ClinicalTrialProtocolName"],
    0x00120030: ["LO", "ClinicalTrialSiteID"],
    0x00120031: ["LO", "ClinicalTrialSiteName"],
    0x00120040: ["LO", "ClinicalTrialSubjectID"],
    0x00120042: ["LO", "ClinicalTrialSubjectReadingID"],
    0x00120050: ["LO", "ClinicalTrialTimePointID"],
    0x00120051: ["ST", "ClinicalTrialTimePointDescription"],
    0x00120060: ["LO", "ClinicalTrialCoordinatingCenterName"],
    0x00120062: ["CS", "PatientIdentifyRemoved"],
    0x00120063: ["LO", "DeIdentificationMethod"],
    0x00120064: ["SQ", "DeIdentificationMethodCodeSequence"],
    0x00180000: ["UL", "AcquisitionGroupLength"],
    0x00180010: ["LO", "ContrastBolusAgent"],
    0x00180012: ["SQ", "ContrastBolusAgentSequence"],
    0x00180014: ["SQ", "ContrastBolusAdministrationRouteSequence"],
    0x00180015: ["CS", "BodyPartExamined"],
    0x00180020: ["CS", "ScanningSequence"],
    0x00180021: ["CS", "SequenceVariant"],
    0x00180022: ["CS", "ScanOptions"],
    0x00180023: ["CS", "MRAcquisitionType"],
    0x00180024: ["SH", "SequenceName"],
    0x00180025: ["CS", "AngioFlag"],
    0x00180026: ["SQ", "InterventionDrugInformationSequence"],
    0x00180027: ["TM", "InterventionDrugStopTime"],
    0x00180028: ["DS", "InterventionDrugDose"],
    0x00180029: ["SQ", "InterventionDrugCodeSequence"],
    0x0018002A: ["SQ", "AdditionalDrugSequence"],
    0x00180031: ["LO", "Radiopharmaceutical"],
    0x00180034: ["LO", "InterventionDrugName"],
    0x00180035: ["TM", "InterventionDrugStartTime"],
    0x00180036: ["SQ", "InterventionSequence"],
    0x00180038: ["CS", "InterventionalStatus"],
    0x0018003A: ["ST", "InterventionDescription"],
    0x00180040: ["IS", "CineRate"],
    0x00180050: ["DS", "SliceThickness"],
    0x00180060: ["DS", "KVP"],
    0x00180070: ["IS", "CountsAccumulated"],
    0x00180071: ["CS", "AcquisitionTerminationCondition"],
    0x00180072: ["DS", "EffectiveDuration"],
    0x00180073: ["CS", "AcquisitionStartCondition"],
    0x00180074: ["IS", "AcquisitionStartConditionData"],
    0x00180075: ["IS", "AcquisitionTerminationConditionData"],
    0x00180080: ["DS", "RepetitionTime"],
    0x00180081: ["DS", "EchoTime"],
    0x00180082: ["DS", "InversionTime"],
    0x00180083: ["DS", "NumberOfAverages"],
    0x00180084: ["DS", "ImagingFrequency"],
    0x00180085: ["SH", "ImagedNucleus"],
    0x00180086: ["IS", "EchoNumbers"],
    0x00180087: ["DS", "MagneticFieldStrength"],
    0x00180088: ["DS", "SpacingBetweenSlices"],
    0x00180089: ["IS", "NumberOfPhaseEncodingSteps"],
    0x00180090: ["DS", "DataCollectionDiameter"],
    0x00180091: ["IS", "EchoTrainLength"],
    0x00180093: ["DS", "PercentSampling"],
    0x00180094: ["DS", "PercentPhaseFieldOfView"],
    0x00180095: ["DS", "PixelBandwidth"],
    0x00181000: ["LO", "DeviceSerialNumber"],
    0x00181002: ["UI", "DeviceUID"],
    0x00181004: ["LO", "PlateID"],
    0x00181010: ["LO", "SecondaryCaptureDeviceID"],
    0x00181011: ["LO", "HardcopyCreationDeviceID"],
    0x00181012: ["DA", "DateOfSecondaryCapture"],
    0x00181014: ["TM", "TimeOfSecondaryCapture"],
    0x00181016: ["LO", "SecondaryCaptureDeviceManufacturer"],
    0x00181017: ["LO", "HardcopyDeviceManufacturer"],
    0x00181018: ["LO", "SecondaryCaptureDeviceManufacturersModelName"],
    0x00181019: ["LO", "SecondaryCaptureDeviceSoftwareVersions"],
    0x0018101A: ["LO", "HardcopyDeviceSoftwareVersion"],
    0x0018101B: ["LO", "HardcopyDeviceManufacturersModelName"],
    0x00181020: ["LO", "SoftwareVersions"],
    0x00181022: ["SH", "VideoImageFormatAcquired"],
    0x00181023: ["LO", "DigitalImageFormatAcquired"],
    0x00181030: ["LO", "ProtocolName"],
    0x00181040: ["LO", "ContrastBolusRoute"],
    0x00181041: ["DS", "ContrastBolusVolume"],
    0x00181042: ["TM", "ContrastBolusStartTime"],
    0x00181043: ["TM", "ContrastBolusStopTime"],
    0x00181044: ["DS", "ContrastBolusTotalDose"],
    0x00181045: ["IS", "SyringeCounts"],
    0x00181046: ["DS", "ContrastFlowRate"],
    0x00181047: ["DS", "ContrastFlowDuration"],
    0x00181048: ["CS", "ContrastBolusIngredient"],
    0x00181049: ["DS", "ContrastBolusIngredientConcentration"],
    0x00181050: ["DS", "SpatialResolution"],
    0x00181060: ["DS", "TriggerTime"],
    0x00181061: ["LO", "TriggerSourceOrType"],
    0x00181062: ["IS", "NominalInterval"],
    0x00181063: ["DS", "FrameTime"],
    0x00181064: ["LO", "FramingType"],
    0x00181065: ["DS", "FrameTimeVector"],
    0x00181066: ["DS", "FrameDelay"],
    0x00181067: ["DS", "ImageTriggerDelay"],
    0x00181068: ["DS", "MultiplexGroupTimeOffset"],
    0x00181069: ["DS", "TriggerTimeOffset"],
    0x0018106A: ["CS", "SynchronizationTrigger"],
    0x0018106C: ["US", "SynchronizationChannel"],
    0x0018106E: ["UL", "TriggerSamplePosition"],
    0x00181070: ["LO", "RadiopharmaceuticalRoute"],
    0x00181071: ["DS", "RadiopharmaceuticalVolume"],
    0x00181072: ["TM", "RadiopharmaceuticalStartTime"],
    0x00181073: ["TM", "RadiopharmaceuticalStopTime"],
    0x00181074: ["DS", "RadionuclideTotalDose"],
    0x00181075: ["DS", "RadionuclideHalfLife"],
    0x00181076: ["DS", "RadionuclidePositronFraction"],
    0x00181077: ["DS", "RadiopharmaceuticalSpecificActivity"],
    0x00181078: ["DT", "RadiopharmaceuticalStartDatetime"],
    0x00181079: ["DT", "RadiopharmaceuticalStopDatetime"],
    0x00181080: ["CS", "BeatRejectionFlag"],
    0x00181081: ["IS", "LowRRValue"],
    0x00181082: ["IS", "HighRRValue"],
    0x00181083: ["IS", "IntervalsAcquired"],
    0x00181084: ["IS", "IntervalsRejected"],
    0x00181085: ["LO", "PVCRejection"],
    0x00181086: ["IS", "SkipBeats"],
    0x00181088: ["IS", "HeartRate"],
    0x00181090: ["IS", "CardiacNumberOfImages"],
    0x00181094: ["IS", "TriggerWindow"],
    0x00181100: ["DS", "ReconstructionDiameter"],
    0x00181110: ["DS", "DistanceSourceToDetector"],
    0x00181111: ["DS", "DistanceSourceToPatient"],
    0x00181114: ["DS", "EstimatedRadiographicMagnificationFactor"],
    0x00181120: ["DS", "GantryDetectorTilt"],
    0x00181121: ["DS", "GantryDetectorSlew"],
    0x00181130: ["DS", "TableHeight"],
    0x00181131: ["DS", "TableTraverse"],
    0x00181134: ["CS", "TableMotion"],
    0x00181135: ["DS", "TableVerticalIncrement"],
    0x00181136: ["DS", "TableLateralIncrement"],
    0x00181137: ["DS", "TableLongitudinalIncrement"],
    0x00181138: ["DS", "TableAngle"],
    0x0018113A: ["CS", "TableType"],
    0x00181140: ["CS", "RotationDirection"],
    0x00181141: ["DS", "AngularPosition"],
    0x00181142: ["DS", "RadialPosition"],
    0x00181143: ["DS", "ScanArc"],
    0x00181144: ["DS", "AngularStep"],
    0x00181145: ["DS", "CenterOfRotationOffset"],
    0x00181147: ["CS", "FieldOfViewShape"],
    0x00181149: ["IS", "FieldOfViewDimensions"],
    0x00181150: ["IS", "ExposureTime"],
    0x00181151: ["IS", "XRayTubeCurrent"],
    0x00181152: ["IS", "Exposure"],
    0x00181153: ["IS", "ExposureInMicroAs"],
    0x00181154: ["DS", "AveragePulseWidth"],
    0x00181155: ["CS", "RadiationSetting"],
    0x00181156: ["CS", "RectificationType"],
    0x0018115A: ["CS", "RadiationMode"],
    0x0018115E: ["DS", "ImageAndFluoroscopyAreaDoseProduct"],
    0x00181160: ["SH", "FilterType"],
    0x00181161: ["LO", "TypeOfFilters"],
    0x00181162: ["DS", "IntensifierSize"],
    0x00181164: ["DS", "ImagerPixelSpacing"],
    0x00181166: ["CS", "Grid"],
    0x00181170: ["IS", "GeneratorPower"],
    0x00181180: ["SH", "CollimatorGridName"],
    0x00181181: ["CS", "CollimatorType"],
    0x00181182: ["IS", "FocalDistance"],
    0x00181183: ["DS", "XFocusCenter"],
    0x00181184: ["DS", "YFocusCenter"],
    0x00181190: ["DS", "FocalSpots"],
    0x00181191: ["CS", "AnodeTargetMaterial"],
    0x001811A0: ["DS", "BodyPartThickness"],
    0x001811A2: ["DS", "CompressionForce"],
    0x00181200: ["DA", "DateOfLastCalibration"],
    0x00181201: ["TM", "TimeOfLastCalibration"],
    0x00181210: ["SH", "ConvolutionKernel"],
    0x00181242: ["IS", "ActualFrameDuration"],
    0x00181243: ["IS", "CountRate"],
    0x00181244: ["US", "PreferredPlaybackSequencing"],
    0x00181250: ["SH", "ReceiveCoilName"],
    0x00181251: ["SH", "TransmitCoilName"],
    0x00181260: ["SH", "PlateType"],
    0x00181261: ["LO", "PhosphorType"],
    0x00181300: ["DS", "ScanVelocity"],
    0x00181301: ["CS", "WholeBodyTechnique"],
    0x00181302: ["IS", "ScanLength"],
    0x00181310: ["US", "AcquisitionMatrix"],
    0x00181312: ["CS", "InPlanePhaseEncodingDirection"],
    0x00181314: ["DS", "FlipAngle"],
    0x00181315: ["CS", "VariableFlipAngleFlag"],
    0x00181316: ["DS", "SAR"],
    0x00181318: ["DS", "dBdt"],
    0x00181400: ["LO", "AcquisitionDeviceProcessingDescription"],
    0x00181401: ["LO", "AcquisitionDeviceProcessingCode"],
    0x00181402: ["CS", "CassetteOrientation"],
    0x00181403: ["CS", "CassetteSize"],
    0x00181404: ["US", "ExposuresOnPlate"],
    0x00181405: ["IS", "RelativeXRayExposure"],
    0x00181450: ["DS", "ColumnAngulation"],
    0x00181460: ["DS", "TomoLayerHeight"],
    0x00181470: ["DS", "TomoAngle"],
    0x00181480: ["DS", "TomoTime"],
    0x00181490: ["CS", "TomoType"],
    0x00181491: ["CS", "TomoClass"],
    0x00181495: ["IS", "NumberOfTomosynthesisSourceImages"],
    0x00181500: ["CS", "PositionerMotion"],
    0x00181508: ["CS", "PositionerType"],
    0x00181510: ["DS", "PositionerPrimaryAngle"],
    0x00181511: ["DS", "PositionerSecondaryAngle"],
    0x00181520: ["DS", "PositionerPrimaryAngleIncrement"],
    0x00181521: ["DS", "PositionerSecondaryAngleIncrement"],
    0x00181530: ["DS", "DetectorPrimaryAngle"],
    0x00181531: ["DS", "DetectorSecondaryAngle"],
    0x00181600: ["CS", "ShutterShape"],
    0x00181602: ["IS", "ShutterLeftVerticalEdge"],
    0x00181604: ["IS", "ShutterRightVerticalEdge"],
    0x00181606: ["IS", "ShutterUpperHorizontalEdge"],
    0x00181608: ["IS", "ShutterLowerHorizontalEdge"],
    0x00181610: ["IS", "CenterOfCircularShutter"],
    0x00181612: ["IS", "RadiusOfCircularShutter"],
    0x00181620: ["IS", "VerticesOfThePolygonalShutter"],
    0x00181622: ["US", "ShutterPresentationValue"],
    0x00181623: ["US", "ShutterOverlayGroup"],
    0x00181624: ["US", "ShutterPresentationColorCIELabValue"],
    0x00181700: ["CS", "CollimatorShape"],
    0x00181702: ["IS", "CollimatorLeftVerticalEdge"],
    0x00181704: ["IS", "CollimatorRightVerticalEdge"],
    0x00181706: ["IS", "CollimatorUpperHorizontalEdge"],
    0x00181708: ["IS", "CollimatorLowerHorizontalEdge"],
    0x00181710: ["IS", "CenterOfCircularCollimator"],
    0x00181712: ["IS", "RadiusOfCircularCollimator"],
    0x00181720: ["IS", "VerticesOfThePolygonalCollimator"],
    0x00181800: ["CS", "AcquisitionTimeSynchronized"],
    0x00181801: ["SH", "TimeSource"],
    0x00181802: ["CS", "TimeDistributionProtocol"],
    0x00181803: ["LO", "NTPSourceAddress"],
    0x00182001: ["IS", "PageNumberVector"],
    0x00182002: ["SH", "FrameLabelVector"],
    0x00182003: ["DS", "FramePrimaryAngleVector"],
    0x00182004: ["DS", "FrameSecondaryAngleVector"],
    0x00182005: ["DS", "SliceLocationVector"],
    0x00182006: ["SH", "DisplayWindowLabelVector"],
    0x00182010: ["DS", "NominalScannedPixelSpacing"],
    0x00182020: ["CS", "DigitizingDeviceTransportDirection"],
    0x00182030: ["DS", "RotationOfScannedFilm"],
    0x00183100: ["CS", "IVUSAcquisition"],
    0x00183101: ["DS", "IVUSPullbackRate"],
    0x00183102: ["DS", "IVUSGatedRate"],
    0x00183103: ["IS", "IVUSPullbackStartFrameNumber"],
    0x00183104: ["IS", "IVUSPullbackStopFrameNumber"],
    0x00183105: ["IS", "LesionNumber"],
    0x00185000: ["SH", "OutputPower"],
    0x00185010: ["LO", "TransducerData"],
    0x00185012: ["DS", "FocusDepth"],
    0x00185020: ["LO", "ProcessingFunction"],
    0x00185021: ["LO", "PostprocessingFunction"],
    0x00185022: ["DS", "MechanicalIndex"],
    0x00185024: ["DS", "BoneThermalIndex"],
    0x00185026: ["DS", "CranialThermalIndex"],
    0x00185027: ["DS", "SoftTissueThermalIndex"],
    0x00185028: ["DS", "SoftTissueFocusThermalIndex"],
    0x00185029: ["DS", "SoftTissueSurfaceThermalIndex"],
    0x00185050: ["IS", "DepthOfScanField"],
    0x00185100: ["CS", "PatientPosition"],
    0x00185101: ["CS", "ViewPosition"],
    0x00185104: ["SQ", "ProjectionEponymousNameCodeSequence"],
    0x00186000: ["DS", "Sensitivity"],
    0x00186011: ["SQ", "SequenceOfUltrasoundRegions"],
    0x00186012: ["US", "RegionSpatialFormat"],
    0x00186014: ["US", "RegionDataType"],
    0x00186016: ["UL", "RegionFlags"],
    0x00186018: ["UL", "RegionLocationMinX0"],
    0x0018601A: ["UL", "RegionLocationMinY0"],
    0x0018601C: ["UL", "RegionLocationMaxX1"],
    0x0018601E: ["UL", "RegionLocationMaxY1"],
    0x00186020: ["SL", "ReferencePixelX0"],
    0x00186022: ["SL", "ReferencePixelY0"],
    0x00186024: ["US", "PhysicalUnitsXDirection"],
    0x00186026: ["US", "PhysicalUnitsYDirection"],
    0x00186028: ["FD", "ReferencePixelPhysicalValueX"],
    0x0018602A: ["FD", "ReferencePixelPhysicalValueY"],
    0x0018602C: ["FD", "PhysicalDeltaX"],
    0x0018602E: ["FD", "PhysicalDeltaY"],
    0x00186030: ["UL", "TransducerFrequency"],
    0x00186031: ["CS", "TransducerType"],
    0x00186032: ["UL", "PulseRepetitionFrequency"],
    0x00186034: ["FD", "DopplerCorrectionAngle"],
    0x00186036: ["FD", "SteeringAngle"],
    0x00186039: ["SL", "DopplerSampleVolumeXPosition"],
    0x0018603B: ["SL", "DopplerSampleVolumeYPosition"],
    0x0018603D: ["SL", "TMLinePositionX0"],
    0x0018603F: ["SL", "TMLinePositionY0"],
    0x00186041: ["SL", "TMLinePositionX1"],
    0x00186043: ["SL", "TMLinePositionY1"],
    0x00186044: ["US", "PixelComponentOrganization"],
    0x00186046: ["UL", "PixelComponentMask"],
    0x00186048: ["UL", "PixelComponentRangeStart"],
    0x0018604A: ["UL", "PixelComponentRangeStop"],
    0x0018604C: ["US", "PixelComponentPhysicalUnits"],
    0x0018604E: ["US", "PixelComponentDataType"],
    0x00186050: ["UL", "NumberOfTableBreakPoints"],
    0x00186052: ["UL", "TableOfXBreakPoints"],
    0x00186054: ["FD", "TableOfYBreakPoints"],
    0x00186056: ["UL", "NumberOfTableEntries"],
    0x00186058: ["UL", "TableOfPixelValues"],
    0x0018605A: ["FL", "TableOfParameterValues"],
    0x00186060: ["FL", "RWaveTimeVector"],
    0x00187000: ["CS", "DetectorConditionsNominalFlag"],
    0x00187001: ["DS", "DetectorTemperature"],
    0x00187004: ["CS", "DetectorType"],
    0x00187005: ["CS", "DetectorConfiguration"],
    0x00187006: ["LT", "DetectorDescription"],
    0x00187008: ["LT", "DetectorMode"],
    0x0018700A: ["SH", "DetectorID"],
    0x0018700C: ["DA", "DateOfLastDetectorCalibration"],
    0x0018700E: ["TM", "TimeOfLastDetectorCalibration"],
    0x00187010: ["IS", "ExposuresOnDetectorSinceLastCalibration"],
    0x00187011: ["IS", "ExposuresOnDetectorSinceManufactured"],
    0x00187012: ["DS", "DetectorTimeSinceLastExposure"],
    0x00187014: ["DS", "DetectorActiveTime"],
    0x00187016: ["DS", "DetectorActivationOffsetFromExposure"],
    0x0018701A: ["DS", "DetectorBinning"],
    0x00187020: ["DS", "DetectorElementPhysicalSize"],
    0x00187022: ["DS", "DetectorElementSpacing"],
    0x00187024: ["CS", "DetectorActiveShape"],
    0x00187026: ["DS", "DetectorActiveDimensions"],
    0x00187028: ["DS", "DetectorActiveOrigin"],
    0x0018702A: ["LO", "DetectorManufacturerName"],
    0x0018702B: ["LO", "DetectorManufacturersModelName"],
    0x00187030: ["DS", "FieldOfViewOrigin"],
    0x00187032: ["DS", "FieldOfViewRotation"],
    0x00187034: ["CS", "FieldOfViewHorizontalFlip"],
    0x00187040: ["LT", "GridAbsorbingMaterial"],
    0x00187041: ["LT", "GridSpacingMaterial"],
    0x00187042: ["DS", "GridThickness"],
    0x00187044: ["DS", "GridPitch"],
    0x00187046: ["IS", "GridAspectRatio"],
    0x00187048: ["DS", "GridPeriod"],
    0x0018704C: ["DS", "GridFocalDistance"],
    0x00187050: ["CS", "FilterMaterial"],
    0x00187052: ["DS", "FilterThicknessMinimum"],
    0x00187054: ["DS", "FilterThicknessMaximum"],
    0x00187060: ["CS", "ExposureControlMode"],
    0x00187062: ["LT", "ExposureControlModeDescription"],
    0x00187064: ["CS", "ExposureStatus"],
    0x00187065: ["DS", "PhototimerSetting"],
    0x00188150: ["DS", "ExposureTimeInMicroS"],
    0x00188151: ["DS", "XRayTubeCurrentInMicroA"],
    0x00189004: ["CS", "ContentQualification"],
    0x00189005: ["SH", "PulseSequenceName"],
    0x00189006: ["SQ", "MRImagingModifierSequence"],
    0x00189008: ["CS", "EchoPulseSequence"],
    0x00189009: ["CS", "InversionRecovery"],
    0x00189010: ["CS", "FlowCompensation"],
    0x00189011: ["CS", "MultipleSpinEcho"],
    0x00189012: ["CS", "MultiPlanarExcitation"],
    0x00189014: ["CS", "PhaseContrast"],
    0x00189015: ["CS", "TimeOfFlightContrast"],
    0x00189016: ["CS", "Spoiling"],
    0x00189017: ["CS", "SteadyStatePulseSequence"],
    0x00189018: ["CS", "EchoPlanarPulseSequence"],
    0x00189019: ["FD", "TagAngleFirstAxis"],
    0x00189020: ["CS", "MagnetizationTransfer"],
    0x00189021: ["CS", "T2Preparation"],
    0x00189022: ["CS", "BloodSignalNulling"],
    0x00189024: ["CS", "SaturationRecovery"],
    0x00189025: ["CS", "SpectrallySelectedSuppression"],
    0x00189026: ["CS", "SpectrallySelectedExcitation"],
    0x00189027: ["CS", "SpatialPreSaturation"],
    0x00189028: ["CS", "Tagging"],
    0x00189029: ["CS", "OversamplingPhase"],
    0x00189030: ["FD", "TagSpacingFirstDimension"],
    0x00189032: ["CS", "GeometryOfKSpaceTraversal"],
    0x00189033: ["CS", "SegmentedKSpaceTraversal"],
    0x00189034: ["CS", "RectilinearPhaseEncodeReordering"],
    0x00189035: ["FD", "TagThickness"],
    0x00189036: ["CS", "PartialFourierDirection"],
    0x00189037: ["CS", "CardiacSynchronizationTechnique"],
    0x00189041: ["LO", "ReceiveCoilManufacturerName"],
    0x00189042: ["SQ", "MRReceiveCoilSequence"],
    0x00189043: ["CS", "ReceiveCoilType"],
    0x00189044: ["CS", "QuadratureReceiveCoil"],
    0x00189045: ["SQ", "MultiCoilDefinitionSequence"],
    0x00189046: ["LO", "MultiCoilConfiguration"],
    0x00189047: ["SH", "MultiCoilElementName"],
    0x00189048: ["CS", "MultiCoilElementUsed"],
    0x00189049: ["SQ", "MRTransmitCoilSequence"],
    0x00189050: ["LO", "TransmitCoilManufacturerName"],
    0x00189051: ["CS", "TransmitCoilType"],
    0x00189052: ["FD", "SpectralWidth"],
    0x00189053: ["FD", "ChemicalShiftReference"],
    0x00189054: ["CS", "VolumeLocalizationTechnique"],
    0x00189058: ["US", "MRAcquisitionFrequencyEncodingSteps"],
    0x00189059: ["CS", "Decoupling"],
    0x00189060: ["CS", "DecoupledNucleus"],
    0x00189061: ["FD", "DecouplingFrequency"],
    0x00189062: ["CS", "DecouplingMethod"],
    0x00189063: ["FD", "DecouplingChemicalShiftReference"],
    0x00189064: ["CS", "KSpaceFiltering"],
    0x00189065: ["CS", "TimeDomainFiltering"],
    0x00189066: ["US", "NumberOfZeroFills"],
    0x00189067: ["CS", "BaselineCorrection"],
    0x00189069: ["FD", "ParallelReductionFactorInPlane"],
    0x00189070: ["FD", "CardiacRRIntervalSpecified"],
    0x00189073: ["FD", "AcquisitionDuration"],
    0x00189074: ["DT", "FrameAcquisitionDatetime"],
    0x00189075: ["CS", "DiffusionDirectionality"],
    0x00189076: ["SQ", "DiffusionGradientDirectionSequence"],
    0x00189077: ["CS", "ParallelAcquisition"],
    0x00189078: ["CS", "ParallelAcquisitionTechnique"],
    0x00189079: ["FD", "InversionTimes"],
    0x00189080: ["ST", "MetaboliteMapDescription"],
    0x00189081: ["CS", "PartialFourier"],
    0x00189082: ["FD", "EffectiveEchoTime"],
    0x00189083: ["SQ", "MetaboliteMapCodeSequence"],
    0x00189084: ["SQ", "ChemicalShiftSequence"],
    0x00189085: ["CS", "CardiacSignalSource"],
    0x00189087: ["FD", "DiffusionBValue"],
    0x00189089: ["FD", "DiffusionGradientOrientation"],
    0x00189090: ["FD", "VelocityEncodingDirection"],
    0x00189091: ["FD", "VelocityEncodingMinimumValue"],
    0x00189093: ["US", "NumberOfKSpaceTrajectories"],
    0x00189094: ["CS", "CoverageOfKSpace"],
    0x00189095: ["UL", "SpectroscopyAcquisitionPhaseRows"],
    0x00189098: ["FD", "TransmitterFrequency"],
    0x00189100: ["CS", "ResonantNucleus"],
    0x00189101: ["CS", "FrequencyCorrection"],
    0x00189103: ["SQ", "MRSpectroscopyFOVGeometrySequence"],
    0x00189104: ["FD", "SlabThickness"],
    0x00189105: ["FD", "SlabOrientation"],
    0x00189106: ["FD", "MidSlabPosition"],
    0x00189107: ["SQ", "MRSpatialSaturationSequence"],
    0x00189112: ["SQ", "MRTimingAndRelatedParametersSequence"],
    0x00189114: ["SQ", "MREchoSequence"],
    0x00189115: ["SQ", "MRModifierSequence"],
    0x00189117: ["SQ", "MRDiffusionSequence"],
    0x00189118: ["SQ", "CardiacTriggerSequence"],
    0x00189119: ["SQ", "MRAveragesSequence"],
    0x00189125: ["SQ", "MRFOVGeometrySequence"],
    0x00189126: ["SQ", "VolumeLocalizationSequence"],
    0x00189127: ["UL", "SpectroscopyAcquisitionDataColumns"],
    0x00189147: ["CS", "DiffusionAnisotropyType"],
    0x00189151: ["DT", "FrameReferenceDatetime"],
    0x00189152: ["SQ", "MRMetaboliteMapSequence"],
    0x00189155: ["FD", "ParallelReductionFactorOutOfPlane"],
    0x00189159: ["UL", "SpectroscopyAcquisitionOutOfPlanePhaseSteps"],
    0x00189166: ["CS", "BulkMotionStatus"],
    0x00189168: ["FD", "ParallelReductionFactorSecondInPlane"],
    0x00189169: ["CS", "CardiacBeatRejectionTechnique"],
    0x00189170: ["CS", "RespiratoryMotionCompensationTechnique"],
    0x00189171: ["CS", "RespiratorySignalSource"],
    0x00189172: ["CS", "BulkMotionCompensationTechnique"],
    0x00189173: ["CS", "BulkMotionSignalSource"],
    0x00189174: ["CS", "ApplicableSafetyStandardAgency"],
    0x00189175: ["LO", "ApplicableSafetyStandardDescription"],
    0x00189176: ["SQ", "OperatingModeSequence"],
    0x00189177: ["CS", "OperatingModeType"],
    0x00189178: ["CS", "OperationMode"],
    0x00189179: ["CS", "SpecificAbsorptionRateDefinition"],
    0x00189180: ["CS", "GradientOutputType"],
    0x00189181: ["FD", "SpecificAbsorptionRateValue"],
    0x00189182: ["FD", "GradientOutput"],
    0x00189183: ["CS", "FlowCompensationDirection"],
    0x00189184: ["FD", "TaggingDelay"],
    0x00189197: ["SQ", "MRVelocityEncodingSequence"],
    0x00189198: ["CS", "FirstOrderPhaseCorrection"],
    0x00189199: ["CS", "WaterReferencedPhaseCorrection"],
    0x00189200: ["CS", "MRSpectroscopyAcquisitionType"],
    0x00189214: ["CS", "RespiratoryCyclePosition"],
    0x00189217: ["FD", "VelocityEncodingMaximumValue"],
    0x00189218: ["FD", "TagSpacingSecondDimension"],
    0x00189219: ["SS", "TagAngleSecondAxis"],
    0x00189220: ["FD", "FrameAcquisitionDuration"],
    0x00189226: ["SQ", "MRImageFrameTypeSequence"],
    0x00189227: ["SQ", "MRSpectroscopyFrameTypeSequence"],
    0x00189231: ["US", "MRAcquisitionPhaseEncodingStepsInPlane"],
    0x00189232: ["US", "MRAcquisitionPhaseEncodingStepsOutOfPlane"],
    0x00189234: ["UL", "SpectroscopyAcquisitionPhaseColumns"],
    0x00189236: ["CS", "CardiacCyclePosition"],
    0x00189239: ["SQ", "SpecificAbsorptionRateSequence"],
    0x00189240: ["US", "RFEchoTrainLength"],
    0x00189241: ["US", "GradientEchoTrainLength"],
    0x00189295: ["FD", "ChemicalShiftsMinimumIntegrationLimitInPpm"],
    0x00189296: ["FD", "ChemicalShiftsMaximumIntegrationLimitInPpm"],
    0x00189301: ["SQ", "CTAcquisitionTypeSequence"],
    0x00189302: ["CS", "AcquisitionType"],
    0x00189303: ["FD", "TubeAngle"],
    0x00189304: ["SQ", "CTAcquisitionDetailsSequence"],
    0x00189305: ["FD", "RevolutionTime"],
    0x00189306: ["FD", "SingleCollimationWidth"],
    0x00189307: ["FD", "TotalCollimationWidth"],
    0x00189308: ["SQ", "CTTableDynamicsSequence"],
    0x00189309: ["FD", "TableSpeed"],
    0x00189310: ["FD", "TableFeedPerRotation"],
    0x00189311: ["FD", "SpiralPitchFactor"],
    0x00189312: ["SQ", "CTGeometrySequence"],
    0x00189313: ["FD", "DataCollectionCenterPatient"],
    0x00189314: ["SQ", "CTReconstructionSequence"],
    0x00189315: ["CS", "ReconstructionAlgorithm"],
    0x00189316: ["CS", "ConvolutionKernelGroup"],
    0x00189317: ["FD", "ReconstructionFieldOfView"],
    0x00189318: ["FD", "ReconstructionTargetCenterPatient"],
    0x00189319: ["FD", "ReconstructionAngle"],
    0x00189320: ["SH", "ImageFilter"],
    0x00189321: ["SQ", "CTExposureSequence"],
    0x00189322: ["FD", "ReconstructionPixelSpacing"],
    0x00189323: ["CS", "ExposureModulationType"],
    0x00189324: ["FD", "EstimatedDoseSaving"],
    0x00189325: ["SQ", "CTXRayDetailsSequence"],
    0x00189326: ["SQ", "CTPositionSequence"],
    0x00189327: ["FD", "TablePosition"],
    0x00189328: ["FD", "ExposureTimeInms"],
    0x00189329: ["SQ", "CTImageFrameTypeSequence"],
    0x00189330: ["FD", "XRayTubeCurrentInmA"],
    0x00189332: ["FD", "ExposureInmAs"],
    0x00189333: ["CS", "ConstantVolumeFlag"],
    0x00189334: ["CS", "FluoroscopyFlag"],
    0x00189335: ["FD", "DistanceSourceToDataCollectionCenter"],
    0x00189337: ["US", "ContrastBolusAgentNumber"],
    0x00189338: ["SQ", "ContrastBolusIngredientCodeSequence"],
    0x00189340: ["SQ", "ContrastAdministrationProfileSequence"],
    0x00189341: ["SQ", "ContrastBolusUsageSequence"],
    0x00189342: ["CS", "ContrastBolusAgentAdministered"],
    0x00189343: ["CS", "ContrastBolusAgentDetected"],
    0x00189344: ["CS", "ContrastBolusAgentPhase"],
    0x00189345: ["FD", "CTDIvol"],
    0x00189401: ["SQ", "ProjectionPixelCalibrationSequence"],
    0x00189402: ["FL", "DistanceSourceToIsocenter"],
    0x00189403: ["FL", "DistanceObjectToTableTop"],
    0x00189404: ["FL", "ObjectPixelSpacingInCenterOfBeam"],
    0x00189405: ["SQ", "PositionerPositionSequence"],
    0x00189406: ["SQ", "TablePositionSequence"],
    0x00189407: ["SQ", "CollimatorShapeSequence"],
    0x00189412: ["SQ", "XA"],
    0x00189420: ["CS", "XRayReceptorType"],
    0x00189423: ["LO", "AcquisitionProtocolName"],
    0x00189424: ["LT", "AcquisitionProtocolDescription"],
    0x00189425: ["CS", "Contrast"],
    0x00189426: ["FL", "DistanceReceptorPlaneToDetectorHousing"],
    0x00189427: ["CS", "IntensifierActiveShape"],
    0x00189428: ["FL", "IntensifierActiveDimension"],
    0x00189429: ["FL", "PhysicalDetectorSize"],
    0x00189430: ["US", "PositionOfIsocenterProjection"],
    0x00189432: ["SQ", "FieldOfViewSequence"],
    0x00189433: ["LO", "FieldOfViewDescription"],
    0x00189434: ["SQ", "ExposureControlSensingRegionsSequence"],
    0x00189435: ["CS", "ExposureControlSensingRegionShape"],
    0x00189436: ["SS", "ExposureControlSensingRegionLeftVerticalEdge"],
    0x00189437: ["SS", "ExposureControlSensingRegionRightVerticalEdge"],
    0x00189438: ["SS", "ExposureControlSensingRegionUpperHorizontalEdge"],
    0x00189439: ["SS", "ExposureControlSensingRegionLowerHorizontalEdge"],
    0x00189440: ["SS", "CenterOfCircularExposureControlSensingRegion"],
    0x00189441: ["US", "RadiusOfCircularExposureControlSensingRegion"],
    0x00189442: ["SS", "VerticesOfThePolygonalExposureControlSensingRegion"],
    0x00189447: ["FL", "ColumnAngulationPatient"],
    0x00189449: ["FL", "BeamAngle"],
    0x00189451: ["SQ", "FrameDetectorParametersSequence"],
    0x00189452: ["FL", "CalculatedAnatomyThickness"],
    0x00189455: ["SQ", "CalibrationSequence"],
    0x00189456: ["SQ", "ObjectThicknessSequence"],
    0x00189457: ["CS", "PlaneIdentification"],
    0x00189461: ["FL", "FieldOfViewDimensionsInFloat"],
    0x00189462: ["SQ", "IsocenterReferenceSystemSequence"],
    0x00189463: ["FL", "PositionerIsocenterPrimaryAngle"],
    0x00189464: ["FL", "PositionerIsocenterSecondaryAngle"],
    0x00189465: ["FL", "PositionerIsocenterDetectorRotationAngle"],
    0x00189466: ["FL", "TableXPositionToIsocenter"],
    0x00189467: ["FL", "TableYPositionToIsocenter"],
    0x00189468: ["FL", "TableZPositionToIsocenter"],
    0x00189469: ["FL", "TableHorizontalRotationAngle"],
    0x00189470: ["FL", "TableHeadTiltAngle"],
    0x00189471: ["FL", "TableCradleTiltAngle"],
    0x00189472: ["SQ", "FrameDisplayShutterSequence"],
    0x00189473: ["FL", "AcquiredImageAreaDoseProduct"],
    0x00189474: ["CS", "CArmPositionerTabletopRelationship"],
    0x00189476: ["SQ", "XRayGeometrySequence"],
    0x00189477: ["SQ", "IrradiationEventIdentificationSequence"],
    0x0018A001: ["SQ", "ContributingEquipmentSequence"],
    0x0018A002: ["DT", "ContributionDateTime"],
    0x0018A003: ["ST", "ContributionDescription"],
    0x00200000: ["UL", "ImageGroupLength"],
    0x0020000D: ["UI", "StudyInstanceUID"],
    0x0020000E: ["UI", "SeriesInstanceUID"],
    0x00200010: ["SH", "StudyID"],
    0x00200011: ["IS", "SeriesNumber"],
    0x00200012: ["IS", "AcquisitionNumber"],
    0x00200013: ["IS", "InstanceNumber"],
    0x00200019: ["IS", "ItemNumber"],
    0x00200020: ["CS", "PatientOrientation"],
    0x00200022: ["IS", "OverlayNumber"],
    0x00200024: ["IS", "CurveNumber"],
    0x00200026: ["IS", "LookupTableNumber"],
    0x00200032: ["DS", "ImagePositionPatient"],
    0x00200037: ["DS", "ImageOrientationPatient"],
    0x00200052: ["UI", "FrameOfReferenceUID"],
    0x00200060: ["CS", "Laterality"],
    0x00200062: ["CS", "ImageLaterality"],
    0x00200100: ["IS", "TemporalPositionIdentifier"],
    0x00200105: ["IS", "NumberOfTemporalPositions"],
    0x00200110: ["DS", "TemporalResolution"],
    0x00200200: ["UI", "SynchronizationFrameOfReferenceUID"],
    0x00201000: ["IS", "SeriesInStudy"],
    0x00201002: ["IS", "ImagesInAcquisition"],
    0x00201004: ["IS", "AcquisitionsInStudy"],
    0x00201040: ["LO", "PositionReferenceIndicator"],
    0x00201041: ["DS", "SliceLocation"],
    0x00201070: ["IS", "OtherStudyNumbers"],
    0x00201200: ["IS", "NumberOfPatientRelatedStudies"],
    0x00201202: ["IS", "NumberOfPatientRelatedSeries"],
    0x00201204: ["IS", "NumberOfPatientRelatedInstances"],
    0x00201206: ["IS", "NumberOfStudyRelatedSeries"],
    0x00201208: ["IS", "NumberOfStudyRelatedInstances"],
    0x00201209: ["IS", "NumberOfSeriesRelatedInstances"],
    0x00204000: ["LT", "ImageComments"],
    0x00209056: ["SH", "StackID"],
    0x00209057: ["UL", "InStackPositionNumber"],
    0x00209071: ["SQ", "FrameAnatomySequence"],
    0x00209072: ["CS", "FrameLaterality"],
    0x00209111: ["SQ", "FrameContentSequence"],
    0x00209113: ["SQ", "PlanePositionSequence"],
    0x00209116: ["SQ", "PlaneOrientationSequence"],
    0x00209128: ["UL", "TemporalPositionIndex"],
    0x00209153: ["FD", "TriggerDelayTime"],
    0x00209156: ["US", "FrameAcquisitionNumber"],
    0x00209157: ["UL", "DimensionIndexValues"],
    0x00209158: ["LT", "FrameComments"],
    0x00209161: ["UI", "ConcatenationUID"],
    0x00209162: ["US", "InConcatenationNumber"],
    0x00209163: ["US", "InConcatenationTotalNumber"],
    0x00209164: ["UI", "DimensionOrganizationUID"],
    0x00209165: ["AT", "DimensionIndexPointer"],
    0x00209167: ["AT", "FunctionalGroupPointer"],
    0x00209213: ["LO", "DimensionIndexPrivateCreator"],
    0x00209221: ["SQ", "DimensionOrganizationSequence"],
    0x00209222: ["SQ", "DimensionIndexSequence"],
    0x00209228: ["UL", "ConcatenationFrameOffsetNumber"],
    0x00209238: ["LO", "FunctionalGroupPrivateCreator"],
    0x00209421: ["LO", "DimensionDescriptionLabel"],
    0x00209450: ["SQ", "PatientOrientationInFrameSequence"],
    0x00209453: ["LO", "FrameLabel"],
    0x00220000: ["UL", "OphtalmologyGroupLength"],
    0x00220001: ["US", "LightPathFilterPass"],
    0x00220002: ["US", "LightPathFilterPassBand"],
    0x00220003: ["US", "ImagePathFilterPass"],
    0x00220004: ["US", "ImagePathFilterPassBand"],
    0x00220005: ["CS", "PatientEyeMovementCommanded"],
    0x00220006: ["SQ", "PatientEyeMovementCommandCodeSequence"],
    0x00220007: ["FL", "SphericalLensPower"],
    0x00220008: ["FL", "CylinderLensPower"],
    0x00220009: ["FL", "CylinderAxis"],
    0x0022000A: ["FL", "EmmetropicMagnification"],
    0x0022000B: ["FL", "IntraOcularPressure"],
    0x0022000C: ["FL", "HorizontalFieldOfView"],
    0x0022000D: ["CS", "PupilDilated"],
    0x0022000E: ["FL", "DegreeOfDilation"],
    0x00220010: ["FL", "StereoBaselineAngle"],
    0x00220011: ["FL", "StereoBaselineDisplacement"],
    0x00220012: ["FL", "StereoHorizontalPixelOffset"],
    0x00220013: ["FL", "StereoVerticalPixelOffset"],
    0x00220014: ["FL", "StereoRotation"],
    0x00220015: ["SQ", "AcquisitionDeviceTypeCodeSequence"],
    0x00220016: ["SQ", "IlluminationTypeCodeSequence"],
    0x00220017: ["SQ", "LightPathFilterTypeStackCodeSequence"],
    0x00220018: ["SQ", "ImagePathFilterTypeStackCodeSequence"],
    0x00220019: ["SQ", "LensesCodeSequence"],
    0x0022001A: ["SQ", "ChannelDescriptionCodeSequence"],
    0x0022001B: ["SQ", "RefractiveStateSequence"],
    0x0022001C: ["SQ", "MydriaticAgentCodeSequence"],
    0x0022001D: ["SQ", "RelativeImagePositionCodeSequence"],
    0x00220020: ["SQ", "StereoPairsSequence"],
    0x00220021: ["SQ", "LeftImageSequence"],
    0x00220022: ["SQ", "RightImageSequence"],
    0x00280000: ["UL", "ImagePresentationGroupLength"],
    0x00280002: ["US", "SamplesPerPixel"],
    0x00280003: ["US", "SamplesPerPixelUsed"],
    0x00280004: ["CS", "PhotometricInterpretation"],
    0x00280006: ["US", "PlanarConfiguration"],
    0x00280008: ["IS", "NumberOfFrames"],
    0x00280009: ["AT", "FrameIncrementPointer"],
    0x0028000A: ["AT", "FrameDimensionPointer"],
    0x00280010: ["US", "Rows"],
    0x00280011: ["US", "Columns"],
    0x00280012: ["US", "Planes"],
    0x00280014: ["US", "UltrasoundColorDataPresent"],
    0x00280030: ["DS", "PixelSpacing"],
    0x00280031: ["DS", "ZoomFactor"],
    0x00280032: ["DS", "ZoomCenter"],
    0x00280034: ["IS", "PixelAspectRatio"],
    0x00280051: ["CS", "CorrectedImage"],
    0x00280100: ["US", "BitsAllocated"],
    0x00280101: ["US", "BitsStored"],
    0x00280102: ["US", "HighBit"],
    0x00280103: ["US", "PixelRepresentation"],
    0x00280106: ["xs", "SmallestImagePixelValue"],
    0x00280107: ["xs", "LargestImagePixelValue"],
    0x00280108: ["xs", "SmallestPixelValueInSeries"],
    0x00280109: ["xs", "LargestPixelValueInSeries"],
    0x00280110: ["xs", "SmallestImagePixelValueInPlane"],
    0x00280111: ["xs", "LargestImagePixelValueInPlane"],
    0x00280120: ["xs", "PixelPaddingValue"],
    0x00280300: ["CS", "QualityControlImage"],
    0x00280301: ["CS", "BurnedInAnnotation"],
    0x00281040: ["CS", "PixelIntensityRelationship"],
    0x00281041: ["SS", "PixelIntensityRelationshipSign"],
    0x00281050: ["DS", "WindowCenter"],
    0x00281051: ["DS", "WindowWidth"],
    0x00281052: ["DS", "RescaleIntercept"],
    0x00281053: ["DS", "RescaleSlope"],
    0x00281054: ["LO", "RescaleType"],
    0x00281055: ["LO", "WindowCenterWidthExplanation"],
    0x00281056: ["CS", "VOILUTFunction"],
    0x00281090: ["CS", "RecommendedViewingMode"],
    0x00281101: ["xs", "RedPaletteColorLookupTableDescriptor"],
    0x00281102: ["xs", "GreenPaletteColorLookupTableDescriptor"],
    0x00281103: ["xs", "BluePaletteColorLookupTableDescriptor"],
    0x00281199: ["UI", "PaletteColorLookupTableUID"],
    0x00281201: ["OW", "RedPaletteColorLookupTableData"],
    0x00281202: ["OW", "GreenPaletteColorLookupTableData"],
    0x00281203: ["OW", "BluePaletteColorLookupTableData"],
    0x00281221: ["OW", "SegmentedRedPaletteColorLookupTableData"],
    0x00281222: ["OW", "SegmentedGreenPaletteColorLookupTableData"],
    0x00281223: ["OW", "SegmentedBluePaletteColorLookupTableData"],
    0x00281300: ["CS", "ImplantPresent"],
    0x00281350: ["CS", "PartialView"],
    0x00281351: ["ST", "PartialViewDescription"],
    0x00281352: ["SQ", "PartialViewCodeSequence"],
    0x0028135A: ["CS", "SpatialLocationsPreserved"],
    0x00282000: ["OB", "ICCProfile"],
    0x00282110: ["CS", "LossyImageCompression"],
    0x00282112: ["DS", "LossyImageCompressionRatio"],
    0x00282114: ["CS", "LossyImageCompressionMethod"],
    0x00283000: ["SQ", "ModalityLUTSequence"],
    0x00283002: ["xs", "LUTDescriptor"],
    0x00283003: ["LO", "LUTExplanation"],
    0x00283004: ["LO", "ModalityLUTType"],
    0x00283006: ["lt", "LUTData"],
    0x00283010: ["SQ", "VOILUTSequence"],
    0x00283110: ["SQ", "SoftcopyVOILUTSequence"],
    0x00285000: ["SQ", "BiPlaneAcquisitionSequence"],
    0x00286010: ["US", "RepresentativeFrameNumber"],
    0x00286020: ["US", "FrameNumbersOfInterestFOI"],
    0x00286022: ["LO", "FramesOfInterestDescription"],
    0x00286023: ["CS", "FrameOfInterestType"],
    0x00286040: ["US", "RWavePointer"],
    0x00286100: ["SQ", "MaskSubtractionSequence"],
    0x00286101: ["CS", "MaskOperation"],
    0x00286102: ["US", "ApplicableFrameRange"],
    0x00286110: ["US", "MaskFrameNumbers"],
    0x00286112: ["US", "ContrastFrameAveraging"],
    0x00286114: ["FL", "MaskSubPixelShift"],
    0x00286120: ["SS", "TIDOffset"],
    0x00286190: ["ST", "MaskOperationExplanation"],
    0x00289001: ["UL", "DataPointRows"],
    0x00289002: ["UL", "DataPointColumns"],
    0x00289003: ["CS", "SignalDomainColumns"],
    0x00289099: ["US", "LargestMonochromePixelValue"],
    0x00289108: ["CS", "DataRepresentation"],
    0x00289110: ["SQ", "PixelMeasuresSequence"],
    0x00289132: ["SQ", "FrameVOILUTSequence"],
    0x00289145: ["SQ", "PixelValueTransformationSequence"],
    0x00289235: ["CS", "SignalDomainRows"],
    0x00289411: ["FL", "DisplayFilterPercentage"],
    0x00289415: ["SQ", "FramePixelShiftSequence"],
    0x00289416: ["US", "SubtractionItemID"],
    0x00289422: ["SQ", "PixelIntensityRelationshipLUTSequence"],
    0x00289443: ["SQ", "FramePixelDataPropertiesSequence"],
    0x00289444: ["CS", "GeometricalProperties"],
    0x00289445: ["FL", "GeometricMaximumDistortion"],
    0x00289446: ["CS", "ImageProcessingApplied"],
    0x00289454: ["CS", "MaskSelectionMode"],
    0x00289475: ["CS", "LUTFunction"],
    0x00320000: ["UL", "StudyGroupLength"],
    0x0032000A: ["CS", "StudyStatusID"],
    0x0032000C: ["CS", "StudyPriorityID"],
    0x00320012: ["LO", "StudyIDIssuer"],
    0x00320032: ["DA", "StudyVerifiedDate"],
    0x00320033: ["TM", "StudyVerifiedTime"],
    0x00320034: ["DA", "StudyReadDate"],
    0x00320035: ["TM", "StudyReadTime"],
    0x00321000: ["DA", "ScheduledStudyStartDate"],
    0x00321001: ["TM", "ScheduledStudyStartTime"],
    0x00321010: ["DA", "ScheduledStudyStopDate"],
    0x00321011: ["TM", "ScheduledStudyStopTime"],
    0x00321020: ["LO", "ScheduledStudyLocation"],
    0x00321021: ["AE", "ScheduledStudyLocationAETitles"],
    0x00321030: ["LO", "ReasonForStudy"],
    0x00321031: ["SQ", "RequestingPhysicianIdentificationSequence"],
    0x00321032: ["PN", "RequestingPhysician"],
    0x00321033: ["LO", "RequestingService"],
    0x00321040: ["DA", "StudyArrivalDate"],
    0x00321041: ["TM", "StudyArrivalTime"],
    0x00321050: ["DA", "StudyCompletionDate"],
    0x00321051: ["TM", "StudyCompletionTime"],
    0x00321055: ["CS", "StudyComponentStatusID"],
    0x00321060: ["LO", "RequestedProcedureDescription"],
    0x00321064: ["SQ", "RequestedProcedureCodeSequence"],
    0x00321070: ["LO", "RequestedContrastAgent"],
    0x00324000: ["LT", "StudyComments"],
    0x00380000: ["UL", "VisitGroupLength"],
    0x00380004: ["SQ", "ReferencedPatientAliasSequence"],
    0x00380008: ["CS", "VisitStatusID"],
    0x00380010: ["LO", "AdmissionID"],
    0x00380011: ["LO", "IssuerOfAdmissionID"],
    0x00380016: ["LO", "RouteOfAdmissions"],
    0x0038001A: ["DA", "ScheduledAdmissionDate"],
    0x0038001B: ["TM", "ScheduledAdmissionTime"],
    0x0038001C: ["DA", "ScheduledDischargeDate"],
    0x0038001D: ["TM", "ScheduledDischargeTime"],
    0x0038001E: ["LO", "ScheduledPatientInstitutionResidence"],
    0x00380020: ["DA", "AdmittingDate"],
    0x00380021: ["TM", "AdmittingTime"],
    0x00380030: ["DA", "DischargeDate"],
    0x00380032: ["TM", "DischargeTime"],
    0x00380040: ["LO", "DischargeDiagnosisDescription"],
    0x00380044: ["SQ", "DischargeDiagnosisCodeSequence"],
    0x00380050: ["LO", "SpecialNeeds"],
    0x00380100: ["SQ", "PertinentDocumentsSequence"],
    0x00380300: ["LO", "CurrentPatientLocation"],
    0x00380400: ["LO", "PatientsInstitutionResidence"],
    0x00380500: ["LO", "PatientState"],
    0x00380502: ["SQ", "PatientClinicalTrialParticipationSequence"],
    0x00384000: ["LT", "VisitComments"],
    0x003A0000: ["UL", "WaveformGroupLength"],
    0x003A0004: ["CS", "WaveformOriginality"],
    0x003A0005: ["US", "NumberOfWaveformChannels"],
    0x003A0010: ["UL", "NumberOfWaveformSamples"],
    0x003A001A: ["DS", "SamplingFrequency"],
    0x003A0020: ["SH", "MultiplexGroupLabel"],
    0x003A0200: ["SQ", "ChannelDefinitionSequence"],
    0x003A0202: ["IS", "WaveformChannelNumber"],
    0x003A0203: ["SH", "ChannelLabel"],
    0x003A0205: ["CS", "ChannelStatus"],
    0x003A0208: ["SQ", "ChannelSourceSequence"],
    0x003A0209: ["SQ", "ChannelSourceModifiersSequence"],
    0x003A020A: ["SQ", "SourceWaveformSequence"],
    0x003A020C: ["LO", "ChannelDerivationDescription"],
    0x003A0210: ["DS", "ChannelSensitivity"],
    0x003A0211: ["SQ", "ChannelSensitivityUnitsSequence"],
    0x003A0212: ["DS", "ChannelSensitivityCorrectionFactor"],
    0x003A0213: ["DS", "ChannelBaseline"],
    0x003A0214: ["DS", "ChannelTimeSkew"],
    0x003A0215: ["DS", "ChannelSampleSkew"],
    0x003A0218: ["DS", "ChannelOffset"],
    0x003A021A: ["US", "WaveformBitsStored"],
    0x003A0220: ["DS", "FilterLowFrequency"],
    0x003A0221: ["DS", "FilterHighFrequency"],
    0x003A0222: ["DS", "NotchFilterFrequency"],
    0x003A0223: ["DS", "NotchFilterBandwidth"],
    0x003A0300: ["SQ", "MultiplexedAudioChannelsDescriptionCodeSequence"],
    0x003A0301: ["IS", "ChannelIdentificationCode"],
    0x003A0302: ["CS", "ChannelMode"],
    0x00400000: ["UL", "ModalityWorklistGroupLength"],
    0x00400001: ["AE", "ScheduledStationAETitle"],
    0x00400002: ["DA", "ScheduledProcedureStepStartDate"],
    0x00400003: ["TM", "ScheduledProcedureStepStartTime"],
    0x00400004: ["DA", "ScheduledProcedureStepEndDate"],
    0x00400005: ["TM", "ScheduledProcedureStepEndTime"],
    0x00400006: ["PN", "ScheduledPerformingPhysiciansName"],
    0x00400007: ["LO", "ScheduledProcedureStepDescription"],
    0x00400008: ["SQ", "ScheduledProtocolCodeSequence"],
    0x00400009: ["SH", "ScheduledProcedureStepID"],
    0x0040000A: ["SQ", "StageCodeSequence"],
    0x0040000B: ["SQ", "ScheduledPerformingPhysicianIdentificationSequence"],
    0x00400010: ["SH", "ScheduledStationName"],
    0x00400011: ["SH", "ScheduledProcedureStepLocation"],
    0x00400012: ["LO", "PreMedication"],
    0x00400020: ["CS", "ScheduledProcedureStepStatus"],
    0x00400100: ["SQ", "ScheduledProcedureStepSequence"],
    0x00400220: ["SQ", "ReferencedNonImageCompositeSOPInstanceSequence"],
    0x00400241: ["AE", "PerformedStationAETitle"],
    0x00400242: ["SH", "PerformedStationName"],
    0x00400243: ["SH", "PerformedLocation"],
    0x00400244: ["DA", "PerformedProcedureStepStartDate"],
    0x00400245: ["TM", "PerformedProcedureStepStartTime"],
    0x00400250: ["DA", "PerformedProcedureStepEndDate"],
    0x00400251: ["TM", "PerformedProcedureStepEndTime"],
    0x00400252: ["CS", "PerformedProcedureStepStatus"],
    0x00400253: ["SH", "PerformedProcedureStepID"],
    0x00400254: ["LO", "PerformedProcedureStepDescription"],
    0x00400255: ["LO", "PerformedProcedureTypeDescription"],
    0x00400260: ["SQ", "PerformedProtocolCodeSequence"],
    0x00400270: ["SQ", "ScheduledStepAttributesSequence"],
    0x00400275: ["SQ", "RequestAttributesSequence"],
    0x00400280: ["ST", "CommentsOnThePerformedProcedureStep"],
    0x00400281: ["SQ", "PerformedProcedureStepDiscontinuationReasonCodeSequence"],
    0x00400293: ["SQ", "QuantitySequence"],
    0x00400294: ["DS", "Quantity"],
    0x00400295: ["SQ", "MeasuringUnitsSequence"],
    0x00400296: ["SQ", "BillingItemSequence"],
    0x00400300: ["US", "TotalTimeOfFluoroscopy"],
    0x00400301: ["US", "TotalNumberOfExposures"],
    0x00400302: ["US", "EntranceDose"],
    0x00400303: ["US", "ExposedArea"],
    0x00400306: ["DS", "DistanceSourceToEntrance"],
    0x0040030E: ["SQ", "ExposureDoseSequence"],
    0x00400310: ["ST", "CommentsOnRadiationDose"],
    0x00400312: ["DS", "XRayOutput"],
    0x00400314: ["DS", "HalfValueLayer"],
    0x00400316: ["DS", "OrganDose"],
    0x00400318: ["CS", "OrganExposed"],
    0x00400320: ["SQ", "BillingProcedureStepSequence"],
    0x00400321: ["SQ", "FilmConsumptionSequence"],
    0x00400324: ["SQ", "BillingSuppliesAndDevicesSequence"],
    0x00400340: ["SQ", "PerformedSeriesSequence"],
    0x00400400: ["LT", "CommentsOnTheScheduledProcedureStep"],
    0x00400440: ["SQ", "ProtocolContextSequence"],
    0x00400441: ["SQ", "ContentItemModifierSequence"],
    0x0040050A: ["LO", "SpecimenAccessionNumber"],
    0x00400550: ["SQ", "SpecimenSequence"],
    0x00400551: ["LO", "SpecimenIdentifier"],
    0x00400555: ["SQ", "AcquisitionContextSequence"],
    0x00400556: ["ST", "AcquisitionContextDescription"],
    0x0040059A: ["SQ", "SpecimenTypeCodeSequence"],
    0x004006FA: ["LO", "SlideIdentifier"],
    0x0040071A: ["SQ", "ImageCenterPointCoordinatesSequence"],
    0x0040072A: ["DS", "XOffsetInSlideCoordinateSystem"],
    0x0040073A: ["DS", "YOffsetInSlideCoordinateSystem"],
    0x0040074A: ["DS", "ZOffsetInSlideCoordinateSystem"],
    0x004008D8: ["SQ", "PixelSpacingSequence"],
    0x004008DA: ["SQ", "CoordinateSystemAxisCodeSequence"],
    0x004008EA: ["SQ", "MeasurementUnitsCodeSequence"],
    0x00401001: ["SH", "RequestedProcedureID"],
    0x00401002: ["LO", "ReasonForTheRequestedProcedure"],
    0x00401003: ["SH", "RequestedProcedurePriority"],
    0x00401004: ["LO", "PatientTransportArrangements"],
    0x00401005: ["LO", "RequestedProcedureLocation"],
    0x00401006: ["SH", "PlacerOrderNumberProcedure"],
    0x00401007: ["SH", "FillerOrderNumberProcedure"],
    0x00401008: ["LO", "ConfidentialityCode"],
    0x00401009: ["SH", "ReportingPriority"],
    0x0040100A: ["SQ", "ReasonForRequestedProcedureCodeSequence"],
    0x00401010: ["PN", "NamesOfIntendedRecipientsOfResults"],
    0x00401011: ["SQ", "IntendedRecipientsOfResultsIdentificationSequence"],
    0x00401101: ["SQ", "PersonIdentificationCodeSequence"],
    0x00401102: ["ST", "PersonsAddress"],
    0x00401103: ["LO", "PersonsTelephoneNumbers"],
    0x00401400: ["LT", "RequestedProcedureComments"],
    0x00402004: ["DA", "IssueDateOfImagingServiceRequest"],
    0x00402005: ["TM", "IssueTimeOfImagingServiceRequest"],
    0x00402008: ["PN", "OrderEnteredBy"],
    0x00402009: ["SH", "OrderEnterersLocation"],
    0x00402010: ["SH", "OrderCallbackPhoneNumber"],
    0x00402016: ["LO", "PlacerOrderNumberImagingServiceRequest"],
    0x00402017: ["LO", "FillerOrderNumberImagingServiceRequest"],
    0x00402400: ["LT", "ImagingServiceRequestComments"],
    0x00403001: ["LO", "ConfidentialityConstraintOnPatientDataDescription"],
    0x00404001: ["CS", "GeneralPurposeScheduledProcedureStepStatus"],
    0x00404002: ["CS", "GeneralPurposePerformedProcedureStepStatus"],
    0x00404003: ["CS", "GeneralPurposeScheduledProcedureStepPriority"],
    0x00404004: ["SQ", "ScheduledProcessingApplicationsCodeSequence"],
    0x00404005: ["DT", "ScheduledProcedureStepStartDateAndTime"],
    0x00404006: ["CS", "MultipleCopiesFlag"],
    0x00404007: ["SQ", "PerformedProcessingApplicationsCodeSequence"],
    0x00404009: ["SQ", "HumanPerformerCodeSequence"],
    0x00404010: ["DT", "ScheduledProcedureStepModificationDateAndTime"],
    0x00404011: ["DT", "ExpectedCompletionDateAndTime"],
    0x00404015: ["SQ", "ResultingGeneralPurposePerformedProcedureStepsSequence"],
    0x00404016: ["SQ", "ReferencedGeneralPurposeScheduledProcedureStepSequence"],
    0x00404018: ["SQ", "ScheduledWorkitemCodeSequence"],
    0x00404019: ["SQ", "PerformedWorkitemCodeSequence"],
    0x00404020: ["CS", "InputAvailabilityFlag"],
    0x00404021: ["SQ", "InputInformationSequence"],
    0x00404022: ["SQ", "RelevantInformationSequence"],
    0x00404023: ["UI", "ReferencedGeneralPurposeScheduledProcedureStepTransactionUID"],
    0x00404025: ["SQ", "ScheduledStationNameCodeSequence"],
    0x00404026: ["SQ", "ScheduledStationClassCodeSequence"],
    0x00404027: ["SQ", "ScheduledStationGeographicLocationCodeSequence"],
    0x00404028: ["SQ", "PerformedStationNameCodeSequence"],
    0x00404029: ["SQ", "PerformedStationClassCodeSequence"],
    0x00404030: ["SQ", "PerformedStationGeographicLocationCodeSequence"],
    0x00404031: ["SQ", "RequestedSubsequentWorkitemCodeSequence"],
    0x00404032: ["SQ", "NonDICOMOutputCodeSequence"],
    0x00404033: ["SQ", "OutputInformationSequence"],
    0x00404034: ["SQ", "ScheduledHumanPerformersSequence"],
    0x00404035: ["SQ", "ActualHumanPerformersSequence"],
    0x00404036: ["LO", "HumanPerformersOrganization"],
    0x00404037: ["PN", "HumanPerformersName"],
    0x00408302: ["DS", "EntranceDoseInmGy"],
    0x00409094: ["SQ", "ReferencedImageRealWorldValueMappingSequence"],
    0x00409096: ["SQ", "RealWorldValueMappingSequence"],
    0x00409098: ["SQ", "PixelValueMappingCodeSequence"],
    0x00409210: ["SH", "LUTLabel"],
    0x00409211: ["xs", "RealWorldValueLastValueMapped"],
    0x00409212: ["FD", "RealWorldValueLUTData"],
    0x00409216: ["xs", "RealWorldValueFirstValueMapped"],
    0x00409224: ["FD", "RealWorldValueIntercept"],
    0x00409225: ["FD", "RealWorldValueSlope"],
    0x0040A010: ["CS", "RelationshipType"],
    0x0040A027: ["LO", "VerifyingOrganization"],
    0x0040A030: ["DT", "VerificationDateTime"],
    0x0040A032: ["DT", "ObservationDateTime"],
    0x0040A040: ["CS", "ValueType"],
    0x0040A043: ["SQ", "ConceptNameCodeSequence"],
    0x0040A050: ["CS", "ContinuityOfContent"],
    0x0040A073: ["SQ", "VerifyingObserverSequence"],
    0x0040A075: ["PN", "VerifyingObserverName"],
    0x0040A078: ["SQ", "AuthorObserverSequence"],
    0x0040A07A: ["SQ", "ParticipantSequence"],
    0x0040A07C: ["SQ", "CustodialOrganizationSequence"],
    0x0040A080: ["CS", "ParticipationType"],
    0x0040A082: ["DT", "ParticipationDatetime"],
    0x0040A084: ["CS", "ObserverType"],
    0x0040A088: ["SQ", "VerifyingObserverIdentificationCodeSequence"],
    0x0040A090: ["SQ", "EquivalentCDADocumentSequence"],
    0x0040A0B0: ["US", "ReferencedWaveformChannels"],
    0x0040A120: ["DT", "DateTime"],
    0x0040A121: ["DA", "Date"],
    0x0040A122: ["TM", "Time"],
    0x0040A123: ["PN", "PersonName"],
    0x0040A124: ["UI", "UID"],
    0x0040A130: ["CS", "TemporalRangeType"],
    0x0040A132: ["UL", "ReferencedSamplePositions"],
    0x0040A136: ["US", "ReferencedFrameNumbers"],
    0x0040A138: ["DS", "ReferencedTimeOffsets"],
    0x0040A13A: ["DT", "ReferencedDatetime"],
    0x0040A160: ["UT", "TextValue"],
    0x0040A168: ["SQ", "ConceptCodeSequence"],
    0x0040A170: ["SQ", "PurposeOfReferenceCodeSequence"],
    0x0040A180: ["US", "AnnotationGroupNumber"],
    0x0040A195: ["SQ", "ModifierCodeSequence"],
    0x0040A300: ["SQ", "MeasuredValueSequence"],
    0x0040A301: ["SQ", "NumericValueQualifierCodeSequence"],
    0x0040A30A: ["DS", "NumericValue"],
    0x0040A360: ["SQ", "PredecessorDocumentsSequence"],
    0x0040A370: ["SQ", "ReferencedRequestSequence"],
    0x0040A372: ["SQ", "PerformedProcedureCodeSequence"],
    0x0040A375: ["SQ", "CurrentRequestedProcedureEvidenceSequence"],
    0x0040A385: ["SQ", "PertinentOtherEvidenceSequence"],
    0x0040A390: ["SQ", "HL7StructuredDocumentReferenceSequence"],
    0x0040A491: ["CS", "CompletionFlag"],
    0x0040A492: ["LO", "CompletionFlagDescription"],
    0x0040A493: ["CS", "VerificationFlag"],
    0x0040A504: ["SQ", "ContentTemplateSequence"],
    0x0040A525: ["SQ", "IdenticalDocumentsSequence"],
    0x0040A730: ["SQ", "ContentSequence"],
    0x0040B020: ["SQ", "AnnotationSequence"],
    0x0040DB00: ["CS", "TemplateIdentifier"],
    0x0040DB73: ["UL", "ReferencedContentItemIdentifier"],
    0x0040E001: ["ST", "HL7InstanceIdentifier"],
    0x0040E004: ["DT", "HL7DocumentEffectiveTime"],
    0x0040E006: ["SQ", "HL7DocumentTypeCodeSequence"],
    0x0040E010: ["ST", "RetrieveURI"],
    0x00420000: ["UL", "EncapsulatedDocumentGroupLength"],
    0x00420010: ["ST", "DocumentTitle"],
    0x00420011: ["OB", "EncapsulatedDocument"],
    0x00420012: ["LO", "MIMETypeOfEncapsulatedDocument"],
    0x00420013: ["SQ", "SourceInstanceSequence"],
    0x00500000: ["UL", "XRayAngioDeviceGroupLength"],
    0x00500004: ["CS", "CalibrationImage"],
    0x00500010: ["SQ", "DeviceSequence"],
    0x00500014: ["DS", "DeviceLength"],
    0x00500016: ["DS", "DeviceDiameter"],
    0x00500017: ["CS", "DeviceDiameterUnits"],
    0x00500018: ["DS", "DeviceVolume"],
    0x00500019: ["DS", "InterMarkerDistance"],
    0x00500020: ["LO", "DeviceDescription"],
    0x00540000: ["UL", "NuclearMedicineGroupLength"],
    0x00540010: ["US", "EnergyWindowVector"],
    0x00540011: ["US", "NumberOfEnergyWindows"],
    0x00540012: ["SQ", "EnergyWindowInformationSequence"],
    0x00540013: ["SQ", "EnergyWindowRangeSequence"],
    0x00540014: ["DS", "EnergyWindowLowerLimit"],
    0x00540015: ["DS", "EnergyWindowUpperLimit"],
    0x00540016: ["SQ", "RadiopharmaceuticalInformationSequence"],
    0x00540017: ["IS", "ResidualSyringeCounts"],
    0x00540018: ["SH", "EnergyWindowName"],
    0x00540020: ["US", "DetectorVector"],
    0x00540021: ["US", "NumberOfDetectors"],
    0x00540022: ["SQ", "DetectorInformationSequence"],
    0x00540030: ["US", "PhaseVector"],
    0x00540031: ["US", "NumberOfPhases"],
    0x00540032: ["SQ", "PhaseInformationSequence"],
    0x00540033: ["US", "NumberOfFramesInPhase"],
    0x00540036: ["IS", "PhaseDelay"],
    0x00540038: ["IS", "PauseBetweenFrames"],
    0x00540039: ["CS", "PhaseDescription"],
    0x00540050: ["US", "RotationVector"],
    0x00540051: ["US", "NumberOfRotations"],
    0x00540052: ["SQ", "RotationInformationSequence"],
    0x00540053: ["US", "NumberOfFramesInRotation"],
    0x00540060: ["US", "RRIntervalVector"],
    0x00540061: ["US", "NumberOfRRIntervals"],
    0x00540062: ["SQ", "GatedInformationSequence"],
    0x00540063: ["SQ", "DataInformationSequence"],
    0x00540070: ["US", "TimeSlotVector"],
    0x00540071: ["US", "NumberOfTimeSlots"],
    0x00540072: ["SQ", "TimeSlotInformationSequence"],
    0x00540073: ["DS", "TimeSlotTime"],
    0x00540080: ["US", "SliceVector"],
    0x00540081: ["US", "NumberOfSlices"],
    0x00540090: ["US", "AngularViewVector"],
    0x00540100: ["US", "TimeSliceVector"],
    0x00540101: ["US", "NumberOfTimeSlices"],
    0x00540200: ["DS", "StartAngle"],
    0x00540202: ["CS", "TypeOfDetectorMotion"],
    0x00540210: ["IS", "TriggerVector"],
    0x00540211: ["US", "NumberOfTriggersInPhase"],
    0x00540220: ["SQ", "ViewCodeSequence"],
    0x00540222: ["SQ", "ViewModifierCodeSequence"],
    0x00540300: ["SQ", "RadionuclideCodeSequence"],
    0x00540302: ["SQ", "AdministrationRouteCodeSequence"],
    0x00540304: ["SQ", "RadiopharmaceuticalCodeSequence"],
    0x00540306: ["SQ", "CalibrationDataSequence"],
    0x00540308: ["US", "EnergyWindowNumber"],
    0x00540400: ["SH", "ImageID"],
    0x00540410: ["SQ", "PatientOrientationCodeSequence"],
    0x00540412: ["SQ", "PatientOrientationModifierCodeSequence"],
    0x00540414: ["SQ", "PatientGantryRelationshipCodeSequence"],
    0x00540500: ["CS", "SliceProgressionDirection"],
    0x00541000: ["CS", "SeriesType"],
    0x00541001: ["CS", "Units"],
    0x00541002: ["CS", "CountsSource"],
    0x00541004: ["CS", "ReprojectionMethod"],
    0x00541100: ["CS", "RandomsCorrectionMethod"],
    0x00541101: ["LO", "AttenuationCorrectionMethod"],
    0x00541102: ["CS", "DecayCorrection"],
    0x00541103: ["LO", "ReconstructionMethod"],
    0x00541104: ["LO", "DetectorLinesOfResponseUsed"],
    0x00541105: ["LO", "ScatterCorrectionMethod"],
    0x00541200: ["DS", "AxialAcceptance"],
    0x00541201: ["IS", "AxialMash"],
    0x00541202: ["IS", "TransverseMash"],
    0x00541203: ["DS", "DetectorElementSize"],
    0x00541210: ["DS", "CoincidenceWindowWidth"],
    0x00541220: ["CS", "SecondaryCountsType"],
    0x00541300: ["DS", "FrameReferenceTime"],
    0x00541310: ["IS", "PrimaryPromptsCountsAccumulated"],
    0x00541311: ["IS", "SecondaryCountsAccumulated"],
    0x00541320: ["DS", "SliceSensitivityFactor"],
    0x00541321: ["DS", "DecayFactor"],
    0x00541322: ["DS", "DoseCalibrationFactor"],
    0x00541323: ["DS", "ScatterFractionFactor"],
    0x00541324: ["DS", "DeadTimeFactor"],
    0x00541330: ["US", "ImageIndex"],
    0x00541400: ["CS", "CountsIncluded"],
    0x00541401: ["CS", "DeadTimeCorrectionFlag"],
    0x00600000: ["UL", "HistogramGroupLength"],
    0x00603000: ["SQ", "HistogramSequence"],
    0x00603002: ["US", "HistogramNumberOfBins"],
    0x00603004: ["xs", "HistogramFirstBinValue"],
    0x00603006: ["xs", "HistogramLastBinValue"],
    0x00603008: ["US", "HistogramBinWidth"],
    0x00603010: ["LO", "HistogramExplanation"],
    0x00603020: ["UL", "HistogramData"],
    0x00700000: ["UL", "PresentationStateGroupLength"],
    0x00700001: ["SQ", "GraphicAnnotationSequence"],
    0x00700002: ["CS", "GraphicLayer"],
    0x00700003: ["CS", "BoundingBoxAnnotationUnits"],
    0x00700004: ["CS", "AnchorPointAnnotationUnits"],
    0x00700005: ["CS", "GraphicAnnotationUnits"],
    0x00700006: ["ST", "UnformattedTextValue"],
    0x00700008: ["SQ", "TextObjectSequence"],
    0x00700009: ["SQ", "GraphicObjectSequence"],
    0x00700010: ["FL", "BoundingBoxTopLeftHandCorner"],
    0x00700011: ["FL", "BoundingBoxBottomRightHandCorner"],
    0x00700012: ["CS", "BoundingBoxTextHorizontalJustification"],
    0x00700014: ["FL", "AnchorPoint"],
    0x00700015: ["CS", "AnchorPointVisibility"],
    0x00700020: ["US", "GraphicDimensions"],
    0x00700021: ["US", "NumberOfGraphicPoints"],
    0x00700022: ["FL", "GraphicData"],
    0x00700023: ["CS", "GraphicType"],
    0x00700024: ["CS", "GraphicFilled"],
    0x00700041: ["CS", "ImageHorizontalFlip"],
    0x00700042: ["US", "ImageRotation"],
    0x00700052: ["SL", "DisplayedAreaTopLeftHandCorner"],
    0x00700053: ["SL", "DisplayedAreaBottomRightHandCorner"],
    0x0070005A: ["SQ", "DisplayedAreaSelectionSequence"],
    0x00700060: ["SQ", "GraphicLayerSequence"],
    0x00700062: ["IS", "GraphicLayerOrder"],
    0x00700066: ["US", "GraphicLayerRecommendedDisplayGrayscaleValue"],
    0x00700067: ["US", "GraphicLayerRecommendedDisplayRGBValue"],
    0x00700068: ["LO", "GraphicLayerDescription"],
    0x00700080: ["CS", "ContentLabel"],
    0x00700081: ["LO", "ContentDescription"],
    0x00700082: ["DA", "PresentationCreationDate"],
    0x00700083: ["TM", "PresentationCreationTime"],
    0x00700084: ["PN", "ContentCreatorsName"],
    0x00700086: ["SQ", "ContentCreatorsIdentificationSequence"],
    0x00700100: ["CS", "PresentationSizeMode"],
    0x00700101: ["DS", "PresentationPixelSpacing"],
    0x00700102: ["IS", "PresentationPixelAspectRatio"],
    0x00700103: ["FL", "PresentationPixelMagnificationRatio"],
    0x00700306: ["CS", "ShapeType"],
    0x00700308: ["SQ", "RegistrationSequence"],
    0x00700309: ["SQ", "MatrixRegistrationSequence"],
    0x0070030A: ["SQ", "MatrixSequence"],
    0x0070030C: ["CS", "FrameOfReferenceTransformationMatrixType"],
    0x0070030D: ["SQ", "RegistrationTypeCodeSequence"],
    0x0070030F: ["ST", "FiducialDescription"],
    0x00700310: ["SH", "FiducialIdentifier"],
    0x00700311: ["SQ", "FiducialIdentifierCodeSequence"],
    0x00700312: ["FD", "ContourUncertaintyRadius"],
    0x00700314: ["SQ", "UsedFiducialsSequence"],
    0x00700318: ["SQ", "GraphicCoordinatesDataSequence"],
    0x0070031A: ["UI", "FiducialUID"],
    0x0070031C: ["SQ", "FiducialSetSequence"],
    0x0070031E: ["SQ", "FiducialSequence"],
    0x00700401: ["US", "GraphicLayerRecommendedDisplayCIELabValue"],
    0x00700402: ["SQ", "BlendingSequence"],
    0x00700403: ["FL", "RelativeOpacity"],
    0x00700404: ["SQ", "ReferencedSpatialRegistrationSequence"],
    0x00700405: ["CS", "BlendingPosition"],
    0x00720000: ["UL", "HangingProtocolGroupLength"],
    0x00720002: ["SH", "HangingProtocolName"],
    0x00720004: ["LO", "HangingProtocolDescription"],
    0x00720006: ["CS", "HangingProtocolLevel"],
    0x00720008: ["LO", "HangingProtocolCreator"],
    0x0072000A: ["DT", "HangingProtocolCreationDatetime"],
    0x0072000C: ["SQ", "HangingProtocolDefinitionSequence"],
    0x0072000E: ["SQ", "HangingProtocolUserIdentificationCodeSequence"],
    0x00720010: ["LO", "HangingProtocolUserGroupName"],
    0x00720012: ["SQ", "SourceHangingProtocolSequence"],
    0x00720014: ["US", "NumberOfPriorsReferenced"],
    0x00720020: ["SQ", "ImageSetsSequence"],
    0x00720022: ["SQ", "ImageSetSelectorSequence"],
    0x00720024: ["CS", "ImageSetSelectorUsageFlag"],
    0x00720026: ["AT", "SelectorAttribute"],
    0x00720028: ["US", "SelectorValueNumber"],
    0x00720030: ["SQ", "TimeBasedImageSetsSequence"],
    0x00720032: ["US", "ImageSetNumber"],
    0x00720034: ["CS", "ImageSetSelectorCategory"],
    0x00720038: ["US", "RelativeTime"],
    0x0072003A: ["CS", "RelativeTimeUnits"],
    0x0072003C: ["SS", "AbstractPriorValue"],
    0x0072003E: ["SQ", "AbstractPriorCodeSequence"],
    0x00720040: ["LO", "ImageSetLabel"],
    0x00720050: ["CS", "SelectorAttributeVR"],
    0x00720052: ["AT", "SelectorSequencePointer"],
    0x00720054: ["LO", "SelectorSequencePointerPrivateCreator"],
    0x00720056: ["LO", "SelectorAttributePrivateCreator"],
    0x00720060: ["AT", "SelectorATValue"],
    0x00720062: ["CS", "SelectorCSValue"],
    0x00720064: ["IS", "SelectorISValue"],
    0x00720066: ["LO", "SelectorLOValue"],
    0x00720068: ["LT", "SelectorLTValue"],
    0x0072006A: ["PN", "SelectorPNValue"],
    0x0072006C: ["SH", "SelectorSHValue"],
    0x0072006E: ["ST", "SelectorSTValue"],
    0x00720070: ["UT", "SelectorUTValue"],
    0x00720072: ["DS", "SelectorDSValue"],
    0x00720074: ["FD", "SelectorFDValue"],
    0x00720076: ["FL", "SelectorFLValue"],
    0x00720078: ["UL", "SelectorULValue"],
    0x0072007A: ["US", "SelectorUSValue"],
    0x0072007C: ["SL", "SelectorSLValue"],
    0x0072007E: ["SS", "SelectorSSValue"],
    0x00720080: ["SQ", "SelectorCodeSequenceValue"],
    0x00720100: ["US", "NumberOfScreens"],
    0x00720102: ["SQ", "NominalScreenDefinitionSequence"],
    0x00720104: ["US", "NumberOfVerticalPixels"],
    0x00720106: ["US", "NumberOfHorizontalPixels"],
    0x00720108: ["FD", "DisplayEnvironmentSpatialPosition"],
    0x0072010A: ["US", "ScreenMinimumGrayscaleBitDepth"],
    0x0072010C: ["US", "ScreenMinimumColorBitDepth"],
    0x0072010E: ["US", "ApplicationMaximumRepaintTime"],
    0x00720200: ["SQ", "DisplaySetsSequence"],
    0x00720202: ["US", "DisplaySetNumber"],
    0x00720204: ["US", "DisplaySetPresentationGroup"],
    0x00720206: ["LO", "DisplaySetPresentationGroupDescription"],
    0x00720208: ["CS", "PartialDataDisplayHandling"],
    0x00720210: ["SQ", "SynchronizedScrollingSequence"],
    0x00720212: ["US", "DisplaySetScrollingGroup"],
    0x00720214: ["SQ", "NavigationIndicatorSequence"],
    0x00720216: ["US", "NavigationDisplaySet"],
    0x00720218: ["US", "ReferenceDisplaySets"],
    0x00720300: ["SQ", "ImageBoxesSequence"],
    0x00720302: ["US", "ImageBoxNumber"],
    0x00720304: ["CS", "ImageBoxLayoutType"],
    0x00720306: ["US", "ImageBoxTileHorizontalDimension"],
    0x00720308: ["US", "ImageBoxTileVerticalDimension"],
    0x00720310: ["CS", "ImageBoxScrollDirection"],
    0x00720312: ["CS", "ImageBoxSmallScrollType"],
    0x00720314: ["US", "ImageBoxSmallScrollAmount"],
    0x00720316: ["CS", "ImageBoxLargeScrollType"],
    0x00720318: ["US", "ImageBoxLargeScrollAmount"],
    0x00720320: ["US", "ImageBoxOverlapPriority"],
    0x00720330: ["FD", "CineRelativeToRealTime"],
    0x00720400: ["SQ", "FilterOperationsSequence"],
    0x00720402: ["CS", "FilterByCategory"],
    0x00720404: ["CS", "FilterByAttributePresence"],
    0x00720406: ["CS", "FilterByOperator"],
    0x00720500: ["CS", "BlendingOperationType"],
    0x00720510: ["CS", "ReformattingOperationType"],
    0x00720512: ["FD", "ReformattingThickness"],
    0x00720514: ["FD", "ReformattingInterval"],
    0x00720516: ["CS", "ReformattingOperationInitialViewDirection"],
    0x00720520: ["CS", "3DRenderingType"],
    0x00720600: ["SQ", "SortingOperationsSequence"],
    0x00720602: ["CS", "SortByCategory"],
    0x00720604: ["CS", "SortingDirection"],
    0x00720700: ["CS", "DisplaySetPatientOrientation"],
    0x00720702: ["CS", "VOIType"],
    0x00720704: ["CS", "PseudoColorType"],
    0x00720706: ["CS", "ShowGrayscaleInverted"],
    0x00720710: ["CS", "ShowImageTrueSizeFlag"],
    0x00720712: ["CS", "ShowGraphicAnnotationFlag"],
    0x00720714: ["CS", "ShowPatientDemographicsFlag"],
    0x00720716: ["CS", "ShowAcquisitionTechniquesFlag"],
    0x00880000: ["UL", "StorageGroupLength"],
    0x00880130: ["SH", "StorageMediaFileSetID"],
    0x00880140: ["UI", "StorageMediaFileSetUID"],
    0x00880200: ["SQ", "IconImageSequence"],
    0x00880904: ["LO", "TopicTitle"],
    0x00880906: ["ST", "TopicSubject"],
    0x00880910: ["LO", "TopicAuthor"],
    0x00880912: ["LO", "TopicKeyWords"],
    0x01000000: ["UL", "AuthorizationGroupLength"],
    0x01000410: ["CS", "SOPInstanceStatus"],
    0x01000420: ["DT", "SOPAuthorizationDateAndTime"],
    0x01000424: ["LT", "SOPAuthorizationComment"],
    0x01000426: ["LO", "AuthorizationEquipmentCertificationNumber"],
    0x04000000: ["UL", "DigitalSignatureGroupLength"],
    0x04000005: ["US", "MACIDNumber"],
    0x04000010: ["UI", "MACCalculationTransferSyntaxUID"],
    0x04000015: ["CS", "MACAlgorithm"],
    0x04000020: ["AT", "DataElementsSigned"],
    0x04000100: ["UI", "DigitalSignatureUID"],
    0x04000105: ["DT", "DigitalSignatureDateTime"],
    0x04000110: ["CS", "CertificateType"],
    0x04000115: ["OB", "CertificateOfSigner"],
    0x04000120: ["OB", "Signature"],
    0x04000305: ["CS", "CertifiedTimestampType"],
    0x04000310: ["OB", "CertifiedTimestamp"],
    0x04000401: ["SQ", "DigitalSignaturePurposeCodeSequence"],
    0x04000402: ["SQ", "ReferencedDigitalSignatureSequence"],
    0x04000403: ["SQ", "ReferencedSOPInstanceMACSequence"],
    0x04000404: ["OB", "MAC"],
    0x04000500: ["SQ", "EncryptedAttributesSequence"],
    0x04000510: ["UI", "EncryptedContentTransferSyntaxUID"],
    0x04000520: ["OB", "EncryptedContent"],
    0x04000550: ["SQ", "ModifiedAttributesSequence"],
    0x20000000: ["UL", "FilmSessionGroupLength"],
    0x20000010: ["IS", "NumberOfCopies"],
    0x2000001E: ["SQ", "PrinterConfigurationSequence"],
    0x20000020: ["CS", "PrintPriority"],
    0x20000030: ["CS", "MediumType"],
    0x20000040: ["CS", "FilmDestination"],
    0x20000050: ["LO", "FilmSessionLabel"],
    0x20000060: ["IS", "MemoryAllocation"],
    0x20000061: ["IS", "MaximumMemoryAllocation"],
    0x20000062: ["CS", "ColorImagePrintingFlag"],
    0x20000063: ["CS", "CollationFlag"],
    0x20000065: ["CS", "AnnotationFlag"],
    0x20000067: ["CS", "ImageOverlayFlag"],
    0x20000069: ["CS", "PresentationLUTFlag"],
    0x2000006A: ["CS", "ImageBoxPresentationLUTFlag"],
    0x200000A0: ["US", "MemoryBitDepth"],
    0x200000A1: ["US", "PrintingBitDepth"],
    0x200000A2: ["SQ", "MediaInstalledSequence"],
    0x200000A4: ["SQ", "OtherMediaAvailableSequence"],
    0x200000A8: ["SQ", "SupportedImageDisplayFormatsSequence"],
    0x20000500: ["SQ", "ReferencedFilmBoxSequence"],
    0x20000510: ["SQ", "ReferencedStoredPrintSequence"],
    0x20100000: ["UL", "FilmBoxGroupLength"],
    0x20100010: ["ST", "ImageDisplayFormat"],
    0x20100030: ["CS", "AnnotationDisplayFormatID"],
    0x20100040: ["CS", "FilmOrientation"],
    0x20100050: ["CS", "FilmSizeID"],
    0x20100052: ["CS", "PrinterResolutionID"],
    0x20100054: ["CS", "DefaultPrinterResolutionID"],
    0x20100060: ["CS", "MagnificationType"],
    0x20100080: ["CS", "SmoothingType"],
    0x201000A6: ["CS", "DefaultMagnificationType"],
    0x201000A7: ["CS", "OtherMagnificationTypesAvailable"],
    0x201000A8: ["CS", "DefaultSmoothingType"],
    0x201000A9: ["CS", "OtherSmoothingTypesAvailable"],
    0x20100100: ["CS", "BorderDensity"],
    0x20100110: ["CS", "EmptyImageDensity"],
    0x20100120: ["US", "MinDensity"],
    0x20100130: ["US", "MaxDensity"],
    0x20100140: ["CS", "Trim"],
    0x20100150: ["ST", "ConfigurationInformation"],
    0x20100152: ["LT", "ConfigurationInformationDescription"],
    0x20100154: ["IS", "MaximumCollatedFilms"],
    0x2010015E: ["US", "Illumination"],
    0x20100160: ["US", "ReflectedAmbientLight"],
    0x20100376: ["DS", "PrinterPixelSpacing"],
    0x20100500: ["SQ", "ReferencedFilmSessionSequence"],
    0x20100510: ["SQ", "ReferencedImageBoxSequence"],
    0x20100520: ["SQ", "ReferencedBasicAnnotationBoxSequence"],
    0x20200000: ["UL", "ImageBoxGroupLength"],
    0x20200010: ["US", "ImagePosition"],
    0x20200020: ["CS", "Polarity"],
    0x20200030: ["DS", "RequestedImageSize"],
    0x20200040: ["CS", "RequestedDecimateCropBehavior"],
    0x20200050: ["CS", "RequestedResolutionID"],
    0x202000A0: ["CS", "RequestedImageSizeFlag"],
    0x202000A2: ["CS", "DecimateCropResult"],
    0x20200110: ["SQ", "BasicGrayscaleImageSequence"],
    0x20200111: ["SQ", "BasicColorImageSequence"],
    0x20300000: ["UL", "AnnotationGroupLength"],
    0x20300010: ["US", "AnnotationPosition"],
    0x20300020: ["LO", "TextString"],
    0x20400000: ["UL", "OverlayBoxGroupLength"],
    0x20400010: ["SQ", "ReferencedOverlayPlaneSequence"],
    0x20400011: ["US", "ReferencedOverlayPlaneGroups"],
    0x20400020: ["SQ", "OverlayPixelDataSequence"],
    0x20400060: ["CS", "OverlayMagnificationType"],
    0x20400070: ["CS", "OverlaySmoothingType"],
    0x20400072: ["CS", "OverlayOrImageMagnification"],
    0x20400074: ["US", "MagnifyToNumberOfColumns"],
    0x20400080: ["CS", "OverlayForegroundDensity"],
    0x20400082: ["CS", "OverlayBackgroundDensity"],
    0x20400090: ["CS", "OverlayMode"],
    0x20400100: ["CS", "ThresholdDensity"],
    0x20500000: ["UL", "PresentationLUTGroupLength"],
    0x20500010: ["SQ", "PresentationLUTSequence"],
    0x20500020: ["CS", "PresentationLUTShape"],
    0x20500500: ["SQ", "ReferencedPresentationLUTSequence"],
    0x21000000: ["UL", "PrintJobGroupLength"],
    0x21000010: ["SH", "PrintJobID"],
    0x21000020: ["CS", "ExecutionStatus"],
    0x21000030: ["CS", "ExecutionStatusInfo"],
    0x21000040: ["DA", "CreationDate"],
    0x21000050: ["TM", "CreationTime"],
    0x21000070: ["AE", "Originator"],
    0x21000140: ["AE", "DestinationAE"],
    0x21000160: ["SH", "OwnerID"],
    0x21000170: ["IS", "NumberOfFilms"],
    0x21000500: ["SQ", "ReferencedPrintJobSequence"],
    0x21100000: ["UL", "PrinterGroupLength"],
    0x21100010: ["CS", "PrinterStatus"],
    0x21100020: ["CS", "PrinterStatusInfo"],
    0x21100030: ["LO", "PrinterName"],
    0x21100099: ["SH", "PrintQueueID"],
    0x21200000: ["UL", "QueueGroupLength"],
    0x21200010: ["CS", "QueueStatus"],
    0x21200050: ["SQ", "PrintJobDescriptionSequence"],
    0x21200070: ["SQ", "QueueReferencedPrintJobSequence"],
    0x21300000: ["UL", "PrintContentGroupLength"],
    0x21300010: ["SQ", "PrintManagementCapabilitiesSequence"],
    0x21300015: ["SQ", "PrinterCharacteristicsSequence"],
    0x21300030: ["SQ", "FilmBoxContentSequence"],
    0x21300040: ["SQ", "ImageBoxContentSequence"],
    0x21300050: ["SQ", "AnnotationContentSequence"],
    0x21300060: ["SQ", "ImageOverlayBoxContentSequence"],
    0x21300080: ["SQ", "PresentationLUTContentSequence"],
    0x213000A0: ["SQ", "ProposedStudySequence"],
    0x213000C0: ["SQ", "OriginalImageSequence"],
    0x22000000: ["UL", "MediaCreationGroupLength"],
    0x22000001: ["CS", "LabelUsingInformationExtractedFromInstances"],
    0x22000002: ["UT", "LabelText"],
    0x22000003: ["CS", "LabelStyleSelection"],
    0x22000004: ["LT", "MediaDisposition"],
    0x22000005: ["LT", "BarcodeValue"],
    0x22000006: ["CS", "BarcodeSymbology"],
    0x22000007: ["CS", "AllowMediaSplitting"],
    0x22000008: ["CS", "IncludeNon"],
    0x22000009: ["CS", "IncludeDisplayApplication"],
    0x2200000A: ["CS", "PreserveCompositeInstancesAfterMediaCreation"],
    0x2200000B: ["US", "TotalNumberOfPiecesOfMediaCreated"],
    0x2200000C: ["LO", "RequestedMediaApplicationProfile"],
    0x2200000D: ["SQ", "ReferencedStorageMediaSequence"],
    0x2200000E: ["AT", "FailureAttributes"],
    0x2200000F: ["CS", "AllowLossyCompression"],
    0x22000020: ["CS", "RequestPriority"],
    0x30020000: ["UL", "RTImageGroupLength"],
    0x30020002: ["SH", "RTImageLabel"],
    0x30020003: ["LO", "RTImageName"],
    0x30020004: ["ST", "RTImageDescription"],
    0x3002000A: ["CS", "ReportedValuesOrigin"],
    0x3002000C: ["CS", "RTImagePlane"],
    0x3002000D: ["DS", "XRayImageReceptorTranslation"],
    0x3002000E: ["DS", "XRayImageReceptorAngle"],
    0x30020010: ["DS", "RTImageOrientation"],
    0x30020011: ["DS", "ImagePlanePixelSpacing"],
    0x30020012: ["DS", "RTImagePosition"],
    0x30020020: ["SH", "RadiationMachineName"],
    0x30020022: ["DS", "RadiationMachineSAD"],
    0x30020024: ["DS", "RadiationMachineSSD"],
    0x30020026: ["DS", "RTImageSID"],
    0x30020028: ["DS", "SourceToReferenceObjectDistance"],
    0x30020029: ["IS", "FractionNumber"],
    0x30020030: ["SQ", "ExposureSequence"],
    0x30020032: ["DS", "MetersetExposure"],
    0x30020034: ["DS", "DiaphragmPosition"],
    0x30020040: ["SQ", "FluenceeMapSequence"],
    0x30020041: ["CS", "FluenceDataSource"],
    0x30020042: ["DS", "FluenceDataScale"],
    0x30040000: ["UL", "RTDoseGroupLength"],
    0x30040001: ["CS", "DVHType"],
    0x30040002: ["CS", "DoseUnits"],
    0x30040004: ["CS", "DoseType"],
    0x30040006: ["LO", "DoseComment"],
    0x30040008: ["DS", "NormalizationPoint"],
    0x3004000A: ["CS", "DoseSummationType"],
    0x3004000C: ["DS", "GridFrameOffsetVector"],
    0x3004000E: ["DS", "DoseGridScaling"],
    0x30040010: ["SQ", "RTDoseROISequence"],
    0x30040012: ["DS", "DoseValue"],
    0x30040014: ["CS", "TissueHeterogeneityCorrection"],
    0x30040040: ["DS", "DVHNormalizationPoint"],
    0x30040042: ["DS", "DVHNormalizationDoseValue"],
    0x30040050: ["SQ", "DVHSequence"],
    0x30040052: ["DS", "DVHDoseScaling"],
    0x30040054: ["CS", "DVHVolumeUnits"],
    0x30040056: ["IS", "DVHNumberOfBins"],
    0x30040058: ["DS", "DVHData"],
    0x30040060: ["SQ", "DVHReferencedROISequence"],
    0x30040062: ["CS", "DVHROIContributionType"],
    0x30040070: ["DS", "DVHMinimumDose"],
    0x30040072: ["DS", "DVHMaximumDose"],
    0x30040074: ["DS", "DVHMeanDose"],
    0x30060000: ["UL", "RTStructureSetGroupLength"],
    0x30060002: ["SH", "StructureSetLabel"],
    0x30060004: ["LO", "StructureSetName"],
    0x30060006: ["ST", "StructureSetDescription"],
    0x30060008: ["DA", "StructureSetDate"],
    0x30060009: ["TM", "StructureSetTime"],
    0x30060010: ["SQ", "ReferencedFrameOfReferenceSequence"],
    0x30060012: ["SQ", "RTReferencedStudySequence"],
    0x30060014: ["SQ", "RTReferencedSeriesSequence"],
    0x30060016: ["SQ", "ContourImageSequence"],
    0x30060020: ["SQ", "StructureSetROISequence"],
    0x30060022: ["IS", "ROINumber"],
    0x30060024: ["UI", "ReferencedFrameOfReferenceUID"],
    0x30060026: ["LO", "ROIName"],
    0x30060028: ["ST", "ROIDescription"],
    0x3006002A: ["IS", "ROIDisplayColor"],
    0x3006002C: ["DS", "ROIVolume"],
    0x30060030: ["SQ", "RTRelatedROISequence"],
    0x30060033: ["CS", "RTROIRelationship"],
    0x30060036: ["CS", "ROIGenerationAlgorithm"],
    0x30060038: ["LO", "ROIGenerationDescription"],
    0x30060039: ["SQ", "ROIContourSequence"],
    0x30060040: ["SQ", "ContourSequence"],
    0x30060042: ["CS", "ContourGeometricType"],
    0x30060044: ["DS", "ContourSlabThickness"],
    0x30060045: ["DS", "ContourOffsetVector"],
    0x30060046: ["IS", "NumberOfContourPoints"],
    0x30060048: ["IS", "ContourNumber"],
    0x30060049: ["IS", "AttachedContours"],
    0x30060050: ["DS", "ContourData"],
    0x30060080: ["SQ", "RTROIObservationsSequence"],
    0x30060082: ["IS", "ObservationNumber"],
    0x30060084: ["IS", "ReferencedROINumber"],
    0x30060085: ["SH", "ROIObservationLabel"],
    0x30060086: ["SQ", "RTROIIdentificationCodeSequence"],
    0x30060088: ["ST", "ROIObservationDescription"],
    0x300600A0: ["SQ", "RelatedRTROIObservationsSequence"],
    0x300600A4: ["CS", "RTROIInterpretedType"],
    0x300600A6: ["PN", "ROIInterpreter"],
    0x300600B0: ["SQ", "ROIPhysicalPropertiesSequence"],
    0x300600B2: ["CS", "ROIPhysicalProperty"],
    0x300600B4: ["DS", "ROIPhysicalPropertyValue"],
    0x300600C0: ["SQ", "FrameOfReferenceRelationshipSequence"],
    0x300600C2: ["UI", "RelatedFrameOfReferenceUID"],
    0x300600C4: ["CS", "FrameOfReferenceTransformationType"],
    0x300600C6: ["DS", "FrameOfReferenceTransformationMatrix"],
    0x300600C8: ["LO", "FrameOfReferenceTransformationComment"],
    0x30080000: ["UL", "RTTreatmentGroupLength"],
    0x30080010: ["SQ", "MeasuredDoseReferenceSequence"],
    0x30080012: ["ST", "MeasuredDoseDescription"],
    0x30080014: ["CS", "MeasuredDoseType"],
    0x30080016: ["DS", "MeasuredDoseValue"],
    0x30080020: ["SQ", "TreatmentSessionBeamSequence"],
    0x30080022: ["IS", "CurrentFractionNumber"],
    0x30080024: ["DA", "TreatmentControlPointDate"],
    0x30080025: ["TM", "TreatmentControlPointTime"],
    0x3008002A: ["CS", "TreatmentTerminationStatus"],
    0x3008002B: ["SH", "TreatmentTerminationCode"],
    0x3008002C: ["CS", "TreatmentVerificationStatus"],
    0x30080030: ["SQ", "ReferencedTreatmentRecordSequence"],
    0x30080032: ["DS", "SpecifiedPrimaryMeterset"],
    0x30080033: ["DS", "SpecifiedSecondaryMeterset"],
    0x30080036: ["DS", "DeliveredPrimaryMeterset"],
    0x30080037: ["DS", "DeliveredSecondaryMeterset"],
    0x3008003A: ["DS", "SpecifiedTreatmentTime"],
    0x3008003B: ["DS", "DeliveredTreatmentTime"],
    0x30080040: ["SQ", "ControlPointDeliverySequence"],
    0x30080042: ["DS", "SpecifiedMeterset"],
    0x30080044: ["DS", "DeliveredMeterset"],
    0x30080048: ["DS", "DoseRateDelivered"],
    0x30080050: ["SQ", "TreatmentSummaryCalculatedDoseReferenceSequence"],
    0x30080052: ["DS", "CumulativeDoseToDoseReference"],
    0x30080054: ["DA", "FirstTreatmentDate"],
    0x30080056: ["DA", "MostRecentTreatmentDate"],
    0x3008005A: ["IS", "NumberOfFractionsDelivered"],
    0x30080060: ["SQ", "OverrideSequence"],
    0x30080062: ["AT", "OverrideParameterPointer"],
    0x30080064: ["IS", "MeasuredDoseReferenceNumber"],
    0x30080066: ["ST", "OverrideReason"],
    0x30080070: ["SQ", "CalculatedDoseReferenceSequence"],
    0x30080072: ["IS", "CalculatedDoseReferenceNumber"],
    0x30080074: ["ST", "CalculatedDoseReferenceDescription"],
    0x30080076: ["DS", "CalculatedDoseReferenceDoseValue"],
    0x30080078: ["DS", "StartMeterset"],
    0x3008007A: ["DS", "EndMeterset"],
    0x30080080: ["SQ", "ReferencedMeasuredDoseReferenceSequence"],
    0x30080082: ["IS", "ReferencedMeasuredDoseReferenceNumber"],
    0x30080090: ["SQ", "ReferencedCalculatedDoseReferenceSequence"],
    0x30080092: ["IS", "ReferencedCalculatedDoseReferenceNumber"],
    0x300800A0: ["SQ", "BeamLimitingDeviceLeafPairsSequence"],
    0x300800B0: ["SQ", "RecordedWedgeSequence"],
    0x300800C0: ["SQ", "RecordedCompensatorSequence"],
    0x300800D0: ["SQ", "RecordedBlockSequence"],
    0x300800E0: ["SQ", "TreatmentSummaryMeasuredDoseReferenceSequence"],
    0x30080100: ["SQ", "RecordedSourceSequence"],
    0x30080105: ["LO", "SourceSerialNumber"],
    0x30080110: ["SQ", "TreatmentSessionApplicationSetupSequence"],
    0x30080116: ["CS", "ApplicationSetupCheck"],
    0x30080120: ["SQ", "RecordedBrachyAccessoryDeviceSequence"],
    0x30080122: ["IS", "ReferencedBrachyAccessoryDeviceNumber"],
    0x30080130: ["SQ", "RecordedChannelSequence"],
    0x30080132: ["DS", "SpecifiedChannelTotalTime"],
    0x30080134: ["DS", "DeliveredChannelTotalTime"],
    0x30080136: ["IS", "SpecifiedNumberOfPulses"],
    0x30080138: ["IS", "DeliveredNumberOfPulses"],
    0x3008013A: ["DS", "SpecifiedPulseRepetitionInterval"],
    0x3008013C: ["DS", "DeliveredPulseRepetitionInterval"],
    0x30080140: ["SQ", "RecordedSourceApplicatorSequence"],
    0x30080142: ["IS", "ReferencedSourceApplicatorNumber"],
    0x30080150: ["SQ", "RecordedChannelShieldSequence"],
    0x30080152: ["IS", "ReferencedChannelShieldNumber"],
    0x30080160: ["SQ", "BrachyControlPointDeliveredSequence"],
    0x30080162: ["DA", "SafePositionExitDate"],
    0x30080164: ["TM", "SafePositionExitTime"],
    0x30080166: ["DA", "SafePositionReturnDate"],
    0x30080168: ["TM", "SafePositionReturnTime"],
    0x30080200: ["CS", "CurrentTreatmentStatus"],
    0x30080202: ["ST", "TreatmentStatusComment"],
    0x30080220: ["SQ", "FractionGroupSummarySequence"],
    0x30080223: ["IS", "ReferencedFractionNumber"],
    0x30080224: ["CS", "FractionGroupType"],
    0x30080230: ["CS", "BeamStopperPosition"],
    0x30080240: ["SQ", "FractionStatusSummarySequence"],
    0x30080250: ["DA", "TreatmentDate"],
    0x30080251: ["TM", "TreatmentTime"],
    0x300A0000: ["UL", "RTPlanGroupLength"],
    0x300A0002: ["SH", "RTPlanLabel"],
    0x300A0003: ["LO", "RTPlanName"],
    0x300A0004: ["ST", "RTPlanDescription"],
    0x300A0006: ["DA", "RTPlanDate"],
    0x300A0007: ["TM", "RTPlanTime"],
    0x300A0009: ["LO", "TreatmentProtocols"],
    0x300A000A: ["CS", "PlanIntent"],
    0x300A000B: ["LO", "TreatmentSites"],
    0x300A000C: ["CS", "RTPlanGeometry"],
    0x300A000E: ["ST", "PrescriptionDescription"],
    0x300A0010: ["SQ", "DoseReferenceSequence"],
    0x300A0012: ["IS", "DoseReferenceNumber"],
    0x300A0013: ["LO", "DoseReferenceUID"],
    0x300A0014: ["CS", "DoseReferenceStructureType"],
    0x300A0015: ["CS", "NominalBeamEnergyUnit"],
    0x300A0016: ["LO", "DoseReferenceDescription"],
    0x300A0018: ["DS", "DoseReferencePointCoordinates"],
    0x300A001A: ["DS", "NominalPriorDose"],
    0x300A0020: ["CS", "DoseReferenceType"],
    0x300A0021: ["DS", "ConstraintWeight"],
    0x300A0022: ["DS", "DeliveryWarningDose"],
    0x300A0023: ["DS", "DeliveryMaximumDose"],
    0x300A0025: ["DS", "TargetMinimumDose"],
    0x300A0026: ["DS", "TargetPrescriptionDose"],
    0x300A0027: ["DS", "TargetMaximumDose"],
    0x300A0028: ["DS", "TargetUnderdoseVolumeFraction"],
    0x300A002A: ["DS", "OrganAtRiskFullVolumeDose"],
    0x300A002B: ["DS", "OrganAtRiskLimitDose"],
    0x300A002C: ["DS", "OrganAtRiskMaximumDose"],
    0x300A002D: ["DS", "OrganAtRiskOverdoseVolumeFraction"],
    0x300A0040: ["SQ", "ToleranceTableSequence"],
    0x300A0042: ["IS", "ToleranceTableNumber"],
    0x300A0043: ["SH", "ToleranceTableLabel"],
    0x300A0044: ["DS", "GantryAngleTolerance"],
    0x300A0046: ["DS", "BeamLimitingDeviceAngleTolerance"],
    0x300A0048: ["SQ", "BeamLimitingDeviceToleranceSequence"],
    0x300A004A: ["DS", "BeamLimitingDevicePositionTolerance"],
    0x300A004C: ["DS", "PatientSupportAngleTolerance"],
    0x300A004E: ["DS", "TableTopEccentricAngleTolerance"],
    0x300A0051: ["DS", "TableTopVerticalPositionTolerance"],
    0x300A0052: ["DS", "TableTopLongitudinalPositionTolerance"],
    0x300A0053: ["DS", "TableTopLateralPositionTolerance"],
    0x300A0055: ["CS", "RTPlanRelationship"],
    0x300A0070: ["SQ", "FractionGroupSequence"],
    0x300A0071: ["IS", "FractionGroupNumber"],
    0x300A0072: ["LO", "FractionGroupDescription"],
    0x300A0078: ["IS", "NumberOfFractionsPlanned"],
    0x300A0079: ["IS", "NumberOfFractionPatternDigitsPerDay"],
    0x300A007A: ["IS", "RepeatFractionCycleLength"],
    0x300A007B: ["LT", "FractionPattern"],
    0x300A0080: ["IS", "NumberOfBeams"],
    0x300A0082: ["DS", "BeamDoseSpecificationPoint"],
    0x300A0084: ["DS", "BeamDose"],
    0x300A0086: ["DS", "BeamMeterset"],
    0x300A00A0: ["IS", "NumberOfBrachyApplicationSetups"],
    0x300A00A2: ["DS", "BrachyApplicationSetupDoseSpecificationPoint"],
    0x300A00A4: ["DS", "BrachyApplicationSetupDose"],
    0x300A00B0: ["SQ", "BeamSequence"],
    0x300A00B2: ["SH", "TreatmentMachineName"],
    0x300A00B3: ["CS", "PrimaryDosimeterUnit"],
    0x300A00B4: ["DS", "SourceAxisDistance"],
    0x300A00B6: ["SQ", "BeamLimitingDeviceSequence"],
    0x300A00B8: ["CS", "RTBeamLimitingDeviceType"],
    0x300A00BA: ["DS", "SourceToBeamLimitingDeviceDistance"],
    0x300A00BC: ["IS", "NumberOfLeafJawPairs"],
    0x300A00BE: ["DS", "LeafPositionBoundaries"],
    0x300A00C0: ["IS", "BeamNumber"],
    0x300A00C2: ["LO", "BeamName"],
    0x300A00C3: ["ST", "BeamDescription"],
    0x300A00C4: ["CS", "BeamType"],
    0x300A00C6: ["CS", "RadiationType"],
    0x300A00C7: ["CS", "HighDoseTechniqueType"],
    0x300A00C8: ["IS", "ReferenceImageNumber"],
    0x300A00CA: ["SQ", "PlannedVerificationImageSequence"],
    0x300A00CC: ["LO", "ImagingDeviceSpecificAcquisitionParameters"],
    0x300A00CE: ["CS", "TreatmentDeliveryType"],
    0x300A00D0: ["IS", "NumberOfWedges"],
    0x300A00D1: ["SQ", "WedgeSequence"],
    0x300A00D2: ["IS", "WedgeNumber"],
    0x300A00D3: ["CS", "WedgeType"],
    0x300A00D4: ["SH", "WedgeID"],
    0x300A00D5: ["IS", "WedgeAngle"],
    0x300A00D6: ["DS", "WedgeFactor"],
    0x300A00D8: ["DS", "WedgeOrientation"],
    0x300A00DA: ["DS", "SourceToWedgeTrayDistance"],
    0x300A00DC: ["SH", "BolusID"],
    0x300A00DD: ["ST", "BolusDescription"],
    0x300A00E0: ["IS", "NumberOfCompensators"],
    0x300A00E1: ["SH", "MaterialID"],
    0x300A00E2: ["DS", "TotalCompensatorTrayFactor"],
    0x300A00E3: ["SQ", "CompensatorSequence"],
    0x300A00E4: ["IS", "CompensatorNumber"],
    0x300A00E5: ["SH", "CompensatorID"],
    0x300A00E6: ["DS", "SourceToCompensatorTrayDistance"],
    0x300A00E7: ["IS", "CompensatorRows"],
    0x300A00E8: ["IS", "CompensatorColumns"],
    0x300A00E9: ["DS", "CompensatorPixelSpacing"],
    0x300A00EA: ["DS", "CompensatorPosition"],
    0x300A00EB: ["DS", "CompensatorTransmissionData"],
    0x300A00EC: ["DS", "CompensatorThicknessData"],
    0x300A00ED: ["IS", "NumberOfBoli"],
    0x300A00EE: ["CS", "CompensatorType"],
    0x300A00F0: ["IS", "NumberOfBlocks"],
    0x300A00F2: ["DS", "TotalBlockTrayFactor"],
    0x300A00F4: ["SQ", "BlockSequence"],
    0x300A00F5: ["SH", "BlockTrayID"],
    0x300A00F6: ["DS", "SourceToBlockTrayDistance"],
    0x300A00F8: ["CS", "BlockType"],
    0x300A00FA: ["CS", "BlockDivergence"],
    0x300A00FB: ["CS", "BlockMountingPosition"],
    0x300A00FC: ["IS", "BlockNumber"],
    0x300A00FE: ["LO", "BlockName"],
    0x300A0100: ["DS", "BlockThickness"],
    0x300A0102: ["DS", "BlockTransmission"],
    0x300A0104: ["IS", "BlockNumberOfPoints"],
    0x300A0106: ["DS", "BlockData"],
    0x300A0107: ["SQ", "ApplicatorSequence"],
    0x300A0108: ["SH", "ApplicatorID"],
    0x300A0109: ["CS", "ApplicatorType"],
    0x300A010A: ["LO", "ApplicatorDescription"],
    0x300A010C: ["DS", "CumulativeDoseReferenceCoefficient"],
    0x300A010E: ["DS", "FinalCumulativeMetersetWeight"],
    0x300A0110: ["IS", "NumberOfControlPoints"],
    0x300A0111: ["SQ", "ControlPointSequence"],
    0x300A0112: ["IS", "ControlPointIndex"],
    0x300A0114: ["DS", "NominalBeamEnergy"],
    0x300A0115: ["DS", "DoseRateSet"],
    0x300A0116: ["SQ", "WedgePositionSequence"],
    0x300A0118: ["CS", "WedgePosition"],
    0x300A011A: ["SQ", "BeamLimitingDevicePositionSequence"],
    0x300A011C: ["DS", "LeafJawPositions"],
    0x300A011E: ["DS", "GantryAngle"],
    0x300A011F: ["CS", "GantryRotationDirection"],
    0x300A0120: ["DS", "BeamLimitingDeviceAngle"],
    0x300A0121: ["CS", "BeamLimitingDeviceRotationDirection"],
    0x300A0122: ["DS", "PatientSupportAngle"],
    0x300A0123: ["CS", "PatientSupportRotationDirection"],
    0x300A0124: ["DS", "TableTopEccentricAxisDistance"],
    0x300A0125: ["DS", "TableTopEccentricAngle"],
    0x300A0126: ["CS", "TableTopEccentricRotationDirection"],
    0x300A0128: ["DS", "TableTopVerticalPosition"],
    0x300A0129: ["DS", "TableTopLongitudinalPosition"],
    0x300A012A: ["DS", "TableTopLateralPosition"],
    0x300A012C: ["DS", "IsocenterPosition"],
    0x300A012E: ["DS", "SurfaceEntryPoint"],
    0x300A0130: ["DS", "SourceToSurfaceDistance"],
    0x300A0134: ["DS", "CumulativeMetersetWeight"],
    0x300A0180: ["SQ", "PatientSetupSequence"],
    0x300A0182: ["IS", "PatientSetupNumber"],
    0x300A0183: ["LO", "PatientSetupLabel"],
    0x300A0184: ["LO", "PatientAdditionalPosition"],
    0x300A0190: ["SQ", "FixationDeviceSequence"],
    0x300A0192: ["CS", "FixationDeviceType"],
    0x300A0194: ["SH", "FixationDeviceLabel"],
    0x300A0196: ["ST", "FixationDeviceDescription"],
    0x300A0198: ["SH", "FixationDevicePosition"],
    0x300A0199: ["FL", "FixationDevicePitchAngle"],
    0x300A019A: ["FL", "FixationDeviceRollAngle"],
    0x300A01A0: ["SQ", "ShieldingDeviceSequence"],
    0x300A01A2: ["CS", "ShieldingDeviceType"],
    0x300A01A4: ["SH", "ShieldingDeviceLabel"],
    0x300A01A6: ["ST", "ShieldingDeviceDescription"],
    0x300A01A8: ["SH", "ShieldingDevicePosition"],
    0x300A01B0: ["CS", "SetupTechnique"],
    0x300A01B2: ["ST", "SetupTechniqueDescription"],
    0x300A01B4: ["SQ", "SetupDeviceSequence"],
    0x300A01B6: ["CS", "SetupDeviceType"],
    0x300A01B8: ["SH", "SetupDeviceLabel"],
    0x300A01BA: ["ST", "SetupDeviceDescription"],
    0x300A01BC: ["DS", "SetupDeviceParameter"],
    0x300A01D0: ["ST", "SetupReferenceDescription"],
    0x300A01D2: ["DS", "TableTopVerticalSetupDisplacement"],
    0x300A01D4: ["DS", "TableTopLongitudinalSetupDisplacement"],
    0x300A01D6: ["DS", "TableTopLateralSetupDisplacement"],
    0x300A0200: ["CS", "BrachyTreatmentTechnique"],
    0x300A0202: ["CS", "BrachyTreatmentType"],
    0x300A0206: ["SQ", "TreatmentMachineSequence"],
    0x300A0210: ["SQ", "SourceSequence"],
    0x300A0212: ["IS", "SourceNumber"],
    0x300A0214: ["CS", "SourceType"],
    0x300A0216: ["LO", "SourceManufacturer"],
    0x300A0218: ["DS", "ActiveSourceDiameter"],
    0x300A021A: ["DS", "ActiveSourceLength"],
    0x300A0222: ["DS", "SourceEncapsulationNominalThickness"],
    0x300A0224: ["DS", "SourceEncapsulationNominalTransmission"],
    0x300A0226: ["LO", "SourceIsotopeName"],
    0x300A0228: ["DS", "SourceIsotopeHalfLife"],
    0x300A022A: ["DS", "ReferenceAirKermaRate"],
    0x300A022C: ["DA", "AirKermaRateReferenceDate"],
    0x300A022E: ["TM", "AirKermaRateReferenceTime"],
    0x300A0230: ["SQ", "ApplicationSetupSequence"],
    0x300A0232: ["CS", "ApplicationSetupType"],
    0x300A0234: ["IS", "ApplicationSetupNumber"],
    0x300A0236: ["LO", "ApplicationSetupName"],
    0x300A0238: ["LO", "ApplicationSetupManufacturer"],
    0x300A0240: ["IS", "TemplateNumber"],
    0x300A0242: ["SH", "TemplateType"],
    0x300A0244: ["LO", "TemplateName"],
    0x300A0250: ["DS", "TotalReferenceAirKerma"],
    0x300A0260: ["SQ", "BrachyAccessoryDeviceSequence"],
    0x300A0262: ["IS", "BrachyAccessoryDeviceNumber"],
    0x300A0263: ["SH", "BrachyAccessoryDeviceID"],
    0x300A0264: ["CS", "BrachyAccessoryDeviceType"],
    0x300A0266: ["LO", "BrachyAccessoryDeviceName"],
    0x300A026A: ["DS", "BrachyAccessoryDeviceNominalThickness"],
    0x300A026C: ["DS", "BrachyAccessoryDeviceNominalTransmission"],
    0x300A0280: ["SQ", "ChannelSequence"],
    0x300A0282: ["IS", "ChannelNumber"],
    0x300A0284: ["DS", "ChannelLength"],
    0x300A0286: ["DS", "ChannelTotalTime"],
    0x300A0288: ["CS", "SourceMovementType"],
    0x300A028A: ["IS", "NumberOfPulses"],
    0x300A028C: ["DS", "PulseRepetitionInterval"],
    0x300A0290: ["IS", "SourceApplicatorNumber"],
    0x300A0291: ["SH", "SourceApplicatorID"],
    0x300A0292: ["CS", "SourceApplicatorType"],
    0x300A0294: ["LO", "SourceApplicatorName"],
    0x300A0296: ["DS", "SourceApplicatorLength"],
    0x300A0298: ["LO", "SourceApplicatorManufacturer"],
    0x300A029C: ["DS", "SourceApplicatorWallNominalThickness"],
    0x300A029E: ["DS", "SourceApplicatorWallNominalTransmission"],
    0x300A02A0: ["DS", "SourceApplicatorStepSize"],
    0x300A02A2: ["IS", "TransferTubeNumber"],
    0x300A02A4: ["DS", "TransferTubeLength"],
    0x300A02B0: ["SQ", "ChannelShieldSequence"],
    0x300A02B2: ["IS", "ChannelShieldNumber"],
    0x300A02B3: ["SH", "ChannelShieldID"],
    0x300A02B4: ["LO", "ChannelShieldName"],
    0x300A02B8: ["DS", "ChannelShieldNominalThickness"],
    0x300A02BA: ["DS", "ChannelShieldNominalTransmission"],
    0x300A02C8: ["DS", "FinalCumulativeTimeWeight"],
    0x300A02D0: ["SQ", "BrachyControlPointSequence"],
    0x300A02D2: ["DS", "ControlPointRelativePosition"],
    0x300A02D4: ["DS", "ControlPoint3DPosition"],
    0x300A02D6: ["DS", "CumulativeTimeWeight"],
    0x300A02E0: ["CS", "CompensatorDivergence"],
    0x300A02E1: ["CS", "CompensatorMountingPosition"],
    0x300A02E2: ["DS", "SourceToCompensatorDistance"],
    0x300A0401: ["SQ", "ReferencedSetupImageSequence"],
    0x300A0402: ["ST", "SetupImageComment"],
    0x300C0000: ["UL", "RTRelationshipGroupLength"],
    0x300C0002: ["SQ", "ReferencedRTPlanSequence"],
    0x300C0004: ["SQ", "ReferencedBeamSequence"],
    0x300C0006: ["IS", "ReferencedBeamNumber"],
    0x300C0007: ["IS", "ReferencedReferenceImageNumber"],
    0x300C0008: ["DS", "StartCumulativeMetersetWeight"],
    0x300C0009: ["DS", "EndCumulativeMetersetWeight"],
    0x300C000A: ["SQ", "ReferencedBrachyApplicationSetupSequence"],
    0x300C000C: ["IS", "ReferencedBrachyApplicationSetupNumber"],
    0x300C000E: ["IS", "ReferencedSourceNumber"],
    0x300C0020: ["SQ", "ReferencedFractionGroupSequence"],
    0x300C0022: ["IS", "ReferencedFractionGroupNumber"],
    0x300C0040: ["SQ", "ReferencedVerificationImageSequence"],
    0x300C0042: ["SQ", "ReferencedReferenceImageSequence"],
    0x300C0050: ["SQ", "ReferencedDoseReferenceSequence"],
    0x300C0051: ["IS", "ReferencedDoseReferenceNumber"],
    0x300C0055: ["SQ", "BrachyReferencedDoseReferenceSequence"],
    0x300C0060: ["SQ", "ReferencedStructureSetSequence"],
    0x300C006A: ["IS", "ReferencedPatientSetupNumber"],
    0x300C0080: ["SQ", "ReferencedDoseSequence"],
    0x300C00A0: ["IS", "ReferencedToleranceTableNumber"],
    0x300C00B0: ["SQ", "ReferencedBolusSequence"],
    0x300C00C0: ["IS", "ReferencedWedgeNumber"],
    0x300C00D0: ["IS", "ReferencedCompensatorNumber"],
    0x300C00E0: ["IS", "ReferencedBlockNumber"],
    0x300C00F0: ["IS", "ReferencedControlPointIndex"],
    0x300C00F2: ["SQ", "ReferencedControlPointSequence"],
    0x300C00F4: ["IS", "ReferencedStartControlPointIndex"],
    0x300C00F6: ["IS", "ReferencedStopControlPointIndex"],
    0x300E0000: ["UL", "RTApprovalGroupLength"],
    0x300E0002: ["CS", "ApprovalStatus"],
    0x300E0004: ["DA", "ReviewDate"],
    0x300E0005: ["TM", "ReviewTime"],
    0x300E0008: ["PN", "ReviewerName"],
    0x40080000: ["UL", "ResultsGroupLength"],
    0x40080040: ["SH", "ResultsID"],
    0x40080042: ["LO", "ResultsIDIssuer"],
    0x40080050: ["SQ", "ReferencedInterpretationSequence"],
    0x40080100: ["DA", "InterpretationRecordedDate"],
    0x40080101: ["TM", "InterpretationRecordedTime"],
    0x40080102: ["PN", "InterpretationRecorder"],
    0x40080103: ["LO", "ReferenceToRecordedSound"],
    0x40080108: ["DA", "InterpretationTranscriptionDate"],
    0x40080109: ["TM", "InterpretationTranscriptionTime"],
    0x4008010A: ["PN", "InterpretationTranscriber"],
    0x4008010B: ["ST", "InterpretationText"],
    0x4008010C: ["PN", "InterpretationAuthor"],
    0x40080111: ["SQ", "InterpretationApproverSequence"],
    0x40080112: ["DA", "InterpretationApprovalDate"],
    0x40080113: ["TM", "InterpretationApprovalTime"],
    0x40080114: ["PN", "PhysicianApprovingInterpretation"],
    0x40080115: ["LT", "InterpretationDiagnosisDescription"],
    0x40080117: ["SQ", "InterpretationDiagnosisCodeSequence"],
    0x40080118: ["SQ", "ResultsDistributionListSequence"],
    0x40080119: ["PN", "DistributionName"],
    0x4008011A: ["LO", "DistributionAddress"],
    0x40080200: ["SH", "InterpretationID"],
    0x40080202: ["LO", "InterpretationIDIssuer"],
    0x40080210: ["CS", "InterpretationTypeID"],
    0x40080212: ["CS", "InterpretationStatusID"],
    0x40080300: ["ST", "Impressions"],
    0x40084000: ["ST", "ResultsComments"],
    0x4FFE0000: ["UL", "MACParametersGroupLength"],
    0x4FFE0001: ["SQ", "MACParametersSequence"],
    0x52009229: ["SQ", "SharedFunctionalGroupsSequence"],
    0x52009230: ["SQ", "PerFrameFunctionalGroupsSequence"],
    0x54000000: ["UL", "WaveformDataGroupLength"],
    0x54000100: ["SQ", "WaveformSequence"],
    0x54000110: ["ox", "ChannelMinimumValue"],
    0x54000112: ["ox", "ChannelMaximumValue"],
    0x54001004: ["US", "WaveformBitsAllocated"],
    0x54001006: ["CS", "WaveformSampleInterpretation"],
    0x5400100A: ["ox", "WaveformPaddingValue"],
    0x54001010: ["ox", "WaveformData"],
    0x56000010: ["OF", "FirstOrderPhaseCorrectionAngle"],
    0x56000020: ["OF", "SpectroscopyData"],
    0x7FE00000: ["UL", "PixelDataGroupLength"],
    0x7FE00010: ["ox", "PixelData"],
    0xFFFAFFFA: ["SQ", "DigitalSignaturesSequence"],
    0xFFFCFFFC: ["OB", "DataSetTrailingPadding"],
    0xFFFEE000: ["na", "Item"],
    0xFFFEE00D: ["na", "ItemDelimitationItem"],
    0xFFFEE0DD: ["na", "SequenceDelimitationItem"],
    0x00080042: ["CS", "RETIRED_NuclearMedicineSeriesType"],
    0x00082110: ["CS", "RETIRED_LossyImageCompression"],
    0x00082200: ["CS", "RETIRED_TransducerPosition"],
    0x00082204: ["CS", "RETIRED_TransducerOrientation"],
    0x00082208: ["CS", "RETIRED_AnatomicStructure"],
    0x00180030: ["LO", "RETIRED_Radionuclide"],
    0x00180032: ["DS", "RETIRED_EnergyWindowCenterline"],
    0x00180033: ["DS", "RETIRED_EnergyWindowTotalWidth"],
    0x00181146: ["DS", "RETIRED_RotationOffset"],
    0x00180037: ["CS", "RETIRED_TherapyType"],
    0x00180039: ["CS", "RETIRED_TherapyDescription"],
    0x00185210: ["DS", "RETIRED_Image"],
    0x00185212: ["DS", "RETIRED_Image"],
    0x00186038: ["UL", "RETIRED_DopplerSampleVolumeXPosition"],
    0x0018603A: ["UL", "RETIRED_DopplerSampleVolumeYPosition"],
    0x0018603C: ["UL", "RETIRED_TMLinePositionX0"],
    0x0018603E: ["UL", "RETIRED_TMLinePositionY0"],
    0x00186040: ["UL", "RETIRED_TMLinePositionX1"],
    0x00186042: ["UL", "RETIRED_TMLinePositionY1"],
    0x00189096: ["FD", "RETIRED_ParallelReductionFactorInPlane"],
    0x00189195: ["FD", "RETIRED_ChemicalShiftsMinimumIntegrationLimitInHz"],
    0x00189196: ["FD", "RETIRED_ChemicalShiftsMaximumIntegrationLimitInHz"],
    0x00200014: ["IS", "RETIRED_IsotopeNumber"],
    0x00200015: ["IS", "RETIRED_PhaseNumber"],
    0x00200016: ["IS", "RETIRED_IntervalNumber"],
    0x00200017: ["IS", "RETIRED_TimeSlotNumber"],
    0x00200018: ["IS", "RETIRED_AngleNumber"],
    0x00286030: ["US", "RETIRED_MaskPointers"],
    0x00400307: ["DS", "RETIRED_DistanceSourceToSupport"],
    0x00400330: ["SQ", "RETIRED_ReferencedProcedureStepSequence"],
    0x00402001: ["LO", "RETIRED_ReasonForTheImagingServiceRequest"],
    0x00402006: ["SH", "RETIRED_PlacerOrderNumberImagingServiceRequest"],
    0x00402007: ["SH", "RETIRED_FillerOrderNumberImagingServiceRequest"],
    0x0040DB06: ["DT", "RETIRED_TemplateVersion"],
    0x0040DB07: ["DT", "RETIRED_TemplateLocalVersion"],
    0x0040DB0B: ["CS", "RETIRED_TemplateExtensionFlag"],
    0x0040DB0C: ["UI", "RETIRED_TemplateExtensionOrganizationUID"],
    0x0040DB0D: ["UI", "RETIRED_TemplateExtensionCreatorUID"],
    0x20200130: ["SQ", "RETIRED_ReferencedImageOverlayBoxSequence"],
    0x20200140: ["SQ", "RETIRED_ReferencedVOILUTBoxSequence"],
    0x20400500: ["SQ", "RETIRED_ReferencedImageBoxSequence"],
    0x00000001: ["UL", "ACR_NEMA_CommandGroupLengthToEnd"],
    0x00000010: ["CS", "ACR_NEMA_CommandRecognitionCode"],
    0x00000200: ["LO", "ACR_NEMA_Initiator"],
    0x00000300: ["LO", "ACR_NEMA_Receiver"],
    0x00000400: ["LO", "ACR_NEMA_FindLocation"],
    0x00000850: ["US", "ACR_NEMA_NumberOfMatches"],
    0x00000860: ["US", "ACR_NEMA_ResponseSequenceNumber"],
    0x00004000: ["LO", "ACR_NEMA_DialogReceiver"],
    0x00004010: ["LO", "ACR_NEMA_TerminalType"],
    0x00005010: ["LO", "ACR_NEMA_MessageSetID"],
    0x00005020: ["LO", "ACR_NEMA_EndMessageSet"],
    0x00005110: ["LO", "ACR_NEMA_DisplayFormat"],
    0x00005120: ["LO", "ACR_NEMA_PagePositionID"],
    0x00005130: ["LO", "ACR_NEMA_TextFormatID"],
    0x00005140: ["CS", "ACR_NEMA_NormalReverse"],
    0x00005150: ["CS", "ACR_NEMA_AddGrayScale"],
    0x00005160: ["CS", "ACR_NEMA_Borders"],
    0x00005170: ["IS", "ACR_NEMA_Copies"],
    0x00005180: ["LO", "ACR_NEMA_MagnificationType"],
    0x00005190: ["LO", "ACR_NEMA_Erase"],
    0x000051A0: ["CS", "ACR_NEMA_Print"],
    0x000051B0: ["US", "ACR_NEMA_Overlays"],
    0x00080001: ["UL", "ACR_NEMA_IdentifyingGroupLengthToEnd"],
    0x00080010: ["LO", "ACR_NEMA_RecognitionCode"],
    0x00080040: ["US", "ACR_NEMA_OldDataSetType"],
    0x00080041: ["LO", "ACR_NEMA_DataSetSubtype"],
    0x00081000: ["LO", "ACR_NEMA_NetworkID"],
    0x00084000: ["LT", "ACR_NEMA_IdentifyingComments"],
    0x00101050: ["LT", "ACR_NEMA_InsurancePlanIdentification"],
    0x00181240: ["IS", "ACR_NEMA_UpperLowerPixelValues"],
    0x00184000: ["LT", "ACR_NEMA_AcquisitionComments"],
    0x00185030: ["DS", "ACR_NEMA_DynamicRange"],
    0x00185040: ["DS", "ACR_NEMA_TotalGain"],
    0x00200030: ["DS", "ACR_NEMA_ImagePosition"],
    0x00200035: ["DS", "ACR_NEMA_ImageOrientation"],
    0x00200050: ["DS", "ACR_NEMA_Location"],
    0x00200070: ["LO", "ACR_NEMA_ImageGeometryType"],
    0x00200080: ["LO", "ACR_NEMA_MaskingImage"],
    0x00201001: ["IS", "ACR_NEMA_AcquisitionsInSeries"],
    0x00201003: ["IS", "ACR_NEMA_ImagesInSeries"],
    0x00201005: ["IS", "ACR_NEMA_ImagesInStudy"],
    0x00201020: ["LO", "ACR_NEMA_Reference"],
    0x00203401: ["LO", "ACR_NEMA_ModifyingDeviceID"],
    0x00203402: ["LO", "ACR_NEMA_ModifiedImageID"],
    0x00203403: ["DA", "ACR_NEMA_ModifiedImageDate"],
    0x00203404: ["LO", "ACR_NEMA_ModifyingDeviceManufacturer"],
    0x00203405: ["TM", "ACR_NEMA_ModifiedImageTime"],
    0x00203406: ["LO", "ACR_NEMA_ModifiedImageDescription"],
    0x00205000: ["AT", "ACR_NEMA_OriginalImageIdentification"],
    0x00205002: ["LO", "ACR_NEMA_OriginalImageIdentificationNomenclature"],
    0x00280005: ["US", "ACR_NEMA_ImageDimensions"],
    0x00280040: ["CS", "ACR_NEMA_ImageFormat"],
    0x00280050: ["LO", "ACR_NEMA_ManipulatedImage"],
    0x00280060: ["CS", "ACR_NEMA_CompressionCode"],
    0x00280104: ["xs", "ACR_NEMA_SmallestValidPixelValue"],
    0x00280105: ["xs", "ACR_NEMA_LargestValidPixelValue"],
    0x00280200: ["US", "ACR_NEMA_ImageLocation"],
    0x00281080: ["CS", "ACR_NEMA_GrayScale"],
    0x00281100: ["xs", "ACR_NEMA_GrayLookupTableDescriptor"],
    0x00281200: ["xs", "ACR_NEMA_GrayLookupTableData"],
    0x00284000: ["LT", "ACR_NEMA_ImagePresentationComments"],
    0x40000000: ["UL", "ACR_NEMA_TextGroupLength"],
    0x40000010: ["LT", "ACR_NEMA_TextArbitrary"],
    0x40004000: ["LT", "ACR_NEMA_TextComments"],
    0x0028005F: ["CS", "ACR_NEMA_2C_CompressionRecognitionCode"],
    0x00280061: ["SH", "ACR_NEMA_2C_CompressionOriginator"],
    0x00280062: ["SH", "ACR_NEMA_2C_CompressionLabel"],
    0x00280063: ["SH", "ACR_NEMA_2C_CompressionDescription"],
    0x00280065: ["CS", "ACR_NEMA_2C_CompressionSequence"],
    0x00280066: ["AT", "ACR_NEMA_2C_CompressionStepPointers"],
    0x00280068: ["US", "ACR_NEMA_2C_RepeatInterval"],
    0x00280069: ["US", "ACR_NEMA_2C_BitsGrouped"],
    0x00280070: ["US", "ACR_NEMA_2C_PerimeterTable"],
    0x00280071: ["xs", "ACR_NEMA_2C_PerimeterValue"],
    0x00280080: ["US", "ACR_NEMA_2C_PredictorRows"],
    0x00280081: ["US", "ACR_NEMA_2C_PredictorColumns"],
    0x00280082: ["US", "ACR_NEMA_2C_PredictorConstants"],
    0x00280090: ["CS", "ACR_NEMA_2C_BlockedPixels"],
    0x00280091: ["US", "ACR_NEMA_2C_BlockRows"],
    0x00280092: ["US", "ACR_NEMA_2C_BlockColumns"],
    0x00280093: ["US", "ACR_NEMA_2C_RowOverlap"],
    0x00280094: ["US", "ACR_NEMA_2C_ColumnOverlap"],
    0x00280400: ["CS", "ACR_NEMA_2C_TransformLabel"],
    0x00280401: ["CS", "ACR_NEMA_2C_TransformVersionNumber"],
    0x00280402: ["US", "ACR_NEMA_2C_NumberOfTransformSteps"],
    0x00280403: ["CS", "ACR_NEMA_2C_SequenceOfCompressedData"],
    0x00280404: ["AT", "ACR_NEMA_2C_DetailsOfCoefficients"],
    0x00280410: ["US", "ACR_NEMA_2C_RowsForNthOrderCoefficients"],
    0x00280411: ["US", "ACR_NEMA_2C_ColumnsForNthOrderCoefficients"],
    0x00280412: ["CS", "ACR_NEMA_2C_CoefficientCoding"],
    0x00280413: ["AT", "ACR_NEMA_2C_CoefficientCodingPointers"],
    0x00280700: ["CS", "ACR_NEMA_2C_DCTLabel"],
    0x00280701: ["CS", "ACR_NEMA_2C_DataBlockDescription"],
    0x00280702: ["AT", "ACR_NEMA_2C_DataBlock"],
    0x00280710: ["US", "ACR_NEMA_2C_NormalizationFactorFormat"],
    0x00280720: ["US", "ACR_NEMA_2C_ZonalMapNumberFormat"],
    0x00280721: ["AT", "ACR_NEMA_2C_ZonalMapLocation"],
    0x00280722: ["US", "ACR_NEMA_2C_ZonalMapFormat"],
    0x00280730: ["US", "ACR_NEMA_2C_AdaptiveMapFormat"],
    0x00280740: ["US", "ACR_NEMA_2C_CodeNumberFormat"],
    0x00280800: ["CS", "ACR_NEMA_2C_CodeLabel"],
    0x00280802: ["US", "ACR_NEMA_2C_NumberOfTables"],
    0x00280803: ["AT", "ACR_NEMA_2C_CodeTableLocation"],
    0x00280804: ["US", "ACR_NEMA_2C_BitsForCodeWord"],
    0x00280808: ["AT", "ACR_NEMA_2C_ImageDataLocation"],
    0x10000000: ["UL", "ACR_NEMA_2C_CodeTableGroupLength"],
    0x10000010: ["US", "ACR_NEMA_2C_EscapeTriplet"],
    0x10000011: ["US", "ACR_NEMA_2C_RunLengthTriplet"],
    0x10000012: ["US", "ACR_NEMA_2C_HuffmanTableSize"],
    0x10000013: ["US", "ACR_NEMA_2C_HuffmanTableTriplet"],
    0x10000014: ["US", "ACR_NEMA_2C_ShiftTableSize"],
    0x10000015: ["US", "ACR_NEMA_2C_ShiftTableTriplet"],
    0x10100000: ["UL", "ACR_NEMA_2C_ZonalMapGroupLength"],
    0x10100004: ["US", "ACR_NEMA_2C_ZonalMap"],
    0x7FE00020: ["OW", "ACR_NEMA_2C_CoefficientsSDVN"],
    0x7FE00030: ["OW", "ACR_NEMA_2C_CoefficientsSDHN"],
    0x7FE00040: ["OW", "ACR_NEMA_2C_CoefficientsSDDN"],
    "CommandGroupLength": 0x00000000,
    "AffectedSOPClassUID": 0x00000002,
    "RequestedSOPClassUID": 0x00000003,
    "CommandField": 0x00000100,
    "MessageID": 0x00000110,
    "MessageIDBeingRespondedTo": 0x00000120,
    "MoveDestination": 0x00000600,
    "Priority": 0x00000700,
    "DataSetType": 0x00000800,
    "Status": 0x00000900,
    "OffendingElement": 0x00000901,
    "ErrorComment": 0x00000902,
    "ErrorID": 0x00000903,
    "AffectedSOPInstanceUID": 0x00001000,
    "RequestedSOPInstanceUID": 0x00001001,
    "EventTypeID": 0x00001002,
    "AttributeIdentifierList": 0x00001005,
    "ActionTypeID": 0x00001008,
    "NumberOfRemainingSuboperations": 0x00001020,
    "NumberOfCompletedSuboperations": 0x00001021,
    "NumberOfFailedSuboperations": 0x00001022,
    "NumberOfWarningSuboperations": 0x00001023,
    "MoveOriginatorApplicationEntityTitle": 0x00001030,
    "MoveOriginatorMessageID": 0x00001031,
    "MetaElementGroupLength": 0x00020000,
    "FileMetaInformationVersion": 0x00020001,
    "MediaStorageSOPClassUID": 0x00020002,
    "MediaStorageSOPInstanceUID": 0x00020003,
    "TransferSyntaxUID": 0x00020010,
    "ImplementationClassUID": 0x00020012,
    "ImplementationVersionName": 0x00020013,
    "SourceApplicationEntityTitle": 0x00020016,
    "PrivateInformationCreatorUID": 0x00020100,
    "PrivateInformation": 0x00020102,
    "FileSetGroupLength": 0x00040000,
    "FileSetID": 0x00041130,
    "FileSetDescriptorFileID": 0x00041141,
    "SpecificCharacterSetOfFileSetDescriptorFile": 0x00041142,
    "OffsetOfTheFirstDirectoryRecordOfTheRootDirectoryEntity": 0x00041200,
    "OffsetOfTheLastDirectoryRecordOfTheRootDirectoryEntity": 0x00041202,
    "FileSetConsistencyFlag": 0x00041212,
    "DirectoryRecordSequence": 0x00041220,
    "OffsetOfTheNextDirectoryRecord": 0x00041400,
    "RecordInUseFlag": 0x00041410,
    "OffsetOfReferencedLowerLevelDirectoryEntity": 0x00041420,
    "DirectoryRecordType": 0x00041430,
    "PrivateRecordUID": 0x00041432,
    "ReferencedFileID": 0x00041500,
    "MRDRDirectoryRecordOffset": 0x00041504,
    "ReferencedSOPClassUIDInFile": 0x00041510,
    "ReferencedSOPInstanceUIDInFile": 0x00041511,
    "ReferencedTransferSyntaxUIDInFile": 0x00041512,
    "ReferencedRelatedGeneralSOPClassUIDInFile": 0x0004151A,
    "NumberOfReferences": 0x00041600,
    "IdentifyingGroupLength": 0x00080000,
    "SpecificCharacterSet": 0x00080005,
    "ImageType": 0x00080008,
    "InstanceCreationDate": 0x00080012,
    "InstanceCreationTime": 0x00080013,
    "InstanceCreatorUID": 0x00080014,
    "SOPClassUID": 0x00080016,
    "SOPInstanceUID": 0x00080018,
    "RelatedGeneralSOPClassUID": 0x0008001A,
    "OriginalSpecializedSOPClassUID": 0x0008001B,
    "StudyDate": 0x00080020,
    "SeriesDate": 0x00080021,
    "AcquisitionDate": 0x00080022,
    "ContentDate": 0x00080023,
    "OverlayDate": 0x00080024,
    "CurveDate": 0x00080025,
    "AcquisitionDatetime": 0x0008002A,
    "StudyTime": 0x00080030,
    "SeriesTime": 0x00080031,
    "AcquisitionTime": 0x00080032,
    "ContentTime": 0x00080033,
    "OverlayTime": 0x00080034,
    "CurveTime": 0x00080035,
    "AccessionNumber": 0x00080050,
    "QueryRetrieveLevel": 0x00080052,
    "RetrieveAETitle": 0x00080054,
    "InstanceAvailability": 0x00080056,
    "FailedSOPInstanceUIDList": 0x00080058,
    "Modality": 0x00080060,
    "ModalitiesInStudy": 0x00080061,
    "SOPClassesInStudy": 0x00080062,
    "ConversionType": 0x00080064,
    "PresentationIntentType": 0x00080068,
    "Manufacturer": 0x00080070,
    "InstitutionName": 0x00080080,
    "InstitutionAddress": 0x00080081,
    "InstitutionCodeSequence": 0x00080082,
    "ReferringPhysiciansName": 0x00080090,
    "ReferringPhysiciansAddress": 0x00080092,
    "ReferringPhysiciansTelephoneNumbers": 0x00080094,
    "ReferringPhysicianIdentificationSequence": 0x00080096,
    "CodeValue": 0x00080100,
    "CodingSchemeDesignator": 0x00080102,
    "CodingSchemeVersion": 0x00080103,
    "CodeMeaning": 0x00080104,
    "MappingResource": 0x00080105,
    "ContextGroupVersion": 0x00080106,
    "ContextGroupLocalVersion": 0x00080107,
    "CodeSetExtensionFlag": 0x0008010B,
    "CodingSchemeUID": 0x0008010C,
    "CodeSetExtensionCreatorUID": 0x0008010D,
    "ContextIdentifier": 0x0008010F,
    "CodingSchemeIdentificationSequence": 0x00080110,
    "CodingSchemeRegistry": 0x00080112,
    "CodingSchemeExternalID": 0x00080114,
    "CodingSchemeName": 0x00080115,
    "ResponsibleOrganization": 0x00080116,
    "TimezoneOffsetFromUTC": 0x00080201,
    "StationName": 0x00081010,
    "StudyDescription": 0x00081030,
    "ProcedureCodeSequence": 0x00081032,
    "SeriesDescription": 0x0008103E,
    "InstitutionalDepartmentName": 0x00081040,
    "PhysiciansOfRecord": 0x00081048,
    "PhysiciansOfRecordIdentificationSequence": 0x00081049,
    "PerformingPhysiciansName": 0x00081050,
    "PerformingPhysicianIdentificationSequence": 0x00081052,
    "NameOfPhysiciansReadingStudy": 0x00081060,
    "PhysiciansReadingStudyIdentificationSequence": 0x00081062,
    "OperatorsName": 0x00081070,
    "OperatorIdentificationSequence": 0x00081072,
    "AdmittingDiagnosesDescription": 0x00081080,
    "AdmittingDiagnosesCodeSequence": 0x00081084,
    "ManufacturersModelName": 0x00081090,
    "ReferencedResultsSequence": 0x00081100,
    "ReferencedStudySequence": 0x00081110,
    "ReferencedPerformedProcedureStepSequence": 0x00081111,
    "ReferencedSeriesSequence": 0x00081115,
    "ReferencedPatientSequence": 0x00081120,
    "ReferencedVisitSequence": 0x00081125,
    "ReferencedOverlaySequence": 0x00081130,
    "ReferencedWaveformSequence": 0x0008113A,
    "ReferencedImageSequence": 0x00081140,
    "ReferencedCurveSequence": 0x00081145,
    "ReferencedInstanceSequence": 0x0008114A,
    "ReferencedRealWorldValueMappingInstanceSequence": 0x0008114B,
    "ReferencedSOPClassUID": 0x00081150,
    "ReferencedSOPInstanceUID": 0x00081155,
    "SOPClassesSupported": 0x0008115A,
    "ReferencedFrameNumber": 0x00081160,
    "TransactionUID": 0x00081195,
    "FailureReason": 0x00081197,
    "FailedSOPSequence": 0x00081198,
    "ReferencedSOPSequence": 0x00081199,
    "StudiesContainingOtherReferencedInstancesSequence": 0x00081200,
    "RelatedSeriesSequence": 0x00081250,
    "DerivationDescription": 0x00082111,
    "SourceImageSequence": 0x00082112,
    "StageName": 0x00082120,
    "StageNumber": 0x00082122,
    "NumberOfStages": 0x00082124,
    "ViewName": 0x00082127,
    "ViewNumber": 0x00082128,
    "NumberOfEventTimers": 0x00082129,
    "NumberOfViewsInStage": 0x0008212A,
    "EventElapsedTimes": 0x00082130,
    "EventTimerNames": 0x00082132,
    "StartTrim": 0x00082142,
    "StopTrim": 0x00082143,
    "RecommendedDisplayFrameRate": 0x00082144,
    "AnatomicRegionSequence": 0x00082218,
    "AnatomicRegionModifierSequence": 0x00082220,
    "PrimaryAnatomicStructureSequence": 0x00082228,
    "AnatomicStructureSpaceOrRegionSequence": 0x00082229,
    "PrimaryAnatomicStructureModifierSequence": 0x00082230,
    "TransducerPositionSequence": 0x00082240,
    "TransducerPositionModifierSequence": 0x00082242,
    "TransducerOrientationSequence": 0x00082244,
    "TransducerOrientationModifierSequence": 0x00082246,
    "AlternateRepresentationSequence": 0x00083001,
    "IrradiationEventUID": 0x00083010,
    "FrameType": 0x00089007,
    "ReferencedImageEvidenceSequence": 0x00089092,
    "ReferencedRawDataSequence": 0x00089121,
    "CreatorVersionUID": 0x00089123,
    "DerivationImageSequence": 0x00089124,
    "SourceImageEvidenceSequence": 0x00089154,
    "PixelPresentation": 0x00089205,
    "VolumetricProperties": 0x00089206,
    "VolumeBasedCalculationTechnique": 0x00089207,
    "ComplexImageComponent": 0x00089208,
    "AcquisitionContrast": 0x00089209,
    "DerivationCodeSequence": 0x00089215,
    "ReferencedGrayscalePresentationStateSequence": 0x00089237,
    "ReferencedOtherPlaneSequence": 0x00089410,
    "FrameDisplaySequence": 0x00089458,
    "RecommendedDisplayFrameRateInFloat": 0x00089459,
    "SkipFrameRangeFlag": 0x00089460,
    "PatientGroupLength": 0x00100000,
    "PatientsName": 0x00100010,
    "PatientID": 0x00100020,
    "IssuerOfPatientID": 0x00100021,
    "PatientsBirthDate": 0x00100030,
    "PatientsBirthTime": 0x00100032,
    "PatientsSex": 0x00100040,
    "PatientsInsurancePlanCodeSequence": 0x00100050,
    "PatientsPrimaryLanguageCodeSequence": 0x00100101,
    "PatientsPrimaryLanguageCodeModifierSequence": 0x00100102,
    "OtherPatientIDs": 0x00101000,
    "OtherPatientNames": 0x00101001,
    "PatientsBirthName": 0x00101005,
    "PatientsAge": 0x00101010,
    "PatientsSize": 0x00101020,
    "PatientsWeight": 0x00101030,
    "PatientsAddress": 0x00101040,
    "PatientsMothersBirthName": 0x00101060,
    "MilitaryRank": 0x00101080,
    "BranchOfService": 0x00101081,
    "MedicalRecordLocator": 0x00101090,
    "MedicalAlerts": 0x00102000,
    "ContrastAllergies": 0x00102110,
    "CountryOfResidence": 0x00102150,
    "RegionOfResidence": 0x00102152,
    "PatientsTelephoneNumbers": 0x00102154,
    "EthnicGroup": 0x00102160,
    "Occupation": 0x00102180,
    "SmokingStatus": 0x001021A0,
    "AdditionalPatientHistory": 0x001021B0,
    "PregnancyStatus": 0x001021C0,
    "LastMenstrualDate": 0x001021D0,
    "PatientsReligiousPreference": 0x001021F0,
    "PatientComments": 0x00104000,
    "ExaminedBodyThickness": 0x00109431,
    "ClinicalTrialGroupLength": 0x00120000,
    "ClinicalTrialSponsorName": 0x00120010,
    "ClinicalTrialProtocolID": 0x00120020,
    "ClinicalTrialProtocolName": 0x00120021,
    "ClinicalTrialSiteID": 0x00120030,
    "ClinicalTrialSiteName": 0x00120031,
    "ClinicalTrialSubjectID": 0x00120040,
    "ClinicalTrialSubjectReadingID": 0x00120042,
    "ClinicalTrialTimePointID": 0x00120050,
    "ClinicalTrialTimePointDescription": 0x00120051,
    "ClinicalTrialCoordinatingCenterName": 0x00120060,
    "PatientIdentifyRemoved": 0x00120062,
    "DeIdentificationMethod": 0x00120063,
    "DeIdentificationMethodCodeSequence": 0x00120064,
    "AcquisitionGroupLength": 0x00180000,
    "ContrastBolusAgent": 0x00180010,
    "ContrastBolusAgentSequence": 0x00180012,
    "ContrastBolusAdministrationRouteSequence": 0x00180014,
    "BodyPartExamined": 0x00180015,
    "ScanningSequence": 0x00180020,
    "SequenceVariant": 0x00180021,
    "ScanOptions": 0x00180022,
    "MRAcquisitionType": 0x00180023,
    "SequenceName": 0x00180024,
    "AngioFlag": 0x00180025,
    "InterventionDrugInformationSequence": 0x00180026,
    "InterventionDrugStopTime": 0x00180027,
    "InterventionDrugDose": 0x00180028,
    "InterventionDrugCodeSequence": 0x00180029,
    "AdditionalDrugSequence": 0x0018002A,
    "Radiopharmaceutical": 0x00180031,
    "InterventionDrugName": 0x00180034,
    "InterventionDrugStartTime": 0x00180035,
    "InterventionSequence": 0x00180036,
    "InterventionalStatus": 0x00180038,
    "InterventionDescription": 0x0018003A,
    "CineRate": 0x00180040,
    "SliceThickness": 0x00180050,
    "KVP": 0x00180060,
    "CountsAccumulated": 0x00180070,
    "AcquisitionTerminationCondition": 0x00180071,
    "EffectiveDuration": 0x00180072,
    "AcquisitionStartCondition": 0x00180073,
    "AcquisitionStartConditionData": 0x00180074,
    "AcquisitionTerminationConditionData": 0x00180075,
    "RepetitionTime": 0x00180080,
    "EchoTime": 0x00180081,
    "InversionTime": 0x00180082,
    "NumberOfAverages": 0x00180083,
    "ImagingFrequency": 0x00180084,
    "ImagedNucleus": 0x00180085,
    "EchoNumbers": 0x00180086,
    "MagneticFieldStrength": 0x00180087,
    "SpacingBetweenSlices": 0x00180088,
    "NumberOfPhaseEncodingSteps": 0x00180089,
    "DataCollectionDiameter": 0x00180090,
    "EchoTrainLength": 0x00180091,
    "PercentSampling": 0x00180093,
    "PercentPhaseFieldOfView": 0x00180094,
    "PixelBandwidth": 0x00180095,
    "DeviceSerialNumber": 0x00181000,
    "DeviceUID": 0x00181002,
    "PlateID": 0x00181004,
    "SecondaryCaptureDeviceID": 0x00181010,
    "HardcopyCreationDeviceID": 0x00181011,
    "DateOfSecondaryCapture": 0x00181012,
    "TimeOfSecondaryCapture": 0x00181014,
    "SecondaryCaptureDeviceManufacturer": 0x00181016,
    "HardcopyDeviceManufacturer": 0x00181017,
    "SecondaryCaptureDeviceManufacturersModelName": 0x00181018,
    "SecondaryCaptureDeviceSoftwareVersions": 0x00181019,
    "HardcopyDeviceSoftwareVersion": 0x0018101A,
    "HardcopyDeviceManufacturersModelName": 0x0018101B,
    "SoftwareVersions": 0x00181020,
    "VideoImageFormatAcquired": 0x00181022,
    "DigitalImageFormatAcquired": 0x00181023,
    "ProtocolName": 0x00181030,
    "ContrastBolusRoute": 0x00181040,
    "ContrastBolusVolume": 0x00181041,
    "ContrastBolusStartTime": 0x00181042,
    "ContrastBolusStopTime": 0x00181043,
    "ContrastBolusTotalDose": 0x00181044,
    "SyringeCounts": 0x00181045,
    "ContrastFlowRate": 0x00181046,
    "ContrastFlowDuration": 0x00181047,
    "ContrastBolusIngredient": 0x00181048,
    "ContrastBolusIngredientConcentration": 0x00181049,
    "SpatialResolution": 0x00181050,
    "TriggerTime": 0x00181060,
    "TriggerSourceOrType": 0x00181061,
    "NominalInterval": 0x00181062,
    "FrameTime": 0x00181063,
    "FramingType": 0x00181064,
    "FrameTimeVector": 0x00181065,
    "FrameDelay": 0x00181066,
    "ImageTriggerDelay": 0x00181067,
    "MultiplexGroupTimeOffset": 0x00181068,
    "TriggerTimeOffset": 0x00181069,
    "SynchronizationTrigger": 0x0018106A,
    "SynchronizationChannel": 0x0018106C,
    "TriggerSamplePosition": 0x0018106E,
    "RadiopharmaceuticalRoute": 0x00181070,
    "RadiopharmaceuticalVolume": 0x00181071,
    "RadiopharmaceuticalStartTime": 0x00181072,
    "RadiopharmaceuticalStopTime": 0x00181073,
    "RadionuclideTotalDose": 0x00181074,
    "RadionuclideHalfLife": 0x00181075,
    "RadionuclidePositronFraction": 0x00181076,
    "RadiopharmaceuticalSpecificActivity": 0x00181077,
    "RadiopharmaceuticalStartDatetime": 0x00181078,
    "RadiopharmaceuticalStopDatetime": 0x00181079,
    "BeatRejectionFlag": 0x00181080,
    "LowRRValue": 0x00181081,
    "HighRRValue": 0x00181082,
    "IntervalsAcquired": 0x00181083,
    "IntervalsRejected": 0x00181084,
    "PVCRejection": 0x00181085,
    "SkipBeats": 0x00181086,
    "HeartRate": 0x00181088,
    "CardiacNumberOfImages": 0x00181090,
    "TriggerWindow": 0x00181094,
    "ReconstructionDiameter": 0x00181100,
    "DistanceSourceToDetector": 0x00181110,
    "DistanceSourceToPatient": 0x00181111,
    "EstimatedRadiographicMagnificationFactor": 0x00181114,
    "GantryDetectorTilt": 0x00181120,
    "GantryDetectorSlew": 0x00181121,
    "TableHeight": 0x00181130,
    "TableTraverse": 0x00181131,
    "TableMotion": 0x00181134,
    "TableVerticalIncrement": 0x00181135,
    "TableLateralIncrement": 0x00181136,
    "TableLongitudinalIncrement": 0x00181137,
    "TableAngle": 0x00181138,
    "TableType": 0x0018113A,
    "RotationDirection": 0x00181140,
    "AngularPosition": 0x00181141,
    "RadialPosition": 0x00181142,
    "ScanArc": 0x00181143,
    "AngularStep": 0x00181144,
    "CenterOfRotationOffset": 0x00181145,
    "FieldOfViewShape": 0x00181147,
    "FieldOfViewDimensions": 0x00181149,
    "ExposureTime": 0x00181150,
    "XRayTubeCurrent": 0x00181151,
    "Exposure": 0x00181152,
    "ExposureInMicroAs": 0x00181153,
    "AveragePulseWidth": 0x00181154,
    "RadiationSetting": 0x00181155,
    "RectificationType": 0x00181156,
    "RadiationMode": 0x0018115A,
    "ImageAndFluoroscopyAreaDoseProduct": 0x0018115E,
    "FilterType": 0x00181160,
    "TypeOfFilters": 0x00181161,
    "IntensifierSize": 0x00181162,
    "ImagerPixelSpacing": 0x00181164,
    "Grid": 0x00181166,
    "GeneratorPower": 0x00181170,
    "CollimatorGridName": 0x00181180,
    "CollimatorType": 0x00181181,
    "FocalDistance": 0x00181182,
    "XFocusCenter": 0x00181183,
    "YFocusCenter": 0x00181184,
    "FocalSpots": 0x00181190,
    "AnodeTargetMaterial": 0x00181191,
    "BodyPartThickness": 0x001811A0,
    "CompressionForce": 0x001811A2,
    "DateOfLastCalibration": 0x00181200,
    "TimeOfLastCalibration": 0x00181201,
    "ConvolutionKernel": 0x00181210,
    "ActualFrameDuration": 0x00181242,
    "CountRate": 0x00181243,
    "PreferredPlaybackSequencing": 0x00181244,
    "ReceiveCoilName": 0x00181250,
    "TransmitCoilName": 0x00181251,
    "PlateType": 0x00181260,
    "PhosphorType": 0x00181261,
    "ScanVelocity": 0x00181300,
    "WholeBodyTechnique": 0x00181301,
    "ScanLength": 0x00181302,
    "AcquisitionMatrix": 0x00181310,
    "InPlanePhaseEncodingDirection": 0x00181312,
    "FlipAngle": 0x00181314,
    "VariableFlipAngleFlag": 0x00181315,
    "SAR": 0x00181316,
    "dBdt": 0x00181318,
    "AcquisitionDeviceProcessingDescription": 0x00181400,
    "AcquisitionDeviceProcessingCode": 0x00181401,
    "CassetteOrientation": 0x00181402,
    "CassetteSize": 0x00181403,
    "ExposuresOnPlate": 0x00181404,
    "RelativeXRayExposure": 0x00181405,
    "ColumnAngulation": 0x00181450,
    "TomoLayerHeight": 0x00181460,
    "TomoAngle": 0x00181470,
    "TomoTime": 0x00181480,
    "TomoType": 0x00181490,
    "TomoClass": 0x00181491,
    "NumberOfTomosynthesisSourceImages": 0x00181495,
    "PositionerMotion": 0x00181500,
    "PositionerType": 0x00181508,
    "PositionerPrimaryAngle": 0x00181510,
    "PositionerSecondaryAngle": 0x00181511,
    "PositionerPrimaryAngleIncrement": 0x00181520,
    "PositionerSecondaryAngleIncrement": 0x00181521,
    "DetectorPrimaryAngle": 0x00181530,
    "DetectorSecondaryAngle": 0x00181531,
    "ShutterShape": 0x00181600,
    "ShutterLeftVerticalEdge": 0x00181602,
    "ShutterRightVerticalEdge": 0x00181604,
    "ShutterUpperHorizontalEdge": 0x00181606,
    "ShutterLowerHorizontalEdge": 0x00181608,
    "CenterOfCircularShutter": 0x00181610,
    "RadiusOfCircularShutter": 0x00181612,
    "VerticesOfThePolygonalShutter": 0x00181620,
    "ShutterPresentationValue": 0x00181622,
    "ShutterOverlayGroup": 0x00181623,
    "ShutterPresentationColorCIELabValue": 0x00181624,
    "CollimatorShape": 0x00181700,
    "CollimatorLeftVerticalEdge": 0x00181702,
    "CollimatorRightVerticalEdge": 0x00181704,
    "CollimatorUpperHorizontalEdge": 0x00181706,
    "CollimatorLowerHorizontalEdge": 0x00181708,
    "CenterOfCircularCollimator": 0x00181710,
    "RadiusOfCircularCollimator": 0x00181712,
    "VerticesOfThePolygonalCollimator": 0x00181720,
    "AcquisitionTimeSynchronized": 0x00181800,
    "TimeSource": 0x00181801,
    "TimeDistributionProtocol": 0x00181802,
    "NTPSourceAddress": 0x00181803,
    "PageNumberVector": 0x00182001,
    "FrameLabelVector": 0x00182002,
    "FramePrimaryAngleVector": 0x00182003,
    "FrameSecondaryAngleVector": 0x00182004,
    "SliceLocationVector": 0x00182005,
    "DisplayWindowLabelVector": 0x00182006,
    "NominalScannedPixelSpacing": 0x00182010,
    "DigitizingDeviceTransportDirection": 0x00182020,
    "RotationOfScannedFilm": 0x00182030,
    "IVUSAcquisition": 0x00183100,
    "IVUSPullbackRate": 0x00183101,
    "IVUSGatedRate": 0x00183102,
    "IVUSPullbackStartFrameNumber": 0x00183103,
    "IVUSPullbackStopFrameNumber": 0x00183104,
    "LesionNumber": 0x00183105,
    "OutputPower": 0x00185000,
    "TransducerData": 0x00185010,
    "FocusDepth": 0x00185012,
    "ProcessingFunction": 0x00185020,
    "PostprocessingFunction": 0x00185021,
    "MechanicalIndex": 0x00185022,
    "BoneThermalIndex": 0x00185024,
    "CranialThermalIndex": 0x00185026,
    "SoftTissueThermalIndex": 0x00185027,
    "SoftTissueFocusThermalIndex": 0x00185028,
    "SoftTissueSurfaceThermalIndex": 0x00185029,
    "DepthOfScanField": 0x00185050,
    "PatientPosition": 0x00185100,
    "ViewPosition": 0x00185101,
    "ProjectionEponymousNameCodeSequence": 0x00185104,
    "Sensitivity": 0x00186000,
    "SequenceOfUltrasoundRegions": 0x00186011,
    "RegionSpatialFormat": 0x00186012,
    "RegionDataType": 0x00186014,
    "RegionFlags": 0x00186016,
    "RegionLocationMinX0": 0x00186018,
    "RegionLocationMinY0": 0x0018601A,
    "RegionLocationMaxX1": 0x0018601C,
    "RegionLocationMaxY1": 0x0018601E,
    "ReferencePixelX0": 0x00186020,
    "ReferencePixelY0": 0x00186022,
    "PhysicalUnitsXDirection": 0x00186024,
    "PhysicalUnitsYDirection": 0x00186026,
    "ReferencePixelPhysicalValueX": 0x00186028,
    "ReferencePixelPhysicalValueY": 0x0018602A,
    "PhysicalDeltaX": 0x0018602C,
    "PhysicalDeltaY": 0x0018602E,
    "TransducerFrequency": 0x00186030,
    "TransducerType": 0x00186031,
    "PulseRepetitionFrequency": 0x00186032,
    "DopplerCorrectionAngle": 0x00186034,
    "SteeringAngle": 0x00186036,
    "DopplerSampleVolumeXPosition": 0x00186039,
    "DopplerSampleVolumeYPosition": 0x0018603B,
    "TMLinePositionX0": 0x0018603D,
    "TMLinePositionY0": 0x0018603F,
    "TMLinePositionX1": 0x00186041,
    "TMLinePositionY1": 0x00186043,
    "PixelComponentOrganization": 0x00186044,
    "PixelComponentMask": 0x00186046,
    "PixelComponentRangeStart": 0x00186048,
    "PixelComponentRangeStop": 0x0018604A,
    "PixelComponentPhysicalUnits": 0x0018604C,
    "PixelComponentDataType": 0x0018604E,
    "NumberOfTableBreakPoints": 0x00186050,
    "TableOfXBreakPoints": 0x00186052,
    "TableOfYBreakPoints": 0x00186054,
    "NumberOfTableEntries": 0x00186056,
    "TableOfPixelValues": 0x00186058,
    "TableOfParameterValues": 0x0018605A,
    "RWaveTimeVector": 0x00186060,
    "DetectorConditionsNominalFlag": 0x00187000,
    "DetectorTemperature": 0x00187001,
    "DetectorType": 0x00187004,
    "DetectorConfiguration": 0x00187005,
    "DetectorDescription": 0x00187006,
    "DetectorMode": 0x00187008,
    "DetectorID": 0x0018700A,
    "DateOfLastDetectorCalibration": 0x0018700C,
    "TimeOfLastDetectorCalibration": 0x0018700E,
    "ExposuresOnDetectorSinceLastCalibration": 0x00187010,
    "ExposuresOnDetectorSinceManufactured": 0x00187011,
    "DetectorTimeSinceLastExposure": 0x00187012,
    "DetectorActiveTime": 0x00187014,
    "DetectorActivationOffsetFromExposure": 0x00187016,
    "DetectorBinning": 0x0018701A,
    "DetectorElementPhysicalSize": 0x00187020,
    "DetectorElementSpacing": 0x00187022,
    "DetectorActiveShape": 0x00187024,
    "DetectorActiveDimensions": 0x00187026,
    "DetectorActiveOrigin": 0x00187028,
    "DetectorManufacturerName": 0x0018702A,
    "DetectorManufacturersModelName": 0x0018702B,
    "FieldOfViewOrigin": 0x00187030,
    "FieldOfViewRotation": 0x00187032,
    "FieldOfViewHorizontalFlip": 0x00187034,
    "GridAbsorbingMaterial": 0x00187040,
    "GridSpacingMaterial": 0x00187041,
    "GridThickness": 0x00187042,
    "GridPitch": 0x00187044,
    "GridAspectRatio": 0x00187046,
    "GridPeriod": 0x00187048,
    "GridFocalDistance": 0x0018704C,
    "FilterMaterial": 0x00187050,
    "FilterThicknessMinimum": 0x00187052,
    "FilterThicknessMaximum": 0x00187054,
    "ExposureControlMode": 0x00187060,
    "ExposureControlModeDescription": 0x00187062,
    "ExposureStatus": 0x00187064,
    "PhototimerSetting": 0x00187065,
    "ExposureTimeInMicroS": 0x00188150,
    "XRayTubeCurrentInMicroA": 0x00188151,
    "ContentQualification": 0x00189004,
    "PulseSequenceName": 0x00189005,
    "MRImagingModifierSequence": 0x00189006,
    "EchoPulseSequence": 0x00189008,
    "InversionRecovery": 0x00189009,
    "FlowCompensation": 0x00189010,
    "MultipleSpinEcho": 0x00189011,
    "MultiPlanarExcitation": 0x00189012,
    "PhaseContrast": 0x00189014,
    "TimeOfFlightContrast": 0x00189015,
    "Spoiling": 0x00189016,
    "SteadyStatePulseSequence": 0x00189017,
    "EchoPlanarPulseSequence": 0x00189018,
    "TagAngleFirstAxis": 0x00189019,
    "MagnetizationTransfer": 0x00189020,
    "T2Preparation": 0x00189021,
    "BloodSignalNulling": 0x00189022,
    "SaturationRecovery": 0x00189024,
    "SpectrallySelectedSuppression": 0x00189025,
    "SpectrallySelectedExcitation": 0x00189026,
    "SpatialPreSaturation": 0x00189027,
    "Tagging": 0x00189028,
    "OversamplingPhase": 0x00189029,
    "TagSpacingFirstDimension": 0x00189030,
    "GeometryOfKSpaceTraversal": 0x00189032,
    "SegmentedKSpaceTraversal": 0x00189033,
    "RectilinearPhaseEncodeReordering": 0x00189034,
    "TagThickness": 0x00189035,
    "PartialFourierDirection": 0x00189036,
    "CardiacSynchronizationTechnique": 0x00189037,
    "ReceiveCoilManufacturerName": 0x00189041,
    "MRReceiveCoilSequence": 0x00189042,
    "ReceiveCoilType": 0x00189043,
    "QuadratureReceiveCoil": 0x00189044,
    "MultiCoilDefinitionSequence": 0x00189045,
    "MultiCoilConfiguration": 0x00189046,
    "MultiCoilElementName": 0x00189047,
    "MultiCoilElementUsed": 0x00189048,
    "MRTransmitCoilSequence": 0x00189049,
    "TransmitCoilManufacturerName": 0x00189050,
    "TransmitCoilType": 0x00189051,
    "SpectralWidth": 0x00189052,
    "ChemicalShiftReference": 0x00189053,
    "VolumeLocalizationTechnique": 0x00189054,
    "MRAcquisitionFrequencyEncodingSteps": 0x00189058,
    "Decoupling": 0x00189059,
    "DecoupledNucleus": 0x00189060,
    "DecouplingFrequency": 0x00189061,
    "DecouplingMethod": 0x00189062,
    "DecouplingChemicalShiftReference": 0x00189063,
    "KSpaceFiltering": 0x00189064,
    "TimeDomainFiltering": 0x00189065,
    "NumberOfZeroFills": 0x00189066,
    "BaselineCorrection": 0x00189067,
    "ParallelReductionFactorInPlane": 0x00189069,
    "CardiacRRIntervalSpecified": 0x00189070,
    "AcquisitionDuration": 0x00189073,
    "FrameAcquisitionDatetime": 0x00189074,
    "DiffusionDirectionality": 0x00189075,
    "DiffusionGradientDirectionSequence": 0x00189076,
    "ParallelAcquisition": 0x00189077,
    "ParallelAcquisitionTechnique": 0x00189078,
    "InversionTimes": 0x00189079,
    "MetaboliteMapDescription": 0x00189080,
    "PartialFourier": 0x00189081,
    "EffectiveEchoTime": 0x00189082,
    "MetaboliteMapCodeSequence": 0x00189083,
    "ChemicalShiftSequence": 0x00189084,
    "CardiacSignalSource": 0x00189085,
    "DiffusionBValue": 0x00189087,
    "DiffusionGradientOrientation": 0x00189089,
    "VelocityEncodingDirection": 0x00189090,
    "VelocityEncodingMinimumValue": 0x00189091,
    "NumberOfKSpaceTrajectories": 0x00189093,
    "CoverageOfKSpace": 0x00189094,
    "SpectroscopyAcquisitionPhaseRows": 0x00189095,
    "TransmitterFrequency": 0x00189098,
    "ResonantNucleus": 0x00189100,
    "FrequencyCorrection": 0x00189101,
    "MRSpectroscopyFOVGeometrySequence": 0x00189103,
    "SlabThickness": 0x00189104,
    "SlabOrientation": 0x00189105,
    "MidSlabPosition": 0x00189106,
    "MRSpatialSaturationSequence": 0x00189107,
    "MRTimingAndRelatedParametersSequence": 0x00189112,
    "MREchoSequence": 0x00189114,
    "MRModifierSequence": 0x00189115,
    "MRDiffusionSequence": 0x00189117,
    "CardiacTriggerSequence": 0x00189118,
    "MRAveragesSequence": 0x00189119,
    "MRFOVGeometrySequence": 0x00189125,
    "VolumeLocalizationSequence": 0x00189126,
    "SpectroscopyAcquisitionDataColumns": 0x00189127,
    "DiffusionAnisotropyType": 0x00189147,
    "FrameReferenceDatetime": 0x00189151,
    "MRMetaboliteMapSequence": 0x00189152,
    "ParallelReductionFactorOutOfPlane": 0x00189155,
    "SpectroscopyAcquisitionOutOfPlanePhaseSteps": 0x00189159,
    "BulkMotionStatus": 0x00189166,
    "ParallelReductionFactorSecondInPlane": 0x00189168,
    "CardiacBeatRejectionTechnique": 0x00189169,
    "RespiratoryMotionCompensationTechnique": 0x00189170,
    "RespiratorySignalSource": 0x00189171,
    "BulkMotionCompensationTechnique": 0x00189172,
    "BulkMotionSignalSource": 0x00189173,
    "ApplicableSafetyStandardAgency": 0x00189174,
    "ApplicableSafetyStandardDescription": 0x00189175,
    "OperatingModeSequence": 0x00189176,
    "OperatingModeType": 0x00189177,
    "OperationMode": 0x00189178,
    "SpecificAbsorptionRateDefinition": 0x00189179,
    "GradientOutputType": 0x00189180,
    "SpecificAbsorptionRateValue": 0x00189181,
    "GradientOutput": 0x00189182,
    "FlowCompensationDirection": 0x00189183,
    "TaggingDelay": 0x00189184,
    "MRVelocityEncodingSequence": 0x00189197,
    "FirstOrderPhaseCorrection": 0x00189198,
    "WaterReferencedPhaseCorrection": 0x00189199,
    "MRSpectroscopyAcquisitionType": 0x00189200,
    "RespiratoryCyclePosition": 0x00189214,
    "VelocityEncodingMaximumValue": 0x00189217,
    "TagSpacingSecondDimension": 0x00189218,
    "TagAngleSecondAxis": 0x00189219,
    "FrameAcquisitionDuration": 0x00189220,
    "MRImageFrameTypeSequence": 0x00189226,
    "MRSpectroscopyFrameTypeSequence": 0x00189227,
    "MRAcquisitionPhaseEncodingStepsInPlane": 0x00189231,
    "MRAcquisitionPhaseEncodingStepsOutOfPlane": 0x00189232,
    "SpectroscopyAcquisitionPhaseColumns": 0x00189234,
    "CardiacCyclePosition": 0x00189236,
    "SpecificAbsorptionRateSequence": 0x00189239,
    "RFEchoTrainLength": 0x00189240,
    "GradientEchoTrainLength": 0x00189241,
    "ChemicalShiftsMinimumIntegrationLimitInPpm": 0x00189295,
    "ChemicalShiftsMaximumIntegrationLimitInPpm": 0x00189296,
    "CTAcquisitionTypeSequence": 0x00189301,
    "AcquisitionType": 0x00189302,
    "TubeAngle": 0x00189303,
    "CTAcquisitionDetailsSequence": 0x00189304,
    "RevolutionTime": 0x00189305,
    "SingleCollimationWidth": 0x00189306,
    "TotalCollimationWidth": 0x00189307,
    "CTTableDynamicsSequence": 0x00189308,
    "TableSpeed": 0x00189309,
    "TableFeedPerRotation": 0x00189310,
    "SpiralPitchFactor": 0x00189311,
    "CTGeometrySequence": 0x00189312,
    "DataCollectionCenterPatient": 0x00189313,
    "CTReconstructionSequence": 0x00189314,
    "ReconstructionAlgorithm": 0x00189315,
    "ConvolutionKernelGroup": 0x00189316,
    "ReconstructionFieldOfView": 0x00189317,
    "ReconstructionTargetCenterPatient": 0x00189318,
    "ReconstructionAngle": 0x00189319,
    "ImageFilter": 0x00189320,
    "CTExposureSequence": 0x00189321,
    "ReconstructionPixelSpacing": 0x00189322,
    "ExposureModulationType": 0x00189323,
    "EstimatedDoseSaving": 0x00189324,
    "CTXRayDetailsSequence": 0x00189325,
    "CTPositionSequence": 0x00189326,
    "TablePosition": 0x00189327,
    "ExposureTimeInms": 0x00189328,
    "CTImageFrameTypeSequence": 0x00189329,
    "XRayTubeCurrentInmA": 0x00189330,
    "ExposureInmAs": 0x00189332,
    "ConstantVolumeFlag": 0x00189333,
    "FluoroscopyFlag": 0x00189334,
    "DistanceSourceToDataCollectionCenter": 0x00189335,
    "ContrastBolusAgentNumber": 0x00189337,
    "ContrastBolusIngredientCodeSequence": 0x00189338,
    "ContrastAdministrationProfileSequence": 0x00189340,
    "ContrastBolusUsageSequence": 0x00189341,
    "ContrastBolusAgentAdministered": 0x00189342,
    "ContrastBolusAgentDetected": 0x00189343,
    "ContrastBolusAgentPhase": 0x00189344,
    "CTDIvol": 0x00189345,
    "ProjectionPixelCalibrationSequence": 0x00189401,
    "DistanceSourceToIsocenter": 0x00189402,
    "DistanceObjectToTableTop": 0x00189403,
    "ObjectPixelSpacingInCenterOfBeam": 0x00189404,
    "PositionerPositionSequence": 0x00189405,
    "TablePositionSequence": 0x00189406,
    "CollimatorShapeSequence": 0x00189407,
    "XA": 0x00189412,
    "XRayReceptorType": 0x00189420,
    "AcquisitionProtocolName": 0x00189423,
    "AcquisitionProtocolDescription": 0x00189424,
    "Contrast": 0x00189425,
    "DistanceReceptorPlaneToDetectorHousing": 0x00189426,
    "IntensifierActiveShape": 0x00189427,
    "IntensifierActiveDimension": 0x00189428,
    "PhysicalDetectorSize": 0x00189429,
    "PositionOfIsocenterProjection": 0x00189430,
    "FieldOfViewSequence": 0x00189432,
    "FieldOfViewDescription": 0x00189433,
    "ExposureControlSensingRegionsSequence": 0x00189434,
    "ExposureControlSensingRegionShape": 0x00189435,
    "ExposureControlSensingRegionLeftVerticalEdge": 0x00189436,
    "ExposureControlSensingRegionRightVerticalEdge": 0x00189437,
    "ExposureControlSensingRegionUpperHorizontalEdge": 0x00189438,
    "ExposureControlSensingRegionLowerHorizontalEdge": 0x00189439,
    "CenterOfCircularExposureControlSensingRegion": 0x00189440,
    "RadiusOfCircularExposureControlSensingRegion": 0x00189441,
    "VerticesOfThePolygonalExposureControlSensingRegion": 0x00189442,
    "ColumnAngulationPatient": 0x00189447,
    "BeamAngle": 0x00189449,
    "FrameDetectorParametersSequence": 0x00189451,
    "CalculatedAnatomyThickness": 0x00189452,
    "CalibrationSequence": 0x00189455,
    "ObjectThicknessSequence": 0x00189456,
    "PlaneIdentification": 0x00189457,
    "FieldOfViewDimensionsInFloat": 0x00189461,
    "IsocenterReferenceSystemSequence": 0x00189462,
    "PositionerIsocenterPrimaryAngle": 0x00189463,
    "PositionerIsocenterSecondaryAngle": 0x00189464,
    "PositionerIsocenterDetectorRotationAngle": 0x00189465,
    "TableXPositionToIsocenter": 0x00189466,
    "TableYPositionToIsocenter": 0x00189467,
    "TableZPositionToIsocenter": 0x00189468,
    "TableHorizontalRotationAngle": 0x00189469,
    "TableHeadTiltAngle": 0x00189470,
    "TableCradleTiltAngle": 0x00189471,
    "FrameDisplayShutterSequence": 0x00189472,
    "AcquiredImageAreaDoseProduct": 0x00189473,
    "CArmPositionerTabletopRelationship": 0x00189474,
    "XRayGeometrySequence": 0x00189476,
    "IrradiationEventIdentificationSequence": 0x00189477,
    "ContributingEquipmentSequence": 0x0018A001,
    "ContributionDateTime": 0x0018A002,
    "ContributionDescription": 0x0018A003,
    "ImageGroupLength": 0x00200000,
    "StudyInstanceUID": 0x0020000D,
    "SeriesInstanceUID": 0x0020000E,
    "StudyID": 0x00200010,
    "SeriesNumber": 0x00200011,
    "AcquisitionNumber": 0x00200012,
    "InstanceNumber": 0x00200013,
    "ItemNumber": 0x00200019,
    "PatientOrientation": 0x00200020,
    "OverlayNumber": 0x00200022,
    "CurveNumber": 0x00200024,
    "LookupTableNumber": 0x00200026,
    "ImagePositionPatient": 0x00200032,
    "ImageOrientationPatient": 0x00200037,
    "FrameOfReferenceUID": 0x00200052,
    "Laterality": 0x00200060,
    "ImageLaterality": 0x00200062,
    "TemporalPositionIdentifier": 0x00200100,
    "NumberOfTemporalPositions": 0x00200105,
    "TemporalResolution": 0x00200110,
    "SynchronizationFrameOfReferenceUID": 0x00200200,
    "SeriesInStudy": 0x00201000,
    "ImagesInAcquisition": 0x00201002,
    "AcquisitionsInStudy": 0x00201004,
    "PositionReferenceIndicator": 0x00201040,
    "SliceLocation": 0x00201041,
    "OtherStudyNumbers": 0x00201070,
    "NumberOfPatientRelatedStudies": 0x00201200,
    "NumberOfPatientRelatedSeries": 0x00201202,
    "NumberOfPatientRelatedInstances": 0x00201204,
    "NumberOfStudyRelatedSeries": 0x00201206,
    "NumberOfStudyRelatedInstances": 0x00201208,
    "NumberOfSeriesRelatedInstances": 0x00201209,
    "ImageComments": 0x00204000,
    "StackID": 0x00209056,
    "InStackPositionNumber": 0x00209057,
    "FrameAnatomySequence": 0x00209071,
    "FrameLaterality": 0x00209072,
    "FrameContentSequence": 0x00209111,
    "PlanePositionSequence": 0x00209113,
    "PlaneOrientationSequence": 0x00209116,
    "TemporalPositionIndex": 0x00209128,
    "TriggerDelayTime": 0x00209153,
    "FrameAcquisitionNumber": 0x00209156,
    "DimensionIndexValues": 0x00209157,
    "FrameComments": 0x00209158,
    "ConcatenationUID": 0x00209161,
    "InConcatenationNumber": 0x00209162,
    "InConcatenationTotalNumber": 0x00209163,
    "DimensionOrganizationUID": 0x00209164,
    "DimensionIndexPointer": 0x00209165,
    "FunctionalGroupPointer": 0x00209167,
    "DimensionIndexPrivateCreator": 0x00209213,
    "DimensionOrganizationSequence": 0x00209221,
    "DimensionIndexSequence": 0x00209222,
    "ConcatenationFrameOffsetNumber": 0x00209228,
    "FunctionalGroupPrivateCreator": 0x00209238,
    "DimensionDescriptionLabel": 0x00209421,
    "PatientOrientationInFrameSequence": 0x00209450,
    "FrameLabel": 0x00209453,
    "OphtalmologyGroupLength": 0x00220000,
    "LightPathFilterPass": 0x00220001,
    "LightPathFilterPassBand": 0x00220002,
    "ImagePathFilterPass": 0x00220003,
    "ImagePathFilterPassBand": 0x00220004,
    "PatientEyeMovementCommanded": 0x00220005,
    "PatientEyeMovementCommandCodeSequence": 0x00220006,
    "SphericalLensPower": 0x00220007,
    "CylinderLensPower": 0x00220008,
    "CylinderAxis": 0x00220009,
    "EmmetropicMagnification": 0x0022000A,
    "IntraOcularPressure": 0x0022000B,
    "HorizontalFieldOfView": 0x0022000C,
    "PupilDilated": 0x0022000D,
    "DegreeOfDilation": 0x0022000E,
    "StereoBaselineAngle": 0x00220010,
    "StereoBaselineDisplacement": 0x00220011,
    "StereoHorizontalPixelOffset": 0x00220012,
    "StereoVerticalPixelOffset": 0x00220013,
    "StereoRotation": 0x00220014,
    "AcquisitionDeviceTypeCodeSequence": 0x00220015,
    "IlluminationTypeCodeSequence": 0x00220016,
    "LightPathFilterTypeStackCodeSequence": 0x00220017,
    "ImagePathFilterTypeStackCodeSequence": 0x00220018,
    "LensesCodeSequence": 0x00220019,
    "ChannelDescriptionCodeSequence": 0x0022001A,
    "RefractiveStateSequence": 0x0022001B,
    "MydriaticAgentCodeSequence": 0x0022001C,
    "RelativeImagePositionCodeSequence": 0x0022001D,
    "StereoPairsSequence": 0x00220020,
    "LeftImageSequence": 0x00220021,
    "RightImageSequence": 0x00220022,
    "ImagePresentationGroupLength": 0x00280000,
    "SamplesPerPixel": 0x00280002,
    "SamplesPerPixelUsed": 0x00280003,
    "PhotometricInterpretation": 0x00280004,
    "PlanarConfiguration": 0x00280006,
    "NumberOfFrames": 0x00280008,
    "FrameIncrementPointer": 0x00280009,
    "FrameDimensionPointer": 0x0028000A,
    "Rows": 0x00280010,
    "Columns": 0x00280011,
    "Planes": 0x00280012,
    "UltrasoundColorDataPresent": 0x00280014,
    "PixelSpacing": 0x00280030,
    "ZoomFactor": 0x00280031,
    "ZoomCenter": 0x00280032,
    "PixelAspectRatio": 0x00280034,
    "CorrectedImage": 0x00280051,
    "BitsAllocated": 0x00280100,
    "BitsStored": 0x00280101,
    "HighBit": 0x00280102,
    "PixelRepresentation": 0x00280103,
    "SmallestImagePixelValue": 0x00280106,
    "LargestImagePixelValue": 0x00280107,
    "SmallestPixelValueInSeries": 0x00280108,
    "LargestPixelValueInSeries": 0x00280109,
    "SmallestImagePixelValueInPlane": 0x00280110,
    "LargestImagePixelValueInPlane": 0x00280111,
    "PixelPaddingValue": 0x00280120,
    "QualityControlImage": 0x00280300,
    "BurnedInAnnotation": 0x00280301,
    "PixelIntensityRelationship": 0x00281040,
    "PixelIntensityRelationshipSign": 0x00281041,
    "WindowCenter": 0x00281050,
    "WindowWidth": 0x00281051,
    "RescaleIntercept": 0x00281052,
    "RescaleSlope": 0x00281053,
    "RescaleType": 0x00281054,
    "WindowCenterWidthExplanation": 0x00281055,
    "VOILUTFunction": 0x00281056,
    "RecommendedViewingMode": 0x00281090,
    "RedPaletteColorLookupTableDescriptor": 0x00281101,
    "GreenPaletteColorLookupTableDescriptor": 0x00281102,
    "BluePaletteColorLookupTableDescriptor": 0x00281103,
    "PaletteColorLookupTableUID": 0x00281199,
    "RedPaletteColorLookupTableData": 0x00281201,
    "GreenPaletteColorLookupTableData": 0x00281202,
    "BluePaletteColorLookupTableData": 0x00281203,
    "SegmentedRedPaletteColorLookupTableData": 0x00281221,
    "SegmentedGreenPaletteColorLookupTableData": 0x00281222,
    "SegmentedBluePaletteColorLookupTableData": 0x00281223,
    "ImplantPresent": 0x00281300,
    "PartialView": 0x00281350,
    "PartialViewDescription": 0x00281351,
    "PartialViewCodeSequence": 0x00281352,
    "SpatialLocationsPreserved": 0x0028135A,
    "ICCProfile": 0x00282000,
    "LossyImageCompression": 0x00282110,
    "LossyImageCompressionRatio": 0x00282112,
    "LossyImageCompressionMethod": 0x00282114,
    "ModalityLUTSequence": 0x00283000,
    "LUTDescriptor": 0x00283002,
    "LUTExplanation": 0x00283003,
    "ModalityLUTType": 0x00283004,
    "LUTData": 0x00283006,
    "VOILUTSequence": 0x00283010,
    "SoftcopyVOILUTSequence": 0x00283110,
    "BiPlaneAcquisitionSequence": 0x00285000,
    "RepresentativeFrameNumber": 0x00286010,
    "FrameNumbersOfInterestFOI": 0x00286020,
    "FramesOfInterestDescription": 0x00286022,
    "FrameOfInterestType": 0x00286023,
    "RWavePointer": 0x00286040,
    "MaskSubtractionSequence": 0x00286100,
    "MaskOperation": 0x00286101,
    "ApplicableFrameRange": 0x00286102,
    "MaskFrameNumbers": 0x00286110,
    "ContrastFrameAveraging": 0x00286112,
    "MaskSubPixelShift": 0x00286114,
    "TIDOffset": 0x00286120,
    "MaskOperationExplanation": 0x00286190,
    "DataPointRows": 0x00289001,
    "DataPointColumns": 0x00289002,
    "SignalDomainColumns": 0x00289003,
    "LargestMonochromePixelValue": 0x00289099,
    "DataRepresentation": 0x00289108,
    "PixelMeasuresSequence": 0x00289110,
    "FrameVOILUTSequence": 0x00289132,
    "PixelValueTransformationSequence": 0x00289145,
    "SignalDomainRows": 0x00289235,
    "DisplayFilterPercentage": 0x00289411,
    "FramePixelShiftSequence": 0x00289415,
    "SubtractionItemID": 0x00289416,
    "PixelIntensityRelationshipLUTSequence": 0x00289422,
    "FramePixelDataPropertiesSequence": 0x00289443,
    "GeometricalProperties": 0x00289444,
    "GeometricMaximumDistortion": 0x00289445,
    "ImageProcessingApplied": 0x00289446,
    "MaskSelectionMode": 0x00289454,
    "LUTFunction": 0x00289475,
    "StudyGroupLength": 0x00320000,
    "StudyStatusID": 0x0032000A,
    "StudyPriorityID": 0x0032000C,
    "StudyIDIssuer": 0x00320012,
    "StudyVerifiedDate": 0x00320032,
    "StudyVerifiedTime": 0x00320033,
    "StudyReadDate": 0x00320034,
    "StudyReadTime": 0x00320035,
    "ScheduledStudyStartDate": 0x00321000,
    "ScheduledStudyStartTime": 0x00321001,
    "ScheduledStudyStopDate": 0x00321010,
    "ScheduledStudyStopTime": 0x00321011,
    "ScheduledStudyLocation": 0x00321020,
    "ScheduledStudyLocationAETitles": 0x00321021,
    "ReasonForStudy": 0x00321030,
    "RequestingPhysicianIdentificationSequence": 0x00321031,
    "RequestingPhysician": 0x00321032,
    "RequestingService": 0x00321033,
    "StudyArrivalDate": 0x00321040,
    "StudyArrivalTime": 0x00321041,
    "StudyCompletionDate": 0x00321050,
    "StudyCompletionTime": 0x00321051,
    "StudyComponentStatusID": 0x00321055,
    "RequestedProcedureDescription": 0x00321060,
    "RequestedProcedureCodeSequence": 0x00321064,
    "RequestedContrastAgent": 0x00321070,
    "StudyComments": 0x00324000,
    "VisitGroupLength": 0x00380000,
    "ReferencedPatientAliasSequence": 0x00380004,
    "VisitStatusID": 0x00380008,
    "AdmissionID": 0x00380010,
    "IssuerOfAdmissionID": 0x00380011,
    "RouteOfAdmissions": 0x00380016,
    "ScheduledAdmissionDate": 0x0038001A,
    "ScheduledAdmissionTime": 0x0038001B,
    "ScheduledDischargeDate": 0x0038001C,
    "ScheduledDischargeTime": 0x0038001D,
    "ScheduledPatientInstitutionResidence": 0x0038001E,
    "AdmittingDate": 0x00380020,
    "AdmittingTime": 0x00380021,
    "DischargeDate": 0x00380030,
    "DischargeTime": 0x00380032,
    "DischargeDiagnosisDescription": 0x00380040,
    "DischargeDiagnosisCodeSequence": 0x00380044,
    "SpecialNeeds": 0x00380050,
    "PertinentDocumentsSequence": 0x00380100,
    "CurrentPatientLocation": 0x00380300,
    "PatientsInstitutionResidence": 0x00380400,
    "PatientState": 0x00380500,
    "PatientClinicalTrialParticipationSequence": 0x00380502,
    "VisitComments": 0x00384000,
    "WaveformGroupLength": 0x003A0000,
    "WaveformOriginality": 0x003A0004,
    "NumberOfWaveformChannels": 0x003A0005,
    "NumberOfWaveformSamples": 0x003A0010,
    "SamplingFrequency": 0x003A001A,
    "MultiplexGroupLabel": 0x003A0020,
    "ChannelDefinitionSequence": 0x003A0200,
    "WaveformChannelNumber": 0x003A0202,
    "ChannelLabel": 0x003A0203,
    "ChannelStatus": 0x003A0205,
    "ChannelSourceSequence": 0x003A0208,
    "ChannelSourceModifiersSequence": 0x003A0209,
    "SourceWaveformSequence": 0x003A020A,
    "ChannelDerivationDescription": 0x003A020C,
    "ChannelSensitivity": 0x003A0210,
    "ChannelSensitivityUnitsSequence": 0x003A0211,
    "ChannelSensitivityCorrectionFactor": 0x003A0212,
    "ChannelBaseline": 0x003A0213,
    "ChannelTimeSkew": 0x003A0214,
    "ChannelSampleSkew": 0x003A0215,
    "ChannelOffset": 0x003A0218,
    "WaveformBitsStored": 0x003A021A,
    "FilterLowFrequency": 0x003A0220,
    "FilterHighFrequency": 0x003A0221,
    "NotchFilterFrequency": 0x003A0222,
    "NotchFilterBandwidth": 0x003A0223,
    "MultiplexedAudioChannelsDescriptionCodeSequence": 0x003A0300,
    "ChannelIdentificationCode": 0x003A0301,
    "ChannelMode": 0x003A0302,
    "ModalityWorklistGroupLength": 0x00400000,
    "ScheduledStationAETitle": 0x00400001,
    "ScheduledProcedureStepStartDate": 0x00400002,
    "ScheduledProcedureStepStartTime": 0x00400003,
    "ScheduledProcedureStepEndDate": 0x00400004,
    "ScheduledProcedureStepEndTime": 0x00400005,
    "ScheduledPerformingPhysiciansName": 0x00400006,
    "ScheduledProcedureStepDescription": 0x00400007,
    "ScheduledProtocolCodeSequence": 0x00400008,
    "ScheduledProcedureStepID": 0x00400009,
    "StageCodeSequence": 0x0040000A,
    "ScheduledPerformingPhysicianIdentificationSequence": 0x0040000B,
    "ScheduledStationName": 0x00400010,
    "ScheduledProcedureStepLocation": 0x00400011,
    "PreMedication": 0x00400012,
    "ScheduledProcedureStepStatus": 0x00400020,
    "ScheduledProcedureStepSequence": 0x00400100,
    "ReferencedNonImageCompositeSOPInstanceSequence": 0x00400220,
    "PerformedStationAETitle": 0x00400241,
    "PerformedStationName": 0x00400242,
    "PerformedLocation": 0x00400243,
    "PerformedProcedureStepStartDate": 0x00400244,
    "PerformedProcedureStepStartTime": 0x00400245,
    "PerformedProcedureStepEndDate": 0x00400250,
    "PerformedProcedureStepEndTime": 0x00400251,
    "PerformedProcedureStepStatus": 0x00400252,
    "PerformedProcedureStepID": 0x00400253,
    "PerformedProcedureStepDescription": 0x00400254,
    "PerformedProcedureTypeDescription": 0x00400255,
    "PerformedProtocolCodeSequence": 0x00400260,
    "ScheduledStepAttributesSequence": 0x00400270,
    "RequestAttributesSequence": 0x00400275,
    "CommentsOnThePerformedProcedureStep": 0x00400280,
    "PerformedProcedureStepDiscontinuationReasonCodeSequence": 0x00400281,
    "QuantitySequence": 0x00400293,
    "Quantity": 0x00400294,
    "MeasuringUnitsSequence": 0x00400295,
    "BillingItemSequence": 0x00400296,
    "TotalTimeOfFluoroscopy": 0x00400300,
    "TotalNumberOfExposures": 0x00400301,
    "EntranceDose": 0x00400302,
    "ExposedArea": 0x00400303,
    "DistanceSourceToEntrance": 0x00400306,
    "ExposureDoseSequence": 0x0040030E,
    "CommentsOnRadiationDose": 0x00400310,
    "XRayOutput": 0x00400312,
    "HalfValueLayer": 0x00400314,
    "OrganDose": 0x00400316,
    "OrganExposed": 0x00400318,
    "BillingProcedureStepSequence": 0x00400320,
    "FilmConsumptionSequence": 0x00400321,
    "BillingSuppliesAndDevicesSequence": 0x00400324,
    "PerformedSeriesSequence": 0x00400340,
    "CommentsOnTheScheduledProcedureStep": 0x00400400,
    "ProtocolContextSequence": 0x00400440,
    "ContentItemModifierSequence": 0x00400441,
    "SpecimenAccessionNumber": 0x0040050A,
    "SpecimenSequence": 0x00400550,
    "SpecimenIdentifier": 0x00400551,
    "AcquisitionContextSequence": 0x00400555,
    "AcquisitionContextDescription": 0x00400556,
    "SpecimenTypeCodeSequence": 0x0040059A,
    "SlideIdentifier": 0x004006FA,
    "ImageCenterPointCoordinatesSequence": 0x0040071A,
    "XOffsetInSlideCoordinateSystem": 0x0040072A,
    "YOffsetInSlideCoordinateSystem": 0x0040073A,
    "ZOffsetInSlideCoordinateSystem": 0x0040074A,
    "PixelSpacingSequence": 0x004008D8,
    "CoordinateSystemAxisCodeSequence": 0x004008DA,
    "MeasurementUnitsCodeSequence": 0x004008EA,
    "RequestedProcedureID": 0x00401001,
    "ReasonForTheRequestedProcedure": 0x00401002,
    "RequestedProcedurePriority": 0x00401003,
    "PatientTransportArrangements": 0x00401004,
    "RequestedProcedureLocation": 0x00401005,
    "PlacerOrderNumberProcedure": 0x00401006,
    "FillerOrderNumberProcedure": 0x00401007,
    "ConfidentialityCode": 0x00401008,
    "ReportingPriority": 0x00401009,
    "ReasonForRequestedProcedureCodeSequence": 0x0040100A,
    "NamesOfIntendedRecipientsOfResults": 0x00401010,
    "IntendedRecipientsOfResultsIdentificationSequence": 0x00401011,
    "PersonIdentificationCodeSequence": 0x00401101,
    "PersonsAddress": 0x00401102,
    "PersonsTelephoneNumbers": 0x00401103,
    "RequestedProcedureComments": 0x00401400,
    "IssueDateOfImagingServiceRequest": 0x00402004,
    "IssueTimeOfImagingServiceRequest": 0x00402005,
    "OrderEnteredBy": 0x00402008,
    "OrderEnterersLocation": 0x00402009,
    "OrderCallbackPhoneNumber": 0x00402010,
    "PlacerOrderNumberImagingServiceRequest": 0x00402016,
    "FillerOrderNumberImagingServiceRequest": 0x00402017,
    "ImagingServiceRequestComments": 0x00402400,
    "ConfidentialityConstraintOnPatientDataDescription": 0x00403001,
    "GeneralPurposeScheduledProcedureStepStatus": 0x00404001,
    "GeneralPurposePerformedProcedureStepStatus": 0x00404002,
    "GeneralPurposeScheduledProcedureStepPriority": 0x00404003,
    "ScheduledProcessingApplicationsCodeSequence": 0x00404004,
    "ScheduledProcedureStepStartDateAndTime": 0x00404005,
    "MultipleCopiesFlag": 0x00404006,
    "PerformedProcessingApplicationsCodeSequence": 0x00404007,
    "HumanPerformerCodeSequence": 0x00404009,
    "ScheduledProcedureStepModificationDateAndTime": 0x00404010,
    "ExpectedCompletionDateAndTime": 0x00404011,
    "ResultingGeneralPurposePerformedProcedureStepsSequence": 0x00404015,
    "ReferencedGeneralPurposeScheduledProcedureStepSequence": 0x00404016,
    "ScheduledWorkitemCodeSequence": 0x00404018,
    "PerformedWorkitemCodeSequence": 0x00404019,
    "InputAvailabilityFlag": 0x00404020,
    "InputInformationSequence": 0x00404021,
    "RelevantInformationSequence": 0x00404022,
    "ReferencedGeneralPurposeScheduledProcedureStepTransactionUID": 0x00404023,
    "ScheduledStationNameCodeSequence": 0x00404025,
    "ScheduledStationClassCodeSequence": 0x00404026,
    "ScheduledStationGeographicLocationCodeSequence": 0x00404027,
    "PerformedStationNameCodeSequence": 0x00404028,
    "PerformedStationClassCodeSequence": 0x00404029,
    "PerformedStationGeographicLocationCodeSequence": 0x00404030,
    "RequestedSubsequentWorkitemCodeSequence": 0x00404031,
    "NonDICOMOutputCodeSequence": 0x00404032,
    "OutputInformationSequence": 0x00404033,
    "ScheduledHumanPerformersSequence": 0x00404034,
    "ActualHumanPerformersSequence": 0x00404035,
    "HumanPerformersOrganization": 0x00404036,
    "HumanPerformersName": 0x00404037,
    "EntranceDoseInmGy": 0x00408302,
    "ReferencedImageRealWorldValueMappingSequence": 0x00409094,
    "RealWorldValueMappingSequence": 0x00409096,
    "PixelValueMappingCodeSequence": 0x00409098,
    "LUTLabel": 0x00409210,
    "RealWorldValueLastValueMapped": 0x00409211,
    "RealWorldValueLUTData": 0x00409212,
    "RealWorldValueFirstValueMapped": 0x00409216,
    "RealWorldValueIntercept": 0x00409224,
    "RealWorldValueSlope": 0x00409225,
    "RelationshipType": 0x0040A010,
    "VerifyingOrganization": 0x0040A027,
    "VerificationDateTime": 0x0040A030,
    "ObservationDateTime": 0x0040A032,
    "ValueType": 0x0040A040,
    "ConceptNameCodeSequence": 0x0040A043,
    "ContinuityOfContent": 0x0040A050,
    "VerifyingObserverSequence": 0x0040A073,
    "VerifyingObserverName": 0x0040A075,
    "AuthorObserverSequence": 0x0040A078,
    "ParticipantSequence": 0x0040A07A,
    "CustodialOrganizationSequence": 0x0040A07C,
    "ParticipationType": 0x0040A080,
    "ParticipationDatetime": 0x0040A082,
    "ObserverType": 0x0040A084,
    "VerifyingObserverIdentificationCodeSequence": 0x0040A088,
    "EquivalentCDADocumentSequence": 0x0040A090,
    "ReferencedWaveformChannels": 0x0040A0B0,
    "DateTime": 0x0040A120,
    "Date": 0x0040A121,
    "Time": 0x0040A122,
    "PersonName": 0x0040A123,
    "UID": 0x0040A124,
    "TemporalRangeType": 0x0040A130,
    "ReferencedSamplePositions": 0x0040A132,
    "ReferencedFrameNumbers": 0x0040A136,
    "ReferencedTimeOffsets": 0x0040A138,
    "ReferencedDatetime": 0x0040A13A,
    "TextValue": 0x0040A160,
    "ConceptCodeSequence": 0x0040A168,
    "PurposeOfReferenceCodeSequence": 0x0040A170,
    "AnnotationGroupNumber": 0x0040A180,
    "ModifierCodeSequence": 0x0040A195,
    "MeasuredValueSequence": 0x0040A300,
    "NumericValueQualifierCodeSequence": 0x0040A301,
    "NumericValue": 0x0040A30A,
    "PredecessorDocumentsSequence": 0x0040A360,
    "ReferencedRequestSequence": 0x0040A370,
    "PerformedProcedureCodeSequence": 0x0040A372,
    "CurrentRequestedProcedureEvidenceSequence": 0x0040A375,
    "PertinentOtherEvidenceSequence": 0x0040A385,
    "HL7StructuredDocumentReferenceSequence": 0x0040A390,
    "CompletionFlag": 0x0040A491,
    "CompletionFlagDescription": 0x0040A492,
    "VerificationFlag": 0x0040A493,
    "ContentTemplateSequence": 0x0040A504,
    "IdenticalDocumentsSequence": 0x0040A525,
    "ContentSequence": 0x0040A730,
    "AnnotationSequence": 0x0040B020,
    "TemplateIdentifier": 0x0040DB00,
    "ReferencedContentItemIdentifier": 0x0040DB73,
    "HL7InstanceIdentifier": 0x0040E001,
    "HL7DocumentEffectiveTime": 0x0040E004,
    "HL7DocumentTypeCodeSequence": 0x0040E006,
    "RetrieveURI": 0x0040E010,
    "EncapsulatedDocumentGroupLength": 0x00420000,
    "DocumentTitle": 0x00420010,
    "EncapsulatedDocument": 0x00420011,
    "MIMETypeOfEncapsulatedDocument": 0x00420012,
    "SourceInstanceSequence": 0x00420013,
    "XRayAngioDeviceGroupLength": 0x00500000,
    "CalibrationImage": 0x00500004,
    "DeviceSequence": 0x00500010,
    "DeviceLength": 0x00500014,
    "DeviceDiameter": 0x00500016,
    "DeviceDiameterUnits": 0x00500017,
    "DeviceVolume": 0x00500018,
    "InterMarkerDistance": 0x00500019,
    "DeviceDescription": 0x00500020,
    "NuclearMedicineGroupLength": 0x00540000,
    "EnergyWindowVector": 0x00540010,
    "NumberOfEnergyWindows": 0x00540011,
    "EnergyWindowInformationSequence": 0x00540012,
    "EnergyWindowRangeSequence": 0x00540013,
    "EnergyWindowLowerLimit": 0x00540014,
    "EnergyWindowUpperLimit": 0x00540015,
    "RadiopharmaceuticalInformationSequence": 0x00540016,
    "ResidualSyringeCounts": 0x00540017,
    "EnergyWindowName": 0x00540018,
    "DetectorVector": 0x00540020,
    "NumberOfDetectors": 0x00540021,
    "DetectorInformationSequence": 0x00540022,
    "PhaseVector": 0x00540030,
    "NumberOfPhases": 0x00540031,
    "PhaseInformationSequence": 0x00540032,
    "NumberOfFramesInPhase": 0x00540033,
    "PhaseDelay": 0x00540036,
    "PauseBetweenFrames": 0x00540038,
    "PhaseDescription": 0x00540039,
    "RotationVector": 0x00540050,
    "NumberOfRotations": 0x00540051,
    "RotationInformationSequence": 0x00540052,
    "NumberOfFramesInRotation": 0x00540053,
    "RRIntervalVector": 0x00540060,
    "NumberOfRRIntervals": 0x00540061,
    "GatedInformationSequence": 0x00540062,
    "DataInformationSequence": 0x00540063,
    "TimeSlotVector": 0x00540070,
    "NumberOfTimeSlots": 0x00540071,
    "TimeSlotInformationSequence": 0x00540072,
    "TimeSlotTime": 0x00540073,
    "SliceVector": 0x00540080,
    "NumberOfSlices": 0x00540081,
    "AngularViewVector": 0x00540090,
    "TimeSliceVector": 0x00540100,
    "NumberOfTimeSlices": 0x00540101,
    "StartAngle": 0x00540200,
    "TypeOfDetectorMotion": 0x00540202,
    "TriggerVector": 0x00540210,
    "NumberOfTriggersInPhase": 0x00540211,
    "ViewCodeSequence": 0x00540220,
    "ViewModifierCodeSequence": 0x00540222,
    "RadionuclideCodeSequence": 0x00540300,
    "AdministrationRouteCodeSequence": 0x00540302,
    "RadiopharmaceuticalCodeSequence": 0x00540304,
    "CalibrationDataSequence": 0x00540306,
    "EnergyWindowNumber": 0x00540308,
    "ImageID": 0x00540400,
    "PatientOrientationCodeSequence": 0x00540410,
    "PatientOrientationModifierCodeSequence": 0x00540412,
    "PatientGantryRelationshipCodeSequence": 0x00540414,
    "SliceProgressionDirection": 0x00540500,
    "SeriesType": 0x00541000,
    "Units": 0x00541001,
    "CountsSource": 0x00541002,
    "ReprojectionMethod": 0x00541004,
    "RandomsCorrectionMethod": 0x00541100,
    "AttenuationCorrectionMethod": 0x00541101,
    "DecayCorrection": 0x00541102,
    "ReconstructionMethod": 0x00541103,
    "DetectorLinesOfResponseUsed": 0x00541104,
    "ScatterCorrectionMethod": 0x00541105,
    "AxialAcceptance": 0x00541200,
    "AxialMash": 0x00541201,
    "TransverseMash": 0x00541202,
    "DetectorElementSize": 0x00541203,
    "CoincidenceWindowWidth": 0x00541210,
    "SecondaryCountsType": 0x00541220,
    "FrameReferenceTime": 0x00541300,
    "PrimaryPromptsCountsAccumulated": 0x00541310,
    "SecondaryCountsAccumulated": 0x00541311,
    "SliceSensitivityFactor": 0x00541320,
    "DecayFactor": 0x00541321,
    "DoseCalibrationFactor": 0x00541322,
    "ScatterFractionFactor": 0x00541323,
    "DeadTimeFactor": 0x00541324,
    "ImageIndex": 0x00541330,
    "CountsIncluded": 0x00541400,
    "DeadTimeCorrectionFlag": 0x00541401,
    "HistogramGroupLength": 0x00600000,
    "HistogramSequence": 0x00603000,
    "HistogramNumberOfBins": 0x00603002,
    "HistogramFirstBinValue": 0x00603004,
    "HistogramLastBinValue": 0x00603006,
    "HistogramBinWidth": 0x00603008,
    "HistogramExplanation": 0x00603010,
    "HistogramData": 0x00603020,
    "PresentationStateGroupLength": 0x00700000,
    "GraphicAnnotationSequence": 0x00700001,
    "GraphicLayer": 0x00700002,
    "BoundingBoxAnnotationUnits": 0x00700003,
    "AnchorPointAnnotationUnits": 0x00700004,
    "GraphicAnnotationUnits": 0x00700005,
    "UnformattedTextValue": 0x00700006,
    "TextObjectSequence": 0x00700008,
    "GraphicObjectSequence": 0x00700009,
    "BoundingBoxTopLeftHandCorner": 0x00700010,
    "BoundingBoxBottomRightHandCorner": 0x00700011,
    "BoundingBoxTextHorizontalJustification": 0x00700012,
    "AnchorPoint": 0x00700014,
    "AnchorPointVisibility": 0x00700015,
    "GraphicDimensions": 0x00700020,
    "NumberOfGraphicPoints": 0x00700021,
    "GraphicData": 0x00700022,
    "GraphicType": 0x00700023,
    "GraphicFilled": 0x00700024,
    "ImageHorizontalFlip": 0x00700041,
    "ImageRotation": 0x00700042,
    "DisplayedAreaTopLeftHandCorner": 0x00700052,
    "DisplayedAreaBottomRightHandCorner": 0x00700053,
    "DisplayedAreaSelectionSequence": 0x0070005A,
    "GraphicLayerSequence": 0x00700060,
    "GraphicLayerOrder": 0x00700062,
    "GraphicLayerRecommendedDisplayGrayscaleValue": 0x00700066,
    "GraphicLayerRecommendedDisplayRGBValue": 0x00700067,
    "GraphicLayerDescription": 0x00700068,
    "ContentLabel": 0x00700080,
    "ContentDescription": 0x00700081,
    "PresentationCreationDate": 0x00700082,
    "PresentationCreationTime": 0x00700083,
    "ContentCreatorsName": 0x00700084,
    "ContentCreatorsIdentificationSequence": 0x00700086,
    "PresentationSizeMode": 0x00700100,
    "PresentationPixelSpacing": 0x00700101,
    "PresentationPixelAspectRatio": 0x00700102,
    "PresentationPixelMagnificationRatio": 0x00700103,
    "ShapeType": 0x00700306,
    "RegistrationSequence": 0x00700308,
    "MatrixRegistrationSequence": 0x00700309,
    "MatrixSequence": 0x0070030A,
    "FrameOfReferenceTransformationMatrixType": 0x0070030C,
    "RegistrationTypeCodeSequence": 0x0070030D,
    "FiducialDescription": 0x0070030F,
    "FiducialIdentifier": 0x00700310,
    "FiducialIdentifierCodeSequence": 0x00700311,
    "ContourUncertaintyRadius": 0x00700312,
    "UsedFiducialsSequence": 0x00700314,
    "GraphicCoordinatesDataSequence": 0x00700318,
    "FiducialUID": 0x0070031A,
    "FiducialSetSequence": 0x0070031C,
    "FiducialSequence": 0x0070031E,
    "GraphicLayerRecommendedDisplayCIELabValue": 0x00700401,
    "BlendingSequence": 0x00700402,
    "RelativeOpacity": 0x00700403,
    "ReferencedSpatialRegistrationSequence": 0x00700404,
    "BlendingPosition": 0x00700405,
    "HangingProtocolGroupLength": 0x00720000,
    "HangingProtocolName": 0x00720002,
    "HangingProtocolDescription": 0x00720004,
    "HangingProtocolLevel": 0x00720006,
    "HangingProtocolCreator": 0x00720008,
    "HangingProtocolCreationDatetime": 0x0072000A,
    "HangingProtocolDefinitionSequence": 0x0072000C,
    "HangingProtocolUserIdentificationCodeSequence": 0x0072000E,
    "HangingProtocolUserGroupName": 0x00720010,
    "SourceHangingProtocolSequence": 0x00720012,
    "NumberOfPriorsReferenced": 0x00720014,
    "ImageSetsSequence": 0x00720020,
    "ImageSetSelectorSequence": 0x00720022,
    "ImageSetSelectorUsageFlag": 0x00720024,
    "SelectorAttribute": 0x00720026,
    "SelectorValueNumber": 0x00720028,
    "TimeBasedImageSetsSequence": 0x00720030,
    "ImageSetNumber": 0x00720032,
    "ImageSetSelectorCategory": 0x00720034,
    "RelativeTime": 0x00720038,
    "RelativeTimeUnits": 0x0072003A,
    "AbstractPriorValue": 0x0072003C,
    "AbstractPriorCodeSequence": 0x0072003E,
    "ImageSetLabel": 0x00720040,
    "SelectorAttributeVR": 0x00720050,
    "SelectorSequencePointer": 0x00720052,
    "SelectorSequencePointerPrivateCreator": 0x00720054,
    "SelectorAttributePrivateCreator": 0x00720056,
    "SelectorATValue": 0x00720060,
    "SelectorCSValue": 0x00720062,
    "SelectorISValue": 0x00720064,
    "SelectorLOValue": 0x00720066,
    "SelectorLTValue": 0x00720068,
    "SelectorPNValue": 0x0072006A,
    "SelectorSHValue": 0x0072006C,
    "SelectorSTValue": 0x0072006E,
    "SelectorUTValue": 0x00720070,
    "SelectorDSValue": 0x00720072,
    "SelectorFDValue": 0x00720074,
    "SelectorFLValue": 0x00720076,
    "SelectorULValue": 0x00720078,
    "SelectorUSValue": 0x0072007A,
    "SelectorSLValue": 0x0072007C,
    "SelectorSSValue": 0x0072007E,
    "SelectorCodeSequenceValue": 0x00720080,
    "NumberOfScreens": 0x00720100,
    "NominalScreenDefinitionSequence": 0x00720102,
    "NumberOfVerticalPixels": 0x00720104,
    "NumberOfHorizontalPixels": 0x00720106,
    "DisplayEnvironmentSpatialPosition": 0x00720108,
    "ScreenMinimumGrayscaleBitDepth": 0x0072010A,
    "ScreenMinimumColorBitDepth": 0x0072010C,
    "ApplicationMaximumRepaintTime": 0x0072010E,
    "DisplaySetsSequence": 0x00720200,
    "DisplaySetNumber": 0x00720202,
    "DisplaySetPresentationGroup": 0x00720204,
    "DisplaySetPresentationGroupDescription": 0x00720206,
    "PartialDataDisplayHandling": 0x00720208,
    "SynchronizedScrollingSequence": 0x00720210,
    "DisplaySetScrollingGroup": 0x00720212,
    "NavigationIndicatorSequence": 0x00720214,
    "NavigationDisplaySet": 0x00720216,
    "ReferenceDisplaySets": 0x00720218,
    "ImageBoxesSequence": 0x00720300,
    "ImageBoxNumber": 0x00720302,
    "ImageBoxLayoutType": 0x00720304,
    "ImageBoxTileHorizontalDimension": 0x00720306,
    "ImageBoxTileVerticalDimension": 0x00720308,
    "ImageBoxScrollDirection": 0x00720310,
    "ImageBoxSmallScrollType": 0x00720312,
    "ImageBoxSmallScrollAmount": 0x00720314,
    "ImageBoxLargeScrollType": 0x00720316,
    "ImageBoxLargeScrollAmount": 0x00720318,
    "ImageBoxOverlapPriority": 0x00720320,
    "CineRelativeToRealTime": 0x00720330,
    "FilterOperationsSequence": 0x00720400,
    "FilterByCategory": 0x00720402,
    "FilterByAttributePresence": 0x00720404,
    "FilterByOperator": 0x00720406,
    "BlendingOperationType": 0x00720500,
    "ReformattingOperationType": 0x00720510,
    "ReformattingThickness": 0x00720512,
    "ReformattingInterval": 0x00720514,
    "ReformattingOperationInitialViewDirection": 0x00720516,
    "3DRenderingType": 0x00720520,
    "SortingOperationsSequence": 0x00720600,
    "SortByCategory": 0x00720602,
    "SortingDirection": 0x00720604,
    "DisplaySetPatientOrientation": 0x00720700,
    "VOIType": 0x00720702,
    "PseudoColorType": 0x00720704,
    "ShowGrayscaleInverted": 0x00720706,
    "ShowImageTrueSizeFlag": 0x00720710,
    "ShowGraphicAnnotationFlag": 0x00720712,
    "ShowPatientDemographicsFlag": 0x00720714,
    "ShowAcquisitionTechniquesFlag": 0x00720716,
    "StorageGroupLength": 0x00880000,
    "StorageMediaFileSetID": 0x00880130,
    "StorageMediaFileSetUID": 0x00880140,
    "IconImageSequence": 0x00880200,
    "TopicTitle": 0x00880904,
    "TopicSubject": 0x00880906,
    "TopicAuthor": 0x00880910,
    "TopicKeyWords": 0x00880912,
    "AuthorizationGroupLength": 0x01000000,
    "SOPInstanceStatus": 0x01000410,
    "SOPAuthorizationDateAndTime": 0x01000420,
    "SOPAuthorizationComment": 0x01000424,
    "AuthorizationEquipmentCertificationNumber": 0x01000426,
    "DigitalSignatureGroupLength": 0x04000000,
    "MACIDNumber": 0x04000005,
    "MACCalculationTransferSyntaxUID": 0x04000010,
    "MACAlgorithm": 0x04000015,
    "DataElementsSigned": 0x04000020,
    "DigitalSignatureUID": 0x04000100,
    "DigitalSignatureDateTime": 0x04000105,
    "CertificateType": 0x04000110,
    "CertificateOfSigner": 0x04000115,
    "Signature": 0x04000120,
    "CertifiedTimestampType": 0x04000305,
    "CertifiedTimestamp": 0x04000310,
    "DigitalSignaturePurposeCodeSequence": 0x04000401,
    "ReferencedDigitalSignatureSequence": 0x04000402,
    "ReferencedSOPInstanceMACSequence": 0x04000403,
    "MAC": 0x04000404,
    "EncryptedAttributesSequence": 0x04000500,
    "EncryptedContentTransferSyntaxUID": 0x04000510,
    "EncryptedContent": 0x04000520,
    "ModifiedAttributesSequence": 0x04000550,
    "FilmSessionGroupLength": 0x20000000,
    "NumberOfCopies": 0x20000010,
    "PrinterConfigurationSequence": 0x2000001E,
    "PrintPriority": 0x20000020,
    "MediumType": 0x20000030,
    "FilmDestination": 0x20000040,
    "FilmSessionLabel": 0x20000050,
    "MemoryAllocation": 0x20000060,
    "MaximumMemoryAllocation": 0x20000061,
    "ColorImagePrintingFlag": 0x20000062,
    "CollationFlag": 0x20000063,
    "AnnotationFlag": 0x20000065,
    "ImageOverlayFlag": 0x20000067,
    "PresentationLUTFlag": 0x20000069,
    "ImageBoxPresentationLUTFlag": 0x2000006A,
    "MemoryBitDepth": 0x200000A0,
    "PrintingBitDepth": 0x200000A1,
    "MediaInstalledSequence": 0x200000A2,
    "OtherMediaAvailableSequence": 0x200000A4,
    "SupportedImageDisplayFormatsSequence": 0x200000A8,
    "ReferencedFilmBoxSequence": 0x20000500,
    "ReferencedStoredPrintSequence": 0x20000510,
    "FilmBoxGroupLength": 0x20100000,
    "ImageDisplayFormat": 0x20100010,
    "AnnotationDisplayFormatID": 0x20100030,
    "FilmOrientation": 0x20100040,
    "FilmSizeID": 0x20100050,
    "PrinterResolutionID": 0x20100052,
    "DefaultPrinterResolutionID": 0x20100054,
    "MagnificationType": 0x20100060,
    "SmoothingType": 0x20100080,
    "DefaultMagnificationType": 0x201000A6,
    "OtherMagnificationTypesAvailable": 0x201000A7,
    "DefaultSmoothingType": 0x201000A8,
    "OtherSmoothingTypesAvailable": 0x201000A9,
    "BorderDensity": 0x20100100,
    "EmptyImageDensity": 0x20100110,
    "MinDensity": 0x20100120,
    "MaxDensity": 0x20100130,
    "Trim": 0x20100140,
    "ConfigurationInformation": 0x20100150,
    "ConfigurationInformationDescription": 0x20100152,
    "MaximumCollatedFilms": 0x20100154,
    "Illumination": 0x2010015E,
    "ReflectedAmbientLight": 0x20100160,
    "PrinterPixelSpacing": 0x20100376,
    "ReferencedFilmSessionSequence": 0x20100500,
    "ReferencedImageBoxSequence": 0x20100510,
    "ReferencedBasicAnnotationBoxSequence": 0x20100520,
    "ImageBoxGroupLength": 0x20200000,
    "ImagePosition": 0x20200010,
    "Polarity": 0x20200020,
    "RequestedImageSize": 0x20200030,
    "RequestedDecimateCropBehavior": 0x20200040,
    "RequestedResolutionID": 0x20200050,
    "RequestedImageSizeFlag": 0x202000A0,
    "DecimateCropResult": 0x202000A2,
    "BasicGrayscaleImageSequence": 0x20200110,
    "BasicColorImageSequence": 0x20200111,
    "AnnotationGroupLength": 0x20300000,
    "AnnotationPosition": 0x20300010,
    "TextString": 0x20300020,
    "OverlayBoxGroupLength": 0x20400000,
    "ReferencedOverlayPlaneSequence": 0x20400010,
    "ReferencedOverlayPlaneGroups": 0x20400011,
    "OverlayPixelDataSequence": 0x20400020,
    "OverlayMagnificationType": 0x20400060,
    "OverlaySmoothingType": 0x20400070,
    "OverlayOrImageMagnification": 0x20400072,
    "MagnifyToNumberOfColumns": 0x20400074,
    "OverlayForegroundDensity": 0x20400080,
    "OverlayBackgroundDensity": 0x20400082,
    "OverlayMode": 0x20400090,
    "ThresholdDensity": 0x20400100,
    "PresentationLUTGroupLength": 0x20500000,
    "PresentationLUTSequence": 0x20500010,
    "PresentationLUTShape": 0x20500020,
    "ReferencedPresentationLUTSequence": 0x20500500,
    "PrintJobGroupLength": 0x21000000,
    "PrintJobID": 0x21000010,
    "ExecutionStatus": 0x21000020,
    "ExecutionStatusInfo": 0x21000030,
    "CreationDate": 0x21000040,
    "CreationTime": 0x21000050,
    "Originator": 0x21000070,
    "DestinationAE": 0x21000140,
    "OwnerID": 0x21000160,
    "NumberOfFilms": 0x21000170,
    "ReferencedPrintJobSequence": 0x21000500,
    "PrinterGroupLength": 0x21100000,
    "PrinterStatus": 0x21100010,
    "PrinterStatusInfo": 0x21100020,
    "PrinterName": 0x21100030,
    "PrintQueueID": 0x21100099,
    "QueueGroupLength": 0x21200000,
    "QueueStatus": 0x21200010,
    "PrintJobDescriptionSequence": 0x21200050,
    "QueueReferencedPrintJobSequence": 0x21200070,
    "PrintContentGroupLength": 0x21300000,
    "PrintManagementCapabilitiesSequence": 0x21300010,
    "PrinterCharacteristicsSequence": 0x21300015,
    "FilmBoxContentSequence": 0x21300030,
    "ImageBoxContentSequence": 0x21300040,
    "AnnotationContentSequence": 0x21300050,
    "ImageOverlayBoxContentSequence": 0x21300060,
    "PresentationLUTContentSequence": 0x21300080,
    "ProposedStudySequence": 0x213000A0,
    "OriginalImageSequence": 0x213000C0,
    "MediaCreationGroupLength": 0x22000000,
    "LabelUsingInformationExtractedFromInstances": 0x22000001,
    "LabelText": 0x22000002,
    "LabelStyleSelection": 0x22000003,
    "MediaDisposition": 0x22000004,
    "BarcodeValue": 0x22000005,
    "BarcodeSymbology": 0x22000006,
    "AllowMediaSplitting": 0x22000007,
    "IncludeNon": 0x22000008,
    "IncludeDisplayApplication": 0x22000009,
    "PreserveCompositeInstancesAfterMediaCreation": 0x2200000A,
    "TotalNumberOfPiecesOfMediaCreated": 0x2200000B,
    "RequestedMediaApplicationProfile": 0x2200000C,
    "ReferencedStorageMediaSequence": 0x2200000D,
    "FailureAttributes": 0x2200000E,
    "AllowLossyCompression": 0x2200000F,
    "RequestPriority": 0x22000020,
    "RTImageGroupLength": 0x30020000,
    "RTImageLabel": 0x30020002,
    "RTImageName": 0x30020003,
    "RTImageDescription": 0x30020004,
    "ReportedValuesOrigin": 0x3002000A,
    "RTImagePlane": 0x3002000C,
    "XRayImageReceptorTranslation": 0x3002000D,
    "XRayImageReceptorAngle": 0x3002000E,
    "RTImageOrientation": 0x30020010,
    "ImagePlanePixelSpacing": 0x30020011,
    "RTImagePosition": 0x30020012,
    "RadiationMachineName": 0x30020020,
    "RadiationMachineSAD": 0x30020022,
    "RadiationMachineSSD": 0x30020024,
    "RTImageSID": 0x30020026,
    "SourceToReferenceObjectDistance": 0x30020028,
    "FractionNumber": 0x30020029,
    "ExposureSequence": 0x30020030,
    "MetersetExposure": 0x30020032,
    "DiaphragmPosition": 0x30020034,
    "FluenceeMapSequence": 0x30020040,
    "FluenceDataSource": 0x30020041,
    "FluenceDataScale": 0x30020042,
    "RTDoseGroupLength": 0x30040000,
    "DVHType": 0x30040001,
    "DoseUnits": 0x30040002,
    "DoseType": 0x30040004,
    "DoseComment": 0x30040006,
    "NormalizationPoint": 0x30040008,
    "DoseSummationType": 0x3004000A,
    "GridFrameOffsetVector": 0x3004000C,
    "DoseGridScaling": 0x3004000E,
    "RTDoseROISequence": 0x30040010,
    "DoseValue": 0x30040012,
    "TissueHeterogeneityCorrection": 0x30040014,
    "DVHNormalizationPoint": 0x30040040,
    "DVHNormalizationDoseValue": 0x30040042,
    "DVHSequence": 0x30040050,
    "DVHDoseScaling": 0x30040052,
    "DVHVolumeUnits": 0x30040054,
    "DVHNumberOfBins": 0x30040056,
    "DVHData": 0x30040058,
    "DVHReferencedROISequence": 0x30040060,
    "DVHROIContributionType": 0x30040062,
    "DVHMinimumDose": 0x30040070,
    "DVHMaximumDose": 0x30040072,
    "DVHMeanDose": 0x30040074,
    "RTStructureSetGroupLength": 0x30060000,
    "StructureSetLabel": 0x30060002,
    "StructureSetName": 0x30060004,
    "StructureSetDescription": 0x30060006,
    "StructureSetDate": 0x30060008,
    "StructureSetTime": 0x30060009,
    "ReferencedFrameOfReferenceSequence": 0x30060010,
    "RTReferencedStudySequence": 0x30060012,
    "RTReferencedSeriesSequence": 0x30060014,
    "ContourImageSequence": 0x30060016,
    "StructureSetROISequence": 0x30060020,
    "ROINumber": 0x30060022,
    "ReferencedFrameOfReferenceUID": 0x30060024,
    "ROIName": 0x30060026,
    "ROIDescription": 0x30060028,
    "ROIDisplayColor": 0x3006002A,
    "ROIVolume": 0x3006002C,
    "RTRelatedROISequence": 0x30060030,
    "RTROIRelationship": 0x30060033,
    "ROIGenerationAlgorithm": 0x30060036,
    "ROIGenerationDescription": 0x30060038,
    "ROIContourSequence": 0x30060039,
    "ContourSequence": 0x30060040,
    "ContourGeometricType": 0x30060042,
    "ContourSlabThickness": 0x30060044,
    "ContourOffsetVector": 0x30060045,
    "NumberOfContourPoints": 0x30060046,
    "ContourNumber": 0x30060048,
    "AttachedContours": 0x30060049,
    "ContourData": 0x30060050,
    "RTROIObservationsSequence": 0x30060080,
    "ObservationNumber": 0x30060082,
    "ReferencedROINumber": 0x30060084,
    "ROIObservationLabel": 0x30060085,
    "RTROIIdentificationCodeSequence": 0x30060086,
    "ROIObservationDescription": 0x30060088,
    "RelatedRTROIObservationsSequence": 0x300600A0,
    "RTROIInterpretedType": 0x300600A4,
    "ROIInterpreter": 0x300600A6,
    "ROIPhysicalPropertiesSequence": 0x300600B0,
    "ROIPhysicalProperty": 0x300600B2,
    "ROIPhysicalPropertyValue": 0x300600B4,
    "FrameOfReferenceRelationshipSequence": 0x300600C0,
    "RelatedFrameOfReferenceUID": 0x300600C2,
    "FrameOfReferenceTransformationType": 0x300600C4,
    "FrameOfReferenceTransformationMatrix": 0x300600C6,
    "FrameOfReferenceTransformationComment": 0x300600C8,
    "RTTreatmentGroupLength": 0x30080000,
    "MeasuredDoseReferenceSequence": 0x30080010,
    "MeasuredDoseDescription": 0x30080012,
    "MeasuredDoseType": 0x30080014,
    "MeasuredDoseValue": 0x30080016,
    "TreatmentSessionBeamSequence": 0x30080020,
    "CurrentFractionNumber": 0x30080022,
    "TreatmentControlPointDate": 0x30080024,
    "TreatmentControlPointTime": 0x30080025,
    "TreatmentTerminationStatus": 0x3008002A,
    "TreatmentTerminationCode": 0x3008002B,
    "TreatmentVerificationStatus": 0x3008002C,
    "ReferencedTreatmentRecordSequence": 0x30080030,
    "SpecifiedPrimaryMeterset": 0x30080032,
    "SpecifiedSecondaryMeterset": 0x30080033,
    "DeliveredPrimaryMeterset": 0x30080036,
    "DeliveredSecondaryMeterset": 0x30080037,
    "SpecifiedTreatmentTime": 0x3008003A,
    "DeliveredTreatmentTime": 0x3008003B,
    "ControlPointDeliverySequence": 0x30080040,
    "SpecifiedMeterset": 0x30080042,
    "DeliveredMeterset": 0x30080044,
    "DoseRateDelivered": 0x30080048,
    "TreatmentSummaryCalculatedDoseReferenceSequence": 0x30080050,
    "CumulativeDoseToDoseReference": 0x30080052,
    "FirstTreatmentDate": 0x30080054,
    "MostRecentTreatmentDate": 0x30080056,
    "NumberOfFractionsDelivered": 0x3008005A,
    "OverrideSequence": 0x30080060,
    "OverrideParameterPointer": 0x30080062,
    "MeasuredDoseReferenceNumber": 0x30080064,
    "OverrideReason": 0x30080066,
    "CalculatedDoseReferenceSequence": 0x30080070,
    "CalculatedDoseReferenceNumber": 0x30080072,
    "CalculatedDoseReferenceDescription": 0x30080074,
    "CalculatedDoseReferenceDoseValue": 0x30080076,
    "StartMeterset": 0x30080078,
    "EndMeterset": 0x3008007A,
    "ReferencedMeasuredDoseReferenceSequence": 0x30080080,
    "ReferencedMeasuredDoseReferenceNumber": 0x30080082,
    "ReferencedCalculatedDoseReferenceSequence": 0x30080090,
    "ReferencedCalculatedDoseReferenceNumber": 0x30080092,
    "BeamLimitingDeviceLeafPairsSequence": 0x300800A0,
    "RecordedWedgeSequence": 0x300800B0,
    "RecordedCompensatorSequence": 0x300800C0,
    "RecordedBlockSequence": 0x300800D0,
    "TreatmentSummaryMeasuredDoseReferenceSequence": 0x300800E0,
    "RecordedSourceSequence": 0x30080100,
    "SourceSerialNumber": 0x30080105,
    "TreatmentSessionApplicationSetupSequence": 0x30080110,
    "ApplicationSetupCheck": 0x30080116,
    "RecordedBrachyAccessoryDeviceSequence": 0x30080120,
    "ReferencedBrachyAccessoryDeviceNumber": 0x30080122,
    "RecordedChannelSequence": 0x30080130,
    "SpecifiedChannelTotalTime": 0x30080132,
    "DeliveredChannelTotalTime": 0x30080134,
    "SpecifiedNumberOfPulses": 0x30080136,
    "DeliveredNumberOfPulses": 0x30080138,
    "SpecifiedPulseRepetitionInterval": 0x3008013A,
    "DeliveredPulseRepetitionInterval": 0x3008013C,
    "RecordedSourceApplicatorSequence": 0x30080140,
    "ReferencedSourceApplicatorNumber": 0x30080142,
    "RecordedChannelShieldSequence": 0x30080150,
    "ReferencedChannelShieldNumber": 0x30080152,
    "BrachyControlPointDeliveredSequence": 0x30080160,
    "SafePositionExitDate": 0x30080162,
    "SafePositionExitTime": 0x30080164,
    "SafePositionReturnDate": 0x30080166,
    "SafePositionReturnTime": 0x30080168,
    "CurrentTreatmentStatus": 0x30080200,
    "TreatmentStatusComment": 0x30080202,
    "FractionGroupSummarySequence": 0x30080220,
    "ReferencedFractionNumber": 0x30080223,
    "FractionGroupType": 0x30080224,
    "BeamStopperPosition": 0x30080230,
    "FractionStatusSummarySequence": 0x30080240,
    "TreatmentDate": 0x30080250,
    "TreatmentTime": 0x30080251,
    "RTPlanGroupLength": 0x300A0000,
    "RTPlanLabel": 0x300A0002,
    "RTPlanName": 0x300A0003,
    "RTPlanDescription": 0x300A0004,
    "RTPlanDate": 0x300A0006,
    "RTPlanTime": 0x300A0007,
    "TreatmentProtocols": 0x300A0009,
    "PlanIntent": 0x300A000A,
    "TreatmentSites": 0x300A000B,
    "RTPlanGeometry": 0x300A000C,
    "PrescriptionDescription": 0x300A000E,
    "DoseReferenceSequence": 0x300A0010,
    "DoseReferenceNumber": 0x300A0012,
    "DoseReferenceUID": 0x300A0013,
    "DoseReferenceStructureType": 0x300A0014,
    "NominalBeamEnergyUnit": 0x300A0015,
    "DoseReferenceDescription": 0x300A0016,
    "DoseReferencePointCoordinates": 0x300A0018,
    "NominalPriorDose": 0x300A001A,
    "DoseReferenceType": 0x300A0020,
    "ConstraintWeight": 0x300A0021,
    "DeliveryWarningDose": 0x300A0022,
    "DeliveryMaximumDose": 0x300A0023,
    "TargetMinimumDose": 0x300A0025,
    "TargetPrescriptionDose": 0x300A0026,
    "TargetMaximumDose": 0x300A0027,
    "TargetUnderdoseVolumeFraction": 0x300A0028,
    "OrganAtRiskFullVolumeDose": 0x300A002A,
    "OrganAtRiskLimitDose": 0x300A002B,
    "OrganAtRiskMaximumDose": 0x300A002C,
    "OrganAtRiskOverdoseVolumeFraction": 0x300A002D,
    "ToleranceTableSequence": 0x300A0040,
    "ToleranceTableNumber": 0x300A0042,
    "ToleranceTableLabel": 0x300A0043,
    "GantryAngleTolerance": 0x300A0044,
    "BeamLimitingDeviceAngleTolerance": 0x300A0046,
    "BeamLimitingDeviceToleranceSequence": 0x300A0048,
    "BeamLimitingDevicePositionTolerance": 0x300A004A,
    "PatientSupportAngleTolerance": 0x300A004C,
    "TableTopEccentricAngleTolerance": 0x300A004E,
    "TableTopVerticalPositionTolerance": 0x300A0051,
    "TableTopLongitudinalPositionTolerance": 0x300A0052,
    "TableTopLateralPositionTolerance": 0x300A0053,
    "RTPlanRelationship": 0x300A0055,
    "FractionGroupSequence": 0x300A0070,
    "FractionGroupNumber": 0x300A0071,
    "FractionGroupDescription": 0x300A0072,
    "NumberOfFractionsPlanned": 0x300A0078,
    "NumberOfFractionPatternDigitsPerDay": 0x300A0079,
    "RepeatFractionCycleLength": 0x300A007A,
    "FractionPattern": 0x300A007B,
    "NumberOfBeams": 0x300A0080,
    "BeamDoseSpecificationPoint": 0x300A0082,
    "BeamDose": 0x300A0084,
    "BeamMeterset": 0x300A0086,
    "NumberOfBrachyApplicationSetups": 0x300A00A0,
    "BrachyApplicationSetupDoseSpecificationPoint": 0x300A00A2,
    "BrachyApplicationSetupDose": 0x300A00A4,
    "BeamSequence": 0x300A00B0,
    "TreatmentMachineName": 0x300A00B2,
    "PrimaryDosimeterUnit": 0x300A00B3,
    "SourceAxisDistance": 0x300A00B4,
    "BeamLimitingDeviceSequence": 0x300A00B6,
    "RTBeamLimitingDeviceType": 0x300A00B8,
    "SourceToBeamLimitingDeviceDistance": 0x300A00BA,
    "NumberOfLeafJawPairs": 0x300A00BC,
    "LeafPositionBoundaries": 0x300A00BE,
    "BeamNumber": 0x300A00C0,
    "BeamName": 0x300A00C2,
    "BeamDescription": 0x300A00C3,
    "BeamType": 0x300A00C4,
    "RadiationType": 0x300A00C6,
    "HighDoseTechniqueType": 0x300A00C7,
    "ReferenceImageNumber": 0x300A00C8,
    "PlannedVerificationImageSequence": 0x300A00CA,
    "ImagingDeviceSpecificAcquisitionParameters": 0x300A00CC,
    "TreatmentDeliveryType": 0x300A00CE,
    "NumberOfWedges": 0x300A00D0,
    "WedgeSequence": 0x300A00D1,
    "WedgeNumber": 0x300A00D2,
    "WedgeType": 0x300A00D3,
    "WedgeID": 0x300A00D4,
    "WedgeAngle": 0x300A00D5,
    "WedgeFactor": 0x300A00D6,
    "WedgeOrientation": 0x300A00D8,
    "SourceToWedgeTrayDistance": 0x300A00DA,
    "BolusID": 0x300A00DC,
    "BolusDescription": 0x300A00DD,
    "NumberOfCompensators": 0x300A00E0,
    "MaterialID": 0x300A00E1,
    "TotalCompensatorTrayFactor": 0x300A00E2,
    "CompensatorSequence": 0x300A00E3,
    "CompensatorNumber": 0x300A00E4,
    "CompensatorID": 0x300A00E5,
    "SourceToCompensatorTrayDistance": 0x300A00E6,
    "CompensatorRows": 0x300A00E7,
    "CompensatorColumns": 0x300A00E8,
    "CompensatorPixelSpacing": 0x300A00E9,
    "CompensatorPosition": 0x300A00EA,
    "CompensatorTransmissionData": 0x300A00EB,
    "CompensatorThicknessData": 0x300A00EC,
    "NumberOfBoli": 0x300A00ED,
    "CompensatorType": 0x300A00EE,
    "NumberOfBlocks": 0x300A00F0,
    "TotalBlockTrayFactor": 0x300A00F2,
    "BlockSequence": 0x300A00F4,
    "BlockTrayID": 0x300A00F5,
    "SourceToBlockTrayDistance": 0x300A00F6,
    "BlockType": 0x300A00F8,
    "BlockDivergence": 0x300A00FA,
    "BlockMountingPosition": 0x300A00FB,
    "BlockNumber": 0x300A00FC,
    "BlockName": 0x300A00FE,
    "BlockThickness": 0x300A0100,
    "BlockTransmission": 0x300A0102,
    "BlockNumberOfPoints": 0x300A0104,
    "BlockData": 0x300A0106,
    "ApplicatorSequence": 0x300A0107,
    "ApplicatorID": 0x300A0108,
    "ApplicatorType": 0x300A0109,
    "ApplicatorDescription": 0x300A010A,
    "CumulativeDoseReferenceCoefficient": 0x300A010C,
    "FinalCumulativeMetersetWeight": 0x300A010E,
    "NumberOfControlPoints": 0x300A0110,
    "ControlPointSequence": 0x300A0111,
    "ControlPointIndex": 0x300A0112,
    "NominalBeamEnergy": 0x300A0114,
    "DoseRateSet": 0x300A0115,
    "WedgePositionSequence": 0x300A0116,
    "WedgePosition": 0x300A0118,
    "BeamLimitingDevicePositionSequence": 0x300A011A,
    "LeafJawPositions": 0x300A011C,
    "GantryAngle": 0x300A011E,
    "GantryRotationDirection": 0x300A011F,
    "BeamLimitingDeviceAngle": 0x300A0120,
    "BeamLimitingDeviceRotationDirection": 0x300A0121,
    "PatientSupportAngle": 0x300A0122,
    "PatientSupportRotationDirection": 0x300A0123,
    "TableTopEccentricAxisDistance": 0x300A0124,
    "TableTopEccentricAngle": 0x300A0125,
    "TableTopEccentricRotationDirection": 0x300A0126,
    "TableTopVerticalPosition": 0x300A0128,
    "TableTopLongitudinalPosition": 0x300A0129,
    "TableTopLateralPosition": 0x300A012A,
    "IsocenterPosition": 0x300A012C,
    "SurfaceEntryPoint": 0x300A012E,
    "SourceToSurfaceDistance": 0x300A0130,
    "CumulativeMetersetWeight": 0x300A0134,
    "PatientSetupSequence": 0x300A0180,
    "PatientSetupNumber": 0x300A0182,
    "PatientSetupLabel": 0x300A0183,
    "PatientAdditionalPosition": 0x300A0184,
    "FixationDeviceSequence": 0x300A0190,
    "FixationDeviceType": 0x300A0192,
    "FixationDeviceLabel": 0x300A0194,
    "FixationDeviceDescription": 0x300A0196,
    "FixationDevicePosition": 0x300A0198,
    "FixationDevicePitchAngle": 0x300A0199,
    "FixationDeviceRollAngle": 0x300A019A,
    "ShieldingDeviceSequence": 0x300A01A0,
    "ShieldingDeviceType": 0x300A01A2,
    "ShieldingDeviceLabel": 0x300A01A4,
    "ShieldingDeviceDescription": 0x300A01A6,
    "ShieldingDevicePosition": 0x300A01A8,
    "SetupTechnique": 0x300A01B0,
    "SetupTechniqueDescription": 0x300A01B2,
    "SetupDeviceSequence": 0x300A01B4,
    "SetupDeviceType": 0x300A01B6,
    "SetupDeviceLabel": 0x300A01B8,
    "SetupDeviceDescription": 0x300A01BA,
    "SetupDeviceParameter": 0x300A01BC,
    "SetupReferenceDescription": 0x300A01D0,
    "TableTopVerticalSetupDisplacement": 0x300A01D2,
    "TableTopLongitudinalSetupDisplacement": 0x300A01D4,
    "TableTopLateralSetupDisplacement": 0x300A01D6,
    "BrachyTreatmentTechnique": 0x300A0200,
    "BrachyTreatmentType": 0x300A0202,
    "TreatmentMachineSequence": 0x300A0206,
    "SourceSequence": 0x300A0210,
    "SourceNumber": 0x300A0212,
    "SourceType": 0x300A0214,
    "SourceManufacturer": 0x300A0216,
    "ActiveSourceDiameter": 0x300A0218,
    "ActiveSourceLength": 0x300A021A,
    "SourceEncapsulationNominalThickness": 0x300A0222,
    "SourceEncapsulationNominalTransmission": 0x300A0224,
    "SourceIsotopeName": 0x300A0226,
    "SourceIsotopeHalfLife": 0x300A0228,
    "ReferenceAirKermaRate": 0x300A022A,
    "AirKermaRateReferenceDate": 0x300A022C,
    "AirKermaRateReferenceTime": 0x300A022E,
    "ApplicationSetupSequence": 0x300A0230,
    "ApplicationSetupType": 0x300A0232,
    "ApplicationSetupNumber": 0x300A0234,
    "ApplicationSetupName": 0x300A0236,
    "ApplicationSetupManufacturer": 0x300A0238,
    "TemplateNumber": 0x300A0240,
    "TemplateType": 0x300A0242,
    "TemplateName": 0x300A0244,
    "TotalReferenceAirKerma": 0x300A0250,
    "BrachyAccessoryDeviceSequence": 0x300A0260,
    "BrachyAccessoryDeviceNumber": 0x300A0262,
    "BrachyAccessoryDeviceID": 0x300A0263,
    "BrachyAccessoryDeviceType": 0x300A0264,
    "BrachyAccessoryDeviceName": 0x300A0266,
    "BrachyAccessoryDeviceNominalThickness": 0x300A026A,
    "BrachyAccessoryDeviceNominalTransmission": 0x300A026C,
    "ChannelSequence": 0x300A0280,
    "ChannelNumber": 0x300A0282,
    "ChannelLength": 0x300A0284,
    "ChannelTotalTime": 0x300A0286,
    "SourceMovementType": 0x300A0288,
    "NumberOfPulses": 0x300A028A,
    "PulseRepetitionInterval": 0x300A028C,
    "SourceApplicatorNumber": 0x300A0290,
    "SourceApplicatorID": 0x300A0291,
    "SourceApplicatorType": 0x300A0292,
    "SourceApplicatorName": 0x300A0294,
    "SourceApplicatorLength": 0x300A0296,
    "SourceApplicatorManufacturer": 0x300A0298,
    "SourceApplicatorWallNominalThickness": 0x300A029C,
    "SourceApplicatorWallNominalTransmission": 0x300A029E,
    "SourceApplicatorStepSize": 0x300A02A0,
    "TransferTubeNumber": 0x300A02A2,
    "TransferTubeLength": 0x300A02A4,
    "ChannelShieldSequence": 0x300A02B0,
    "ChannelShieldNumber": 0x300A02B2,
    "ChannelShieldID": 0x300A02B3,
    "ChannelShieldName": 0x300A02B4,
    "ChannelShieldNominalThickness": 0x300A02B8,
    "ChannelShieldNominalTransmission": 0x300A02BA,
    "FinalCumulativeTimeWeight": 0x300A02C8,
    "BrachyControlPointSequence": 0x300A02D0,
    "ControlPointRelativePosition": 0x300A02D2,
    "ControlPoint3DPosition": 0x300A02D4,
    "CumulativeTimeWeight": 0x300A02D6,
    "CompensatorDivergence": 0x300A02E0,
    "CompensatorMountingPosition": 0x300A02E1,
    "SourceToCompensatorDistance": 0x300A02E2,
    "ReferencedSetupImageSequence": 0x300A0401,
    "SetupImageComment": 0x300A0402,
    "RTRelationshipGroupLength": 0x300C0000,
    "ReferencedRTPlanSequence": 0x300C0002,
    "ReferencedBeamSequence": 0x300C0004,
    "ReferencedBeamNumber": 0x300C0006,
    "ReferencedReferenceImageNumber": 0x300C0007,
    "StartCumulativeMetersetWeight": 0x300C0008,
    "EndCumulativeMetersetWeight": 0x300C0009,
    "ReferencedBrachyApplicationSetupSequence": 0x300C000A,
    "ReferencedBrachyApplicationSetupNumber": 0x300C000C,
    "ReferencedSourceNumber": 0x300C000E,
    "ReferencedFractionGroupSequence": 0x300C0020,
    "ReferencedFractionGroupNumber": 0x300C0022,
    "ReferencedVerificationImageSequence": 0x300C0040,
    "ReferencedReferenceImageSequence": 0x300C0042,
    "ReferencedDoseReferenceSequence": 0x300C0050,
    "ReferencedDoseReferenceNumber": 0x300C0051,
    "BrachyReferencedDoseReferenceSequence": 0x300C0055,
    "ReferencedStructureSetSequence": 0x300C0060,
    "ReferencedPatientSetupNumber": 0x300C006A,
    "ReferencedDoseSequence": 0x300C0080,
    "ReferencedToleranceTableNumber": 0x300C00A0,
    "ReferencedBolusSequence": 0x300C00B0,
    "ReferencedWedgeNumber": 0x300C00C0,
    "ReferencedCompensatorNumber": 0x300C00D0,
    "ReferencedBlockNumber": 0x300C00E0,
    "ReferencedControlPointIndex": 0x300C00F0,
    "ReferencedControlPointSequence": 0x300C00F2,
    "ReferencedStartControlPointIndex": 0x300C00F4,
    "ReferencedStopControlPointIndex": 0x300C00F6,
    "RTApprovalGroupLength": 0x300E0000,
    "ApprovalStatus": 0x300E0002,
    "ReviewDate": 0x300E0004,
    "ReviewTime": 0x300E0005,
    "ReviewerName": 0x300E0008,
    "ResultsGroupLength": 0x40080000,
    "ResultsID": 0x40080040,
    "ResultsIDIssuer": 0x40080042,
    "ReferencedInterpretationSequence": 0x40080050,
    "InterpretationRecordedDate": 0x40080100,
    "InterpretationRecordedTime": 0x40080101,
    "InterpretationRecorder": 0x40080102,
    "ReferenceToRecordedSound": 0x40080103,
    "InterpretationTranscriptionDate": 0x40080108,
    "InterpretationTranscriptionTime": 0x40080109,
    "InterpretationTranscriber": 0x4008010A,
    "InterpretationText": 0x4008010B,
    "InterpretationAuthor": 0x4008010C,
    "InterpretationApproverSequence": 0x40080111,
    "InterpretationApprovalDate": 0x40080112,
    "InterpretationApprovalTime": 0x40080113,
    "PhysicianApprovingInterpretation": 0x40080114,
    "InterpretationDiagnosisDescription": 0x40080115,
    "InterpretationDiagnosisCodeSequence": 0x40080117,
    "ResultsDistributionListSequence": 0x40080118,
    "DistributionName": 0x40080119,
    "DistributionAddress": 0x4008011A,
    "InterpretationID": 0x40080200,
    "InterpretationIDIssuer": 0x40080202,
    "InterpretationTypeID": 0x40080210,
    "InterpretationStatusID": 0x40080212,
    "Impressions": 0x40080300,
    "ResultsComments": 0x40084000,
    "MACParametersGroupLength": 0x4FFE0000,
    "MACParametersSequence": 0x4FFE0001,
    "SharedFunctionalGroupsSequence": 0x52009229,
    "PerFrameFunctionalGroupsSequence": 0x52009230,
    "WaveformDataGroupLength": 0x54000000,
    "WaveformSequence": 0x54000100,
    "ChannelMinimumValue": 0x54000110,
    "ChannelMaximumValue": 0x54000112,
    "WaveformBitsAllocated": 0x54001004,
    "WaveformSampleInterpretation": 0x54001006,
    "WaveformPaddingValue": 0x5400100A,
    "WaveformData": 0x54001010,
    "FirstOrderPhaseCorrectionAngle": 0x56000010,
    "SpectroscopyData": 0x56000020,
    "PixelDataGroupLength": 0x7FE00000,
    "PixelData": 0x7FE00010,
    "DigitalSignaturesSequence": 0xFFFAFFFA,
    "DataSetTrailingPadding": 0xFFFCFFFC,
    "Item": 0xFFFEE000,
    "ItemDelimitationItem": 0xFFFEE00D,
    "SequenceDelimitationItem": 0xFFFEE0DD,
    "RETIRED_NuclearMedicineSeriesType": 0x00080042,
    "RETIRED_LossyImageCompression": 0x00082110,
    "RETIRED_TransducerPosition": 0x00082200,
    "RETIRED_TransducerOrientation": 0x00082204,
    "RETIRED_AnatomicStructure": 0x00082208,
    "RETIRED_Radionuclide": 0x00180030,
    "RETIRED_EnergyWindowCenterline": 0x00180032,
    "RETIRED_EnergyWindowTotalWidth": 0x00180033,
    "RETIRED_RotationOffset": 0x00181146,
    "RETIRED_TherapyType": 0x00180037,
    "RETIRED_TherapyDescription": 0x00180039,
    "RETIRED_Image": 0x00185210,
    "RETIRED_Image": 0x00185212,
    "RETIRED_DopplerSampleVolumeXPosition": 0x00186038,
    "RETIRED_DopplerSampleVolumeYPosition": 0x0018603A,
    "RETIRED_TMLinePositionX0": 0x0018603C,
    "RETIRED_TMLinePositionY0": 0x0018603E,
    "RETIRED_TMLinePositionX1": 0x00186040,
    "RETIRED_TMLinePositionY1": 0x00186042,
    "RETIRED_ParallelReductionFactorInPlane": 0x00189096,
    "RETIRED_ChemicalShiftsMinimumIntegrationLimitInHz": 0x00189195,
    "RETIRED_ChemicalShiftsMaximumIntegrationLimitInHz": 0x00189196,
    "RETIRED_IsotopeNumber": 0x00200014,
    "RETIRED_PhaseNumber": 0x00200015,
    "RETIRED_IntervalNumber": 0x00200016,
    "RETIRED_TimeSlotNumber": 0x00200017,
    "RETIRED_AngleNumber": 0x00200018,
    "RETIRED_MaskPointers": 0x00286030,
    "RETIRED_DistanceSourceToSupport": 0x00400307,
    "RETIRED_ReferencedProcedureStepSequence": 0x00400330,
    "RETIRED_ReasonForTheImagingServiceRequest": 0x00402001,
    "RETIRED_FillerOrderNumberImagingServiceRequest": 0x00402007,
    "RETIRED_TemplateLocalVersion": 0x0040DB07,
    "RETIRED_TemplateExtensionOrganizationUID": 0x0040DB0C,
    "RETIRED_ReferencedImageOverlayBoxSequence": 0x20200130,
    "RETIRED_ReferencedImageBoxSequence": 0x20400500,
    "ACR_NEMA_CommandRecognitionCode": 0x00000010,
    "ACR_NEMA_Receiver": 0x00000300,
    "ACR_NEMA_NumberOfMatches": 0x00000850,
    "ACR_NEMA_DialogReceiver": 0x00004000,
    "ACR_NEMA_MessageSetID": 0x00005010,
    "ACR_NEMA_DisplayFormat": 0x00005110,
    "ACR_NEMA_TextFormatID": 0x00005130,
    "ACR_NEMA_AddGrayScale": 0x00005150,
    "ACR_NEMA_Copies": 0x00005170,
    "ACR_NEMA_Erase": 0x00005190,
    "ACR_NEMA_Overlays": 0x000051B0,
    "ACR_NEMA_RecognitionCode": 0x00080010,
    "ACR_NEMA_DataSetSubtype": 0x00080041,
    "ACR_NEMA_IdentifyingComments": 0x00084000,
    "ACR_NEMA_UpperLowerPixelValues": 0x00181240,
    "ACR_NEMA_DynamicRange": 0x00185030,
    "ACR_NEMA_ImagePosition": 0x00200030,
    "ACR_NEMA_Location": 0x00200050,
    "ACR_NEMA_MaskingImage": 0x00200080,
    "ACR_NEMA_ImagesInSeries": 0x00201003,
    "ACR_NEMA_Reference": 0x00201020,
    "ACR_NEMA_ModifiedImageID": 0x00203402,
    "ACR_NEMA_ModifyingDeviceManufacturer": 0x00203404,
    "ACR_NEMA_ModifiedImageDescription": 0x00203406,
    "ACR_NEMA_OriginalImageIdentificationNomenclature": 0x00205002,
    "ACR_NEMA_ImageFormat": 0x00280040,
    "ACR_NEMA_CompressionCode": 0x00280060,
    "ACR_NEMA_LargestValidPixelValue": 0x00280105,
    "ACR_NEMA_GrayScale": 0x00281080,
    "ACR_NEMA_GrayLookupTableData": 0x00281200,
    "ACR_NEMA_TextGroupLength": 0x40000000,
    "ACR_NEMA_TextComments": 0x40004000,
    "ACR_NEMA_2C_CompressionOriginator": 0x00280061,
    "ACR_NEMA_2C_CompressionDescription": 0x00280063,
    "ACR_NEMA_2C_CompressionStepPointers": 0x00280066,
    "ACR_NEMA_2C_BitsGrouped": 0x00280069,
    "ACR_NEMA_2C_PerimeterValue": 0x00280071,
    "ACR_NEMA_2C_PredictorColumns": 0x00280081,
    "ACR_NEMA_2C_BlockedPixels": 0x00280090,
    "ACR_NEMA_2C_BlockColumns": 0x00280092,
    "ACR_NEMA_2C_ColumnOverlap": 0x00280094,
    "ACR_NEMA_2C_TransformVersionNumber": 0x00280401,
    "ACR_NEMA_2C_SequenceOfCompressedData": 0x00280403,
    "ACR_NEMA_2C_RowsForNthOrderCoefficients": 0x00280410,
    "ACR_NEMA_2C_CoefficientCoding": 0x00280412,
    "ACR_NEMA_2C_DCTLabel": 0x00280700,
    "ACR_NEMA_2C_DataBlock": 0x00280702,
    "ACR_NEMA_2C_ZonalMapNumberFormat": 0x00280720,
    "ACR_NEMA_2C_ZonalMapFormat": 0x00280722,
    "ACR_NEMA_2C_CodeNumberFormat": 0x00280740,
    "ACR_NEMA_2C_NumberOfTables": 0x00280802,
    "ACR_NEMA_2C_BitsForCodeWord": 0x00280804,
    "ACR_NEMA_2C_CodeTableGroupLength": 0x10000000,
    "ACR_NEMA_2C_RunLengthTriplet": 0x10000011,
    "ACR_NEMA_2C_HuffmanTableTriplet": 0x10000013,
    "ACR_NEMA_2C_ShiftTableTriplet": 0x10000015,
    "ACR_NEMA_2C_ZonalMap": 0x10100004,
    "ACR_NEMA_2C_CoefficientsSDHN": 0x7FE00030
};

/**
* Copyright 2012 Infogosoft
*
* This file is part of jsdicom.
*
* jsdicom is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
*
* jsdicom is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License along with jsdicom. If not, see http://www.gnu.org/licenses/.
*/

function DataElement(little_endian) {
    this.little_endian = little_endian;
    var _get_value = function(element_to_value) {
        return function() {
            if(this.vr in element_to_value) {
                return element_to_value[this.vr](this.data, this.vl);
            } else {
                return undefined;
            }
        };
    };
    this.get_value = _get_value(this.little_endian ? element_to_value_le : element_to_value_be);

    var _get_repr = function(element_to_repr) {
        return function() {
            if(this.vr in element_to_repr) {
                return element_to_repr[this.vr](this.data, this.vl);
            } else {
                return undefined;
            }
        };
    }
    this.get_repr = _get_repr(this.little_endian ? element_to_repr_le : element_to_repr_be);
}

function DcmFile() {
    // File Meta Information
    this.meta_elements = {};
    this.data_elements = {};
}

DcmFile.prototype.get_meta_element = function(tag) {
    return this.meta_elements[tag];
}

DcmFile.prototype.get_element = function(tag) {
    return this.data_elements[tag];
}

DcmFile.prototype.get = function(tagname) {
    return this.data_elements[dcmdict[tag]].get_value();
}

DcmFile.prototype.getCTValue = function(col, row) {
    if(col < 0 || col >= this.Columns || row < 0 || row >= this.Rows)
        return undefined;
    var data_idx = (col + row*this.Columns);
    var intensity = this.PixelData[data_idx] * this.RescaleSlope + this.RescaleIntercept;
    return intensity;
}

DcmFile.prototype.getPatientCoordinate = function(col, row) {
        if (this.imagePosition == undefined || this.imageOrientationColumn == undefined || this.imageOrientationRow == undefined)
            return undefined;
        return [this.imagePosition[0] + row * this.imageOrientationRow[0] + col * this.imageOrientationColumn[0],
                this.imagePosition[1] + row * this.imageOrientationRow[1] + col * this.imageOrientationColumn[1],
                this.imagePosition[2] + row * this.imageOrientationRow[2] + col * this.imageOrientationColumn[2]];
}
;
/**
* Copyright 2012 Infogosoft
*
* This file is part of jsdicom.
*
* jsdicom is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
*
* jsdicom is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License along with jsdicom. If not, see http://www.gnu.org/licenses/.
*/

function DicomParser(buffer) {
    this.buffer = buffer;
}

DicomParser.prototype.read_number = function(offset, length) {
    // NOTE: Only little endian
    var it = offset+length-1;
    var n = 0;
    for(;it>=offset;--it)
    {
        var tmp = this.buffer[it];
        n = n*256 + this.buffer[it];
    }
    return n;
}


DicomParser.prototype.read_string = function(start, len) {
    var s = ""
    var end = start+len;
    for(var i=start;i<end;++i) {
        s += String.fromCharCode(this.buffer[i]);
    }
    return s;
}

DicomParser.prototype.read_VR = function(offset) {
    return this.read_string(offset, 2);
}

DicomParser.prototype.read_tag = function(offset) {
    var vl = this.buffer[offset+1]*256*256*256 + this.buffer[offset]*256*256 +
             this.buffer[offset+3]*256 + this.buffer[offset+2];
    return vl;
}

DicomParser.prototype.parse_file = function() {
    var file = new DcmFile();
    // Look for DICM at pos 128
    var magicword = this.read_string(128, 4);
    if(magicword != "DICM")
    {
        //log("DICM key NOT found, aborting");
        console.log("no magic word found");
        return;
    }
    // File Meta Information should always use Explicit VR Little Endian(1.2.840.10008.1.2.1)
    // Parse Meta Information Group Length
    var offset = 132;
    var tag = this.read_tag(offset);
    offset += 4;

    var vr = this.read_VR(offset);
    offset += 2;

    var vl = this.read_number(offset, 2);
    offset += 2;

    var value = this.read_number(offset, vl);
    offset += vl;
    var meta_element_end = offset+value;

    // Parse File Meta Information
    while(offset < meta_element_end) {
        var meta_element = new DataElement(true);
        offset = meta_element_reader.read_element(this.buffer, offset, meta_element);
        file.meta_elements[meta_element.tag] = meta_element;
    }

    var transfer_syntax = file.get_meta_element(0x00020010).get_value();
    var little_endian = is_little_endian[transfer_syntax];
    // Get reader for transfer syntax
    var element_reader = get_element_reader(transfer_syntax);
    if(element_reader == undefined)
        throw "Unknown TransferSyntaxUID";

    // Parse Dicom-Data-Set
    while(offset + 6 < this.buffer.length) {
        var data_element = new DataElement(little_endian);

        offset = element_reader.read_element(this.buffer, offset, data_element);
        file.data_elements[data_element.tag] = data_element;
        if(data_element.tag in dcmdict)
            file[dcmdict[data_element.tag][1]] = data_element.get_value();
    }

    if(element_reader._implicit && 'PixelData' in file && file.PixelData == undefined) {
        if(file.BitsStored == 16) {
            data_element = file.data_elements[dcmdict['PixelData']];
            data_element.vr = "OW";
            file[dcmdict[data_element.tag][1]] = data_element.get_value(); 
        } else if(file.BitsStored == 8) {
            data_element = file.data_elements[dcmdict['PixelData']];
            data_element.vr = "OB";
            file[dcmdict[data_element.tag][1]] = data_element.get_value(); 
        }
    }
    return file;
}
;
/**
* Copyright 2012 Infogosoft
*
* This file is part of jsdicom.
*
* jsdicom is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
*
* jsdicom is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License along with jsdicom. If not, see http://www.gnu.org/licenses/.
*/


function getTagByName(tagname, ds) { 
    return $.map($.grep(ds, function (a) { 
        return a['name'] == tagname; }), function (tag) { 
            return tag['value']; 
        })[0];
}

function getTagsInArray(array, tagnames) {
    return $.map(array, function(ds) {
        tags = {};
        $.each(tagnames, function(i, tagname) {
            tags[tagname] = getTagByName(tagname, ds);
        });
        return tags;
    });
}

function listPacsNames(success) {
    $.getJSON('/', function(data) {
        success(data['pacsnames']);
    });
}

function findAllPatients(pacsname, success) {
    $.getJSON('/' + pacsname + '/find/patient?PatientID&PatientsName', function(data) {
        success(getTagsInArray(data['datasets'], ["Patient's Name", 'Patient ID']));
    });
}

function findStudiesInPatient(pacsname, patientid, success) {
    $.getJSON('/' + pacsname + '/find/study?PatientID=' + patientid + '&StudyDate&StudyTime&StudyDescription&StudyInstanceUID', function(data) {
        success(getTagsInArray(data['datasets'], ['Study Date', 'Study Time', 'Study Instance UID', 'Study Description']));
    });
}

function findSeriesInStudy(pacsname, patientid, studyinstanceuid, success) {
    $.getJSON('/' + pacsname + '/find/series?PatientID=' + patientid + '&StudyInstanceUID=' + studyinstanceuid + '&Modality&SeriesInstanceUID&SeriesNumber&SeriesDate&SeriesTime&SeriesDescription', function(data) {
        success(getTagsInArray(data['datasets'], ['Modality', 'Series Instance UID', 'Series Number', 'Series Date', 'Series Time', 'Series Description']));
    });
}

function findImagesInSeries(pacsname, patientid, studyinstanceuid, seriesinstanceuid, success) {
    $.getJSON('/' + pacsname + '/find/image?PatientID=' + patientid + '&StudyInstanceUID=' + studyinstanceuid + '&SeriesInstanceUID=' + seriesinstanceuid + '&SOPInstanceUID', function(data) {
        success($.map(getTagsInArray(data['datasets'], ['SOP Instance UID']), 
                      function(t) { 
                          return '/' + pacsname + '/get/image?PatientID=' + patientid + '&StudyInstanceUID=' + studyinstanceuid + '&SeriesInstanceUID=' + seriesinstanceuid + '&SOPInstanceUID=' + t['SOP Instance UID']
                      }));
    });
}

function load_images_in_series(app, pacsname, patientid, studyinstanceuid, seriesinstanceuid)
{
    app.curr_file_idx = 0;
    app.files_loaded = 0;

    findImagesInSeries(pacsname, patientid, studyinstanceuid, seriesinstanceuid, function(urls) {
        for(var i=0;i<urls.length;++i) {
            app.load_url(urls[i], i, urls.length);
        }

        $("#slider").slider({
            value: 0,
            max: urls.length-1,
            slide: function(ui, event) {
                app.curr_file_idx = event.value; //$(this).slider('value');
                app.curr_tool.set_file(app.files[app.curr_file_idx]);
                app.draw_image();
            }
        });
    });
}
;
/**
* Copyright 2012 Infogosoft
*
* This file is part of jsdicom.
*
* jsdicom is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
*
* jsdicom is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License along with jsdicom. If not, see http://www.gnu.org/licenses/.
*/
// read vr(both little and big endian)
function read_vr(buffer, offset) {
    return String.fromCharCode(buffer[offset]) + 
           String.fromCharCode(buffer[offset+1]);
}


// Big endian readers
function read_number_BE(buffer, offset, length) {
    var n = 0;
    for(var i=offset;i<offset+length;++i) {
        n = n*256 + buffer[i];
    }
    return n;
}

function read_tag_BE(buffer, offset) {
    var tag = buffer[offset]*256*256*256 + buffer[offset+1]*256*256 +
              buffer[offset+2]*256 + buffer[offset+3];
    return tag;
}

// Little endian readers
function read_number_LE(buffer, offset, length) {
    var it = offset + length - 1;
    var n = 0;
    for(;it>=offset;--it) {
        var tmp = buffer[it];
        n = n*256 + buffer[it];
    }
    return n;
}

function read_tag_LE(buffer, offset) {
    var tag = buffer[offset+1]*256*256*256 + buffer[offset]*256*256 +
              buffer[offset+3]*256 + buffer[offset+2];
    return tag;
}

// Big endian writers
function write_tag_BE(buffer, offset, tag) {
    buffer[offset] = (tag & 0xff000000) >> 24;
    buffer[offset+1] = (tag & 0x00ff0000) >> 16;
    buffer[offset+2] = (tag & 0x0000ff00) >> 8;
    buffer[offset+3] = (tag & 0x000000ff);
}

function write_number_BE(buffer, offset, length, number) {
    for(var i=0;i<length;++i) {
        buffer[offset+i] = (number >> (length-i-1)*8) & 0xff;
    }
}

function write_tag_LE(buffer, offset, tag) {
    buffer[offset+1] = (tag & 0xff000000) >> 24;
    buffer[offset] = (tag & 0x00ff0000) >> 16;
    buffer[offset+3] = (tag & 0x0000ff00) >> 8;
    buffer[offset+2] = (tag & 0x000000ff);
}

function write_number_LE(buffer, offset, length, number) {
    for(var i=0;i<length;++i) {
        buffer[offset+i] = (number >> i*8) & 0xff;
    }
}

function element_reader(tag_reader, number_reader, implicit) {
    this._read_tag = tag_reader;
    this._read_number = number_reader;
    this._implicit = implicit;

    // reads a data element and returns the new offset
    this.read_element = function(buffer, offset, element /* out */) {
        var tag = this._read_tag(buffer, offset)
        offset += 4;
        
        var vl;
        var vr;
        if (tag == 0xfffee000 || tag == 0xfffee00d || tag == 0xfffee0dd) {
            // Item delimiters
            element.tag = tag;
            element.vl = this._read_number(buffer, offset, 4);
            offset += 4;
            element.vr = "N/A";
            return offset;
        }
            
        if(implicit) {
            vr = "UN";
            if(tag in dcmdict) {
                vr = dcmdict[tag][0];
            } else if(this._read_tag(buffer, offset + 4) == 0xfffee000) { 
                // Assume SQ if nothing in dict and next tag is item delimiter
                vr = "SQ";
            }
            vl = this._read_number(buffer, offset, 4);
            offset += 4;
        } else {
            vr = read_vr(buffer, offset);
            if(vr == "OB" || vr == "OF" || vr == "SQ" || vr == "OW" || vr == "UN" || vr == "ox") { 
                offset += 4;
                vl = this._read_number(buffer, offset, 4);
                offset += 4;
            } else {
                offset += 2;
                vl = this._read_number(buffer, offset, 2);
                offset += 2;
            }
        }
        
        element.tag = tag;
        element.vr = vr;
        if (vl == 0xffffffff)
            element.vl = 0;
        else
            element.vl = vl;

        if(element.vr == "SQ") {
            element.sequence_items = [];
            var itemstart = new DataElement(implicit);
            var seq_offset = this.read_element(buffer, offset, itemstart); // Item start

            if(itemstart.vl == 0xffffffff) { // Implicit length
                var item = new DataElement(implicit);
                var seq_offset = this.read_element(buffer, seq_offset, item); // Item start
                while(item.tag != 0xfffee0dd) { // Sequence delimiter
                    if(item.tag != 0xfffee00d) {
                        element.sequence_items.push(item);
                    }
                    var item = new DataElement(implicit);
                    var seq_offset = this.read_element(buffer, seq_offset, item); // Item start
                }
                element.vl = seq_offset-offset;
            } else { // Explicit length, no sequence delimiter(?)
                while(seq_offset < offset + element.vl) {
                    var item = new DataElement(implicit);
                    seq_offset = this.read_element(buffer, seq_offset, item);
                    element.sequence_items.push(item);
                }
            }
        }

        element.data = buffer.subarray(offset, offset + element.vl);
        element.implicit = implicit;
        offset += element.vl;
        return offset;
    }
}

function element_writer(tag_writer, number_writer, implicit) {
    this._write_tag = tag_writer;
    this._write_number = number_writer;

    // writes s a data element and returns the new offset
    this.write_element = function(buffer, offset, element /* in */) {
        // Even out offset
        offset += (offset % 2);
        this._write_tag(buffer, offset, element.tag);
        offset += 4;
        if(implicit) {
            // 4 bytes for length
            this._write_number(buffer, offset, 4, element.vl);
            offset += 4;
        } else {
            // Write vr
            buffer[offset] = element.vr[0];
            buffer[offset+1] = element.vr[1];

            this._write_number(buffer, offset + 2, 2, element.vl);
            offset += 4;
        }
        // Write actual data
        buffer.set(element.data, offset);
        return offset + element.vl;
    }
}

transferSyntaxes = {
    "LittleEndianImplicit": "1.2.840.10008.1.2",
    "LittleEndianExplicit": "1.2.840.10008.1.2.1",
    "BigEndianExplicit": "1.2.840.10008.1.2.2",
    "DeflatedLittleEndianExplicit": "1.2.840.10008.1.2.1.99"
}

tag_readers = {
    "1.2.840.10008.1.2": read_tag_LE,
    "1.2.840.10008.1.2.1": read_tag_LE,
    "1.2.840.10008.1.2.2": read_tag_BE,
    "1.2.840.10008.1.2.4.50": read_tag_LE,
    "1.2.840.10008.1.2.4.51": read_tag_LE,
    "1.2.840.10008.1.2.4.52": read_tag_LE,
    "1.2.840.10008.1.2.4.53": read_tag_LE,
    "1.2.840.10008.1.2.4.54": read_tag_LE,
    "1.2.840.10008.1.2.4.55": read_tag_LE,
    "1.2.840.10008.1.2.4.56": read_tag_LE,
    "1.2.840.10008.1.2.4.57": read_tag_LE,
    "1.2.840.10008.1.2.4.58": read_tag_LE,
    "1.2.840.10008.1.2.4.59": read_tag_LE,
    "1.2.840.10008.1.2.4.60": read_tag_LE,
    "1.2.840.10008.1.2.4.61": read_tag_LE,
    "1.2.840.10008.1.2.4.62": read_tag_LE,
    "1.2.840.10008.1.2.4.63": read_tag_LE,
    "1.2.840.10008.1.2.4.64": read_tag_LE,
    "1.2.840.10008.1.2.4.65": read_tag_LE,
    "1.2.840.10008.1.2.4.66": read_tag_LE,
    "1.2.840.10008.1.2.4.70": read_tag_LE,
    "1.2.840.10008.1.2.4.80": read_tag_LE,
    "1.2.840.10008.1.2.4.81": read_tag_LE,
    "1.2.840.10008.1.2.4.90": read_tag_LE,
    "1.2.840.10008.1.2.4.91": read_tag_LE,
    "1.2.840.10008.1.2.4.92": read_tag_LE,
    "1.2.840.10008.1.2.4.93": read_tag_LE
};

tag_writers = {
    "1.2.840.10008.1.2": write_tag_LE,
    "1.2.840.10008.1.2.1": write_tag_LE,
    "1.2.840.10008.1.2.2": write_tag_BE,
    "1.2.840.10008.1.2.4.50": write_tag_LE,
    "1.2.840.10008.1.2.4.51": write_tag_LE,
    "1.2.840.10008.1.2.4.52": write_tag_LE,
    "1.2.840.10008.1.2.4.53": write_tag_LE,
    "1.2.840.10008.1.2.4.54": write_tag_LE,
    "1.2.840.10008.1.2.4.55": write_tag_LE,
    "1.2.840.10008.1.2.4.56": write_tag_LE,
    "1.2.840.10008.1.2.4.57": write_tag_LE,
    "1.2.840.10008.1.2.4.58": write_tag_LE,
    "1.2.840.10008.1.2.4.59": write_tag_LE,
    "1.2.840.10008.1.2.4.60": write_tag_LE,
    "1.2.840.10008.1.2.4.61": write_tag_LE,
    "1.2.840.10008.1.2.4.62": write_tag_LE,
    "1.2.840.10008.1.2.4.63": write_tag_LE,
    "1.2.840.10008.1.2.4.64": write_tag_LE,
    "1.2.840.10008.1.2.4.65": write_tag_LE,
    "1.2.840.10008.1.2.4.66": write_tag_LE,
    "1.2.840.10008.1.2.4.70": write_tag_LE,
    "1.2.840.10008.1.2.4.80": write_tag_LE,
    "1.2.840.10008.1.2.4.81": write_tag_LE,
    "1.2.840.10008.1.2.4.90": write_tag_LE,
    "1.2.840.10008.1.2.4.91": write_tag_LE,
    "1.2.840.10008.1.2.4.92": write_tag_LE,
    "1.2.840.10008.1.2.4.93": write_tag_LE
};

is_implicit = {
    "1.2.840.10008.1.2": true,
    "1.2.840.10008.1.2.1": false,
    "1.2.840.10008.1.2.2": false,
    "1.2.840.10008.1.2.4.50": false,
    "1.2.840.10008.1.2.4.51": false,
    "1.2.840.10008.1.2.4.52": false,
    "1.2.840.10008.1.2.4.53": false,
    "1.2.840.10008.1.2.4.54": false,
    "1.2.840.10008.1.2.4.55": false,
    "1.2.840.10008.1.2.4.56": false,
    "1.2.840.10008.1.2.4.57": false,
    "1.2.840.10008.1.2.4.58": false,
    "1.2.840.10008.1.2.4.59": false,
    "1.2.840.10008.1.2.4.60": false,
    "1.2.840.10008.1.2.4.61": false,
    "1.2.840.10008.1.2.4.62": false,
    "1.2.840.10008.1.2.4.63": false,
    "1.2.840.10008.1.2.4.64": false,
    "1.2.840.10008.1.2.4.65": false,
    "1.2.840.10008.1.2.4.66": false,
    "1.2.840.10008.1.2.4.70": false,
    "1.2.840.10008.1.2.4.80": false,
    "1.2.840.10008.1.2.4.81": false,
    "1.2.840.10008.1.2.4.90": false,
    "1.2.840.10008.1.2.4.91": false,
    "1.2.840.10008.1.2.4.92": false,
    "1.2.840.10008.1.2.4.93": false
}

is_little_endian = {
    "1.2.840.10008.1.2": true,
    "1.2.840.10008.1.2.1": true,
    "1.2.840.10008.1.2.2": false
};

number_readers = {
    "1.2.840.10008.1.2": read_number_LE,
    "1.2.840.10008.1.2.1": read_number_LE,
    "1.2.840.10008.1.2.2": read_number_BE,
    "1.2.840.10008.1.2.4.50": read_number_LE,
    "1.2.840.10008.1.2.4.51": read_number_LE,
    "1.2.840.10008.1.2.4.52": read_number_LE,
    "1.2.840.10008.1.2.4.53": read_number_LE,
    "1.2.840.10008.1.2.4.54": read_number_LE,
    "1.2.840.10008.1.2.4.55": read_number_LE,
    "1.2.840.10008.1.2.4.56": read_number_LE,
    "1.2.840.10008.1.2.4.57": read_number_LE,
    "1.2.840.10008.1.2.4.58": read_number_LE,
    "1.2.840.10008.1.2.4.59": read_number_LE,
    "1.2.840.10008.1.2.4.60": read_number_LE,
    "1.2.840.10008.1.2.4.61": read_number_LE,
    "1.2.840.10008.1.2.4.62": read_number_LE,
    "1.2.840.10008.1.2.4.63": read_number_LE,
    "1.2.840.10008.1.2.4.64": read_number_LE,
    "1.2.840.10008.1.2.4.65": read_number_LE,
    "1.2.840.10008.1.2.4.66": read_number_LE,
    "1.2.840.10008.1.2.4.70": read_number_LE,
    "1.2.840.10008.1.2.4.80": read_number_LE,
    "1.2.840.10008.1.2.4.81": read_number_LE,
    "1.2.840.10008.1.2.4.90": read_number_LE,
    "1.2.840.10008.1.2.4.91": read_number_LE,
    "1.2.840.10008.1.2.4.92": read_number_LE,
    "1.2.840.10008.1.2.4.93": read_number_LE
};

number_writers = {
    "1.2.840.10008.1.2": write_number_LE,
    "1.2.840.10008.1.2.1": write_number_LE,
    "1.2.840.10008.1.2.2": write_number_BE,
    "1.2.840.10008.1.2.4.50": write_number_LE,
    "1.2.840.10008.1.2.4.51": write_number_LE,
    "1.2.840.10008.1.2.4.52": write_number_LE,
    "1.2.840.10008.1.2.4.53": write_number_LE,
    "1.2.840.10008.1.2.4.54": write_number_LE,
    "1.2.840.10008.1.2.4.55": write_number_LE,
    "1.2.840.10008.1.2.4.56": write_number_LE,
    "1.2.840.10008.1.2.4.57": write_number_LE,
    "1.2.840.10008.1.2.4.58": write_number_LE,
    "1.2.840.10008.1.2.4.59": write_number_LE,
    "1.2.840.10008.1.2.4.60": write_number_LE,
    "1.2.840.10008.1.2.4.61": write_number_LE,
    "1.2.840.10008.1.2.4.62": write_number_LE,
    "1.2.840.10008.1.2.4.63": write_number_LE,
    "1.2.840.10008.1.2.4.64": write_number_LE,
    "1.2.840.10008.1.2.4.65": write_number_LE,
    "1.2.840.10008.1.2.4.66": write_number_LE,
    "1.2.840.10008.1.2.4.70": write_number_LE,
    "1.2.840.10008.1.2.4.80": write_number_LE,
    "1.2.840.10008.1.2.4.81": write_number_LE,
    "1.2.840.10008.1.2.4.90": write_number_LE,
    "1.2.840.10008.1.2.4.91": write_number_LE,
    "1.2.840.10008.1.2.4.92": write_number_LE,
    "1.2.840.10008.1.2.4.93": write_number_LE
}

// Element reader factory
// All transfer syntaxes for encapsulation of encoded pixel data uses Explicit VR Little endian (11_05 A4)
function get_element_reader(transfersyntaxUID) {
    if(transfersyntaxUID in tag_readers && transfersyntaxUID in number_readers) {
        return new element_reader(tag_readers[transfersyntaxUID],
                                  number_readers[transfersyntaxUID],
                                  is_implicit[transfersyntaxUID])
    }
    return;
}

function get_element_writer(transfersyntaxUID) {
    return;
}
meta_element_reader = get_element_reader("1.2.840.10008.1.2.1");
/**
* Copyright 2012 Infogosoft
*
* This file is part of jsdicom.
*
* jsdicom is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
*
* jsdicom is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License along with jsdicom. If not, see http://www.gnu.org/licenses/.
*/

var timer_event;
function log(s)
{
    var logEntry = $("<li>").html(s);
    $("#loglist").append(logEntry);
}

function log_element(elem_repr) {
    this.i = 0;
    this.i++;
    var elem_div = $("<div>").html(elem_repr);
    if(this.i % 2 == 0)
        elem_div.addClass("even");            
    $("#dicomheader").append(elem_div);
}


function DcmApp(viewareaid) {
    this.viewareaid = viewareaid;
    this.painter;

    this.last_mouse_canvas_pos = [NaN,NaN];
    this.last_mouse_image_pos = [NaN,NaN];
    this.mouse_down = false;

    this.series = {};
    this.curr_series_uid = "";
    this.files = []; // points to files-array in current series
    this.files_loaded = 0;
    this.curr_file_idx = 0;
    // tools
    this.curr_tool = new WindowLevelTool(this);
    this.curr_clut_r = ClutManager.r('Plain');
    this.curr_clut_g = ClutManager.g('Plain');
    this.curr_clut_b = ClutManager.b('Plain');
}

DcmApp.prototype.load_files = function(files)
{
	var output =  'data loaded 1';
	document.getElementById('list2').innerHTML = '<ul> data loaded1 </ul>';
    var app = this;
    this.curr_file_idx = 0;
    this.series = {};
    this.files = [];
    this.files_loaded = 0;
    for(var i=0;i<files.length;++i) {
        this.load_file(files[i], i, files.length);
    }/*
    $("#slider").slider({
        value: 0,
        max: files.length-1,
        slide: function(ui, event) {
            app.curr_file_idx = event.value; //$(this).slider('value');
            app.curr_tool.set_file(app.files[app.curr_file_idx]);
            app.draw_image();
        }
    });*/
	output = 'data loaded 2';
	document.getElementById('list2').innerHTML = '<ul>' + output.join('') + '</ul>';
}

DcmApp.prototype.load_urllist_from_url = function(url)
{
    var app = this;
    this.curr_file_idx = 0;
    this.files_loaded = 0;
    var files = [];

    $.ajax({
        async: false,
        dataType: "json",
        url: url,
        success: function(r){
            files = r;
        }
    });

    for(var i=0;i<files.length;++i) {
        this.load_url(files[i].href, i, files.length);
    }

    $("#slider").slider({
        value: 0,
        max: files.length-1,
        slide: function(ui, event) {
            app.curr_file_idx = event.value; //$(this).slider('value');
            app.curr_tool.set_file(app.files[app.curr_file_idx]);
            app.draw_image();
        }
    });
}

DcmApp.prototype.load_arraybuffer = function(abuf, index, file_count) {
    var app = this;
    var buffer = new Uint8Array(abuf);
    parser = new DicomParser(buffer);
    var file = parser.parse_file();
    if (file == undefined) {
        app.files[index] = undefined;
        return;
    }

    if (file.Modality == "CT" || file.Modality == "PT" || file.Modality == "MR") {
        imageOrientation = file.ImageOrientationPatient;
        file.imageOrientationRow = imageOrientation.slice(0,3);
        file.imageOrientationColumn = imageOrientation.slice(3,6);
        
        app.organize_file(file);
    } else if(file.modality == "US") {
        file.RescaleIntercept = 0;
        file.RescaleSlope = 1;
        app.files[index] = file;
        app.organize_file(file);
    } else {
        file.RescaleIntercept = 0;
        file.RescaleSlope = 1;
        app.organize_file(file);
        app.files[index] = file;
    }

    if(index == 0) {
        app.curr_series_uid = file.SeriesInstanceUID;
        app.files = app.series[app.curr_series_uid].files;
        app.draw_image();
    }
    ++app.files_loaded;
    if(app.files_loaded == file_count) {
        // All files are loaded
        app.setup_series_selection();
    }
}


DcmApp.prototype.load_file = function(file, index, file_count) {
    var reader = new FileReader();

    // Closure to bind app, 'this' will be reader
    reader.onload = (function(app) {
        return function(evt) {
            return app.load_arraybuffer(evt.target.result, index, file_count);
        }
    })(this);
    reader.readAsArrayBuffer(file);
}

DcmApp.prototype.load_url = function(url, index, file_count) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';

    // Closure to bind app, 'this' will be reader
    xhr.onload = (function(app) {
        return function(evt) {
            return app.load_arraybuffer(evt.target.response, index, file_count);
        }
    })(this);
    xhr.send();
}

DcmApp.prototype.organize_file = function(file) {
    var series_uid = file.SeriesInstanceUID;
    var series_desc = file.SeriesDescription;
    if(!this.series.hasOwnProperty(series_uid)) {
        var series = new DcmSeries();
        series.seriesUID = series_uid;
        series.seriesDescription = series_desc;
        this.series[series_uid] = series;
    }
    this.series[series_uid].files.push(file);
}


DcmApp.prototype.setup_series_selection = function() {
    fill_series_selection(this.series, this.curr_series_uid, function(cid) { return new CanvasPainter(cid) });
    this.set_series(this.curr_series_uid);
}

DcmApp.prototype.set_series = function(series_uid) {
    console.log("set_series");
    this.files = this.series[series_uid].files;
    var ww;
    var wl;
    if(this.files[0].WindowCenter !== undefined) {
        wl = this.files[0].WindowCenter;
        ww = this.files[0].WindowWidth;
        if(wl.constructor == Array) {
            app.update_window_preset_list(wl, ww);
            wl = wl[0];
        }
        if(ww.constructor == Array) {
            ww = ww[0];
        }
    } else if(this.files[0].RescaleSlope !== undefined) {
        // TODO check the actual datatype instead of using 65536...
        maxval = this.files[0].RescaleSlope * 65536 +
            this.files[0].RescaleIntercept;
        minval = this.files[0].RescaleIntercept;
        ww = maxval-minval;
        wl = (maxval+minval)/2;
    } else {
        // Min-max VOI
        var windowing = min_max_voi(this.files[0]);
        wl = windowing[0];
        ww = windowing[1];
        if(this.files[0].PixelRepresentation == 0x01) {
            wl -= (0x01 << this.files[0].HighBit);
        }
    }
    this.curr_file_idx = 0;
    this.set_windowing(wl, ww);
    this.draw_image();
}

DcmApp.prototype.set_pan = function(panx, pany) {
    this.painter.set_pan(panx, pany);
    this.last_mouse_image_pos = this.painter.unproject(this.last_mouse_canvas_pos);
    this.refreshmousemoveinfo();
}

DcmApp.prototype.get_pan = function(pan) {
    return this.painter.get_pan();
}

DcmApp.prototype.set_scale = function(scale) {
    this.painter.set_scale(scale);
    this.last_mouse_image_pos = this.painter.unproject(this.last_mouse_canvas_pos);
    this.refreshmousemoveinfo();
}

DcmApp.prototype.get_scale = function(scale) {
    return this.painter.get_scale();
}

DcmApp.prototype.set_windowing = function(wl, ww) {
    return this.painter.set_windowing(wl, ww);
}

DcmApp.prototype.get_windowing = function() {
    return this.painter.get_windowing();
}

DcmApp.prototype.set_slice_idx = function(idx) {
    if(idx < 0 || idx > this.files.length - 1)
        return;
    this.curr_file_idx = idx;
    this.draw_image();
}

DcmApp.prototype.get_slice_idx = function() {
    return this.curr_file_idx;
}

DcmApp.prototype.draw_image = function() {
    var curr_file = this.files[this.curr_file_idx];
    if(curr_file == undefined)
        return;
    $("#size_info").text(curr_file.Rows + "x" + curr_file.Columns);
    $("#sliceidx_info").text(this.curr_file_idx+1 + "/" + this.files.length);
    $("#slider").slider("option", "value", this.curr_file_idx);
    var windowing = this.painter.get_windowing();
    $("#ww_info").text(windowing[1]);
    $("#wl_info").text(windowing[0]);
    this.painter.set_file(curr_file);
    this.painter.set_cluts(this.curr_clut_r, this.curr_clut_g, this.curr_clut_b);
    this.painter.draw_image();
}

DcmApp.prototype.fill_metadata_table = function() {
    if(this.files.length == 0)
        return;
    fill_metadata_table(this.files[this.curr_file_idx]);
}

DcmApp.prototype.activate_tool = function(tool_identifier) { 
    this.curr_tool = new tools[tool_identifier](this);
    this.curr_tool.set_file(this.files[this.curr_file_idx]);
}

DcmApp.prototype.reset_levels = function() { 
    this.painter.reset_pan();
    this.painter.reset_windowing();
    this.painter.reset_scale();
    this.draw_image();
}

DcmApp.prototype.mousemoveinfo = function(canvas_pos, image_pos) {
    if (this.files.length <= this.curr_file_idx) {
        $("#density_info").html("");
        return;
    }

    var curr_file = this.files[this.curr_file_idx];
    if (curr_file == undefined)
        return;

    var rowcol = app.painter.image_coords_to_row_column(image_pos);
    var row = rowcol[0];
    var col = rowcol[1];

    var coord = curr_file.getPatientCoordinate(row,col);
    var ctval = curr_file.getCTValue(row, col);
    if (ctval == undefined) {
        $("#density").html("");
        return;
    }
    
    if (coord != undefined) {
        $("#density_info").html("value(" + coord.map(function(x) {return x.toFixed(1);}) + ") = " + ctval.toFixed(1));
    } else {
        $("#density_info").html("r,c = (" + row + ", " + col + "), val = " + ctval);
    }
}

DcmApp.prototype.set_clut = function(clutname) {
    this.curr_clut_r = ClutManager.r(clutname);
    this.curr_clut_g = ClutManager.g(clutname);
    this.curr_clut_b = ClutManager.b(clutname);
    this.draw_image();
}

DcmApp.prototype.refreshmousemoveinfo = function() {
    this.mousemoveinfo(this.last_mouse_canvas_pos, this.last_mouse_image_pos);
}

DcmApp.prototype.update_window_preset_list = function(wls, wws) { 
    var optgroup = $("#window-presets").find("optgroup")
    optgroup.empty();
    for(var i=0;i<wws.length;++i) {
        var option = $("<option>").val(wls[i] + "," + wws[i]).text(wls[i] + " - " + wws[i]);
        optgroup.append(option);
    }
}

DcmApp.prototype.set_window_preset = function(value) { 
    var spl = value.split(",");
    this.painter.set_windowing(parseFloat(spl[0]), parseFloat(spl[1]));
    this.draw_image();
}

DcmApp.prototype.rel_pos_from_event = function(evt) {
    var rel_pos = [-1, -1];
    rel_pos[0] = Math.floor(evt.pageX - $(this.canvas).offset().left);
    rel_pos[1] = Math.floor(evt.pageY - $(this.canvas).offset().top);
    return rel_pos;
}

DcmApp.prototype._init_painter = function(painter) {
    painter.set_cluts(this.curr_clut_r, this.curr_clut_g, this.curr_clut_b);
    painter.clut_bar_enabled = true;
    painter.init();
}

DcmApp.prototype.init = function() {
    // Create canvas inside this.divid
    this.viewarea = document.getElementById(this.viewareaid);
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'maincanvas'; // TODO: Unique of use of prefix
    this.canvas.width = this.viewarea.clientWidth - 1;
    this.canvas.height = this.viewarea.clientHeight - 1;
    this.canvas.style.border = '1px solid #aaa';
    this.viewarea.appendChild(this.canvas);
    // Create infobox
    create_image_infobox(this.viewarea);

    var painters = [
        function(cid) { return new GLPainter(cid); },
        function(cid) { return new CanvasPainter(cid); },
    ];
    for(var i in painters) {
        var painter = painters[i](this.canvas.id);
        try {
            painter.set_cluts(this.curr_clut_r, this.curr_clut_g, this.curr_clut_b);
            painter.clut_bar_enabled = true;
            painter.init();
            this.painter = painter;
            break;
        } catch(e) {
            console.log(e);
        }
    }
    if(!this.painter) {
        alert("Failed to create WebGL and Canvas context");
        return false;
    }

    var app = this;
    this.canvas.onmousemove = function(evt) {
        app.last_mouse_canvas_pos = app.rel_pos_from_event(evt);
        app.last_mouse_image_pos = app.painter.unproject(app.last_mouse_canvas_pos);
        if (app.curr_tool.mousemove !== undefined)
            app.curr_tool.mousemove(app.last_mouse_canvas_pos, app.last_mouse_image_pos);
        app.refreshmousemoveinfo();
        return false;
    }
    

    this.canvas.onmousedown = function(evt) {
        if (app.curr_tool.mousedown !== undefined) {
            var canvas_pos = app.rel_pos_from_event(evt);
            image_pos = app.painter.unproject(canvas_pos);
            app.curr_tool.mousedown(canvas_pos, image_pos);
        }
        app.mouse_down = true;
        return false;
    }

    this.canvas.onmouseup = function(evt) {
        if (app.curr_tool.mouseup !== undefined) {
            var canvas_pos = app.rel_pos_from_event(evt);
            image_pos = app.painter.unproject(canvas_pos);
            app.curr_tool.mouseup(canvas_pos, image_pos);
        }
        app.mouse_down = false;
        return false;
    }

    this.canvas.onmouseout = function(evt) {
        app.mouse_down = false;
        return false;
    }

    this.canvas.onclick = function(evt) {
        if (app.curr_tool.click !== undefined) {
            var canvas_pos = app.rel_pos_from_event(evt);
            image_pos = app.painter.unproject(canvas_pos);
            app.curr_tool.click(canvas_pos, image_pos);
        }
        return false;
    }

    function scrollListener(evt) {
        if (app.curr_tool.scroll !== undefined)
            app.curr_tool.scroll(evt.detail);
        return false;
    }
    function wheelListener(evt) {
        if (app.curr_tool.scroll !== undefined)
            app.curr_tool.scroll(evt.wheelDeltaY/3);
        return false;
    }
    
    this.canvas.addEventListener('DOMMouseScroll', scrollListener, false);
    this.canvas.addEventListener('mousewheel', wheelListener, false);

    document.getElementById("infobox").onmousemove = this.canvas.onmousemove;
    document.getElementById("infobox").onmousedown = this.canvas.onmousedown;
    document.getElementById("infobox").onmouseup = this.canvas.onmouseup;
    document.getElementById("infobox").onmouseout = this.canvas.onmouseout;
    document.getElementById("infobox").onclick = this.canvas.onclick;
    document.getElementById("infobox").addEventListener('DOMMouseScroll', scrollListener, false);

    window.onresize = function(evt) {
        // Update canvas dimension and redraw
        clearTimeout(timer_event);
        function resize_canvas() {
            var container = document.getElementById('view-area');
            var c = document.getElementById('maincanvas');
            c.width = container.clientWidth - 1;
            c.height = container.clientHeight - 1;
            app.painter.onresize();
        }
        timer_event = setTimeout(resize_canvas, 10);
    }
}
;
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//

;
