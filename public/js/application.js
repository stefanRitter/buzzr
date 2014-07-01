(function(Q,T,s){'use strict';function z(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.15/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function $a(b){if(null==b||Aa(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:x(b)||M(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d;if(b)if(D(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==r)b.forEach(a,c);else if($a(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Ob(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Qc(b,
a,c){for(var d=Ob(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Pb(b){return function(a,c){b(c,a)}}function ab(){for(var b=ia.length,a;b;){b--;a=ia[b].charCodeAt(0);if(57==a)return ia[b]="A",ia.join("");if(90==a)ia[b]="0";else return ia[b]=String.fromCharCode(a+1),ia.join("")}ia.unshift("0");return ia.join("")}function Qb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function v(b){var a=b.$$hashKey;r(arguments,function(a){a!==b&&r(a,function(a,c){b[c]=a})});Qb(b,a);return b}function R(b){return parseInt(b,
10)}function Rb(b,a){return v(new (v(function(){},{prototype:b})),a)}function B(){}function Ba(b){return b}function Y(b){return function(){return b}}function E(b){return"undefined"===typeof b}function u(b){return"undefined"!==typeof b}function W(b){return null!=b&&"object"===typeof b}function x(b){return"string"===typeof b}function ub(b){return"number"===typeof b}function Ma(b){return"[object Date]"===ta.call(b)}function M(b){return"[object Array]"===ta.call(b)}function D(b){return"function"===typeof b}
function bb(b){return"[object RegExp]"===ta.call(b)}function Aa(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Rc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Sc(b,a,c){var d=[];r(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function cb(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Na(b,a){var c=cb(b,a);0<=c&&b.splice(c,1);return a}function $(b,a){if(Aa(b)||b&&b.$evalAsync&&b.$watch)throw Oa("cpws");
if(a){if(b===a)throw Oa("cpi");if(M(b))for(var c=a.length=0;c<b.length;c++)a.push($(b[c]));else{c=a.$$hashKey;r(a,function(b,c){delete a[c]});for(var d in b)a[d]=$(b[d]);Qb(a,c)}}else(a=b)&&(M(b)?a=$(b,[]):Ma(b)?a=new Date(b.getTime()):bb(b)?a=RegExp(b.source):W(b)&&(a=$(b,{})));return a}function Sb(b,a){a=a||{};for(var c in b)!b.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a}function ua(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;
var c=typeof b,d;if(c==typeof a&&"object"==c)if(M(b)){if(!M(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ua(b[d],a[d]))return!1;return!0}}else{if(Ma(b))return Ma(a)&&b.getTime()==a.getTime();if(bb(b)&&bb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Aa(b)||Aa(a)||M(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!D(b[d])){if(!ua(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!D(a[d]))return!1;
return!0}return!1}function Tb(){return T.securityPolicy&&T.securityPolicy.isActive||T.querySelector&&!(!T.querySelector("[ng-csp]")&&!T.querySelector("[data-ng-csp]"))}function db(b,a){var c=2<arguments.length?va.call(arguments,2):[];return!D(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(va.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Tc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=
s:Aa(a)?c="$WINDOW":a&&T===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function oa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,Tc,a?"  ":null)}function Ub(b){return x(b)?JSON.parse(b):b}function Pa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=O(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function fa(b){b=w(b).clone();try{b.empty()}catch(a){}var c=w("<div>").append(b).html();try{return 3===b[0].nodeType?O(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
function(a,b){return"<"+O(b)})}catch(d){return O(c)}}function Vb(b){try{return decodeURIComponent(b)}catch(a){}}function Wb(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.split("="),d=Vb(c[0]),u(d)&&(b=u(c[1])?Vb(c[1]):!0,a[d]?M(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Xb(b){var a=[];r(b,function(b,d){M(b)?r(b,function(b){a.push(wa(d,!0)+(!0===b?"":"="+wa(b,!0)))}):a.push(wa(d,!0)+(!0===b?"":"="+wa(b,!0)))});return a.length?a.join("&"):""}function vb(b){return wa(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function wa(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Uc(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;r(g,function(a){g[a]=!0;c(T.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(r(b.querySelectorAll("."+a),c),r(b.querySelectorAll("."+
a+"\\:"),c),r(b.querySelectorAll("["+a+"]"),c))});r(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):r(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}function Yb(b,a){var c=function(){b=w(b);if(b.injector()){var c=b[0]===T?"document":fa(b);throw Oa("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=Zb(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",
function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(Q&&!d.test(Q.name))return c();Q.name=Q.name.replace(d,"");Ca.resumeBootstrap=function(b){r(b,function(b){a.push(b)});c()}}function eb(b,a){a=a||"_";return b.replace(Vc,function(b,d){return(d?a:"")+b.toLowerCase()})}function wb(b,a,c){if(!b)throw Oa("areq",a||"?",c||"required");return b}function Qa(b,a,c){c&&M(b)&&(b=b[b.length-1]);wb(D(b),a,"not a function, got "+(b&&"object"==typeof b?
b.constructor.name||"Object":typeof b));return b}function xa(b,a){if("hasOwnProperty"===b)throw Oa("badname",a);}function $b(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&D(b)?db(e,b):b}function xb(b){var a=b[0];b=b[b.length-1];if(a===b)return w(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return w(c)}function Wc(b){var a=z("$injector"),c=z("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||z;return b.module||
(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!f)throw a("nomod",e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide",
"constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};g&&l(g);return n}())}}())}function Xc(b){v(b,{bootstrap:Yb,copy:$,extend:v,equals:ua,element:w,forEach:r,injector:Zb,noop:B,bind:db,toJson:oa,fromJson:Ub,identity:Ba,isUndefined:E,isDefined:u,isString:x,isFunction:D,isObject:W,isNumber:ub,isElement:Rc,isArray:M,
version:Yc,isDate:Ma,lowercase:O,uppercase:Da,callbacks:{counter:0},$$minErr:z,$$csp:Tb});Ra=Wc(Q);try{Ra("ngLocale")}catch(a){Ra("ngLocale",[]).provider("$locale",Zc)}Ra("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:$c});a.provider("$compile",ac).directive({a:ad,input:bc,textarea:bc,form:bd,script:cd,select:dd,style:ed,option:fd,ngBind:gd,ngBindHtml:hd,ngBindTemplate:id,ngClass:jd,ngClassEven:kd,ngClassOdd:ld,ngCloak:md,ngController:nd,ngForm:od,ngHide:pd,ngIf:qd,ngInclude:rd,
ngInit:sd,ngNonBindable:td,ngPluralize:ud,ngRepeat:vd,ngShow:wd,ngStyle:xd,ngSwitch:yd,ngSwitchWhen:zd,ngSwitchDefault:Ad,ngOptions:Bd,ngTransclude:Cd,ngModel:Dd,ngList:Ed,ngChange:Fd,required:cc,ngRequired:cc,ngValue:Gd}).directive({ngInclude:Hd}).directive(yb).directive(dc);a.provider({$anchorScroll:Id,$animate:Jd,$browser:Kd,$cacheFactory:Ld,$controller:Md,$document:Nd,$exceptionHandler:Od,$filter:ec,$interpolate:Pd,$interval:Qd,$http:Rd,$httpBackend:Sd,$location:Td,$log:Ud,$parse:Vd,$rootScope:Wd,
$q:Xd,$sce:Yd,$sceDelegate:Zd,$sniffer:$d,$templateCache:ae,$timeout:be,$window:ce,$$rAF:de,$$asyncCallback:ee})}])}function Sa(b){return b.replace(fe,function(a,b,d,e){return e?d.toUpperCase():d}).replace(ge,"Moz$1")}function zb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],m=a,k,l,n,q,p,t;if(!d||null!=b)for(;e.length;)for(k=e.shift(),l=0,n=k.length;l<n;l++)for(q=w(k[l]),m?q.triggerHandler("$destroy"):m=!m,p=0,q=(t=q.children()).length;p<q;p++)e.push(Ea(t[p]));return f.apply(this,arguments)}
var f=Ea.fn[b],f=f.$original||f;e.$original=f;Ea.fn[b]=e}function L(b){if(b instanceof L)return b;x(b)&&(b=aa(b));if(!(this instanceof L)){if(x(b)&&"<"!=b.charAt(0))throw Ab("nosel");return new L(b)}if(x(b)){var a=T.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);Bb(this,a.childNodes);w(T.createDocumentFragment()).append(this)}else Bb(this,b)}function Cb(b){return b.cloneNode(!0)}function Fa(b){fc(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Fa(b[a])}function gc(b,
a,c,d){if(u(d))throw Ab("offargs");var e=ja(b,"events");ja(b,"handle")&&(E(a)?r(e,function(a,c){Db(b,c,a);delete e[c]}):r(a.split(" "),function(a){E(c)?(Db(b,a,e[a]),delete e[a]):Na(e[a]||[],c)}))}function fc(b,a){var c=b[fb],d=Ta[c];d&&(a?delete Ta[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),gc(b)),delete Ta[c],b[fb]=s))}function ja(b,a,c){var d=b[fb],d=Ta[d||-1];if(u(c))d||(b[fb]=d=++he,d=Ta[d]={}),d[a]=c;else return d&&d[a]}function hc(b,a,c){var d=ja(b,"data"),e=u(c),f=!e&&
u(a),g=f&&!W(a);d||g||ja(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];v(d,a)}else return d}function Eb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function gb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",aa((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+aa(a)+" "," ")))})}function hb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ");r(a.split(" "),function(a){a=aa(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",aa(c))}}function Bb(b,a){if(a){a=a.nodeName||!u(a.length)||Aa(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function ic(b,a){return ib(b,"$"+(a||"ngController")+"Controller")}function ib(b,a,c){b=w(b);9==b[0].nodeType&&(b=b.find("html"));for(a=M(a)?a:[a];b.length;){for(var d=b[0],e=0,f=a.length;e<f;e++)if((c=b.data(a[e]))!==s)return c;b=w(d.parentNode||11===d.nodeType&&d.host)}}function jc(b){for(var a=
0,c=b.childNodes;a<c.length;a++)Fa(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function kc(b,a){var c=jb[a.toLowerCase()];return c&&lc[b.nodeName]&&c}function ie(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||T);if(E(c.defaultPrevented)){var f=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=
function(){return c.defaultPrevented||!1===c.returnValue};var g=Sb(a[e||c.type]||[]);r(g,function(a){a.call(b,c)});8>=P?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ga(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===s&&(c=b.$$hashKey=ab()):c=b;return a+":"+c}function Ua(b){r(b,this.put,this)}function mc(b){var a,c;"function"==
typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(je,""),c=c.match(ke),r(c[1].split(le),function(b){b.replace(me,function(b,c,d){a.push(d)})})),b.$inject=a):M(b)?(c=b.length-1,Qa(b[c],"fn"),a=b.slice(0,c)):Qa(b,"fn",!0);return a}function Zb(b){function a(a){return function(b,c){if(W(b))r(b,Pb(a));else return a(b,c)}}function c(a,b){xa(a,"service");if(D(b)||M(b))b=n.instantiate(b);if(!b.$get)throw Va("pget",a);return l[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],
c,d,f,h;r(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(x(a))for(c=Ra(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,h=d.length;f<h;f++){var g=d[f],m=n.get(g[0]);m[g[1]].apply(m,g[2])}else D(a)?b.push(n.invoke(a)):M(a)?b.push(n.invoke(a)):Qa(a,"module")}catch(l){throw M(a)&&(a=a[a.length-1]),l.message&&(l.stack&&-1==l.stack.indexOf(l.message))&&(l=l.message+"\n"+l.stack),Va("modulerr",a,l.stack||l.message||l);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===
g)throw Va("cdep",m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=g,a[d]=b(d)}catch(e){throw a[d]===g&&delete a[d],e;}finally{m.shift()}}function d(a,b,e){var f=[],h=mc(a),g,k,m;k=0;for(g=h.length;k<g;k++){m=h[k];if("string"!==typeof m)throw Va("itkn",m);f.push(e&&e.hasOwnProperty(m)?e[m]:c(m))}a.$inject||(a=a[g]);return a.apply(b,f)}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(M(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return W(e)||D(e)?e:c},get:c,
annotate:mc,has:function(b){return l.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}var g={},h="Provider",m=[],k=new Ua,l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,Y(b))}),constant:a(function(a,b){xa(a,"constant");l[a]=b;q[a]=b}),decorator:function(a,b){var c=n.get(a+h),d=c.$get;c.$get=function(){var a=p.invoke(d,c);return p.invoke(b,null,{$delegate:a})}}}},n=l.$injector=f(l,function(){throw Va("unpr",
m.join(" <- "));}),q={},p=q.$injector=f(q,function(a){a=n.get(a+h);return p.invoke(a.$get,a)});r(e(b),function(a){p.invoke(a||B)});return p}function Id(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;r(a,function(a){b||"a"!==O(a.nodeName)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):
a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function ee(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function ne(b,a,c,d){function e(a){try{a.apply(null,va.call(arguments,1))}finally{if(t--,0===t)for(;H.length;)try{H.pop()()}catch(b){c.error(b)}}}function f(a,b){(function kb(){r(C,function(a){a()});A=b(kb,a)})()}function g(){y=null;J!=h.url()&&(J=h.url(),
r(ba,function(a){a(h.url())}))}var h=this,m=a[0],k=b.location,l=b.history,n=b.setTimeout,q=b.clearTimeout,p={};h.isMock=!1;var t=0,H=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){t++};h.notifyWhenNoOutstandingRequests=function(a){r(C,function(a){a()});0===t?a():H.push(a)};var C=[],A;h.addPollFn=function(a){E(A)&&f(100,n);C.push(a);return a};var J=k.href,F=a.find("base"),y=null;h.url=function(a,c){k!==b.location&&(k=b.location);l!==b.history&&(l=b.history);if(a){if(J!=
a)return J=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),F.attr("href",F.attr("href"))):(y=a,c?k.replace(a):k.href=a),h}else return y||k.href.replace(/%27/g,"'")};var ba=[],S=!1;h.onUrlChange=function(a){if(!S){if(d.history)w(b).on("popstate",g);if(d.hashchange)w(b).on("hashchange",g);else h.addPollFn(g);S=!0}ba.push(a);return a};h.baseHref=function(){var a=F.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var N={},Z="",U=h.baseHref();h.cookies=function(a,b){var d,
e,f,h;if(a)b===s?m.cookie=escape(a)+"=;path="+U+";expires=Thu, 01 Jan 1970 00:00:00 GMT":x(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+U).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==Z)for(Z=m.cookie,d=Z.split("; "),N={},f=0;f<d.length;f++)e=d[f],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),N[a]===s&&(N[a]=unescape(e.substring(h+1))));return N}};h.defer=function(a,b){var c;t++;c=n(function(){delete p[c];
e(a)},b||0);p[c]=!0;return c};h.defer.cancel=function(a){return p[a]?(delete p[a],q(a),e(B),!0):!1}}function Kd(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new ne(b,d,a,c)}]}function Ld(){this.$get=function(){function b(b,d){function e(a){a!=n&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw z("$cacheFactory")("iid",b);var g=0,h=v({},d,{id:b}),m={},k=d&&d.capacity||Number.MAX_VALUE,l={},n=null,q=null;
return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!E(b))return a in m||g++,m[a]=b,g>k&&this.remove(q.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;b==n&&(n=b.p);b==q&&(q=b.n);f(b.n,b.p);delete l[a]}delete m[a];g--},removeAll:function(){m={};g=0;l={};n=q=null},destroy:function(){l=h=m=null;delete a[b]},info:function(){return v({},h,{size:g})}}}var a={};
b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function ae(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function ac(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,f=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,g=/^<\s*(tr|th|td|thead|tbody|tfoot)(\s+[^>]*)?>/i,h=/^(on[a-z]+|formaction)$/;this.directive=function k(a,e){xa(a,"directive");x(a)?(wb(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+
d,["$injector","$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var h=b.invoke(c);D(h)?h={compile:Y(h)}:!h.compile&&h.link&&(h.compile=Y(h.link));h.priority=h.priority||0;h.index=f;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"A";e.push(h)}catch(g){d(g)}});return e}])),c[a].push(e)):r(a,Pb(k));return this};this.aHrefSanitizationWhitelist=function(b){return u(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(b){return u(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,n,q,p,t,H,C,A,J,F,y){function ba(a,b,c,d,e){a instanceof w||(a=w(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=w(b).wrap("<span></span>").parent()[0])});var f=N(a,b,a,c,d,e);S(a,"ng-scope");return function(b,
c,d){wb(b,"scope");var e=c?Ha.clone.call(a):a;r(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var h=e.length;d<h;d++){var g=e[d].nodeType;1!==g&&9!==g||e.eq(d).data("$scope",b)}c&&c(e,b);f&&f(b,e,e);return e}}function S(a,b){try{a.addClass(b)}catch(c){}}function N(a,b,c,d,e,f){function h(a,c,d,e){var f,k,l,n,p,t,q;f=c.length;var ca=Array(f);for(p=0;p<f;p++)ca[p]=c[p];q=p=0;for(t=g.length;p<t;q++)k=ca[q],c=g[p++],f=g[p++],l=w(k),c?(c.scope?(n=a.$new(),l.data("$scope",n)):n=a,(l=c.transclude)||
!e&&b?c(f,n,k,d,Z(a,l||b)):c(f,n,k,d,e)):f&&f(a,k.childNodes,s,e)}for(var g=[],k,l,n,p,t=0;t<a.length;t++)k=new Fb,l=U(a[t],[],k,0===t?d:s,e),(f=l.length?Wa(l,a[t],k,b,c,null,[],[],f):null)&&f.scope&&S(w(a[t]),"ng-scope"),k=f&&f.terminal||!(n=a[t].childNodes)||!n.length?null:N(n,f?f.transclude:b),g.push(f,k),p=p||f||k,f=null;return p?h:null}function Z(a,b){return function(c,d,e){var f=!1;c||(c=a.$new(),f=c.$$transcluded=!0);d=b(c,d,e);if(f)d.on("$destroy",db(c,c.$destroy));return d}}function U(a,
b,c,d,h){var g=c.$attr,k;switch(a.nodeType){case 1:u(b,ka(Ia(a).toLowerCase()),"E",d,h);var l,n,p;k=a.attributes;for(var t=0,q=k&&k.length;t<q;t++){var H=!1,C=!1;l=k[t];if(!P||8<=P||l.specified){n=l.name;p=ka(n);la.test(p)&&(n=eb(p.substr(6),"-"));var J=p.replace(/(Start|End)$/,"");p===J+"Start"&&(H=n,C=n.substr(0,n.length-5)+"end",n=n.substr(0,n.length-6));p=ka(n.toLowerCase());g[p]=n;c[p]=l=aa(l.value);kc(a,p)&&(c[p]=!0);ga(a,b,l,p);u(b,p,"A",d,h,H,C)}}a=a.className;if(x(a)&&""!==a)for(;k=f.exec(a);)p=
ka(k[2]),u(b,p,"C",d,h)&&(c[p]=aa(k[3])),a=a.substr(k.index+k[0].length);break;case 3:L(b,a.nodeValue);break;case 8:try{if(k=e.exec(a.nodeValue))p=ka(k[1]),u(b,p,"M",d,h)&&(c[p]=aa(k[2]))}catch(y){}}b.sort(z);return b}function I(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ha("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return w(d)}function ya(a,b,c){return function(d,e,f,h,g){e=I(e[0],
b,c);return a(d,e,f,h,g)}}function Wa(a,c,d,e,f,h,g,k,p){function q(a,b,c,d){if(a){c&&(a=ya(a,c,d));a.require=G.require;if(N===G||G.$$isolateScope)a=nc(a,{isolateScope:!0});g.push(a)}if(b){c&&(b=ya(b,c,d));b.require=G.require;if(N===G||G.$$isolateScope)b=nc(b,{isolateScope:!0});k.push(b)}}function C(a,b,c){var d,e="data",f=!1;if(x(a)){for(;"^"==(d=a.charAt(0))||"?"==d;)a=a.substr(1),"^"==d&&(e="inheritedData"),f=f||"?"==d;d=null;c&&"data"===e&&(d=c[a]);d=d||b[e]("$"+a+"Controller");if(!d&&!f)throw ha("ctreq",
a,ga);}else M(a)&&(d=[],r(a,function(a){d.push(C(a,b,c))}));return d}function J(a,e,f,h,p){function q(a,b){var c;2>arguments.length&&(b=a,a=s);Ja&&(c=ya);return p(a,b,c)}var y,ca,A,I,ba,U,ya={},u;y=c===f?d:Sb(d,new Fb(w(f),d.$attr));ca=y.$$element;if(N){var oe=/^\s*([@=&])(\??)\s*(\w*)\s*$/;h=w(f);U=e.$new(!0);Z&&Z===N.$$originalDirective?h.data("$isolateScope",U):h.data("$isolateScopeNoTemplate",U);S(h,"ng-isolate-scope");r(N.scope,function(a,c){var d=a.match(oe)||[],f=d[3]||c,h="?"==d[2],d=d[1],
g,k,p,n;U.$$isolateBindings[c]=d+f;switch(d){case "@":y.$observe(f,function(a){U[c]=a});y.$$observers[f].$$scope=e;y[f]&&(U[c]=b(y[f])(e));break;case "=":if(h&&!y[f])break;k=t(y[f]);n=k.literal?ua:function(a,b){return a===b};p=k.assign||function(){g=U[c]=k(e);throw ha("nonassign",y[f],N.name);};g=U[c]=k(e);U.$watch(function(){var a=k(e);n(a,U[c])||(n(a,g)?p(e,a=U[c]):U[c]=a);return g=a},null,k.literal);break;case "&":k=t(y[f]);U[c]=function(a){return k(e,a)};break;default:throw ha("iscp",N.name,c,
a);}})}u=p&&q;F&&r(F,function(a){var b={$scope:a===N||a.$$isolateScope?U:e,$element:ca,$attrs:y,$transclude:u},c;ba=a.controller;"@"==ba&&(ba=y[a.name]);c=H(ba,b);ya[a.name]=c;Ja||ca.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});h=0;for(A=g.length;h<A;h++)try{I=g[h],I(I.isolateScope?U:e,ca,y,I.require&&C(I.require,ca,ya),u)}catch(v){n(v,fa(ca))}h=e;N&&(N.template||null===N.templateUrl)&&(h=U);a&&a(h,f.childNodes,s,p);for(h=k.length-1;0<=h;h--)try{I=k[h],I(I.isolateScope?
U:e,ca,y,I.require&&C(I.require,ca,ya),u)}catch(K){n(K,fa(ca))}}p=p||{};for(var y=-Number.MAX_VALUE,A,F=p.controllerDirectives,N=p.newIsolateScopeDirective,Z=p.templateDirective,u=p.nonTlbTranscludeDirective,Wa=!1,Ja=p.hasElementTranscludeDirective,K=d.$$element=w(c),G,ga,v,z=e,L,la=0,P=a.length;la<P;la++){G=a[la];var R=G.$$start,V=G.$$end;R&&(K=I(c,R,V));v=s;if(y>G.priority)break;if(v=G.scope)A=A||G,G.templateUrl||(Q("new/isolated scope",N,G,K),W(v)&&(N=G));ga=G.name;!G.templateUrl&&G.controller&&
(v=G.controller,F=F||{},Q("'"+ga+"' controller",F[ga],G,K),F[ga]=G);if(v=G.transclude)Wa=!0,G.$$tlb||(Q("transclusion",u,G,K),u=G),"element"==v?(Ja=!0,y=G.priority,v=I(c,R,V),K=d.$$element=w(T.createComment(" "+ga+": "+d[ga]+" ")),c=K[0],lb(f,w(va.call(v,0)),c),z=ba(v,e,y,h&&h.name,{nonTlbTranscludeDirective:u})):(v=w(Cb(c)).contents(),K.empty(),z=ba(v,e));if(G.template)if(Q("template",Z,G,K),Z=G,v=D(G.template)?G.template(K,d):G.template,v=oc(v),G.replace){h=G;v=E(v);c=v[0];if(1!=v.length||1!==c.nodeType)throw ha("tplrt",
ga,"");lb(f,K,c);P={$attr:{}};v=U(c,[],P);var X=a.splice(la+1,a.length-(la+1));N&&kb(v);a=a.concat(v).concat(X);B(d,P);P=a.length}else K.html(v);if(G.templateUrl)Q("template",Z,G,K),Z=G,G.replace&&(h=G),J=O(a.splice(la,a.length-la),K,d,f,z,g,k,{controllerDirectives:F,newIsolateScopeDirective:N,templateDirective:Z,nonTlbTranscludeDirective:u}),P=a.length;else if(G.compile)try{L=G.compile(K,d,z),D(L)?q(null,L,R,V):L&&q(L.pre,L.post,R,V)}catch(Y){n(Y,fa(K))}G.terminal&&(J.terminal=!0,y=Math.max(y,G.priority))}J.scope=
A&&!0===A.scope;J.transclude=Wa&&z;p.hasElementTranscludeDirective=Ja;return J}function kb(a){for(var b=0,c=a.length;b<c;b++)a[b]=Rb(a[b],{$$isolateScope:!0})}function u(b,e,f,h,g,l,p){if(e===g)return null;g=null;if(c.hasOwnProperty(e)){var t;e=a.get(e+d);for(var q=0,H=e.length;q<H;q++)try{t=e[q],(h===s||h>t.priority)&&-1!=t.restrict.indexOf(f)&&(l&&(t=Rb(t,{$$start:l,$$end:p})),b.push(t),g=t)}catch(y){n(y)}}return g}function B(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&
(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(S(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function E(a){var b;a=aa(a);if(b=g.exec(a)){b=b[1].toLowerCase();a=w("<table>"+a+"</table>");if(/(thead|tbody|tfoot)/.test(b))return a.children(b);a=a.children("tbody");return"tr"===b?a.children("tr"):a.children("tr").contents()}return w("<div>"+
a+"</div>").contents()}function O(a,b,c,d,e,f,h,g){var k=[],l,n,t=b[0],H=a.shift(),y=v({},H,{templateUrl:null,transclude:null,replace:null,$$originalDirective:H}),C=D(H.templateUrl)?H.templateUrl(b,c):H.templateUrl;b.empty();q.get(J.getTrustedResourceUrl(C),{cache:p}).success(function(p){var q,J;p=oc(p);if(H.replace){p=E(p);q=p[0];if(1!=p.length||1!==q.nodeType)throw ha("tplrt",H.name,C);p={$attr:{}};lb(d,b,q);var A=U(q,[],p);W(H.scope)&&kb(A);a=A.concat(a);B(c,p)}else q=t,b.html(p);a.unshift(y);
l=Wa(a,q,c,e,b,H,f,h,g);r(d,function(a,c){a==q&&(d[c]=b[0])});for(n=N(b[0].childNodes,e);k.length;){p=k.shift();J=k.shift();var I=k.shift(),F=k.shift(),A=b[0];if(J!==t){var ba=J.className;g.hasElementTranscludeDirective&&H.replace||(A=Cb(q));lb(I,w(J),A);S(w(A),ba)}J=l.transclude?Z(p,l.transclude):F;l(n,p,A,d,J)}k=null}).error(function(a,b,c,d){throw ha("tpload",d.url);});return function(a,b,c,d,e){k?(k.push(b),k.push(c),k.push(d),k.push(e)):l(n,b,c,d,e)}}function z(a,b){var c=b.priority-a.priority;
return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Q(a,b,c,d){if(b)throw ha("multidir",b.name,c.name,a,fa(d));}function L(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:Y(function(a,b){var c=b.parent(),e=c.data("$binding")||[];e.push(d);S(c.data("$binding",e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}function Ja(a,b){if("srcdoc"==b)return J.HTML;var c=Ia(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return J.RESOURCE_URL}
function ga(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===Ia(a))throw ha("selmulti",fa(a));c.push({priority:100,compile:function(){return{pre:function(c,d,g){d=g.$$observers||(g.$$observers={});if(h.test(e))throw ha("nodomevents");if(f=b(g[e],!0,Ja(a,e)))g[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)})}}}})}}function lb(a,b,c){var d=b[0],e=b.length,f=d.parentNode,h,g;if(a)for(h=
0,g=a.length;h<g;h++)if(a[h]==d){a[h++]=c;g=h+e-1;for(var k=a.length;h<k;h++,g++)g<k?a[h]=a[g]:delete a[h];a.length-=e-1;break}f&&f.replaceChild(c,d);a=T.createDocumentFragment();a.appendChild(d);c[w.expando]=d[w.expando];d=1;for(e=b.length;d<e;d++)f=b[d],w(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function nc(a,b){return v(function(){return a.apply(null,arguments)},a,b)}var Fb=function(a,b){this.$$element=a;this.$attr=b||{}};Fb.prototype={$normalize:ka,$addClass:function(a){a&&0<
a.length&&F.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&F.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=pc(a,b),d=pc(b,a);0===c.length?F.removeClass(this.$$element,d):0===d.length?F.addClass(this.$$element,c):F.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=kc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=eb(a,"-"));e=Ia(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&
"src"===a)this[a]=b=y(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&r(c[a],function(a){try{a(b)}catch(c){n(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);C.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var R=b.startSymbol(),V=b.endSymbol(),oc="{{"==R||"}}"==V?Ba:function(a){return a.replace(/\{\{/g,R).replace(/}}/g,V)},la=/^ngAttr[A-Z]/;return ba}]}function ka(b){return Sa(b.replace(pe,
""))}function pc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Md(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){xa(a,"controller");W(a)?v(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,h,m;x(e)&&(g=e.match(a),h=g[1],m=g[3],e=b.hasOwnProperty(h)?b[h]:$b(f.$scope,h,!0)||$b(d,h,!0),Qa(e,h,!0));g=c.instantiate(e,f);
if(m){if(!f||"object"!=typeof f.$scope)throw z("$controller")("noscp",h||e.name,m);f.$scope[m]=g}return g}}]}function Nd(){this.$get=["$window",function(b){return w(b.document)}]}function Od(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function qc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=O(aa(b.substr(0,e)));d=aa(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function rc(b){var a=W(b)?b:s;return function(c){a||
(a=qc(b));return c?a[O(c)]||null:a}}function sc(b,a,c){if(D(c))return c(b,a);r(c,function(c){b=c(b,a)});return b}function Rd(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){x(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Ub(d)));return d}],transformRequest:[function(a){return W(a)&&"[object File]"!==ta.call(a)&&"[object Blob]"!==ta.call(a)?oa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:$(d),put:$(d),patch:$(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,q){function p(a){function c(a){var b=v({},a,{data:sc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?b:n.reject(b)}var d={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},f=function(a){function b(a){var c;
r(a,function(b,d){D(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=v({},a.headers),f,h,c=v({},c.common,c[O(a.method)]);b(c);b(d);a:for(f in c){a=O(f);for(h in d)if(O(h)===a)continue a;d[f]=c[f]}return d}(a);v(d,a);d.headers=f;d.method=Da(d.method);(a=Gb(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:s)&&(f[d.xsrfHeaderName||e.xsrfHeaderName]=a);var h=[function(a){f=a.headers;var b=sc(a.data,rc(f),a.transformRequest);E(a.data)&&r(f,function(a,b){"content-type"===O(b)&&delete f[b]});
E(a.withCredentials)&&!E(e.withCredentials)&&(a.withCredentials=e.withCredentials);return t(a,b,f).then(c,c)},s],g=n.when(d);for(r(A,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&h.push(a.response,a.responseError)});h.length;){a=h.shift();var k=h.shift(),g=g.then(a,k)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,d)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,d)});return g};
return g}function t(b,c,f){function g(a,b,c){A&&(200<=a&&300>a?A.put(s,[a,b,qc(c)]):A.remove(s));k(b,a,c);d.$$phase||d.$apply()}function k(a,c,d){c=Math.max(c,0);(200<=c&&300>c?t.resolve:t.reject)({data:a,status:c,headers:rc(d),config:b})}function m(){var a=cb(p.pendingRequests,b);-1!==a&&p.pendingRequests.splice(a,1)}var t=n.defer(),q=t.promise,A,r,s=H(b.url,b.params);p.pendingRequests.push(b);q.then(m,m);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(A=W(b.cache)?b.cache:W(e.cache)?e.cache:
C);if(A)if(r=A.get(s),u(r)){if(r.then)return r.then(m,m),r;M(r)?k(r[1],r[0],$(r[2])):k(r,200,{})}else A.put(s,q);E(r)&&a(b.method,s,c,g,f,b.timeout,b.withCredentials,b.responseType);return q}function H(a,b){if(!b)return a;var c=[];Qc(b,function(a,b){null===a||E(a)||(M(a)||(a=[a]),r(a,function(a){W(a)&&(a=oa(a));c.push(wa(b)+"="+wa(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var C=c("$http"),A=[];r(f,function(a){A.unshift(x(a)?q.get(a):q.invoke(a))});r(g,function(a,
b){var c=x(a)?q.get(a):q.invoke(a);A.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});p.pendingRequests=[];(function(a){r(arguments,function(a){p[a]=function(b,c){return p(v(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){p[a]=function(b,c,d){return p(v(d||{},{method:a,url:b,data:c}))}})})("post","put");p.defaults=e;return p}]}function qe(b){if(8>=P&&(!b.match(/^(get|post|head|put|delete|options)$/i)||
!Q.XMLHttpRequest))return new Q.ActiveXObject("Microsoft.XMLHTTP");if(Q.XMLHttpRequest)return new Q.XMLHttpRequest;throw z("$httpBackend")("noxhr");}function Sd(){this.$get=["$browser","$window","$document",function(b,a,c){return re(b,qe,b.defer,a.angular.callbacks,c[0])}]}function re(b,a,c,d,e){function f(a,b){var c=e.createElement("script"),d=function(){c.onreadystatechange=c.onload=c.onerror=null;e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;P&&8>=P?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&
d()}:c.onload=c.onerror=function(){d()};e.body.appendChild(c);return d}var g=-1;return function(e,m,k,l,n,q,p,t){function H(){A=g;F&&F();y&&y.abort()}function C(a,d,e,f){S&&c.cancel(S);F=y=null;0===d&&(d=e?200:"file"==pa(m).protocol?404:0);a(1223==d?204:d,e,f);b.$$completeOutstandingRequest(B)}var A;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==O(e)){var J="_"+(d.counter++).toString(36);d[J]=function(a){d[J].data=a};var F=f(m.replace("JSON_CALLBACK","angular.callbacks."+J),function(){d[J].data?
C(l,200,d[J].data):C(l,A||-2);d[J]=Ca.noop})}else{var y=a(e);y.open(e,m,!0);r(n,function(a,b){u(a)&&y.setRequestHeader(b,a)});y.onreadystatechange=function(){if(y&&4==y.readyState){var a=null,b=null;A!==g&&(a=y.getAllResponseHeaders(),b="response"in y?y.response:y.responseText);C(l,A||y.status,b,a)}};p&&(y.withCredentials=!0);if(t)try{y.responseType=t}catch(s){if("json"!==t)throw s;}y.send(k||null)}if(0<q)var S=c(H,q);else q&&q.then&&q.then(H)}}function Pd(){var b="{{",a="}}";this.startSymbol=function(a){return a?
(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,k,l){for(var n,q,p=0,t=[],H=f.length,C=!1,A=[];p<H;)-1!=(n=f.indexOf(b,p))&&-1!=(q=f.indexOf(a,n+g))?(p!=n&&t.push(f.substring(p,n)),t.push(p=c(C=f.substring(n+g,q))),p.exp=C,p=q+h,C=!0):(p!=H&&t.push(f.substring(p)),p=H);(H=t.length)||(t.push(""),H=1);if(l&&1<t.length)throw tc("noconcat",f);if(!k||C)return A.length=H,p=function(a){try{for(var b=0,c=H,h;b<c;b++)"function"==
typeof(h=t[b])&&(h=h(a),h=l?e.getTrusted(l,h):e.valueOf(h),null===h||E(h)?h="":"string"!=typeof h&&(h=oa(h))),A[b]=h;return A.join("")}catch(g){a=tc("interr",f,g.toString()),d(a)}},p.exp=f,p.parts=t,p}var g=b.length,h=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function Qd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,h,m){var k=a.setInterval,l=a.clearInterval,n=c.defer(),q=n.promise,p=0,t=u(m)&&!m;h=u(h)?h:0;q.then(null,null,d);
q.$$intervalId=k(function(){n.notify(p++);0<h&&p>=h&&(n.resolve(p),l(q.$$intervalId),delete e[q.$$intervalId]);t||b.$apply()},g);e[q.$$intervalId]=n;return q}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function Zc(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",
gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a",
"short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function uc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=vb(b[a]);return b.join("/")}function vc(b,a,c){b=pa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=R(b.port)||se[b.protocol]||null}function wc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=pa(b,c);a.$$path=decodeURIComponent(d&&
"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=Wb(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ma(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Xa(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Hb(b){return b.substr(0,Xa(b).lastIndexOf("/")+1)}function xc(b,a){this.$$html5=!0;a=a||"";var c=Hb(b);vc(b,this,b);this.$$parse=function(a){var e=ma(c,a);if(!x(e))throw Ib("ipthprfx",
a,c);wc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Xb(this.$$search),b=this.$$hash?"#"+vb(this.$$hash):"";this.$$url=uc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=ma(b,d))!==s)return d=e,(e=ma(a,e))!==s?c+(ma("/",e)||e):b+d;if((e=ma(c,d))!==s)return c+e;if(c==d+"/")return c}}function Jb(b,a){var c=Hb(b);vc(b,this,b);this.$$parse=function(d){var e=ma(b,d)||ma(c,d),e="#"==e.charAt(0)?ma(a,e):
this.$$html5?e:"";if(!x(e))throw Ib("ihshprfx",d,a);wc(e,this,b);d=this.$$path;var f=/^\/?.*?:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Xb(this.$$search),e=this.$$hash?"#"+vb(this.$$hash):"";this.$$url=uc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Xa(b)==Xa(a))return a}}function yc(b,a){this.$$html5=!0;Jb.apply(this,arguments);var c=Hb(b);
this.$$rewrite=function(d){var e;if(b==Xa(d))return d;if(e=ma(c,d))return b+a+e;if(c===d+"/")return c}}function mb(b){return function(){return this[b]}}function zc(b,a){return function(c){if(E(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Td(){var b="",a=!1;this.hashPrefix=function(a){return u(a)?(b=a,this):b};this.html5Mode=function(b){return u(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",
h.absUrl(),a)}var h,m=d.baseHref(),k=d.url();a?(m=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(m||"/"),e=e.history?xc:yc):(m=Xa(k),e=Jb);h=new e(m,"#"+b);h.$$parse(h.$$rewrite(k));f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=w(a.target);"a"!==O(b[0].nodeName);)if(b[0]===f[0]||!(b=b.parent())[0])return;var e=b.prop("href");W(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=pa(e.animVal).href);var g=h.$$rewrite(e);e&&(!b.attr("target")&&g&&!a.isDefaultPrevented())&&
(a.preventDefault(),g!=d.url()&&(h.$$parse(g),c.$apply(),Q.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var l=0;c.$watch(function(){var a=d.url(),b=h.$$replace;l&&a==h.absUrl()||(l++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?
h.$$parse(a):(d.url(h.absUrl(),b),g(a))}));h.$$replace=!1;return l});return h}]}function Ud(){var b=!0,a=this;this.debugEnabled=function(a){return u(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||B;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=
[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function da(b,a){if("constructor"===b)throw za("isecfld",a);return b}function Ya(b,a){if(b){if(b.constructor===b)throw za("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw za("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw za("isecdom",
a);}return b}function nb(b,a,c,d,e){e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=da(a.shift(),d);var h=b[f];h||(h={},b[f]=h);b=h;b.then&&e.unwrapPromises&&(qa(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)}f=da(a.shift(),d);return b[f]=c}function Ac(b,a,c,d,e,f,g){da(b,f);da(a,f);da(c,f);da(d,f);da(e,f);return g.unwrapPromises?function(h,g){var k=g&&g.hasOwnProperty(b)?g:h,l;if(null==k)return k;(k=k[b])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=
a})),k=k.$$v);if(!a)return k;if(null==k)return s;(k=k[a])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!c)return k;if(null==k)return s;(k=k[c])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!d)return k;if(null==k)return s;(k=k[d])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!e)return k;if(null==k)return s;(k=k[e])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);
return k}:function(f,g){var k=g&&g.hasOwnProperty(b)?g:f;if(null==k)return k;k=k[b];if(!a)return k;if(null==k)return s;k=k[a];if(!c)return k;if(null==k)return s;k=k[c];if(!d)return k;if(null==k)return s;k=k[d];return e?null==k?s:k=k[e]:k}}function te(b,a){da(b,a);return function(a,d){return null==a?s:(d&&d.hasOwnProperty(b)?d:a)[b]}}function ue(b,a,c){da(b,c);da(a,c);return function(c,e){if(null==c)return s;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==c?s:c[a]}}function Bc(b,a,c){if(Kb.hasOwnProperty(b))return Kb[b];
var d=b.split("."),e=d.length,f;if(a.unwrapPromises||1!==e)if(a.unwrapPromises||2!==e)if(a.csp)f=6>e?Ac(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var h=0,g;do g=Ac(d[h++],d[h++],d[h++],d[h++],d[h++],c,a)(b,f),f=s,b=g;while(h<e);return g};else{var g="var p;\n";r(d,function(b,d){da(b,c);g+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':
"")});var g=g+"return s;",h=new Function("s","k","pw",g);h.toString=Y(g);f=a.unwrapPromises?function(a,b){return h(a,b,qa)}:h}else f=ue(d[0],d[1],c);else f=te(d[0],c);"hasOwnProperty"!==b&&(Kb[b]=f);return f}function Vd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return u(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return u(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer",
"$log",function(c,d,e){a.csp=d.csp;qa=function(b){a.logPromiseWarnings&&!Cc.hasOwnProperty(b)&&(Cc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Lb(a);e=(new Za(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return B}}}]}function Xd(){this.$get=["$rootScope","$exceptionHandler",
function(b,a){return ve(function(a){b.$evalAsync(a)},a)}]}function ve(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],k,l;return l={resolve:function(a){if(g){var c=g;g=s;k=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],k.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(h(a))},notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,h){var l=e(),H=function(d){try{l.resolve((D(b)?
b:c)(d))}catch(e){l.reject(e),a(e)}},C=function(b){try{l.resolve((D(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},A=function(b){try{l.notify((D(h)?h:c)(b))}catch(d){a(d)}};g?g.push([H,C,A]):k.then(H,C,A);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var h=null;try{h=(a||c)()}catch(g){return b(g,!1)}return h&&D(h.then)?h.then(function(){return b(e,f)},function(a){return b(a,!1)}):
b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&D(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},h=function(c){return{then:function(f,h){var g=e();b(function(){try{g.resolve((D(h)?h:d)(c))}catch(b){g.reject(b),a(b)}});return g.promise}}};return{defer:e,reject:g,when:function(h,k,l,n){var q=e(),p,t=function(b){try{return(D(k)?k:c)(b)}catch(d){return a(d),
g(d)}},H=function(b){try{return(D(l)?l:d)(b)}catch(c){return a(c),g(c)}},C=function(b){try{return(D(n)?n:c)(b)}catch(d){a(d)}};b(function(){f(h).then(function(a){p||(p=!0,q.resolve(f(a).then(t,H,C)))},function(a){p||(p=!0,q.resolve(H(a)))},function(a){p||q.notify(C(a))})});return q.promise},all:function(a){var b=e(),c=0,d=M(a)?[]:{};r(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}
function de(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Wd(){var b=10,a=z("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&
(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function h(){this.$id=ab();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function m(b){if(q.$$phase)throw a("inprog",q.$$phase);q.$$phase=b}function k(a,b){var c=f(a);
Qa(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=ab());a["this"]=a;a.$$listeners={};a.$$listenerCount={};a.$parent=this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;
this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=k(a,"watch"),f=this.$$watchers,h={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!D(b)){var g=k(b||B,"listener");h.fn=function(a,b,c){g(c)}}if("string"==typeof a&&e.constant){var m=h.fn;h.fn=function(a,b,c){m.call(this,a,b,c);Na(f,h)}}f||(f=this.$$watchers=[]);f.unshift(h);return function(){Na(f,h);c=null}},$watchCollection:function(a,b){var c=this,d,e,h,g=1<b.length,
k=0,m=f(a),l=[],n={},q=!0,r=0;return this.$watch(function(){d=m(c);var a,b;if(W(d))if($a(d))for(e!==l&&(e=l,r=e.length=0,k++),a=d.length,r!==a&&(k++,e.length=r=a),b=0;b<a;b++)e[b]!==e[b]&&d[b]!==d[b]||e[b]===d[b]||(k++,e[b]=d[b]);else{e!==n&&(e=n={},r=0,k++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?e[b]!==d[b]&&(k++,e[b]=d[b]):(r++,e[b]=d[b],k++));if(r>a)for(b in k++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(r--,delete e[b])}else e!==d&&(e=d,k++);return k},function(){q?(q=
!1,b(d,d,c)):b(d,h,c);if(g)if(W(d))if($a(d)){h=Array(d.length);for(var a=0;a<d.length;a++)h[a]=d[a]}else for(a in h={},d)Dc.call(d,a)&&(h[a]=d[a]);else h=d})},$digest:function(){var d,f,h,g,k=this.$$asyncQueue,l=this.$$postDigestQueue,r,y,s=b,S,N=[],u,v,I;m("$digest");c=null;do{y=!1;for(S=this;k.length;){try{I=k.shift(),I.scope.$eval(I.expression)}catch(w){q.$$phase=null,e(w)}c=null}a:do{if(g=S.$$watchers)for(r=g.length;r--;)try{if(d=g[r])if((f=d.get(S))!==(h=d.last)&&!(d.eq?ua(f,h):"number"==typeof f&&
"number"==typeof h&&isNaN(f)&&isNaN(h)))y=!0,c=d,d.last=d.eq?$(f):f,d.fn(f,h===n?f:h,S),5>s&&(u=4-s,N[u]||(N[u]=[]),v=D(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,v+="; newVal: "+oa(f)+"; oldVal: "+oa(h),N[u].push(v));else if(d===c){y=!1;break a}}catch(x){q.$$phase=null,e(x)}if(!(g=S.$$childHead||S!==this&&S.$$nextSibling))for(;S!==this&&!(g=S.$$nextSibling);)S=S.$parent}while(S=g);if((y||k.length)&&!s--)throw q.$$phase=null,a("infdig",b,oa(N));}while(y||k.length);for(q.$$phase=null;l.length;)try{l.shift()()}catch(B){e(B)}},
$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==q&&(r(this.$$listenerCount,db(null,l,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=
null)}},$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){q.$$phase||q.$$asyncQueue.length||g.defer(function(){q.$$asyncQueue.length&&q.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{q.$$phase=null;try{q.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||
(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[cb(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,h=!1,g={name:a,targetScope:f,stopPropagation:function(){h=!0},preventDefault:function(){g.defaultPrevented=!0},defaultPrevented:!1},k=[g].concat(va.call(arguments,1)),l,m;do{d=f.$$listeners[a]||c;g.currentScope=f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(h)break;f=f.$parent}while(f);
return g},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},h=[f].concat(va.call(arguments,1)),g,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];g=0;for(k=d.length;g<k;g++)if(d[g])try{d[g].apply(null,h)}catch(l){e(l)}else d.splice(g,1),g--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};var q=new h;return q}]}function $c(){var b=
/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return u(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return u(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!P||8<=P)if(f=pa(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function we(b){if("self"===b)return b;if(x(b)){if(-1<b.indexOf("***"))throw ra("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,
"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(bb(b))return RegExp("^"+b.source+"$");throw ra("imatcher");}function Ec(b){var a=[];u(b)&&r(b,function(b){a.push(we(b))});return a}function Zd(){this.SCE_CONTEXTS=ea;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Ec(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Ec(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=
function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ra("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[ea.HTML]=d(f);g[ea.CSS]=d(f);g[ea.URL]=d(f);g[ea.JS]=d(f);g[ea.RESOURCE_URL]=d(g[ea.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw ra("icontext",a,b);if(null===b||b===
s||""===b)return b;if("string"!==typeof b)throw ra("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===ea.RESOURCE_URL){var f=pa(d.toString()),l,n,q=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Gb(f):b[l].exec(f.href)){q=!0;break}if(q)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Gb(f):a[l].exec(f.href)){q=!1;break}if(q)return d;throw ra("insecurl",d.toString());}if(c===
ea.HTML)return e(d);throw ra("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function Yd(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw ra("iequirks");var e=$(ea);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Ba);e.parseAs=
function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;r(ea,function(a,b){var c=O(b);e[Sa("parse_as_"+c)]=function(b){return f(a,b)};e[Sa("get_trusted_"+c)]=function(b){return g(a,b)};e[Sa("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function $d(){this.$get=["$window","$document",function(b,a){var c={},d=R((/android (\d+)/.exec(O((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||
{}).userAgent),f=a[0]||{},g=f.documentMode,h,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,n=!1;if(k){for(var q in k)if(l=m.exec(q)){h=l[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||h+"Transition"in k);n=!!("animation"in k||h+"Animation"in k);!d||l&&n||(l=x(f.body.style.webkitTransition),n=x(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<
g),hasEvent:function(a){if("input"==a&&9==P)return!1;if(E(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Tb(),vendorPrefix:h,transitions:l,animations:n,android:d,msie:P,msieDocumentMode:g}}]}function be(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,m){var k=c.defer(),l=k.promise,n=u(m)&&!m;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete f[l.$$timeoutId]}n||b.$apply()},h);l.$$timeoutId=h;f[h]=k;
return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function pa(b,a){var c=b;P&&(V.setAttribute("href",c),c=V.href);V.setAttribute("href",c);return{href:V.href,protocol:V.protocol?V.protocol.replace(/:$/,""):"",host:V.host,search:V.search?V.search.replace(/^\?/,""):"",hash:V.hash?V.hash.replace(/^#/,""):"",hostname:V.hostname,port:V.port,pathname:"/"===V.pathname.charAt(0)?V.pathname:
"/"+V.pathname}}function Gb(b){b=x(b)?pa(b):b;return b.protocol===Fc.protocol&&b.host===Fc.host}function ce(){this.$get=Y(Q)}function ec(b){function a(d,e){if(W(d)){var f={};r(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Gc);a("date",Hc);a("filter",xe);a("json",ye);a("limitTo",ze);a("lowercase",Ae);a("number",Ic);a("orderBy",Jc);a("uppercase",Be)}function xe(){return function(b,
a,c){if(!M(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Ca.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Dc.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,
b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!=typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=
b[g];e.check(h)&&d.push(h)}return d}}function Gc(b){var a=b.NUMBER_FORMATS;return function(b,d){E(d)&&(d=a.CURRENCY_SYM);return Kc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Ic(b){var a=b.NUMBER_FORMATS;return function(b,d){return Kc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Kc(b,a,c,d,e){if(null==b||!isFinite(b)||W(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",m=[],k=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&
l[3]>e+1?g="0":(h=g,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{g=(g.split(Lc)[1]||"").length;E(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));g=Math.pow(10,e);b=Math.round(b*g)/g;b=(""+b).split(Lc);g=b[0];b=b[1]||"";var l=0,n=a.lgSize,q=a.gSize;if(g.length>=n+q)for(l=g.length-n,k=0;k<l;k++)0===(l-k)%q&&0!==k&&(h+=c),h+=g.charAt(k);for(k=l;k<g.length;k++)0===(g.length-k)%n&&0!==k&&(h+=c),h+=g.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}m.push(f?a.negPre:a.posPre);
m.push(h);m.push(f?a.negSuf:a.posSuf);return m.join("")}function Mb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function X(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Mb(e,a,d)}}function ob(b,a){return function(c,d){var e=c["get"+b](),f=Da(a?"SHORT"+b:b);return d[f][e]}}function Hc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,m=
b[8]?a.setUTCHours:a.setHours;b[9]&&(f=R(b[9]+b[10]),g=R(b[9]+b[11]));h.call(a,R(b[1]),R(b[2])-1,R(b[3]));f=R(b[4]||0)-f;g=R(b[5]||0)-g;h=R(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],h,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;x(c)&&(c=Ce.test(c)?R(c):a(c));ub(c)&&(c=new Date(c));if(!Ma(c))return c;for(;e;)(m=De.exec(e))?
(g=g.concat(va.call(m,1)),e=g.pop()):(g.push(e),e=null);r(g,function(a){h=Ee[a];f+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function ye(){return function(b){return oa(b,!0)}}function ze(){return function(b,a){if(!M(b)&&!x(b))return b;a=R(a);if(x(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Jc(b){return function(a,
c,d){function e(a,b){return Pa(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?("string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!M(a)||!c)return a;c=M(c)?c:[c];c=Sc(c,function(a){var c=!1,d=a||Ba;if(x(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var h=d();return e(function(a,b){return f(a[h],b[h])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],h=0;h<a.length;h++)g.push(a[h]);
return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function sa(b){D(b)&&(b={link:b});b.restrict=b.restrict||"AC";return Y(b)}function Mc(b,a,c,d){function e(a,c){c=c?"-"+eb(c,"-"):"";d.removeClass(b,(a?pb:qb)+c);d.addClass(b,(a?qb:pb)+c)}var f=this,g=b.parent().controller("form")||rb,h=0,m=f.$error={},k=[];f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);b.addClass(Ka);e(!0);f.$addControl=function(a){xa(a.$name,
"input");k.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(m,function(b,c){f.$setValidity(c,!0,a)});Na(k,a)};f.$setValidity=function(a,b,c){var d=m[a];if(b)d&&(Na(d,c),d.length||(h--,h||(e(b),f.$valid=!0,f.$invalid=!1),m[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{h||e(b);if(d){if(-1!=cb(d,c))return}else m[a]=d=[],h++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,Ka);d.addClass(b,
sb);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.removeClass(b,sb);d.addClass(b,Ka);f.$dirty=!1;f.$pristine=!0;r(k,function(a){a.$setPristine()})}}function na(b,a,c,d){b.$setValidity(a,c);return c?d:s}function Fe(b,a,c){var d=c.prop("validity");W(d)&&(c=function(c){if(b.$error[a]||!(d.badInput||d.customError||d.typeMismatch)||d.valueMissing)return c;b.$setValidity(a,!1)},b.$parsers.push(c),b.$formatters.push(c))}function tb(b,a,c,d,e,f){var g=a.prop("validity");if(!e.android){var h=
!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;m()})}var m=function(){if(!h){var e=a.val();Pa(c.ngTrim||"T")&&(e=aa(e));if(d.$viewValue!==e||g&&""===e&&!g.valueMissing)b.$$phase?d.$setViewValue(e):b.$apply(function(){d.$setViewValue(e)})}};if(e.hasEvent("input"))a.on("input",m);else{var k,l=function(){k||(k=f.defer(function(){m();k=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||l()});if(e.hasEvent("paste"))a.on("paste cut",
l)}a.on("change",m);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var n=c.ngPattern;n&&((e=n.match(/^\/(.*)\/([gim]*)$/))?(n=RegExp(e[1],e[2]),e=function(a){return na(d,"pattern",d.$isEmpty(a)||n.test(a),a)}):e=function(c){var e=b.$eval(n);if(!e||!e.test)throw z("ngPattern")("noregexp",n,e,fa(a));return na(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var q=R(c.ngMinlength);e=function(a){return na(d,"minlength",d.$isEmpty(a)||
a.length>=q,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var p=R(c.ngMaxlength);e=function(a){return na(d,"maxlength",d.$isEmpty(a)||a.length<=p,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Nb(b,a){b="ngClass"+b;return function(){return{restrict:"AC",link:function(c,d,e){function f(b){if(!0===a||c.$index%2===a){var d=g(b||"");h?ua(b,h)||e.$updateClass(d,g(h)):e.$addClass(d)}h=$(b)}function g(a){if(M(a))return a.join(" ");if(W(a)){var b=[];r(a,function(a,c){a&&b.push(c)});
return b.join(" ")}return a}var h;c.$watch(e[b],f,!0);e.$observe("class",function(a){f(c.$eval(e[b]))});"ngClass"!==b&&c.$watch("$index",function(d,f){var h=d&1;if(h!==f&1){var n=g(c.$eval(e[b]));h===a?e.$addClass(n):e.$removeClass(n)}})}}}}var O=function(b){return x(b)?b.toLowerCase():b},Dc=Object.prototype.hasOwnProperty,Da=function(b){return x(b)?b.toUpperCase():b},P,w,Ea,va=[].slice,Ge=[].push,ta=Object.prototype.toString,Oa=z("ng"),Ca=Q.angular||(Q.angular={}),Ra,Ia,ia=["0","0","0"];P=R((/msie (\d+)/.exec(O(navigator.userAgent))||
[])[1]);isNaN(P)&&(P=R((/trident\/.*; rv:(\d+)/.exec(O(navigator.userAgent))||[])[1]));B.$inject=[];Ba.$inject=[];var aa=function(){return String.prototype.trim?function(b){return x(b)?b.trim():b}:function(b){return x(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ia=9>P?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Da(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Vc=/[A-Z]/g,Yc={full:"1.2.15",major:1,minor:2,dot:15,
codeName:"beer-underestimating"},Ta=L.cache={},fb=L.expando="ng-"+(new Date).getTime(),he=1,Nc=Q.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Db=Q.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};L._data=function(b){return this.cache[b[this.expando]]||{}};var fe=/([\:\-\_]+(.))/g,ge=/^moz([A-Z])/,Ab=z("jqLite"),Ha=L.prototype={ready:function(b){function a(){c||(c=!0,
b())}var c=!1;"complete"===T.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),L(Q).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?w(this[b]):w(this[this.length+b])},length:0,push:Ge,sort:[].sort,splice:[].splice},jb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){jb[O(b)]=b});var lc={};r("input select option textarea button form details".split(" "),function(b){lc[Da(b)]=
!0});r({data:hc,inheritedData:ib,scope:function(b){return w(b).data("$scope")||ib(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return w(b).data("$isolateScope")||w(b).data("$isolateScopeNoTemplate")},controller:ic,injector:function(b){return ib(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Eb,css:function(b,a,c){a=Sa(a);if(u(c))b.style[a]=c;else{var d;8>=P&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=P&&(d=""===d?s:
d);return d}},attr:function(b,a,c){var d=O(a);if(jb[d])if(u(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||B).specified?d:s;else if(u(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(u(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(E(d))return e?b[e]:"";b[e]=d}var a=[];9>P?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";
b.$dv="";return b}(),val:function(b,a){if(E(a)){if("SELECT"===Ia(b)&&b.multiple){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(E(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Fa(d[c]);b.innerHTML=a},empty:jc},function(b,a){L.prototype[a]=function(a,d){var e,f;if(b!==jc&&(2==b.length&&b!==Eb&&b!==ic?a:d)===s){if(W(a)){for(e=0;e<this.length;e++)if(b===hc)b(this[e],a);else for(f in a)b(this[e],
f,a[f]);return this}e=b.$dv;f=e===s?Math.min(this.length,1):this.length;for(var g=0;g<f;g++){var h=b(this[g],a,d);e=e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});r({removeData:fc,dealoc:Fa,on:function a(c,d,e,f){if(u(f))throw Ab("onargs");var g=ja(c,"events"),h=ja(c,"handle");g||ja(c,"events",g={});h||ja(c,"handle",h=ie(c,g));r(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var l=T.body.contains||T.body.compareDocumentPosition?function(a,
c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||h(a,d)})}else Nc(c,d,h),g[d]=[];f=g[d]}f.push(e)})},off:gc,one:function(a,c,d){a=w(a);a.on(c,function f(){a.off(c,d);a.off(c,
f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Fa(a);r(new L(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){r(new L(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;r(new L(c),function(c){a.insertBefore(c,
d)})}},wrap:function(a,c){c=w(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Fa(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;r(new L(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:hb,removeClass:gb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;E(f)&&(f=!Eb(a,c));(f?hb:gb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;
for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Cb,triggerHandler:function(a,c,d){c=(ja(a,"events")||{})[c];d=d||[];var e=[{preventDefault:B,stopPropagation:B}];r(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){L.prototype[c]=function(c,e,f){for(var g,h=0;h<this.length;h++)E(g)?(g=a(this[h],c,e,f),u(g)&&(g=w(g))):Bb(g,a(this[h],c,e,f));return u(g)?g:this};L.prototype.bind=L.prototype.on;
L.prototype.unbind=L.prototype.off});Ua.prototype={put:function(a,c){this[Ga(a)]=c},get:function(a){return this[Ga(a)]},remove:function(a){var c=this[a=Ga(a)];delete this[a];return c}};var ke=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,le=/,/,me=/^\s*(_?)(\S+?)\1\s*$/,je=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Va=z("$injector"),He=z("$animate"),Jd=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw He("notcsel",c);this.$$selectors[c.substr(1)]=
e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,g,h){g?g.after(a):(c&&c[0]||(c=g.parent()),c.append(a));h&&d(h)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,h){this.enter(a,c,d,h)},addClass:function(a,c,g){c=x(c)?c:M(c)?c.join(" "):"";r(a,function(a){hb(a,c)});g&&d(g)},removeClass:function(a,c,g){c=
x(c)?c:M(c)?c.join(" "):"";r(a,function(a){gb(a,c)});g&&d(g)},setClass:function(a,c,g,h){r(a,function(a){hb(a,c);gb(a,g)});h&&d(h)},enabled:B}}]}],ha=z("$compile");ac.$inject=["$provide","$$sanitizeUriProvider"];var pe=/^(x[\:\-_]|data[\:\-_])/i,tc=z("$interpolate"),Ie=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,se={http:80,https:443,ftp:21},Ib=z("$location");yc.prototype=Jb.prototype=xc.prototype={$$html5:!1,$$replace:!1,absUrl:mb("$$absUrl"),url:function(a,c){if(E(a))return this.$$url;var d=Ie.exec(a);d[1]&&
this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:mb("$$protocol"),host:mb("$$host"),port:mb("$$port"),path:zc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(x(a))this.$$search=Wb(a);else if(W(a))this.$$search=a;else throw Ib("isrcharg");break;default:E(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:zc("$$hash",
Ba),replace:function(){this.$$replace=!0;return this}};var za=z("$parse"),Cc={},qa,La={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:B,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return u(d)?u(e)?d+e:d:u(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(u(d)?d:0)-(u(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,
c)},"=":B,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,
c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Je={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Lb=function(a){this.options=a};Lb.prototype={constructor:Lb,lex:function(a){this.text=a;this.index=0;this.ch=s;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();
else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),f=La[this.ch],g=La[d],h=La[e];h?(this.tokens.push({index:this.index,
text:e,fn:h}),this.index+=3):g?(this.tokens.push({index:this.index,text:d,fn:g}),this.index+=2):f?(this.tokens.push({index:this.index,text:this.ch,fn:f,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+
a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=u(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw za("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=
O(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=
this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;else break}d={index:d,text:c};if(La.hasOwnProperty(c))d.fn=La[c],d.json=La[c];else{var m=Bc(c,this.options,this.text);d.fn=v(function(a,c){return m(a,c)},{assign:function(d,e){return nb(d,c,e,a.text,a.options)}})}this.tokens.push(d);
g&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:g,json:!1}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(g=this.text.substring(this.index+1,this.index+5),g.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+g+"]"),this.index+=4,d+=String.fromCharCode(parseInt(g,16))):d=(f=Je[g])?d+f:d+g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;
this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var Za=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};Za.ZERO=function(){return 0};Za.prototype={constructor:Za,parse:function(a,c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,
index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(",
"[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw za("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw za("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},
expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return v(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return v(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return v(function(e,f){return c(e,
f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());
else{var e=function(a,e,h){h=[h];for(var m=0;m<d.length;m++)h.push(d[m](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(Za.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Bc(d,this.options,this.text);return v(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){return nb(a(e,h),d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return v(function(e,f){var g=a(e,f),h=d(e,f),m;if(!g)return s;(g=Ya(g[h],c.text))&&(g.then&&c.options.unwrapPromises)&&(m=g,"$$v"in g||(m.$$v=s,m.then(function(a){m.$$v=
a})),g=g.$$v);return g},{assign:function(e,f,g){var h=d(e,g);return Ya(a(e,g),c.text)[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var h=[],m=c?c(f,g):f,k=0;k<d.length;k++)h.push(d[k](f,g));k=a(f,g,m)||B;Ya(m,e.text);Ya(k,e.text);h=k.apply?k.apply(m,h):k(h[0],h[1],h[2],h[3],h[4]);return Ya(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;
var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return v(function(c,d){for(var g=[],h=0;h<a.length;h++)g.push(a[h](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return v(function(c,d){for(var e={},m=0;m<
a.length;m++){var k=a[m];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Kb={},ra=z("$sce"),ea={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},V=T.createElement("a"),Fc=pa(Q.location.href,!0);ec.$inject=["$provide"];Gc.$inject=["$locale"];Ic.$inject=["$locale"];var Lc=".",Ee={yyyy:X("FullYear",4),yy:X("FullYear",2,0,!0),y:X("FullYear",1),MMMM:ob("Month"),MMM:ob("Month",!0),MM:X("Month",2,1),M:X("Month",1,1),dd:X("Date",2),d:X("Date",1),HH:X("Hours",2),H:X("Hours",
1),hh:X("Hours",2,-12),h:X("Hours",1,-12),mm:X("Minutes",2),m:X("Minutes",1),ss:X("Seconds",2),s:X("Seconds",1),sss:X("Milliseconds",3),EEEE:ob("Day"),EEE:ob("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Mb(Math[0<a?"floor":"ceil"](a/60),2)+Mb(Math.abs(a%60),2))}},De=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Ce=/^\-?\d+$/;Hc.$inject=["$locale"];var Ae=Y(O),Be=Y(Da);Jc.$inject=
["$parse"];var ad=Y({restrict:"E",compile:function(a,c){8>=P&&(c.href||c.name||c.$set("href",""),a.append(T.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===ta.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),yb={};r(jb,function(a,c){if("multiple"!=a){var d=ka("ng-"+c);yb[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(["src",
"srcset","href"],function(a){var c=ka("ng-"+a);yb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===ta.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(a){a&&(f.$set(h,a),P&&g&&e.prop(g,f[h]))})}}}});var rb={$addControl:B,$removeControl:B,$setValidity:B,$setDirty:B,$setPristine:B};Mc.$inject=["$element","$attrs","$scope","$animate"];var Oc=function(a){return["$timeout",function(c){return{name:"form",
restrict:a?"EAC":"E",controller:Mc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Nc(e[0],"submit",h);e.on("$destroy",function(){c(function(){Db(e[0],"submit",h)},0,!1)})}var m=e.parent().controller("form"),k=f.name||f.ngForm;k&&nb(a,k,g,k);if(m)e.on("$destroy",function(){m.$removeControl(g);k&&nb(a,k,s,k);v(g,rb)})}}}}}]},bd=Oc(),od=Oc(!0),Ke=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
Le=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,Me=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Pc={text:tb,number:function(a,c,d,e,f,g){tb(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Me.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});Fe(e,"number",c);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return na(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),
e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return na(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return na(e,"number",e.$isEmpty(a)||ub(a),a)})},url:function(a,c,d,e,f,g){tb(a,c,d,e,f,g);a=function(a){return na(e,"url",e.$isEmpty(a)||Ke.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){tb(a,c,d,e,f,g);a=function(a){return na(e,"email",e.$isEmpty(a)||Le.test(a),a)};e.$formatters.push(a);
e.$parsers.push(a)},radio:function(a,c,d,e){E(d.name)&&c.attr("name",ab());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;x(f)||(f=!0);x(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};
e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:B,button:B,submit:B,reset:B,file:B},bc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,f,g){g&&(Pc[O(f.type)]||Pc.text)(d,e,f,g,c,a)}}}],qb="ng-valid",pb="ng-invalid",Ka="ng-pristine",sb="ng-dirty",Ne=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,f,g){function h(a,c){c=c?"-"+eb(c,"-"):"";g.removeClass(e,(a?pb:qb)+c);
g.addClass(e,(a?qb:pb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var m=f(d.ngModel),k=m.assign;if(!k)throw z("ngModel")("nonassign",d.ngModel,fa(e));this.$render=B;this.$isEmpty=function(a){return E(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||rb,n=0,q=this.$error={};e.addClass(Ka);h(!0);this.$setValidity=function(a,c){q[a]!==
!c&&(c?(q[a]&&n--,n||(h(!0),this.$valid=!0,this.$invalid=!1)):(h(!1),this.$invalid=!0,this.$valid=!1,n++),q[a]=!c,h(c,a),l.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;g.removeClass(e,sb);g.addClass(e,Ka)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,g.removeClass(e,Ka),g.addClass(e,sb),l.$setDirty());r(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,k(a,d),r(this.$viewChangeListeners,
function(a){try{a()}catch(d){c(d)}}))};var p=this;a.$watch(function(){var c=m(a);if(p.$modelValue!==c){var d=p.$formatters,e=d.length;for(p.$modelValue=c;e--;)c=d[e](c);p.$viewValue!==c&&(p.$viewValue=c,p.$render())}return c})}],Dd=function(){return{require:["ngModel","^?form"],controller:Ne,link:function(a,c,d,e){var f=e[0],g=e[1]||rb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})}}},Fd=Y({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
cc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Ed=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!E(a)){var c=[];a&&r(a.split(f),function(a){a&&
c.push(aa(a))});return c}});e.$formatters.push(function(a){return M(a)?a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},Oe=/^(true|false|\d+)$/,Gd=function(){return{priority:100,compile:function(a,c){return Oe.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},gd=sa(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),id=["$interpolate",
function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],hd=["$sce","$parse",function(a,c){return function(d,e,f){e.addClass("ng-binding").data("$binding",f.ngBindHtml);var g=c(f.ngBindHtml);d.$watch(function(){return(g(d)||"").toString()},function(c){e.html(a.getTrustedHtml(g(d))||"")})}}],jd=Nb("",!0),ld=Nb("Odd",0),kd=Nb("Even",1),md=sa({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),
nd=[function(){return{scope:!0,controller:"@",priority:500}}],dc={};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ka("ng-"+a);dc[c]=["$parse",function(d){return{compile:function(e,f){var g=d(f[c]);return function(c,d,e){d.on(O(a),function(a){c.$apply(function(){g(c,{$event:a})})})}}}}]});var qd=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",
$$tlb:!0,link:function(c,d,e,f,g){var h,m,k;c.$watch(e.ngIf,function(f){Pa(f)?m||(m=c.$new(),g(m,function(c){c[c.length++]=T.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)})):(k&&(k.remove(),k=null),m&&(m.$destroy(),m=null),h&&(k=xb(h.clone),a.leave(k,function(){k=null}),h=null))})}}}],rd=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Ca.noop,compile:function(g,
h){var m=h.ngInclude||h.src,k=h.onload||"",l=h.autoscroll;return function(g,h,p,r,s){var v=0,A,w,F,y=function(){w&&(w.remove(),w=null);A&&(A.$destroy(),A=null);F&&(e.leave(F,function(){w=null}),w=F,F=null)};g.$watch(f.parseAsResourceUrl(m),function(f){var m=function(){!u(l)||l&&!g.$eval(l)||d()},p=++v;f?(a.get(f,{cache:c}).success(function(a){if(p===v){var c=g.$new();r.template=a;a=s(c,function(a){y();e.enter(a,null,h,m)});A=c;F=a;A.$emit("$includeContentLoaded");g.$eval(k)}}).error(function(){p===
v&&y()}),g.$emit("$includeContentRequested")):(y(),r.template=null)})}}}}],Hd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],sd=sa({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),td=sa({terminal:!0,priority:1E3}),ud=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,m=g.$attr.when&&f.attr(g.$attr.when),k=g.offset||
0,l=e.$eval(m)||{},n={},q=c.startSymbol(),p=c.endSymbol(),t=/^when(Minus)?(.+)$/;r(g,function(a,c){t.test(c)&&(l[O(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});r(l,function(a,e){n[e]=c(a.replace(d,q+h+"-"+k+p))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-k));return n[c](e,f,!0)},function(a){f.text(a)})}}}],vd=["$parse","$animate",function(a,c){var d=z("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,
link:function(e,f,g,h,m){var k=g.ngRepeat,l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,q,p,t,s,v,u={$id:Ga};if(!l)throw d("iexp",k);g=l[1];h=l[2];(l=l[3])?(n=a(l),q=function(a,c,d){v&&(u[v]=a);u[s]=c;u.$index=d;return n(e,u)}):(p=function(a,c){return Ga(c)},t=function(a){return a});l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",g);s=l[3]||l[1];v=l[2];var J={};e.$watchCollection(h,function(a){var g,h,l=f[0],n,u={},A,I,x,B,E,K,
z=[];if($a(a))E=a,n=q||p;else{n=q||t;E=[];for(x in a)a.hasOwnProperty(x)&&"$"!=x.charAt(0)&&E.push(x);E.sort()}A=E.length;h=z.length=E.length;for(g=0;g<h;g++)if(x=a===E?g:E[g],B=a[x],B=n(x,B,g),xa(B,"`track by` id"),J.hasOwnProperty(B))K=J[B],delete J[B],u[B]=K,z[g]=K;else{if(u.hasOwnProperty(B))throw r(z,function(a){a&&a.scope&&(J[a.id]=a)}),d("dupes",k,B);z[g]={id:B};u[B]=!1}for(x in J)J.hasOwnProperty(x)&&(K=J[x],g=xb(K.clone),c.leave(g),r(g,function(a){a.$$NG_REMOVED=!0}),K.scope.$destroy());
g=0;for(h=E.length;g<h;g++){x=a===E?g:E[g];B=a[x];K=z[g];z[g-1]&&(l=z[g-1].clone[z[g-1].clone.length-1]);if(K.scope){I=K.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);K.clone[0]!=n&&c.move(xb(K.clone),null,w(l));l=K.clone[K.clone.length-1]}else I=e.$new();I[s]=B;v&&(I[v]=x);I.$index=g;I.$first=0===g;I.$last=g===A-1;I.$middle=!(I.$first||I.$last);I.$odd=!(I.$even=0===(g&1));K.scope||m(I,function(a){a[a.length++]=T.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,w(l));l=a;K.scope=I;K.clone=
a;u[K.id]=K})}J=u})}}}],wd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Pa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],pd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Pa(c)?"addClass":"removeClass"](d,"ng-hide")})}}],xd=sa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),yd=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(c,d,e,f){var g,h,m,k=[];c.$watch(e.ngSwitch||e.on,function(d){var n,q=k.length;if(0<q){if(m){for(n=0;n<q;n++)m[n].remove();m=null}m=[];for(n=0;n<q;n++){var p=h[n];k[n].$destroy();m[n]=p;a.leave(p,function(){m.splice(n,1);0===m.length&&(m=null)})}}h=[];k=[];if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),r(g,function(d){var e=c.$new();k.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],zd=sa({transclude:"element",priority:800,require:"^ngSwitch",
link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Ad=sa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Cd=sa({link:function(a,c,d,e,f){if(!f)throw z("ngTransclude")("orphan",fa(c));f(function(a){c.empty();c.append(a)})}}),cd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,
d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Pe=z("ngOptions"),Bd=Y({terminal:!0}),dd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:B};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,k={},l=e,n;m.databound=
d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=function(c){xa(c,'"option value"');k[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};m.removeOption=function(a){this.hasOption(a)&&(delete k[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ga(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};m.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=B})}],link:function(e,g,h,m){function k(a,
c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(z.parent()&&z.remove(),c.val(a),""===a&&x.prop("selected",!0)):E(a)&&x?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){z.parent()&&z.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new Ua(d.$viewValue);r(c.find("option"),function(c){c.selected=u(a.get(c.value))})};a.$watch(function(){ua(e,d.$viewValue)||(e=$(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=
[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,s,t,z;t=g.$modelValue;z=y(e)||[];var E=n?Ob(z):z,I,C,D;C={};s=!1;var F,L;if(p)if(w&&M(t))for(s=new Ua([]),D=0;D<t.length;D++)C[m]=t[D],s.put(w(e,C),t[D]);else s=new Ua(t);for(D=0;I=E.length,D<I;D++){k=D;if(n){k=E[D];if("$"===k.charAt(0))continue;C[n]=k}C[m]=z[k];d=q(e,C)||"";(k=a[d])||(k=a[d]=[],c.push(d));p?d=u(s.remove(w?w(e,C):r(e,C))):(w?(d={},d[m]=t,d=
w(e,d)===w(e,C)):d=t===r(e,C),s=s||d);F=l(e,C);F=u(F)?F:"";k.push({id:w?w(e,C):n?E[D]:D,label:F,selected:d})}p||(v||null===t?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));C=0;for(E=c.length;C<E;C++){d=c[C];k=a[d];x.length<=C?(t={element:B.clone().attr("label",d),label:k.label},z=[t],x.push(z),f.append(t.element)):(z=x[C],t=z[0],t.label!=d&&t.element.attr("label",t.label=d));F=null;D=0;for(I=k.length;D<I;D++)s=k[D],(d=z[D+1])?(F=d.element,d.label!==s.label&&
F.text(d.label=s.label),d.id!==s.id&&F.val(d.id=s.id),d.selected!==s.selected&&F.prop("selected",d.selected=s.selected)):(""===s.id&&v?L=v:(L=A.clone()).val(s.id).attr("selected",s.selected).text(s.label),z.push({element:L,label:s.label,id:s.id,selected:s.selected}),F?F.after(L):t.element.append(L),F=L);for(D++;z.length>D;)z.pop().element.remove()}for(;x.length>C;)x.pop()[0].element.remove()}var k;if(!(k=t.match(d)))throw Pe("iexp",t,fa(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],q=c(k[3]||""),r=
c(k[2]?k[1]:m),y=c(k[7]),w=k[8]?c(k[8]):null,x=[[{element:f,label:""}]];v&&(a(v)(e),v.removeClass("ng-scope"),v.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=y(e)||[],d={},h,k,l,q,t,v,u;if(p)for(k=[],q=0,v=x.length;q<v;q++)for(a=x[q],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(w)for(u=0;u<c.length&&(d[m]=c[u],w(e,d)!=h);u++);else d[m]=c[h];k.push(r(e,d))}}else{h=f.val();if("?"==h)k=s;else if(""===h)k=null;else if(w)for(u=0;u<c.length;u++){if(d[m]=
c[u],w(e,d)==h){k=r(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=r(e,d);1<x[0].length&&x[0][1].id!==h&&(x[0][1].selected=!1)}g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(m[1]){var q=m[0];m=m[1];var p=h.multiple,t=h.ngOptions,v=!1,x,A=w(T.createElement("option")),B=w(T.createElement("optgroup")),z=A.clone();h=0;for(var y=g.children(),D=y.length;h<D;h++)if(""===y[h].value){x=v=y.eq(h);break}q.init(m,v,z);p&&(m.$isEmpty=function(a){return!a||0===a.length});t?n(e,g,m):p?l(e,g,m):k(e,g,m,q)}}}}],fd=["$interpolate",
function(a){var c={addOption:B,removeOption:B};return{restrict:"E",priority:100,compile:function(d,e){if(E(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),l=k.data("$selectController")||k.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;f?a.$watch(f,function(a,c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],ed=Y({restrict:"E",terminal:!0});
Q.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Ea=Q.jQuery)?(w=Ea,v(Ea.fn,{scope:Ha.scope,isolateScope:Ha.isolateScope,controller:Ha.controller,injector:Ha.injector,inheritedData:Ha.inheritedData}),zb("remove",!0,!0,!1),zb("empty",!1,!1,!1),zb("html",!1,!1,!0)):w=L,Ca.element=w,Xc(Ca),w(T).ready(function(){Uc(T,Yb)}))})(window,document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}</style>');

(function(H,a,A){'use strict';function D(p,g){g=g||{};a.forEach(g,function(a,c){delete g[c]});for(var c in p)!p.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(g[c]=p[c]);return g}var v=a.$$minErr("$resource"),C=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;a.module("ngResource",["ng"]).factory("$resource",["$http","$q",function(p,g){function c(a,c){this.template=a;this.defaults=c||{};this.urlParams={}}function t(n,w,l){function r(h,d){var e={};d=x({},w,d);s(d,function(b,d){u(b)&&(b=b());var k;if(b&&
b.charAt&&"@"==b.charAt(0)){k=h;var a=b.substr(1);if(null==a||""===a||"hasOwnProperty"===a||!C.test("."+a))throw v("badmember",a);for(var a=a.split("."),f=0,c=a.length;f<c&&k!==A;f++){var g=a[f];k=null!==k?k[g]:A}}else k=b;e[d]=k});return e}function e(a){return a.resource}function f(a){D(a||{},this)}var F=new c(n);l=x({},B,l);s(l,function(h,d){var c=/^(POST|PUT|PATCH)$/i.test(h.method);f[d]=function(b,d,k,w){var q={},n,l,y;switch(arguments.length){case 4:y=w,l=k;case 3:case 2:if(u(d)){if(u(b)){l=
b;y=d;break}l=d;y=k}else{q=b;n=d;l=k;break}case 1:u(b)?l=b:c?n=b:q=b;break;case 0:break;default:throw v("badargs",arguments.length);}var t=this instanceof f,m=t?n:h.isArray?[]:new f(n),z={},B=h.interceptor&&h.interceptor.response||e,C=h.interceptor&&h.interceptor.responseError||A;s(h,function(a,b){"params"!=b&&("isArray"!=b&&"interceptor"!=b)&&(z[b]=G(a))});c&&(z.data=n);F.setUrlParams(z,x({},r(n,h.params||{}),q),h.url);q=p(z).then(function(b){var d=b.data,k=m.$promise;if(d){if(a.isArray(d)!==!!h.isArray)throw v("badcfg",
h.isArray?"array":"object",a.isArray(d)?"array":"object");h.isArray?(m.length=0,s(d,function(b){m.push(new f(b))})):(D(d,m),m.$promise=k)}m.$resolved=!0;b.resource=m;return b},function(b){m.$resolved=!0;(y||E)(b);return g.reject(b)});q=q.then(function(b){var a=B(b);(l||E)(a,b.headers);return a},C);return t?q:(m.$promise=q,m.$resolved=!1,m)};f.prototype["$"+d]=function(b,a,k){u(b)&&(k=a,a=b,b={});b=f[d].call(this,b,this,a,k);return b.$promise||b}});f.bind=function(a){return t(n,x({},w,a),l)};return f}
var B={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},E=a.noop,s=a.forEach,x=a.extend,G=a.copy,u=a.isFunction;c.prototype={setUrlParams:function(c,g,l){var r=this,e=l||r.template,f,p,h=r.urlParams={};s(e.split(/\W/),function(a){if("hasOwnProperty"===a)throw v("badname");!/^\d+$/.test(a)&&(a&&RegExp("(^|[^\\\\]):"+a+"(\\W|$)").test(e))&&(h[a]=!0)});e=e.replace(/\\:/g,":");g=g||{};s(r.urlParams,function(d,c){f=g.hasOwnProperty(c)?
g[c]:r.defaults[c];a.isDefined(f)&&null!==f?(p=encodeURIComponent(f).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),e=e.replace(RegExp(":"+c+"(\\W|$)","g"),function(a,c){return p+c})):e=e.replace(RegExp("(/?):"+c+"(\\W|$)","g"),function(a,c,d){return"/"==d.charAt(0)?d:c+d})});e=e.replace(/\/+$/,"")||"/";e=e.replace(/\/\.(?=\w+($|\?))/,".");c.url=e.replace(/\/\\\./,"/.");s(g,function(a,
e){r.urlParams[e]||(c.params=c.params||{},c.params[e]=a)})}};return t}])})(window,window.angular);

(function(n,e,A){'use strict';function x(s,g,k){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,w){function y(){p&&(p.remove(),p=null);h&&(h.$destroy(),h=null);l&&(k.leave(l,function(){p=null}),p=l,l=null)}function v(){var b=s.current&&s.current.locals;if(e.isDefined(b&&b.$template)){var b=a.$new(),d=s.current;l=w(b,function(d){k.enter(d,null,l||c,function(){!e.isDefined(t)||t&&!a.$eval(t)||g()});y()});h=d.scope=b;h.$emit("$viewContentLoaded");h.$eval(u)}else y()}
var h,l,p,t=b.autoscroll,u=b.onload||"";a.$on("$routeChangeSuccess",v);v()}}}function z(e,g,k){return{restrict:"ECA",priority:-400,link:function(a,c){var b=k.current,f=b.locals;c.html(f.$template);var w=e(c.contents());b.controller&&(f.$scope=a,f=g(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f));w(a)}}}n=e.module("ngRoute",["ng"]).provider("$route",function(){function s(a,c){return e.extend(new (e.extend(function(){},
{prototype:a})),c)}function g(a,e){var b=e.caseInsensitiveMatch,f={originalPath:a,regexp:a},k=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,e,b,c){a="?"===c?c:null;c="*"===c?c:null;k.push({name:b,optional:!!a});e=e||"";return""+(a?"":e)+"(?:"+(a?e:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=RegExp("^"+a+"$",b?"i":"");return f}var k={};this.when=function(a,c){k[a]=e.extend({reloadOnSearch:!0},c,a&&g(a,c));if(a){var b=
"/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";k[b]=e.extend({redirectTo:a},g(b,c))}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(a,c,b,f,g,n,v,h){function l(){var d=p(),m=r.current;if(d&&m&&d.$$route===m.$$route&&e.equals(d.pathParams,m.pathParams)&&!d.reloadOnSearch&&!u)m.params=d.params,e.copy(m.params,b),a.$broadcast("$routeUpdate",m);else if(d||m)u=!1,a.$broadcast("$routeChangeStart",
d,m),(r.current=d)&&d.redirectTo&&(e.isString(d.redirectTo)?c.path(t(d.redirectTo,d.params)).search(d.params).replace():c.url(d.redirectTo(d.pathParams,c.path(),c.search())).replace()),f.when(d).then(function(){if(d){var a=e.extend({},d.resolve),c,b;e.forEach(a,function(d,c){a[c]=e.isString(d)?g.get(d):g.invoke(d)});e.isDefined(c=d.template)?e.isFunction(c)&&(c=c(d.params)):e.isDefined(b=d.templateUrl)&&(e.isFunction(b)&&(b=b(d.params)),b=h.getTrustedResourceUrl(b),e.isDefined(b)&&(d.loadedTemplateUrl=
b,c=n.get(b,{cache:v}).then(function(a){return a.data})));e.isDefined(c)&&(a.$template=c);return f.all(a)}}).then(function(c){d==r.current&&(d&&(d.locals=c,e.copy(d.params,b)),a.$broadcast("$routeChangeSuccess",d,m))},function(c){d==r.current&&a.$broadcast("$routeChangeError",d,m,c)})}function p(){var a,b;e.forEach(k,function(f,k){var q;if(q=!b){var g=c.path();q=f.keys;var l={};if(f.regexp)if(g=f.regexp.exec(g)){for(var h=1,p=g.length;h<p;++h){var n=q[h-1],r="string"==typeof g[h]?decodeURIComponent(g[h]):
g[h];n&&r&&(l[n.name]=r)}q=l}else q=null;else q=null;q=a=q}q&&(b=s(f,{params:e.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||k[null]&&s(k[null],{params:{},pathParams:{}})}function t(a,c){var b=[];e.forEach((a||"").split(":"),function(a,d){if(0===d)b.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];b.push(c[f]);b.push(e[2]||"");delete c[f]}});return b.join("")}var u=!1,r={routes:k,reload:function(){u=!0;a.$evalAsync(l)}};a.$on("$locationChangeSuccess",l);return r}]});n.provider("$routeParams",
function(){this.$get=function(){return{}}});n.directive("ngView",x);n.directive("ngView",z);x.$inject=["$route","$anchorScroll","$animate"];z.$inject=["$compile","$controller","$route"]})(window,window.angular);

if(!window.__twttrlr){(function(e,t){function y(e){for(var t=1,n;n=arguments[t];t++)for(var r in n)e[r]=n[r];return e}function b(e){return Array.prototype.slice.call(e)}function E(e,t){for(var n=0,r;r=e[n];n++)if(t==r)return n;return-1}function S(){var e=b(arguments),t=[];for(var n=0,r=e.length;n<r;n++)e[n].length>0&&t.push(e[n].replace(/\/$/,""));return t.join("/")}function x(e,t,n){var r=t.split("/"),i=e;while(r.length>1){var s=r.shift();i=i[s]=i[s]||{}}i[r[0]]=n}function T(){}function N(e,t){this.id=this.path=e,this.force=!!t}function C(e,t){this.id=e,this.body=t,typeof t=="undefined"&&(this.path=this.resolvePath(e))}function k(e,t){this.deps=e,this.collectResults=t,this.deps.length==0&&this.complete()}function L(e,t){this.deps=e,this.collectResults=t}function A(){for(var e in r)if(r[e].readyState=="interactive")return c[r[e].id]}function O(e,t){var r;return!e&&n&&(r=l||A()),r?(delete c[r.scriptId],r.body=t,r.execute()):(f=r=new C(e,t),a[r.id]=r),r}function M(){var e=b(arguments),t,n;return typeof e[0]=="string"&&(t=e.shift()),n=e.shift(),O(t,n)}function _(e,t){var n=t.id||"",r=n.split("/");r.pop();var i=r.join("/");return e.replace(/^\./,i)}function D(e,t){function r(e){return C.exports[_(e,t)]}var n=[];for(var i=0,s=e.length;i<s;i++){if(e[i]=="require"){n.push(r);continue}if(e[i]=="exports"){t.exports=t.exports||{},n.push(t.exports);continue}n.push(r(e[i]))}return n}function P(){var e=b(arguments),t=[],n,r;return typeof e[0]=="string"&&(n=e.shift()),w(e[0])&&(t=e.shift()),r=e.shift(),O(n,function(e){function s(){var i=D(b(t),n),s;typeof r=="function"?s=r.apply(n,i):s=r,typeof s=="undefined"&&(s=n.exports),e(s)}var n=this,i=[];for(var o=0,u=t.length;o<u;o++){var a=t[o];E(["require","exports"],a)==-1&&i.push(_(a,n))}i.length>0?H.apply(this,i.concat(s)):s()})}function H(){var e=b(arguments),t,n;typeof e[e.length-1]=="function"&&(t=e.pop()),typeof e[e.length-1]=="boolean"&&(n=e.pop());var r=new k(B(e,n),n);return t&&r.then(t),r}function B(e,t){var n=[];for(var r=0,i;i=e[r];r++)typeof i=="string"&&(i=j(i)),w(i)&&(i=new L(B(i,t),t)),n.push(i);return n}function j(e){var t,n;for(var r=0,i;i=H.matchers[r];r++){var s=i[0],o=i[1];if(t=e.match(s))return o(e)}throw new Error(e+" was not recognised by loader")}function I(){return e.using=h,e.provide=p,e.define=d,e.loadrunner=v,F}function q(e){for(var t=0;t<H.bundles.length;t++)for(var n in H.bundles[t])if(n!=e&&E(H.bundles[t][n],e)>-1)return n}var n=e.attachEvent&&!e.opera,r=t.getElementsByTagName("script"),i=0,s,o=t.createElement("script"),u={},a={},f,l,c={},h=e.using,p=e.provide,d=e.define,v=e.loadrunner;for(var m=0,g;g=r[m];m++)if(g.src.match(/loadrunner\.js(\?|#|$)/)){s=g;break}var w=Array.isArray||function(e){return e.constructor==Array};T.prototype.then=function(t){var n=this;return this.started||(this.started=!0,this.start()),this.completed?t.apply(e,this.results):(this.callbacks=this.callbacks||[],this.callbacks.push(t)),this},T.prototype.start=function(){},T.prototype.complete=function(){if(!this.completed){this.results=b(arguments),this.completed=!0;if(this.callbacks)for(var t=0,n;n=this.callbacks[t];t++)n.apply(e,this.results)}},N.loaded=[],N.prototype=new T,N.prototype.start=function(){var e=this,t,n,r;return(r=a[this.id])?(r.then(function(){e.complete()}),this):((t=u[this.id])?t.then(function(){e.loaded()}):!this.force&&E(N.loaded,this.id)>-1?this.loaded():(n=q(this.id))?H(n,function(){e.loaded()}):this.load(),this)},N.prototype.load=function(){var t=this;u[this.id]=t;var n=o.cloneNode(!1);this.scriptId=n.id="LR"+ ++i,n.type="text/javascript",n.async=!0,n.onerror=function(){throw new Error(t.path+" not loaded")},n.onreadystatechange=n.onload=function(n){n=e.event||n;if(n.type=="load"||E(["loaded","complete"],this.readyState)>-1)this.onreadystatechange=null,t.loaded()},n.src=this.path,l=this,r[0].parentNode.insertBefore(n,r[0]),l=null,c[n.id]=this},N.prototype.loaded=function(){this.complete()},N.prototype.complete=function(){E(N.loaded,this.id)==-1&&N.loaded.push(this.id),delete u[this.id],T.prototype.complete.apply(this,arguments)},C.exports={},C.prototype=new N,C.prototype.resolvePath=function(e){return S(H.path,e+".js")},C.prototype.start=function(){var e,t,n=this,r;this.body?this.execute():(e=C.exports[this.id])?this.exp(e):(t=a[this.id])?t.then(function(e){n.exp(e)}):(bundle=q(this.id))?H(bundle,function(){n.start()}):(a[this.id]=this,this.load())},C.prototype.loaded=function(){var e,t,r=this;n?(t=C.exports[this.id])?this.exp(t):(e=a[this.id])&&e.then(function(e){r.exp(e)}):(e=f,f=null,e.id=e.id||this.id,e.then(function(e){r.exp(e)}))},C.prototype.complete=function(){delete a[this.id],N.prototype.complete.apply(this,arguments)},C.prototype.execute=function(){var e=this;typeof this.body=="object"?this.exp(this.body):typeof this.body=="function"&&this.body.apply(window,[function(t){e.exp(t)}])},C.prototype.exp=function(e){this.complete(this.exports=C.exports[this.id]=e||{})},k.prototype=new T,k.prototype.start=function(){function t(){var t=[];e.collectResults&&(t[0]={});for(var n=0,r;r=e.deps[n];n++){if(!r.completed)return;r.results.length>0&&(e.collectResults?r instanceof L?y(t[0],r.results[0]):x(t[0],r.id,r.results[0]):t=t.concat(r.results))}e.complete.apply(e,t)}var e=this;for(var n=0,r;r=this.deps[n];n++)r.then(t);return this},L.prototype=new T,L.prototype.start=function(){var e=this,t=0,n=[];return e.collectResults&&(n[0]={}),function r(){var i=e.deps[t++];i?i.then(function(t){i.results.length>0&&(e.collectResults?i instanceof L?y(n[0],i.results[0]):x(n[0],i.id,i.results[0]):n.push(i.results[0])),r()}):e.complete.apply(e,n)}(),this},P.amd={};var F=function(e){return e(H,M,F,define)};F.Script=N,F.Module=C,F.Collection=k,F.Sequence=L,F.Dependency=T,F.noConflict=I,e.loadrunner=F,e.using=H,e.provide=M,e.define=P,H.path="",H.matchers=[],H.matchers.add=function(e,t){this.unshift([e,t])},H.matchers.add(/(^script!|\.js$)/,function(e){var t=new N(e.replace(/^\$/,H.path.replace(/\/$/,"")+"/").replace(/^script!/,""),!1);return t.id=e,t}),H.matchers.add(/^[a-zA-Z0-9_\-\/]+$/,function(e){return new C(e)}),H.bundles=[],s&&(H.path=window.__twttrLoadRunnerPath||s.getAttribute("data-path")||s.src.split(/loadrunner\.js/)[0]||"",(main=s.getAttribute("data-main"))&&H.apply(e,main.split(/\s*,\s*/)).then(function(){}))})(this,document);(window.__twttrlr = loadrunner.noConflict());}__twttrlr(function(using, provide, loadrunner, define) {provide("util/util",function(e){function t(e){return e&&String(e).toLowerCase().indexOf("[native code]")>-1}function n(e){return o(arguments,function(t){s(t,function(t,n){e[t]=n})}),e}function r(e){return s(e,function(t,n){v(n)&&(r(n),m(n)&&delete e[t]),(n===undefined||n===null||n==="")&&delete e[t]}),e}function s(e,t){for(var n in e)(!e.hasOwnProperty||e.hasOwnProperty(n))&&t(n,e[n]);return e}function c(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function h(e,t){return e==c(t)}function p(e,t,n){return n=n||[],function(){var r=a(arguments,function(e){return e});return e.apply(t,n.concat(r))}}function v(e){return e===Object(e)}function m(e){if(!v(e))return!1;if(Object.keys)return!Object.keys(e).length;for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}var i=function(){var e=Array.prototype.indexOf;return t(e)?function(t,n){return t?e.apply(t,[n]):-1}:function(e,t){if(!e)return-1;for(var n=0,r=e.length;n<r;n++)if(t==e[n])return n;return-1}}(),o=function(){var e=Array.prototype.forEach;return t(e)?function(t,n){if(!t)return;if(!n)return;e.apply(t,[n])}:function(e,t){if(!e)return;if(!t)return;for(var n=0,r=e.length;n<r;n++)t(e[n],n)}}(),u=function(){var e=Array.prototype.filter;return t(e)?function(t,n){return t?n?e.apply(t,[n]):t:null}:function(e,t){if(!e)return null;if(!t)return e;var n=[],r=0,i=e.length;for(;r<i;r++)t(e[r])&&n.push(e[r]);return n}}(),a=function(){var e=Array.prototype.map;return t(e)?function(t,n){return t?n?e.apply(t,[n]):t:null}:function(e,t){if(!e)return null;if(!t)return e;var n=[],r=0,i=e.length;for(;r<i;r++)n.push(t(e[r]));return n}}(),f=function(){var e=Array.prototype.reduce;return t(e)?function(t,n,r){return t?n?e.apply(t,[n,r]):r:null}:function(e,t,n){if(!e)return null;if(!t)return n;var r=n,i=0,s=e.length;for(;i<s;i++)r=t(r,e[i],i,e);return r}}(),l=function(){var e=String.prototype.trim;return t(e)?function(t){return t&&e.apply(t)}:function(e){return e&&e.replace(/(^\s+|\s+$)/g,"")}}(),d=t(Object.create)?Object.create:function(e){function t(){}return t.prototype=e,new t};e({aug:n,compact:r,forIn:s,forEach:o,filter:u,map:a,reduce:f,trim:l,indexOf:i,isNative:t,isObject:v,isEmptyObject:m,createObject:d,bind:p,toType:c,isType:h})});
provide("util/events",function(e){using("util/util",function(t){function r(){this.completed=!1,this.callbacks=[]}var n={bind:function(e,t){return this._handlers=this._handlers||{},this._handlers[e]=this._handlers[e]||[],this._handlers[e].push(t)},unbind:function(e,n){if(!this._handlers[e])return;if(n){var r=t.indexOf(this._handlers[e],n);r>=0&&this._handlers[e].splice(r,1)}else this._handlers[e]=[]},trigger:function(e,t){var n=this._handlers&&this._handlers[e];t.type=e;if(n)for(var r=0,i;i=n[r];r++)i.call(this,t)}};r.prototype.addCallback=function(e){this.completed?e.apply(this,this.results):this.callbacks.push(e)},r.prototype.complete=function(){this.results=makeArray(arguments),this.completed=!0;for(var e=0,t;t=this.callbacks[e];e++)t.apply(this,this.results)},e({Emitter:n,Promise:r})})});
provide("$xd/json2.js", function(exports) {window.JSON||(window.JSON={}),function(){function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)r=rep[n],typeof r=="string"&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","  ":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();exports();loadrunner.Script.loaded.push("$xd/json2.js")});
provide("util/querystring",function(e){function t(e){return encodeURIComponent(e).replace(/\+/g,"%2B")}function n(e){return decodeURIComponent(e)}function r(e){var n=[],r;for(r in e)e[r]!==null&&typeof e[r]!="undefined"&&n.push(t(r)+"="+t(e[r]));return n.sort().join("&")}function i(e){var t={},r,i,s,o;if(e){r=e.split("&");for(o=0;s=r[o];o++)i=s.split("="),i.length==2&&(t[n(i[0])]=n(i[1]))}return t}function s(e,t){var n=r(t);return n.length>0?e.indexOf("?")>=0?e+"&"+r(t):e+"?"+r(t):e}function o(e){var t=e&&e.split("?");return t.length==2?i(t[1]):{}}e({url:s,decodeURL:o,decode:i,encode:r,encodePart:t,decodePart:n})});
provide("util/twitter",function(e){using("util/querystring",function(t){function o(e){return typeof e=="string"&&n.test(e)&&RegExp.$1.length<=20}function u(e){if(o(e))return RegExp.$1}function a(e){var n=t.decodeURL(e);n.screen_name=u(e);if(n.screen_name)return t.url("https://twitter.com/intent/user",n)}function f(e){return typeof e=="string"&&s.test(e)}function l(e,t){t=t===undefined?!0:t;if(f(e))return(t?"#":"")+RegExp.$1}function c(e){return typeof e=="string"&&r.test(e)}function h(e){return c(e)&&RegExp.$1}function p(e){return i.test(e)}var n=/(?:^|(?:https?\:)?\/\/(?:www\.)?twitter\.com(?:\:\d+)?(?:\/intent\/(?:follow|user)\/?\?screen_name=|(?:\/#!)?\/))@?([\w]+)(?:\?|&|$)/i,r=/(?:^|(?:https?\:)?\/\/(?:www\.)?twitter\.com(?:\:\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i,i=/^http(s?):\/\/((www\.)?)twitter\.com\//,s=/^#?([^.,<>!\s\/#\-\(\)\'\"]+)$/;e({isHashTag:f,hashTag:l,isScreenName:o,screenName:u,isStatus:c,status:h,intentForProfileURL:a,isTwitterURL:p,regexen:{profile:n}})})});
provide("util/uri",function(e){using("util/querystring","util/util","util/twitter",function(t,n,r){function i(e,t){var n,r;return t=t||location,/^https?:\/\//.test(e)?e:/^\/\//.test(e)?t.protocol+e:(n=t.host+(t.port.length?":"+t.port:""),e.indexOf("/")!==0&&(r=t.pathname.split("/"),r.pop(),r.push(e),e="/"+r.join("/")),[t.protocol,"//",n,e].join(""))}function s(){var e=document.getElementsByTagName("link"),t=0,n;for(;n=e[t];t++)if(n.rel=="canonical")return i(n.href)}function o(){var e=document.getElementsByTagName("a"),t=document.getElementsByTagName("link"),n=[e,t],i,s,o=0,u=0,a=/\bme\b/,f;for(;i=n[o];o++)for(u=0;s=i[u];u++)if(a.test(s.rel)&&(f=r.screenName(s.href)))return f}e({absolutize:i,getCanonicalURL:s,getScreenNameFromPage:o})})});
provide("util/typevalidator",function(e){using("util/util",function(t){function n(e){return e!==undefined&&e!==null&&e!==""}function r(e){return s(e)&&e%1===0}function i(e){return s(e)&&!r(e)}function s(e){return n(e)&&!isNaN(e)}function o(e){return n(e)&&t.toType(e)=="array"}function u(e){if(!n(e))return!1;switch(e){case"on":case"ON":case"true":case"TRUE":return!0;case"off":case"OFF":case"false":case"FALSE":return!1;default:return!!e}}function a(e){if(s(e))return e}function f(e){if(i(e))return e}function l(e){if(r(e))return e}e({hasValue:n,isInt:r,isFloat:i,isNumber:s,isArray:o,asInt:l,asFloat:f,asNumber:a,asBoolean:u})})});
provide("tfw/util/globals",function(e){using("util/typevalidator",function(t){function r(){var e=document.getElementsByTagName("meta"),t,r,i=0;n={};for(;t=e[i];i++){if(!/^twitter:/.test(t.name))continue;r=t.name.replace(/^twitter:/,""),n[r]=t.content}}function i(e){return n[e]}function s(e){return t.asBoolean(e)&&(n.dnt=!0),t.asBoolean(n.dnt)}var n;r(),e({init:r,val:i,dnt:s})})});
provide("util/logger",function(e){function n(e,n,r,i,s){window[t]&&window[t].log&&window[t].log(e,n,r,i,s)}function r(e,n,r,i,s){window[t]&&window[t].warn&&window[t].warn(e,n,r,i,s)}function i(e,n,r,i,s){window[t]&&window[t].error&&window[t].error(e,n,r,i,s)}var t=["con","sole"].join("");e({info:n,warn:r,error:i})});
provide("util/domready",function(e){function l(){t=1;for(var e=0,r=n.length;e<r;e++)n[e]()}var t=0,n=[],r,i,s=!1,o=document.createElement("a"),u="DOMContentLoaded",a="addEventListener",f="onreadystatechange";/^loade|c/.test(document.readyState)&&(t=1),document[a]&&document[a](u,i=function(){document.removeEventListener(u,i,s),l()},s),o.doScroll&&document.attachEvent(f,r=function(){/^c/.test(document.readyState)&&(document.detachEvent(f,r),l())});var c=o.doScroll?function(e){self!=top?t?e():n.push(e):!function(){try{o.doScroll("left")}catch(t){return setTimeout(function(){c(e)},50)}e()}()}:function(e){t?e():n.push(e)};e(c)});
provide("util/env",function(e){using("util/domready","util/typevalidator","util/logger","tfw/util/globals",function(t,n,r,i){function f(){return window.devicePixelRatio?window.devicePixelRatio>=1.5:window.matchMedia?window.matchMedia("only screen and (min-resolution: 144dpi)").matches:!1}function l(){return/MSIE \d/.test(s)}function c(){return/MSIE 6/.test(s)}function h(){return/MSIE 7/.test(s)}function p(){return/MSIE 9/.test(s)}function d(){return/(iPad|iPhone|iPod)/.test(s)}function v(){return/^Mozilla\/5\.0 \(Linux; (U; )?Android/.test(s)}function m(){return o}function g(){return"ontouchstart"in window||/Opera Mini/.test(s)||navigator.msMaxTouchPoints>0}function y(){var e=document.body.style;return e.transition!==undefined||e.webkitTransition!==undefined||e.mozTransition!==undefined||e.oTransition!==undefined||e.msTransition!==undefined}var s=window.navigator.userAgent,o=!1,u=!1,a="twitter-csp-test";window.twttr=window.twttr||{},twttr.verifyCSP=function(e){var t=document.getElementById(a);u=!0,o=!!e,t&&t.parentNode.removeChild(t)},t(function(){var e;if(c()||h())return o=!1;if(n.asBoolean(i.val("widgets:csp")))return o=!0;e=document.createElement("script"),e.id=a,e.text="twttr.verifyCSP(false);",document.body.appendChild(e),window.setTimeout(function(){if(u)return;r.warn('TWITTER: Content Security Policy restrictions may be applied to your site. Add <meta name="twitter:widgets:csp" content="on"> to supress this warning.'),r.warn("TWITTER: Please note: Not all embedded timeline and embedded Tweet functionality is supported when CSP is applied.")},5e3)}),e({retina:f,anyIE:l,ie6:c,ie7:h,ie9:p,ios:d,android:v,cspEnabled:m,touch:g,cssTransitions:y})})});
provide("dom/delegate",function(e){using("util/env",function(t){function i(e){var t=e.getAttribute("data-twitter-event-id");return t?t:(e.setAttribute("data-twitter-event-id",++r),r)}function s(e,t,n){var r=0,i=e&&e.length||0;for(r=0;r<i;r++)e[r].call(t,n)}function o(e,t,n){var r=n||e.target||e.srcElement,i=r.className.split(" "),u=0,a,f=i.length;for(;u<f;u++)s(t["."+i[u]],r,e);s(t[r.tagName],r,e);if(e.cease)return;r!==this&&o.call(this,e,t,r.parentElement||r.parentNode)}function u(e,t,n){if(e.addEventListener){e.addEventListener(t,function(r){o.call(e,r,n[t])},!1);return}e.attachEvent&&e.attachEvent("on"+t,function(){o.call(e,e.ownerDocument.parentWindow.event,n[t])})}function a(e,t,r,s){var o=i(e);n[o]=n[o]||{},n[o][t]||(n[o][t]={},u(e,t,n[o])),n[o][t][r]=n[o][t][r]||[],n[o][t][r].push(s)}function f(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,function(){n(window.event)})}function l(e,t,r){var s=i(t),u=n[s]&&n[s];o.call(t,{target:r},u[e])}function c(e){return p(e),h(e),!1}function h(e){e&&e.preventDefault?e.preventDefault():e.returnValue=!1}function p(e){e&&(e.cease=!0)&&e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}var n={},r=-1;e({stop:c,stopPropagation:p,preventDefault:h,delegate:a,on:f,simulate:l})})});
provide("tfw/util/article",function(e){using("dom/delegate","tfw/util/globals","util/uri","$xd/json2.js",function(t,n,r){function o(){i=r.getCanonicalURL()||""+document.location;if(!window.top.postMessage)return;if(window==window.top){t.on(window,"message",function(e){var t;if(e.data&&e.data[0]!="{")return;try{t=JSON.parse(e.data)}catch(r){}t&&t.name=="twttr:private:requestArticleUrl"&&e.source.postMessage(JSON.stringify({name:"twttr:private:provideArticleUrl",data:{url:i,dnt:n.dnt()}}),"*")});return}t.on(window,"message",function(e){var t;if(e.data&&e.data[0]!="{")return;try{t=JSON.parse(e.data)}catch(r){}t&&t.name=="twttr:private:provideArticleUrl"&&(i=t.data&&t.data.url,n.dnt(t.data.dnt),s=document.location.href)}),window.top.postMessage(JSON.stringify({name:"twttr:private:requestArticleUrl"}),"*")}var i,s="";o(),e({url:function(){return i},frameUrl:function(){return s}})})});
provide("util/promise",function(e){using("util/util",function(t){var n=function(e,t){setTimeout(function(){e.call(t)},1)},r=function(e){try{var t=e.then;if(typeof t=="function")return!0}catch(n){}return!1},i=function(e){Error.call(this,e)};i.prototype=t.createObject(Error.prototype);var s=function(){var e=[];return e.pump=function(t){n(function(){var n=e.length,r=0;while(r<n)r++,e.shift()(t)})},e},o=function(e,t,i,s,o,u){var a=!1,f=this,l=function(e){n(function(){u("fulfilled"),s(e),t.pump(e)})},c=function(e){n(function(){u("rejected"),o(e),i.pump(e)})},h=function(e){if(r(e)){e.then(h,c);return}l(e)},p=function(e,t){return function(t){a||(a=!0,e(t))}};this.resolve=p(h,"resolve"),this.fulfill=p(l,"fulfill"),this.reject=p(c,"reject"),this.cancel=function(){f.reject(new Error("Cancel"))},this.timeout=function(){f.reject(new Error("Timeout"))},u("pending")},u=function(e){var t=new s,n=new s,r,i,u="pending";this._addAcceptCallback=function(e){t.push(e),u=="fulfilled"&&t.pump(r)},this._addRejectCallback=function(e){n.push(e),u=="rejected"&&n.pump(i)};var a=new o(this,t,n,function(e){r=e},function(e){i=e},function(e){u=e});try{e&&e(a)}catch(f){a.reject(f)}},a=function(e){return typeof e=="function"},f=function(e,n,r){return a(e)?function(){try{var t=e.apply(null,arguments);n.resolve(t)}catch(r){n.reject(r)}}:t.bind(n[r],n)},l=function(e,t,n){return a(e)&&n._addAcceptCallback(e),a(t)&&n._addRejectCallback(t),n};t.aug(u.prototype,{then:function(e,t){var n=this;return new u(function(r){l(f(e,r,"resolve"),f(t,r,"reject"),n)})},"catch":function(e){var t=this;return new u(function(n){l(null,f(e,n,"reject"),t)})}}),u.isThenable=r;var c=function(e){return t.map(e,u.resolve)};u.any=function(){var e=c(arguments);return new u(function(n){if(!e.length)n.reject("No futures passed to Promise.any()");else{var r=!1,i=function(e){if(r)return;r=!0,n.resolve(e)},s=function(e){if(r)return;r=!0,n.reject(e)};t.forEach(e,function(e,t){e.then(i,s)})}})},u.every=function(){var e=c(arguments);return new u(function(n){if(!e.length)n.reject("No futures passed to Promise.every()");else{var r=new Array(e.length),i=0,s=function(t,s){i++,r[t]=s,i==e.length&&n.resolve(r)};t.forEach(e,function(e,r){e.then(t.bind(s,null,[r]),n.reject)})}})},u.some=function(){var e=c(arguments);return new u(function(n){if(!e.length)n.reject("No futures passed to Promise.some()");else{var r=0,i=function(t){r++,r==e.length&&n.reject()};t.forEach(e,function(e,t){e.then(n.resolve,i)})}})},u.fulfill=function(e){return new u(function(t){t.fulfill(e)})},u.resolve=function(e){return new u(function(t){t.resolve(e)})},u.reject=function(e){return new u(function(t){t.reject(e)})},e(u)})});
provide("util/layout",function(e){using("util/promise","util/logger",function(t,n){function s(){}var r=[],i;s.prototype.enqueue=function(e,n){return new t(function(t){r.push({action:e,resolver:t,note:n})})},s.prototype.exec=function(){var e=r,t;if(!e.length)return;r=[];while(e.length)t=e.shift(),t&&t.action?t.resolver.fulfill(t.action()):t.resolver.reject()},s.prototype.delayedExec=function(){i&&window.clearTimeout(i),i=window.setTimeout(this.exec,100)},e(s)})});
provide("util/iframe",function(e){using("util/util",function(t){e(function(e,n,r){var i;r=r||document,e=e||{},n=n||{};if(e.name){try{i=r.createElement('<iframe name="'+e.name+'"></iframe>')}catch(s){i=r.createElement("iframe"),i.name=e.name}delete e.name}else i=r.createElement("iframe");return e.id&&(i.id=e.id,delete e.id),i.allowtransparency="true",i.scrolling="no",i.setAttribute("frameBorder",0),i.setAttribute("allowTransparency",!0),t.forIn(e,function(e,t){i.setAttribute(e,t)}),t.forIn(n,function(e,t){i.style[e]=t}),i})})});
provide("dom/get",function(e){using("util/util",function(t){function r(e,t,r){return n(e,t,r,1)[0]}function i(e,n,r){var s=n&&n.parentNode,o;if(!s||s===r)return;return s.tagName==e?s:(o=s.className.split(" "),0===e.indexOf(".")&&~t.indexOf(o,e.slice(1))?s:i(e,s,r))}var n=function(){var e=document.getElementsByClassName;return t.isNative(e)?function(n,r,i,s){var o=r?r.getElementsByClassName(n):e.call(document,n),u=t.filter(o,function(e){return!i||e.tagName.toLowerCase()==i.toLowerCase()});return[].slice.call(u,0,s||u.length)}:function(e,n,r,i){var s,o,u=[],a,f,l,c,h,p;n=n||document,a=e.split(" "),c=a.length,s=n.getElementsByTagName(r||"*"),p=s.length;for(l=0;l<c&&p>0;l++){u=[],f=a[l];for(h=0;h<p;h++){o=s[h],~t.indexOf(o.className.split(" "),f)&&u.push(o);if(l+1==c&&u.length===i)break}s=u,p=s.length}return u}}();e({all:n,one:r,ancestor:i})})});
provide("tfw/widget/base",function(e){using("dom/get","util/domready","util/iframe","util/layout","util/promise","util/querystring","util/typevalidator","util/util","tfw/util/globals",function(t,n,r,i,s,o,u,a,f){function g(e){var t;if(!e)return;e.ownerDocument?(this.srcEl=e,this.classAttr=e.className.split(" ")):(this.srcOb=e,this.classAttr=[]),t=this.params(),this.id=this.generateId(),this.setLanguage(),this.related=t.related||this.dataAttr("related"),this.partner=t.partner||this.dataAttr("partner")||f.val("partner"),this.dnt=t.dnt||this.dataAttr("dnt")||f.dnt()||"",this.styleAttr=[],this.targetEl=e.targetEl,this.completePromise=new s(a.bind(function(e){this.completeResolver=e},this)),this.completed().then(function(e){if(!e||e==document.body)return;twttr.events.trigger("rendered",{target:e})})}function y(){a.forEach(p,function(e){e()}),g.doLayout()}function b(e){if(!e)return;return e.lang?e.lang:b(e.parentNode)}var l=0,c,h={list:[],byId:{}},p=[],d=new i,v="data-twttr-rendered",m={ar:{"%{followers_count} followers":"Ø¹Ø¯Ø¯ Ø§Ù„Ù…ØªØ§Ø¨Ø¹ÙŠÙ† %{followers_count}","100K+":"+100 Ø£Ù„Ù","10k unit":"10 Ø¢Ù„Ø§Ù ÙˆØ­Ø¯Ø©",Follow:"ØªØ§Ø¨ÙØ¹","Follow %{screen_name}":"ØªØ§Ø¨ÙØ¹ %{screen_name}",K:"Ø£Ù„Ù",M:"Ù…Ù„ÙŠÙˆÙ†",Tweet:"ØºØ±ÙÙ‘Ø¯","Tweet %{hashtag}":"ØºØ±ÙÙ‘Ø¯ %{hashtag}","Tweet to %{name}":"ØºØ±ÙÙ‘Ø¯ Ù„Ù€ %{name}"},da:{"%{followers_count} followers":"%{followers_count} fÃ¸lgere","10k unit":"10k enhed",Follow:"FÃ¸lg","Follow %{screen_name}":"FÃ¸lg %{screen_name}","Tweet to %{name}":"Tweet til %{name}"},de:{"%{followers_count} followers":"%{followers_count} Follower","100K+":"100Tsd+","10k unit":"10tsd-Einheit",Follow:"Folgen","Follow %{screen_name}":"%{screen_name} folgen",K:"Tsd",Tweet:"Twittern","Tweet to %{name}":"Tweet an %{name}"},es:{"%{followers_count} followers":"%{followers_count} seguidores","10k unit":"10k unidad",Follow:"Seguir","Follow %{screen_name}":"Seguir a %{screen_name}",Tweet:"Twittear","Tweet %{hashtag}":"Twittear %{hashtag}","Tweet to %{name}":"Twittear a %{name}"},fa:{"%{followers_count} followers":"%{followers_count} Ø¯Ù†Ø¨Ø§Ù„â€ŒÚ©Ù†Ù†Ø¯Ù‡","100K+":">Û±Û°Û°Ù‡Ø²Ø§Ø±","10k unit":"Û±Û°Ù‡Ø²Ø§Ø± ÙˆØ§Ø­Ø¯",Follow:"Ø¯Ù†Ø¨Ø§Ù„ Ú©Ø±Ø¯Ù†","Follow %{screen_name}":"Ø¯Ù†Ø¨Ø§Ù„ Ú©Ø±Ø¯Ù† %{screen_name}",K:"Ù‡Ø²Ø§Ø±",M:"Ù…ÛŒÙ„ÛŒÙˆÙ†",Tweet:"ØªÙˆÛŒÛŒØª","Tweet %{hashtag}":"ØªÙˆÛŒÛŒØª Ú©Ø±Ø¯Ù† %{hashtag}","Tweet to %{name}":"Ø¨Ù‡ %{name} ØªÙˆÛŒÛŒØª Ú©Ù†ÛŒØ¯"},fi:{"%{followers_count} followers":"%{followers_count} seuraajaa","100K+":"100 000+","10k unit":"10 000 yksikkÃ¶Ã¤",Follow:"Seuraa","Follow %{screen_name}":"Seuraa kÃ¤yttÃ¤jÃ¤Ã¤ %{screen_name}",K:"tuhatta",M:"milj.",Tweet:"Twiittaa","Tweet %{hashtag}":"Twiittaa %{hashtag}","Tweet to %{name}":"Twiittaa kÃ¤yttÃ¤jÃ¤lle %{name}"},fil:{"%{followers_count} followers":"%{followers_count} mga tagasunod","10k unit":"10k yunit",Follow:"Sundan","Follow %{screen_name}":"Sundan si %{screen_name}",Tweet:"I-tweet","Tweet %{hashtag}":"I-tweet ang %{hashtag}","Tweet to %{name}":"Mag-Tweet kay %{name}"},fr:{"%{followers_count} followers":"%{followers_count} abonnÃ©s","10k unit":"unitÃ© de 10k",Follow:"Suivre","Follow %{screen_name}":"Suivre %{screen_name}",Tweet:"Tweeter","Tweet %{hashtag}":"Tweeter %{hashtag}","Tweet to %{name}":"Tweeter Ã  %{name}"},he:{"%{followers_count} followers":"%{followers_count} ×¢×•×§×‘×™×","100K+":"×ž××•×ª ××œ×¤×™×","10k unit":"×¢×©×¨×•×ª ××œ×¤×™×",Follow:"×ž×¢×§×‘","Follow %{screen_name}":"×œ×¢×§×•×‘ ××—×¨ %{screen_name}",K:"××œ×£",M:"×ž×™×œ×™×•×Ÿ",Tweet:"×¦×™×•×¥","Tweet %{hashtag}":"×¦×™×™×¦×• %{hashtag}","Tweet to %{name}":"×¦×™×•×¥ ××œ %{name}"},hi:{"%{followers_count} followers":"%{followers_count} à¤«à¤¼à¥‰à¤²à¥‹à¤…à¤°à¥à¤¸","100K+":"1 à¤²à¤¾à¤–+","10k unit":"10 à¤¹à¤œà¤¾à¤° à¤‡à¤•à¤¾à¤ˆà¤¯à¤¾à¤‚",Follow:"à¤«à¤¼à¥‰à¤²à¥‹","Follow %{screen_name}":"%{screen_name} à¤•à¥‹ à¤«à¤¼à¥‰à¤²à¥‹ à¤•à¤°à¥‡à¤‚",K:"à¤¹à¤œà¤¾à¤°",M:"à¤®à¤¿à¤²à¤¿à¤¯à¤¨",Tweet:"à¤Ÿà¥à¤µà¥€à¤Ÿ","Tweet %{hashtag}":"à¤Ÿà¥à¤µà¥€à¤Ÿ %{hashtag}","Tweet to %{name}":"%{name} à¤•à¥‹ à¤Ÿà¥à¤µà¥€à¤Ÿ à¤•à¤°à¥‡à¤‚"},hu:{"%{followers_count} followers":"%{followers_count} kÃ¶vetÅ‘","100K+":"100E+","10k unit":"10E+",Follow:"KÃ¶vetÃ©s","Follow %{screen_name}":"%{screen_name} kÃ¶vetÃ©se",K:"E","Tweet %{hashtag}":"%{hashtag} tweetelÃ©se","Tweet to %{name}":"Tweet kÃ¼ldÃ©se neki: %{name}"},id:{"%{followers_count} followers":"%{followers_count} pengikut","100K+":"100 ribu+","10k unit":"10 ribu unit",Follow:"Ikuti","Follow %{screen_name}":"Ikuti %{screen_name}",K:"&nbsp;ribu",M:"&nbsp;juta","Tweet to %{name}":"Tweet ke %{name}"},it:{"%{followers_count} followers":"%{followers_count} follower","10k unit":"10k unitÃ ",Follow:"Segui","Follow %{screen_name}":"Segui %{screen_name}","Tweet %{hashtag}":"Twitta %{hashtag}","Tweet to %{name}":"Twitta a %{name}"},ja:{"%{followers_count} followers":"%{followers_count}äººã®ãƒ•ã‚©ãƒ­ãƒ¯ãƒ¼","100K+":"100Kä»¥ä¸Š","10k unit":"ä¸‡",Follow:"ãƒ•ã‚©ãƒ­ãƒ¼ã™ã‚‹","Follow %{screen_name}":"%{screen_name}ã•ã‚“ã‚’ãƒ•ã‚©ãƒ­ãƒ¼",Tweet:"ãƒ„ã‚¤ãƒ¼ãƒˆ","Tweet %{hashtag}":"%{hashtag} ã‚’ãƒ„ã‚¤ãƒ¼ãƒˆã™ã‚‹","Tweet to %{name}":"%{name}ã•ã‚“ã¸ãƒ„ã‚¤ãƒ¼ãƒˆã™ã‚‹"},ko:{"%{followers_count} followers":"%{followers_count}ëª…ì˜ íŒ”ë¡œì›Œ","100K+":"100ë§Œ ì´ìƒ","10k unit":"ë§Œ ë‹¨ìœ„",Follow:"íŒ”ë¡œìš°","Follow %{screen_name}":"%{screen_name} ë‹˜ íŒ”ë¡œìš°í•˜ê¸°",K:"ì²œ",M:"ë°±ë§Œ",Tweet:"íŠ¸ìœ—","Tweet %{hashtag}":"%{hashtag} ê´€ë ¨ íŠ¸ìœ—í•˜ê¸°","Tweet to %{name}":"%{name}ë‹˜ì—ê²Œ íŠ¸ìœ—í•˜ê¸°"},msa:{"%{followers_count} followers":"%{followers_count} pengikut","100K+":"100 ribu+","10k unit":"10 ribu unit",Follow:"Ikut","Follow %{screen_name}":"Ikut %{screen_name}",K:"ribu",M:"juta","Tweet to %{name}":"Tweet kepada %{name}"},nl:{"%{followers_count} followers":"%{followers_count} volgers","100K+":"100k+","10k unit":"10k-eenheid",Follow:"Volgen","Follow %{screen_name}":"%{screen_name} volgen",K:"k",M:" mln.",Tweet:"Tweeten","Tweet %{hashtag}":"%{hashtag} tweeten","Tweet to %{name}":"Tweeten naar %{name}"},no:{"%{followers_count} followers":"%{followers_count} fÃ¸lgere","100K+":"100 K+","10k unit":"10-K-enhet",Follow:"FÃ¸lg","Follow %{screen_name}":"FÃ¸lg %{screen_name}","Tweet to %{name}":"Send en tweet til %{name}"},pl:{"%{followers_count} followers":"%{followers_count} obserwujÄ…cych","100K+":"100 tys.+","10k unit":"10 tys.",Follow:"Obserwuj","Follow %{screen_name}":"Obserwuj %{screen_name}",K:"tys.",M:"mln",Tweet:"Tweetnij","Tweet %{hashtag}":"Tweetnij %{hashtag}","Tweet to %{name}":"Tweetnij do %{name}"},pt:{"%{followers_count} followers":"%{followers_count} seguidores","100K+":"+100 mil","10k unit":"10 mil unidades",Follow:"Seguir","Follow %{screen_name}":"Seguir %{screen_name}",K:"Mil",Tweet:"Tweetar","Tweet %{hashtag}":"Tweetar %{hashtag}","Tweet to %{name}":"Tweetar para %{name}"},ru:{"%{followers_count} followers":"Ð§Ð¸Ñ‚Ð°Ñ‚ÐµÐ»Ð¸: %{followers_count} ","100K+":"100 Ñ‚Ñ‹Ñ.+","10k unit":"Ð±Ð»Ð¾Ðº 10k",Follow:"Ð§Ð¸Ñ‚Ð°Ñ‚ÑŒ","Follow %{screen_name}":"Ð§Ð¸Ñ‚Ð°Ñ‚ÑŒ %{screen_name}",K:"Ñ‚Ñ‹Ñ.",M:"Ð¼Ð»Ð½.",Tweet:"Ð¢Ð²Ð¸Ñ‚Ð½ÑƒÑ‚ÑŒ","Tweet %{hashtag}":"Ð¢Ð²Ð¸Ñ‚Ð½ÑƒÑ‚ÑŒ %{hashtag}","Tweet to %{name}":"Ð¢Ð²Ð¸Ñ‚Ð½ÑƒÑ‚ÑŒ %{name}"},sv:{"%{followers_count} followers":"%{followers_count} fÃ¶ljare","10k unit":"10k",Follow:"FÃ¶lj","Follow %{screen_name}":"FÃ¶lj %{screen_name}",Tweet:"Tweeta","Tweet %{hashtag}":"Tweeta %{hashtag}","Tweet to %{name}":"Tweeta till %{name}"},th:{"%{followers_count} followers":"%{followers_count} à¸œà¸¹à¹‰à¸•à¸´à¸”à¸•à¸²à¸¡","100K+":"100à¸žà¸±à¸™+","10k unit":"à¸«à¸™à¹ˆà¸§à¸¢ 10à¸žà¸±à¸™",Follow:"à¸•à¸´à¸”à¸•à¸²à¸¡","Follow %{screen_name}":"à¸•à¸´à¸”à¸•à¸²à¸¡ %{screen_name}",M:"à¸¥à¹‰à¸²à¸™",Tweet:"à¸—à¸§à¸µà¸•","Tweet %{hashtag}":"à¸—à¸§à¸µà¸• %{hashtag}","Tweet to %{name}":"à¸—à¸§à¸µà¸•à¸–à¸¶à¸‡ %{name}"},tr:{"%{followers_count} followers":"%{followers_count} takipÃ§i","100K+":"+100 bin","10k unit":"10 bin birim",Follow:"Takip et","Follow %{screen_name}":"Takip et: %{screen_name}",K:"bin",M:"milyon",Tweet:"Tweetle","Tweet %{hashtag}":"Tweetle: %{hashtag}","Tweet to %{name}":"Tweetle: %{name}"},ur:{"%{followers_count} followers":"%{followers_count} ÙØ§Ù„ÙˆØ±Ø²","100K+":"Ø§ÛŒÚ© Ù„Ø§Ú©Ú¾ Ø³Û’ Ø²ÛŒØ§Ø¯Û","10k unit":"Ø¯Ø³ ÛØ²Ø§Ø± ÛŒÙˆÙ†Ù¹",Follow:"ÙØ§Ù„Ùˆ Ú©Ø±ÛŒÚº","Follow %{screen_name}":"%{screen_name} Ú©Ùˆ ÙØ§Ù„Ùˆ Ú©Ø±ÛŒÚº",K:"ÛØ²Ø§Ø±",M:"Ù…Ù„ÛŒÙ†",Tweet:"Ù¹ÙˆÛŒÙ¹ Ú©Ø±ÛŒÚº","Tweet %{hashtag}":"%{hashtag} Ù¹ÙˆÛŒÙ¹ Ú©Ø±ÛŒÚº","Tweet to %{name}":"%{name} Ú©Ùˆ Ù¹ÙˆÛŒÙ¹ Ú©Ø±ÛŒÚº"},"zh-cn":{"%{followers_count} followers":"%{followers_count} å…³æ³¨è€…","100K+":"10ä¸‡+","10k unit":"1ä¸‡å•å…ƒ",Follow:"å…³æ³¨","Follow %{screen_name}":"å…³æ³¨ %{screen_name}",K:"åƒ",M:"ç™¾ä¸‡",Tweet:"å‘æŽ¨","Tweet %{hashtag}":"ä»¥ %{hashtag} å‘æŽ¨","Tweet to %{name}":"å‘æŽ¨ç»™ %{name}"},"zh-tw":{"%{followers_count} followers":"%{followers_count} ä½è·Ÿéš¨è€…","100K+":"è¶…éŽåè¬","10k unit":"1è¬ å–®ä½",Follow:"è·Ÿéš¨","Follow %{screen_name}":"è·Ÿéš¨ %{screen_name}",K:"åƒ",M:"ç™¾è¬",Tweet:"æŽ¨æ–‡","Tweet %{hashtag}":"æŽ¨æ–‡%{hashtag}","Tweet to %{name}":"æŽ¨æ–‡çµ¦%{name}"}};a.aug(g.prototype,{setLanguage:function(e){var t;e||(e=this.params().lang||this.dataAttr("lang")||b(this.srcEl)),e=e&&e.toLowerCase();if(!e)return this.lang="en";if(m[e])return this.lang=e;t=e.replace(/[\-_].*/,"");if(m[t])return this.lang=t;this.lang="en"},_:function(e,t){var n=this.lang;t=t||{};if(!n||!m.hasOwnProperty(n))n=this.lang="en";return e=m[n]&&m[n][e]||e,this.ringo(e,t,/%\{([\w_]+)\}/g)},ringo:function(e,t,n){return n=n||/\{\{([\w_]+)\}\}/g,e.replace(n,function(e,n){return t[n]!==undefined?t[n]:e})},add:function(e){h.list.push(this),h.byId[this.id]=e},create:function(e,t,n){var i=this,o;return n[v]=!0,o=r(a.aug({id:this.id,src:e,"class":this.classAttr.join(" ")},n),t,this.targetEl&&this.targetEl.ownerDocument),this.srcEl?this.layout(function(){return i.srcEl.parentNode.replaceChild(o,i.srcEl),i.completeResolver.fulfill(o),o}):this.targetEl?this.layout(function(){return i.targetEl.appendChild(o),i.completeResolver.fulfill(o),o}):s.reject("Did not append widget")},params:function(){var e,t;return this.srcOb?t=this.srcOb:(e=this.srcEl&&this.srcEl.href&&this.srcEl.href.split("?")[1],t=e?o.decode(e):{}),this.params=function(){return t},t},dataAttr:function(e){return this.srcEl&&this.srcEl.getAttribute("data-"+e)},attr:function(e){return this.srcEl&&this.srcEl.getAttribute(e)},layout:function(e){return d.enqueue(e)},styles:{base:[["font","normal normal normal 11px/18px 'Helvetica Neue', Arial, sans-serif"],["margin","0"],["padding","0"],["whiteSpace","nowrap"]],button:[["fontWeight","bold"],["textShadow","0 1px 0 rgba(255,255,255,.5)"]],large:[["fontSize","13px"],["lineHeight","26px"]],vbubble:[["fontSize","16px"]]},width:function(){throw new Error(name+" not implemented")},height:function(){return this.size=="m"?20:28},minWidth:function(){},maxWidth:function(){},minHeight:function(){},maxHeight:function(){},dimensions:function(){function e(e){switch(typeof e){case"string":return e;case"undefined":return;default:return e+"px"}}var t={width:this.width(),height:this.height()};return this.minWidth()&&(t["min-width"]=this.minWidth()),this.maxWidth()&&(t["max-width"]=this.maxWidth()),this.minHeight()&&(t["min-height"]=this.minHeight()),this.maxHeight()&&(t["max-height"]=this.maxHeight()),a.forIn(t,function(n,r){t[n]=e(r)}),t},generateId:function(){return this.srcEl&&this.srcEl.id||"twitter-widget-"+l++},completed:function(){return this.completePromise}}),g.afterLoad=function(e){p.push(e)},g.doLayout=function(){d.exec()},g.doLayoutAsync=function(){d.delayedExec()},g.init=function(e){c=e},g.find=function(e){return e&&h.byId[e]?h.byId[e].element:null},g.embed=function(e){var n=c.widgets,r=[],i=[];u.isArray(e)||(e=[e||document]),a.forEach(e,function(e){a.forIn(n,function(n,i){var s,o;n.match(/\./)?(s=n.split("."),o=t.all(s[1],e,s[0])):o=e.getElementsByTagName(n),a.forEach(o,function(e){if(e.getAttribute(v))return;e.setAttribute(v,"true"),r.push(new i(e))})})}),g.doLayout(),a.forEach(r,function(e){h.byId[e.id]=e,h.list.push(e),i.push(e.completed()),e.render(c)}),s.every.apply(null,i).then(function(e){e=a.filter(e,function(t){return t});if(!e.length)return;twttr.events.trigger("loaded",{widgets:e})}),g.doLayoutAsync(),y()},window.setInterval(function(){g.doLayout()},500),e(g)})});
provide("tfw/widget/intent",function(e){using("tfw/widget/base","util/util","util/querystring","util/uri","util/promise",function(t,n,r,i,s){function p(e){var t=Math.round(c/2-a/2),n=0;l>f&&(n=Math.round(l/2-f/2)),window.open(e,undefined,[u,"width="+a,"height="+f,"left="+t,"top="+n].join(","))}function d(e,t){using("tfw/hub/client",function(n){n.openIntent(e,t)})}function v(e){var t="original_referer="+location.href;return[e,t].join(e.indexOf("?")==-1?"?":"&")}function m(e){var t,r,i,s;e=e||window.event,t=e.target||e.srcElement;if(e.altKey||e.metaKey||e.shiftKey)return;while(t){if(~n.indexOf(["A","AREA"],t.nodeName))break;t=t.parentNode}t&&t.href&&(r=t.href.match(o),r&&(s=v(t.href),s=s.replace(/^http[:]/,"https:"),s=s.replace(/^\/\//,"https://"),g(s,t),e.returnValue=!1,e.preventDefault&&e.preventDefault()))}function g(e,t){if(twttr.events.hub&&t){var n=new y(h.generateId(),t);h.add(n),d(e,t),twttr.events.trigger("click",{target:t,region:"intent",type:"click",data:{}})}else p(e)}function y(e,t){this.id=e,this.element=this.srcEl=t}function b(e){this.srcEl=[],this.element=e}var o=/twitter\.com(\:\d{2,4})?\/intent\/(\w+)/,u="scrollbars=yes,resizable=yes,toolbar=no,location=yes",a=550,f=520,l=screen.height,c=screen.width,h;b.prototype=new t,n.aug(b.prototype,{render:function(e){return h=this,window.__twitterIntentHandler||(document.addEventListener?document.addEventListener("click",m,!1):document.attachEvent&&document.attachEvent("onclick",m),window.__twitterIntentHandler=!0),s.fulfill(document.body)}}),b.open=g,e(b)})});
provide("dom/classname",function(e){function t(e){return new RegExp("\\b"+e+"\\b","g")}function n(e,n){if(e.classList){e.classList.add(n);return}t(n).test(e.className)||(e.className+=" "+n)}function r(e,n){if(e.classList){e.classList.remove(n);return}e.className=e.className.replace(t(n)," ")}function i(e,t,i){return e.classList&&e.classList.toggle?e.classList.toggle(t,i):(i?n(e,t):r(e,t),i)}function s(e,i,s){if(e.classList&&o(e,i)){r(e,i),n(e,s);return}e.className=e.className.replace(t(i),s)}function o(e,n){return e.classList?e.classList.contains(n):t(n).test(e.className)}e({add:n,remove:r,replace:s,toggle:i,present:o})});
provide("util/throttle",function(e){function t(e,t,n){function o(){var n=+(new Date);window.clearTimeout(s);if(n-i>t){i=n,e.call(r);return}s=window.setTimeout(o,t)}var r=n||this,i=0,s;return o}e(t)});
provide("util/css",function(e){using("util/util",function(t){e({sanitize:function(e,n,r){var i=/^[\w ,%\/"'\-_#]+$/,s=e&&t.map(e.split(";"),function(e){return t.map(e.split(":").slice(0,2),function(e){return t.trim(e)})}),o=0,u,a=[],f=r?"!important":"";n=n||/^(font|text\-|letter\-|color|line\-)[\w\-]*$/;for(;s&&(u=s[o]);o++)u[0].match(n)&&u[1].match(i)&&a.push(u.join(":")+f);return a.join(";")}})})});
provide("tfw/util/params",function(e){using("util/querystring","util/twitter",function(t,n){e(function(e,r){return function(i){var s,o="data-tw-params",u,a=i.innerHTML;if(!i)return;if(!n.isTwitterURL(i.href))return;if(i.getAttribute(o))return;i.setAttribute(o,!0);if(typeof r=="function"){s=r.call(this,i);for(u in s)s.hasOwnProperty(u)&&(e[u]=s[u])}i.href=t.url(i.href,e)}})})});
provide("util/params",function(e){using("util/querystring",function(t){var n=function(e){var n=e.search.substr(1);return t.decode(n)},r=function(e){var n=e.href,r=n.indexOf("#"),i=r<0?"":n.substring(r+1);return t.decode(i)},i=function(e){var t={},i=n(e),s=r(e);for(var o in i)i.hasOwnProperty(o)&&(t[o]=i[o]);for(var o in s)s.hasOwnProperty(o)&&(t[o]=s[o]);return t};e({combined:i,fromQuery:n,fromFragment:r})})});
provide("tfw/util/env",function(e){using("util/params",function(t){function r(){var e=36e5,r=t.combined(document.location)._;return n!==undefined?n:(n=!1,r&&/^\d+$/.test(r)&&(n=+(new Date)-parseInt(r)<e),n)}var n;e({isDynamicWidget:r})})});
provide("dom/cookie",function(e){using("util/util",function(t){e(function(e,n,r){var i=t.aug({},r);if(arguments.length>1&&String(n)!=="[object Object]"){if(n===null||n===undefined)i.expires=-1;if(typeof i.expires=="number"){var s=i.expires,o=new Date((new Date).getTime()+s*60*1e3);i.expires=o}return n=String(n),document.cookie=[encodeURIComponent(e),"=",i.raw?n:encodeURIComponent(n),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}i=n||{};var u,a=i.raw?function(e){return e}:decodeURIComponent;return(u=(new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)")).exec(document.cookie))?a(u[1]):null})})});
provide("util/donottrack",function(e){using("dom/cookie",function(t){e(function(e,n){var r=/\.(gov|mil)(:\d+)?$/i,i=/https?:\/\/([^\/]+).*/i;return e=e||document.referrer,e=i.test(e)&&i.exec(e)[1],n=n||document.location.host,t("dnt")?!0:r.test(n)?!0:e&&r.test(e)?!0:document.navigator?document.navigator["doNotTrack"]==1:navigator?navigator["doNotTrack"]==1||navigator["msDoNotTrack"]==1:!1})})});
provide("tfw/util/guest_cookie",function(e){using("dom/cookie","util/donottrack",function(t,n){function i(){}function s(){t(r)&&t(r,null,{domain:".twitter.com",path:"/"})}function o(){n()&&s()}var r="pid";e({set:o,destroy:s,forceNewCookie:i,guest_id_cookie:r})})});
provide("sandbox/baseframe",function(e){using("util/domready","util/env","util/iframe","util/promise","util/util",function(t,n,r,i,s){function u(e,t,n,o){var u;this.readyPromise=new i(s.bind(function(e){this.resolver=e},this)),this.attrs=e||{},this.styles=t||{},this.appender=n||function(e){document.body.appendChild(e)},this.layout=o||function(e){return new i(function(t){return t.fulfill(e())})},this.frame=u=r(this.attrs,this.styles),u.onreadystatechange=u.onload=this.getCallback(this.onLoad),this.layout(s.bind(function(){this.appender(u)},this))}var o=0;window.twttr=window.twttr||{},window.twttr.sandbox=window.twttr.sandbox||{},u.prototype.getCallback=function(e){var t=this,n=!1;return function(){n||(n=!0,e.call(t))}},u.prototype.registerCallback=function(e){var t="cb"+o++;return window.twttr.sandbox[t]=e,t},u.prototype.onLoad=function(){try{this.document=this.frame.contentWindow.document}catch(e){this.setDocDomain();return}this.writeStandardsDoc(),this.resolver.fulfill(this)},u.prototype.ready=function(){return this.readyPromise},u.prototype.setDocDomain=function(){var e=r(this.attrs,this.styles),t=this.registerCallback(this.getCallback(this.onLoad));e.src=["javascript:",'document.write("");',"try { window.parent.document; }","catch (e) {",'document.domain="'+document.domain+'";',"}",'window.parent.twttr.sandbox["'+t+'"]();'].join(""),this.layout(s.bind(function(){this.frame.parentNode.removeChild(this.frame),this.frame=null,this.appender?this.appender(e):document.body.appendChild(e),this.frame=e},this))},u.prototype.writeStandardsDoc=function(){if(!n.anyIE()||n.cspEnabled())return;var e=["<!DOCTYPE html>","<html>","<head>","<scr","ipt>","try { window.parent.document; }",'catch (e) {document.domain="'+document.domain+'";}',"</scr","ipt>","</head>","<body></body>","</html>"].join("");this.document.write(e),this.document.close()},e(u)})});
provide("sandbox/minimal",function(e){using("sandbox/baseframe","util/env","util/promise","util/util",function(t,n,r,i){function s(e,t){if(!e)return;this._frame=e,this._win=e.contentWindow,this._doc=this._win.document,this._body=this._doc.body,this._head=this._body.parentNode.children[0],this.layout=t}i.aug(s.prototype,{createElement:function(e){return this._doc.createElement(e)},createDocumentFragment:function(){return this._doc.createDocumentFragment()},appendChild:function(e){return this.layout(i.bind(function(){return this._body.appendChild(e)},this))},setBaseTarget:function(e){var t=this._doc.createElement("base");return t.target=e,this.layout(i.bind(function(){return this._head.appendChild(t)},this))},setTitle:function(e){if(!e)return;this._frame.title=e},element:function(){return this._frame},document:function(){return this._doc}}),s.createSandbox=function(e,n,r,i){var o=new t(e,n,r,i);return o.ready().then(function(e){return new s(e.frame,e.layout)})},e(s)})});
provide("tfw/util/tracking",function(e){using("dom/cookie","dom/delegate","sandbox/minimal","util/donottrack","util/promise","tfw/util/guest_cookie","tfw/util/env","util/iframe","util/util","$xd/json2.js",function(t,n,r,i,s,o,u,a,f){function E(){return y?y:y=r.createSandbox({id:"rufous-sandbox"},{display:"none"}).then(f.bind(function(e){g=e,p=D(),d=P();while(v[0])k.apply(this,v.shift());return m?L():[p,d]},this))}function S(e,t,n,r){var i=!f.isObject(e),s=t?!f.isObject(t):!1,o,u;if(i||s)return;o=O(e),u=M(t,!!n,!!r),C(o,u,!0)}function x(e,t,n,r,i){var s=T(e.target||e.srcElement);s.action=i||"click",S(s,t,n,r)}function T(e,t){var n;return t=t||{},!e||e.nodeType!==1?t:((n=e.getAttribute("data-scribe"))&&f.forEach(n.split(" "),function(e){var n=f.trim(e).split(":"),r=n[0],i=n[1];r&&i&&!t[r]&&(t[r]=i)}),T(e.parentNode,t))}function N(e,t,n){var r=l+t;if(!e)return;return e[r]=n,e}function C(e,t,n){var r,i,s,o,u=b+"?";if(!f.isObject(e)||!f.isObject(t))return;s=f.aug({},t,{event_namespace:e}),n?(u+=_({l:j(s)}),H(u)):(r=p.firstChild,r.value=+r.value||+s.dnt,o=j(s),i=g.createElement("input"),i.type="hidden",i.name="l",i.value=o,p.appendChild(i))}function k(e,t,n,r){var i=!f.isObject(e),s=t?!f.isObject(t):!1,o,u;if(i||s)return;if(!g||!p){v.push([e,t,n,r]);return}o=O(e),u=M(t,!!n,!!r),C(o,u)}function L(){if(!p)return m=!0,y||s.reject();if(p.children.length<=2)return s.reject();var e=s.every(g.appendChild(p),g.appendChild(d)).then(function(e){var t=e[0],r=e[1];return n.on(r,"load",function(){window.setTimeout(A(t,r),0)}),t.submit(),e});return p=D(),d=P(),e}function A(e,t){return function(){var n=e.parentNode;if(!n)return;n.removeChild(e),n.removeChild(t)}}function O(e){return f.aug({client:"tfw"},e||{})}function M(e,t,n){var r={_category_:"tfw_client_event"},s,o;return t=!!t,n=!!n,s=f.aug(r,e||{}),o=s.widget_origin||document.referrer,s.format_version=1,s.dnt=n=n||i(o),s.triggered_on=s.triggered_on||+(new Date),t||(s.widget_origin=o),n&&B(s),s}function _(e){var t=[],n,r,i;for(n in e)e.hasOwnProperty(n)&&(r=encodeURIComponent(n),i=encodeURIComponent(e[n]),i=i.replace(/'/g,"%27"),t.push(r+"="+i));return t.join("&")}function D(){var e=g.createElement("form"),t=g.createElement("input"),n=g.createElement("input");return h++,e.action=b,e.method="POST",e.target="rufous-frame-"+h,e.id="rufous-form-"+h,t.type="hidden",t.name="dnt",t.value=0,n.type="hidden",n.name="tfw_redirect",n.value=w,e.appendChild(t),e.appendChild(n),e}function P(){var e="rufous-frame-"+h;return a({id:e,name:e,width:0,height:0,border:0},{display:"none"},g.document())}function H(e){var t=new Image;t.src=e}function B(e){f.forIn(e,function(t){~f.indexOf(c,t)&&delete e[t]})}function j(e){var t=Array.prototype.toJSON,n;return delete Array.prototype.toJSON,n=JSON.stringify(e),t&&(Array.prototype.toJSON=t),n}var l="twttr_",c=["hask","li","logged_in","pid","user_id",o.guest_id_cookie,l+"hask",l+"li",l+o.guest_id_cookie],h=0,p,d,v=[],m,g,y,b="https://twitter.com/i/jot",w="https://platform.twitter.com/jot.html";o.forceNewCookie(),e({enqueue:k,flush:L,initPostLogging:E,scribeInteraction:x,extractTermsFromDOM:T,addPixel:S,addVar:N})})});
provide("tfw/util/data",function(e){using("util/logger","util/util","util/querystring",function(t,n,r){function c(e){return function(n){n.error?e.error&&e.error(n):n.headers&&n.headers.status!=200?(e.error&&e.error(n),t.warn(n.headers.message)):e.success&&e.success(n),e.complete&&e.complete(n),h(e)}}function h(e){var t=e.script;t&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),e.script=undefined,t=undefined),e.callbackName&&twttr.tfw.callbacks[e.callbackName]&&delete twttr.tfw.callbacks[e.callbackName]}function p(e){var t={};return e.success&&n.isType("function",e.success)&&(t.success=e.success),e.error&&n.isType("function",e.error)&&(t.error=e.error),e.complete&&n.isType("function",e.complete)&&(t.complete=e.complete),t}window.twttr=window.twttr||{},twttr.tfw=twttr.tfw||{},twttr.tfw.callbacks=twttr.tfw.callbacks||{};var i="twttr.tfw.callbacks",s=twttr.tfw.callbacks,o="cb",u=0,a=!1,f={},l={tweets:"https://syndication.twitter.com/tweets.json",timeline:"https://cdn.syndication.twimg.com/widgets/timelines/",timelinePoll:"https://syndication.twitter.com/widgets/timelines/paged/",timelinePreview:"https://syndication.twitter.com/widgets/timelines/preview/"};twttr.widgets&&twttr.widgets.endpoints&&n.aug(l,twttr.widgets.endpoints),f.jsonp=function(e,t,n){var f=n||o+u,l=i+"."+f,h=document.createElement("script"),p={callback:l,suppress_response_codes:!0};s[f]=c(t);if(a||!/^https?\:$/.test(window.location.protocol))e=e.replace(/^\/\//,"https://");h.src=r.url(e,p),h.async="async",document.body.appendChild(h),t.script=h,t.callbackName=f,n||u++},f.config=function(e){if(e.forceSSL===!0||e.forceSSL===!1)a=e.forceSSL},f.tweets=function(e){var t=arguments[0],n=p(t),i={ids:e.ids.join(","),lang:e.lang},s=r.url(l.tweets,i);this.jsonp(s,n)},f.timeline=function(e){var t=arguments[0],i=p(t),s,o=9e5,u=Math.floor(+(new Date)/o),a={lang:e.lang,t:u,domain:window.location.host,dnt:e.dnt,override_type:e.overrideType,override_id:e.overrideId,override_name:e.overrideName,override_owner_id:e.overrideOwnerId,override_owner_name:e.overrideOwnerName,with_replies:e.withReplies};n.compact(a),s=r.url(l.timeline+e.id,a),this.jsonp(s,i,"tl_"+e.id+"_"+e.instanceId)},f.timelinePoll=function(e){var t=arguments[0],i=p(t),s={lang:e.lang,since_id:e.sinceId,max_id:e.maxId,min_position:e.minPosition,max_position:e.maxPosition,domain:window.location.host,dnt:e.dnt,override_type:e.overrideType,override_id:e.overrideId,override_name:e.overrideName,override_owner_id:e.overrideOwnerId,override_owner_name:e.overrideOwnerName,with_replies:e.withReplies},o;n.compact(s),o=r.url(l.timelinePoll+e.id,s),this.jsonp(o,i,"tlPoll_"+e.id+"_"+e.instanceId+"_"+(e.sinceId||e.maxId||e.maxPosition||e.minPosition))},f.timelinePreview=function(e){var t=arguments[0],n=p(t),i=e.params,s=r.url(l.timelinePreview,i);this.jsonp(s,n)},e(f)})});
provide("anim/transition",function(e){function t(e,t){var n;return t=t||window,n=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||t.oRequestAnimationFrame||function(n){t.setTimeout(function(){e(+(new Date))},1e3/60)},n(e)}function n(e,t){return Math.sin(Math.PI/2*t)*e}function r(e,n,r,i,s){function a(){var u=+(new Date),f=u-o,l=Math.min(f/r,1),c=i?i(n,l):n*l;e(c);if(l==1)return;t(a,s)}var o=+(new Date),u;t(a)}e({animate:r,requestAnimationFrame:t,easeOut:n})});
provide("util/datetime",function(e){using("util/util",function(t){function h(e){return e<10?"0"+e:e}function p(e){function i(e,n){return t&&t[e]&&(e=t[e]),e.replace(/%\{([\w_]+)\}/g,function(e,t){return n[t]!==undefined?n[t]:e})}var t=e&&e.phrases,n=e&&e.months||s,r=e&&e.formats||o;this.timeAgo=function(e){var t=p.parseDate(e),s=+(new Date),o=s-t,h;return t?isNaN(o)||o<u*2?i("now"):o<a?(h=Math.floor(o/u),i(r.abbr,{number:h,symbol:i(c,{abbr:i("s"),expanded:h>1?i("seconds"):i("second")})})):o<f?(h=Math.floor(o/a),i(r.abbr,{number:h,symbol:i(c,{abbr:i("m"),expanded:h>1?i("minutes"):i("minute")})})):o<l?(h=Math.floor(o/f),i(r.abbr,{number:h,symbol:i(c,{abbr:i("h"),expanded:h>1?i("hours"):i("hour")})})):o<l*365?i(r.shortdate,{day:t.getDate(),month:i(n[t.getMonth()])}):i(r.longdate,{day:t.getDate(),month:i(n[t.getMonth()]),year:t.getFullYear().toString().slice(2)}):""},this.localTimeStamp=function(e){var t=p.parseDate(e),s=t&&t.getHours();return t?i(r.full,{day:t.getDate(),month:i(n[t.getMonth()]),year:t.getFullYear(),hours24:h(s),hours12:s<13?s?s:"12":s-12,minutes:h(t.getMinutes()),seconds:h(t.getSeconds()),amPm:s<12?i("AM"):i("PM")}):""}}var n=/(\d{4})-?(\d{2})-?(\d{2})T(\d{2}):?(\d{2}):?(\d{2})(Z|[\+\-]\d{2}:?\d{2})/,r=/[a-z]{3,4} ([a-z]{3}) (\d{1,2}) (\d{1,2}):(\d{2}):(\d{2}) ([\+\-]\d{2}:?\d{2}) (\d{4})/i,i=/^\d+$/,s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o={abbr:"%{number}%{symbol}",shortdate:"%{day} %{month}",longdate:"%{day} %{month} %{year}",full:"%{hours12}:%{minutes} %{amPm} - %{day} %{month} %{year}"},u=1e3,a=u*60,f=a*60,l=f*24,c='<abbr title="%{expanded}">%{abbr}</abbr>';p.parseDate=function(e){var o=e||"",u=o.toString(),a,f;return a=function(){var e;if(i.test(u))return parseInt(u,10);if(e=u.match(r))return Date.UTC(e[7],t.indexOf(s,e[1]),e[2],e[3],e[4],e[5]);if(e=u.match(n))return Date.UTC(e[1],e[2]-1,e[3],e[4],e[5],e[6])}(),a?(f=new Date(a),!isNaN(f.getTime())&&f):!1},e(p)})});
provide("sandbox/frame",function(e){using("sandbox/baseframe","sandbox/minimal","util/env","util/promise","util/util",function(t,n,r,i,s){function h(){var e,t;a={};if(f)return;e=document.body.offsetHeight,t=document.body.offsetWidth;if(e==c&&t==l)return;s.forEach(u,function(e){e.dispatchFrameResize(l,c)}),c=e,l=t}function p(e){var t;return e.id?e.id:(t=e.getAttribute("data-twttr-id"))?t:(t="twttr-sandbox-"+o++,e.setAttribute("data-twttr-id",t),t)}function d(e,t){n.apply(this,[e,t]),this._resizeHandlers=[],u.push(this),this._win.addEventListener?this._win.addEventListener("resize",s.bind(function(){this.dispatchFrameResize()},this),!0):this._win.attachEvent("onresize",s.bind(function(){this.dispatchFrameResize(this._win.event)},this))}var o=0,u=[],a={},f,l=0,c=0;window.addEventListener?window.addEventListener("resize",h,!0):document.body.attachEvent("onresize",function(){h(window.event)}),d.prototype=new n,s.aug(d.prototype,{dispatchFrameResize:function(){var e=this._frame.parentNode,t=p(e),n=a[t];f=!0;if(!this._resizeHandlers.length)return;n||(n=a[t]={w:this._frame.offsetWidth,h:this._frame.offsetHeight});if(this._frameWidth==n.w&&this._frameHeight==n.h)return;this._frameWidth=n.w,this._frameHeight=n.h,s.forEach(this._resizeHandlers,function(e){e(n.w,n.h)}),window.setTimeout(function(){a={}},50)},appendStyleSheet:function(e){var t=this._doc.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,this.layout(s.bind(function(){return this._head.appendChild(t)},this))},appendCss:function(e){var t;return r.cspEnabled()?i.reject("CSP enabled; cannot embed inline styles."):(t=this._doc.createElement("style"),t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(this._doc.createTextNode(e)),this.layout(s.bind(function(){return this._head.appendChild(t)},this)))},style:function(e){return this.layout(s.bind(function(){s.forIn(e,s.bind(function(e,t){this._frame.style[e]=t},this))},this))},onresize:function(e){this._resizeHandlers.push(e)},width:function(e){return e!==undefined&&(this._frame.width=e),r.ios()?Math.min(this._frame.parentNode.offsetWidth,this._frame.offsetWidth):this._frame.offsetWidth},height:function(e){return e!==undefined&&(this._frame.height=e),this._frame.offsetHeight}}),d.createSandbox=function(e,n,r,i){var s=new t(e,n,r,i);return s.ready().then(function(e){return new d(e.frame,e.layout)})},e(d)})});
provide("tfw/util/assets",function(e){using("util/env",function(t){function r(e,r){var i=n[e],s;return t.retina()?s="2x":t.ie6()||t.ie7()?s="gif":s="default",r&&(s+=".rtl"),i[s]}var n={"embed/timeline.css":{"default":"embed/timeline.6a72a50e1a93dc4d97ff897124263ab7.default.css","2x":"embed/timeline.6a72a50e1a93dc4d97ff897124263ab7.2x.css",gif:"embed/timeline.6a72a50e1a93dc4d97ff897124263ab7.gif.css","default.rtl":"embed/timeline.6a72a50e1a93dc4d97ff897124263ab7.default.rtl.css","2x.rtl":"embed/timeline.6a72a50e1a93dc4d97ff897124263ab7.2x.rtl.css","gif.rtl":"embed/timeline.6a72a50e1a93dc4d97ff897124263ab7.gif.rtl.css"}};e(r)})});
provide("tfw/widget/syndicatedbase",function(e){using("tfw/widget/base","tfw/widget/intent","tfw/util/assets","tfw/util/globals","tfw/util/tracking","dom/classname","dom/get","dom/delegate","sandbox/frame","util/env","util/promise","util/twitter","util/typevalidator","util/util",function(t,n,r,i,s,o,u,a,f,l,c,h,p,d){function C(){b=k.VALID_COLOR.test(i.val("widgets:link-color"))&&RegExp.$1,E=k.VALID_COLOR.test(i.val("widgets:border-color"))&&RegExp.$1,w=i.val("widgets:theme")}function k(e){if(!e)return;var n;this.readyPromise=new c(d.bind(function(e){this.readyResolver=e},this)),this.renderedPromise=new c(d.bind(function(e){this.renderResolver=e},this)),t.apply(this,[e]),n=this.params(),this.targetEl=this.srcEl&&this.srcEl.parentNode||n.targetEl||document.body,this.predefinedWidth=k.VALID_UNIT.test(n.width||this.attr("width"))&&RegExp.$1,this.layout(d.bind(function(){return this.containerWidth=this.targetEl&&this.targetEl.offsetWidth},this)).then(d.bind(function(e){var t=this.predefinedWidth||e||this.dimensions.DEFAULT_WIDTH;this.height=k.VALID_UNIT.test(n.height||this.attr("height"))&&RegExp.$1,this.width=Math.max(this.dimensions.MIN_WIDTH,Math.min(t,this.dimensions.DEFAULT_WIDTH))},this)),k.VALID_COLOR.test(n.linkColor||this.dataAttr("link-color"))?this.linkColor=RegExp.$1:this.linkColor=b,k.VALID_COLOR.test(n.borderColor||this.dataAttr("border-color"))?this.borderColor=RegExp.$1:this.borderColor=E,this.theme=n.theme||this.attr("data-theme")||w,this.theme=/(dark|light)/.test(this.theme)?this.theme:"",this.classAttr.push(l.touch()?"is-touch":"not-touch"),l.ie9()&&this.classAttr.push("ie9"),f.createSandbox({"class":this.renderedClassNames,id:this.id},{width:"1px",height:"0px",border:"none",position:"absolute",visibility:"hidden"},d.bind(function(e){this.srcEl?this.targetEl.insertBefore(e,this.srcEl):this.targetEl.appendChild(e)},this),this.layout).then(d.bind(function(e){this.setupSandbox(e)},this))}function L(e,t){return e+t}function A(e,t){return e==2||e==3&&t==0}var v=[".customisable",".customisable:link",".customisable:visited",".customisable:hover",".customisable:focus",".customisable:active",".customisable-highlight:hover",".customisable-highlight:focus","a:hover .customisable-highlight","a:focus .customisable-highlight"],m=["a:hover .ic-mask","a:focus .ic-mask"],g=[".customisable-border"],y=[".timeline-header h1.summary",".timeline-header h1.summary a:link",".timeline-header h1.summary a:visited"],b,w,E,S={TWEET:0,RETWEET:10},x=6,T=8/9,N=16/9;k.prototype=new t,d.aug(k.prototype,{setupSandbox:function(e){this.sandbox=e,c.some(e.appendCss("body{display:none}"),e.setBaseTarget("_blank"),e.appendStyleSheet(twttr.widgets.config.assetUrl()+"/"+r("embed/timeline.css"))).then(d.bind(function(){this.readyResolver.fulfill(e)},this))},ready:function(){return this.readyPromise},rendered:function(){return this.renderedPromise},contentWidth:function(e){var t=this.dimensions,n=this.fullBleedPhoto?0:this.chromeless&&this.narrow?t.NARROW_MEDIA_PADDING_CL:this.chromeless?t.WIDE_MEDIA_PADDING_CL:this.narrow?t.NARROW_MEDIA_PADDING:t.WIDE_MEDIA_PADDING;return(e||this.width)-n},addSiteStyles:function(){var e=d.bind(function(e){return(this.theme=="dark"?".thm-dark ":"")+e},this),t=[];this.headingStyle&&t.push(d.map(y,e).join(",")+"{"+this.headingStyle+"}"),this.linkColor&&(t.push(d.map(v,e).join(",")+"{color:"+this.linkColor+"}"),t.push(d.map(m,e).join(",")+"{background-color:"+this.linkColor+"}")),this.borderColor&&t.push(d.map(g,e).concat(this.theme=="dark"?[".thm-dark.customisable-border"]:[]).join(",")+"{border-color:"+this.borderColor+"}");if(!t.length)return;return this.sandbox.appendCss(t.join(""))},setNarrow:function(){var e=this.narrow;return this.narrow=this.width<this.dimensions.NARROW_WIDTH,e!=this.narrow?this.layout(d.bind(function(){return o.toggle(this.element,"var-narrow",this.narrow)},this)):c.fulfill(this.narrow)},bindIntentHandlers:function(){function r(n){var r=u.ancestor(".tweet",this,t),i=d.aug({},e.baseScribeData(),e.extractTweetScribeDetails(r));s.scribeInteraction(n,i,!0,e.dnt)}var e=this,t=this.element;a.delegate(t,"click","A",r),a.delegate(t,"click","BUTTON",r),a.delegate(t,"click",".profile",function(){e.addUrlParams(this)}),a.delegate(t,"click",".follow-button",function(t){var r;if(t.altKey||t.metaKey||t.shiftKey)return;if(l.ios()||l.android())return;if(p.asBoolean(this.getAttribute("data-age-gate")))return;r=h.intentForProfileURL(this.href),r&&(n.open(r,e.sandbox.element()),a.preventDefault(t))}),a.delegate(t,"click",".web-intent",function(t){e.addUrlParams(this);if(t.altKey||t.metaKey||t.shiftKey)return;n.open(this.href,e.sandbox.element()),a.preventDefault(t)})},baseScribeData:function(){return{}},extractTweetScribeDetails:function(e){var t,n,r={};return e?(t=e.getAttribute("data-tweet-id"),n=e.getAttribute("data-rendered-tweet-id")||t,n==t?r[n]={item_type:S.TWEET}:t&&(r[n]={item_type:S.RETWEET,target_type:S.TWEET,target_id:t}),r):r},constrainMedia:function(e,t){var n=0,r=this.fullBleedPhoto?600:375,i=u.one("multi-photo",e,"DIV"),s=i&&+i.getAttribute("data-photo-count");e=e||this.element,t=t||this.contentWidth();if(!e)return;return d.forEach(u.all("autosized-media",e),d.bind(function(e){var i=k.scaleDimensions(e.getAttribute("data-width"),e.getAttribute("data-height"),t,r);this.layout(function(){e.width=i.width,e.height=i.height}),n=i.height>n?i.height:n},this)),d.forEach(u.all("cropped-media",e,"IMG"),d.bind(function(e){var i=t-12,o=e.parentNode,u=e.getAttribute("data-crop-x")||0,a=e.getAttribute("data-crop-y")||0,f,l,c=A(s,e.getAttribute("data-image-index")),h=Math.floor(i/2-x),p=Math.floor(h/(c?T:N)),d;c||(p-=x/2),d=k.scaleDimensions(e.getAttribute("data-width"),e.getAttribute("data-height"),h,r,h,p),f=d.width-h-u,l=d.height-p-a,f<0&&Math.max(0,u+=f),l<0&&Math.max(0,a+=l),this.layout(function(){e.width=d.width,e.height=d.height,o.style.width=h-1+"px",o.style.height=p+"px",u&&(e.style.marginLeft="-"+Math.floor(d.width*u/100)+"px"),a&&(e.style.marginTop="-"+Math.floor(d.height*a/100)+"px")}),n=d.height*(c?2:1)>n?d.height:n},this)),n},collapseRegions:function(){d.forEach(u.all("collapsible-container",this.element),d.bind(function(e){var t=e.children,n=t.length&&e.offsetWidth,r=t.length&&d.map(t,function(e){return e.offsetWidth}),i=t.length,s,u;if(!t.length)return;while(i>0){i--,s=d.reduce(r,L,0);if(!n||!s)return;if(s<n)return;u=t[i].getAttribute("data-collapsed-class");if(!u)continue;o.add(this.element,u),r[i]=t[i].offsetWidth}},this))}}),k.VALID_UNIT=/^([0-9]+)( ?px)?$/,k.VALID_COLOR=/^(#(?:[0-9a-f]{3}|[0-9a-f]{6}))$/i,k.retinize=function(e){if(!l.retina())return;d.forEach(e.getElementsByTagName("IMG"),function(e){var t=e.getAttribute("data-src-2x");t&&(e.src=t)})},k.scaleDimensions=function(e,t,n,r,i,s){return n=n||e,r=r||t,i=i||0,s=s||0,e>n&&(t*=n/e,e=n),t>r&&(e*=r/t,t=r),e<i&&(t*=i/e,e=i),t<s&&(e*=s/t,t=s),{width:Math.floor(e),height:Math.floor(t)}},C(),e(k)})});
provide("tfw/widget/timeline",function(e){using("tfw/widget/base","tfw/widget/syndicatedbase","util/datetime","util/promise","anim/transition","tfw/util/article","tfw/util/data","tfw/util/tracking","tfw/util/params","util/css","util/env","util/throttle","util/twitter","util/querystring","util/typevalidator","util/util","dom/delegate","dom/classname","dom/get",function(t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b){function I(e){if(!e)return;var t,r,i,s,o,u,a,f;n.apply(this,[e]),t=this.params(),r=(t.chrome||this.dataAttr("chrome")||"").split(" "),this.preview=t.previewParams,this.widgetId=t.widgetId||this.dataAttr("widget-id"),this.instanceId=++F,this.cursors={maxPosition:0,minPosition:0},(s=t.screenName||this.dataAttr("screen-name"))||(o=t.userId||this.dataAttr("user-id"))?this.override={overrideType:"user",overrideId:o,overrideName:s,withReplies:v.asBoolean(t.showReplies||this.dataAttr("show-replies"))?"true":"false"}:(s=t.favoritesScreenName||this.dataAttr("favorites-screen-name"))||(o=t.favoritesUserId||this.dataAttr("favorites-user-id"))?this.override={overrideType:"favorites",overrideId:o,overrideName:s}:((s=t.listOwnerScreenName||this.dataAttr("list-owner-screen-name"))||(o=t.listOwnerId||this.dataAttr("list-owner-id")))&&((u=t.listId||this.dataAttr("list-id"))||(a=t.listSlug||this.dataAttr("list-slug")))?this.override={overrideType:"list",overrideOwnerId:o,overrideOwnerName:s,overrideId:u,overrideName:a}:(f=t.customTimelineId||this.dataAttr("custom-timeline-id"))?this.override={overrideType:"custom",overrideId:f}:this.override={},this.tweetLimit=v.asInt(t.tweetLimit||this.dataAttr("tweet-limit")),this.staticTimeline=this.tweetLimit>0,r.length&&(i=~m.indexOf(r,"none"),this.chromeless=i||~m.indexOf(r,"transparent"),this.headerless=i||~m.indexOf(r,"noheader"),this.footerless=i||~m.indexOf(r,"nofooter"),this.borderless=i||~m.indexOf(r,"noborders"),this.noscrollbar=~m.indexOf(r,"noscrollbar")),this.headingStyle=l.sanitize(t.headingStyle||this.dataAttr("heading-style"),undefined,!0),this.classAttr.push("twitter-timeline-rendered"),this.ariaPolite=t.ariaPolite||this.dataAttr("aria-polite")}var w="1.0",E={CLIENT_SIDE_USER:0,CLIENT_SIDE_APP:2},S="timeline",x="new-tweets-bar",T="timeline-header",N="timeline-footer",C="stream",k="h-feed",L="tweet",A="expanded",O="detail-expander",M="expand",_="permalink",D="twitter-follow-button",P="no-more-pane",H="pending-scroll-in",B="pending-new-tweet",j="pending-new-tweet-display",F=0;I.prototype=new n,m.aug(I.prototype,{renderedClassNames:"twitter-timeline twitter-timeline-rendered",dimensions:{DEFAULT_HEIGHT:"600",DEFAULT_WIDTH:"520",NARROW_WIDTH:"320",MIN_WIDTH:"180",MIN_HEIGHT:"200",WIDE_MEDIA_PADDING:81,NARROW_MEDIA_PADDING:16,WIDE_MEDIA_PADDING_CL:60,NARROW_MEDIA_PADDING_CL:12},create:function(e){var r=this.sandbox.createElement("div"),i,s,o,u=[],f;r.innerHTML=e.body,i=r.children[0]||!1;if(!i)return;return this.reconfigure(e.config),this.discardStaticOverflow(i),this.sandbox.setTitle(i.getAttribute("data-iframe-title")||"Timeline"),n.retinize(i),this.constrainMedia(i),this.searchQuery=i.getAttribute("data-search-query"),this.profileId=i.getAttribute("data-profile-id"),this.timelineType=i.getAttribute("data-timeline-type"),f=this.getTweetDetails(r),m.forIn(f,function(e){u.push(e)}),o=this.baseScribeData(),o.item_ids=u,o.item_details=f,this.timelineType&&a.enqueue({page:this.timelineType+"_timeline",component:"timeline",element:"initial",action:u.length?"results":"no_results"},o,!0,this.dnt),a.enqueue({page:"timeline",component:"timeline",element:"initial",action:u.length?"results":"no_results"},o,!0,this.dnt),a.flush(),this.ariaPolite=="assertive"&&(s=b.one(x,i,"DIV"),s.setAttribute("aria-polite","assertive")),i.id=this.id,i.className+=" "+this.classAttr.join(" "),i.lang=this.lang,this.augmentWidgets(i),this.ready().then(m.bind(function(e){e.appendChild(i).then(m.bind(function(){this.renderResolver.fulfill(this.sandbox)},this)),e.style({cssText:"",border:"none",maxWidth:"100%",minWidth:this.dimensions.MIN_WIDTH+"px"}),this.layout(m.bind(function(){this.srcEl&&this.srcEl.parentNode&&this.srcEl.parentNode.removeChild(this.srcEl),this.predefinedWidth=this.width,this.predefinedHeight=this.height,this.width=e.width(this.width),this.height=e.height(this.height)},this)).then(m.bind(function(){this.completeResolver.fulfill(this.sandbox.element()),this.width<this.predefinedWidth&&(this.layout(m.bind(function(){this.width=e.width(this.predefinedWidth)},this)),t.doLayoutAsync()),this.height<this.predefinedHeight&&(this.layout(m.bind(function(){this.height=e.height(this.predefinedHeight),this.recalculateStreamHeight()},this)),t.doLayoutAsync())},this)),this.setNarrow().then(m.bind(function(){this.sandbox.onresize(m.bind(this.handleResize,this))},this))},this)),i},render:function(e,n){return!this.preview&&!this.widgetId?(this.completeResolver.reject(400),this.completed()):(this.staticTimeline?this.rendered().then(m.bind(function(e){this.layout(m.bind(function(){e.height(this.height=this.element.offsetHeight)},this)),t.doLayoutAsync()},this)):this.rendered().then(m.bind(function(){this.recalculateStreamHeight(),t.doLayoutAsync()},this)),this.preview?this.getPreviewTimeline():this.getTimeline(),n&&this.completed().then(n),this.completed())},getPreviewTimeline:function(){u.timelinePreview({success:m.bind(function(e){this.ready().then(m.bind(function(){this.element=this.create(e),this.readTranslations(),this.bindInteractions(),this.updateCursors(e.headers,{initial:!0}),t.doLayoutAsync()},this))},this),error:function(e){if(!e||!e.headers){this.completeResolver.fulfill(this.srcEl);return}this.completeResolver.reject(e.headers.status)},params:this.preview})},getTimeline:function(){a.initPostLogging(),u.timeline(m.aug({id:this.widgetId,instanceId:this.instanceId,dnt:this.dnt,lang:this.lang,success:m.bind(function(e){this.ready().then(m.bind(function(){this.element=this.create(e),this.readTranslations(),this.bindInteractions(),this.updateTimeStamps(),this.updateCursors(e.headers,{initial:!0}),e.headers.xPolling&&/\d/.test(e.headers.xPolling)&&(this.pollInterval=e.headers.xPolling*1e3),this.staticTimeline||this.schedulePolling(),t.doLayoutAsync()},this))},this),error:function(e){if(!e||!e.headers){this.completeResolver.fulfill(this.srcEl);return}this.completeResolver.reject(e.headers.status)}},this.override))},reconfigure:function(e){this.lang=e.lang,this.theme||(this.theme=e.theme),this.theme=="dark"&&this.classAttr.push("thm-dark"),this.chromeless&&this.classAttr.push("var-chromeless"),this.borderless&&this.classAttr.push("var-borderless"),this.headerless&&this.classAttr.push("var-headerless"),this.footerless&&this.classAttr.push("var-footerless"),this.staticTimeline&&this.classAttr.push("var-static"),!this.linkColor&&e.linkColor&&n.VALID_COLOR.test(e.linkColor)&&(this.linkColor=RegExp.$1),!this.height&&n.VALID_UNIT.test(e.height)&&(this.height=RegExp.$1),this.height=Math.max(this.dimensions.MIN_HEIGHT,this.height?this.height:this.dimensions.DEFAULT_HEIGHT),this.preview&&this.classAttr.push("var-preview"),this.narrow=this.width<=this.dimensions.NARROW_WIDTH,this.narrow&&this.classAttr.push("var-narrow"),this.addSiteStyles()},getTweetDetails:function(e){var t=b.one(k,e),n,r={},i,s,o=0;n=t&&t.children||[];for(;i=n[o];o++)s=b.one(_,i,"A"),m.aug(r,this.extractTweetScribeDetails(i));return r},baseScribeData:function(){return{widget_id:this.widgetId,widget_origin:o.url(),client_version:w,message:this.partner,query:this.searchQuery,profile_id:this.profileId}},bindInteractions:function(){var e=this,t=this.element,n=!0;this.bindIntentHandlers(),g.delegate(t,"click",".load-tweets",function(t){n&&(n=!1,e.forceLoad(),g.stop(t))}),g.delegate(t,"click",".display-sensitive-image",function(n){e.showNSFW(b.ancestor("."+L,this,t)),g.stop(n)}),g.delegate(t,"mouseover","."+S,function(){e.mouseOver=!0}),g.delegate(t,"mouseout","."+S,function(){e.mouseOver=!1}),g.delegate(t,"mouseover","."+x,function(){e.mouseOverNotifier=!0}),g.delegate(t,"mouseout","."+x,function(){e.mouseOverNotifier=!1,window.setTimeout(function(){e.hideNewTweetNotifier()},3e3)});if(this.staticTimeline)return;g.delegate(t,"click","."+M,function(n){if(n.altKey||n.metaKey||n.shiftKey)return;e.toggleExpando(b.ancestor("."+L,this,t)),g.stop(n)}),g.delegate(t,"click","A",function(e){g.stopPropagation(e)}),g.delegate(t,"click",".with-expansion",function(t){e.toggleExpando(this),g.stop(t)}),g.delegate(t,"click",".load-more",function(){e.loadMore()}),g.delegate(t,"click","."+x,function(){e.scrollToTop(),e.hideNewTweetNotifier(!0)})},scrollToTop:function(){var e=b.one(C,this.element,"DIV");e.scrollTop=0,e.focus()},update:function(){var e=this,t=b.one(k,this.element),n=t&&t.children[0],r=n&&n.getAttribute("data-tweet-id");this.updateTimeStamps(),this.requestTweets(r,!0,function(t){t.childNodes.length>0&&e.insertNewTweets(t)})},loadMore:function(){var e=this,t=b.all(L,this.element,"LI").pop(),n=t&&t.getAttribute("data-tweet-id");this.requestTweets(n,!1,function(t){var r=b.one(P,e.element,"P"),i=t.childNodes[0];r.style.cssText="",i&&i.getAttribute("data-tweet-id")==n&&t.removeChild(i);if(t.childNodes.length>0){e.appendTweets(t);return}y.add(e.element,"no-more"),r.focus()})},forceLoad:function(){var e=this,t=!!b.all(k,this.element,"OL").length;this.requestTweets(1,!0,function(n){n.childNodes.length&&(e[t?"insertNewTweets":"appendTweets"](n),y.add(e.element,"has-tweets"))})},schedulePolling:function(e){var t=this;if(this.pollInterval===null)return;e=twttr.widgets.poll||e||this.pollInterval||1e4,e>-1&&window.setTimeout(function(){this.isUpdating||t.update(),t.schedulePolling()},e)},updateCursors:function(e,t){(t||{}).initial?(this.cursors.maxPosition=e.maxPosition,this.cursors.minPosition=e.minPosition):(t||{}).newer?this.cursors.maxPosition=e.maxPosition||this.cursors.maxPosition:this.cursors.minPosition=e.minPosition||this.cursors.minPosition},requestTweets:function(e,t,r){var i=this,s={id:this.widgetId,instanceId:this.instanceId,screenName:this.widgetScreenName,userId:this.widgetUserId,withReplies:this.widgetShowReplies,dnt:this.dnt,lang:this.lang};t&&this.cursors.maxPosition?s.minPosition=this.cursors.maxPosition:!t&&this.cursors.minPosition?s.maxPosition=this.cursors.minPosition:t?s.sinceId=e:s.maxId=e,s.complete=function(){this.isUpdating=!1},s.error=function(e){if(e&&e.headers){if(e.headers.status=="404"){i.pollInterval=null;return}if(e.headers.status=="503"){i.pollInterval*=1.5;return}}},s.success=function(e){var s=i.sandbox.createDocumentFragment(),o=i.sandbox.createElement("div"),u,f=[],l,c;i.updateCursors(e.headers,{newer:t}),e&&e.headers&&e.headers.xPolling&&/\d+/.test(e.headers.xPolling)&&(i.pollInterval=e.headers.xPolling*1e3);if(e&&e.body!==undefined){o.innerHTML=e.body;if(o.children[0]&&o.children[0].tagName!="LI")return;l=i.getTweetDetails(o);for(c in l)l.hasOwnProperty(c)&&f.push(c);f.length&&(u=i.baseScribeData(),u.item_ids=f,u.item_details=l,u.event_initiator=t?E.CLIENT_SIDE_APP:E.CLIENT_SIDE_USER,this.timelineType&&a.enqueue({page:this.timelineType+"_timeline",component:"timeline",element:"initial",action:f.length?"results":"no_results"},u,!0,this.dnt),a.enqueue({page:"timeline",component:"timeline",element:t?"newer":"older",action:"results"},u,!0,i.dnt),a.flush()),n.retinize(o),i.constrainMedia(o);while(o.children[0])s.appendChild(o.children[0]);r(s)}},u.timelinePoll(m.aug(s,this.override))},insertNewTweets:function(e){var t=this,n=b.one(C,this.element,"DIV"),r=b.one(k,n,"OL"),i=r.offsetHeight,o;r.insertBefore(e,r.firstChild),o=r.offsetHeight-i;if(n.scrollTop>40||this.mouseIsOver()){n.scrollTop=n.scrollTop+o,this.updateTimeStamps(),this.showNewTweetNotifier();return}y.remove(this.element,H),r.style.cssText="margin-top: -"+o+"px",window.setTimeout(function(){n.scrollTop=0,y.add(t.element,H),c.cssTransitions()?r.style.cssText="":s.animate(function(e){e<o?r.style.cssText="margin-top: -"+(o-e)+"px":r.style.cssText=""},o,500,s.easeOut)},500),this.updateTimeStamps(),this.timelineType!="custom"&&this.gcTweets(50)},appendTweets:function(e){var t=b.one(C,this.element,"DIV"),n=b.one(k,t,"OL");n.appendChild(e),this.updateTimeStamps()},gcTweets:function(e){var t=b.one(k,this.element,"OL"),n=t.children.length,r;e=e||50;for(;n>e&&(r=t.children[n-1]);n--)t.removeChild(r)},showNewTweetNotifier:function(){var e=this,t=b.one(x,this.element,"DIV"),n=t.children[0];t.style.cssText="",t.removeChild(n),t.appendChild(n),y.add(this.element,j),window.setTimeout(function(){y.add(e.element,B)},10),this.newNoticeDisplayTime=+(new Date),window.setTimeout(function(){e.hideNewTweetNotifier()},5e3)},hideNewTweetNotifier:function(e){var t=this;if(!e&&this.mouseOverNotifier)return;y.remove(this.element,B),window.setTimeout(function(){y.remove(t.element,j)},500)},augmentWidgets:function(e){var t=b.one(D,e,"A");if(!t)return;t.setAttribute("data-related",this.related),t.setAttribute("data-partner",this.partner),t.setAttribute("data-dnt",this.dnt),t.setAttribute("data-search-query",this.searchQuery),t.setAttribute("data-profile-id",this.profileId),this.width<250&&t.setAttribute("data-show-screen-name","false"),twttr.widgets.load(t.parentNode)},discardStaticOverflow:function(e){var t=b.one(k,e,"OL"),n;if(this.staticTimeline){this.height=0;while(n=t.children[this.tweetLimit])t.removeChild(n)}},hideStreamScrollBar:function(){var e=b.one(C,this.element,"DIV"),t=b.one(k,this.element,"OL"),n;e.style.width="",n=this.element.offsetWidth-t.offsetWidth,n>0&&(e.style.width=this.element.offsetWidth+n+"px")},readTranslations:function(){var e=this.element,t="data-dt-";this.datetime=new r(m.compact({phrases:{now:e.getAttribute(t+"now"),s:e.getAttribute(t+"s"),m:e.getAttribute(t+"m"),h:e.getAttribute(t+"h"),second:e.getAttribute(t+"second"),seconds:e.getAttribute(t+"seconds"),minute:e.getAttribute(t+"minute"),minutes:e.getAttribute(t+"minutes"),hour:e.getAttribute(t+"hour"),hours:e.getAttribute(t+"hours")},months:e.getAttribute(t+"months").split("|"),formats:{abbr:e.getAttribute(t+"abbr"),shortdate:e.getAttribute(t+"short"),longdate:e.getAttribute(t+"long")}}))},updateTimeStamps:function(){var e=b.all(_,this.element,"A"),t,n,r=0,i,s;for(;t=e[r];r++){i=t.getAttribute("data-datetime"),s=i&&this.datetime.timeAgo(i,this.i18n),n=t.getElementsByTagName("TIME")[0];if(!s)continue;if(n&&n.innerHTML){n.innerHTML=s;continue}t.innerHTML=s}},mouseIsOver:function(){return this.mouseOver},addUrlParams:function(e){var t=this,n={tw_w:this.widgetId,related:this.related,partner:this.partner,query:this.searchQuery,profile_id:this.profileId,original_referer:o.url(),tw_p:"embeddedtimeline"};return this.addUrlParams=f(n,function(e){var n=b.ancestor("."+L,e,t.element);return n&&{tw_i:n.getAttribute("data-tweet-id")}}),this.addUrlParams(e)},showNSFW:function(e){var t=b.one("nsfw",e,"DIV"),r,i,s=0,o,u,a,f;if(!t)return;i=n.scaleDimensions(t.getAttribute("data-width"),t.getAttribute("data-height"),this.contentWidth(),t.getAttribute("data-height")),r=!!(u=t.getAttribute("data-player")),r?a=this.sandbox.createElement("iframe"):(a=this.sandbox.createElement("img"),u=t.getAttribute(c.retina()?"data-image-2x":"data-image"),a.alt=t.getAttribute("data-alt"),f=this.sandbox.createElement("a"),f.href=t.getAttribute("data-href"),f.appendChild(a)),a.title=t.getAttribute("data-title"),a.src=u,a.width=i.width,a.height=i.height,o=b.ancestor("."+O,t,e),s=i.height-t.offsetHeight,t.parentNode.replaceChild(r?a:f,t),o.style.cssText="height:"+(o.offsetHeight+s)+"px"},toggleExpando:function(e){var r=b.one(O,e,"DIV"),i=r&&r.children[0],s=i&&i.getAttribute("data-expanded-media"),o,u=0,a=b.one(M,e,"A"),f=a&&a.getElementsByTagName("B")[0],l=f&&(f.innerText||f.textContent),c;if(!f)return;this.layout(function(){f.innerHTML=a.getAttribute("data-toggled-text"),a.setAttribute("data-toggled-text",l)});if(y.present(e,A)){this.layout(function(){y.remove(e,A)});if(!r){t.doLayout();return}this.layout(function(){r.style.cssText="",i.innerHTML=""}),t.doLayout();return}s&&(o=this.sandbox.createElement("DIV"),o.innerHTML=s,n.retinize(o),u=this.constrainMedia(o),this.layout(function(){i.appendChild(o)})),r&&this.layout(function(){c=Math.max(i.offsetHeight,u),r.style.cssText="height:"+c+"px"}),this.layout(function(){y.add(e,A)}),t.doLayout()},recalculateStreamHeight:function(e){var t=b.one(T,this.element,"DIV"),n=b.one(N,this.element,"DIV"),r=b.one(C,this.element,"DIV");this.layout(m.bind(function(){var i=t.offsetHeight+(n?n.offsetHeight:0),s=e||this.sandbox.height();r.style.cssText="height:"+(s-i-2)+"px",this.noscrollbar&&this.hideStreamScrollBar()},this))},handleResize:function(e,n){var r=Math.min(this.dimensions.DEFAULT_WIDTH,Math.max(this.dimensions.MIN_WIDTH,Math.min(this.predefinedWidth||this.dimensions.DEFAULT_WIDTH,e)));if(r==this.width&&n==this.height)return;this.width=r,this.height=n,this.setNarrow(),this.constrainMedia(this.element,this.contentWidth(r)),this.staticTimeline?this.layout(m.bind(function(){this.height=this.element.offsetHeight,this.sandbox.height(this.height)},this)):this.recalculateStreamHeight(n),t.doLayoutAsync()}}),e(I)})});
provide("tfw/widget/embed",function(e){using("tfw/widget/base","tfw/widget/syndicatedbase","util/datetime","tfw/util/params","dom/classname","dom/get","util/env","util/promise","util/util","util/throttle","util/twitter","tfw/util/article","tfw/util/data","tfw/util/tracking",function(t,n,r,i,s,o,u,a,f,l,c,h,p,d){function w(e,t,n,r){var i=o.one("subject",e,"BLOCKQUOTE"),s=o.one("reply",e,"BLOCKQUOTE"),u=i&&i.getAttribute("data-tweet-id"),a=s&&s.getAttribute("data-tweet-id"),l={},c={};if(!u)return;l[u]={item_type:0},d.enqueue({page:"tweet",section:"subject",component:"tweet",action:"results"},f.aug({},t,{item_ids:[u],item_details:l}),!0,r);if(!a)return;c[a]={item_type:0},d.enqueue({page:"tweet",section:"conversation",component:"tweet",action:"results"},f.aug({},t,{item_ids:[a],item_details:c,associations:{4:{association_id:u,association_type:4}}}),!0,r)}function E(e,t,n){var r={};if(!e)return;r[e]={item_type:0},d.enqueue({page:"tweet",section:"subject",component:"rawembedcode",action:"no_results"},{client_version:v,widget_origin:h.url(),widget_frame:h.frameUrl(),message:t,item_ids:[e],item_details:r},!0,n)}function S(e,t,n,r){g[e]=g[e]||[],g[e].push({s:n,f:r,lang:t})}function x(){b.length&&twttr.widgets.load(b)}function T(e){if(!e)return;var t,r,i;n.apply(this,[e]),t=this.params(),r=this.srcEl&&this.srcEl.getElementsByTagName("A"),i=r&&r[r.length-1],this.hideThread=(t.conversation||this.dataAttr("conversation"))=="none"||~f.indexOf(this.classAttr,"tw-hide-thread"),this.hideCard=(t.cards||this.dataAttr("cards"))=="hidden"||~f.indexOf(this.classAttr,"tw-hide-media");if((t.align||this.attr("align"))=="left"||~f.indexOf(this.classAttr,"tw-align-left"))this.align="left";else if((t.align||this.attr("align"))=="right"||~f.indexOf(this.classAttr,"tw-align-right"))this.align="right";else if((t.align||this.attr("align"))=="center"||~f.indexOf(this.classAttr,"tw-align-center"))this.align="center",this.containerWidth>this.dimensions.MIN_WIDTH*(1/.7)&&this.width>this.containerWidth*.7&&(this.width=this.containerWidth*.7);this.narrow=t.narrow||this.width<=this.dimensions.NARROW_WIDTH,this.narrow&&this.classAttr.push("var-narrow"),this.tweetId=t.tweetId||i&&c.status(i.href)}var v="2.0",m="tweetembed",g={},y=[],b=[];T.prototype=new n,f.aug(T.prototype,{renderedClassNames:"twitter-tweet twitter-tweet-rendered",dimensions:{DEFAULT_HEIGHT:"0",DEFAULT_WIDTH:"500",NARROW_WIDTH:"350",MIN_WIDTH:"220",MIN_HEIGHT:"0",WIDE_MEDIA_PADDING:32,NARROW_MEDIA_PADDING:32},create:function(e){var t=this.sandbox.createElement("div"),r,i;t.innerHTML=e,r=t.children[0]||!1;if(!r)return;return this.theme=="dark"&&this.classAttr.push("thm-dark"),this.linkColor&&this.addSiteStyles(),s.present(r,"media-forward")&&(this.fullBleedPhoto=!0),this.augmentWidgets(r),n.retinize(r),r.id=this.id,r.className+=" "+this.classAttr.join(" "),r.lang=this.lang,this.sandbox.setTitle(r.getAttribute("data-iframe-title")||"Tweet"),this.sandbox.appendChild(r).then(f.bind(function(){this.renderResolver.fulfill(this.sandbox)},this)),this.sandbox.style({cssText:"",display:"block",maxWidth:"99%",minWidth:this.dimensions.MIN_WIDTH+"px",padding:"0",borderRadius:"5px",margin:"10px 0",border:"#ddd 1px solid",borderTopColor:"#eee",borderBottomColor:"#bbb",boxShadow:"0 1px 3px rgba(0,0,0,0.15)",position:"absolute",visibility:"hidden"}),i=this.layout(f.bind(function(){this.predefinedWidth=this.width,this.width=this.sandbox.width(this.width),this.collapseRegions()},this),"Insert Sandbox"),i.then(f.bind(function(){this.constrainMedia(r,this.contentWidth(this.width)),this.setNarrow().then(f.bind(function(){this.layout(f.bind(function(){this.completeResolver.fulfill(this.sandbox.element())},this))},this))},this)),w(r,this.baseScribeData(),this.partner,this.dnt),r},render:function(e,n){var r="",i=this.tweetId;return i?(this.hideCard&&(r+="c"),this.hideThread&&(r+="t"),r&&(i+="-"+r),this.rendered().then(f.bind(function(e){this.srcEl&&this.srcEl.parentNode&&this.layout(f.bind(function(){this.srcEl&&this.srcEl.parentNode&&this.srcEl.parentNode.removeChild(this.srcEl)},this),"Remove Embed Code"),this.align=="center"?e.style({margin:"7px auto",cssFloat:"none"}):this.align&&(this.width==this.dimensions.DEFAULT_WIDTH&&(this.predefinedWidth=this.width=this.dimensions.NARROW_WIDTH),e.style({cssFloat:this.align})),this.layout(f.bind(function(){this.height=this.sandbox.height(this.element.offsetHeight)},this)).then(f.bind(function(){return t.doLayoutAsync(),this.layout(f.bind(function(){this.height=this.sandbox.height(this.element.offsetHeight)},this))},this)).then(f.bind(function(){e.onresize(f.bind(this.handleResize,this))},this)),e.style({position:"static",visibility:"visible"}),t.doLayoutAsync()},this)),S(i,this.lang,f.bind(function(n){this.ready().then(f.bind(function(){this.element=this.create(n),this.readTimestampTranslations(),this.updateTimeStamps(),this.bindIntentHandlers(),t.doLayoutAsync()},this))},this),f.bind(function(){E(this.tweetId,this.partner,this.dnt),this.completeResolver.fulfill(this.srcEl)},this)),y.push(this.rendered()),n&&this.completed().then(n),this.completed()):(this.completeResolver.fulfill(this.srcEl),this.completed())},augmentWidgets:function(e){var t=o.one("twitter-follow-button",e,"A");if(!t)return;t.setAttribute("data-related",this.related),t.setAttribute("data-partner",this.partner),t.setAttribute("data-dnt",this.dnt),t.setAttribute("data-show-screen-name","false"),b.push(t.parentNode)},addUrlParams:function(e){var t=this,n={related:this.related,partner:this.partner,original_referer:h.url(),tw_p:m};return this.addUrlParams=i(n,function(e){var n=o.ancestor(".tweet",e,t.element);return{tw_i:n.getAttribute("data-tweet-id")}}),this.addUrlParams(e)},baseScribeData:function(){return{client_version:v,widget_origin:h.url(),widget_frame:h.frameUrl(),message:this.partner}},handleResize:function(e){var n=Math.min(this.dimensions.DEFAULT_WIDTH,Math.max(this.dimensions.MIN_WIDTH,Math.min(this.predefinedWidth||this.dimensions.DEFAULT_WIDTH,e)));if(n==this.width)return;this.width=n,this.setNarrow(),this.constrainMedia(this.element,this.contentWidth(n)),this.collapseRegions(),this.layout(f.bind(function(){this.height=this.element.offsetHeight,this.sandbox.height(this.height)},this),"Embed Resize"),t.doLayoutAsync()},readTimestampTranslations:function(){var e=this.element,t="data-dt-",n=e.getAttribute(t+"months")||"";this.datetime=new r(f.compact({phrases:{AM:e.getAttribute(t+"am"),PM:e.getAttribute(t+"pm")},months:n.split("|"),formats:{full:e.getAttribute(t+"full")}}))},updateTimeStamps:function(){var e=o.one("long-permalink",this.element,"A"),n=e.getAttribute("data-datetime"),r=n&&this.datetime.localTimeStamp(n),i=e.getElementsByTagName("TIME")[0];if(!r)return;this.layout(function(){if(i&&i.innerHTML){i.innerHTML=r;return}e.innerHTML=r},"Update Timestamp"),t.doLayoutAsync()}}),T.fetchAndRender=function(){var e=g,n=[],r,i;g={};if(e.keys)n=e.keys();else for(r in e)e.hasOwnProperty(r)&&n.push(r);if(!n.length)return;d.initPostLogging(),i=e[n[0]][0].lang,p.tweets({ids:n.sort(),lang:i,complete:function(n){f.forIn(n,function(t,n){var r=e[t];f.forEach(r,function(e){e.s&&e.s.call(this,n)}),delete e[t]}),t.doLayout(),f.forIn(e,function(e,t){f.forEach(t,function(t){t.f&&t.f.call(this,e)})}),t.doLayout()}}),a.every.apply(null,y).then(function(){x(),d.flush()})},t.afterLoad(T.fetchAndRender),e(T)})});
provide("dom/textsize",function(e){function n(e,t,n){var r=[],i=0,s;for(;s=n[i];i++)r.push(s[0]),r.push(s[1]);return e+t+r.join(":")}function r(e){var t=e||"";return t.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}var t={};e(function(e,i,s){var o=document.createElement("span"),u={},a="",f,l=0,c=0,h=[];s=s||[],i=i||"",a=n(e,i,s);if(t[a])return t[a];o.className=i+" twitter-measurement";try{for(;f=s[l];l++)o.style[f[0]]=f[1]}catch(p){for(;f=s[c];c++)h.push(r(f[0])+":"+f[1]);o.setAttribute("style",h.join(";")+";")}return o.innerHTML=e,document.body.appendChild(o),u.width=o.clientWidth||o.offsetWidth,u.height=o.clientHeight||o.offsetHeight,document.body.removeChild(o),delete o,t[a]=u})});
provide("tfw/widget/tweetbase",function(e){using("util/util","tfw/widget/base","util/querystring","util/twitter",function(t,n,r,i){function s(e){if(!e)return;var t;n.apply(this,[e]),t=this.params(),this.text=t.text||this.dataAttr("text"),this.text&&/\+/.test(this.text)&&!/ /.test(this.text)&&(this.text=this.text.replace(/\+/g," ")),this.align=t.align||this.dataAttr("align")||"",this.via=t.via||this.dataAttr("via"),this.placeid=t.placeid||this.dataAttr("placeid"),this.hashtags=t.hashtags||this.dataAttr("hashtags"),this.screen_name=i.screenName(t.screen_name||t.screenName||this.dataAttr("button-screen-name")),this.url=t.url||this.dataAttr("url")}s.prototype=new n,t.aug(s.prototype,{parameters:function(){var e={text:this.text,url:this.url,related:this.related,lang:this.lang,placeid:this.placeid,original_referer:location.href,id:this.id,screen_name:this.screen_name,hashtags:this.hashtags,partner:this.partner,dnt:this.dnt,_:+(new Date)};return t.compact(e),r.encode(e)}}),e(s)})});
provide("tfw/widget/tweetbutton",function(e){using("tfw/widget/tweetbase","util/util","util/querystring","util/uri","util/twitter","dom/textsize",function(t,n,r,i,s,o){function l(e){t.apply(this,[e]);var r=this.params(),o=r.count||this.dataAttr("count"),l=r.size||this.dataAttr("size"),c=i.getScreenNameFromPage();this.classAttr.push("twitter-tweet-button");if(r.type=="hashtag"||~n.indexOf(this.classAttr,"twitter-hashtag-button"))this.type="hashtag",this.classAttr.push("twitter-hashtag-button");else if(r.type=="mention"||~n.indexOf(this.classAttr,"twitter-mention-button"))this.type="mention",this.classAttr.push("twitter-mention-button");this.counturl=r.counturl||this.dataAttr("counturl"),this.searchlink=r.searchlink||this.dataAttr("searchlink"),this.button_hashtag=s.hashTag(r.button_hashtag||r.hashtag||this.dataAttr("button-hashtag"),!1),this.size=l=="large"?"l":"m",this.type?(this.count="none",c&&(this.related=this.related?c+","+this.related:c)):(this.text=this.text||u,this.url=this.url||i.getCanonicalURL()||a,this.count=~n.indexOf(f,o)?o:"horizontal",this.count=this.count=="vertical"&&this.size=="l"?"none":this.count,this.via=this.via||c)}var u=document.title,a=encodeURI(location.href),f=["vertical","horizontal","none"];l.prototype=new t,n.aug(l.prototype,{parameters:function(){var e={text:this.text,url:this.url,via:this.via,related:this.related,count:this.count,lang:this.lang,counturl:this.counturl,searchlink:this.searchlink,placeid:this.placeid,original_referer:location.href,id:this.id,size:this.size,type:this.type,screen_name:this.screen_name,button_hashtag:this.button_hashtag,hashtags:this.hashtags,align:this.align,partner:this.partner,dnt:this.dnt,_:+(new Date)};return n.compact(e),r.encode(e)},height:function(){return this.count=="vertical"?62:this.size=="m"?20:28},width:function(){var e={ver:8,cnt:14,btn:24,xlcnt:18,xlbtn:38},t=this.count=="vertical",r=this.type=="hashtag"&&this.button_hashtag?"Tweet %{hashtag}":this.type=="mention"&&this.screen_name?"Tweet to %{name}":"Tweet",i=this._(r,{name:"@"+this.screen_name,hashtag:"#"+this.button_hashtag}),s=this._("K"),u=this._("100K+"),a=(t?"8888":"88888")+s,f=0,l=0,c=0,h=0,p=this.styles.base,d=p;return~n.indexOf(["ja","ko"],this.lang)?a+=this._("10k unit"):a=a.length>u.length?a:u,t?(d=p.concat(this.styles.vbubble),h=e.ver,c=e.btn):this.size=="l"?(p=d=p.concat(this.styles.large),c=e.xlbtn,h=e.xlcnt):(c=e.btn,h=e.cnt),this.count!="none"&&(l=o(a,"",d).width+h),f=o(i,"",p.concat(this.styles.button)).width+c,t?f>l?f:l:this.calculatedWidth=f+l},render:function(e,t){var r=twttr.widgets.config.assetUrl()+"/widgets/tweet_button.1395870373.html#"+this.parameters(),i;return this.count&&this.classAttr.push("twitter-count-"+this.count),i=this.create(r,this.dimensions(),{title:this._("Twitter Tweet Button")}).then(n.bind(function(e){return this.element=e},this)),t&&i.then(t),i}}),e(l)})});
provide("tfw/widget/follow",function(e){using("util/util","tfw/widget/base","util/querystring","util/uri","util/twitter","util/promise","dom/textsize",function(t,n,r,i,s,o,u){function a(e){if(!e)return;var t,r,i,o;n.apply(this,[e]),t=this.params(),r=t.size||this.dataAttr("size"),i=t.showScreenName||this.dataAttr("show-screen-name"),o=t.count||this.dataAttr("count"),this.classAttr.push("twitter-follow-button"),this.showScreenName=i!="false",this.showCount=t.showCount!==!1&&this.dataAttr("show-count")!="false",o=="none"&&(this.showCount=!1),this.explicitWidth=t.width||this.dataAttr("width")||"",this.screenName=t.screen_name||t.screenName||s.screenName(this.attr("href")),this.preview=t.preview||this.dataAttr("preview")||"",this.align=t.align||this.dataAttr("align")||"",this.size=r=="large"?"l":"m"}a.prototype=new n,t.aug(a.prototype,{parameters:function(){var e={screen_name:this.screenName,lang:this.lang,show_count:this.showCount,show_screen_name:this.showScreenName,align:this.align,id:this.id,preview:this.preview,size:this.size,partner:this.partner,dnt:this.dnt,_:+(new Date)};return t.compact(e),r.encode(e)},width:function(){if(this.calculatedWidth)return this.calculatedWidth;if(this.explicitWidth)return this.explicitWidth;var e={cnt:13,btn:24,xlcnt:22,xlbtn:38},n=this.showScreenName?"Follow %{screen_name}":"Follow",r=this._(n,{screen_name:"@"+this.screenName}),i=~t.indexOf(["ja","ko"],this.lang)?this._("10k unit"):this._("M"),s=this._("%{followers_count} followers",{followers_count:"88888"+i}),o=0,a=0,f,l,c=this.styles.base;return this.size=="l"?(c=c.concat(this.styles.large),f=e.xlbtn,l=e.xlcnt):(f=e.btn,l=e.cnt),this.showCount&&(a=u(s,"",c).width+l),o=u(r,"",c.concat(this.styles.button)).width+f,this.calculatedWidth=o+a},render:function(e,n){if(!this.screenName)return o.reject("Missing Screen Name").then(n);var r=twttr.widgets.config.assetUrl()+"/widgets/follow_button.1395870373.html#"+this.parameters(),i=this.create(r,this.dimensions(),{title:this._("Twitter Follow Button")}).then(t.bind(function(e){return this.element=e},this));return n&&i.then(n),i}}),e(a)})});
!function(){window.twttr=window.twttr||{},twttr.host=twttr.host||"platform.twitter.com",using("util/domready","util/env",function(e,t){function n(e){return(e||!/^http\:$/.test(window.location.protocol))&&!twttr.ignoreSSL?"https":"http"}if(t.ie6())return;if(twttr.widgets&&twttr.widgets.loaded)return twttr.widgets.load(),!1;if(twttr.init)return!1;twttr.init=!0,twttr._e=twttr._e||[],twttr.ready=twttr.ready||function(e){twttr.widgets&&twttr.widgets.loaded?e(twttr):twttr._e.push(e)},using.path.length||(using.path=n()+"://"+twttr.host+"/js"),twttr.ignoreSSL=twttr.ignoreSSL||!1;var r=[];twttr.events={bind:function(e,t){return r.push([e,t])}},e(function(){using("tfw/widget/base","tfw/widget/follow","tfw/widget/tweetbutton","tfw/widget/embed","tfw/widget/timeline","tfw/widget/intent","tfw/util/article","util/events","util/util",function(e,t,i,s,o,u,a,f,l){function m(e){var t=twttr.host;return n(e)=="https"&&twttr.secureHost&&(t=twttr.secureHost),n(e)+"://"+t}function g(){using("tfw/hub/client",function(e){twttr.events.hub=e.init(p),e.init(p,!0)})}var c,h,p={widgets:{"a.twitter-share-button":i,"a.twitter-mention-button":i,"a.twitter-hashtag-button":i,"a.twitter-follow-button":t,"blockquote.twitter-tweet":s,"a.twitter-timeline":o,"div.twitter-timeline":o,body:u}},d=twttr.events&&twttr.events.hub?twttr.events:{},v;p.assetUrl=m,twttr.widgets=twttr.widgets||{},l.aug(twttr.widgets,{config:{assetUrl:m},load:function(t){e.init(p),e.embed(t),twttr.widgets.loaded=!0},createShareButton:function(t,n,r,s){if(!t||!n)return r&&r(!1);s=l.aug({},s||{},{url:t,targetEl:n});var o=new i(s);return e.doLayout(),o.render(p,r),o.completed()},createHashtagButton:function(t,n,r,s){if(!t||!n)return r&&r(!1);s=l.aug({},s||{},{hashtag:t,targetEl:n,type:"hashtag"});var o=new i(s);return e.doLayout(),o.render(p,r),o.completed()},createMentionButton:function(t,n,r,s){if(!t||!n)return r&&r(!1);s=l.aug({},s||{},{screenName:t,targetEl:n,type:"mention"});var o=new i(s);return e.doLayout(),o.render(p,r),o.completed()},createFollowButton:function(n,r,i,s){if(!n||!r)return i&&i(!1);s=l.aug({},s||{},{screenName:n,targetEl:r});var o=new t(s);return e.doLayout(),o.render(p,i),o.completed()},createTweet:function(t,n,r,i){if(!t||!n)return r&&r(!1);i=l.aug({},i||{},{tweetId:t,targetEl:n});var o=new s(i);return e.doLayout(),o.render(p,r),s.fetchAndRender(),o.completed()},createTimeline:function(t,n,r,i){if(!t||!n)return r&&r(!1);i=l.aug({},i||{},{widgetId:t,targetEl:n});var s=new o(i);return e.doLayout(),s.render(p,r),s.completed()}}),l.aug(twttr.events,d,f.Emitter),v=twttr.events.bind,twttr.events.bind=function(e,t){g(),this.bind=v,this.bind(e,t)};for(c=0;h=r[c];c++)twttr.events.bind(h[0],h[1]);for(c=0;h=twttr._e[c];c++)h(twttr);twttr.ready=function(e){e(twttr)},/twitter\.com(\:\d+)?$/.test(document.location.host)&&(twttr.widgets.createTimelinePreview=function(t,n,r){if(!p||!n)return r&&r(!1);var i=new o({previewParams:t,targetEl:n,linkColor:t.link_color,theme:t.theme,height:t.height});return e.doLayout(),i.render(p,r),i.completed()}),twttr.widgets.createTweetEmbed=twttr.widgets.createTweet,twttr.widgets.load()})})})}()});angular.module('app', ['ngResource', 'ngRoute', 'angular-loading-bar']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
  'use strict';

  var routeRoleChecks = {
    user: {
      auth: ['appAuth', function (appAuth) {
        return appAuth.authorizeLoggedInUserForRoute();
      }]
    }
  };

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/',                  {templateUrl: '/partials/pages/landingpage',    controller: 'appPagesCtrl'          })
    .when('/terms',             {templateUrl: '/partials/pages/terms',          controller: 'appPagesCtrl'          })
    .when('/login',             {templateUrl: '/partials/account/login',        controller: 'appLoginCtrl'          })
    .when('/join',              {templateUrl: '/partials/account/join',         controller: 'appJoinCtrl'           })
    .when('/search',            {templateUrl: '/partials/pages/home',           controller: 'appHomeCtrl'           })
    .when('/:id',               {templateUrl: '/partials/main/main',            controller: 'appMainCtrl'           })
    .when('/unsubscribe/:id',   {templateUrl: '/partials/account/unsubscribe',  controller: 'appUnsubscribeCtrl'    })
    .when('/account/readlater', {templateUrl: '/partials/readlater/readlater',  controller: 'appReadlaterCtrl',     resolve: routeRoleChecks.user})
    .when('/account/settings',  {templateUrl: '/partials/account/settings',     controller: 'appSettingsCtrl',      resolve: routeRoleChecks.user});
});


angular.module('app').run(function ($rootScope, $location) {
  'use strict';
  
  $rootScope.$on('$routeChangeSuccess', function(){
    window.ga('send', 'pageview', $location.path());
  });
  
  $rootScope.$on('$routeChangeError', function (event, current, previous, rejectionReason) {
    if (rejectionReason === 'not authorized') {
      $location.path('/join');
    }
  });
});
angular.module('app').factory('AppUser', function ($resource, $rootScope) {
  'use strict';

  var UserResource = $resource('/api/users/:id', {_id: '@id'}, {
    update: { method: 'PUT', isArray: false }
  });

  UserResource.prototype.isAdmin = function() {
    return this.roles && this.roles.indexOf('admin') > -1;
  };

  UserResource.prototype.addBuzzr = function(topic) {
    if (!!this.buzzrs && this.buzzrs.indexOf(topic) === -1) {
      this.buzzrs.push(topic);
      this.$update();
      $rootScope.$broadcast('buzzrsChanged');
    }
  };

  UserResource.prototype.removeBuzzr = function(topic) {
    var i = this.buzzrs.indexOf(topic);
    if (i > -1) {
      this.buzzrs.splice(i,1);
      this.$update();
      $rootScope.$broadcast('buzzrsChanged');
    }
  };

  UserResource.prototype.indexOfSavedLink = function(url) {
    var index = -1;
    this.readlater.forEach(function(l, i) {
      if (l.url === url) {
        index = i;
      }
    });
    return index;
  };
  
  UserResource.prototype.saveLink = function(newSavedLink) {
    if (this.indexOfSavedLink(newSavedLink.url) > -1) {
      this.removeSavedLink(newSavedLink.url);
      return false;
    }
    this.recordActivity('saved', newSavedLink.url, newSavedLink.topic);
    this.readlater.push(newSavedLink);
    this.$update();
    $rootScope.$broadcast('readlaterChanged');
    return true;
  };

  UserResource.prototype.removeSavedLink = function(url) {
    var index = this.indexOfSavedLink(url);

    if (index > -1) {
      this.readlater.splice(index,1);
      this.$update();
      $rootScope.$broadcast('readlaterChanged');
    }
  };

  UserResource.prototype.removeLink = function(url, topic) {
    this.recordActivity('removed', url, topic);
    this.$update();
    $rootScope.$broadcast('removedLink');
  };

  UserResource.prototype.trackView = function(url, topic) {
    this.recordActivity('viewed', url, topic);
    this.$update();
  };

  UserResource.prototype.trackShare = function(url, topic) {
    this.recordActivity('shared', url, topic);
    this.$update();
  };

  UserResource.prototype.recordActivity = function(type, url, topic) {
    var index = -1;
    this.activities.forEach(function(obj, i) {
      if (obj.topic === topic) {
        index = i;
      }
    });
    
    if (index === -1) {
      this.activities.push({
        topic: topic,
        removed: [],
        viewed: [],
        saved: [],
        shared:[]
      });
      index = 0;
    }
    this.activities[index][type].push(url);
  };

  return UserResource;
});
angular.module('app').factory('appAuth', function ($http, $q, appIdentity, AppUser) {
  'use strict';

  return {
    authenticateUser: function(email, password) {
      var dfd = $q.defer();

      $http
        .post('/login', {email: email, password: password})
        .then(function(res) {
          if (res.data.success) {
            var user = new AppUser();
            angular.extend(user, res.data.user);
            appIdentity.currentUser = user;
            dfd.resolve(true);
          } else {
            dfd.resolve(false);
          }
        });

      return dfd.promise;
    },

    createUser: function(newUserData) {
      var newUser = new AppUser(newUserData);
      var dfd = $q.defer();

      newUser.$save().then(function() {
        appIdentity.currentUser = newUser;
        dfd.resolve(true);
      }, function(response) {
        dfd.reject(response.data.reason);
      });

      return dfd.promise;
    },

    updateCurrentUser: function(updatedUser) {
      var dfd = $q.defer();

      updatedUser.$update().then(function() {
        appIdentity.currentUser = updatedUser;
        dfd.resolve(true);
      }, function(response) {
        dfd.reject(response.data.reason);
      });

      return dfd.promise;
    },

    logoutUser: function() {
      var dfd = $q.defer();

      $http
        .post('/logout', {logout: true})
        .then(function() {
          appIdentity.currentUser = undefined;
          dfd.resolve(true);
        });

      return dfd.promise;
    },

    authorizeCurrentUserForRoute: function() {
      if (appIdentity.isAuthorized('admin')) {
        return true;
      }
      return $q.reject('not authorized');
    },

    authorizeLoggedInUserForRoute: function() {
      if (appIdentity.isAuthenticated()) {
        return true;
      }
      return $q.reject('not authorized');
    }
  };
});angular.module('app').factory('appIdentity', function ($window, AppUser) {
  'use strict';

  var currentUser;
  
  if (!!$window.bootstrappedUser) {
    currentUser = new AppUser();
    angular.extend(currentUser, $window.bootstrappedUser);
  }

  return {
    currentUser: currentUser,
    isAuthenticated: function() {
      return !!this.currentUser;
    },
    isAuthorized: function(role) {
      return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
    }
  };
});
angular.module('app').controller('appJoinCtrl', function ($scope, $location, appIdentity, appAuth, appNotifier) {
  'use strict';

  $scope.signup = function() {
    var newUserData = {
      email: $scope.email,
      password: $scope.password
    };

    appAuth.createUser(newUserData).then(function() {
      $location.path('/search');
    }, function(reason) {
      appNotifier.error(reason, $scope);
    });
  };
});
angular.module('app').controller('appLoginCtrl', function ($scope, $location, appAuth, appNotifier) {
  'use strict';

  $scope.signin = function() {
    
    appAuth
      .authenticateUser($scope.email, $scope.password)
      .then(function(success) {
        if (success) {
          $location.path('/search');
        } else {
          appNotifier.error('email/password combination incorrect', $scope);
        }
      });
  };
});
angular.module('app').controller('appSettingsCtrl', function ($scope, $location, $http, appAuth, appIdentity, appNotifier) {
  'use strict';

  $scope.currentUser = angular.copy(appIdentity.currentUser);
  $scope.email = {
    valid: appIdentity.currentUser.email.match(/^[\S]+@[\S]+\.[\S]+$/)
  };

  // User came from Twitter Auth
  if (!$scope.email.valid) {
    $scope.currentUser.email = '';
  }

  $scope.update = function() {
    appAuth.updateCurrentUser($scope.currentUser).then(function() {
      if (!$scope.email.valid) { return $location.path('/search'); }
      appNotifier.notify('Your account has been updated', $scope);
    }, function(reason) {
      appNotifier.error(reason, $scope);
    });
  };
});
angular.module('app').controller('appUnsubscribeCtrl', function ($scope) {
  'use strict';

  $scope.done = true;
});
angular.module('app').controller('appTweet4meUpgradeCtrl', function ($scope, $http) {
  'use strict';
  var stripeToken = {};
  var planAmounts = {
      'startup': 10*100,
      'business': 49*100,
      'enterprise': 99*100
    };

  $scope.success = false;
  $scope.plan = '';
  
  var handler = window.StripeCheckout.configure({
    key: 'pk_live_xGJ0UWxpKbFmhRVaXUcMDuIG', //'pk_test_A92gZzXMijuUIYouO3UXkIyB'
    image: '/img/icon.png',
    token: function(token) {
      stripeToken = token;

      $http
        .post('/stripe', {token: token, plan: $scope.plan})
        .then(function(res) {
          if (res.data.success) {
            $scope.success = true;
            $scope.email = token.email;
          } else {
            window.alert(res.data.reason);
          }
        }, function() {
          window.alert('There was a server error, your card was NOT charged! Please contact us for help!');
        });
    }
  });

  $scope.openCheckout = function(plan) {
    $scope.plan = plan;
    handler.open({
      name: 'Buzzr',
      description: 'Upgrade: ' + plan,
      amount: planAmounts[plan]
    });
  };
});
angular.module('app').controller('appAdminBuzzrsCtrl', function ($scope, $http, $window) {
  'use strict';
  
  $scope.buzzrs = [];

  $http
    .get('/api/buzzrs')
    .then(function(res) {
      if (res.data.buzzrs) {
        $scope.buzzrs = res.data.buzzrs;
      } else {
        $window.alert('$http error');
      }
    });
});
angular.module('app').controller('appAdminErrorsCtrl', function ($scope, $http, $window) {
  'use strict';
  
  $scope.socketErrors = [];
  $scope.titleErrors = [];

  $http
    .get('/api/errors')
    .then(function(res) {
      if (!!res.data.titleErrors) {
        $scope.socketErrors = res.data.socketErrors;
        $scope.titleErrors = res.data.titleErrors;
      } else {
        $window.alert('$http error');
      }
    });
});
angular.module('app').controller('appAdminUsersCtrl', function ($scope, AppUser) {
  'use strict';
  
  $scope.users = AppUser.query();
});  /*
   * angular-loading-bar
   *
   * intercepts XHR requests and creates a loading bar.
   * Based on the excellent nprogress work by rstacruz (more info in readme)
   *
   * (c) 2013 Wes Cruver
   * License: MIT
   */


(function() {

  'use strict';

  // Alias the loading bar so it can be included using a simpler
  // (and maybe more professional) module name:
  angular.module('angular-loading-bar', ['chieffancypants.loadingBar']);


  /**
   * loadingBarInterceptor service
   *
   * Registers itself as an Angular interceptor and listens for XHR requests.
   */
  angular.module('chieffancypants.loadingBar', [])
    .config(['$httpProvider', function ($httpProvider) {

      var interceptor = ['$q', '$cacheFactory', '$timeout', '$rootScope', 'cfpLoadingBar', function ($q, $cacheFactory, $timeout, $rootScope, cfpLoadingBar) {

        /**
         * The total number of requests made
         */
        var reqsTotal = 0;

        /**
         * The number of requests completed (either successfully or not)
         */
        var reqsCompleted = 0;

        /**
         * The amount of time spent fetching before showing the loading bar
         */
        var latencyThreshold = cfpLoadingBar.latencyThreshold;

        /**
         * $timeout handle for latencyThreshold
         */
        var startTimeout;


        /**
         * calls cfpLoadingBar.complete() which removes the
         * loading bar from the DOM.
         */
        function setComplete() {
          $timeout.cancel(startTimeout);
          cfpLoadingBar.complete();
          reqsCompleted = 0;
          reqsTotal = 0;
        }

        /**
         * Determine if the response has already been cached
         * @param  {Object}  config the config option from the request
         * @return {Boolean} retrns true if cached, otherwise false
         */
        function isCached(config) {
          var cache;
          var defaults = $httpProvider.defaults;

          if (config.method !== 'GET' || config.cache === false) {
            config.cached = false;
            return false;
          }

          if (config.cache === true && defaults.cache === undefined) {
            cache = $cacheFactory.get('$http');
          } else if (defaults.cache !== undefined) {
            cache = defaults.cache;
          } else {
            cache = config.cache;
          }

          var cached = cache !== undefined ?
            cache.get(config.url) !== undefined : false;

          if (config.cached !== undefined && cached !== config.cached) {
            return config.cached;
          }
          config.cached = cached;
          return cached;
        }


        return {
          'request': function(config) {
            // Check to make sure this request hasn't already been cached and that
            // the requester didn't explicitly ask us to ignore this request:
            if (!config.ignoreLoadingBar && !isCached(config)) {
              $rootScope.$broadcast('cfpLoadingBar:loading', {url: config.url});
              if (reqsTotal === 0) {
                startTimeout = $timeout(function() {
                  cfpLoadingBar.start();
                }, latencyThreshold);
              }
              reqsTotal++;
              cfpLoadingBar.set(reqsCompleted / reqsTotal);
            }
            return config;
          },

          'response': function(response) {
            if (!isCached(response.config)) {
              reqsCompleted++;
              $rootScope.$broadcast('cfpLoadingBar:loaded', {url: response.config.url});
              if (reqsCompleted >= reqsTotal) {
                setComplete();
              } else {
                cfpLoadingBar.set(reqsCompleted / reqsTotal);
              }
            }
            return response;
          },

          'responseError': function(rejection) {
            if (!isCached(rejection.config)) {
              reqsCompleted++;
              $rootScope.$broadcast('cfpLoadingBar:loaded', {url: rejection.config.url});
              if (reqsCompleted >= reqsTotal) {
                setComplete();
              } else {
                cfpLoadingBar.set(reqsCompleted / reqsTotal);
              }
            }
            return $q.reject(rejection);
          }
        };
      }];

      $httpProvider.interceptors.push(interceptor);
    }])


    /**
     * Loading Bar
     *
     * This service handles adding and removing the actual element in the DOM.
     * Generally, best practices for DOM manipulation is to take place in a
     * directive, but because the element itself is injected in the DOM only upon
     * XHR requests, and it's likely needed on every view, the best option is to
     * use a service.
     */
    .provider('cfpLoadingBar', function() {

      this.includeSpinner = true;
      this.includeBar = true;
      this.latencyThreshold = 100;
      this.startSize = 0.02;
      this.parentSelector = 'body';

      this.$get = ['$document', '$timeout', '$animate', '$rootScope', function ($document, $timeout, $animate, $rootScope) {

        var $parentSelector = this.parentSelector,
          $parent = $document.find($parentSelector),
          loadingBarContainer = angular.element('<div id="loading-bar"><div class="bar"><div class="peg"></div></div></div>'),
          loadingBar = loadingBarContainer.find('div').eq(0),
          spinner = angular.element('<div id="loading-bar-spinner"><div class="spinner-icon"></div></div>');

        var incTimeout,
          completeTimeout,
          started = false,
          status = 0;

        var includeSpinner = this.includeSpinner;
        var includeBar = this.includeBar;
        var startSize = this.startSize;

        /**
         * Inserts the loading bar element into the dom, and sets it to 2%
         */
        function _start() {
          $timeout.cancel(completeTimeout);

          // do not continually broadcast the started event:
          if (started) {
            return;
          }

          $rootScope.$broadcast('cfpLoadingBar:started');
          started = true;

          if (includeBar) {
            $animate.enter(loadingBarContainer, $parent);
          }

          if (includeSpinner) {
            $animate.enter(spinner, $parent);
          }

          _set(startSize);
        }

        /**
         * Set the loading bar's width to a certain percent.
         *
         * @param n any value between 0 and 1
         */
        function _set(n) {
          if (!started) {
            return;
          }
          var pct = (n * 100) + '%';
          loadingBar.css('width', pct);
          status = n;

          // increment loadingbar to give the illusion that there is always
          // progress but make sure to cancel the previous timeouts so we don't
          // have multiple incs running at the same time.
          $timeout.cancel(incTimeout);
          incTimeout = $timeout(function() {
            _inc();
          }, 250);
        }

        /**
         * Increments the loading bar by a random amount
         * but slows down as it progresses
         */
        function _inc() {
          if (_status() >= 1) {
            return;
          }

          var rnd = 0;

          // TODO: do this mathmatically instead of through conditions

          var stat = _status();
          if (stat >= 0 && stat < 0.25) {
            // Start out between 3 - 6% increments
            rnd = (Math.random() * (5 - 3 + 1) + 3) / 100;
          } else if (stat >= 0.25 && stat < 0.65) {
            // increment between 0 - 3%
            rnd = (Math.random() * 3) / 100;
          } else if (stat >= 0.65 && stat < 0.9) {
            // increment between 0 - 2%
            rnd = (Math.random() * 2) / 100;
          } else if (stat >= 0.9 && stat < 0.99) {
            // finally, increment it .5 %
            rnd = 0.005;
          } else {
            // after 99%, don't increment:
            rnd = 0;
          }

          var pct = _status() + rnd;
          _set(pct);
        }

        function _status() {
          return status;
        }

        function _complete() {
          $rootScope.$broadcast('cfpLoadingBar:completed');
          _set(1);

          // Attempt to aggregate any start/complete calls within 500ms:
          completeTimeout = $timeout(function() {
            $animate.leave(loadingBarContainer, function() {
              status = 0;
              started = false;
            });
            $animate.leave(spinner);
          }, 500);
        }

        return {
          start            : _start,
          set              : _set,
          status           : _status,
          inc              : _inc,
          complete         : _complete,
          includeSpinner   : this.includeSpinner,
          latencyThreshold : this.latencyThreshold,
          parentSelector   : this.parentSelector,
          startSize        : this.startSize
        };

      }];
    });
})();angular.module('app').factory('appIsMobile', function() {
  'use strict';

  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i) ? true : false;
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i) ? true : false;
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    }
  };
  
  return isMobile;
});
angular.module('app').factory('appNotifier', function() {
  'use strict';

  return {
    notify: function(msg, scope) {
      scope.notifier = {};
      scope.notifier.notice = msg;
      setTimeout(function() {
        scope.notifier.notice = '';
        scope.$digest();
      }, 4000);
    },
    error: function(msg, scope) {
      scope.notifier = {};
      scope.notifier.error = msg;
      setTimeout(function() {
        scope.notifier.error = '';
        scope.$digest();
      }, 4000);
    }
  };
});
angular.module('app').controller('appSocialHeaderCtrl', function ($scope, $location) {
  'use strict';

  var show = ['/', '/tweet4me', '/tweet4me/pricing', '/tweet4me/join', '/terms'];

  $scope.showSocialHeader = function() {
    return show.indexOf($location.path()) > -1;
  };
});
angular.module('app').factory('appTimeToUpdate', function() {
  'use strict';

  var timeLeft = {
    timeLeft: function() {
      var d = new Date(),
          h = d.getUTCHours(),
          m = d.getUTCMinutes(),
          updateStatus = '';

      if (h > 4) {
        updateStatus = 'Next update in '+ (27-h) +'hrs and '+(60-m)+'min';
      } else if (h < 4) {
        updateStatus = 'Next update in '+ (4-h) +'hrs and '+(60-m)+'min';
      } else {
        updateStatus = 'Buzzr is looking for new links, stay tuned...';
      }

      return updateStatus;
    }
  };

  return timeLeft;
});
angular.module('app').factory('appTopics', function ($window) {
  'use strict';

  var topics = [];
  
  if (!!$window.bootstrappedTopics) {
    topics = $window.bootstrappedTopics;
  }

  return topics;
});
String.prototype.trunc = function(n) {
  'use strict';
  return this.length > n ? this.substr(0, n-1) + '...' : this;
};
angular.module('app').factory('appFeedback', function ($rootScope) {
  'use strict';

  return {
    toggle: function() {
      $rootScope.$broadcast('toggleFeedback');
    }
  };
});
angular.module('app').controller('appFeedbackCtrl', function ($scope, $location, $window, $http, appIdentity, appNotifier) {
  'use strict';

  $scope.success = false;
  $scope.show = false;

  $scope.feedback = {};
  $scope.feedback.userAgent = $window.navigator.userAgent;
  
  if (appIdentity.isAuthenticated()) {
    $scope.feedback.name = appIdentity.currentUser.name;
    $scope.feedback.email = appIdentity.currentUser.email;
  }

  $scope.send = function() {
    $scope.feedback.currentPath = $location.path();
    
    $http
      .post('/api/feedback', $scope.feedback)
      .then(function(res) {
        if (res.data.success) {
          $scope.success = true;
        } else {
          appNotifier.error(res.data.err || 'unknown error', $scope);
        }
      }, function(res) {
        appNotifier.error('error ' + res.status +
          ' occurred - please email help@buzzr.io', $scope);
      });
  };

  $scope.toggle = function () {
    $scope.show = !$scope.show;
  };

  $scope.$on('toggleFeedback', function() {
    $scope.toggle();
  });
});
angular.module('app').controller('appHeaderCtrl', function ($scope, $rootScope, $location, appIdentity, appSidebar) {
  'use strict';

  $scope.isLoggedIn = function() {
    return true;
  };
  
  $scope.toggleSidebar = function() {
    appSidebar.toggle();
  };

  $rootScope.$on('toggleSidebar', function() {
    $scope.open = !$scope.open;
    if(!$scope.$$phase) {
      $scope.$digest();
    }
  });

  $scope.showLogo = function() {
    var noLogo = ['/', '/search', '/login', '/tweet4me', '/about', '/join', '/terms'];
    return noLogo.indexOf($location.path()) === -1;
  };
});
angular.module('app').factory('appBuzzr', function ($http, $route, appProcessLinks) {
  'use strict';
  var BuzzrResource = {};

  function handleZeroResults ($scope) {
    $scope.errorMessage = 'Oh no, Buzzr did not find anything recent on this topic :( Please come back later and try again!';
    $scope.status = 'error';
  }

  function startCountdown ($scope) {
    var interv = setInterval(function() {
      $scope.$apply(function() {
        $scope.countDown -= 1;
        if ($scope.countDown <= 0) {
          $scope.countDown = 0;
          $route.reload();
          clearInterval(interv);
        }
      });
    }, 1000);
  }

  function handleError ($scope, msg) {
    $scope.errorMessage = msg;
    $scope.links = [];
    $scope.status = 'error';
  }

  BuzzrResource.startFeed = function ($scope) {
    $http
      .get('/api/buzzrs/' + $scope.searchText.trim())
      .then(function (res) {
        var links = res.data.links;
        if (res.data.err) {
          handleError($scope, res.data.err);
          return;
        }
        if (!links) {
          $scope.status = 'creating';
          startCountdown($scope);
        } else {
          if (links.length === 0) { return handleZeroResults($scope); }
          appProcessLinks.process($scope, links);
          $scope.lastUpdated = (new Date(res.data.lastUpdated)).toLocaleDateString();
          $scope.status = 'feeding';
        }
      }, function () {
        handleError($scope, 'Sorry, something went wrong! Please try again!');
      });
  };

  BuzzrResource.update = function ($scope) {
    $http
      .post('/api/buzzrs/' + $scope.searchText.trim())
      .then(function () {
        $scope.status = 'creating';
        startCountdown($scope);
      });
  };

  return BuzzrResource;
});
angular.module('app').controller('appMainCtrl', function ($scope, $routeParams, $location, appTimeToUpdate, appIdentity, appProcessLinks, appSidebar, appFeedback, appBuzzr) {
  /*jshint maxstatements: false */
  'use strict';

  $scope.countDown = 70;
  $scope.links = [];
  $scope.dates = [];
  $scope.identity = appIdentity;
  $scope.searchText = decodeURI($routeParams.id).toLowerCase();
  $scope.status = 'searching';
  $scope.updateStatus = appTimeToUpdate.timeLeft();

  $scope.checkStatus = function(status) { return $scope.status === status; };
  $scope.encode = function(title) { return encodeURI(title); };
  $scope.toggleSidebar = function() { appSidebar.toggle(); };
  $scope.toggleFeedback = function() { appFeedback.toggle(); };
  $scope.triggerSearch = function() { appBuzzr.startFeed($scope); };
  $scope.showUpdate = function() { return $scope.lastUpdated !== (new Date()).toLocaleDateString(); };
  $scope.updateNow = function() { appBuzzr.update($scope); };

  $scope.showLoading = function() {
    if ($scope.checkStatus('searching') || $scope.checkStatus('creating') ||
      $scope.checkStatus('updating')) {
      return true;
    }
    return false;
  };

  $scope.newSearch = function(newSearchTerm) {
    if (!!newSearchTerm) {
      var url = newSearchTerm.toLowerCase().trim();
      $location.path('/' + url);
    }
  };

  if (appIdentity.isAuthenticated()) {
    appIdentity.currentUser.addBuzzr($scope.searchText);
    $scope.saveLink = function(link) { appProcessLinks.saveLink(link, $scope.searchText); };
    $scope.removeLink = function(link) { appProcessLinks.removeLink(link, $scope.searchText); };
    $scope.trackView = function(url) { appIdentity.currentUser.trackView(url, $scope.searchText); };
    $scope.trackShare = function(url) { appIdentity.currentUser.trackShare(url, $scope.searchText); };
    $scope.savedLink = '/account/readlater';
  } else {
    $scope.saveLink = function() { $location.path('/join'); };
    $scope.savedLink = '/join';
  }
  
  $scope.triggerSearch();
});
angular.module('app').factory('appProcessLinks', function (appIdentity) {
  'use strict';

  var uniqDates = {},
      removedLinks = [],
      readlater = [];

  function setLocalDate(link) {
    if(!!link.activated) {
      link.activated = (new Date(link.activated)).toLocaleDateString();
      uniqDates[link.activated] = true;
    }
  }

  function setDomain(link) {
    link.domain = link.url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[1].toLowerCase().replace('www.', '');
  }

  function getDates() {
    var a = [];
    for (var date in uniqDates) {
      if(uniqDates.hasOwnProperty(date)) {
        a.push(date);
      }
    }
    return a.reverse();
  }

  function checkRemoved(link) {
    link.removed = false;
    if (removedLinks.indexOf(link.url) > -1) {
      link.removed = true;
    }
  }

  function checkSaved(link) {
    link.saved = false;
    if (readlater.indexOf(link.url) > -1) {
      link.saved = true;
    }
  }

  function processLink(link) {
    setLocalDate(link);
    setDomain(link);
    checkSaved(link);
    checkRemoved(link);
  }

  return {
    process: function($scope, incomingLinks) {
      if (appIdentity.currentUser && appIdentity.currentUser.readlater) {
        appIdentity.currentUser.readlater.forEach(function(obj) {
          readlater.push(obj.url);
        });
        appIdentity.currentUser.activities.forEach(function(obj) {
          if (obj.topic === $scope.searchText) {
            removedLinks = obj.removed;
          }
        });
      }

      incomingLinks.forEach(processLink);
      
      $scope.dates = getDates();
      $scope.links = incomingLinks;
    },

    saveLink: function(link, topic) {
      var newSavedLink = {
        url: link.url,
        title: link.title,
        topic: topic,
        activated: Date.now()
      };
      link.saved = appIdentity.currentUser.saveLink(newSavedLink);
    },
    
    removeLink: function(link, topic) {
      appIdentity.currentUser.removeLink(link.url, topic);
      link.removed = true;
    }
  };
});
angular.module('app').controller('appHomeCtrl', function ($scope, $location, $document, appIdentity, appSidebar, appIsMobile) {
  'use strict';

  $scope.identity = appIdentity;

  $scope.search = function() {
    if (!!$scope.searchText) {
      $location.path('/' + $scope.searchText.trim());
    }
  };
  
  /*if (appIdentity.isAuthenticated()) {
    if (!appIdentity.currentUser.email.match(/^[\S]+@[\S]+\.[\S]+$/)) {
      // redirect if email invalid (twitter logins)
      $location.path('account/settings');
    }
    if (appIdentity.currentUser.bufferUser) {
      appAuth.logoutUser();
      $location.path('/');
    }
  }*/

  // auto focus input on desktop
  if (!appIsMobile.any()) {
    var homeInput = $document[0].getElementById('focus');
    homeInput.focus();
  }
});
angular.module('app').controller('appPagesCtrl', function ($scope, appTimeToUpdate, appFeedback) {
  'use strict';

  $scope.updateStatus = appTimeToUpdate.timeLeft();

  $scope.toggleFeedback = function() {
    appFeedback.toggle();
  };
});
angular.module('app').controller('appReadlaterCtrl', function ($scope, appFeedback, appSidebar, appIdentity) {
  'use strict';

  $scope.readlater = appIdentity.currentUser.readlater || [];
  $scope.empty = function() {
    return $scope.readlater.length === 0;
  };

  $scope.toggleFeedback = function() { appFeedback.toggle(); };

  $scope.removeLink = function(url) {
    appIdentity.currentUser.removeSavedLink(url);
  };

  $scope.$on('readlaterChanged', function() {
    $scope.readlater = appIdentity.currentUser.readlater;
  });
});
angular.module('app').factory('appSidebar', function ($rootScope) {
  'use strict';

  var header = {};

  header.toggle = function() {
    $rootScope.$emit('toggleSidebar');
  };
  
  return header;
});
angular.module('app').controller('appSidebarCtrl', function ($scope, $rootScope, appSidebar, $location, $document, appAuth, appNotifier, appIdentity) {
  'use strict';

  var blackout = angular.element(document.querySelector('.blackout'));
  
  function close() {
    if ($scope.open) {
      appSidebar.toggle();
    }
  }

  $scope.identity = appIdentity;

  $scope.setBuzzrs = function() {
    if (appIdentity.isAuthenticated()) {
      $scope.buzzrs = appIdentity.currentUser.buzzrs;
    }
  };

  $scope.encode = function(topic) {
    return encodeURI(topic);
  };

  $scope.signout = function() {
    appAuth.logoutUser().then(function() {
      $location.path('/');
    });
  };

  $scope.removeBuzzr = function(topic) {
    appIdentity.currentUser.removeBuzzr(topic);
  };

  $scope.toggleOpen = function() {
    blackout.toggleClass('on');
    $scope.open = !$scope.open;
    if ($scope.open) {
      $document.one('click', close);
      $document.one('touch', close);
    }
    if(!$scope.$$phase) {
      $scope.$digest();
    }
  };

  $rootScope.$on('toggleSidebar', function() {
    $scope.setBuzzrs();
    $scope.toggleOpen();
  });

  $scope.$on('buzzrsChanged', function() {
    $scope.setBuzzrs();
  });

  $scope.setBuzzrs();
});
