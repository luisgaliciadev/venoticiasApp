function _toConsumableArray(n){return _arrayWithoutHoles(n)||_iterableToArray(n)||_unsupportedIterableToArray(n)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(n,l){if(n){if("string"==typeof n)return _arrayLikeToArray(n,l);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(n,l):void 0}}function _iterableToArray(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}function _arrayWithoutHoles(n){if(Array.isArray(n))return _arrayLikeToArray(n)}function _arrayLikeToArray(n,l){(null==l||l>n.length)&&(l=n.length);for(var e=0,t=new Array(l);e<l;e++)t[e]=n[e];return t}function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"55Gs":function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),o=function n(){_classCallCheck(this,n)},r=e("pMnS"),a=e("MKJQ"),i=e("sZkV"),u=e("s7LF"),c=e("SVse"),s=e("kXsu"),b=e("kVNm"),f=e("zbXe"),d=function(){function n(l){_classCallCheck(this,n),this._noticiasService=l,this.cetegorias=["Econom\xeda","Entretenimiento","General","Salud","Ciencia","Deporte","Tecnolog\xeda"],this.noticias=[]}return _createClass(n,[{key:"ngOnInit",value:function(){this.segment.value=this.cetegorias[0],this.getNoticias(this.segment.value)}},{key:"getNoticias",value:function(n,l){var e=this;"Econom\xeda"===n&&(n="Business"),"Entretenimiento"===n&&(n="Entertainment"),"General"===n&&(n="General"),"Salud"===n&&(n="Health"),"Ciencia"===n&&(n="Science"),"Deporte"===n&&(n="Sports"),"Tecnolog\xeda"===n&&(n="Technology"),this._noticiasService.getTopHeadLinesCategoria(n).subscribe((function(n){var t;console.log(n),(t=e.noticias).push.apply(t,_toConsumableArray(n.articles)),l&&l.target.complete()}))}},{key:"change",value:function(n){this.segment.value=n.detail.value,this.noticias=[],this.getNoticias(this.segment.value)}},{key:"loadData",value:function(n){this.getNoticias(this.segment.value,n)}}]),n}(),g=t.mb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:translucent}ion-segment-button[_ngcontent-%COMP%]{background-color:grey!important;color:#fff!important}.segment-button-checked[_ngcontent-%COMP%]{color:#fff}"]],data:{}});function h(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,4,"ion-segment-button",[["mode","md"]],null,null,null,a.T,a.t)),t.nb(1,49152,null,0,i.hb,[t.h,t.k,t.x],{mode:[0,"mode"],value:[1,"value"]},null),(n()(),t.ob(2,0,null,0,2,"ion-label",[["class","ion-text-capitalize"]],null,null,null,a.R,a.q)),t.nb(3,49152,null,0,i.L,[t.h,t.k,t.x],null,null),(n()(),t.Db(4,0,[" "," "]))],(function(n,l){n(l,1,0,"md",l.context.$implicit)}),(function(n,l){n(l,4,0,l.context.$implicit)}))}function p(n){return t.Eb(0,[t.Bb(402653184,1,{segment:0}),(n()(),t.ob(1,0,null,null,12,"ion-header",[["class","ion-no-border"]],null,null,null,a.M,a.l)),t.nb(2,49152,null,0,i.z,[t.h,t.k,t.x],{translucent:[0,"translucent"]},null),(n()(),t.ob(3,0,null,0,4,"ion-toolbar",[["color","dark"]],null,null,null,a.bb,a.A)),t.nb(4,49152,null,0,i.xb,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.ob(5,0,null,0,2,"ion-title",[],null,null,null,a.ab,a.z)),t.nb(6,49152,null,0,i.vb,[t.h,t.k,t.x],null,null),(n()(),t.Db(-1,0,[" Encabezados "])),(n()(),t.ob(8,0,null,0,5,"ion-segment",[["mode","md"],["scrollable",""]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,l,e){var o=!0,r=n.component;return"ionBlur"===l&&(o=!1!==t.zb(n,11)._handleBlurEvent(e.target)&&o),"ionChange"===l&&(o=!1!==t.zb(n,11)._handleChangeEvent(e.target)&&o),"ionChange"===l&&(o=!1!==r.change(e)&&o),o}),a.U,a.s)),t.Ab(5120,null,u.b,(function(n){return[n]}),[i.Fb]),t.nb(10,49152,[[1,4]],0,i.gb,[t.h,t.k,t.x],{mode:[0,"mode"],scrollable:[1,"scrollable"]},null),t.nb(11,16384,null,0,i.Fb,[t.k],null,null),(n()(),t.db(16777216,null,0,1,null,h)),t.nb(13,278528,null,0,c.h,[t.L,t.I,t.q],{ngForOf:[0,"ngForOf"]},null),(n()(),t.ob(14,0,null,null,7,"ion-content",[],null,null,null,a.K,a.j)),t.nb(15,49152,null,0,i.s,[t.h,t.k,t.x],{fullscreen:[0,"fullscreen"]},null),(n()(),t.ob(16,0,null,0,1,"app-noticias",[],null,null,null,s.b,s.a)),t.nb(17,114688,null,0,b.a,[],{noticias:[0,"noticias"]},null),(n()(),t.ob(18,0,null,0,3,"ion-infinite-scroll",[["threshold","150%"]],null,[[null,"ionInfinite"]],(function(n,l,e){var t=!0;return"ionInfinite"===l&&(t=!1!==n.component.loadData(e)&&t),t}),a.Q,a.o)),t.nb(19,49152,null,0,i.C,[t.h,t.k,t.x],{threshold:[0,"threshold"]},null),(n()(),t.ob(20,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","crescent"],["loadingText","Cargando..."]],null,null,null,a.P,a.p)),t.nb(21,49152,null,0,i.D,[t.h,t.k,t.x],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],(function(n,l){var e=l.component;n(l,2,0,!0),n(l,4,0,"dark"),n(l,10,0,"md",""),n(l,13,0,e.cetegorias),n(l,15,0,!0),n(l,17,0,e.noticias),n(l,19,0,"150%"),n(l,21,0,"crescent","Cargando...")}),null)}var m=t.kb("app-tab2",d,(function(n){return t.Eb(0,[(n()(),t.ob(0,0,null,null,1,"app-tab2",[],null,null,null,p,g)),t.nb(1,114688,null,0,d,[f.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),y=e("j1ZV"),k=e("HGan"),v=e("iInd");e.d(l,"Tab2PageModuleNgFactory",(function(){return x}));var x=t.lb(o,[],(function(n){return t.wb([t.xb(512,t.j,t.W,[[8,[r.a,m]],[3,t.j],t.v]),t.xb(4608,c.k,c.j,[t.s,[2,c.r]]),t.xb(4608,i.b,i.b,[t.x,t.g]),t.xb(4608,i.Bb,i.Bb,[i.b,t.j,t.p]),t.xb(4608,i.Eb,i.Eb,[i.b,t.j,t.p]),t.xb(4608,u.d,u.d,[]),t.xb(1073742336,c.b,c.b,[]),t.xb(1073742336,i.zb,i.zb,[]),t.xb(1073742336,y.a,y.a,[]),t.xb(1073742336,u.c,u.c,[]),t.xb(1073742336,u.a,u.a,[]),t.xb(1073742336,k.a,k.a,[]),t.xb(1073742336,v.n,v.n,[[2,v.s],[2,v.m]]),t.xb(1073742336,o,o,[]),t.xb(1024,v.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);