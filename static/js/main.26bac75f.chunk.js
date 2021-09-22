(this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]=this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]||[]).push([[0],{26:function(e,t,a){e.exports=a(39)},31:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(23),o=a.n(r),l=(a(31),a(9)),c=a(1),u=a(11),s=a.n(u),m=a(15),d=a(3),h=a(4),v=a(12),p=a(6),b=a(5),f=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,"Carregando...")}}]),a}(n.Component),g=a(17),y=a(13),E=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state=Object(y.a)({},e.movie),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(h.a)(a,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(g.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_title"},i.a.createElement("input",{placeholder:"Insira o t\xedtulo",id:"movie_title",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}}),"T\xedtulo"))}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_subtitle"},i.a.createElement("input",{placeholder:"Insira o subt\xedtulo",id:"movie_subtitle",type:"text",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}}),"Subt\xedtulo"))}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return i.a.createElement("div",{className:"row"},i.a.createElement("label",{htmlFor:"movie_image"},i.a.createElement("input",{placeholder:"Insira o caminho da imagem",id:"movie_image",type:"text",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}}),"Imagem"))}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_storyline"},i.a.createElement("textarea",{id:"movie_storyline",value:t,onChange:function(t){return e.updateMovie("storyline",t.target.value)}}),"Sinopse"))}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_genre"},"G\xeanero",i.a.createElement("select",{id:"movie_genre",value:t,onChange:function(t){return e.updateMovie("genre",t.target.value)}},i.a.createElement("option",{value:"action"},"A\xe7\xe3o"),i.a.createElement("option",{value:"comedy"},"Com\xe9dia"),i.a.createElement("option",{value:"thriller"},"Suspense"),i.a.createElement("option",{value:"fantasy"},"Fantasia"))))}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_rating"},i.a.createElement("input",{placeholder:"D\xea a avalia\xe7\xe3o do filme",id:"movie_rating",type:"number",step:.1,min:0,max:5,value:t,onChange:function(t){return e.updateMovie("rating",t.target.value)}}),"Avalia\xe7\xe3o"))}},{key:"renderSubmitButton",value:function(){return i.a.createElement("div",null,i.a.createElement("button",{type:"button",onClick:this.handleSubmit},"Submit"))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",null,this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),this.renderGenreSelection(),this.renderRatingInput(),this.renderSubmitButton()))}}]),a}(i.a.Component);E.defaultProps={movie:{}};var O=E,k=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.movie,t=e.id,a=e.title,n=e.subtitle,r=e.storyline,o=e.imagePath;return i.a.createElement("div",{"data-testid":"movie-card",className:"movie-card"},i.a.createElement("img",{alt:"Movie Cover",className:"movie-card-image",src:o}),i.a.createElement("div",{className:"movie-card-body"},i.a.createElement("h4",{"data-testid":"movie-card-title",className:"movie-card-title"},a),i.a.createElement("h5",{className:"movie-card-subtitle"},n),i.a.createElement("p",{className:"movie-card-storyline"},r)),i.a.createElement("div",null,i.a.createElement(l.b,{to:"movies/".concat(t)},"VER DETALHES")))}}]),a}(i.a.Component),j=a(25),S=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(S));var w=function(){return JSON.parse(localStorage.getItem("movies"))},I=function(e){return localStorage.setItem("movies",JSON.stringify(e))},C=function(e){return function(t){setTimeout((function(){t(e)}),2e3)}},_=function(e){var t=w().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){C(t)(e)}))},P=function(e){return new Promise((function(t){var a=w().map((function(t){return t.id===parseInt(e.id,10)?Object(y.a)(Object(y.a)({},t),e):t}));I(a),C("OK")(t)}))},A=function(e){return new Promise((function(t){var a=w(),n=a[a.length-1].id+1,i=Object(y.a)(Object(y.a)({},e),{},{id:n});a=[].concat(Object(j.a)(a),[i]),I(a),C("OK")(t)}))},x=function(e){var t=w();return t=t.filter((function(t){return t.id!==parseInt(e,10)})),I(t),new Promise((function(e){C({status:"OK"})(e)}))},R=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={status:"loading",shouldRedirect:!1,movie:{}},n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;_(t).then((function(t){return e.setState({movie:t,status:"loaded"})}))}},{key:"handleSubmit",value:function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(t);case 2:this.setState({shouldRedirect:!0});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.status,a=e.shouldRedirect,n=e.movie;return a?i.a.createElement(c.a,{exact:!0,to:"/"}):"loading"===t?i.a.createElement(f,null):i.a.createElement("div",{"data-testid":"edit-movie"},i.a.createElement(O,{movie:n,onSubmit:this.handleSubmit}))}}]),a}(n.Component),N=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={movie:""},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;_(t).then((function(t){return e.setState({movie:t})}))}},{key:"handleClick",value:function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.movie,a=t.id,n=t.title,r=t.storyline,o=t.imagePath,c=t.genre,u=t.rating,s=t.subtitle;return t?i.a.createElement("div",{"data-testid":"movie-details"},i.a.createElement("img",{alt:"Movie Cover",src:"../".concat(o)}),i.a.createElement("p",null,"Title: ".concat(n)),i.a.createElement("p",null,"Subtitle: ".concat(s)),i.a.createElement("p",null,"Storyline: ".concat(r)),i.a.createElement("p",null,"Genre: ".concat(c)),i.a.createElement("p",null,"Rating: ".concat(u)),i.a.createElement(l.b,{to:"/movies/".concat(a,"/edit")},"EDITAR"),i.a.createElement(l.b,{to:"/"},"VOLTAR"),i.a.createElement(l.b,{to:"/",onClick:function(){return e.handleClick(a)}},"DELETAR")):i.a.createElement(f,null)}}]),a}(n.Component),F=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={movies:[]},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;new Promise((function(e){var t=w();C(t)(e)})).then((function(t){return e.setState({movies:t})}))}},{key:"render",value:function(){var e=this.state.movies;return e.length?i.a.createElement("div",{"data-testid":"movie-list",className:"movie-list"},e.map((function(e){return i.a.createElement(k,{key:e.title,movie:e})})),i.a.createElement(l.b,{to:"/movies/new"},"ADICIONAR CART\xc3O")):i.a.createElement(f,null)}}]),a}(n.Component),T=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={created:!1},n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(h.a)(a,[{key:"handleSubmit",value:function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t);case 2:this.setState({created:!0});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.created?i.a.createElement(c.a,{exact:!0,to:"/"}):i.a.createElement("div",{"data-testid":"new-movie"},i.a.createElement(O,{onSubmit:this.handleSubmit}))}}]),a}(n.Component),M=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{"data-testid":"404-error"},"P\xe1gina n\xe3o encontrada")}}]),a}(n.Component);a(38);var D=function(){return i.a.createElement(l.a,null,i.a.createElement(c.d,null,i.a.createElement(c.b,{path:"/movies/new",component:T}),i.a.createElement(c.b,{path:"/movies/:id/edit",component:R}),i.a.createElement(c.b,{exact:!0,path:"/",component:F}),i.a.createElement(c.b,{path:"/movies/:id",component:N}),i.a.createElement(c.b,{component:M})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.26bac75f.chunk.js.map