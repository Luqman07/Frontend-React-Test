(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{40:function(e,c,t){},41:function(e,c,t){"use strict";t.r(c);var s,n,i,a=t(1),l=t.n(a),j=t(24),r=t.n(j),d=t(9),b=t(12),o=t(8),h=t(14),x=t(0),O=function(e){var c=e.isCheckOne,t=e.isCheckTwo,s=e.isCheckThree;return Object(x.jsxs)("nav",{children:[Object(x.jsx)("div",{className:"logout",children:Object(x.jsx)("button",{children:"Logout"})}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsxs)(d.b,{className:"navlink",activeClassName:"selected",to:"/Frontend-React-Test",exact:!0,children:[Object(x.jsx)("button",{children:c?Object(x.jsx)("span",{style:{color:"green"},children:"\u2713"}):"1"}),Object(x.jsx)("span",{className:"text",children:"Verify Account"})]})}),Object(x.jsx)("li",{children:Object(x.jsxs)(d.b,{className:"navlink",activeClassName:"selected",to:"/social",children:[Object(x.jsx)("button",{children:t?Object(x.jsx)("span",{style:{color:"green"},children:"\u2713"}):"2"}),Object(x.jsx)("span",{className:"text",children:"Social Handles"})]})}),Object(x.jsx)("li",{children:Object(x.jsxs)(d.b,{className:"navlink",activeClassName:"selected",to:"/business",children:[Object(x.jsx)("button",{children:s?Object(x.jsx)("span",{style:{color:"green"},children:"\u2713"}):"3"}),Object(x.jsx)("span",{className:"text",children:"Business Category"})]})})]})]})},m=t(3),u=t(21),p=t(17),v=function(e){var c=e.setIsCheckOne,t=Object(a.useState)(!0),s=Object(o.a)(t,2),n=s[0],i=s[1],l=Object(a.useState)(!1),j=Object(o.a)(l,2),r=j[0],d=j[1],b=Object(m.f)();return Object(x.jsxs)("div",{className:"verify",children:[Object(x.jsx)("p",{className:"step",children:"Step 1/3"}),Object(x.jsx)("h1",{children:"Verify Account"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"select-method",children:"Select a verification method"}),Object(x.jsx)("button",{onClick:function(){i(!0)},className:n?"btn-border-blue":"btn",children:"BVN"}),Object(x.jsx)("button",{onClick:function(){i(!1)},className:n?"btn":"btn-border-blue",children:"Personal Account Number"})]}),Object(x.jsx)("div",{className:"bvn-container",children:n?Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"",children:"Bank Verification Number(11-digits)"}),Object(x.jsx)("div",{className:"input-container",children:Object(x.jsx)("input",{type:"number",name:"BVN"})}),Object(x.jsxs)("div",{className:"display-info",children:[Object(x.jsxs)("div",{className:"display-description",children:[Object(x.jsxs)("div",{className:"lock-container",children:[Object(x.jsx)(u.a,{className:"lock",icon:p.c}),Object(x.jsx)("p",{children:"Why we need your BVN"})]}),Object(x.jsxs)("div",{className:"show-container",onClick:function(){d(!r)},children:[Object(x.jsx)("p",{children:r?"Hide":"Show"}),Object(x.jsx)(u.a,{className:"arrow-down",icon:r?p.b:p.a})]})]}),Object(x.jsxs)("div",{className:r?"bvn-access-info":"d-none",children:[Object(x.jsx)("p",{children:"We only need access to your:"}),Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{style:{color:"green"},children:"\u2713"}),"Full Name"]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{style:{color:"green"},children:"\u2713"}),"Phone Number"]}),Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{style:{color:"green"},children:"\u2713"}),"Date of Birth"]})]}),Object(x.jsx)("div",{className:"bvn-footer",children:Object(x.jsx)("p",{children:"Your BVN does not give us access to your bank accounts or transactions"})})]})]})]}):Object(x.jsxs)("div",{className:"d-flex-con",children:[Object(x.jsxs)("div",{className:"account-number-div",children:[Object(x.jsx)("label",{htmlFor:"",children:"Account Number"}),Object(x.jsx)("div",{className:"input-container",children:Object(x.jsx)("input",{type:"number",name:"Acct-no"})})]}),Object(x.jsxs)("div",{className:"select-bank-div",children:[Object(x.jsx)("label",{htmlFor:"",children:"Select Bank"}),Object(x.jsx)("div",{className:"input-container",children:Object(x.jsxs)("select",{name:"",id:"",children:[Object(x.jsx)("option",{value:""}),Object(x.jsx)("option",{value:"Gtbank",children:"Guaranty Bank"}),Object(x.jsx)("option",{value:"Accessbank",children:"Access Bank"})]})})]})]})}),Object(x.jsx)("div",{className:"continue-btn",children:Object(x.jsx)("button",{onClick:function(){c(!0),b.push("/social")},children:"Continue"})})]})},N=function(e){var c=e.setIsCheckTwo,t=Object(m.f)();return Object(x.jsxs)("div",{className:"social",children:[Object(x.jsx)("p",{className:"step",children:"Step 2/3"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Social Handles"}),Object(x.jsx)("p",{className:"select-method",children:"Enter you business social media handles"})]}),Object(x.jsxs)("form",{children:[Object(x.jsx)("label",{htmlFor:"",children:"Choose your Abeg Tag(required)"}),Object(x.jsx)("div",{className:"input-container",children:Object(x.jsx)("input",{type:"text",name:"Abeg",placeholder:"@"})}),Object(x.jsxs)("div",{className:"d-flex-con2",children:[Object(x.jsxs)("div",{className:"ig-div",children:[Object(x.jsx)("label",{htmlFor:"",children:"Instagram"}),Object(x.jsx)("div",{className:"input-container-flex",children:Object(x.jsx)("input",{type:"text",name:"instagram",placeholder:"@"})})]}),Object(x.jsxs)("div",{className:"twitter-div",children:[Object(x.jsx)("label",{htmlFor:"",children:"Twitter"}),Object(x.jsx)("div",{className:"input-container-flex",children:Object(x.jsx)("input",{type:"text",name:"twitter",placeholder:"@"})})]})]}),Object(x.jsx)("div",{className:"continue-btn",children:Object(x.jsx)("button",{onClick:function(){c(!0),t.push("/business")},children:"Confirm Social Handles"})})]})]})},f=function(e){var c=e.setIsCheckThree,t=Object(a.useState)(!1),s=Object(o.a)(t,2),n=s[0],i=s[1];return Object(x.jsxs)("div",{className:"business",children:[Object(x.jsx)("p",{className:"step",children:"Step 3/3"}),Object(x.jsx)("div",{children:Object(x.jsx)("h1",{children:"Business Category"})}),Object(x.jsxs)("form",{action:"",children:[Object(x.jsxs)("div",{className:"d-flex-con3",children:[Object(x.jsxs)("div",{className:"business-type",children:[Object(x.jsx)("label",{htmlFor:"",children:"Type of your Business"}),Object(x.jsx)("div",{className:"input-container",children:Object(x.jsxs)("select",{name:"",id:"",children:[Object(x.jsx)("option",{value:""}),Object(x.jsx)("option",{value:"Lorem",children:"Lorem"}),Object(x.jsx)("option",{value:"Ipsum",children:"Ipsum"})]})})]}),Object(x.jsxs)("div",{className:"business-category",children:[Object(x.jsx)("label",{htmlFor:"",children:"Business Category"}),Object(x.jsx)("div",{className:"input-container",children:Object(x.jsxs)("select",{name:"",id:"",children:[Object(x.jsx)("option",{value:""}),Object(x.jsx)("option",{value:"Lorem",children:"Lorem"}),Object(x.jsx)("option",{value:"Ipsum",children:"Ipsum"})]})})]})]}),Object(x.jsxs)("div",{className:"button-container",children:[Object(x.jsx)("p",{className:"select-method",children:"Do you use POS machines for your business"}),Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),i(!0)},className:n?"btn-border-blue":"btn",children:"Yes"}),Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),i(!1)},className:n?"btn":"btn-border-blue",children:"No"})]}),Object(x.jsx)("div",{className:"complete-btn",children:Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),c(!0)},children:"Complete"})})]})]})},g="375px",k="425px",y="768px",C="955px",w="1024px",S="1440px",F="2560px",B={mobileS:"(max-width: ".concat("320px",")"),mobileM:"(max-width: ".concat(g,")"),mobileL:"(max-width: ".concat(k,")"),tablet:"(max-width: ".concat(y,")"),tabletL:"(max-width: ".concat(C,")"),laptop:"(max-width: ".concat(w,")"),laptopL:"(max-width: ".concat(S,")"),desktop:"(max-width: ".concat(F,")"),desktopL:"(max-width: ".concat(F,")")},T=h.a.div(s||(s=Object(b.a)(["\n    width: 70%;\n    height: 100vh;\n    margin-left: 30%;\n    padding: 2rem 3rem;\n    overflow: auto; \n    @media "," {\n        width: 75%;\n        margin-left: 25%;\n        padding: 2rem 2rem\n    }\n    @media "," {\n        width: 100%;\n        padding: 2rem 2rem;\n        margin-left: 0;\n    }\n    @media "," {\n        padding: 2rem 1rem;\n    }\n\n"])),B.tabletL,B.tablet,B.mobileL),L=function(){var e=Object(a.useState)(!1),c=Object(o.a)(e,2),t=c[0],s=c[1],n=Object(a.useState)(!1),i=Object(o.a)(n,2),l=i[0],j=i[1],r=Object(a.useState)(!1),d=Object(o.a)(r,2),b=d[0],h=d[1];return Object(x.jsxs)(T,{children:[Object(x.jsx)(O,{isCheckOne:t,isCheckTwo:l,isCheckThree:b}),Object(x.jsxs)(m.c,{children:[Object(x.jsx)(m.a,{path:"/Frontend-React-Test",exact:!0,children:Object(x.jsx)(v,{setIsCheckOne:s})}),Object(x.jsx)(m.a,{path:"/social",children:Object(x.jsx)(N,{setIsCheckTwo:j})}),Object(x.jsx)(m.a,{path:"/business",children:Object(x.jsx)(f,{setIsCheckThree:h})})]})]})},I=t.p+"static/media/image1.16758808.png",A=h.a.div(n||(n=Object(b.a)(["\n    position: fixed;\n    width: 30%;\n    height: 100vh;\n    left: 0px;\n    top: 0px;\n    background: #F3E8C9;\n    display: flex;\n    align-items: center;\n    @media "," {\n        width: 25%;\n    }\n    @media ","{\n        display: none;\n    }\n    \n\n"])),B.tabletL,B.tablet),V=h.a.img(i||(i=Object(b.a)(["\n    width: 100%\n"]))),D=function(){return Object(x.jsx)(A,{children:Object(x.jsx)("div",{children:Object(x.jsx)(V,{src:I,alt:"logo"})})})},P=(t(40),function(){return Object(x.jsxs)("div",{className:"homepage",children:[Object(x.jsx)(L,{}),Object(x.jsx)(D,{})]})});var H=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(d.a,{children:Object(x.jsx)(P,{})})})},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(c){var t=c.getCLS,s=c.getFID,n=c.getFCP,i=c.getLCP,a=c.getTTFB;t(e),s(e),n(e),i(e),a(e)}))};r.a.render(Object(x.jsx)(l.a.StrictMode,{children:Object(x.jsx)(H,{})}),document.getElementById("root")),E()}},[[41,1,2]]]);
//# sourceMappingURL=main.fdfde9ce.chunk.js.map