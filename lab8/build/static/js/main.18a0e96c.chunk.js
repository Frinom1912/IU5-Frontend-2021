(this.webpackJsonplab8=this.webpackJsonplab8||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(6),l=c.n(i),r=(c(13),c(7)),o=c(8),d=(c(5),c(0));var s=function(e){var t=e.id,c=e.val,n=e.check,a=e.AddNear,i=e.SaveVal,l="String uncrossed";return 1===n&&(l="String crossed"),Object(d.jsx)("textarea",{type:"text",id:t+"t",onKeyDown:a,onChange:i,className:l,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443",value:c})};var h=function(e){var t=e.id,c=e.Change,n=e.check,a=""===e.val;return Object(d.jsx)("input",{className:"cbx",type:"checkbox",onChange:function(){return c(t)},disabled:a,defaultChecked:n})},u={id:0,val:"",check:0};var v=function(){var e=a.a.useState([]),t=Object(o.a)(e,2),c=t[0],n=t[1];function i(e){localStorage.clear(),e.forEach((function(e,t){localStorage.setItem("id ".concat(t.toString()),e.id),localStorage.setItem("val ".concat(t.toString()),e.val),localStorage.setItem("check ".concat(t.toString()),e.check)}))}var l=[];if(0===c.length)if(0===localStorage.length)n([u]);else{for(var v=0,f=0;Number(f)!==Number(localStorage.length/3);v++)l.push({id:Number(localStorage.getItem("id ".concat(f.toString()))),val:localStorage.getItem("val ".concat(f.toString())),check:Number(localStorage.getItem("check ".concat(f.toString())))}),f++;n(l)}function g(e){for(var t=e[0].id,c=1;c<e.length;c++)e[c].id>t&&(t=e[c].id);return t}function b(e){if("Enter"===e.key){e.preventDefault();var t=e.target.id,a=[];c.forEach((function(e){a.push(e),e.id===parseInt(t)&&a.push({id:g(c)+1,val:"",check:0})})),n(a)}}function j(e){var t=e.target.id;t=parseInt(t.slice(0,-1));var a=c.map((function(c){return t===c.id?{id:c.id,val:e.target.value,check:c.check}:{id:c.id,val:c.val,check:c.check}}));n(a),i(a)}function k(e){var t,a=document.getElementById(e.toString());""!==a.childNodes[1].value&&(a.childNodes[0].checked?(a.childNodes[1].style.textDecoration="line-through",a.childNodes[1].style.color="grey",t=1):(a.childNodes[1].style.textDecoration="none",a.childNodes[1].style.color="black",t=0));var l=c.map((function(c){return e===c.id?{id:c.id,val:c.val,check:t}:{id:c.id,val:c.val,check:c.check}}));n(l),i(l)}return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"Title",children:"ToDoList"}),Object(d.jsx)("form",{className:"List",id:"form",children:Object(d.jsx)("ul",{children:c.map((function(e){return Object(d.jsxs)("li",{id:e.id,children:[Object(d.jsx)(h,{id:e.id,Change:k,check:e.check,val:e.val}),Object(d.jsx)(s,{id:e.id,val:e.val,check:e.check,AddNear:b,SaveVal:j}),Object(d.jsx)("button",{type:"button",className:"DeleteLine",onClick:function(){return function(e){var t=c.filter((function(t){return t.id!==e}));n(t),i(t)}(e.id)},children:Object(d.jsx)("i",{className:"fa fa-close"})})]},e.id)}))})}),Object(d.jsxs)("button",{type:"button",className:"AddLine",onClick:function(){return function(){if(0!==c.length){var e=[].concat(Object(r.a)(c),[{id:g(c)+1,val:"",check:0}]);n(e)}else n([{id:0,val:"",check:0}])}()},children:[Object(d.jsx)("i",{className:"fa fa-plus"})," ","\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443"]}),Object(d.jsx)("span",{className:"AddLine",children:"\u0414\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u0432 \u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0435 \u0441\u043f\u0438\u0441\u043a\u0430, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 enter, \u043d\u0430\u0445\u043e\u0434\u044f\u0441\u044c \u0432 \u043e\u0434\u043d\u043e\u0439 \u0438\u0437 \u0437\u0430\u0434\u0430\u0447"}),Object(d.jsx)("span",{className:"AddLine",children:"\u041f\u0443\u0441\u0442\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u044b \u043f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b"})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,l=t.getTTFB;c(e),n(e),a(e),i(e),l(e)}))};l.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),f()},5:function(e,t,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.18a0e96c.chunk.js.map