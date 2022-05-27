(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var s=c(8),a=c.n(s),n=(c(15),c(10)),i=c(2),r=c(1),l=(c(16),c(17),c(18),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.Plot,Object(l.jsx)("br",{})]})]})]})},j=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbID)}))})},b=c(6),d=c(3),u=c.n(d),m=c(9),h=c.n(m),O="https://www.omdbapi.com/?apikey=59f6cb1b";function v(e){return x.apply(this,arguments)}function x(){return(x=Object(b.a)(u.a.mark((function e(t){var c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"&t=").concat(t));case 2:if((c=e.sent).ok){e.next=9;break}e.t0=c.status,e.next=404===e.t0?7:8;break;case 7:throw new Error("Can't find a movie with such a title");case 8:throw new Error("Server respond with error");case 9:return e.next=11,c.json();case 11:return s=e.sent,e.abrupt("return",s);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(21);var f=function(e){var t=e.onAddMovie,c=e.doubleFilm,s=Object(r.useState)(""),a=Object(i.a)(s,2),n=a[0],j=a[1],d=Object(r.useState)(null),m=Object(i.a)(d,2),O=m[0],x=m[1],f=Object(r.useState)(null),p=Object(i.a)(f,2),N=p[0],g=p[1];Object(r.useEffect)((function(){c&&g("You have already enjoyed this film")}),[c]);var w=Object(r.useCallback)(Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=4;break}g("Please choose a film"),e.next=8;break;case 4:return e.next=6,v(n);case 6:"True"===(t=e.sent).Response?(x(t),g("")):g("Can't find a movie with such a title");case 8:case"end":return e.stop()}}),e)}))),[n,O]),k=Object(r.useCallback)((function(){null!==O&&(t(O),j(""),x(null))}),[O,N]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:h()("input",{"is-danger":N}),value:n,onChange:function(e){return j(e.target.value)}})}),Object(l.jsx)("p",{className:"help is-danger",children:N})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-light",onClick:w,children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-primary",onClick:k,children:"Add to the list"})})]})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),O&&Object(l.jsx)(o,{movie:O})]})]})},p=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)(!1),o=Object(i.a)(a,2),b=o[0],d=o[1],u=Object(r.useCallback)((function(e){c.some((function(t){return t.imdbID===e.imdbID}))?d(!0):(s((function(t){return[].concat(Object(n.a)(t),[e])})),d(!1))}),[c,b]);return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(j,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(f,{onAddMovie:u,doubleFilm:b})})]})};a.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.b9d30c03.chunk.js.map