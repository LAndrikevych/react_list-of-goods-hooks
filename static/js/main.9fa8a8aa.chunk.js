(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c,s=n(6),o=n.n(s),a=n(7),r=n(4),i=n(1),l=(n(12),n(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.NONE="None",t.ALPHABET="Alphabet",t.LENGTH="Length"}(c||(c={}));var b=function(){var t=Object(i.useState)(!1),e=Object(r.a)(t,2),n=e[0],s=e[1],o=Object(i.useState)(!1),b=Object(r.a)(o,2),j=b[0],h=b[1],d=Object(i.useState)(c.NONE),p=Object(r.a)(d,2),O=p[0],N=p[1];var m=function(t){var e=Object(a.a)(t);switch(O){case c.ALPHABET:e.sort((function(t,e){return t.localeCompare(e)}));break;case c.LENGTH:e.sort((function(t,e){return t.length-e.length}))}return j&&e.reverse(),e}(u);return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{className:"App__title",children:"List of Goods"}),!n&&Object(l.jsx)("button",{className:" button button--start ",type:"button",onClick:function(){s(!n)},children:"Start"}),n&&Object(l.jsxs)("div",{className:"App__content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{className:" button button--sort-name ",type:"button",onClick:function(){return N(c.ALPHABET)},children:"Sort alphabetically"}),Object(l.jsx)("button",{className:"button",type:"button",onClick:function(){return N(c.LENGTH)},children:"Sort by length"}),Object(l.jsx)("button",{className:"button",type:"button",onClick:function(){h(!j)},children:"Reverse"}),Object(l.jsx)("button",{className:"button",type:"button",onClick:function(){N(c.NONE),h(!1)},children:"Reset"})]}),Object(l.jsx)("ul",{className:"Goods",children:m.map((function(t){return Object(l.jsx)("li",{className:"Goods__item",children:Object(l.jsx)("p",{children:t})},t)}))})]})]})};o.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9fa8a8aa.chunk.js.map