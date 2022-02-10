"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[908],{3225:function(t,e,n){var r=n(2809),i=n(8216),o=n(5997),a=n(4695),s=n(3444),u=n(268),c=n(2953),l=n(7294),f=n(2593),p=n(5893);function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,c.Z)(t);if(e){var i=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)}}var h=function(t){(0,s.Z)(n,t);var e=d(n);function n(t){var r;return(0,i.Z)(this,n),(r=e.call(this,t)).state={name:"",description:"",start:"",end:"",inputType1:"text",inputType2:"text",submitted:!1,message:""},r.onSubmit=r.onSubmit.bind((0,a.Z)(r)),r.onFocus1=r.onFocus1.bind((0,a.Z)(r)),r.onBlur1=r.onBlur1.bind((0,a.Z)(r)),r.onFocus2=r.onFocus2.bind((0,a.Z)(r)),r.onBlur2=r.onBlur2.bind((0,a.Z)(r)),r}return(0,o.Z)(n,[{key:"onSubmit",value:function(t){var e=this;if(t.preventDefault(),!this.state.submitted){this.setState({submitted:!0});var n,r=this.props.authInfo.authUser.uid,i=f.db.collection("users").doc(r).collection("events");(n={name:this.state.name,description:this.state.description,start:new Date(this.state.start).getTime(),end:new Date(this.state.end).getTime()},null!=e.props.prevState?i.doc(e.props.prevState.docID).set(n):i.add(n)).then((function(){console.log("Document successfully written!"),window.location.replace("/user")})).catch((function(t){console.error("Error writing document: ",t),e.setState({submitted:!1}),e.props.setError(t.message)}))}}},{key:"onFocus1",value:function(t){this.setState({inputType1:"datetime-local"})}},{key:"onBlur1",value:function(t){""!==t.target.value||t.target.validity.badInput||this.setState({inputType1:"text"})}},{key:"onFocus2",value:function(t){this.setState({inputType2:"datetime-local"})}},{key:"onBlur2",value:function(t){""!==t.target.value||t.target.validity.badInput||this.setState({inputType2:"text"})}},{key:"render",value:function(){var t=this;return(0,p.jsxs)("form",{className:"form",onSubmit:this.onSubmit,children:[(0,p.jsx)("input",{id:"name",required:!0,className:"top-input-offset",type:"text",onChange:function(e){return t.setState({name:e.target.value})},placeholder:"Event Name"}),(0,p.jsx)("input",{id:"description",type:"text",onChange:function(e){return t.setState({description:e.target.value})},placeholder:"Description (Optional)"}),(0,p.jsx)("input",{id:"start",required:!0,type:this.state.inputType1,onFocus:this.onFocus1,onBlur:this.onBlur1,onChange:function(e){return t.setState({start:e.target.value})},placeholder:"Event Start"}),(0,p.jsx)("input",{id:"end",required:!0,type:this.state.inputType2,onFocus:this.onFocus2,onBlur:this.onBlur2,onChange:function(e){return t.setState({end:e.target.value})},placeholder:"Event End"}),(0,p.jsx)("input",{type:"submit",className:"submit",value:this.state.message})]})}},{key:"componentDidMount",value:function(){if(null!=this.props.prevState){for(var t in this.setState({message:"Update Event!"}),this.props.prevState.value){var e=this.props.prevState.value[t];if("start"===t||"end"===t){var n=new Date(e);e=new Date(n.getTime()-6e4*n.getTimezoneOffset()).toISOString().slice(0,-1)}document.getElementById(t).value=e,this.setState((0,r.Z)({},t,e))}this.setState({inputType1:"datetime-local"}),this.setState({inputType2:"datetime-local"})}else this.setState({message:"Create Event!"})}}]),n}(l.Component);e.Z=h},5234:function(t,e,n){n.d(e,{ZP:function(){return a}});var r=n(2593),i=(n(7294),n(5893));function o(){return(0,i.jsx)("div",{className:"divider-vertical"})}var a=function(t){return null==t.authInfo.authUser?(0,i.jsxs)("div",{className:"header",children:[(0,i.jsx)("a",{className:"item",href:"/",children:"Home"}),(0,i.jsx)(o,{}),(0,i.jsx)("a",{className:"item right",href:"/login",children:"Login"}),(0,i.jsx)("p",{className:"item",children:"or"}),(0,i.jsx)("a",{className:"item",href:"/signup",children:"Sign Up"})]}):(0,i.jsxs)("div",{className:"header",children:[(0,i.jsx)("a",{className:"item",href:"/",style:{padding:0},children:(0,i.jsx)("img",{src:"/images/logo.png"})}),(0,i.jsx)(o,{}),(0,i.jsx)("a",{className:"item",href:"/create",children:"Create A Task"}),(0,i.jsx)(o,{}),(0,i.jsxs)("div",{className:"profile right",children:[(0,i.jsx)("a",{className:"item",href:"/user",children:"My Tasks"}),(0,i.jsx)("a",{className:"dropdown-item",href:"/logout",onClick:function(t){r.I8.signOut();return!0},children:"Log Out"})]})]})}},6427:function(t,e,n){n.d(e,{qO:function(){return i},Dx:function(){return o},iz:function(){return a},jj:function(){return s}});n(7294),n(2593);var r=n(5893);function i(t){var e=t.buttons.map((function(t){var e=t.name,n=t.description,i=t.href;return(0,r.jsxs)("a",{className:"button",href:i,children:[(0,r.jsx)("span",{className:"event-name",children:e}),(0,r.jsx)("span",{className:"description",children:n})]},e)}));return(0,r.jsx)("div",{className:"main-task-menu",children:e})}function o(t){return(0,r.jsx)("h1",{className:"title",children:t.name})}function a(){return(0,r.jsx)("hr",{className:"divider"})}function s(t){return(0,r.jsx)("div",{className:"error",children:t.error})}},3817:function(t,e,n){n.d(e,{_H:function(){return f},ZP:function(){return p}});var r=n(2809),i=n(266),o=n(809),a=n.n(o),s=n(7294),u=n(2593);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f=!1;function p(){var t=(0,s.useState)(null),e=t[0],n=t[1],r=(0,s.useState)(true),o=r[0],c=r[1],p=(0,s.useState)(null),d=p[0],h=p[1];return(0,s.useEffect)((function(){var t=u.I8.onAuthStateChanged((function(e){(function(){var t=(0,i.Z)(a().mark((function t(e){var r,i,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=4;break}return n(null),c(f),t.abrupt("return");case 4:return t.next=6,u.db.collection("users").doc(e.uid).get();case 6:return r=t.sent.data(),t.next=9,u.db.collection("users").doc(e.uid).collection("projects");case 9:return i=t.sent,t.next=12,i.get().then((function(t){var e={};t.forEach((function(t){e[t.id]=l({},t.data())})),r.projects=e}));case 12:return t.next=14,u.db.collection("users").doc(e.uid).collection("events");case 14:return o=t.sent,t.next=17,o.get().then((function(t){var e={};t.forEach((function(t){e[t.id]=l({},t.data())})),r.events=e}));case 17:n(e),h(r),c(f);case 20:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}})()(e).then((function(){return t()}))}))}),[]),{authUser:e,loading:o,userData:d}}},2593:function(t,e,n){n.d(e,{db:function(){return i},I8:function(){return o}});var r=n(5503);n(3759),n(6690),n(3935);r.Z.apps.length||r.Z.initializeApp({apiKey:"AIzaSyBm2m4FM61C-VrKC3lRLT_8Cq0GxgblrGg",authDomain:"classified-bfa24.firebaseapp.com",databaseURL:"https://classified-bfa24-default-rtdb.firebaseio.com",projectId:"classified-bfa24",storageBucket:"classified-bfa24.appspot.com",messagingSenderId:"685388058525",appId:"1:685388058525:web:77dafea83b88b620e9a974",measurementId:"G-8C5N4Z77YP"});var i=r.Z.firestore(),o=r.Z.auth()},4695:function(t,e,n){function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,{Z:function(){return r}})},8216:function(t,e,n){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return r}})},5997:function(t,e,n){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,{Z:function(){return i}})},2953:function(t,e,n){function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,{Z:function(){return r}})},3444:function(t,e,n){function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,{Z:function(){return i}})},268:function(t,e,n){function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,{Z:function(){return o}});var i=n(4695);function o(t,e){if(e&&("object"===r(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(t)}}}]);