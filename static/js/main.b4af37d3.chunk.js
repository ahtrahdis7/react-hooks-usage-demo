(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(4),r=n.n(s),j=(n(9),n(10),n(2)),o=n(0);function l(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),n=t[0],i=t[1];return Object(o.jsx)("div",{children:Object(o.jsxs)("button",{onClick:function(){return i(n+1)},children:["Count : ",n]})})}function u(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){console.log("Use Effect is called")}),[n]),Object(o.jsx)("div",{children:Object(o.jsxs)("button",{onClick:function(){return i(n+1)},children:["Count : ",n]})})}var h={happy:"\ud83d\ude01",angry:"\ud83e\udd2c"},d=Object(c.createContext)(h);function a(){var e=Object(c.useState)("\ud83d\ude01"),t=Object(j.a)(e,2),n=t[0],i=t[1];return Object(o.jsxs)(d.Provider,{value:n,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){return i("\ud83e\udd2c")},children:"Angry"}),Object(o.jsx)("button",{onClick:function(){return i("\ud83d\ude01")},children:"Happy"}),Object(o.jsx)("button",{onClick:function(){return i("\ud83d\ude14")},children:"Sad"}),Object(o.jsxs)("p",{children:["I am in ",Object(o.jsx)("i",{children:"Parent"})," Function : ",n]})]}),Object(o.jsx)(b,{}),Object(o.jsx)(O,{})]})}function b(){var e=Object(c.useContext)(d);return Object(o.jsx)("div",{children:Object(o.jsxs)("p",{children:["I am Inside ",Object(o.jsx)("i",{children:"useContext"})," Function : ",e]})})}function O(){return Object(o.jsx)("div",{children:Object(o.jsx)(d.Consumer,{children:function(e){return Object(o.jsxs)("p",{children:[" I am Inside ",Object(o.jsx)("i",{children:"Consumer"})," Function : ",e]})}})})}function x(){var e=Object(c.useRef)(null);return Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"Check the console."}),Object(o.jsx)("button",{ref:e,onClick:function(){return console.log("hello button clicked")},children:"Hello Button"}),Object(o.jsx)("button",{onClick:function(){return e.current.click()},children:"Click Me! When You Click Me, You Indirectly Click 'Hello Button', Isn't that interesting."})]})}function f(e,t){switch(t.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}}function p(){var e=Object(c.useReducer)(f,0),t=Object(j.a)(e,2),n=t[0],i=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:n}),Object(o.jsx)("button",{style:{fontSize:30,width:40},onClick:function(){return i({type:"DECREMENT"})},children:"-"}),Object(o.jsx)("button",{style:{fontSize:30,width:40},onClick:function(){return i({type:"INCREMENT"})},children:"+"})]})}function m(){var e=Object(c.useState)(60),t=Object(j.a)(e,2),n=t[0],i=t[1],s=Object(c.useMemo)((function(){return Math.pow(n,2)}),[n]);return Object(o.jsxs)("div",{children:[Object(o.jsxs)("button",{onClick:function(){return i(n+1)},children:["Count : ",n]}),Object(o.jsxs)("p",{children:["Expensive Count : ",s]})]})}function C(){var e=Object(c.useState)(60),t=Object(j.a)(e,2),n=t[0],i=t[1],s=Object(c.useMemo)((function(){return Math.pow(n,2)}),[n]),r=Object(c.useCallback)((function(){console.log("Show Count is Clicked: ".concat(n))}),[n]);return Object(o.jsxs)("div",{children:[Object(o.jsxs)("button",{onClick:function(){return i(n+1)},children:["Count : ",n]}),Object(o.jsxs)("p",{children:["Expensive Count : ",s]}),Object(o.jsx)(v,{handler:r})]})}function v(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:e.handler,children:"I am inside Child One"}),Object(o.jsx)(k,{handler:e.handler})]})}function k(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:e.handler,children:"I am inside Child Three"}),Object(o.jsx)(y,{handler:e.handler})]})}function y(e){return Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:e.handler,children:"I am inside Child Two"})})}var g=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{children:["React Hooks ",Object(o.jsx)("span",{style:{fontSize:50},children:"|"})," ",Object(o.jsx)("sub",{style:{fontSize:20},children:"Written/Compiled by Sidhartha Mallick"})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"hook",children:[Object(o.jsx)("h3",{children:"useState"}),Object(o.jsxs)("p",{children:["Every time you update the state using the second button, The component will call the ",Object(o.jsx)("strong",{children:Object(o.jsx)("i",{children:"useState()"})}),", and update the ",Object(o.jsx)("i",{children:"count"})," variable with the new value."]}),Object(o.jsx)(l,{})]}),Object(o.jsxs)("div",{className:"hook",children:[Object(o.jsx)("h3",{children:"useEffect"}),Object(o.jsxs)("p",{children:["Every time you update the state using the second button, The component will call the ",Object(o.jsx)("strong",{children:Object(o.jsx)("i",{children:"useEffect()"})}),", and execute everything that's inside them."]}),Object(o.jsx)("p",{children:"See the output in the Console."}),Object(o.jsx)(u,{})]}),Object(o.jsxs)("div",{className:"hook",children:[Object(o.jsx)("h3",{children:"useContext"}),Object(o.jsxs)("p",{children:["When you click on any button to change the state of the ",Object(o.jsx)("i",{children:"Parent Component"}),", It will automatically update the value in the clild functions without actually passing the value in props, through ",Object(o.jsx)("i",{children:"useContext() and createContext()"}),"."]}),Object(o.jsx)(a,{})]}),Object(o.jsxs)("div",{className:"hook",children:[Object(o.jsx)("h3",{children:"useRef"}),Object(o.jsx)("p",{children:"It's a way to create a reference to a value in the component, and use it in the component's lifecycle."}),Object(o.jsxs)("p",{children:["It is ",Object(o.jsx)("i",{children:"Mutable"}),", but, it doesn't re-render UI. It is mainly used to grab DOM Elements."]}),Object(o.jsxs)("p",{children:["More common usecase of ",Object(o.jsx)("i",{children:"useRef"})," is to grab native HTML elements from JSX."]}),Object(o.jsx)(x,{})]}),Object(o.jsxs)("div",{className:"hook",children:[Object(o.jsx)("h3",{children:"useReducer"}),Object(o.jsxs)("p",{children:["Redux type of functionality, to ",Object(o.jsx)("strong",{children:Object(o.jsx)("i",{children:"useReducer"})}),"  to update state in Functional Components in React."]}),Object(o.jsx)(p,{})]}),Object(o.jsxs)("div",{className:"hook",children:[Object(o.jsx)("h3",{children:"useMemo"}),Object(o.jsx)("p",{children:"useMemo is a higher-order component that takes a function as an argument and returns a memoized version of that function."}),Object(o.jsx)(m,{})]}),Object(o.jsxs)("div",{className:"hook",children:[Object(o.jsx)("h3",{children:"useCallback"}),Object(o.jsxs)("p",{children:["In order to ",Object(o.jsx)("i",{children:"Memoize"})," a whole function, ",Object(o.jsx)("i",{children:"useCallback"})," is used."]}),Object(o.jsxs)("p",{children:["The ",Object(o.jsx)("i",{children:"showCount"})," function is called from multiple childs in the same DOM Tree, they will help prevent ",Object(o.jsx)("i",{children:"un-necessary"})," re-renders of the same object as they will be using the same function object."]}),Object(o.jsx)(C,{})]}),Object(o.jsxs)("div",{className:"hook",children:[Object(o.jsx)("h3",{children:"useLayoutEffect"}),Object(o.jsxs)("p",{children:["It is similar to ",Object(o.jsx)("i",{children:"useEffect"})," with a small difference.  ",Object(o.jsx)("br",{}),"It runs after ",Object(o.jsx)("i",{children:"render"})," but before it it is visually updated. ",Object(o.jsx)("br",{}),"It blocks visual updates until the Callback exection is finished."]})]})]})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),I()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.b4af37d3.chunk.js.map