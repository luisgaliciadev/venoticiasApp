(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{qI4B:function(n,l,o){"use strict";o.r(l);var t=o("8Y7J");class u{}var i=o("pMnS"),a=o("MKJQ"),e=o("sZkV"),b=o("kXsu"),r=o("kVNm"),c=o("zbXe");class s{constructor(n,l){this._noticiasService=n,this._platform=l,this.noticias=[]}ngOnInit(){this.cargarNoticias()}cargarNoticias(n){this._noticiasService.getTopHeadLines().subscribe(l=>{if(console.log(l),0===l.articles.length)return n.target.disabled=!0,void n.target.complete();this.noticias.push(...l.articles),n&&n.target.complete()})}loadData(n){this.cargarNoticias(n)}salir(){}}var d=t.mb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:translucent}"]],data:{}});function p(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,12,"ion-header",[["class","ion-no-border"]],null,null,null,a.M,a.l)),t.nb(1,49152,null,0,e.z,[t.h,t.k,t.x],{translucent:[0,"translucent"]},null),(n()(),t.ob(2,0,null,0,10,"ion-toolbar",[["color","dark"]],null,null,null,a.bb,a.A)),t.nb(3,49152,null,0,e.xb,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.ob(4,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,a.D,a.c)),t.nb(5,49152,null,0,e.j,[t.h,t.k,t.x],null,null),(n()(),t.ob(6,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.salir()&&t),t}),a.C,a.b)),t.nb(7,49152,null,0,e.i,[t.h,t.k,t.x],null,null),(n()(),t.ob(8,0,null,0,1,"ion-icon",[["name","exit-sharp"]],null,null,null,a.N,a.m)),t.nb(9,49152,null,0,e.A,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.ob(10,0,null,0,2,"ion-title",[],null,null,null,a.ab,a.z)),t.nb(11,49152,null,0,e.vb,[t.h,t.k,t.x],null,null),(n()(),t.Db(-1,0,[" Venoticias Global "])),(n()(),t.ob(13,0,null,null,7,"ion-content",[],null,null,null,a.K,a.j)),t.nb(14,49152,null,0,e.s,[t.h,t.k,t.x],{fullscreen:[0,"fullscreen"]},null),(n()(),t.ob(15,0,null,0,1,"app-noticias",[],null,null,null,b.b,b.a)),t.nb(16,114688,null,0,r.a,[],{noticias:[0,"noticias"]},null),(n()(),t.ob(17,0,null,0,3,"ion-infinite-scroll",[["threshold","150%"]],null,[[null,"ionInfinite"]],(function(n,l,o){var t=!0;return"ionInfinite"===l&&(t=!1!==n.component.loadData(o)&&t),t}),a.Q,a.o)),t.nb(18,49152,null,0,e.C,[t.h,t.k,t.x],{threshold:[0,"threshold"]},null),(n()(),t.ob(19,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","crescent"],["loadingText","Cargando..."]],null,null,null,a.P,a.p)),t.nb(20,49152,null,0,e.D,[t.h,t.k,t.x],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],(function(n,l){var o=l.component;n(l,1,0,!0),n(l,3,0,"dark"),n(l,9,0,"exit-sharp"),n(l,14,0,!0),n(l,16,0,o.noticias),n(l,18,0,"150%"),n(l,20,0,"crescent","Cargando...")}),null)}function x(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,1,"app-tab1",[],null,null,null,p,d)),t.nb(1,114688,null,0,s,[c.a,e.Db],null,null)],(function(n,l){n(l,1,0)}),null)}var h=t.kb("app-tab1",s,x,{},{},[]),g=o("SVse"),k=o("s7LF"),f=o("j1ZV"),m=o("HGan"),v=o("iInd");o.d(l,"Tab1PageModuleNgFactory",(function(){return j}));var j=t.lb(u,[],(function(n){return t.wb([t.xb(512,t.j,t.W,[[8,[i.a,h]],[3,t.j],t.v]),t.xb(4608,g.k,g.j,[t.s,[2,g.r]]),t.xb(4608,e.b,e.b,[t.x,t.g]),t.xb(4608,e.Bb,e.Bb,[e.b,t.j,t.p]),t.xb(4608,e.Eb,e.Eb,[e.b,t.j,t.p]),t.xb(4608,k.d,k.d,[]),t.xb(1073742336,g.b,g.b,[]),t.xb(1073742336,e.zb,e.zb,[]),t.xb(1073742336,f.a,f.a,[]),t.xb(1073742336,k.c,k.c,[]),t.xb(1073742336,k.a,k.a,[]),t.xb(1073742336,m.a,m.a,[]),t.xb(1073742336,v.n,v.n,[[2,v.s],[2,v.m]]),t.xb(1073742336,u,u,[]),t.xb(1024,v.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);