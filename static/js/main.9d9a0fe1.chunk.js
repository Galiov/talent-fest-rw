(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,a){e.exports=a.p+"static/media/ruleswareblack.c3d6769b.png"},40:function(e,t,a){e.exports=a.p+"static/media/ruleswarewhite.87115850.png"},44:function(e,t,a){e.exports=a(79)},49:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},66:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),c=a.n(r),o=(a(49),a(26)),i=a(20),u=a(9),s=a(10),m=a(12),h=a(11),d=a(8),p=a(13),b=a(15),E=a.n(b);E.a.initializeApp({apiKey:"AIzaSyAZVQ3R4aAFzKhUZqucbCHgoNwtTJJEKyA",authDomain:"rulesw-prueba-react.firebaseapp.com",databaseURL:"https://rulesw-prueba-react.firebaseio.com",projectId:"rulesw-prueba-react",storageBucket:"",messagingSenderId:"623726240904",appId:"1:623726240904:web:054f02f373ee3ece"});var g=E.a,v=(a(60),a(38)),f=a.n(v),O=a(39),j=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).login=a.login.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"login",value:function(){var e=new g.auth.GoogleAuthProvider;e.addScope("https://www.googleapis.com/auth/calendar.readonly"),g.auth().signInWithPopup(e).then(function(e){window.location.assign("/Employee"),console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"Login-display"},l.a.createElement("div",{className:"Login"},l.a.createElement("img",{className:"Logo",src:f.a,alt:"logo"}),l.a.createElement(O.GoogleLoginButton,{className:"button",onClick:this.login})))}}]),t}(n.Component),y=a(40),C=a.n(y),k=(a(61),function(e){return l.a.createElement("div",null,function(){if(e.userLoggedIn)return l.a.createElement("div",{className:"user"},l.a.createElement("p",null,e.name),l.a.createElement("img",{className:"avatar",src:e.photoURL,alt:"avatar"}),l.a.createElement("button",{className:"log-out-btn",onClick:e.logOut},l.a.createElement(o.b,{to:"/"}),"Sign Out"))}())}),N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).logOut=a.logOut.bind(Object(d.a)(a)),a.state={userLoggedIn:!1,photoURL:"",name:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.auth().onAuthStateChanged(function(t){t?e.setState({userLoggedIn:!0,photoURL:t.providerData[0].photoURL,name:t.providerData[0].displayName}):e.setState({userLoggedIn:!1,photoURL:"",name:""})})}},{key:"logOut",value:function(e){e.preventDefault(),g.auth().signOut().then(function(e){window.location.assign("/"),console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(k,{logOut:this.logOut,userLoggedIn:this.state.userLoggedIn,token:this.props.token,name:this.state.name,photoURL:this.state.photoURL}))}}]),t}(n.Component),S=(a(66),a(80)),w=a(81),I=a(82),D=a(83),x=a(84),L=a(85),T=a(86),U=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).toggle=a.toggle.bind(Object(d.a)(a)),a.state={isOpen:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(S.a,{light:!0,expand:"md"},l.a.createElement(w.a,null,l.a.createElement("img",{className:"logo",src:C.a,alt:"logo"})),l.a.createElement(I.a,{onClick:this.toggle}),l.a.createElement(D.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(x.a,{className:"ml-auto",navbar:!0},l.a.createElement(L.a,null,l.a.createElement(T.a,null," ",l.a.createElement(N,null)," "))))),l.a.createElement("div",{className:"line"}))}}]),t}(l.a.Component),A=a(24),F=(a(74),a(87)),R=a(93),q=a(88),M=a(89),P=a(90),V=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={modal:!1},a.toggle=a.toggle.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{modal:!e.modal}})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(F.a,{color:"danger",onClick:this.toggle},this.props.buttonLabel),l.a.createElement(R.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},l.a.createElement(q.a,{toggle:this.toggle,charCode:"Y"},"Detalles"),l.a.createElement(M.a,null,l.a.createElement("p",null,"Anel (coachee) pide Certificai\xf3n en Pega versi\xf3n 2, llevada a cabo en ITESO la fecha del 20 de Noviembre de 2019."),l.a.createElement("p",null,"Mentor: Hector Ramos."),l.a.createElement("p",null,"Comentarios: Ninguno")),l.a.createElement(P.a,null,l.a.createElement(F.a,{color:"primary",onClick:this.toggle},"Volver")," ",l.a.createElement(F.a,{color:"secondary",onClick:this.toggle},"Confirmar"))))}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).valueToState=function(e){var t=e.name,n=e.value,l=e.checked,r=e.type;a.setState(function(){return Object(A.a)({},t,"checkbox"===r?l:n)})},a.getUser=function(){E.a.auth().onAuthStateChanged(function(e){if(e){e.isAnonymous;var t=e.uid,a=e.displayName;console.log(e),this.setState({userID:t,userName:a})}}.bind(Object(d.a)(a)))},a.db=E.a.firestore(),a.state={date:"",mentor:"",place:"",rol:"",version:"",coments:"",userID:"",userName:""},a.subirFirebase=a.subirFirebase.bind(Object(d.a)(a)),a.getUser=a.getUser.bind(Object(d.a)(a)),a.state={data:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"subirFirebase",value:function(e){var t=this;e.preventDefault();var a=this.state;console.log(a),this.db.collection("peticiones").add({data:a}).then(function(){t.setState({data:a})}).catch(function(){console.log("error")})}},{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{class:"container col-md-12"},l.a.createElement("div",{className:"row"},l.a.createElement("form",null,l.a.createElement("div",{className:"col-md-6"},l.a.createElement("label",{htmlFor:"date"}," Fecha deseada: "),l.a.createElement("input",{name:"date",type:"text",placeholder:"Ingresa la fecha",onChange:function(t){return e.valueToState(t.target)}}),l.a.createElement("label",{htmlFor:"mentor"}," "),l.a.createElement("input",{name:"mentor",type:"text",placeholder:"Ingresa tu mentor",onChange:function(t){return e.valueToState(t.target)}}),l.a.createElement("label",null,"Lugar donde quieres realizar tu curso:",l.a.createElement("select",{name:"place",onChange:function(t){return e.valueToState(t.target)}},l.a.createElement("option",{value:"home"},"En casa"),l.a.createElement("option",{value:"unisite"},"Unisite"),l.a.createElement("option",{value:"executrain"},"Executrain"),l.a.createElement("option",{value:"iteso"},"Iteso")))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("legend",null,"Rol:"),l.a.createElement("label",null,"Coach",l.a.createElement("input",{type:"radio",name:"rol",value:"coach",onChange:function(t){return e.valueToState(t.target)}})),l.a.createElement("label",null,"Tech Lead",l.a.createElement("input",{type:"radio",name:"rol",value:"techLead",onChange:function(t){return e.valueToState(t.target)}})),l.a.createElement("label",null,"Couchee",l.a.createElement("input",{type:"radio",name:"rol",value:"couchee",onChange:function(t){return e.valueToState(t.target)}})),l.a.createElement("label",{htmlFor:"version"},"\xbfqu\xe9 versi\xf3n quieres?"),l.a.createElement("select",{name:"version",onChange:function(t){return e.valueToState(t.target)}},l.a.createElement("option",{value:""},"- selecciona uno -"),l.a.createElement("option",{value:"verUno"},"1"),l.a.createElement("option",{value:"verDos"},"2"),l.a.createElement("option",{value:"verTres"},"3")),l.a.createElement("label",{htmlFor:"coments"}),l.a.createElement("textarea",{name:"coments",placeholder:"Coments, notas",onChange:function(t){return e.valueToState(t.target)}}),l.a.createElement(V,null))),l.a.createElement("div",null)))}}]),t}(n.Component),B=(a(75),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(U,null),l.a.createElement("div",{className:"big-container"},l.a.createElement("div",{className:"img-div"}),l.a.createElement("div",{className:"container"},l.a.createElement("p",null,"Verify the location and date of your certification"," ",l.a.createElement("span",null,l.a.createElement("a",{href:"https://wsr.pearsonvue.com/testtaker/signin/SignInPage/PEGASYSTEMS?locale=en_US"},"here"))," and complete the next form."),l.a.createElement(z,null))))}}]),t}(n.Component)),J=a(91),G=a(92),H=(a(76),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"list-down"},l.a.createElement(J.a,null,l.a.createElement(G.a,{active:!0,tag:"a",href:"#",action:!0},"Request"),l.a.createElement(G.a,{tag:"a",href:"#",action:!0},"Request 1"),l.a.createElement(G.a,{tag:"a",href:"#",action:!0},"Request 2"),l.a.createElement(G.a,{tag:"a",href:"#",action:!0},"Request 3"),l.a.createElement(G.a,{tag:"a",href:"#",action:!0},"Request 4"),l.a.createElement(G.a,{disabled:!0,tag:"a",href:"#",action:!0},"Request 5")))}}]),t}(n.Component)),K=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null)}}]),t}(n.Component),W=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Anel (coachee) pide Certificai\xf3n en Pega versi\xf3n 2, llevada a cabo en ITESO la fecha del 20 de Noviembre de 2019."),l.a.createElement("p",null,"Mentor: Hector Ramos."),l.a.createElement("p",null,"Comentarios: Ninguno"),l.a.createElement(V,null),l.a.createElement(K,null))}}]),t}(n.Component),Y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).bajarData=function(){E.a.firestore().collection("peticiones").get().then(function(e){var t=[];e.forEach(function(e){t.push(e.data().data),console.log(e.id," => ",e.data()),console.log(t)})})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(U,null),l.a.createElement("div",{className:"big-container"},l.a.createElement(H,null),l.a.createElement("div",{className:"container"},l.a.createElement(W,null),l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{onClick:this.bajarData},"Decline"),l.a.createElement("button",{onClick:this.bajarData},"Validate")))))}}]),t}(n.Component),Z=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).bajarData=function(){E.a.firestore().collection("peticiones").get().then(function(e){var t=[];e.forEach(function(e){t.push(e.data().data),console.log(e.id," => ",e.data()),console.log(t)})})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(U,null),l.a.createElement("div",{className:"big-container"},l.a.createElement(H,null),l.a.createElement("div",{className:"container"},l.a.createElement(W,null),l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{onClick:this.bajarData},"Decline"),l.a.createElement("button",{onClick:this.bajarData},"Validate")))))}}]),t}(n.Component),Q=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).valueToState=function(e){var t=e.name,n=e.value,l=e.checked,r=e.type;a.setState(function(){return Object(A.a)({},t,"checkbox"===r?l:n)})},a.getUser=function(){E.a.auth().onAuthStateChanged(function(e){if(e){e.isAnonymous;var t=e.uid,a=e.displayName;console.log(e),this.setState({userID:t,userName:a})}}.bind(Object(d.a)(a)))},a.db=E.a.firestore(),a.state={couchee:"",mentor:"",place:"",certification:"",version:"",coments:"",userID:"",userName:""},a.subirFirebase=a.subirFirebase.bind(Object(d.a)(a)),a.getUser=a.getUser.bind(Object(d.a)(a)),a.state={data:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"subirFirebase",value:function(e){var t=this;e.preventDefault();var a=this.state;console.log(a),this.db.collection("certApproved").add({data:a}).then(function(){t.setState({data:a})}).catch(function(){console.log("error")})}},{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("label",{htmlFor:"couchee"},"Nombre del empleado "),l.a.createElement("input",{name:"couchee",type:"text",placeholder:"Ingresa el nombre",onChange:function(t){return e.valueToState(t.target)}}),l.a.createElement("label",{htmlFor:"mentor"}," Mentor "),l.a.createElement("input",{name:"mentor",type:"text",placeholder:"Ingresa el mentor",onChange:function(t){return e.valueToState(t.target)}}),l.a.createElement("label",{htmlFor:"cartificacion"}," Certificaci\xf3n solicitada: "),l.a.createElement("input",{name:"certification",type:"text",placeholder:"Ingresa el certificado",onChange:function(t){return e.valueToState(t.target)}}),l.a.createElement("label",{htmlFor:"version"},"Versi\xf3n solicitada"),l.a.createElement("select",{name:"version",onChange:function(t){return e.valueToState(t.target)}},l.a.createElement("option",{value:""},"- selecciona uno -"),l.a.createElement("option",{value:"verUno"},"1"),l.a.createElement("option",{value:"verDos"},"2"),l.a.createElement("option",{value:"verTres"},"3")),l.a.createElement("label",null,"Lugar donde se realizar\xe1 el curso:",l.a.createElement("select",{name:"place",onChange:function(t){return e.valueToState(t.target)}},l.a.createElement("option",{value:"home"},"En casa"),l.a.createElement("option",{value:"unisite"},"Unisite"),l.a.createElement("option",{value:"executrain"},"Executrain"),l.a.createElement("option",{value:"iteso"},"Iteso"))),l.a.createElement("label",{htmlFor:"coments"}),l.a.createElement("textarea",{name:"coments",placeholder:"Coments, notas",onChange:function(t){return e.valueToState(t.target)}}),l.a.createElement("button",{onClick:this.subirFirebase},"Subir formulario")),l.a.createElement("div",null,l.a.createElement("p",null,this.state.data.couchee," (",this.state.data.rol,") pide la certificaci\xf3n ",this.state.data.certification," versi\xf3n:"," ",this.state.data.version,", llevada a cabo en ",this.state.data.place," ","con la fecha del ",this.state.data.date,"."),l.a.createElement("p",null,"Mentor: ",this.state.data.mentor,"."),l.a.createElement("p",null,"Comentarios: ",this.state.data.coments)),l.a.createElement(V,null))}}]),t}(n.Component),$=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(U,null),l.a.createElement("div",{className:"big-container"},l.a.createElement(H,null),l.a.createElement("div",{className:"container"},l.a.createElement(Q,null))))}}]),t}(n.Component),_=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null)}}]),t}(n.Component);a(77);var X=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(o.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:j}),l.a.createElement(i.a,{exact:!0,path:"/employee",component:B}),l.a.createElement(i.a,{exact:!0,path:"/coach",component:Y}),l.a.createElement(i.a,{exact:!0,path:"/tl",component:Z}),l.a.createElement(i.a,{exact:!0,path:"/hr",component:$}),l.a.createElement(i.a,{component:_}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(78);c.a.render(l.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.9d9a0fe1.chunk.js.map