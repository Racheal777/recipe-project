(this.webpackJsonplearrning=this.webpackJsonplearrning||[]).push([[0],{102:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),i=c.n(a),s=c(20),r=c.n(s),j=c(34),l=c(35),b=c(45),h=c(44),d=c(64),o=c(7),O=(c(53),c(32)),u=c(27),x=c(26);function p(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(O.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(n.jsx)(O.a.Brand,{href:"/#/",children:Object(n.jsx)("h2",{children:"ChefsCorner"})}),Object(n.jsx)(O.a.Toggle,{}),Object(n.jsxs)(O.a.Collapse,{children:[Object(n.jsxs)(u.a,{className:"mr-auto",children:[Object(n.jsx)(u.a.Link,{href:"/#/",children:"Home"}),Object(n.jsxs)(x.a,{title:"Explore More",id:"collasible-nav-dropdown",children:[Object(n.jsx)(x.a.Item,{href:"/#/About",children:"About"}),Object(n.jsx)(x.a.Item,{href:"/#/Nutrition",children:"Nutrition"}),Object(n.jsx)(x.a.Item,{href:"/#/Contact",children:"Contact"}),Object(n.jsx)(x.a.Divider,{})]})]}),Object(n.jsxs)(u.a,{children:[Object(n.jsx)(u.a.Link,{href:"/#/Login",children:"Login"}),Object(n.jsx)(u.a.Link,{eventKey:2,href:"/#/SignUp",children:"SignUp"})]})]})]})})}var m=c(50),g=c.n(m),f=c(62),v=c(11),S=(c(78),c(43)),k=c.n(S),C=c(107),y=function(e){return e.ingredients.map((function(e){return Object(n.jsxs)("ul",{className:"ingredient-list",children:[Object(n.jsx)("li",{className:"ingredient-text",children:e.text}),Object(n.jsxs)("li",{className:"ingredient-weight",children:["Weight - ",e.weight]})]},Object(C.a)())}))},N=function(e){var t=e.recipe,c=Object(a.useState)(!1),i=Object(v.a)(c,2),s=i[0],r=i[1],j=t.recipe,l=j.label,b=j.image,h=j.url,d=j.ingredients;return Object(n.jsxs)("div",{className:"recipe",children:[Object(n.jsx)("h2",{children:l}),Object(n.jsx)("img",{src:b,alt:l}),Object(n.jsx)("a",{href:h,target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("button",{children:"View Recipe"})}),Object(n.jsx)("button",{onClick:function(){return r(!s)},children:"Ingredients"}),s&&Object(n.jsx)(y,{ingredients:d})]})},w=function(e){var t=e.alert;return Object(n.jsx)("div",{className:"alert",children:Object(n.jsx)("h3",{children:t})})},I=function(){var e=Object(a.useState)(""),t=Object(v.a)(e,2),c=t[0],i=t[1],s=Object(a.useState)([]),r=Object(v.a)(s,2),j=r[0],l=r[1],b=Object(a.useState)(""),h=Object(v.a)(b,2),d=h[0],o=h[1],O="https://api.edamam.com/search?q=".concat(c,"&app_id=").concat("01797b84","&app_key=").concat("7b04083469260c0803c24979c75b69fb"),u=function(){var e=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===c){e.next=12;break}return e.next=3,k.a.get(O);case 3:if((t=e.sent).data.more){e.next=6;break}return e.abrupt("return",o("No food with such name"));case 6:console.log(t),l(t.data.hits),i(""),o(""),e.next=13;break;case 12:o("Please fill the form");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u()},className:"search-form",children:[""!==d&&Object(n.jsx)(w,{alert:d}),Object(n.jsx)("h3",{children:"Find Recipe"}),Object(n.jsx)("input",{type:"text",name:"query",onChange:function(e){return i(e.target.value)},value:c,autoComplete:"off",placeholder:"Search Food"}),Object(n.jsx)("input",{type:"submit",value:"Search"})]})}),Object(n.jsx)("div",{className:"recipes",children:j!==[]&&j.map((function(e){return Object(n.jsx)(N,{recipe:e},Object(C.a)())}))})]})},A=c(15),D=c.p+"static/media/cock.1a26f994.jpg",F=c.p+"static/media/break.7bc06236.jpg",E=c.p+"static/media/cake.95307a33.jpg",L=c.p+"static/media/fish.27cadfce.jpg",R=c.p+"static/media/burger.e883a589.jpg";function T(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(A.a,{children:[Object(n.jsxs)(A.a.Item,{children:[Object(n.jsx)("div",{className:"banner",children:Object(n.jsx)("img",{className:"d-block w-100",src:D,alt:"First slide",style:{height:"500px",width:"50%"}})}),Object(n.jsx)(A.a.Caption,{children:Object(n.jsxs)("p",{children:["COCKTAIL."," "]})})]}),Object(n.jsxs)(A.a.Item,{children:[Object(n.jsx)("div",{className:"banner",children:Object(n.jsx)("img",{className:"d-block w-100",src:E,alt:"Third slide",style:{height:"500px",width:"50%"}})}),Object(n.jsx)(A.a.Caption,{children:Object(n.jsx)("p",{children:"CAKE"})})]}),Object(n.jsxs)(A.a.Item,{children:[Object(n.jsx)("div",{className:"banner",children:Object(n.jsx)("img",{className:"d-block w-100",src:F,alt:"Third slide",style:{height:"500px"}})}),Object(n.jsx)(A.a.Caption,{children:Object(n.jsx)("p",{children:"BREAKFAST"})})]}),Object(n.jsxs)(A.a.Item,{children:[Object(n.jsx)("div",{className:"banner",children:Object(n.jsx)("img",{className:"d-block w-100",src:L,alt:"Third slide",style:{height:"500px",width:"50%"}})}),Object(n.jsx)(A.a.Caption,{children:Object(n.jsx)("p",{children:"SALMON"})})]}),Object(n.jsxs)(A.a.Item,{children:[Object(n.jsx)("div",{className:"banner",children:Object(n.jsx)("img",{className:"d-block w-100",src:R,alt:"Third slide",style:{height:"500px",width:"50%"}})}),Object(n.jsx)(A.a.Caption,{children:Object(n.jsx)("p",{children:"BURGER"})})]})]})})}var U=function(){return Object(n.jsxs)("div",{className:"Home",children:[Object(n.jsx)(T,{}),Object(n.jsx)("div",{children:Object(n.jsx)("h2",{children:"BROWSE RECIPES"})}),Object(n.jsx)(I,{})]})};c(49);var B=function(){var e=Object(a.useState)(""),t=Object(v.a)(e,2),c=t[0],i=t[1],s=Object(a.useState)(),r=Object(v.a)(s,2),j=r[0],l=r[1],b=Object(a.useState)(!1),h=Object(v.a)(b,2),d=h[0],o=h[1];return Object(n.jsx)("div",{children:d?Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(I,{})}):Object(n.jsx)("div",{className:"mainn2",children:Object(n.jsxs)("form",{className:"log-app",children:[Object(n.jsx)("h2",{children:"Register"}),Object(n.jsx)("label",{for:"fname",children:" Name"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",placeholder:"Name"})," ",Object(n.jsx)("span",{}),Object(n.jsx)("label",{for:"email",children:" Email"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",value:c,onChange:function(e){i(e.target.value)},placeholder:" "}),Object(n.jsx)("label",{for:"password",children:" Password"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"password",value:j,onChange:function(e){return function(e){l(e.target.value)}(e)},placeholder:" "}),Object(n.jsx)("button",{onClick:function(e){e.preventDefault(),"kuranchie@gmail.com"===c&&"1234"===j&&o(!0)},children:"SignUp"}),Object(n.jsx)("p",{children:"Already have an Account"}),Object(n.jsx)("a",{href:"/LogIn",children:" Sign In"})]})})})},M=c(63),P=c(29),J=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(j.a)(this,c),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(M.a)({},e.target.name,e.target.value))},n.handleChange=n.handleChange.bind(Object(P.a)(n)),n.handleFormSubmit=n.handleFormSubmit.bind(Object(P.a)(n)),n.state=[{title:"",cooktime:"",ingredients:"",method:""}],n}return Object(l.a)(c,[{key:"handleFormSubmit",value:function(e){e.preventDefault(),localStorage.setItem("document",JSON.stringify(this.state))}},{key:"componentDidMount",value:function(){this.documentData=JSON.parse(localStorage.getItem("document")),localStorage.getItem("document")?this.setState({title:this.documentData.title,cooktime:this.documentData.cooktime,ingredients:this.documentData.ingredients,method:this.documentData.method}):this.setState({title:"",cooktime:"",ingredients:"",method:""})}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"add-app",children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Add Recipe"})}),Object(n.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(n.jsx)("label",{children:"Title"}),Object(n.jsx)("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleChange}),Object(n.jsx)("label",{children:"Cook Time"}),Object(n.jsx)("input",{type:"text",name:"cooktime",value:this.state.cooktime,onChange:this.handleChange}),Object(n.jsx)("label",{children:"Ingredients"}),Object(n.jsx)("input",{type:"text",name:"ingredients",value:this.state.ingredients,onChange:this.handleChange}),Object(n.jsx)("label",{children:"Method"}),Object(n.jsx)("input",{type:"text",name:"method",style:{height:"100px",resize:"vertical"},value:this.state.method,onChange:this.handleChange}),Object(n.jsx)("button",{type:"submit",children:"Submit"})]})]})}}]),c}(a.Component);var K=function(){var e=Object(a.useState)(""),t=Object(v.a)(e,2),c=t[0],i=t[1],s=Object(a.useState)(),r=Object(v.a)(s,2),j=r[0],l=r[1],b=Object(a.useState)(!1),h=Object(v.a)(b,2),d=h[0],o=h[1];return k.a.get("/login"),Object(n.jsx)("div",{children:d?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(I,{}),Object(n.jsx)(J,{})]}):Object(n.jsx)("div",{className:"main",children:Object(n.jsxs)("form",{className:"log-app",children:[Object(n.jsx)("h2",{children:"Login"}),Object(n.jsx)("label",{for:"email",children:"Email"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",value:c,onChange:function(e){i(e.target.value)},placeholder:" "}),Object(n.jsx)("label",{for:"password",children:"Password"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"password",value:j,onChange:function(e){return function(e){l(e.target.value)}(e)},placeholder:" "}),Object(n.jsx)("button",{onClick:function(e){e.preventDefault(),"kuranchie@gmail.com"===c&&"1234"===j&&o(!0)},children:"Sign In"}),Object(n.jsx)("p",{children:"Don't have an Account"}),Object(n.jsx)("a",{href:"/SignUp",children:"Sign Up"})]})})})};var _=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Contact Us"}),Object(n.jsxs)("form",{className:"contact-app",children:[Object(n.jsx)("p",{children:"If you would like to get in touch with us, please fill out your name, email address and message and we will get back to you shortly."}),Object(n.jsx)("input",{type:"text",placeholder:"  Email"})," ",Object(n.jsx)("span",{}),Object(n.jsx)("input",{type:"text",placeholder:" subject"}),Object(n.jsx)("span",{}),Object(n.jsx)("input",{type:"text",placeholder:"mesage",style:{height:"200px",resize:"vertical"}}),Object(n.jsx)("button",{children:"Send message"})]})]})},q=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)(d.a,{basename:"/",children:Object(n.jsxs)("div",{children:[Object(n.jsx)(p,{}),Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{exact:!0,path:"/",component:U}),Object(n.jsx)(o.a,{path:"/LogIn",component:K}),Object(n.jsx)(o.a,{path:"/SignUp",component:B}),Object(n.jsx)(o.a,{path:"/Profile",component:I}),Object(n.jsx)(o.a,{path:"/Contact",component:_})]})]})})}}]),c}(a.Component);r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(q,{})}),document.getElementById("root"))},49:function(e,t,c){},78:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.0f878484.chunk.js.map