(this.webpackJsonprandom_quote=this.webpackJsonprandom_quote||[]).push([[0],{10:function(t,e,o){"use strict";o.r(e);var n=o(1),r=o.n(n),c=o(3),a=o.n(c),u=o(4),s=o(0),l=r.a.createContext("red");var d=function(t){var e=t.children,o=Object(n.useState)({color:"red",quote:""}),r=Object(u.a)(o,2),c=r[0],a=r[1];return Object(s.jsx)(l.Provider,{value:{state:c,handleChange:function(){console.log("handleChange \xe7al\u0131\u015ft\u0131"),fetch("http://quotes.stormconsultancy.co.uk/random.json").then((function(t){return t.json()})).then((function(t){var e="red"===c.color?"black":"red";a({color:e,quote:t.quote})})),document.body.style.backgroundColor=c.color}},children:e})},i=function(t){var e=Object(n.useContext)(l).state;return Object(s.jsxs)("div",{style:{color:e.color,width:"300px",height:"180px",margin:"0px auto"},children:[Object(s.jsx)("p",{children:'Get a random quote from "http://quotes.stormconsultancy.co.uk/random.json"'}),Object(s.jsx)("p",{children:e.quote})]})},h=function(){var t=Object(n.useContext)(l).handleChange;return Object(s.jsx)("button",{onClick:t,children:"Toggle color!"})};var j=function(){return Object(s.jsx)("div",{style:{width:"300px",height:"300px",margin:"0px auto"},children:Object(s.jsxs)(d,{children:[Object(s.jsx)(i,{}),Object(s.jsx)(h,{})]})})};a.a.render(Object(s.jsx)(j,{}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.1901baf6.chunk.js.map