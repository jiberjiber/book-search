(this["webpackJsonptest-react"]=this["webpackJsonptest-react"]||[]).push([[0],{58:function(e,t,a){e.exports=a(91)},91:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(19),o=a.n(c),r=a(17),i=a(5),m=a(20),u=a(24),s=a.n(u),E=function(e){return s.a.get("/api/search/".concat(e))},h=function(e){return s.a.get("/api")},f=function(e){return s.a.delete("/api/".concat(e))},d=function(e){return s.a.post("/api",e)},v=a(98),g=a(99),b=a(93),k=a(94),p=a(100),S=a(95);var j=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){h().then((function(e){c(e.data)})).catch((function(e){console.log(e)}))}),[a]),l.a.createElement("div",null,l.a.createElement(v.a,{bg:"dark",variant:"dark",sticky:"top"},l.a.createElement(v.a.Brand,{href:"/"},"Google Book Search"),l.a.createElement(g.a,{className:"mr-auto"},l.a.createElement(g.a.Link,{href:"/"},"Home"))),l.a.createElement(b.a,null,l.a.createElement("br",null),l.a.createElement("div",{className:"text-center"},a.length?l.a.createElement(k.a,null,a.map((function(e){return l.a.createElement(p.a,{style:{width:"10%"},key:e._id},l.a.createElement(p.a.Img,{src:e.image,alt:e.title,style:{height:"18rem"}}),l.a.createElement(S.a,{onClick:function(){return t=e._id,console.log(t),void f(t).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));var t}},"Remove"),l.a.createElement(p.a.Title,null,e.title),l.a.createElement(p.a.Subtitle,null,e.author),l.a.createElement(p.a.Text,null,e.description),l.a.createElement(r.b,{to:"/books/".concat(e.id)}))}))):l.a.createElement("div",null,l.a.createElement("h1",null,"No Saved Books!"),l.a.createElement("h3",null,"Head back to the homepage to search for some")))))},I=a(29),O=a(38),y=a(97),B=a(56),x=a(96);var L=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)({}),i=Object(m.a)(o,2),u=(i[0],i[1]),s=Object(n.useState)({}),h=Object(m.a)(s,2),f=h[0],k=h[1];return console.log(a),l.a.createElement("div",null,l.a.createElement(v.a,{bg:"dark",variant:"dark",sticky:"top"},l.a.createElement(v.a.Brand,{href:"/"},"Google Book Search"),l.a.createElement(g.a,{className:"mr-auto"},l.a.createElement(g.a.Link,{href:"/saved"},"Saved")),l.a.createElement(y.a,{inline:!0},l.a.createElement(B.a,{onChange:function(e){var t=e.target,a=t.name,n=t.value;k(Object(O.a)(Object(O.a)({},f),{},Object(I.a)({},a,n)))},type:"text",placeholder:"Book Title",name:"search",className:"mr-sm-2"}),l.a.createElement(S.a,{onClick:function(e){e.preventDefault(),E(f.search).then((function(e){c(e.data.items)})).catch((function(e){console.log(e)})),console.log(a)},variant:"outline-info"},"Search"))),l.a.createElement(b.a,null,l.a.createElement("br",null),l.a.createElement("div",{className:"text-center"},a.length?l.a.createElement("div",null,l.a.createElement("h1",null,"Results"),l.a.createElement(x.a,null,a.map((function(e){return l.a.createElement(p.a,{key:e.id},l.a.createElement(p.a.Title,null,e.volumeInfo.title),l.a.createElement(p.a.Subtitle,null,"By: ",e.volumeInfo.authors[0]),e.volumeInfo.imageLinks?l.a.createElement(p.a.Img,{src:e.volumeInfo.imageLinks.thumbnail,alt:e.volumeInfo.title}):l.a.createElement(p.a.Img,{src:"",alt:e.volumeInfo.title}),l.a.createElement(S.a,{onClick:function(){return function(e){var t={title:e.title,author:e.authors[0],description:e.description,image:e.imageLinks.smallThumbnail,link:e.infoLink};d(t).then((function(e){u(e.data),e.data})).catch((function(e){console.log(e)}))}(e.volumeInfo)}},"Save"),l.a.createElement(p.a.Text,null,e.volumeInfo.description),l.a.createElement(r.b,{to:"/books/".concat(e.id)}))})))):l.a.createElement(b.a,null,l.a.createElement("h1",null,"Welcome to Google Book Search"),l.a.createElement("h3",null,"Use the bar in the top right to find some books!")))))};var N=function(){return l.a.createElement(r.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:L}),l.a.createElement(i.a,{exact:!0,path:"/saved",component:j})))};a(87);a(88).config(),o.a.render(l.a.createElement(N,null),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.27a7d54c.chunk.js.map