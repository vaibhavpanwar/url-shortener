(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/logo.df6d30bd.png"},17:function(e,t,a){e.exports=a.p+"static/media/scisssor.4c399cf1.gif"},18:function(e,t,a){e.exports=a(48)},29:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),o=a(3),s=a.n(o),i=a(13),u=a(2),m=a(14),p=(a(29),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,"This is a url shortening web application built as a demo project using Reactjs for front end ,node js for backend, mongoDb for storing Urls."))}),f=a(15),d=a.n(f),E=function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("img",{className:"logo-image",src:d.a,alt:"fotu"}))},b=a(16),g=a.n(b),v=a(17),h=a.n(v),j={width:"80px",display:"block",margin:"auto"},y=function(){return r.a.createElement("img",{src:h.a,alt:"Loading...",style:j})},N=(a(47),function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(u.a)(c,2),f=o[0],d=o[1],b=Object(n.useState)(!1),v=Object(u.a)(b,2),h=v[0],j=v[1],N=Object(n.useState)(""),x=Object(u.a)(N,2),O=x[0],S=x[1],w=Object(n.useState)(!1),k=Object(u.a)(w,2),U=k[0],C=k[1],T=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},j(!0),e.prev=2,e.next=5,g.a.post("http://localhost:5000/api/url/shorten",{longUrl:t},a);case 5:n=e.sent,j(!1),d(n.data.shortUrl),l(""),e.next=19;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0),j(!1),S("Something went wrong! Invalid Url or Server error"),setTimeout((function(){return S("")}),3e3),l(""),d("");case 19:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement(E,null),r.a.createElement("div",{className:"container"},O.length>0&&r.a.createElement("div",{className:"alert alert"},r.a.createElement("i",{className:"fas fa-info-circle"})," ",O),r.a.createElement("form",{className:"main-form",onSubmit:function(e){e.preventDefault(),""!==a&&T(a)}},r.a.createElement("div",{className:"form-input"},r.a.createElement("label",{htmlFor:"longUrl"},"Enter Your Url "),r.a.createElement("input",{name:"longUrl",type:"text",onChange:function(e){e.preventDefault(),l(e.target.value)},value:a})),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"input-button",type:"submit",value:"Shorten Url"})),h&&r.a.createElement("div",{style:{margin:"auto"}},r.a.createElement(y,null)),""!==f&&r.a.createElement("div",{className:"short-url"},r.a.createElement("p",null,f," ",r.a.createElement("span",{onClick:function(){return d("")},style:{color:"red",cursor:"pointer"}},"x")),r.a.createElement(m.CopyToClipboard,{text:f,onCopy:function(){return C(!0)}},r.a.createElement("div",null,r.a.createElement("button",{className:"copy-button"},r.a.createElement("i",{className:"far fa-copy ikon"})),U?r.a.createElement("p",{style:{color:"white",fontSize:"17px"}},"Copied!!!"):null))))),r.a.createElement(p,null))});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.073fcc1a.chunk.js.map