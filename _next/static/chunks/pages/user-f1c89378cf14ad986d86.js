(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{6002:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var r=n(3817),i=n(6427),s=n(1061),o=n(7294),c=n(8216),a=n(5997),u=n(4695),l=n(3444),f=n(268),p=n(2953),d=(n(6129),n(5893));function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,p.Z)(t);if(e){var i=(0,p.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,f.Z)(this,n)}}var m=function(t){(0,l.Z)(n,t);var e=h(n);function n(t){var r;return(0,c.Z)(this,n),(r=e.call(this,t)).state={expanded:!1},r.onClick=r.onClick.bind((0,u.Z)(r)),r}return(0,a.Z)(n,[{key:"onClick",value:function(t){t.preventDefault(),this.setState({expanded:!this.state.expanded})}},{key:"render",value:function(){var t=this,e=""!==this.props.description?(0,d.jsx)("span",{className:"description",children:this.props.description}):(0,d.jsx)(d.Fragment,{}),n=(0,d.jsx)("span",{className:"description",children:this.props.timeline}),r=(0,d.jsx)("button",{className:"button",onClick:function(e){window.location=t.props.path+t.props.id},children:"Edit"}),i=this.state.expanded?(0,d.jsxs)("div",{className:"button dropdown-item",children:[e,n,r]}):(0,d.jsx)(d.Fragment,{});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:"button",onClick:this.onClick,children:(0,d.jsx)("span",{className:"event-name",children:this.props.name})}),i]})}}]),n}(o.Component),v=(n(7636),n(266)),j=n(809),b=n.n(j);function y(){return(y=(0,v.Z)(b().mark((function t(e,n,r){return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(){var t=(0,r.ZP)(),e=(0,o.useState)(null),n=e[0];e[1];if(t.loading!==r._H)return null;if(null==t.authUser)return window.location.href="/login",null;var c=(0,d.jsx)(d.Fragment,{});null!=n&&(c=(0,d.jsx)(i.jj,{error:n}));var a=t.userData.projects,u=Object.keys(a).length>0?(0,d.jsx)("div",{className:"main-task-menu vertical-menu",children:Object.keys(a).map((function(t,e){var n=t,r=a[t].name,i=a[t].description,s=new Date(a[t].due).toString(),o=a[t].minutes;return(0,d.jsx)(m,{id:n,name:r,description:i,path:"/create/project/",timeline:"Due Date: ".concat(s,", Minutes Required: ").concat(o)},n)}))}):(0,d.jsx)("p",{children:"You have no projects added!"}),l=t.userData.events,f=Object.keys(l).length>0?(0,d.jsx)("div",{className:"main-task-menu vertical-menu",children:Object.keys(l).map((function(t,e){var n=t,r=l[t].name,i=l[t].description,s=new Date(l[t].start).toString(),o=new Date(l[t].end).toString();return(0,d.jsx)(m,{id:n,name:r,description:i,path:"/create/event/",timeline:"Starts at: ".concat(s,", Ends at ").concat(o)},n)}))}):(0,d.jsx)("p",{children:"You have no events added!"}),p=Object.keys(a).length>0||Object.keys(l).length>0?(0,d.jsx)("button",{onClick:function(e){e.preventDefault(),function(t,e,n){return y.apply(this,arguments)}(t.authUser.uid,t.userData.projects,t.userData.events).then((function(){window.location.replace("/")}))},className:"button",children:"Generate Schedule!"}):(0,d.jsx)(d.Fragment,{});return(0,d.jsxs)("div",{className:"fullscreen",children:[(0,d.jsx)("title",{children:"Home"}),(0,d.jsx)(s.ZP,{authInfo:t}),(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)(i.Dx,{name:"".concat(t.userData.username,"'s Projects")}),(0,d.jsx)(i.iz,{}),u,(0,d.jsx)(i.Dx,{name:"".concat(t.userData.username,"'s Events")}),(0,d.jsx)(i.iz,{}),f,p,c]})]})}},6129:function(t,e,n){"use strict";var r=n(2809),i=n(8216),s=n(5997),o=n(4695),c=n(3444),a=n(268),u=n(2953),l=n(7294),f=n(2593),p=n(5893);function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,u.Z)(t);if(e){var i=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,a.Z)(this,n)}}var h=function(t){(0,c.Z)(n,t);var e=d(n);function n(t){var r;return(0,i.Z)(this,n),(r=e.call(this,t)).state={name:"",description:"",minutes:"",due:"",inputType:"text",submitted:!1,message:""},r.onSubmit=r.onSubmit.bind((0,o.Z)(r)),r.onFocus=r.onFocus.bind((0,o.Z)(r)),r.onBlur=r.onBlur.bind((0,o.Z)(r)),r}return(0,s.Z)(n,[{key:"onSubmit",value:function(t){var e=this;if(t.preventDefault(),!this.state.submitted){this.setState({submitted:!0});var n,r=this.props.authInfo.authUser.uid,i=f.db.collection("users").doc(r).collection("projects");(n={name:this.state.name,description:this.state.description,minutes:this.state.minutes,due:this.state.due},null!=e.props.prevState?i.doc(e.props.prevState.docID).set(n):i.add(n)).then((function(){console.log("Document successfully written!"),window.location.replace("/user")})).catch((function(t){console.error("Error writing document: ",t),e.setState({submitted:!1})}))}}},{key:"onFocus",value:function(t){this.setState({inputType:"datetime-local"})}},{key:"onBlur",value:function(t){""===t.target.value&&!t.target.validity.badInput&&this.setState({inputType:"text"})}},{key:"render",value:function(){var t=this;return(0,p.jsxs)("form",{className:"form",onSubmit:this.onSubmit,children:[(0,p.jsx)("input",{id:"name",required:!0,className:"top-input-offset",type:"text",onChange:function(e){return t.setState({name:e.target.value})},placeholder:"Project Name"}),(0,p.jsx)("input",{id:"description",type:"text",onChange:function(e){return t.setState({description:e.target.value})},placeholder:"Description (Optional)"}),(0,p.jsx)("input",{id:"minutes",required:!0,min:0,type:"number",onChange:function(e){return t.setState({minutes:e.target.value})},placeholder:"Minutes Required"}),(0,p.jsx)("input",{id:"due",required:!0,type:this.state.inputType,onFocus:this.onFocus,onBlur:this.onBlur,onChange:function(e){return t.setState({due:e.target.value})},placeholder:"Due Date"}),(0,p.jsx)("input",{type:"submit",className:"submit",value:this.state.message})]})}},{key:"componentDidMount",value:function(){if(null!=this.props.prevState){for(var t in this.setState({message:"Update Project!"}),this.props.prevState.value){var e=this.props.prevState.value[t];document.getElementById(t).value=e,this.setState((0,r.Z)({},t,e))}this.setState({inputType:"datetime-local"})}else this.setState({message:"Create Project!"})}}]),n}(l.Component);e.Z=h},1061:function(t,e,n){"use strict";var r=n(2593),i=(n(5675),n(7294),n(5893));function s(){return(0,i.jsx)("div",{className:"divider-vertical"})}e.ZP=function(t){return null==t.authInfo.authUser?(0,i.jsxs)("div",{className:"header",children:[(0,i.jsx)("a",{className:"item",href:"/",children:"Home"}),(0,i.jsx)(s,{}),(0,i.jsx)("a",{className:"item right",href:"/login",children:"Login"}),(0,i.jsx)("p",{className:"item",children:"or"}),(0,i.jsx)("a",{className:"item",href:"/signup",children:"Sign Up"})]}):(0,i.jsxs)("div",{className:"header",children:[(0,i.jsx)("a",{className:"item",href:"/",children:"Home"}),(0,i.jsx)(s,{}),(0,i.jsx)("a",{className:"item",href:"/create",children:"Create A Task"}),(0,i.jsx)(s,{}),(0,i.jsxs)("div",{className:"profile right",children:[(0,i.jsx)("a",{className:"item",href:"/user",children:"My Tasks"}),(0,i.jsx)("a",{className:"dropdown-item",href:"/logout",onClick:function(t){r.I8.signOut();return!0},children:"Log Out"})]})]})}},6427:function(t,e,n){"use strict";n.d(e,{qO:function(){return i},Dx:function(){return s},iz:function(){return o},jj:function(){return c}});n(7294),n(2593);var r=n(5893);function i(t){var e=t.buttons.map((function(t){var e=t.name,n=t.description,i=t.href;return(0,r.jsxs)("a",{className:"button",href:i,children:[(0,r.jsx)("span",{className:"event-name",children:e}),(0,r.jsx)("span",{className:"description",children:n})]},e)}));return(0,r.jsx)("div",{className:"main-task-menu",children:e})}function s(t){return(0,r.jsx)("h1",{className:"title",children:t.name})}function o(){return(0,r.jsx)("hr",{className:"divider"})}function c(t){return(0,r.jsx)("div",{className:"error",children:t.error})}},3817:function(t,e,n){"use strict";n.d(e,{_H:function(){return f},ZP:function(){return p}});var r=n(2809),i=n(266),s=n(809),o=n.n(s),c=n(7294),a=n(2593);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f=!1;function p(){var t=(0,c.useState)(null),e=t[0],n=t[1],r=(0,c.useState)(true),s=r[0],u=r[1],p=(0,c.useState)(null),d=p[0],h=p[1];return(0,c.useEffect)((function(){var t=a.I8.onAuthStateChanged((function(e){(function(){var t=(0,i.Z)(o().mark((function t(e){var r,i,s;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=4;break}return n(null),u(f),t.abrupt("return");case 4:return t.next=6,a.db.collection("users").doc(e.uid).get();case 6:return r=t.sent.data(),t.next=9,a.db.collection("users").doc(e.uid).collection("projects");case 9:return i=t.sent,t.next=12,i.get().then((function(t){var e={};t.forEach((function(t){e[t.id]=l({},t.data())})),r.projects=e}));case 12:return t.next=14,a.db.collection("users").doc(e.uid).collection("events");case 14:return s=t.sent,t.next=17,s.get().then((function(t){var e={};t.forEach((function(t){e[t.id]=l({},t.data())})),r.events=e}));case 17:n(e),h(r),u(f);case 20:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}})()(e).then((function(){return t()}))}))}),[]),{authUser:e,loading:s,userData:d}}},2593:function(t,e,n){"use strict";n.d(e,{db:function(){return i},I8:function(){return s}});var r=n(5503);n(3759),n(6690),n(3935);r.Z.apps.length||r.Z.initializeApp({apiKey:"AIzaSyBm2m4FM61C-VrKC3lRLT_8Cq0GxgblrGg",authDomain:"classified-bfa24.firebaseapp.com",databaseURL:"https://classified-bfa24-default-rtdb.firebaseio.com",projectId:"classified-bfa24",storageBucket:"classified-bfa24.appspot.com",messagingSenderId:"685388058525",appId:"1:685388058525:web:77dafea83b88b620e9a974",measurementId:"G-8C5N4Z77YP"});var i=r.Z.firestore(),s=r.Z.auth()},7636:function(t,e,n){"use strict";n.d(e,{aK:function(){return c},th:function(){return a},Bt:function(){return l}});var r=n(266),i=n(809),s=n.n(i),o=n(2593);function c(t,e){return{docID:t,value:e}}function a(t,e){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(s().mark((function t(e,n){var r,i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.db.collection("users").doc(e),i=r.collection("projects"),t.next=4,i.doc(n).delete();case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t,e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(s().mark((function t(e,n){var r,i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.db.collection("users").doc(e),i=r.collection("events"),t.next=4,i.doc(n).delete();case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},7505:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user",function(){return n(6002)}])},4695:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,{Z:function(){return r}})},8216:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return r}})},5997:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,{Z:function(){return i}})},2953:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,{Z:function(){return r}})},3444:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,{Z:function(){return i}})},268:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,{Z:function(){return s}});var i=n(4695);function s(t,e){if(e&&("object"===r(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(t)}}},function(t){t.O(0,[259,834,335,774,888,179],(function(){return e=7505,t(t.s=e);var e}));var e=t.O();_N_E=e}]);