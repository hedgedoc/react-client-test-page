(this.webpackJsonpreact_client=this.webpackJsonpreact_client||[]).push([[7],{1049:function(e,t,n){},1050:function(e,t,n){},336:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return d}));var c=n(21),r=n(176),i=n(89),a=function(e){c.a.dispatch({type:i.a.SET_DOCUMENT_CONTENT,content:e})},s=function(e){c.a.dispatch({type:i.a.SET_NOTE_DATA_FROM_SERVER,note:e})},o=function(e){c.a.dispatch({type:i.a.UPDATE_NOTE_TITLE_BY_FIRST_HEADING,firstHeading:e})},l=function(e){e||(e=r.b.frontmatter),c.a.dispatch({type:i.a.SET_NOTE_FRONTMATTER,frontmatter:e})},d=function(e,t){c.a.dispatch({type:i.a.SET_CHECKBOX_IN_MARKDOWN_CONTENT,checked:t,lineInMarkdown:e})}},359:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(16),r=function(){return Object(c.a)((function(e){return e.noteDetails.markdownContent}))}},390:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(0),r=n(165),i=function(){var e=Object(r.a)();Object(c.useEffect)((function(){return e?window.document.body.classList.add("dark"):window.document.body.classList.remove("dark"),function(){window.document.body.classList.remove("dark")}}),[e])}},459:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(0);var c=n(15),r=n(1),i=function(e){var t=e.icon,n=e.size,i=e.children;return Object(r.jsxs)("span",{className:"d-flex align-items-center",children:[Object(r.jsx)(c.a,{icon:t,size:n,fixedWidth:!0,className:"mx-2"}),Object(r.jsx)("i",{className:"d-flex align-items-center",children:i})]})}},592:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(61),r=n(16),i=n(180),a=function(){var e=(0,Object(c.a)().t)("editor.untitledNote"),t=Object(r.a)((function(e){return e.noteDetails.noteTitle}));Object(i.a)(""===t?e:t)}},593:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(0);var c=n(213),r=n(61),i=n(34),a=n(17),s=n(1),o=function(e){var t=e.show;return Object(r.a)(),Object(s.jsx)(a.a,{condition:t,children:Object(s.jsxs)(c.a,{variant:"danger",className:"my-2",children:[Object(s.jsx)("b",{children:Object(s.jsx)(i.a,{i18nKey:"views.readOnly.error.title"})}),Object(s.jsx)("br",{}),Object(s.jsx)(i.a,{i18nKey:"views.readOnly.error.description"})]})})}},594:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(0);var c=n(213),r=n(34),i=n(17),a=n(1),s=function(e){var t=e.show;return Object(a.jsx)(i.a,{condition:t,children:Object(a.jsx)(c.a,{variant:"info",className:"my-2",children:Object(a.jsx)(r.a,{i18nKey:"views.readOnly.loading"})})})}},595:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c=navigator.platform.toLowerCase().includes("mac")},601:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(9),r=n(0),i=n(23),a=n(122),s=n(336),o=function(){var e=Object(i.m)().id,t=Object(r.useState)(!1),n=Object(c.a)(t,2),o=n[0],l=n[1],d=Object(r.useState)(!0),j=Object(c.a)(d,2),u=j[0],b=j[1];return Object(r.useEffect)((function(){Object(a.b)(e).then((function(e){Object(s.b)(e)})).catch((function(e){l(!0),console.error(e)})).finally((function(){return b(!1)}))}),[e]),[o,u]}},968:function(e,t,n){"use strict";n.d(t,"b",(function(){return le})),n.d(t,"a",(function(){return xe}));var c,r=n(0),i=n.n(r),a=n(278),s=n(280),o=n(17),l=n(121),d=n(184),j=n(263),u=n(114),b=n(61),h=n(165),O=n(106),x=n(15),m=n(1);!function(e){e[e.DARK=0]="DARK",e[e.LIGHT=1]="LIGHT"}(c||(c={}));var f,p=function(){var e=Object(b.a)().t,t=Object(h.a)()?c.DARK:c.LIGHT;return Object(m.jsxs)(j.a,{type:"radio",name:"dark-mode",value:t,className:"ml-2",children:[Object(m.jsx)(u.a,{value:c.DARK,variant:"outline-secondary",title:e("editor.darkMode.switchToDark"),onChange:function(){return Object(O.d)(!0)},children:Object(m.jsx)(x.a,{icon:"moon"})}),Object(m.jsx)(u.a,{value:c.LIGHT,variant:"outline-secondary",title:e("editor.darkMode.switchToLight"),onChange:function(){return Object(O.d)(!1)},children:Object(m.jsx)(x.a,{icon:"sun-o"})})]})},v=n(167),y=n(9),g=n(66),k=n(115),E=n(34),N=n(71),T=n(265),w=n(214),C=n(282),D=n(595),S=function(){var e=D.a?Object(m.jsx)("kbd",{children:"\u2318"}):Object(m.jsx)("kbd",{children:"Ctrl"}),t=D.a?Object(m.jsx)("kbd",{children:"\u2325"}):Object(m.jsx)("kbd",{children:"Alt"}),n={"View Mode":{"editor.help.shortcuts.view":[Object(m.jsx)("kbd",{children:"Ctrl"}),Object(m.jsx)(m.Fragment,{children:" + "}),t,Object(m.jsx)(m.Fragment,{children:" + "}),Object(m.jsx)("kbd",{children:"V"})],"editor.help.shortcuts.both":[Object(m.jsx)("kbd",{children:"Ctrl"}),Object(m.jsx)(m.Fragment,{children:" + "}),t,Object(m.jsx)(m.Fragment,{children:" + "}),Object(m.jsx)("kbd",{children:"B"})],"editor.help.shortcuts.edit":[Object(m.jsx)("kbd",{children:"Ctrl"}),Object(m.jsx)(m.Fragment,{children:" + "}),t,Object(m.jsx)(m.Fragment,{children:" + "}),Object(m.jsx)("kbd",{children:"E"})]},Editor:{"editor.help.shortcuts.bold":[e,Object(m.jsx)(m.Fragment,{children:" + "}),Object(m.jsx)("kbd",{children:"B"})],"editor.help.shortcuts.italic":[e,Object(m.jsx)(m.Fragment,{children:" + "}),Object(m.jsx)("kbd",{children:"I"})],"editor.help.shortcuts.underline":[e,Object(m.jsx)(m.Fragment,{children:" + "}),Object(m.jsx)("kbd",{children:"U"})],"editor.help.shortcuts.strikethrough":[e,Object(m.jsx)(m.Fragment,{children:" + "}),Object(m.jsx)("kbd",{children:"D"})],"editor.help.shortcuts.mark":[e,Object(m.jsx)(m.Fragment,{children:" + "}),Object(m.jsx)("kbd",{children:"M"})],"editor.help.shortcuts.link":[e,Object(m.jsx)(m.Fragment,{children:" + "}),Object(m.jsx)("kbd",{children:"K"})]}};return Object(m.jsx)(T.a,{className:"justify-content-center pt-4",children:Object.keys(n).map((function(e){return Object(m.jsxs)(w.a,{className:"m-2 w-50",children:[Object(m.jsx)(w.a.Header,{children:e}),Object(m.jsx)(C.a,{variant:"flush",children:Object.entries(n[e]).map((function(e){var t=Object(y.a)(e,2),n=t[0],c=t[1];return Object(m.jsxs)(C.a.Item,{className:"d-flex justify-content-between",children:[Object(m.jsx)("span",{children:Object(m.jsx)(E.a,{i18nKey:n})}),Object(m.jsx)("span",{children:c.map((function(e,t){return Object(m.jsx)(r.Fragment,{children:e},t)}))})]},n)}))})]},e)}))})},I=n(111),L=n(44),K=n(72),R=n(181),_=function(){return Object(b.a)(),Object(m.jsxs)(T.a,{className:"justify-content-center pt-4",children:[Object(m.jsxs)(I.a,{lg:4,children:[Object(m.jsx)("h3",{children:Object(m.jsx)(E.a,{i18nKey:"editor.help.contacts.title"})}),Object(m.jsx)("div",{children:Object(m.jsxs)("ul",{className:"list-unstyled",children:[Object(m.jsx)("li",{children:Object(m.jsx)(K.a,{i18nKey:"editor.help.contacts.community",href:L.community,icon:"users",className:"text-primary"})}),Object(m.jsx)("li",{children:Object(m.jsx)(K.a,{i18nKey:"editor.help.contacts.meetUsOn",i18nOption:{service:"Matrix"},href:L.chat,icon:"hashtag",className:"text-primary"})}),Object(m.jsx)("li",{children:Object(m.jsx)(K.a,{i18nKey:"editor.help.contacts.reportIssue",href:L.backendIssues,icon:"tag",className:"text-primary"})}),Object(m.jsx)("li",{children:Object(m.jsx)(K.a,{i18nKey:"editor.help.contacts.helpTranslating",href:L.translate,icon:"language",className:"text-primary"})})]})})]}),Object(m.jsxs)(I.a,{lg:4,children:[Object(m.jsx)("h3",{children:Object(m.jsx)(E.a,{i18nKey:"editor.help.documents.title"})}),Object(m.jsx)("div",{children:Object(m.jsxs)("ul",{className:"list-unstyled",children:[Object(m.jsx)("li",{children:Object(m.jsx)(R.a,{i18nKey:"editor.help.documents.features",href:"/n/features",icon:"dot-circle-o",className:"text-primary"})}),Object(m.jsx)("li",{children:Object(m.jsx)(R.a,{i18nKey:"editor.help.documents.yamlMetadata",href:"/n/yaml-metadata",icon:"dot-circle-o",className:"text-primary"})}),Object(m.jsx)("li",{children:Object(m.jsx)(R.a,{i18nKey:"editor.help.documents.slideExample",href:"/n/slide-example",icon:"dot-circle-o",className:"text-primary"})})]})})]})]})},A=n(277),z=(n(1049),n(198)),B=i.a.lazy((function(){return Promise.all([n.e(0),n.e(26)]).then(n.bind(null,970))})),F=i.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(1),n.e(6)]).then(n.bind(null,1586))})),M=function(e){var t=e.code,n=e.onTaskCheckedChange,c=Object(r.useCallback)((function(e,t){n(t)}),[n]);return Object(m.jsx)(r.Suspense,{fallback:Object(m.jsx)("tr",{children:Object(m.jsx)("td",{colSpan:2,children:Object(m.jsx)(z.a,{})})}),children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsx)(F,{content:t,baseUrl:"https://example.org",onTaskCheckedChange:c})}),Object(m.jsx)("td",{className:"markdown-body",children:Object(m.jsx)(B,{code:t,wrapLines:!0,startLineNumber:1,language:"markdown"})})]})})},H=function(){var e=Object(b.a)().t,t=Object(r.useState)(!1),n=Object(y.a)(t,2),c=n[0],i=n[1],a=Object(r.useMemo)((function(){return["**".concat(e("editor.editorToolbar.bold"),"**"),"*".concat(e("editor.editorToolbar.italic"),"*"),"++".concat(e("editor.editorToolbar.underline"),"++"),"~~".concat(e("editor.editorToolbar.strikethrough"),"~~"),"H~2~O","19^th^","==".concat(e("editor.help.cheatsheet.highlightedText"),"=="),"# ".concat(e("editor.editorToolbar.header")),"`".concat(e("editor.editorToolbar.code"),"`"),"```javascript=\nvar x = 5;\n```","> ".concat(e("editor.editorToolbar.blockquote")),"- ".concat(e("editor.editorToolbar.unorderedList")),"1. ".concat(e("editor.editorToolbar.orderedList")),"- [".concat(c?"x":" ","] ").concat(e("editor.editorToolbar.checkList")),"[".concat(e("editor.editorToolbar.link"),"](https://example.com)"),"![".concat(e("editor.editorToolbar.image"),"](/icons/apple-touch-icon.png)"),":smile:",":::info\n".concat(e("editor.help.cheatsheet.exampleAlert"),"\n:::")]}),[c,e]);return Object(m.jsxs)(A.a,{className:"table-condensed table-cheatsheet",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:Object(m.jsx)(E.a,{i18nKey:"editor.help.cheatsheet.example"})}),Object(m.jsx)("th",{children:Object(m.jsx)(E.a,{i18nKey:"editor.help.cheatsheet.syntax"})})]})}),Object(m.jsx)("tbody",{children:a.map((function(e){return Object(m.jsx)(M,{code:e,onTaskCheckedChange:i},e)}))})]})};!function(e){e.Cheatsheet="cheatsheet.title",e.Shortcuts="shortcuts.title",e.Links="links.title"}(f||(f={}));var P,U=function(e){var t=e.show,n=e.onHide,c=Object(r.useState)(f.Cheatsheet),i=Object(y.a)(c,2),a=i[0],s=i[1],o=Object(b.a)().t,l=Object(r.useMemo)((function(){switch(a){case f.Cheatsheet:return Object(m.jsx)(H,{});case f.Shortcuts:return Object(m.jsx)(S,{});case f.Links:return Object(m.jsx)(_,{})}}),[a]),d=Object(r.useMemo)((function(){return o("editor.documentBar.help")+" - "+o("editor.help.".concat(a))}),[o,a]);return Object(m.jsx)(N.a,{icon:"question-circle",show:t,onHide:n,title:d,children:Object(m.jsxs)(k.a.Body,{children:[Object(m.jsxs)("nav",{className:"nav nav-tabs",children:[Object(m.jsx)(g.a,{variant:"light",className:"nav-link nav-item ".concat(a===f.Cheatsheet?"active":""),onClick:function(){return s(f.Cheatsheet)},children:Object(m.jsx)(E.a,{i18nKey:"editor.help.cheatsheet.title"})}),Object(m.jsx)(g.a,{variant:"light",className:"nav-link nav-item ".concat(a===f.Shortcuts?"active":""),onClick:function(){return s(f.Shortcuts)},children:Object(m.jsx)(E.a,{i18nKey:"editor.help.shortcuts.title"})}),Object(m.jsx)(g.a,{variant:"light",className:"nav-link nav-item ".concat(a===f.Links?"active":""),onClick:function(){return s(f.Links)},children:Object(m.jsx)(E.a,{i18nKey:"editor.help.links.title"})})]}),l]})})},Y=function(){var e=Object(b.a)().t,t=Object(r.useState)(!1),n=Object(y.a)(t,2),c=n[0],i=n[1],a=Object(r.useCallback)((function(){return i(!1)}),[]);return Object(m.jsxs)(r.Fragment,{children:[Object(m.jsx)(g.a,{title:e("editor.documentBar.help"),className:"ml-2 text-secondary",size:"sm",variant:"outline-light",onClick:function(){return i(!0)},children:Object(m.jsx)(x.a,{icon:"question-circle"})}),Object(m.jsx)(U,{show:c,onHide:a})]})},G=n(28),V=n(194),W=n(142),q=function(){var e=Object(h.a)();return Object(m.jsx)(a.a.Brand,{children:Object(m.jsxs)(G.Link,{to:"/intro",className:"text-secondary text-decoration-none d-flex align-items-center",children:[Object(m.jsx)(W.c,{logoType:e?W.b.WB_HORIZONTAL:W.b.BW_HORIZONTAL,size:W.a.SMALL}),Object(m.jsx)(V.a,{inline:!0})]})})},J=n(69),Z=["title","titleId"];function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},i=Object.keys(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function $(e,t){var n=e.title,c=e.titleId,i=Q(e,Z);return r.createElement("svg",X({height:512,viewBox:"0 0 135.46666 135.46666",width:512,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},i),n?r.createElement("title",{id:c},n):null,P||(P=r.createElement("g",{fill:"currentColor",transform:"translate(253.17277 890.86874)"},r.createElement("path",{d:"m-185.60701-890.86598c-1.20278.0405-2.35129.51236-3.23554 1.33104l-19.83931 18.35901c-2.0321 1.88196-2.16416 5.08233-.29441 7.12658 1.86949 2.04457 5.06645 2.17956 7.10004.29914l16.43678-15.21017 16.43678 15.21017c2.03361 1.88043 5.23055 1.74545 7.10004-.29914 1.86889-2.04514 1.73629-5.24555-.29677-7.12658l-19.83694-18.35901c-.96887-.89698-2.25281-1.37483-3.57067-1.33104z"}),r.createElement("path",{d:"m-205.48644-783.84278c-1.28698.0542-2.55509.59901-3.48983 1.62131-1.86975 2.04426-1.73769 5.24463.29441 7.12659l19.83931 18.359c.88425.81868 2.03276 1.29062 3.23554 1.33104 1.31786.0439 2.6018-.43406 3.57067-1.33104l19.83694-18.359c2.03306-1.88102 2.16566-5.08144.29677-7.12659-1.86949-2.04459-5.06643-2.17956-7.10004-.29913l-16.43678 15.21017-16.43678-15.21017c-1.01679-.94021-2.32321-1.37647-3.61021-1.32218z"}),r.createElement("path",{d:"m-185.49136-841.40292a18.267478 18.267478 0 0 0 -18.21562 18.26754 18.267478 18.267478 0 0 0 .23777 2.93583l22.52379-20.64169a18.267478 18.267478 0 0 0 -4.49402-.56168 18.267478 18.267478 0 0 0 -.0519 0zm18.08169 15.33288-22.5232 20.64052a18.267478 18.267478 0 0 0 4.49343.56168 18.267478 18.267478 0 0 0 18.26754-18.26754 18.267478 18.267478 0 0 0 -.23777-2.93466z",fillRule:"evenodd"}),r.createElement("path",{d:"m-124.79368-883.92129-126.14511 116.28534 4.95067 5.40084 126.14688-116.28534z"}))))}var ee,te=r.forwardRef($),ne=(n.p,["title","titleId"]);function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function re(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},i=Object.keys(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ie(e,t){var n=e.title,c=e.titleId,i=re(e,ne);return r.createElement("svg",ce({height:512,viewBox:"0 0 135.46666 135.46666",width:512,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},i),n?r.createElement("title",{id:c},n):null,ee||(ee=r.createElement("g",{fill:"currentColor"},r.createElement("path",{d:"m67.566309.00276674c-1.20278.040417-2.35129.512357-3.23555 1.33103706l-19.83929 18.3589962c-2.0321 1.881973-2.16417 5.082332-.29442 7.126588 1.8695 2.044576 5.06646 2.17955 7.10005.29913l16.43677-15.210163 16.43678 15.210163c2.03361 1.880432 5.23055 1.745458 7.10004-.29913 1.86889-2.045147 1.73629-5.24555-.29677-7.126588l-19.83693-18.3589962c-.96887-.89697906-2.25281-1.37483336-3.57068-1.33103706z"}),r.createElement("path",{d:"m47.686889 107.02594c-1.28698.0542-2.55509.59903-3.48984 1.62132-1.86975 2.04426-1.73768 5.24462.29442 7.12659l19.83929 18.359c.88426.81868 2.03277 1.29062 3.23555 1.33104 1.31787.0438 2.60181-.43406 3.57068-1.33104l19.83693-18.359c2.03306-1.88103 2.16566-5.08144.29677-7.12659-1.86949-2.0446-5.06643-2.17956-7.10004-.29913l-16.43678 15.21016-16.43677-15.21016c-1.01679-.94021-2.32322-1.37647-3.61021-1.32219z"}),r.createElement("circle",{cx:67.733864,cy:67.733284,fillRule:"evenodd",r:18.267477}))))}var ae,se=r.forwardRef(ie),oe=(n.p,n(1050),n(16));!function(e){e[e.SYNCED=0]="SYNCED",e[e.UNSYNCED=1]="UNSYNCED"}(ae||(ae={}));var le,de=function(){var e=Object(oe.a)((function(e){return e.editorConfig.syncScroll}))?ae.SYNCED:ae.UNSYNCED,t=Object(b.a)().t;return Object(m.jsxs)(j.a,{type:"radio",defaultValue:[],name:"sync-scroll",className:"ml-2 sync-scroll-buttons",value:e,children:[Object(m.jsx)(u.a,{variant:"outline-secondary",title:t("editor.appBar.syncScroll.enable"),onChange:function(){return Object(J.g)(!0)},value:ae.SYNCED,children:Object(m.jsx)(se,{})}),Object(m.jsx)(u.a,{variant:"outline-secondary",title:t("editor.appBar.syncScroll.disable"),onChange:function(){return Object(J.g)(!1)},value:ae.UNSYNCED,children:Object(m.jsx)(te,{})})]})},je=n(148),ue=n(23),be=function(){var e=Object(b.a)().t,t=Object(ue.m)().id;return Object(m.jsx)(G.Link,{to:"/p/".concat(t),target:"_blank",children:Object(m.jsx)(g.a,{title:e("editor.documentBar.slideMode"),className:"ml-2 text-secondary",size:"sm",variant:"outline-light",children:Object(m.jsx)(x.a,{icon:"television"})})})},he=function(){var e=Object(b.a)().t,t=Object(ue.m)().id;return Object(m.jsx)(G.Link,{to:"/s/".concat(t),target:"_blank",children:Object(m.jsx)(g.a,{title:e("editor.documentBar.readOnlyMode"),className:"ml-2 text-secondary",size:"sm",variant:"outline-light",children:Object(m.jsx)(x.a,{icon:"file-text-o"})})})},Oe=function(){return Object(b.a)(),Object(m.jsxs)(g.a,{className:"mx-2",size:"sm",variant:"primary",children:[Object(m.jsx)(x.a,{icon:"plus"})," ",Object(m.jsx)(E.a,{i18nKey:"editor.appBar.new"})]})};!function(e){e[e.BASIC=0]="BASIC",e[e.EDITOR=1]="EDITOR"}(le||(le={}));var xe=function(e){var t=e.mode,n=Object(oe.a)((function(e){return!!e.user})),c=Object(oe.a)((function(e){return e.noteDetails.frontmatter}));return Object(m.jsxs)(a.a,{bg:"light",children:[Object(m.jsxs)(s.a,{className:"mr-auto d-flex align-items-center",children:[Object(m.jsx)(q,{}),Object(m.jsxs)(o.a,{condition:t===le.EDITOR,children:[Object(m.jsx)(v.b,{}),Object(m.jsx)(de,{})]}),Object(m.jsx)(p,{}),Object(m.jsxs)(o.a,{condition:t===le.EDITOR,children:[Object(m.jsx)(o.a,{condition:c.type===je.c.SLIDE,children:Object(m.jsx)(be,{})}),Object(m.jsx)(o.a,{condition:c.type!==je.c.SLIDE,children:Object(m.jsx)(he,{})}),Object(m.jsx)(Y,{})]})]}),Object(m.jsxs)(s.a,{className:"d-flex align-items-center text-secondary",children:[Object(m.jsx)(Oe,{}),Object(m.jsx)(o.a,{condition:!n,children:Object(m.jsx)(l.a,{size:"sm"})}),Object(m.jsx)(o.a,{condition:n,children:Object(m.jsx)(d.a,{})})]})]})}},969:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));n(0);var c,r=n(61),i=n(34),a=n(168),s=n(459),o=n(1),l=function(e){var t=e.time;return Object(o.jsx)("time",{className:"mx-1",title:t.toFormat("DDDD T"),dateTime:t.toString(),children:t.toRelative()})};!function(e){e[e.CREATED=0]="CREATED",e[e.EDITED=1]="EDITED"}(c||(c={}));var d=function(e){var t=e.time,n=e.mode,d=e.userName,j=e.profileImageSrc,u=e.size;Object(r.a)();var b=n===c.CREATED?"editor.modal.documentInfo.created":"editor.modal.documentInfo.edited",h=n===c.CREATED?"plus":"pencil";return Object(o.jsx)(s.a,{icon:h,size:u,children:Object(o.jsxs)(i.a,{i18nKey:b,children:[Object(o.jsx)(a.a,{photo:j,additionalClasses:"font-style-normal bold font-weight-bold",name:d,size:u?"lg":void 0}),Object(o.jsx)(l,{time:t})]})})}}}]);
//# sourceMappingURL=7.7aecb27f.chunk.js.map