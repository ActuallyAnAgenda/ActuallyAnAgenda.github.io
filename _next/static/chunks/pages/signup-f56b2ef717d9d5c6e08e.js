(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{7356:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(7294),o=n(3817),s=n(6427),i=n(1061),u=n(266),c=n(8216),a=n(5997),l=n(4695),f=n(3444),d=n(268),p=n(2953),m=n(809),h=n.n(m),b=n(2593),y=n(5893);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,p.Z)(e);if(t){var o=(0,p.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,d.Z)(this,n)}}var j=function(e){(0,f.Z)(n,e);var t=v(n);function n(e){var r;return(0,c.Z)(this,n),(r=t.call(this,e)).state={username:"",email:"",password:"",submitted:!1},r.onSubmit=r.onSubmit.bind((0,l.Z)(r)),r.onAnonymousSubmit=r.onAnonymousSubmit.bind((0,l.Z)(r)),r}return(0,a.Z)(n,[{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),this.state.submitted||(this.setState({submitted:!0}),b.I8.createUserWithEmailAndPassword(this.state.email,this.state.password).then((function(e){b.db.collection("users").doc(e.user.uid).set({username:t.state.username}).then((function(){console.log("Document successfully written!"),window.location.replace("/")})).catch((function(e){console.error("Error writing document: ",e),t.setState({submitted:!1})}))})).catch((function(e){t.props.setError(e.message),t.setState({submitted:!1})})))}},{key:"onAnonymousSubmit",value:function(e){var t=this;e.preventDefault(),this.state.submitted||(this.setState({submitted:!0}),b.I8.signInAnonymously().then((function(){var e=b.I8.onAuthStateChanged((function(t){(function(){var e=(0,u.Z)(h().mark((function e(t){var n;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return n=b.db.collection("users").doc(t.uid),e.next=4,n.set({username:"Anonymous User"}).then((function(){console.log("Document successfully written!"),window.location.replace("/")})).catch((function(e){console.error("Error writing document: ",e)}));case 4:e.next=7;break;case 6:console.log("should never happen");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(t).then((function(){return e()}))}))})).catch((function(e){t.props.setError(e.message),t.setState({submitted:!1})})))}},{key:"render",value:function(){var e=this;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("form",{className:"form",onSubmit:this.onSubmit,children:[(0,y.jsx)("input",{required:!0,className:"top-input-offset",type:"text",minLength:3,maxLength:30,onChange:function(t){return e.setState({username:t.target.value})},placeholder:"Display Name"}),(0,y.jsx)("input",{required:!0,type:"email",onChange:function(t){return e.setState({email:t.target.value})},placeholder:"Email"}),(0,y.jsx)("input",{required:!0,type:"password",onChange:function(t){return e.setState({password:t.target.value})},placeholder:"Password"}),(0,y.jsx)("input",{type:"submit",className:"submit",value:"Sign Up"})]}),(0,y.jsx)("button",{className:"button",onClick:this.onAnonymousSubmit,children:"Or... Sign Up Anonymously"})]})}}]),n}(r.Component);function g(){var e=(0,o.ZP)(),t=(0,r.useState)(null),n=t[0],u=t[1];if(e.loading!==o._H)return null;if(null!=e.authUser)return window.location.href="/",null;var c=(0,y.jsx)(y.Fragment,{});return null!=n&&(c=(0,y.jsx)(s.jj,{error:n})),(0,y.jsxs)("div",{className:"fullscreen",children:[(0,y.jsx)("title",{children:"Sign Up"}),(0,y.jsx)(i.ZP,{authInfo:e}),(0,y.jsxs)("div",{className:"content",children:[(0,y.jsx)(s.Dx,{name:"Sign Up"}),(0,y.jsx)(s.iz,{}),(0,y.jsx)(j,{setError:u}),c]})]})}},1061:function(e,t,n){"use strict";var r=n(2593),o=(n(7294),n(5893));function s(){return(0,o.jsx)("div",{className:"divider-vertical"})}t.ZP=function(e){return null==e.authInfo.authUser?(0,o.jsxs)("div",{className:"header",children:[(0,o.jsx)("a",{className:"item",href:"/",children:"Home"}),(0,o.jsx)(s,{}),(0,o.jsx)("a",{className:"item right",href:"/login",children:"Login"}),(0,o.jsx)("p",{className:"item",children:"or"}),(0,o.jsx)("a",{className:"item",href:"/signup",children:"Sign Up"})]}):(0,o.jsxs)("div",{className:"header",children:[(0,o.jsx)("a",{className:"item",href:"/",style:{padding:0},children:(0,o.jsx)("img",{src:"/images/logo.png"})}),(0,o.jsx)(s,{}),(0,o.jsx)("a",{className:"item",href:"/create",children:"Create A Task"}),(0,o.jsx)(s,{}),(0,o.jsxs)("div",{className:"profile right",children:[(0,o.jsx)("a",{className:"item",href:"/user",children:"My Tasks"}),(0,o.jsx)("a",{className:"dropdown-item",href:"/logout",onClick:function(e){r.I8.signOut();return!0},children:"Log Out"})]})]})}},6427:function(e,t,n){"use strict";n.d(t,{qO:function(){return o},Dx:function(){return s},iz:function(){return i},jj:function(){return u}});n(7294);var r=n(5893);function o(e){var t=e.buttons.map((function(e){var t=e.name,n=e.description,o=e.href;return(0,r.jsxs)("a",{className:"button",href:o,children:[(0,r.jsx)("span",{className:"event-name",children:t}),(0,r.jsx)("span",{className:"description",children:n})]},t)}));return(0,r.jsx)("div",{className:"main-task-menu",children:t})}function s(e){return(0,r.jsx)("h1",{className:"title",children:e.name})}function i(){return(0,r.jsx)("hr",{className:"divider"})}function u(e){return(0,r.jsx)("div",{className:"error",children:e.error})}},3817:function(e,t,n){"use strict";n.d(t,{_H:function(){return f},ZP:function(){return d}});var r=n(2809),o=n(266),s=n(809),i=n.n(s),u=n(7294),c=n(2593);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=!1;function d(){var e=(0,u.useState)(null),t=e[0],n=e[1],r=(0,u.useState)(true),s=r[0],a=r[1],d=(0,u.useState)(null),p=d[0],m=d[1];return(0,u.useEffect)((function(){var e=c.I8.onAuthStateChanged((function(t){(function(){var e=(0,o.Z)(i().mark((function e(t){var r,o,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=4;break}return n(null),a(f),e.abrupt("return");case 4:return e.next=6,c.db.collection("users").doc(t.uid).get();case 6:return r=e.sent.data(),e.next=9,c.db.collection("users").doc(t.uid).collection("projects");case 9:return o=e.sent,e.next=12,o.get().then((function(e){var t={};e.forEach((function(e){t[e.id]=l({},e.data())})),r.projects=t}));case 12:return e.next=14,c.db.collection("users").doc(t.uid).collection("events");case 14:return s=e.sent,e.next=17,s.get().then((function(e){var t={};e.forEach((function(e){t[e.id]=l({},e.data())})),r.events=t}));case 17:n(t),m(r),a(f);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(t).then((function(){return e()}))}))}),[]),{authUser:t,loading:s,userData:p}}},2593:function(e,t,n){"use strict";n.d(t,{db:function(){return o},I8:function(){return s}});var r=n(5503);n(3759),n(6690),n(3935);r.Z.apps.length||r.Z.initializeApp({apiKey:"AIzaSyBm2m4FM61C-VrKC3lRLT_8Cq0GxgblrGg",authDomain:"classified-bfa24.firebaseapp.com",databaseURL:"https://classified-bfa24-default-rtdb.firebaseio.com",projectId:"classified-bfa24",storageBucket:"classified-bfa24.appspot.com",messagingSenderId:"685388058525",appId:"1:685388058525:web:77dafea83b88b620e9a974",measurementId:"G-8C5N4Z77YP"});var o=r.Z.firestore(),s=r.Z.auth()},8971:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return n(7356)}])},4695:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},8216:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},5997:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,{Z:function(){return o}})},2953:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,{Z:function(){return r}})},3444:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,{Z:function(){return o}})},268:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,{Z:function(){return s}});var o=n(4695);function s(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(e)}}},function(e){e.O(0,[972,834,751,774,888,179],(function(){return t=8971,e(e.s=t);var t}));var t=e.O();_N_E=t}]);