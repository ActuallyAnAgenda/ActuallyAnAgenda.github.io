(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{5623:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return j}});var r=n(7294),i=n(3817),o=n(8216),s=n(5997),u=n(4695),c=n(3444),a=n(268),f=n(2953),l=n(2593),d=n(5893);function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,f.Z)(t);if(e){var i=(0,f.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,a.Z)(this,n)}}var h=function(t){(0,c.Z)(n,t);var e=p(n);function n(t){var r;return(0,o.Z)(this,n),(r=e.call(this,t)).state={email:"",password:"",submitted:!1},r.onSubmit=r.onSubmit.bind((0,u.Z)(r)),r}return(0,s.Z)(n,[{key:"onSubmit",value:function(t){var e=this;t.preventDefault(),this.state.submitted||(this.setState({submitted:!0}),l.I8.signInWithEmailAndPassword(this.state.email,this.state.password).then((function(t){window.location.replace("/")})).catch((function(t){e.props.setError(t.message),e.setState({submitted:!1})})))}},{key:"render",value:function(){var t=this;return(0,d.jsxs)("form",{className:"form",onSubmit:this.onSubmit,children:[(0,d.jsx)("input",{required:!0,className:"top-input-offset",type:"email",onChange:function(e){return t.setState({email:e.target.value})},placeholder:"Email"}),(0,d.jsx)("input",{required:!0,type:"password",onChange:function(e){return t.setState({password:e.target.value})},placeholder:"Password"}),(0,d.jsx)("input",{type:"submit",className:"submit",value:"Log In"})]})}}]),n}(r.Component),m=n(6427),b=n(1061);function j(){var t=(0,i.ZP)(),e=(0,r.useState)(null),n=e[0],o=e[1];return t.loading!==i._H?null:null!=t.authUser?(window.location.href="/",null):(0,d.jsxs)("div",{className:"fullscreen",children:[(0,d.jsx)("title",{children:"Login"}),(0,d.jsx)(b.ZP,{authInfo:t}),(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)(m.Dx,{name:"Login"}),(0,d.jsx)(m.iz,{}),(0,d.jsx)(h,{setError:o}),null==n?(0,d.jsx)(d.Fragment,{}):(0,d.jsx)(m.jj,{error:n})]})]})}},1061:function(t,e,n){"use strict";var r=n(2593),i=(n(5675),n(7294),n(5893));function o(){return(0,i.jsx)("div",{className:"divider-vertical"})}e.ZP=function(t){return null==t.authInfo.authUser?(0,i.jsxs)("div",{className:"header",children:[(0,i.jsx)("a",{className:"item",href:"/",children:"Home"}),(0,i.jsx)(o,{}),(0,i.jsx)("a",{className:"item right",href:"/login",children:"Login"}),(0,i.jsx)("p",{className:"item",children:"or"}),(0,i.jsx)("a",{className:"item",href:"/signup",children:"Sign Up"})]}):(0,i.jsxs)("div",{className:"header",children:[(0,i.jsx)("a",{className:"item",href:"/",children:"Home"}),(0,i.jsx)(o,{}),(0,i.jsx)("a",{className:"item",href:"/create",children:"Create A Task"}),(0,i.jsx)(o,{}),(0,i.jsxs)("div",{className:"profile right",children:[(0,i.jsx)("a",{className:"item",href:"/user",children:"My Tasks"}),(0,i.jsx)("a",{className:"dropdown-item",href:"/logout",onClick:function(t){r.I8.signOut();return!0},children:"Log Out"})]})]})}},6427:function(t,e,n){"use strict";n.d(e,{qO:function(){return i},Dx:function(){return o},iz:function(){return s},jj:function(){return u}});n(7294),n(2593);var r=n(5893);function i(t){var e=t.buttons.map((function(t){var e=t.name,n=t.description,i=t.href;return(0,r.jsxs)("a",{className:"button",href:i,children:[(0,r.jsx)("span",{className:"event-name",children:e}),(0,r.jsx)("span",{className:"description",children:n})]},e)}));return(0,r.jsx)("div",{className:"main-task-menu",children:e})}function o(t){return(0,r.jsx)("h1",{className:"title",children:t.name})}function s(){return(0,r.jsx)("hr",{className:"divider"})}function u(t){return(0,r.jsx)("div",{className:"error",children:t.error})}},3817:function(t,e,n){"use strict";n.d(e,{_H:function(){return l},ZP:function(){return d}});var r=n(2809),i=n(266),o=n(809),s=n.n(o),u=n(7294),c=n(2593);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=!1;function d(){var t=(0,u.useState)(null),e=t[0],n=t[1],r=(0,u.useState)(true),o=r[0],a=r[1],d=(0,u.useState)(null),p=d[0],h=d[1];return(0,u.useEffect)((function(){var t=c.I8.onAuthStateChanged((function(e){(function(){var t=(0,i.Z)(s().mark((function t(e){var r,i,o;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=4;break}return n(null),a(l),t.abrupt("return");case 4:return t.next=6,c.db.collection("users").doc(e.uid).get();case 6:return r=t.sent.data(),t.next=9,c.db.collection("users").doc(e.uid).collection("projects");case 9:return i=t.sent,t.next=12,i.get().then((function(t){var e={};t.forEach((function(t){e[t.id]=f({},t.data())})),r.projects=e}));case 12:return t.next=14,c.db.collection("users").doc(e.uid).collection("events");case 14:return o=t.sent,t.next=17,o.get().then((function(t){var e={};t.forEach((function(t){e[t.id]=f({},t.data())})),r.events=e}));case 17:n(e),h(r),a(l);case 20:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}})()(e).then((function(){return t()}))}))}),[]),{authUser:e,loading:o,userData:p}}},2593:function(t,e,n){"use strict";n.d(e,{db:function(){return i},I8:function(){return o}});var r=n(5503);n(3759),n(6690),n(3935);r.Z.apps.length||r.Z.initializeApp({apiKey:"AIzaSyBm2m4FM61C-VrKC3lRLT_8Cq0GxgblrGg",authDomain:"classified-bfa24.firebaseapp.com",databaseURL:"https://classified-bfa24-default-rtdb.firebaseio.com",projectId:"classified-bfa24",storageBucket:"classified-bfa24.appspot.com",messagingSenderId:"685388058525",appId:"1:685388058525:web:77dafea83b88b620e9a974",measurementId:"G-8C5N4Z77YP"});var i=r.Z.firestore(),o=r.Z.auth()},7156:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(5623)}])},4695:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,{Z:function(){return r}})},8216:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return r}})},5997:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,{Z:function(){return i}})},2953:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,{Z:function(){return r}})},3444:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,{Z:function(){return i}})},268:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,{Z:function(){return o}});var i=n(4695);function o(t,e){if(e&&("object"===r(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(t)}}},function(t){t.O(0,[259,834,335,774,888,179],(function(){return e=7156,t(t.s=e);var e}));var e=t.O();_N_E=e}]);