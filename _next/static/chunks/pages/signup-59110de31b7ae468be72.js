(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{7356:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return g}});var r=n(7294),o=n(3817),s=n(6427),i=n(5234),u=n(266),c=n(8216),a=n(5997),l=n(4695),f=n(3444),d=n(268),p=n(2953),m=n(809),h=n.n(m),b=n(2593),v=n(5893);function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,p.Z)(t);if(e){var o=(0,p.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,d.Z)(this,n)}}var j=function(t){(0,f.Z)(n,t);var e=y(n);function n(t){var r;return(0,c.Z)(this,n),(r=e.call(this,t)).state={username:"",email:"",password:"",submitted:!1},r.onSubmit=r.onSubmit.bind((0,l.Z)(r)),r.onAnonymousSubmit=r.onAnonymousSubmit.bind((0,l.Z)(r)),r}return(0,a.Z)(n,[{key:"onSubmit",value:function(t){var e=this;t.preventDefault(),this.state.submitted||(this.setState({submitted:!0}),b.I8.createUserWithEmailAndPassword(this.state.email,this.state.password).then((function(t){b.db.collection("users").doc(t.user.uid).set({username:e.state.username,currentMatchID:null}).then((function(){console.log("Document successfully written!"),window.location.replace("/")})).catch((function(t){console.error("Error writing document: ",t),e.setState({submitted:!1})}))})).catch((function(t){e.props.setError(t.message),e.setState({submitted:!1})})))}},{key:"onAnonymousSubmit",value:function(t){var e=this;t.preventDefault(),this.state.submitted||(this.setState({submitted:!0}),b.I8.signInAnonymously().then((function(){var t=b.I8.onAuthStateChanged((function(e){(function(){var t=(0,u.Z)(h().mark((function t(e){var n;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=6;break}return n=b.db.collection("users").doc(e.uid),t.next=4,n.set({username:"Anonymous User"}).then((function(){console.log("Document successfully written!"),window.location.replace("/")})).catch((function(t){console.error("Error writing document: ",t)}));case 4:t.next=7;break;case 6:console.log("should never happen");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}})()(e).then((function(){return t()}))}))})).catch((function(t){e.props.setError(t.message),e.setState({submitted:!1})})))}},{key:"render",value:function(){var t=this;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("form",{className:"form",onSubmit:this.onSubmit,children:[(0,v.jsx)("input",{required:!0,className:"top-input-offset",type:"text",minLength:3,maxLength:30,onChange:function(e){return t.setState({username:e.target.value})},placeholder:"Display Name"}),(0,v.jsx)("input",{required:!0,type:"email",onChange:function(e){return t.setState({email:e.target.value})},placeholder:"Email"}),(0,v.jsx)("input",{required:!0,type:"password",onChange:function(e){return t.setState({password:e.target.value})},placeholder:"Password"}),(0,v.jsx)("input",{type:"submit",className:"submit",value:"Sign Up"})]}),(0,v.jsx)("button",{className:"button",onClick:this.onAnonymousSubmit,children:"Or... Sign Up Anonymously"})]})}}]),n}(r.Component);function g(){var t=(0,o.ZP)(),e=(0,r.useState)(null),n=e[0],u=e[1];if(t.loading!==o._H)return null;if(null!=t.authUser)return window.location.href="/",null;var c=(0,v.jsx)(v.Fragment,{});return null!=n&&(c=(0,v.jsx)(s.jj,{error:n})),(0,v.jsxs)("div",{className:"fullscreen",children:[(0,v.jsx)("title",{children:"Sign Up"}),(0,v.jsx)(i.ZP,{authInfo:t}),(0,v.jsxs)("div",{className:"content",children:[(0,v.jsx)(s.Dx,{name:"Sign Up"}),(0,v.jsx)(s.iz,{}),(0,v.jsx)(j,{setError:u}),c]})]})}},5234:function(t,e,n){"use strict";n.d(e,{ZP:function(){return i}});var r=n(2593),o=(n(7294),n(5893));function s(){return(0,o.jsx)("div",{className:"divider-vertical"})}var i=function(t){return null==t.authInfo.authUser?(0,o.jsxs)("div",{className:"header",children:[(0,o.jsx)("a",{className:"item",href:"/",children:"Home"}),(0,o.jsx)(s,{}),(0,o.jsx)("a",{className:"item right",href:"/login",children:"Login"}),(0,o.jsx)("p",{className:"item",children:"or"}),(0,o.jsx)("a",{className:"item",href:"/signup",children:"Sign Up"})]}):(0,o.jsxs)("div",{className:"header",children:[(0,o.jsx)("a",{className:"item",href:"/",style:{padding:0},children:(0,o.jsx)("img",{src:"/images/logo.png"})}),(0,o.jsx)(s,{}),(0,o.jsx)("a",{className:"item",href:"/create",children:"Create A Task"}),(0,o.jsx)(s,{}),(0,o.jsxs)("div",{className:"profile right",children:[(0,o.jsx)("a",{className:"item",href:"/user",children:"My Tasks"}),(0,o.jsx)("a",{className:"dropdown-item",href:"/logout",onClick:function(t){r.I8.signOut();return!0},children:"Log Out"})]})]})}},6427:function(t,e,n){"use strict";n.d(e,{qO:function(){return o},Dx:function(){return s},iz:function(){return i},jj:function(){return u}});n(7294),n(2593);var r=n(5893);function o(t){var e=t.buttons.map((function(t){var e=t.name,n=t.description,o=t.href;return(0,r.jsxs)("a",{className:"button",href:o,children:[(0,r.jsx)("span",{className:"event-name",children:e}),(0,r.jsx)("span",{className:"description",children:n})]},e)}));return(0,r.jsx)("div",{className:"main-task-menu",children:e})}function s(t){return(0,r.jsx)("h1",{className:"title",children:t.name})}function i(){return(0,r.jsx)("hr",{className:"divider"})}function u(t){return(0,r.jsx)("div",{className:"error",children:t.error})}},3817:function(t,e,n){"use strict";n.d(e,{_H:function(){return f},ZP:function(){return d}});var r=n(2809),o=n(266),s=n(809),i=n.n(s),u=n(7294),c=n(2593);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f=!1;function d(){var t=(0,u.useState)(null),e=t[0],n=t[1],r=(0,u.useState)(true),s=r[0],a=r[1],d=(0,u.useState)(null),p=d[0],m=d[1];return(0,u.useEffect)((function(){var t=c.I8.onAuthStateChanged((function(e){(function(){var t=(0,o.Z)(i().mark((function t(e){var r,o,s;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=4;break}return n(null),a(f),t.abrupt("return");case 4:return t.next=6,c.db.collection("users").doc(e.uid).get();case 6:return r=t.sent.data(),t.next=9,c.db.collection("users").doc(e.uid).collection("projects");case 9:return o=t.sent,t.next=12,o.get().then((function(t){var e={};t.forEach((function(t){e[t.id]=l({},t.data())})),r.projects=e}));case 12:return t.next=14,c.db.collection("users").doc(e.uid).collection("events");case 14:return s=t.sent,t.next=17,s.get().then((function(t){var e={};t.forEach((function(t){e[t.id]=l({},t.data())})),r.events=e}));case 17:n(e),m(r),a(f);case 20:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}})()(e).then((function(){return t()}))}))}),[]),{authUser:e,loading:s,userData:p}}},2593:function(t,e,n){"use strict";n.d(e,{db:function(){return o},I8:function(){return s}});var r=n(5503);n(3759),n(6690),n(3935);r.Z.apps.length||r.Z.initializeApp({apiKey:"AIzaSyBm2m4FM61C-VrKC3lRLT_8Cq0GxgblrGg",authDomain:"classified-bfa24.firebaseapp.com",databaseURL:"https://classified-bfa24-default-rtdb.firebaseio.com",projectId:"classified-bfa24",storageBucket:"classified-bfa24.appspot.com",messagingSenderId:"685388058525",appId:"1:685388058525:web:77dafea83b88b620e9a974",measurementId:"G-8C5N4Z77YP"});var o=r.Z.firestore(),s=r.Z.auth()},8971:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return n(7356)}])},4695:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,{Z:function(){return r}})},8216:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return r}})},5997:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,{Z:function(){return o}})},2953:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,{Z:function(){return r}})},3444:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,{Z:function(){return o}})},268:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,{Z:function(){return s}});var o=n(4695);function s(t,e){if(e&&("object"===r(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(t)}}},function(t){t.O(0,[259,834,751,774,888,179],(function(){return e=8971,t(t.s=e);var e}));var e=t.O();_N_E=e}]);