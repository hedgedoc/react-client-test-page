(this.webpackJsonpreact_client=this.webpackJsonpreact_client||[]).push([[5],{336:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return j}));var c=n(26),r=n(159),i=n(83),a=function(e){c.a.dispatch({type:i.a.SET_DOCUMENT_CONTENT,content:e})},s=function(e){c.a.dispatch({type:i.a.SET_NOTE_DATA_FROM_SERVER,note:e})},o=function(e){c.a.dispatch({type:i.a.UPDATE_NOTE_TITLE_BY_FIRST_HEADING,firstHeading:e})},l=function(e){e||(e=r.b.frontmatter),c.a.dispatch({type:i.a.SET_NOTE_FRONTMATTER,frontmatter:e})},j=function(e,t){c.a.dispatch({type:i.a.SET_CHECKBOX_IN_MARKDOWN_CONTENT,checked:t,lineInMarkdown:e})}},358:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(17),r=function(){return Object(c.b)((function(e){return e.noteDetails.markdownContent}))}},394:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(0),r=n(154),i=function(){var e=Object(r.a)();Object(c.useEffect)((function(){return e?window.document.body.classList.add("dark"):window.document.body.classList.remove("dark"),function(){window.document.body.classList.remove("dark")}}),[e])}},588:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(55),r=n(17),i=n(170),a=function(){var e=(0,Object(c.a)().t)("editor.untitledNote"),t=Object(r.b)((function(e){return e.noteDetails.noteTitle}));Object(i.a)(""===t?e:t)}},589:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(0);var c=n(203),r=n(55),i=n(32),a=n(16),s=n(1),o=function(e){var t=e.show;return Object(r.a)(),Object(s.jsx)(a.a,{condition:t,children:Object(s.jsxs)(c.a,{variant:"danger",className:"my-2",children:[Object(s.jsx)("b",{children:Object(s.jsx)(i.a,{i18nKey:"views.readOnly.error.title"})}),Object(s.jsx)("br",{}),Object(s.jsx)(i.a,{i18nKey:"views.readOnly.error.description"})]})})}},590:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(0);var c=n(203),r=n(32),i=n(16),a=n(1),s=function(e){var t=e.show;return Object(a.jsx)(i.a,{condition:t,children:Object(a.jsx)(c.a,{variant:"info",className:"my-2",children:Object(a.jsx)(r.a,{i18nKey:"views.readOnly.loading"})})})}},591:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c=navigator.platform.toLowerCase().includes("mac")},597:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(8),r=n(0),i=n(23),a=n(113),s=n(336),o=function(){var e=Object(i.m)().id,t=Object(r.useState)(!1),n=Object(c.a)(t,2),o=n[0],l=n[1],j=Object(r.useState)(!0),d=Object(c.a)(j,2),b=d[0],u=d[1];return Object(r.useEffect)((function(){Object(a.b)(e).then((function(e){Object(s.b)(e)})).catch((function(e){l(!0),console.error(e)})).finally((function(){return u(!1)}))}),[e]),[o,b]}},598:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(0);var c=n(15),r=n(1),i=function(e){var t=e.icon,n=e.size,i=e.children;return Object(r.jsxs)("span",{className:"d-flex align-items-center",children:[Object(r.jsx)(c.a,{icon:t,size:n,fixedWidth:!0,className:"mx-2"}),Object(r.jsx)("i",{className:"d-flex align-items-center",children:i})]})}},774:function(e,t,n){"use strict";n.d(t,"b",(function(){return le})),n.d(t,"a",(function(){return xe}));var c,r=n(0),i=n.n(r),a=n(25),s=n.n(a),o=n(273),l=n(275),j=n(17),d=n(16),b=n(112),u=n(174),h=n(258),O=n(104),x=n(55),m=n(154),f=n(96),p=n(15),v=n(1);!function(e){e[e.DARK=0]="DARK",e[e.LIGHT=1]="LIGHT"}(c||(c={}));var y,g=function(){var e=Object(x.a)().t,t=Object(m.a)()?c.DARK:c.LIGHT;return Object(v.jsxs)(h.a,{type:"radio",name:"dark-mode",value:t,className:"ml-2",children:[Object(v.jsx)(O.a,{value:c.DARK,variant:"outline-secondary",title:e("editor.darkMode.switchToDark"),onChange:function(){return Object(f.d)(!0)},children:Object(v.jsx)(p.a,{icon:"moon"})}),Object(v.jsx)(O.a,{value:c.LIGHT,variant:"outline-secondary",title:e("editor.darkMode.switchToLight"),onChange:function(){return Object(f.d)(!1)},children:Object(v.jsx)(p.a,{icon:"sun-o"})})]})},k=n(156),E=n(8),N=n(62),T=n(105),w=n(32),C=n(67),D=n(260),S=n(204),I=n(277),L=n(591),K=function(){var e=L.a?Object(v.jsx)("kbd",{children:"\u2318"}):Object(v.jsx)("kbd",{children:"Ctrl"}),t=L.a?Object(v.jsx)("kbd",{children:"\u2325"}):Object(v.jsx)("kbd",{children:"Alt"}),n={"View Mode":{"editor.help.shortcuts.view":[Object(v.jsx)("kbd",{children:"Ctrl"}),Object(v.jsx)(v.Fragment,{children:" + "}),t,Object(v.jsx)(v.Fragment,{children:" + "}),Object(v.jsx)("kbd",{children:"V"})],"editor.help.shortcuts.both":[Object(v.jsx)("kbd",{children:"Ctrl"}),Object(v.jsx)(v.Fragment,{children:" + "}),t,Object(v.jsx)(v.Fragment,{children:" + "}),Object(v.jsx)("kbd",{children:"B"})],"editor.help.shortcuts.edit":[Object(v.jsx)("kbd",{children:"Ctrl"}),Object(v.jsx)(v.Fragment,{children:" + "}),t,Object(v.jsx)(v.Fragment,{children:" + "}),Object(v.jsx)("kbd",{children:"E"})]},Editor:{"editor.help.shortcuts.bold":[e,Object(v.jsx)(v.Fragment,{children:" + "}),Object(v.jsx)("kbd",{children:"B"})],"editor.help.shortcuts.italic":[e,Object(v.jsx)(v.Fragment,{children:" + "}),Object(v.jsx)("kbd",{children:"I"})],"editor.help.shortcuts.underline":[e,Object(v.jsx)(v.Fragment,{children:" + "}),Object(v.jsx)("kbd",{children:"U"})],"editor.help.shortcuts.strikethrough":[e,Object(v.jsx)(v.Fragment,{children:" + "}),Object(v.jsx)("kbd",{children:"D"})],"editor.help.shortcuts.mark":[e,Object(v.jsx)(v.Fragment,{children:" + "}),Object(v.jsx)("kbd",{children:"M"})],"editor.help.shortcuts.link":[e,Object(v.jsx)(v.Fragment,{children:" + "}),Object(v.jsx)("kbd",{children:"K"})]}};return Object(v.jsx)(D.a,{className:"justify-content-center pt-4",children:Object.keys(n).map((function(e){return Object(v.jsxs)(S.a,{className:"m-2 w-50",children:[Object(v.jsx)(S.a.Header,{children:e}),Object(v.jsx)(I.a,{variant:"flush",children:Object.entries(n[e]).map((function(e){var t=Object(E.a)(e,2),n=t[0],c=t[1];return Object(v.jsxs)(I.a.Item,{className:"d-flex justify-content-between",children:[Object(v.jsx)("span",{children:Object(v.jsx)(w.a,{i18nKey:n})}),Object(v.jsx)("span",{children:c.map((function(e,t){return Object(v.jsx)(r.Fragment,{children:e},t)}))})]},n)}))})]},e)}))})},R=n(101),_=n(56),A=n(68),z=n(171),B=function(){Object(x.a)();var e=Object(j.b)((function(e){return e.config.version.issueTrackerUrl}));return Object(v.jsxs)(D.a,{className:"justify-content-center pt-4",children:[Object(v.jsxs)(R.a,{lg:4,children:[Object(v.jsx)("h3",{children:Object(v.jsx)(w.a,{i18nKey:"editor.help.contacts.title"})}),Object(v.jsx)("div",{children:Object(v.jsxs)("ul",{className:"list-unstyled",children:[Object(v.jsx)("li",{children:Object(v.jsx)(A.a,{i18nKey:"editor.help.contacts.community",href:_.community,icon:"users",className:"text-primary"})}),Object(v.jsx)("li",{children:Object(v.jsx)(A.a,{i18nKey:"editor.help.contacts.meetUsOn",i18nOption:{service:"Matrix"},href:_.chat,icon:"hashtag",className:"text-primary"})}),Object(v.jsx)("li",{children:Object(v.jsx)(A.a,{i18nKey:"editor.help.contacts.reportIssue",href:e,icon:"tag",className:"text-primary"})}),Object(v.jsx)("li",{children:Object(v.jsx)(A.a,{i18nKey:"editor.help.contacts.helpTranslating",href:_.translate,icon:"language",className:"text-primary"})})]})})]}),Object(v.jsxs)(R.a,{lg:4,children:[Object(v.jsx)("h3",{children:Object(v.jsx)(w.a,{i18nKey:"editor.help.documents.title"})}),Object(v.jsx)("div",{children:Object(v.jsxs)("ul",{className:"list-unstyled",children:[Object(v.jsx)("li",{children:Object(v.jsx)(z.a,{i18nKey:"editor.help.documents.features",href:"/n/features",icon:"dot-circle-o",className:"text-primary"})}),Object(v.jsx)("li",{children:Object(v.jsx)(z.a,{i18nKey:"editor.help.documents.yamlMetadata",href:"/n/yaml-metadata",icon:"dot-circle-o",className:"text-primary"})}),Object(v.jsx)("li",{children:Object(v.jsx)(z.a,{i18nKey:"editor.help.documents.slideExample",href:"/n/slide-example",icon:"dot-circle-o",className:"text-primary"})})]})})]})]})},F=n(272),M=(n(854),n(188)),H=i.a.lazy((function(){return Promise.all([n.e(0),n.e(22)]).then(n.bind(null,776))})),U=i.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(4)]).then(n.bind(null,1586))})),P=function(e){var t=e.code,n=e.onTaskCheckedChange,c=Object(r.useCallback)((function(e,t){n(t)}),[n]);return Object(v.jsx)(r.Suspense,{fallback:Object(v.jsx)("tr",{children:Object(v.jsx)("td",{colSpan:2,children:Object(v.jsx)(M.a,{})})}),children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)(U,{content:t,baseUrl:"https://example.org",onTaskCheckedChange:c})}),Object(v.jsx)("td",{className:"markdown-body",children:Object(v.jsx)(H,{code:t,wrapLines:!0,startLineNumber:1,language:"markdown"})})]})})},Y=function(){var e=Object(x.a)().t,t=Object(r.useState)(!1),n=Object(E.a)(t,2),c=n[0],i=n[1],a=Object(r.useMemo)((function(){return["**".concat(e("editor.editorToolbar.bold"),"**"),"*".concat(e("editor.editorToolbar.italic"),"*"),"++".concat(e("editor.editorToolbar.underline"),"++"),"~~".concat(e("editor.editorToolbar.strikethrough"),"~~"),"H~2~O","19^th^","==".concat(e("editor.help.cheatsheet.highlightedText"),"=="),"# ".concat(e("editor.editorToolbar.header")),"`".concat(e("editor.editorToolbar.code"),"`"),"```javascript=\nvar x = 5;\n```","> ".concat(e("editor.editorToolbar.blockquote")),"- ".concat(e("editor.editorToolbar.unorderedList")),"1. ".concat(e("editor.editorToolbar.orderedList")),"- [".concat(c?"x":" ","] ").concat(e("editor.editorToolbar.checkList")),"[".concat(e("editor.editorToolbar.link"),"](https://example.com)"),"![".concat(e("editor.editorToolbar.image"),"](/icons/apple-touch-icon.png)"),":smile:",":::info\n".concat(e("editor.help.cheatsheet.exampleAlert"),"\n:::")]}),[c,e]);return Object(v.jsxs)(F.a,{className:"table-condensed table-cheatsheet",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:Object(v.jsx)(w.a,{i18nKey:"editor.help.cheatsheet.example"})}),Object(v.jsx)("th",{children:Object(v.jsx)(w.a,{i18nKey:"editor.help.cheatsheet.syntax"})})]})}),Object(v.jsx)("tbody",{children:a.map((function(e){return Object(v.jsx)(P,{code:e,onTaskCheckedChange:i},e)}))})]})};!function(e){e.Cheatsheet="cheatsheet.title",e.Shortcuts="shortcuts.title",e.Links="links.title"}(y||(y={}));var G,V=function(e){var t=e.show,n=e.onHide,c=Object(r.useState)(y.Cheatsheet),i=Object(E.a)(c,2),a=i[0],s=i[1],o=Object(x.a)().t,l=Object(r.useMemo)((function(){switch(a){case y.Cheatsheet:return Object(v.jsx)(Y,{});case y.Shortcuts:return Object(v.jsx)(K,{});case y.Links:return Object(v.jsx)(B,{})}}),[a]),j=Object(r.useMemo)((function(){return o("editor.documentBar.help")+" - "+o("editor.help.".concat(a))}),[o,a]);return Object(v.jsx)(C.a,{icon:"question-circle",show:t,onHide:n,title:j,children:Object(v.jsxs)(T.a.Body,{children:[Object(v.jsxs)("nav",{className:"nav nav-tabs",children:[Object(v.jsx)(N.a,{variant:"light",className:"nav-link nav-item ".concat(a===y.Cheatsheet?"active":""),onClick:function(){return s(y.Cheatsheet)},children:Object(v.jsx)(w.a,{i18nKey:"editor.help.cheatsheet.title"})}),Object(v.jsx)(N.a,{variant:"light",className:"nav-link nav-item ".concat(a===y.Shortcuts?"active":""),onClick:function(){return s(y.Shortcuts)},children:Object(v.jsx)(w.a,{i18nKey:"editor.help.shortcuts.title"})}),Object(v.jsx)(N.a,{variant:"light",className:"nav-link nav-item ".concat(a===y.Links?"active":""),onClick:function(){return s(y.Links)},children:Object(v.jsx)(w.a,{i18nKey:"editor.help.links.title"})})]}),l]})})},W=function(){var e=Object(x.a)().t,t=Object(r.useState)(!1),n=Object(E.a)(t,2),c=n[0],i=n[1],a=Object(r.useCallback)((function(){return i(!1)}),[]);return Object(v.jsxs)(r.Fragment,{children:[Object(v.jsx)(N.a,{title:e("editor.documentBar.help"),className:"ml-2 text-secondary",size:"sm",variant:"outline-light",onClick:function(){return i(!0)},children:Object(v.jsx)(p.a,{icon:"question-circle"})}),Object(v.jsx)(V,{show:c,onHide:a})]})},q=n(27),J=n(185),Z=n(131),X=function(){var e=Object(m.a)();return Object(v.jsx)(o.a.Brand,{children:Object(v.jsxs)(q.Link,{to:"/intro",className:"text-secondary text-decoration-none d-flex align-items-center",children:[Object(v.jsx)(Z.c,{logoType:e?Z.b.WB_HORIZONTAL:Z.b.BW_HORIZONTAL,size:Z.a.SMALL}),Object(v.jsx)(J.a,{inline:!0})]})})},Q=n(64);function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},i=Object.keys(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function te(e,t){var n=e.title,c=e.titleId,i=ee(e,["title","titleId"]);return r.createElement("svg",$({height:512,viewBox:"0 0 135.46666 135.46666",width:512,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},i),n?r.createElement("title",{id:c},n):null,G||(G=r.createElement("g",{fill:"currentColor",transform:"translate(253.17277 890.86874)"},r.createElement("path",{d:"m-185.60701-890.86598c-1.20278.0405-2.35129.51236-3.23554 1.33104l-19.83931 18.35901c-2.0321 1.88196-2.16416 5.08233-.29441 7.12658 1.86949 2.04457 5.06645 2.17956 7.10004.29914l16.43678-15.21017 16.43678 15.21017c2.03361 1.88043 5.23055 1.74545 7.10004-.29914 1.86889-2.04514 1.73629-5.24555-.29677-7.12658l-19.83694-18.35901c-.96887-.89698-2.25281-1.37483-3.57067-1.33104z"}),r.createElement("path",{d:"m-205.48644-783.84278c-1.28698.0542-2.55509.59901-3.48983 1.62131-1.86975 2.04426-1.73769 5.24463.29441 7.12659l19.83931 18.359c.88425.81868 2.03276 1.29062 3.23554 1.33104 1.31786.0439 2.6018-.43406 3.57067-1.33104l19.83694-18.359c2.03306-1.88102 2.16566-5.08144.29677-7.12659-1.86949-2.04459-5.06643-2.17956-7.10004-.29913l-16.43678 15.21017-16.43678-15.21017c-1.01679-.94021-2.32321-1.37647-3.61021-1.32218z"}),r.createElement("path",{d:"m-185.49136-841.40292a18.267478 18.267478 0 0 0 -18.21562 18.26754 18.267478 18.267478 0 0 0 .23777 2.93583l22.52379-20.64169a18.267478 18.267478 0 0 0 -4.49402-.56168 18.267478 18.267478 0 0 0 -.0519 0zm18.08169 15.33288-22.5232 20.64052a18.267478 18.267478 0 0 0 4.49343.56168 18.267478 18.267478 0 0 0 18.26754-18.26754 18.267478 18.267478 0 0 0 -.23777-2.93466z",fillRule:"evenodd"}),r.createElement("path",{d:"m-124.79368-883.92129-126.14511 116.28534 4.95067 5.40084 126.14688-116.28534z"}))))}var ne,ce=r.forwardRef(te);n.p;function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function ie(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},i=Object.keys(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ae(e,t){var n=e.title,c=e.titleId,i=ie(e,["title","titleId"]);return r.createElement("svg",re({height:512,viewBox:"0 0 135.46666 135.46666",width:512,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},i),n?r.createElement("title",{id:c},n):null,ne||(ne=r.createElement("g",{fill:"currentColor"},r.createElement("path",{d:"m67.566309.00276674c-1.20278.040417-2.35129.512357-3.23555 1.33103706l-19.83929 18.3589962c-2.0321 1.881973-2.16417 5.082332-.29442 7.126588 1.8695 2.044576 5.06646 2.17955 7.10005.29913l16.43677-15.210163 16.43678 15.210163c2.03361 1.880432 5.23055 1.745458 7.10004-.29913 1.86889-2.045147 1.73629-5.24555-.29677-7.126588l-19.83693-18.3589962c-.96887-.89697906-2.25281-1.37483336-3.57068-1.33103706z"}),r.createElement("path",{d:"m47.686889 107.02594c-1.28698.0542-2.55509.59903-3.48984 1.62132-1.86975 2.04426-1.73768 5.24462.29442 7.12659l19.83929 18.359c.88426.81868 2.03277 1.29062 3.23555 1.33104 1.31787.0438 2.60181-.43406 3.57068-1.33104l19.83693-18.359c2.03306-1.88103 2.16566-5.08144.29677-7.12659-1.86949-2.0446-5.06643-2.17956-7.10004-.29913l-16.43678 15.21016-16.43677-15.21016c-1.01679-.94021-2.32322-1.37647-3.61021-1.32219z"}),r.createElement("circle",{cx:67.733864,cy:67.733284,fillRule:"evenodd",r:18.267477}))))}var se,oe=r.forwardRef(ae);n.p,n(855);!function(e){e[e.SYNCED=0]="SYNCED",e[e.UNSYNCED=1]="UNSYNCED"}(se||(se={}));var le,je=function(){var e=Object(j.b)((function(e){return e.editorConfig.syncScroll}))?se.SYNCED:se.UNSYNCED,t=Object(x.a)().t;return Object(v.jsxs)(h.a,{type:"radio",defaultValue:[],name:"sync-scroll",className:"ml-2 sync-scroll-buttons",value:e,children:[Object(v.jsx)(O.a,{variant:"outline-secondary",title:t("editor.appBar.syncScroll.enable"),onChange:function(){return Object(Q.g)(!0)},value:se.SYNCED,children:Object(v.jsx)(oe,{})}),Object(v.jsx)(O.a,{variant:"outline-secondary",title:t("editor.appBar.syncScroll.disable"),onChange:function(){return Object(Q.g)(!1)},value:se.UNSYNCED,children:Object(v.jsx)(ce,{})})]})},de=n(137),be=n(23),ue=function(){var e=Object(x.a)().t,t=Object(be.m)().id;return Object(v.jsx)(q.Link,{to:"/p/".concat(t),target:"_blank",children:Object(v.jsx)(N.a,{title:e("editor.documentBar.slideMode"),className:"ml-2 text-secondary",size:"sm",variant:"outline-light",children:Object(v.jsx)(p.a,{icon:"television"})})})},he=function(){var e=Object(x.a)().t,t=Object(be.m)().id;return Object(v.jsx)(q.Link,{to:"/s/".concat(t),target:"_blank",children:Object(v.jsx)(N.a,{title:e("editor.documentBar.readOnlyMode"),className:"ml-2 text-secondary",size:"sm",variant:"outline-light",children:Object(v.jsx)(p.a,{icon:"file-text-o"})})})},Oe=function(){return Object(x.a)(),Object(v.jsxs)(N.a,{className:"mx-2",size:"sm",variant:"primary",children:[Object(v.jsx)(p.a,{icon:"plus"})," ",Object(v.jsx)(w.a,{i18nKey:"editor.appBar.new"})]})};!function(e){e[e.BASIC=0]="BASIC",e[e.EDITOR=1]="EDITOR"}(le||(le={}));var xe=function(e){var t=e.mode,n=Object(j.b)((function(e){return!!e.user})),c=Object(j.b)((function(e){return e.noteDetails.frontmatter}),s.a);return Object(v.jsxs)(o.a,{bg:"light",children:[Object(v.jsxs)(l.a,{className:"mr-auto d-flex align-items-center",children:[Object(v.jsx)(X,{}),Object(v.jsxs)(d.a,{condition:t===le.EDITOR,children:[Object(v.jsx)(k.b,{}),Object(v.jsx)(je,{})]}),Object(v.jsx)(g,{}),Object(v.jsxs)(d.a,{condition:t===le.EDITOR,children:[Object(v.jsx)(d.a,{condition:c.type===de.c.SLIDE,children:Object(v.jsx)(ue,{})}),Object(v.jsx)(d.a,{condition:c.type!==de.c.SLIDE,children:Object(v.jsx)(he,{})}),Object(v.jsx)(W,{})]})]}),Object(v.jsxs)(l.a,{className:"d-flex align-items-center text-secondary",children:[Object(v.jsx)(Oe,{}),Object(v.jsx)(d.a,{condition:!n,children:Object(v.jsx)(b.a,{size:"sm"})}),Object(v.jsx)(d.a,{condition:n,children:Object(v.jsx)(u.a,{})})]})]})}},775:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return j}));n(0);var c,r=n(55),i=n(32),a=n(157),s=n(598),o=n(1),l=function(e){var t=e.time;return Object(o.jsx)("time",{className:"mx-1",title:t.toFormat("DDDD T"),dateTime:t.toString(),children:t.toRelative()})};!function(e){e[e.CREATED=0]="CREATED",e[e.EDITED=1]="EDITED"}(c||(c={}));var j=function(e){var t=e.time,n=e.mode,j=e.userName,d=e.profileImageSrc,b=e.size;Object(r.a)();var u=n===c.CREATED?"editor.modal.documentInfo.created":"editor.modal.documentInfo.edited",h=n===c.CREATED?"plus":"pencil";return Object(o.jsx)(s.a,{icon:h,size:b,children:Object(o.jsxs)(i.a,{i18nKey:u,children:[Object(o.jsx)(a.a,{photo:d,additionalClasses:"font-style-normal bold font-weight-bold",name:j,size:b?"lg":void 0}),Object(o.jsx)(l,{time:t})]})})}},854:function(e,t,n){},855:function(e,t,n){}}]);
//# sourceMappingURL=5.66a23f75.chunk.js.map