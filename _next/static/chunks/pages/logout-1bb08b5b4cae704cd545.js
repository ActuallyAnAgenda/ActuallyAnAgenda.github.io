(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[765],{8045:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});t(7294);var r=t(3817),s=t(6427),a=t(5234),i=t(5893);function c(){var e=(0,r.ZP)();return e.loading!==r._H?null:(0,i.jsxs)("div",{className:"fullscreen",children:[(0,i.jsx)("title",{children:"Logout"}),(0,i.jsx)(a.ZP,{authInfo:e}),(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)(s.Dx,{name:"Logout"}),(0,i.jsx)(s.iz,{}),(0,i.jsx)("p",{children:"Logging Out!"})]})]})}},5234:function(e,n,t){"use strict";t.d(n,{ZP:function(){return i}});var r=t(2593),s=(t(7294),t(5893));function a(){return(0,s.jsx)("div",{className:"divider-vertical"})}var i=function(e){return null==e.authInfo.authUser?(0,s.jsxs)("div",{className:"header",children:[(0,s.jsx)("a",{className:"item",href:"/",children:"Home"}),(0,s.jsx)(a,{}),(0,s.jsx)("a",{className:"item right",href:"/login",children:"Login"}),(0,s.jsx)("p",{className:"item",children:"or"}),(0,s.jsx)("a",{className:"item",href:"/signup",children:"Sign Up"})]}):(0,s.jsxs)("div",{className:"header",children:[(0,s.jsx)("a",{className:"item",href:"/",style:{padding:0},children:(0,s.jsx)("img",{src:"/images/logo.png"})}),(0,s.jsx)(a,{}),(0,s.jsx)("a",{className:"item",href:"/create",children:"Create A Task"}),(0,s.jsx)(a,{}),(0,s.jsxs)("div",{className:"profile right",children:[(0,s.jsx)("a",{className:"item",href:"/user",children:"My Tasks"}),(0,s.jsx)("a",{className:"dropdown-item",href:"/logout",onClick:function(e){r.I8.signOut();return!0},children:"Log Out"})]})]})}},6427:function(e,n,t){"use strict";t.d(n,{qO:function(){return s},Dx:function(){return a},iz:function(){return i},jj:function(){return c}});t(7294),t(2593);var r=t(5893);function s(e){var n=e.buttons.map((function(e){var n=e.name,t=e.description,s=e.href;return(0,r.jsxs)("a",{className:"button",href:s,children:[(0,r.jsx)("span",{className:"event-name",children:n}),(0,r.jsx)("span",{className:"description",children:t})]},n)}));return(0,r.jsx)("div",{className:"main-task-menu",children:n})}function a(e){return(0,r.jsx)("h1",{className:"title",children:e.name})}function i(){return(0,r.jsx)("hr",{className:"divider"})}function c(e){return(0,r.jsx)("div",{className:"error",children:e.error})}},3817:function(e,n,t){"use strict";t.d(n,{_H:function(){return f},ZP:function(){return d}});var r=t(2809),s=t(266),a=t(809),i=t.n(a),c=t(7294),u=t(2593);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=!1;function d(){var e=(0,c.useState)(null),n=e[0],t=e[1],r=(0,c.useState)(true),a=r[0],o=r[1],d=(0,c.useState)(null),h=d[0],p=d[1];return(0,c.useEffect)((function(){var e=u.I8.onAuthStateChanged((function(n){(function(){var e=(0,s.Z)(i().mark((function e(n){var r,s,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=4;break}return t(null),o(f),e.abrupt("return");case 4:return e.next=6,u.db.collection("users").doc(n.uid).get();case 6:return r=e.sent.data(),e.next=9,u.db.collection("users").doc(n.uid).collection("projects");case 9:return s=e.sent,e.next=12,s.get().then((function(e){var n={};e.forEach((function(e){n[e.id]=l({},e.data())})),r.projects=n}));case 12:return e.next=14,u.db.collection("users").doc(n.uid).collection("events");case 14:return a=e.sent,e.next=17,a.get().then((function(e){var n={};e.forEach((function(e){n[e.id]=l({},e.data())})),r.events=n}));case 17:t(n),p(r),o(f);case 20:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}})()(n).then((function(){return e()}))}))}),[]),{authUser:n,loading:a,userData:h}}},2593:function(e,n,t){"use strict";t.d(n,{db:function(){return s},I8:function(){return a}});var r=t(5503);t(3759),t(6690),t(3935);r.Z.apps.length||r.Z.initializeApp({apiKey:"AIzaSyBm2m4FM61C-VrKC3lRLT_8Cq0GxgblrGg",authDomain:"classified-bfa24.firebaseapp.com",databaseURL:"https://classified-bfa24-default-rtdb.firebaseio.com",projectId:"classified-bfa24",storageBucket:"classified-bfa24.appspot.com",messagingSenderId:"685388058525",appId:"1:685388058525:web:77dafea83b88b620e9a974",measurementId:"G-8C5N4Z77YP"});var s=r.Z.firestore(),a=r.Z.auth()},5852:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/logout",function(){return t(8045)}])}},function(e){e.O(0,[259,834,751,774,888,179],(function(){return n=5852,e(e.s=n);var n}));var n=e.O();_N_E=n}]);