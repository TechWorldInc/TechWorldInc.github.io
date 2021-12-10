var J=Object.defineProperty;var j=(d,e,t)=>e in d?J(d,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[e]=t;var x=(d,e,t)=>(j(d,typeof e!="symbol"?e+"":e,t),t);import{s as P,l as q,c as B,j as G,t as R}from"./vendor.77f03656.js";const Y=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}};Y();class z{constructor(){x(this,"toastTimeout",0)}newError(e){const t=e.id,n=e.message;let o=document.getElementById(t);o||(o=document.getElementById("page-allnotes")||document.createElement("div")),o.innerHTML="";const s=document.createElement("div"),a=document.createElement("span"),r=document.createElement("h3"),l=document.createTextNode(n),c=document.createElement("button");c.innerText=e.buttonCaption,c.addEventListener("click",e.buttonAction),a.className="material-icons big-x2",a.innerText=e.materialIcon,s.className="centered-absolute",r.append(l),s.append(a,r,c),o.append(s)}toast(e){clearTimeout(this.toastTimeout),this.hideToast(),setTimeout(()=>{const t=e.title,n=e.text,o=e.delay||0,s=document.getElementById("toast-div")||document.createElement("div"),a=document.getElementById("toast-title")||document.createElement("div"),r=document.getElementById("toast-content")||document.createElement("div");s.classList.remove("hidden"),a.innerText=t,r.innerText=n,o&&(this.toastTimeout=setTimeout(this.hideToast,o))},250)}init(){const e=document.createElement("div"),t=document.createElement("h3"),n=document.createElement("p");e.className="toast hidden",e.id="toast-div",t.innerText="{{title}}",t.className="nomargin",t.id="toast-title",n.innerText="{{content}}",n.className="nomargin",n.id="toast-content",e.append(t,n),document.body.append(e)}hideToast(){(document.getElementById("toast-div")||document.createElement("div")).classList.add("hidden")}}const h=new z;var v;(function(d){d[d.darkmode=0]="darkmode",d[d.lightmode=1]="lightmode"})(v||(v={}));const S=new Map([["default",{name:"One Dark Pro",author:"Atom",colors:{red:"#e06c75",green:"#98c379",yellow:"#e5c07b",blue:"#61afef",purple:"#c678dd",aqua:"#56b6c2",orange:"#c48e49",gray:"#51565f",fg:"#abb2bf",bg:"#232936"},userSelectable:!0,default:!0,scheme:0}],["gruvboxdark",{name:"Gruvbox Dark",author:"GitHub/morhetz",colors:{red:"#cc241d",green:"#98971a",yellow:"#d79921",blue:"#458588",purple:"#b16286",aqua:"#689d6a",orange:"#d65d0e",gray:"#504945",fg:"#ebdbb2",bg:"#282828"},userSelectable:!0,scheme:0}],["nord",{name:"Nord",author:"Arctic Ice Studios",colors:{red:"#bf616a",green:"#a3be8b",yellow:"#ebcb8b",blue:"#5e81ac",purple:"#b48ead",aqua:"#8fbcbb",orange:"#d0a770",gray:"rgb(109,109,109)",fg:"rgb(216,222,233)",bg:"rgb(46,52,64)"},userSelectable:!0,scheme:0}],["deepocean",{name:"Deep Ocean",author:"Material Theme",colors:{red:"#f07178",green:"#c3e88d",yellow:"#ffcb6b",blue:"#82aaff",purple:"#c792ea",aqua:"#89ddff",orange:"#f78c6c",gray:"#546e7a",fg:"#B0BEC5",bg:"#263238"},userSelectable:!0,scheme:0}],["dracula",{name:"Dracula",author:"Zeno Rocha",colors:{red:"#ff5555",green:"#50FA7B",yellow:"#F1FA8C",blue:"#BD93F9",purple:"#BD93F9",aqua:"#8BE9FD",orange:"#FFB86C",gray:"#555",fg:"#A4A4A1",bg:"#282A36"},userSelectable:!0,scheme:0}],["nightowl",{name:"Night Owl",author:"GitHub/sdras",colors:{red:"#EF5350",green:"#22da6e",yellow:"#c5e478",blue:"#82AAFF",purple:"#C792EA",aqua:"#21c7a8",orange:"#FFB458",gray:"#637777",fg:"#d6deeb",bg:"#011627"},userSelectable:!0,scheme:0}],["monokaipro",{name:"Monokai Extended",author:"SuperPaintman",colors:{red:"#F92672",green:"#A6E22E",yellow:"#E6DB74",blue:"#66D9EF",purple:"#AE81FF",aqua:"#21c7a8",orange:"#FFB458",gray:"#75715E",fg:"#F8F8F2",bg:"#272822"},userSelectable:!0,scheme:0}],["palenight",{name:"Pale Night",author:"Olaolu Olawuyi",colors:{red:"#ff5572",green:"#a9c77d",yellow:"#FFCB6B",blue:"#82AAFF",purple:"#C792EA",aqua:"#89DDFF",orange:"#FFB42A",gray:"#697098",fg:"#BFC7D5",bg:"#292D3E"},userSelectable:!0,scheme:0}],["atomonedark",{name:"Atom One Dark",author:"Atom",colors:{red:"#E06C75",green:"#98C379",yellow:"#E5C07B",blue:"#61AFEF",purple:"#C678DD",aqua:"#56B6C2",orange:"#c48e49",gray:"#51565f",fg:"#ABB2BF",bg:"#282C34"},userSelectable:!0,scheme:0}],["gruvboxlight",{name:"Gruvbox Light",author:"GitHub/morhetz",colors:{red:"#cc241d",green:"#98971a",yellow:"#d79921",blue:"#458588",purple:"#b16286",aqua:"#689d6a",orange:"#d65d0e",gray:"#bdae93",fg:"#3c3836",bg:"#fbf1c7"},userSelectable:!0,scheme:1}],["onelightpro",{name:"One Light Pro",author:"Atom",colors:{red:"#e06c75",green:"#98c379",yellow:"#e5c07b",blue:"#61afef",purple:"#c678dd",aqua:"#56b6c2",orange:"#c48e49",gray:"#51565f",fg:"#232936",bg:"#dee5ef"},userSelectable:!0,default:!0,scheme:1}]]);class K{refreshAll(e){var r,l,c;const t=I.getThemes(),n=document.querySelectorAll("div#page-themeselector #darkmode")[0],o=document.querySelectorAll("div#page-themeselector #lightmode")[0];e&&(n.innerHTML="",o.innerHTML="");let s=0,a=0;for(let i=0;i<t.length;i++){const m=document.createElement("div"),f=document.createElement("h3"),A=document.createTextNode((r=t[i][1])==null?void 0:r.name),C=document.createElement("p"),_=document.createTextNode(`By ${(l=t[i][1])==null?void 0:l.author}`),N=document.createElement("button"),F=document.createElement("div"),L=document.createElement("span");localStorage.getItem("theme")&&localStorage.getItem("theme")==t[i][0]&&(L.className="material-icons green",L.innerText="check",m.append(L)),N.className="apply",N.innerText=localStorage.getItem("theme")==t[i][0]?"Applied":"Apply",N.addEventListener("click",()=>{I.applyTheme(t[i][0],!0)}),localStorage.getItem("theme")==t[i][0]&&N.setAttribute("disabled","true"),F.className="color-preview";const H=(c=S.get(t[i][0]))==null?void 0:c.colors;for(const U in H){const M=document.createElement("div");M.className="segment",M.style.background=H[U],F.append(M)}m.className="theme",f.className="header",f.append(A),C.className="author",C.append(_),m.append(f,C,N,F),t[i][1].userSelectable==!0&&(v[t[i][1].scheme]=="darkmode"?(s++,n.append(m),s==3&&(s=0,n.append(document.createElement("br")))):v[t[i][1].scheme]=="lightmode"&&(a++,o.append(m),a==3&&(a=0,o.append(document.createElement("br")))))}}}const $=new K;class V{constructor(){x(this,"loadedTheme","")}applyTheme(e,t){var n;if(S.has(e)){const o="body *, body { ",s=this.getBottomStyleSheet();for(let i=0;i<s.cssRules.length;i++)s.cssRules[i].cssText.startsWith(o+"--")&&this.getBottomStyleSheet().deleteRule(i);const a=S.get(e),r=a==null?void 0:a.colors;let l="";for(const i in r)l+=`--${i}: ${r[i]}; `;((n=S.get(e))==null?void 0:n.scheme)==v.lightmode&&(l+="--topbar-bg: #0002; --sidebar-bg: #00000011; --input-bg: #00000006");let c=`${o}${l.trimEnd()} }`;this.getBottomStyleSheet().insertRule(c,0),t&&localStorage.setItem("theme",e),$.refreshAll(!0)}else{const o={title:"Unable to load theme",text:`Failed to load theme "${e}": it does not exist.

The default theme has been loaded.`,delay:3e3};h.toast(o),this.applyTheme("default",!0)}}getThemes(){let e=[];for(let t of S)e.push(t);return e}init(){document.body.append(document.createElement("style"));let e=localStorage.getItem("theme");this.applyTheme(e,!1)}getBottomStyleSheet(){return document.styleSheets[document.styleSheets.length-1]}}const I=new V;class W{registerColorClasses(){for(let e in u){const t=u[e],n=`body .${t} { color: var(--${t}); }`;try{I.getBottomStyleSheet().insertRule(n,I.getBottomStyleSheet().cssRules.length)}catch{}}}}var u;(function(d){d[d.red=0]="red",d[d.green=1]="green",d[d.yellow=2]="yellow",d[d.blue=3]="blue",d[d.purple=4]="purple",d[d.aqua=5]="aqua",d[d.gray=6]="gray",d[d.orange=7]="orange"})(u||(u={}));const Z=new W,y=new Map([["home",{dispName:"Home",materialIcon:"home",onSidebar:!0,color:u.blue,default:!0,addBreak:!0,onHome:!1,inTopBar:!0}],["allnotes",{dispName:"Notes",materialIcon:"description",onSidebar:!0,color:u.purple,hasCountableContent:!0,onHome:!0}],["pinned",{dispName:"Pinned Notes",materialIcon:"bookmark",onSidebar:!0,color:u.green,addBreak:!0,hasCountableContent:!0,onHome:!0}],["task",{dispName:"Tasks",materialIcon:"insert_drive_file",onSidebar:!0,color:u.yellow,hasCountableContent:!0,onHome:!0}],["unftasks",{dispName:"Unfinished Tasks",materialIcon:"file_open",onSidebar:!0,color:u.orange,hasCountableContent:!0,onHome:!0}],["fintasks",{dispName:"Finished Tasks",materialIcon:"task",onSidebar:!0,color:u.green,hasCountableContent:!0,addBreak:!0,onHome:!0}],["themeselector",{dispName:"Themes",materialIcon:"palette",onSidebar:!0,color:u.purple,onHome:!0,inTopBar:!0}],["error",{dispName:"Error",materialIcon:"error",onSidebar:!1,color:u.red}],["trash",{dispName:"Trash",materialIcon:"delete",onSidebar:!0,color:u.red,inTopBar:!0}]]);class Q{switch(e,t){var r;const n=document.getElementById(`page-${e}`),o=document.querySelectorAll("#pages>button");for(let l=0;l<o.length;l++)if(o[l].className="option page",o[l].classList.add(o[l]==t?"selected":"unselected"),o[l]==t)o[l].children[0].classList.add(u[y.get(e).color]);else for(const c in u)o[l].children[0].classList.remove(u[c]);let s=`Page Not Found: ${y.get(e).dispName||"Unknown Page"}`,a="var(--red)";if(n&&y.has(e)){const l=document.querySelectorAll("div.page");for(let c=0;c<l.length;c++){if(l[c]!=n){l[c].classList.add("hidden");continue}l[c].classList.remove("hidden")}a=`var(--${u[(r=y.get(e))==null?void 0:r.color]})`,s=y.get(e).dispName,document.title=`vTDx - ${y.get(e).dispName}`}else{this.switch("error");const l={message:"Sorry, that page doesn't seem to exist.",materialIcon:"web_asset_off",buttonCaption:"Go Home",buttonAction:()=>{this.switch("home",document.getElementById("button-page-home"))},id:"page-error"};h.newError(l),document.getElementById("page-dot").style.color=a,document.getElementById("page-disp").innerText=s,document.title="vTDx - Page Not Found"}document.getElementById("page-dot").style.color=a,document.getElementById("page-disp").innerText=s}}const k=new Q;class X{toHTML(e){return new P.Converter().makeHtml(e)}toMD(e){return new P.Converter().makeMarkdown(e)}}const E=new X;class ee{countFinished(){var n,o;let e=0;const t=this.getTasks();for(let s=0;s<t.length;s++)((n=t[s])==null?void 0:n.finished)&&!((o=t[s])==null?void 0:o.deleted)&&e++;return e}countUnfinished(){const e=this.countFinished();return this.countTasks()-e}countTasks(){var n;let e=0;const t=this.getTasks();for(let o=0;o<t.length;o++)((n=t[o])==null?void 0:n.deleted)||e++;return e}populateTaskPage(e,t){var n;if(t||(t=document.getElementById("page-task")||document.createElement("div")),t){e&&(t.innerHTML="");const o=this.getTasks();let s=0;for(let a=0;a<o.length;a++)((n=o[a])==null?void 0:n.deleted)||(this.displayTask(a,t),s++);if(!s){const a={materialIcon:"broken_image",message:"You have no tasks",id:"page-task",buttonCaption:"Create a task",buttonAction:()=>{const r={windowTitle:"Create new Task",nodeTitle:"Content",hideTitleField:!1,hideContentField:!0,buttonText:"Create task",buttonAction:l=>{this.createTask(l),this.refreshAll()},clearFields:!0};T.show(r)}};h.newError(a)}}}populateUnFinishedTasksPage(e,t){var n;if(t||(t=document.getElementById("page-unftasks")||document.createElement("div")),t){e&&(t.innerHTML="");const o=this.getTasks();let s=0;for(let a=0;a<o.length;a++)!o[a].finished&&!((n=o[a])==null?void 0:n.deleted)&&(this.displayTask(a,t),s++);if(!s){const a={materialIcon:o.length?"check":"broken_image",message:o.length?"All your tasks are finished!":"You don't have any tasks!",id:"page-unftasks",buttonCaption:"Goto your tasks",buttonAction:()=>{k.switch("task",document.getElementById("button-page-task")||document.createElement("div"))}};h.newError(a)}}}populateFinishedTasksPage(e,t){var n;if(t||(t=document.getElementById("page-fintasks")||document.createElement("div")),t){e&&(t.innerHTML="");const o=this.getTasks();let s=0;for(let a=0;a<o.length;a++)o[a].finished&&!((n=o[a])==null?void 0:n.deleted)&&(this.displayTask(a,t),s++);if(!s){const a={materialIcon:o.length?"error_outline":"broken_image",message:o.length?"You haven't completed any of your tasks!":"You don't have any tasks!",id:"page-fintasks",buttonCaption:"Goto your tasks",buttonAction:()=>{k.switch("task",document.getElementById("button-page-task")||document.createElement("div"))}};h.newError(a)}}}createTask(e){const t=this.getTasks(),n={text:e,finished:!1,deleted:!1};t.push(n),localStorage.setItem("taskstore",JSON.stringify(t))}displayTask(e,t){var o;const n=this.getTasks();if(e<=n.length){t||(t=document.getElementById("page-task")||document.createElement("div"));const s=document.createElement("div"),a=document.createElement("p"),r=document.createElement("button"),l=document.createElement("span"),c=document.createElement("button"),i=document.createElement("span"),m=document.createElement("button"),f=document.createElement("span");a.className="header",r.className="delete",r.title="Delete task",r.addEventListener("click",()=>{this.deleteTask(e),this.refreshAll()}),c.className="finish",c.title=`${n[e].finished?"Mark not done":"Mark done"}`,c.addEventListener("click",()=>{this.toggletaskFinished(e),this.refreshAll()}),a.addEventListener("click",()=>{this.toggletaskFinished(e),this.refreshAll()}),m.className="edit",m.title="Edit task",m.addEventListener("click",()=>{this.editTask(e),this.refreshAll()}),i.className="material-icons",i.innerText=`${n[e].finished?"check_box":"check_box_outline_blank"}`,l.className="material-icons",l.innerText="delete",f.className="material-icons",f.innerText="edit",a.innerHTML=E.toHTML((o=n[e])==null?void 0:o.text),r.append(l),c.append(i),m.append(f),s.className="task",s.append(a,c,r,m),t.append(s)}}getTasks(){return JSON.parse(localStorage.getItem("taskstore"))||[]}deleteTask(e){const t=this.getTasks();e<=t.length&&(w.moveTaskToTrash(e),h.toast({text:`Task #${e+1} moved to trash.`,title:"",delay:3e3}))}refreshAll(){this.populateTaskPage(!0),this.populateUnFinishedTasksPage(!0),this.populateFinishedTasksPage(!0);const e=document.querySelector("button#button-page-task span.counter")||document.createElement("div"),t=document.querySelector("button#button-page-fintasks span.counter")||document.createElement("div"),n=document.querySelector("button#button-page-unftasks span.counter")||document.createElement("div");e.innerText=`${this.countTasks()}`,t.innerText=`${this.countFinished()}`,n.innerText=`${this.countUnfinished()}`}toggletaskFinished(e){var n;const t=this.getTasks();e<=t.length&&(((n=t[e])==null?void 0:n.finished)?this.markUnfinished(e):this.markFinished(e))}markUnfinished(e){const t=this.getTasks();e<=t.length&&(t[e].finished=!1,h.toast({text:`Marked task #${e+1} as unfinished.`,title:"",delay:3e3})),localStorage.setItem("taskstore",JSON.stringify(t))}markFinished(e){const t=this.getTasks();e<=t.length&&(t[e].finished=!0,h.toast({text:`Marked task #${e+1} as finished.`,title:"",delay:3e3})),localStorage.setItem("taskstore",JSON.stringify(t))}completeAll(){const e=this.getTasks();for(let t=0;t<e.length;t++)e[t].finished=!0;h.toast({text:"Marked all tasks as finished.",title:"",delay:3e3}),localStorage.setItem("taskstore",JSON.stringify(e)),this.refreshAll()}editTask(e){var o;const t=this.getTasks(),n={windowTitle:"Edit Task",nodeTitle:"Content",hideTitleField:!1,hideContentField:!0,buttonText:"edit Task",titleFieldText:(o=t[e])==null?void 0:o.text,buttonAction:s=>{var r,l;const a={text:s,finished:(r=t[e])==null?void 0:r.finished,deleted:(l=t[e])==null?void 0:l.deleted};t[e]=a,localStorage.setItem("taskstore",JSON.stringify(t)),g.refreshAll()},clearFields:!1};T.show(n)}}const g=new ee;class te{moveTaskToTrash(e){const t=g.getTasks();e<=t.length&&(t[e].deleted=!0,localStorage.setItem("taskstore",JSON.stringify(t))),this.populateTrashPage()}moveNoteToTrash(e){const t=p.getNotes();e<=t.length&&(t[e].deleted=!0,localStorage.setItem("notestore",JSON.stringify(t))),this.populateTrashPage()}restoreNoteFromTrash(e){const t=p.getNotes();e<=t.length&&(t[e].deleted=!1,localStorage.setItem("notestore",JSON.stringify(t))),this.populateTrashPage(),p.refreshAll()}restoreTaskFromTrash(e){const t=g.getTasks();e<=t.length&&(t[e].deleted=!1,console.log(t[e]),localStorage.setItem("taskstore",JSON.stringify(t))),this.populateTrashPage(),p.refreshAll()}populateTrashPage(){const e=document.getElementById("page-trash"),t=g.getTasks(),n=p.getNotes(),o=document.createElement("h2"),s=document.createElement("h2"),a=document.createElement("p"),r=document.createElement("p");let l=0,c=0;e.innerText="",o.innerText="Deleted Notes",s.innerText="Deleted Tasks",a.innerText="There are no deleted notes.",r.innerText="There are no deleted tasks.",e.append(s);for(let i=0;i<t.length;i++)t[i].deleted&&(this.displayTrashTask(i,e),l++,s.style.display="");l||(s.style.display="none"),e.append(o);for(let i=0;i<n.length;i++)n[i].deleted&&(this.displayTrashNote(i,e),c++,s.style.display="");if(c||(o.style.display="none"),!c&&!l){const i={materialIcon:"delete_sweep",message:"Trash is empty",id:"page-trash",buttonCaption:"Go Home",buttonAction:()=>{k.switch("home")}};h.newError(i)}}displayTrashNote(e,t){t||(t=document.getElementById("page-trash")||document.createElement("div"));const n=p.getNotes(),o=document.createElement("div"),s=document.createElement("h3"),a=document.createElement("p"),r=document.createElement("button"),l=document.createElement("span"),c=document.createElement("button"),i=document.createElement("span");s.className="header",a.className="content",r.className="delete",r.title="Restore Note",r.addEventListener("click",()=>{this.restoreNoteFromTrash(e),p.refreshAll()}),l.className="material-icons",l.innerText="restore_from_trash",c.className="pin unpin",c.title="Delete Note Forever",c.addEventListener("click",()=>{this.deleteNoteForever(e),p.refreshAll()}),i.className="material-icons",i.innerText="delete_forever",c.append(i),s.innerHTML=E.toHTML(n[e].title),a.innerHTML=E.toHTML(n[e].content),r.append(l),o.className="note",o.append(s,a,r,c),t.append(o),document.querySelectorAll("code.ts.language-ts").forEach(m=>{q.highlightElement(m)})}displayTrashTask(e,t){t||(t=document.getElementById("page-trash")||document.createElement("div"));const n=g.getTasks(),o=document.createElement("div"),s=document.createElement("h3"),a=document.createElement("button"),r=document.createElement("span"),l=document.createElement("button"),c=document.createElement("span");s.className="header",a.className="delete",a.title="Restore Task",a.addEventListener("click",()=>{this.restoreTaskFromTrash(e),g.refreshAll()}),r.className="material-icons",r.innerText="restore_from_trash",l.className="edit",l.title="Edit task",l.addEventListener("click",()=>{this.deleteTaskForever(e),g.refreshAll()}),c.className="material-icons",c.innerText="delete_forever",l.append(c),s.innerHTML=E.toHTML(n[e].text),a.append(r),o.className="task",o.append(s,a,l),t.append(o),document.querySelectorAll("code.ts.language-ts").forEach(i=>{q.highlightElement(i)})}init(){this.populateTrashPage()}deleteNoteForever(e){const t=p.getNotes();e<=t.length&&t.splice(e,1),localStorage.setItem("notestore",JSON.stringify(t)),this.populateTrashPage()}deleteTaskForever(e){const t=g.getTasks();e<=t.length&&t.splice(e,1),localStorage.setItem("taskstore",JSON.stringify(t)),this.populateTrashPage()}emptyTrash(){const e=g.getTasks(),t=p.getNotes();for(let n=0;n<e.length;n++)this.deleteTaskForever(n);for(let n=0;n<t.length;n++)this.deleteNoteForever(n);if(this.populateTrashPage(),this.countDeletedNotes()+this.countDeletedTasks()>0)this.emptyTrash();else{const n={title:"",text:"Trash emptied.",delay:3e3};h.toast(n)}}countDeletedTasks(){let e=0;const t=g.getTasks();for(let n=0;n<t.length;n++)t[n].deleted&&e++;return e}countDeletedNotes(){let e=0;const t=p.getNotes();for(let n=0;n<t.length;n++)t[n].deleted&&e++;return e}}const w=new te;class ne{countPinned(){let e=0;const t=this.getNotes();for(let n=0;n<t.length;n++)t[n].pinned&&!t[n].deleted&&e++;return e}countUnpinned(){return this.getNotes().length-this.countPinned()}countNotes(){let e=0;const t=this.getNotes();for(let n=0;n<t.length;n++)t[n].deleted||e++;return e}populateAllNotes(e,t){var s;t||(t=document.getElementById("page-allnotes")||document.createElement("div")),e&&(t.innerHTML="");const n=this.getNotes();let o=0;for(let a=0;a<n.length;a++)((s=n[a])==null?void 0:s.deleted)||(this.displayNote(a,t),o++);if(!o){const a={materialIcon:"description",message:"You have no notes.",id:"page-allnotes",buttonCaption:"Create a note",buttonAction:()=>{const r={windowTitle:"Create new Note",nodeTitle:"Title",hideTitleField:!1,hideContentField:!1,buttonText:"Create note",buttonAction:(l,c)=>{p.createNote(l,c),p.refreshAll()},clearFields:!0};T.show(r)}};h.newError(a)}}populatePinnedNotes(e,t){t||(t=document.getElementById("page-pinned")||document.createElement("div")),e&&(t.innerHTML="");const n=this.getNotes();let o=0;for(let s=0;s<n.length;s++)n[s].pinned&&n[s].deleted&&(this.displayNote(s,t),o++);if(!o){const s={materialIcon:"bookmark",message:"You have no pinned notes.",id:"page-pinned",buttonCaption:"Goto your notes",buttonAction:()=>{k.switch("allnotes",document.getElementById("button-page-allnotes")||document.createElement("div"))}};h.newError(s)}}refreshAll(){this.populateAllNotes(!0),this.populatePinnedNotes(!0);const e=document.querySelector("button#button-page-allnotes span.counter")||document.createElement("div"),t=document.querySelector("button#button-page-pinned span.counter")||document.createElement("div");e.innerText=`${this.countNotes()}`,t.innerText=`${this.countPinned()}`}createNote(e,t){const n=this.getNotes(),o={title:e,content:t,pinned:!1,deleted:!1};n.push(o),localStorage.setItem("notestore",JSON.stringify(n))}deleteNote(e){const t=this.getNotes();e<=t.length&&w.moveNoteToTrash(e)}pinNote(e){const t=this.getNotes();e<=t.length&&(t[e].pinned=!0),localStorage.setItem("notestore",JSON.stringify(t))}unPinNote(e){const t=this.getNotes();e<=t.length&&(t[e].pinned=!1),localStorage.setItem("notestore",JSON.stringify(t))}togglePinnedNote(e){const t=this.getNotes();e<=t.length&&(t[e].pinned?this.unPinNote(e):this.pinNote(e),this.refreshAll())}getNotes(){return JSON.parse(localStorage.getItem("notestore"))||[]}displayNote(e,t){t||(t=document.getElementById("page-allnotes")||document.createElement("div"));const n=this.getNotes(),o=document.createElement("div"),s=document.createElement("h3"),a=document.createElement("p"),r=document.createElement("button"),l=document.createElement("span"),c=document.createElement("button"),i=document.createElement("span"),m=document.createElement("button"),f=document.createElement("span");s.className="header",a.className="content",r.className="delete",r.title="Delete Note",r.addEventListener("click",()=>{this.deleteNote(e),this.refreshAll()}),c.className=`pin${n[e].pinned?" unpin":""}`,c.title=`${n[e].pinned?"Unpin":"Pin"} this Note`,c.addEventListener("click",()=>{this.togglePinnedNote(e),this.refreshAll()}),m.className="edit",m.title="Edit this Note",m.addEventListener("click",()=>{this.editNote(e),this.refreshAll()}),l.className="material-icons",l.innerText="delete",i.className="material-icons",i.innerText=`bookmark${n[e].pinned?"_remove":"_add"}`,f.className="material-icons",f.innerText="edit",s.innerHTML=E.toHTML(n[e].title),a.innerHTML=E.toHTML(n[e].content),r.append(l),c.append(i),m.append(f),o.className="note",o.append(s,a,r,c,m),t.append(o),document.querySelectorAll("code.ts.language-ts").forEach(A=>{B.highlightElement(A)})}editNote(e){var o,s;const t=this.getNotes(),n={windowTitle:"Edit Note",nodeTitle:"Title",hideTitleField:!1,hideContentField:!1,buttonText:"edit note",contentFieldText:(o=t[e])==null?void 0:o.content,titleFieldText:(s=t[e])==null?void 0:s.title,buttonAction:(a,r)=>{var c,i;const l={title:a,content:r,pinned:(c=t[e])==null?void 0:c.pinned,deleted:(i=t[e])==null?void 0:i.deleted};t[e]=l,localStorage.setItem("notestore",JSON.stringify(t)),p.refreshAll()},clearFields:!1};T.show(n)}}const p=new ne;class oe{constructor(){x(this,"initDone",!1)}init(){var m;const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("h3"),o=document.createElement("p"),s=document.createElement("p"),a=document.createElement("input"),r=document.createElement("textarea"),l=document.createElement("span"),c=document.createElement("button"),i=document.createElement("button");e.id="create-note-dialog",e.className="hidden",t.id="create-note-dialog-shade",t.className="hidden",n.innerText="Create new {{type}}",o.className="nomargin",o.innerText="Title",s.className="nomargin",s.innerText="Content",a.className="fullwidth",r.className="fullwidth",a.id="title-inp",r.id="content-inp",l.className="bottomright",i.id="cancel-button",c.id="create-button",i.innerText="Cancel",c.innerText="Create {{type}}",i.addEventListener("click",this.hide),l.append(i,c),e.append(n,o,a,s,r,l),(m=document.querySelector("div.content"))==null||m.append(t,e),this.initDone=!0}show(e){if(this.initDone){let t=function(){l.removeEventListener("click",t);const i=document.getElementById("title-inp").value||"",m=document.getElementById("content-inp").value||"";e.buttonAction(i,m),T.hide()};const n=document.querySelector("div#create-note-dialog input"),o=document.querySelector("div#create-note-dialog textarea"),s=document.getElementById("create-note-dialog-shade"),a=document.getElementById("create-note-dialog"),r=document.querySelector("div#create-note-dialog h3"),l=document.querySelector("div#create-note-dialog button#create-button"),c=document.querySelectorAll("div#create-note-dialog p.nomargin");e.clearFields?(n.value="",o.value=""):(n.value=e.titleFieldText||"",o.value=e.contentFieldText||""),r.innerText=e.windowTitle,l.innerText=e.buttonText,s.classList.remove("hidden"),a.classList.remove("hidden"),o.style.display=e.hideContentField?"none":"",n.style.display=e.hideTitleField?"none":"",c[1].style.display=e.hideContentField?"none":"",n.style.marginBottom=e.hideContentField?"50px":"",l.addEventListener("click",t),c[0].innerText=e.nodeTitle}}hide(){const e=document.getElementById("create-note-dialog-shade"),t=document.getElementById("create-note-dialog");e==null||e.classList.add("hidden"),t==null||t.classList.add("hidden")}processNote(){const e=document.querySelector("div#create-note-dialog input"),t=document.querySelector("div#create-note-dialog textarea");e.value&&t.value?(p.createNote(e.value,t.value),T.hide(),h.toast({text:"Note created!",title:"",delay:3e3})):h.toast({text:"title or content fields are not filled out.",title:"Unable to create note",delay:3e3}),p.refreshAll()}processtask(){const e=document.querySelector("div#create-note-dialog input");e.value?(g.createTask(e.value),T.hide()):h.toast({text:"Content field is not filled out.",title:"Unable to create task",delay:3e3}),g.refreshAll()}}const T=new oe;class se{populateHomeButtons(){const e=document.querySelectorAll("#page-home>div.centered-absolute");let t=0;for(const n of y)if(n[1].onHome&&!n[1].default){t++;const o=document.createElement("button"),s=document.createElement("span"),a=document.createElement("p"),r=document.createTextNode(n[1].dispName);s.className="material-icons big",s.innerText=n[1].materialIcon,a.className="nomargin",a.append(r),o.append(s,a),o.addEventListener("click",()=>{k.switch(n[0],document.getElementById(`button-page-${n[0]}`))}),o.addEventListener("mouseenter",()=>{s.style.color=`var(--${u[n[1].color]})`}),o.addEventListener("mouseleave",()=>{s.style.color=""}),e[0].append(o),t>=3&&(t=0,e[0].append(document.createElement("br")))}}}const ae=new se;class le{display(e){const t={windowTitle:e.title,nodeTitle:e.message,hideTitleField:!0,hideContentField:!0,buttonText:e.confirmButtonText,buttonAction:e.confirmButtonAction,clearFields:!0};T.show(t)}}const D=new le,re=new Map([["newnote",{dispName:"New Note",materialIcon:"add_circle",action:()=>{const d={windowTitle:"Create new Note",nodeTitle:"Title",hideTitleField:!1,hideContentField:!1,buttonText:"Create note",buttonAction:(e,t)=>{p.createNote(e,t),p.refreshAll()},clearFields:!0};T.show(d)},color:u.purple}],["clearall",{dispName:"Clear All Notes",materialIcon:"clear_all",action:()=>{const d={title:"Clear All Notes",message:"Are you sure you want to clear all notes? There is no going back!",confirmButtonAction:()=>{h.toast({title:"",text:"Cleared all notes",delay:3e3}),localStorage.removeItem("notestore"),p.refreshAll()},confirmButtonText:"Clear"};D.display(d)},color:u.red,addBreak:!0}],["newtask",{dispName:"New task",materialIcon:"note_add",action:()=>{const d={windowTitle:"Create new Task",nodeTitle:"Content",hideTitleField:!1,hideContentField:!0,buttonText:"Create task",buttonAction:e=>{g.createTask(e),g.refreshAll()},clearFields:!0};T.show(d)},color:u.purple}],["clearalltasks",{dispName:"Clear All tasks",materialIcon:"clear_all",action:()=>{const d={title:"Clear All Tasks",message:"Are you sure you want to clear all tasks? There is no going back!",confirmButtonAction:()=>{h.toast({title:"",text:"Cleared all tasks",delay:3e3}),localStorage.removeItem("taskstore"),g.refreshAll()},confirmButtonText:"Clear"};D.display(d)},color:u.red}],["finishalltasks",{dispName:"Complete All Tasks",materialIcon:"done_all",action:()=>{g.completeAll()},color:u.green,addBreak:!0}],["emptytrash",{dispName:"Empty Trash",materialIcon:"delete_sweep",action:()=>{const d={title:"Empty Trash",message:"Are you sure you want to empty the trash?",confirmButtonAction:()=>{h.toast({title:"",text:"Trash emptied",delay:3e3}),w.emptyTrash()},confirmButtonText:"Empty Trash"};D.display(d)},color:u.red}]]);class ie{populatePages(){const e=document.querySelector("div.sidebar>#pages"),t=document.querySelector("div.headerbar #pages");for(const n of y)if(n[1].onSidebar){const o=document.createElement("span"),s=document.createElement("button"),a=document.createElement("span");if(a.innerText=n[1].dispName,o.innerText=n[1].materialIcon,o.className="material-icons",s.className="page unselected option",s.id=`button-page-${n[0]}`,s.title=n[1].dispName,s.append(o),s.append(a),s.addEventListener("click",()=>k.switch(n[0],s)),s.addEventListener("mouseenter",()=>{o.style.color=`var(--${u[n[1].color]})`,a.style.color=`var(--${u[n[1].color]})`}),s.addEventListener("mouseleave",()=>{o.style.color="",a.style.color=""}),n[1].inTopBar?(a.style.display="none",t==null||t.append(s)):(e==null||e.append(s),n[1].addBreak&&(e==null||e.append(document.createElement("hr")))),n[1].hasCountableContent){const r=document.createElement("span");r.className="counter",r.innerText="0",s.append(r)}}}populateActions(){const e=document.querySelector("div.sidebar>div#actions");for(const t of re){const n=document.createElement("span"),o=document.createElement("button"),s=document.createElement("span"),a=`${Math.floor(Math.random()*32768)}`;s.innerText=t[1].dispName,n.innerText=t[1].materialIcon,n.className="material-icons",n.id=a,o.className="action option",o.title=t[1].dispName,o.append(n),o.append(s),o.addEventListener("click",t[1].action),o.addEventListener("mouseenter",()=>{n.style.color=`var(--${u[t[1].color]})`,s.style.color=`var(--${u[t[1].color]})`}),o.addEventListener("mouseleave",()=>{n.style.color="",s.style.color=""}),e==null||e.append(o),t[1].addBreak&&(e==null||e.append(document.createElement("hr")))}}toggleSidebar(){(localStorage.getItem("sidebar-collapsed")||"false")=="true"?b.expandSidebar():b.collapseSidebar()}expandSidebar(){document.body.classList.remove("sidebar-collapsed"),localStorage.setItem("sidebar-collapsed","false")}collapseSidebar(){document.body.classList.add("sidebar-collapsed"),localStorage.setItem("sidebar-collapsed","true")}init(){this.syncSidebarState(),document.getElementById("sidebar-toggle").addEventListener("click",()=>{b.toggleSidebar(),b.syncSidebarState()})}syncSidebarState(){(localStorage.getItem("sidebar-collapsed")||"false")=="true"?b.collapseSidebar():b.expandSidebar()}}const b=new ie;class ce{init(){const e=document.createElement("button"),t=document.createElement("span");e.className="action",e.id="sidebar-toggle",t.className="material-icons",t.innerText="more_vert",e.append(t),document.querySelectorAll("div.headerbar .header")[0].append(e)}}const de=new ce;class ue{init(){console.warn=()=>{}}}const me=new ue;B.registerLanguage("ts",G);B.registerLanguage("js",R);B.highlightAll();Z.registerColorClasses();const O="home";de.init();T.init();b.init();h.init();I.init();me.init();w.init();b.populateActions();b.populatePages();p.refreshAll();g.refreshAll();$.refreshAll(!0);k.switch(O,document.getElementById(`button-page-${O}`));ae.populateHomeButtons();