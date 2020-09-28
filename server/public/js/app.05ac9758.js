(function(e){function t(t){for(var r,o,u=t[0],s=t[1],i=t[2],f=0,b=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&b.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(b.length)b.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2dc7":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=n("cf05"),c=n.n(a),o=Object(r["f"])("img",{alt:"Vue logo",src:c.a},null,-1);function u(e,t,n,a,c,u){var s=Object(r["k"])("TaskComponent");return Object(r["g"])(),Object(r["c"])(r["a"],null,[o,Object(r["f"])(s)],64)}n("99af");var s=Object(r["o"])("data-v-1321e87a");Object(r["i"])("data-v-1321e87a");var i={class:"container"},l=Object(r["f"])("h1",null,"Latest Tasks",-1),f={class:"create-task"},b=Object(r["f"])("label",{for:"create-task"},"Say something...",-1),p=Object(r["f"])("hr",null,null,-1),d={key:0,class:"error"},O={class:"tasks-container"},j={class:"text"};Object(r["h"])();var k=s((function(e,t,n,a,c,o){return Object(r["g"])(),Object(r["c"])("div",i,[l,Object(r["f"])("div",f,[b,Object(r["n"])(Object(r["f"])("input",{type:"text",id:"create-task","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.text=e}),placeholder:"Create a task"},null,512),[[r["m"],c.text]]),Object(r["f"])("button",{onClick:t[2]||(t[2]=function(){return o.createTask.apply(o,arguments)})},"Create Task")]),p,c.error?(Object(r["g"])(),Object(r["c"])("p",d,Object(r["l"])(c.error),1)):Object(r["d"])("",!0),Object(r["f"])("div",O,[(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(c.tasks,(function(e,t){return Object(r["g"])(),Object(r["c"])("div",{class:"task1",key:e._id,item:e,index:t,onDblclick:function(t){return o.deleteTask(e._id)}},[Object(r["e"])(Object(r["l"])("".concat(e.createdAt.getDate(),"/").concat(e.createdAt.getMonth(),"/").concat(e.createdAt.getFullYear()))+" ",1),Object(r["f"])("p",j,Object(r["l"])(e.text),1)],40,["item","index","onDblclick"])})),128))])])})),v=(n("96cf"),n("1da1")),g=(n("d81d"),n("d3b7"),n("5530")),h=n("d4ec"),m=n("bee2"),x=n("bc3a"),y=n.n(x),w="api/tasklist/",T=function(){function e(){Object(h["a"])(this,e)}return Object(m["a"])(e,null,[{key:"getTasks",value:function(){return new Promise((function(e,t){y.a.get(w).then((function(t){var n=t.data;e(n.map((function(e){return Object(g["a"])(Object(g["a"])({},e),{},{createdAt:new Date(e.createdAt)})})))})).catch((function(e){t(e)}))}))}},{key:"insertTask",value:function(e){return y.a.post(w,{text:e})}},{key:"deleteTask",value:function(e){return y.a.delete("".concat(w).concat(e))}}]),e}(),_=T,P={name:"TaskService",data:function(){return{tasks:[],error:"",text:""}},created:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.getTasks();case 3:e.tasks=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.error=t.t0.message;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},methods:{createTask:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,_.insertTask(e.text);case 2:return t.next=4,_.getTasks();case 4:e.tasks=t.sent;case 5:case"end":return t.stop()}}),t)})))()},deleteTask:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,_.deleteTask(e);case 2:return n.next=4,_.getTasks();case 4:t.tasks=n.sent;case 5:case"end":return n.stop()}}),n)})))()}}};n("ab69");P.render=k,P.__scopeId="data-v-1321e87a";var S=P,A={name:"App",components:{TaskComponent:S}};n("64be");A.render=u;var R=A;Object(r["b"])(R).mount("#app")},"64be":function(e,t,n){"use strict";n("c894")},ab69:function(e,t,n){"use strict";n("2dc7")},c894:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.05ac9758.js.map