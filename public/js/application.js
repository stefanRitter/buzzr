angular.module("app",["ngResource","ngRoute"]),angular.module("app").config(["$routeProvider","$locationProvider",function(a,b){"use strict";var c={user:{auth:function(a){return a.authorizeLoggedInUserForRoute()}}};b.html5Mode(!0),a.when("/",{templateUrl:"/partials/pages/home",controller:"appHomeCtrl"}).when("/about",{templateUrl:"/partials/pages/about",controller:"appPagesCtrl"}).when("/terms",{templateUrl:"/partials/pages/terms",controller:"appPagesCtrl"}).when("/login",{templateUrl:"/partials/account/login",controller:"appLoginCtrl"}).when("/join",{templateUrl:"/partials/account/join",controller:"appJoinCtrl"}).when("/:id",{templateUrl:"/partials/main/main",controller:"appMainCtrl"}),a.when("/account/readlater",{templateUrl:"/partials/readlater/readlater",controller:"appReadlaterCtrl",resolve:c.user}).when("/account/settings",{templateUrl:"/partials/account/settings",controller:"appSettingsCtrl",resolve:c.user})}]),angular.module("app").run(["$rootScope","$location",function(a,b){"use strict";a.$on("$routeChangeError",function(a,c,d,e){"not authorized"===e&&b.path("/")})}]),angular.module("app").factory("AppUser",["$resource","$rootScope",function(a,b){"use strict";var c=a("/api/users/:id",{_id:"@id"},{update:{method:"PUT",isArray:!1}});return c.prototype.isAdmin=function(){return this.roles&&this.roles.indexOf("admin")>-1},c.prototype.addBuzzr=function(a){-1===this.buzzrs.indexOf(a)&&(this.buzzrs.push(a),this.$update(),b.$broadcast("buzzrsChanged"))},c.prototype.removeBuzzr=function(a){var c=this.buzzrs.indexOf(a);c>-1&&(this.buzzrs.splice(c,1),this.$update(),b.$broadcast("buzzrsChanged"))},c.prototype.saveLink=function(a){this.recordActivity("saved",a.url,a.topic),this.readlater.push(a),this.$update(),b.$broadcast("readlaterChanged")},c.prototype.removeSavedLink=function(a){var c=-1;this.readlater.forEach(function(b,d){b.url===a&&(c=d)}),c>-1&&(this.readlater.splice(c,1),this.$update(),b.$broadcast("readlaterChanged"))},c.prototype.removeLink=function(a,c){this.recordActivity("removed",a,c),this.$update(),b.$broadcast("removedLink")},c.prototype.trackView=function(a,b){this.recordActivity("viewed",a,b),this.$update()},c.prototype.trackShare=function(a,b){this.recordActivity("shared",a,b),this.$update()},c.prototype.recordActivity=function(a,b,c){var d=-1;this.activities.forEach(function(a,b){a.topic===c&&(d=b)}),-1===d&&(this.activities.push({topic:c,removed:[],viewed:[],saved:[],shared:[]}),d=0),this.activities[d][a].push(b)},c}]),angular.module("app").factory("appAuth",["$http","$q","appIdentity","AppUser",function(a,b,c,d){"use strict";return{authenticateUser:function(e,f){var g=b.defer();return a.post("/login",{email:e,password:f}).then(function(a){if(a.data.success){var b=new d;angular.extend(b,a.data.user),c.currentUser=b,g.resolve(!0)}else g.resolve(!1)}),g.promise},createUser:function(a){var e=new d(a),f=b.defer();return e.$save().then(function(){c.currentUser=e,f.resolve(!0)},function(a){f.reject(a.data.reason)}),f.promise},updateCurrentUser:function(a){var d=b.defer();return a.$update().then(function(){c.currentUser=a,d.resolve(!0)},function(a){d.reject(a.data.reason)}),d.promise},logoutUser:function(){var d=b.defer();return a.post("/logout",{logout:!0}).then(function(){c.currentUser=void 0,d.resolve(!0)}),d.promise},authorizeCurrentUserForRoute:function(){return c.isAuthorized("admin")?!0:b.reject("not authorized")},authorizeLoggedInUserForRoute:function(){return c.isAuthenticated()?!0:b.reject("not authorized")}}}]),angular.module("app").factory("appIdentity",["$window","AppUser",function(a,b){"use strict";var c;return a.bootstrappedUser&&(c=new b,angular.extend(c,a.bootstrappedUser)),{currentUser:c,isAuthenticated:function(){return!!this.currentUser},isAuthorized:function(a){return!!this.currentUser&&this.currentUser.roles.indexOf(a)>-1}}}]),angular.module("app").controller("appJoinCtrl",["$scope","$location","appAuth","appNotifier",function(a,b,c,d){"use strict";a.signup=function(){var e={email:a.email,password:a.password};c.createUser(e).then(function(){b.path("/")},function(b){d.error(b,a)})}}]),angular.module("app").controller("appLoginCtrl",["$scope","$location","appAuth","appNotifier",function(a,b,c,d){"use strict";a.signin=function(){c.authenticateUser(a.email,a.password).then(function(c){c?b.path("/"):d.error("email/password combination incorrect",a)})}}]),angular.module("app").controller("appSettingsCtrl",["$scope","$location","appAuth","appIdentity","appNotifier",function(a,b,c,d,e){"use strict";a.currentUser=angular.copy(d.currentUser),a.email={valid:d.currentUser.email.match(/^[\S]+@[\S]+\.[\S]+$/)},a.email.valid||(a.currentUser.email=""),a.update=function(){c.updateCurrentUser(a.currentUser).then(function(){return a.email.valid?void e.notify("Your account has been updated",a):b.path("/")},function(b){e.error(b,a)})}}]),angular.module("app").controller("appAdminBuzzrsCtrl",["$scope","$http","$window",function(a,b,c){"use strict";a.buzzrs=[],b.get("/api/buzzrs").then(function(b){b.data.buzzrs?a.buzzrs=b.data.buzzrs:c.alert("$http error")})}]),angular.module("app").controller("appAdminErrorsCtrl",["$scope","$http","$window",function(a,b,c){"use strict";a.socketErrors=[],a.titleErrors=[],b.get("/api/errors").then(function(b){b.data.titleErrors?(a.socketErrors=b.data.socketErrors,a.titleErrors=b.data.titleErrors):c.alert("$http error")})}]),angular.module("app").controller("appAdminUsersCtrl",["$scope","AppUser",function(a,b){"use strict";a.users=b.query()}]),angular.module("app").factory("appIsMobile",function(){"use strict";var a={Android:function(){return navigator.userAgent.match(/Android/i)?!0:!1},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)?!0:!1},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)?!0:!1},Windows:function(){return navigator.userAgent.match(/IEMobile/i)?!0:!1},any:function(){return a.Android()||a.BlackBerry()||a.iOS()||a.Windows()}};return a}),angular.module("app").factory("appNotifier",function(){"use strict";return{notify:function(a,b){b.notifier={},b.notifier.notice=a,setTimeout(function(){b.notifier.notice="",b.$digest()},4e3)},error:function(a,b){b.notifier={},b.notifier.error=a,setTimeout(function(){b.notifier.error="",b.$digest()},4e3)}}}),angular.module("app").factory("appTopics",["$window",function(a){"use strict";var b=[];return a.bootstrappedTopics&&(b=a.bootstrappedTopics),b}]),angular.module("app").factory("appFeedback",["$rootScope",function(a){"use strict";return{toggle:function(){a.$broadcast("toggleFeedback")}}}]),angular.module("app").controller("appFeedbackCtrl",["$scope","$location","$window","$http","appIdentity","appNotifier",function(a,b,c,d,e,f){"use strict";a.success=!1,a.show=!1,a.feedback={},a.feedback.userAgent=c.navigator.userAgent,e.isAuthenticated()&&(a.feedback.name=e.currentUser.name,a.feedback.email=e.currentUser.email),a.send=function(){a.feedback.currentPath=b.path(),d.post("/api/feedback",a.feedback).then(function(b){b.data.success?a.success=!0:f.error(b.data.err||"unknown error",a)},function(b){f.error("error "+b.status+" occurred - please email help@buzzr.io",a)})},a.toggle=function(){a.show=!a.show},a.$on("toggleFeedback",function(){a.toggle()})}]),angular.module("app").factory("appHeader",["$rootScope",function(a){"use strict";var b={};return b.toggle=function(){a.$broadcast("toggleHeader")},b}]),angular.module("app").controller("appHeaderCtrl",["$scope","$location","$document","appAuth","appNotifier","appIdentity",function(a,b,c,d,e,f){"use strict";function g(){a.open&&(a.open=!1,a.$digest())}a.open=!1,a.identity=f,a.setBuzzrs=function(){f.isAuthenticated()&&(a.buzzrs=f.currentUser.buzzrs)},a.encode=function(a){return encodeURI(a)},a.signout=function(){d.logoutUser().then(function(){b.path("/")})},a.removeBuzzr=function(a){f.currentUser.removeBuzzr(a)},a.toggleOpen=function(){a.open=!a.open,c.one("click",g),c.one("touch",g)},a.slideOut=function(){a.open=!0,c.one("click",g),c.one("touch",g)},a.$on("toggleHeader",function(){a.setBuzzrs(),a.toggleOpen()}),a.$on("buzzrsChanged",function(){a.setBuzzrs()}),a.setBuzzrs()}]),angular.module("app").factory("appBuzzr",["$http","$route","appProcessLinks",function(a,b,c){"use strict";var d={};return d.startFeed=function(d){a.get("/api/buzzrs/"+d.searchText.trim()).then(function(a){var e=a.data.links;if(a.data.err)return d.errorMessage=a.data.err,d.status.error=!0,void(d.status.searching=!1);if(e&&0!==e.length)c.process(d,a.data.links),d.status.feeding=!0;else{d.status.creating=!0;var f=setInterval(function(){d.$apply(function(){d.countDown-=1,d.countDown<=0&&(d.countDown=0,b.reload(),clearInterval(f))})},1e3)}d.status.searching=!1},function(){d.errorMessage="Sorry, something went wrong! Please try again!",d.status.error=!0,d.status.searching=!1})},d}]),angular.module("app").controller("appMainCtrl",["$scope","$routeParams","appIdentity","appProcessLinks","appHeader","appFeedback","appBuzzr",function(a,b,c,d,e,f,g){"use strict";a.countDown=18,a.links=[],a.dates=[],a.lang="",a.identity=c,a.searchText=decodeURI(b.id).toLowerCase(),a.status={searching:!0,creating:!1,feeding:!1,error:!1},a.encode=function(a){return encodeURI(a)},a.toggleHeader=function(){e.toggle()},a.toggleFeedback=function(){f.toggle()},a.getLang=function(b){return a.lang===b},a.triggerSearch=function(){g.startFeed(a)},a.showLoading=function(){return a.status.searching||a.status.creating?!0:!1},c.isAuthenticated()&&(c.currentUser.addBuzzr(a.searchText),a.saveLink=function(b){d.saveLink(b,a.searchText)},a.removeLink=function(b){d.removeLink(b,a.searchText)},a.trackView=function(b){c.currentUser.trackView(b,a.searchText)},a.trackShare=function(b){c.currentUser.trackShare(b,a.searchText)}),a.triggerSearch()}]),angular.module("app").factory("appProcessLinks",["appIdentity",function(a){"use strict";function b(a){a.activated&&(a.activated=new Date(a.activated).toLocaleDateString(),g[a.activated]=!0)}function c(){var a=[];for(var b in g)g.hasOwnProperty(b)&&a.push(b);return a.reverse()}function d(a){a.removed=!1,h.indexOf(a.url)>-1&&(a.removed=!0)}function e(a){a.saved=!1,i.indexOf(a.url)>-1&&(a.saved=!0)}function f(a){b(a),e(a),d(a)}var g={},h=[],i=[];return{process:function(b,d){a.isAuthenticated()&&(a.currentUser.readlater.forEach(function(a){i.push(a.url)}),a.currentUser.activities.forEach(function(a){a.topic===b.searchText&&(h=a.removed)})),d.forEach(f),b.dates=c(),b.links=d},saveLink:function(b,c){var d={url:b.url,title:b.title,topic:c,activated:Date.now()};a.currentUser.saveLink(d),b.saved=!0},removeLink:function(b,c){a.currentUser.removeLink(b.url,c),b.removed=!0}}}]),angular.module("app").controller("appHomeCtrl",["$scope","$location","$document","appIdentity","appHeader","appIsMobile",function(a,b,c,d,e,f){"use strict";if(a.identity=d,a.search=function(){a.searchText&&b.path("/"+a.searchText.trim())},d.isAuthenticated()&&(d.currentUser.email.match(/^[\S]+@[\S]+\.[\S]+$/)?e.toggle():b.path("account/settings")),!f.any()){var g=c[0].getElementById("focus");g.focus()}}]),angular.module("app").controller("appPagesCtrl",["$scope","appFeedback","appIdentity",function(a,b,c){"use strict";a.identity=c,a.toggleFeedback=function(){b.toggle()}}]),angular.module("app").controller("appReadlaterCtrl",["$scope","appFeedback","appHeader","appIdentity",function(a,b,c,d){"use strict";a.readlater=d.currentUser.readlater||[],a.empty=function(){return 0===a.readlater.length},a.toggleFeedback=function(){b.toggle()},a.toggleHeader=function(){c.toggle()},a.removeLink=function(a){d.currentUser.removeSavedLink(a)},a.$on("readlaterChanged",function(){a.readlater=d.currentUser.readlater})}]);