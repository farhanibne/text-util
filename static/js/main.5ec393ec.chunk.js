(this.webpackJsonpreact_couse=this.webpackJsonpreact_couse||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(4),r=c.n(n),l=(c(10),c(2)),o=(c.p,c(11),c(5)),i=c.n(o),d=c(0);function b(e){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"#",children:"TEXT UTILS"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"/navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(d.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(d.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),Object(d.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"ENABLE Dark Mode"})]})]})]})})}b.prototype={title:i.a.string};var u=function(e){return e.alert&&Object(d.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(d.jsxs)("strong",{children:[" ",function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)]}),":",e.alert.msg]})};function j(e){var t=Object(a.useState)("Enter Text Here:"),c=Object(l.a)(t,2),s=c[0],n=c[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#212529"},children:[Object(d.jsx)("h1",{children:"ENTER YOUR TEXT HERE "}),Object(d.jsx)("textarea",{className:"form-control",value:s,onChange:function(e){console.log("ON CHANGE"),n(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#212529":"white",color:"dark"===e.mode?"white":"#212529"},id:"myBox ",rows:"8"}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:"btn btn-danger mx-1",onClick:function(){console.log("UperCase was clicked"+s);var t=s.toUpperCase();n(t),e.showalert("uppercase converted successfully","success")},children:"Convert Upercase"}),Object(d.jsx)("button",{className:"btn btn-danger mx-1",onClick:function(){console.log("LowerCase was clicked"+s);var t=s.toLowerCase();n(t),e.showalert("Lowercase converted successfully","success")},children:"Convert Lowercase"}),Object(d.jsx)("button",{className:"btn btn-danger mx-1",onClick:function(){console.log("clear was clicked"+s);n(""),e.showalert("Clear did successfully","success")},children:"Clear Text"}),Object(d.jsx)("button",{className:"btn btn-danger mx-1",onClick:function(){console.log("i am copy");var t=document.getElementById("myBox ");t.select(),navigator.clipboard.writeText(t.value),e.showalert("Copied successfully","success")},children:"Copy Text"}),Object(d.jsx)("button",{className:"btn btn-danger mx-1",onClick:function(){var t=s.split(/[ ]+/);n(t.join(" ")),e.showalert("Removed space successfully","success")},children:"Remove Extra Space"})]}),Object(d.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#212529"},children:[Object(d.jsx)("h1",{children:Object(d.jsx)("b",{children:"Your Text Summary."})}),Object(d.jsxs)("p",{children:["Your Text Has ",s.split(" ").length," Words and  ",s.length," Characters"]}),Object(d.jsxs)("p",{children:["Your Text Needs ",.008*s.split(" ").length," Minutes To Read"]}),Object(d.jsx)("h2",{children:Object(d.jsx)("b",{children:"Text Preview"})}),Object(d.jsx)("p",{children:s})]})]})}var h=function(){var e=Object(a.useState)("light"),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(null),r=Object(l.a)(n,2),o=r[0],i=r[1],h=function(e,t){i({msg:e,type:t}),setTimeout((function(){i(null)}),1e3)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{mode:c,toggleMode:function(){"light"===c?(s("dark"),document.body.style.backgroundColor="#212529",h("  Dark mode has been enabeled","success")):(s("light"),document.body.style.backgroundColor="white",h("  Light mode has been enabeled","success"))}}),Object(d.jsx)(u,{alert:o}),Object(d.jsx)(j,{showalert:h,mode:c})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.5ec393ec.chunk.js.map