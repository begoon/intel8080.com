(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function v(){}function Ct(e){return e()}function et(){return Object.create(null)}function w(e){e.forEach(Ct)}function ht(e){return typeof e=="function"}function G(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Et(e){return Object.keys(e).length===0}function f(e,t){e.appendChild(t)}function L(e,t,n){e.insertBefore(t,n||null)}function V(e){e.parentNode.removeChild(e)}function gt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function D(e){return document.createElement(e)}function y(e){return document.createTextNode(e)}function O(){return y(" ")}function Pt(){return y("")}function St(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function g(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Tt(e){return Array.from(e.childNodes)}function K(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function nt(e,t){e.value=t==null?"":t}let Q;function Z(e){Q=e}const $=[],rt=[],x=[],lt=[],Vt=Promise.resolve();let q=!1;function Rt(){q||(q=!0,Vt.then(Mt))}function z(e){x.push(e)}const W=new Set;let U=0;function Mt(){const e=Q;do{for(;U<$.length;){const t=$[U];U++,Z(t),Lt(t.$$)}for(Z(null),$.length=0,U=0;rt.length;)rt.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];W.has(n)||(W.add(n),n())}x.length=0}while($.length);for(;lt.length;)lt.pop()();q=!1,W.clear(),Z(e)}function Lt(e){if(e.fragment!==null){e.update(),w(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}const J=new Set;let N;function mt(){N={r:0,c:[],p:N}}function pt(){N.r||w(N.c),N=N.p}function R(e,t){e&&e.i&&(J.delete(e),e.i(t))}function F(e,t,n,l){if(e&&e.o){if(J.has(e))return;J.add(e),N.c.push(()=>{J.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function It(e){e&&e.c()}function _t(e,t,n,l){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),l||z(()=>{const c=e.$$.on_mount.map(Ct).filter(ht);e.$$.on_destroy?e.$$.on_destroy.push(...c):w(c),e.$$.on_mount=[]}),s.forEach(z)}function Ot(e,t){const n=e.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ht(e,t){e.$$.dirty[0]===-1&&($.push(e),Rt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Bt(e,t,n,l,r,s,c,d=[-1]){const o=Q;Z(e);const i=e.$$={fragment:null,ctx:[],props:s,update:v,not_equal:r,bound:et(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(o?o.$$.context:[])),callbacks:et(),dirty:d,skip_bound:!1,root:t.target||o.$$.root};c&&c(i.root);let a=!1;if(i.ctx=n?n(e,t.props||{},(u,A,...S)=>{const I=S.length?S[0]:A;return i.ctx&&r(i.ctx[u],i.ctx[u]=I)&&(!i.skip_bound&&i.bound[u]&&i.bound[u](I),a&&Ht(e,u)),A}):[],i.update(),a=!0,w(i.before_update),i.fragment=l?l(i.ctx):!1,t.target){if(t.hydrate){const u=Tt(t.target);i.fragment&&i.fragment.l(u),u.forEach(V)}else i.fragment&&i.fragment.c();t.intro&&R(e.$$.fragment),_t(e,t.target,t.anchor,t.customElement),Mt()}Z(o)}class bt{$destroy(){Ot(this,1),this.$destroy=v}$on(t,n){if(!ht(n))return v;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!Et(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const it=["00,NOP,,,4,","08,NOP?,,undocumented,4,","10,NOP?,,undocumented,4,","20,NOP?,,undocumented,4,","18,NOP?,,undocumented,4,","28,NOP?,,undocumented,4,","30,NOP?,,undocumented,4,","38,NOP?,,undocumented,4,","01,LXI,B|DATA16,,10,","02,STAX,B,,7,","03,INX,B,,5,","04,INR,B,,5,","05,DCR,B,,5,","06,MVI,B|DATA8,,7,","07,RLC,,,4,","09,DAD,B,,10,","0A,LDAX,B,,7,","0B,DCX,B,,5,","0C,INR,C,,5,","0D,DCR,C,,5,","0E,MVI,C|DATA8,,7,","0F,RRC,,,4,","11,LXI,D|DATA16,,10,","12,STAX,D,,7,","13,INX,D,,5,","14,INR,D,,5,","15,DCR,D,,5,","16,MVI,D|DATA8,,7,","17,RAL,,,4,","19,DAD,D,,10,","1A,LDAX,D,,7,","1B,DCX,D,,5,","1C,INR,E,,5,","1D,DCR,E,,5,","1E,MVI,E|DATA8,,7,","1F,RAR,,,4,","21,LXI,H|DATA16,,10,","22,SHLD,DATA16,,16,","23,INX,H,,5,","24,INR,H,,5,","25,DCR,H,,5,","26,MVI,H|DATA8,,7,","27,DAA,,,4,","29,DAD,H,,10,","2A,LHLD,DATA16,,16,","2B,DCX,H,,5,","2C,INR,L,,5,","2D,DCR,L,,5,","2E,MVI,L|DATA8,,7,","2F,CMA,,,4,","31,LXI,SP|DATA16,,10,","32,STA,DATA16,,13,","33,INX,SP,,5,","34,INR,M,,10,","35,DCR,M,,10,","36,MVI,M|DATA8,,10,","37,STC,,,4,","39,DAD,SP,,10,","3A,LDA,DATA16,,13,","3B,DCX,SP,,5,","3C,INR,A,,5,","3D,DCR,A,,5,","3E,MVI,A|DATA8,,7,","3F,CMC,,,4,","76,HLT,,,4,","40,MOV,B|B,,5,","41,MOV,B|C,,5,","42,MOV,B|D,,5,","43,MOV,B|E,,5,","44,MOV,B|H,,5,","45,MOV,B|L,,5,","46,MOV,B|M,,7,","47,MOV,B|A,,5,","48,MOV,C|B,,5,","49,MOV,C|C,,5,","4A,MOV,C|D,,5,","4B,MOV,C|E,,5,","4C,MOV,C|H,,5,","4D,MOV,C|L,,5,","4E,MOV,C|M,,7,","4F,MOV,C|A,,5,","50,MOV,D|B,,5,","51,MOV,D|C,,5,","52,MOV,D|D,,5,","53,MOV,D|E,,5,","54,MOV,D|H,,5,","55,MOV,D|L,,5,","56,MOV,D|M,,7,","57,MOV,D|A,,5,","58,MOV,E|B,,5,","59,MOV,E|C,,5,","5A,MOV,E|D,,5,","5B,MOV,E|E,,5,","5C,MOV,E|H,,5,","5D,MOV,E|L,,5,","5E,MOV,E|M,,7,","5F,MOV,E|A,,5,","60,MOV,H|B,,5,","61,MOV,H|C,,5,","62,MOV,H|D,,5,","63,MOV,H|E,,5,","64,MOV,H|H,,5,","65,MOV,H|L,,5,","66,MOV,H|M,,7,","67,MOV,H|A,,5,","68,MOV,L|B,,5,","69,MOV,L|C,,5,","6A,MOV,L|D,,5,","6B,MOV,L|E,,5,","6C,MOV,L|H,,5,","6D,MOV,L|L,,5,","6E,MOV,L|M,,7,","6F,MOV,L|A,,5,","70,MOV,M|B,,7,","71,MOV,M|C,,7,","72,MOV,M|D,,7,","73,MOV,M|E,,7,","74,MOV,M|H,,7,","75,MOV,M|L,,7,","77,MOV,M|A,,7,","78,MOV,A|B,,5,","79,MOV,A|C,,5,","7A,MOV,A|D,,5,","7B,MOV,A|E,,5,","7C,MOV,A|H,,5,","7D,MOV,A|L,,5,","7E,MOV,A|M,,7,","7F,MOV,A|A,,7,","80,ADD,B,,4,","81,ADD,C,,4,","82,ADD,D,,4,","83,ADD,E,,4,","84,ADD,H,,4,","85,ADD,L,,4,","86,ADD,M,,7,","87,ADD,A,,4,","88,ADC,B,,4,","89,ADC,C,,4,","8A,ADC,D,,4,","8B,ADC,E,,4,","8C,ADC,H,,4,","8D,ADC,L,,4,","8E,ADC,M,,7,","8F,ADC,A,,4,","90,SUB,B,,4,","91,SUB,C,,4,","92,SUB,D,,4,","93,SUB,E,,4,","94,SUB,H,,4,","95,SUB,L,,4,","96,SUB,M,,7,","97,SUB,A,,4,","98,SBB,B,,4,","99,SBB,C,,4,","9A,SBB,D,,4,","9B,SBB,E,,4,","9C,SBB,H,,4,","9D,SBB,L,,4,","9E,SBB,M,,7,","9F,SBB,A,,4,","A0,ANA,B,,4,","A1,ANA,C,,4,","A2,ANA,D,,4,","A3,ANA,E,,4,","A4,ANA,H,,4,","A5,ANA,L,,4,","A6,ANA,M,,7,","A7,ANA,A,,4,","A8,XRA,B,,4,","A9,XRA,C,,4,","AA,XRA,D,,4,","AB,XRA,E,,4,","AC,XRA,H,,4,","AD,XRA,L,,4,","AE,XRA,M,,7,","AF,XRA,A,,4,","B0,ORA,B,,4,","B1,ORA,C,,4,","B2,ORA,D,,4,","B3,ORA,E,,4,","B4,ORA,H,,4,","B5,ORA,L,,4,","B6,ORA,M,,4,","B7,ORA,A,,4,","B8,CMP,B,,4,","B9,CMP,C,,4,","BA,CMP,D,,4,","BB,CMP,E,,4,","BC,CMP,H,,4,","BD,CMP,L,,4,","BE,CMP,M,,7,","BF,CMP,A,,4,","C0,RNZ,,branching,5/11,","C1,POP,B,stack,11,","C2,JNZ,DATA16,branching,10,","C3,JMP,DATA16,branching,09,","CB,JMP?,DATA16,undocumented|branching,10,","C4,CNZ,DATA16,branching,11/17,","C5,PUSH,B,stack,11,","C6,ADI,DATA8,,7,","C7,RST,0,branching,11,","C8,RZ,,branching,5/11,","C9,RET,,branching,10,","D9,RET?,,undocumented|branching,10,","CA,JZ,DATA16,branching,10,","CC,CZ,DATA16,branching,11/17,","CD,CALL,DATA16,branching,17,","DD,CALL?,DATA16,undocumented|branching,17,","ED,CALL?,DATA16,undocumented|branching,17,","FD,CALL?,DATA16,undocumented|branching,17,","CE,ACI,DATA8,,7,","CF,RST,1,branching,11,","D0,RNC,,branching,5/11,","D1,POP,D,stack,11,","D2,JNC,DATA16,branching,10,","D3,OUT,DATA8,io,10,","D4,CNC,DATA16,branching,11/17,","D5,PUSH,D,stack,11,","D6,SUI,DATA8,,7,","D7,RST,2,branching,11,","D8,RC,,branching,5/11,","DA,JC,DATA16,branching,10,","DB,IN,DATA8,io,13,","DC,CC,DATA16,branching,11/17,","DE,SBI,DATA8,,7,","DF,RST,3,branching,11,","E0,RPO,,branching,5/11,","E1,POP,H,stack,11,","E2,JPO,DATA16,,10,","E3,XTHL,,stack,18,","E4,CPO,DATA16,,11/17,","E5,PUSH,H,stack,11,","E6,ANI,DATA8,,7,","E7,RST,4,branching,11,","E8,RPE,,branching,5/11,","E9,PCHL,,branching,5,","EA,JPE,DATA16,branching,10,","EB,XCHG,,stack,4,","EC,CPE,DATA16,branching,11/17,","EE,XRI,DATA8,,7,","EF,RST,5,branching,11,","F0,RP,,branching,5/11,","F1,POP,PSW,stack,11,","F2,JP,DATA16,branching,10,","F3,DI,,interrupt,4,","F4,CP,DATA16,branching,11/17,","F5,PUSH,PSW,stack,11,","F6,ORI,DATA8,,7,","F7,RST,6,branching,11,","F8,RM,,branching,5/11,","F9,SPHL,,stack,5,","FA,JM,DATA16,branching,10,","FB,EI,,interrupt,4,","FC,CM,DATA16,branching,11/17,","FE,CPI,DATA8,,7,","FF,RST,7,branching,11,"],Nt={NOP:"00xxx000","NOP?":"00xxx000",LXI:"00rr0001",STAX:"000r0010",INX:"00rr0011",INR:"00rrr100",DCR:"00rrr100",MVI:"00rrr110",DAD:"00rr1001",LDAX:"000r1010",DCX:"00rr1011",MOV:"01dddsss"},yt={INR:"S Z A P -",DCR:"S Z A P -",RLC:"- - - - C",RRC:"- - - - C",RAL:"- - - - C",RAR:"- - - - C",CMC:"- - - - C",DAD:"- - - - C",DAA:"S Z A P C",ADD:"S Z A P C",ADC:"S Z A P C",SUB:"S Z A P C",SBB:"S Z A P C",ANA:"S Z A P C",XRA:"S Z A P C",ORA:"S Z A P C",CMP:"S Z A P C",ADI:"S Z A P C",ACI:"S Z A P C",SUI:"S Z A P C",SBI:"S Z A P C",ANI:"S Z A P C",XRI:"S Z A P C",ORI:"S Z A P C",CPI:"S Z A P C"},st={DAA:["cpu_cycles = 4;","var carry = CF;","var add = 0;","const a = A;","if (HF || (a & 0x0f) > 9) add = 0x06;","if (CF || (a >> 4) > 9 || ((a >> 4) >= 9 && (a & 0xf) > 9)) {","    add |= 0x60;","    carry = 1;","}","ACI(0)","PF = parity_table[A];","CF = carry;"]};function ot(e,t,n){const l=e.slice();return l[15]=t[n],l}function ct(e){let t,n=e[10](e[3])+"";return{c(){t=D("span"),g(t,"class","text-xs font-mono font-bold")},m(l,r){L(l,t,r),t.innerHTML=n},p(l,r){r&8&&n!==(n=l[10](l[3])+"")&&(t.innerHTML=n)},d(l){l&&V(t)}}}function ut(e){let t=e[2].join(", ")+"",n;return{c(){n=y(t)},m(l,r){L(l,n,r)},p(l,r){r&4&&t!==(t=l[2].join(", ")+"")&&K(n,t)},d(l){l&&V(n)}}}function at(e){let t,n,l,r,s,c,d=e[1][e[5]],o=[];for(let i=0;i<d.length;i+=1)o[i]=ft(ot(e,d,i));return{c(){t=D("div"),n=D("p"),n.textContent="Pseudocode:",l=O(),r=D("pre"),s=y("                    ");for(let i=0;i<o.length;i+=1)o[i].c();c=y(`
                `),g(r,"class","text-sm")},m(i,a){L(i,t,a),f(t,n),f(t,l),f(t,r),f(r,s);for(let u=0;u<o.length;u+=1)o[u].m(r,null);f(r,c)},p(i,a){if(a&34){d=i[1][i[5]];let u;for(u=0;u<d.length;u+=1){const A=ot(i,d,u);o[u]?o[u].p(A,a):(o[u]=ft(A),o[u].c(),o[u].m(r,c))}for(;u<o.length;u+=1)o[u].d(1);o.length=d.length}},d(i){i&&V(t),gt(o,i)}}}function ft(e){let t,n=e[15]+"",l;return{c(){t=D("p"),l=y(n)},m(r,s){L(r,t,s),f(t,l)},p(r,s){s&2&&n!==(n=r[15]+"")&&K(l,n)},d(r){r&&V(t)}}}function kt(e){var Y;let t,n,l,r,s,c,d=e[9](e[4])+"",o,i,a,u,A,S,I,k,X,H,h,b,P=((Y=e[0][e[5]])!=null?Y:"")+"",M,B,E,j,m=e[3]&&ct(e),p=e[2].length>0&&ut(e),_=e[1]&&e[1][e[5]]&&at(e);return{c(){var C,T;t=D("tr"),n=D("td"),n.textContent=`${e[4]}`,l=O(),r=D("td"),r.textContent=`${parseInt(e[4],16).toString(10).padStart(3,"0")}`,s=O(),c=D("td"),o=O(),i=D("td"),i.textContent=`${e[5]}`,a=O(),u=D("td"),u.textContent=`${(C=e[7])!=null?C:""}`,A=O(),S=D("td"),S.textContent=`${(T=e[8])!=null?T:""}`,I=O(),k=D("td"),k.textContent=`${e[6]}`,X=O(),H=D("td"),m&&m.c(),h=O(),b=D("td"),M=y(P),B=O(),E=D("td"),p&&p.c(),j=O(),_&&_.c(),g(n,"class","pl-2 svelte-1fumn3"),g(r,"class","pl-2 svelte-1fumn3"),g(c,"class","pl-2 svelte-1fumn3"),g(i,"class","pl-2 svelte-1fumn3"),g(u,"class","pl-2 svelte-1fumn3"),g(S,"class","pl-2 svelte-1fumn3"),g(k,"class","pl-4 svelte-1fumn3"),g(H,"class","pl-4 svelte-1fumn3"),g(b,"class","pl-4 svelte-1fumn3"),g(E,"class","pl-2 svelte-1fumn3"),g(t,"class","border-1")},m(C,T){L(C,t,T),f(t,n),f(t,l),f(t,r),f(t,s),f(t,c),c.innerHTML=d,f(t,o),f(t,i),f(t,a),f(t,u),f(t,A),f(t,S),f(t,I),f(t,k),f(t,X),f(t,H),m&&m.m(H,null),f(t,h),f(t,b),f(b,M),f(t,B),f(t,E),p&&p.m(E,null),f(E,j),_&&_.m(E,null)},p(C,[T]){var tt;C[3]?m?m.p(C,T):(m=ct(C),m.c(),m.m(H,null)):m&&(m.d(1),m=null),T&1&&P!==(P=((tt=C[0][C[5]])!=null?tt:"")+"")&&K(M,P),C[2].length>0?p?p.p(C,T):(p=ut(C),p.c(),p.m(E,j)):p&&(p.d(1),p=null),C[1]&&C[1][C[5]]?_?_.p(C,T):(_=at(C),_.c(),_.m(E,null)):_&&(_.d(1),_=null)},i:v,o:v,d(C){C&&V(t),m&&m.d(),p&&p.d(),_&&_.d()}}}function vt(e){return/^\d+$/.test(e)}function Ft(e,t,n){let{instruction:l}=t,{masks:r}=t,{flags:s}=t,{extra:c}=t,[d,o,i,a,u,A]=l.split(","),[S,I]=i.split("|");a=a.split("|"),A=A||r[o];const k=h=>{const b=parseInt(h,16).toString(2).padStart(8,"0");if(!A)return b;let P="";const M={r:"lightgrey",x:"lightgrey",s:"yellow",d:"cyan"};for(let B=0;B<A.length;++B){const E=A[B];vt(E)?P+=b[B]:P+=`<b style='background: ${M[E]}'>`+b[B]+"</b>"}return P},X={xxx:"000(0) to 111(7)",ddd:"000 (b), 001 (c), 010 (d), 011 (e), 100 (h), 101 (l), 110 (m), 111 (a)",sss:"000 (b), 001 (c), 010 (d), 011 (e), 100 (h), 101 (l), 110 (m), 111 (a)",rrr:"000 (b), 001 (c), 010 (d), 011 (e), 100 (h), 101 (l), 110 (m), 111 (a)",rr:"00 (bc), 01 (de), 10 (hl), 11 (sp)",r:"0 (bc), 1 (de)"},H=h=>{let b=0;const P=(M,B)=>`<span class="cursor-help" title="${B}">${M}</span>`;for(let M in X)if(M.length>=b&&h.includes(M)){const B=X[M];h=h.replace(M,P(M,B)),b=M.length}return h};return e.$$set=h=>{"instruction"in h&&n(11,l=h.instruction),"masks"in h&&n(12,r=h.masks),"flags"in h&&n(0,s=h.flags),"extra"in h&&n(1,c=h.extra)},[s,c,a,A,d,o,u,S,I,k,H,l,r]}class Xt extends bt{constructor(t){super(),Bt(this,t,Ft,kt,G,{instruction:11,masks:12,flags:0,extra:1})}}function At(e,t,n){const l=e.slice();return l[4]=t[n],l}function $t(e){let t,n;return t=new Xt({props:{instruction:e[4],masks:Nt,flags:yt,extra:e[0]?st:null}}),{c(){It(t.$$.fragment)},m(l,r){_t(t,l,r),n=!0},p(l,r){const s={};r&1&&(s.extra=l[0]?st:null),t.$set(s)},i(l){n||(R(t.$$.fragment,l),n=!0)},o(l){F(t.$$.fragment,l),n=!1},d(l){Ot(t,l)}}}function dt(e){let t=e[1](e[4]),n,l,r=t&&$t(e);return{c(){r&&r.c(),n=Pt()},m(s,c){r&&r.m(s,c),L(s,n,c),l=!0},p(s,c){t&&r.p(s,c)},i(s){l||(R(r),l=!0)},o(s){F(r),l=!1},d(s){r&&r.d(s),s&&V(n)}}}function Dt(e){let t,n,l,r,s=it,c=[];for(let o=0;o<s.length;o+=1)c[o]=dt(At(e,s,o));const d=o=>F(c[o],1,1,()=>{c[o]=null});return{c(){t=D("table"),n=D("thead"),n.innerHTML=`<tr><th>Opcode</th> 
                    <th></th> 
                    <th></th> 
                    <th class="pl-2">Mnemonic</th> 
                    <th class="pl-2">Argument 1</th> 
                    <th class="pl-2">Argument 2</th> 
                    <th class="pl-4">Cycles</th> 
                    <th class="pl-4 cursor-help" title="Hovering on the mask shows register information.">Mask</th> 
                    <th class="pl-4">Flags</th> 
                    <th class="pl-2">Tags</th></tr>`,l=O();for(let o=0;o<c.length;o+=1)c[o].c();g(t,"class","table-auto border-collapse")},m(o,i){L(o,t,i),f(t,n),f(t,l);for(let a=0;a<c.length;a+=1)c[a].m(t,null);r=!0},p(o,i){if(i&3){s=it;let a;for(a=0;a<s.length;a+=1){const u=At(o,s,a);c[a]?(c[a].p(u,i),R(c[a],1)):(c[a]=dt(u),c[a].c(),R(c[a],1),c[a].m(t,null))}for(mt(),a=s.length;a<c.length;a+=1)d(a);pt()}},i(o){if(!r){for(let i=0;i<s.length;i+=1)R(c[i]);r=!0}},o(o){c=c.filter(Boolean);for(let i=0;i<c.length;i+=1)F(c[i]);r=!1},d(o){o&&V(t),gt(c,o)}}}function Zt(e){let t,n,l,r,s,c=e[0],d,o,i,a=Dt(e);return{c(){t=D("div"),n=D("div"),n.textContent=`Enter keywords to filter (use '-' to negate), for example, "mov c" or
        "inx -23".`,l=O(),r=D("input"),s=O(),a.c(),g(r,"placeholder","filter..."),g(r,"class","border-2 border-slate-200 mb-4 w-full"),g(t,"class","absolute top-4 left-4 right-4 text-left")},m(u,A){L(u,t,A),f(t,n),f(t,l),f(t,r),nt(r,e[0]),f(t,s),a.m(t,null),d=!0,o||(i=St(r,"input",e[2]),o=!0)},p(u,[A]){A&1&&r.value!==u[0]&&nt(r,u[0]),A&1&&G(c,c=u[0])?(mt(),F(a,1,1,v),pt(),a=Dt(u),a.c(),R(a,1),a.m(t,null)):a.p(u,A)},i(u){d||(R(a),d=!0)},o(u){F(a),d=!1},d(u){u&&V(t),a.d(u),o=!1,i()}}}function wt(e,t,n){let l="";const r=(d,{sep:o})=>d.toLowerCase().split(o).filter(i=>i.trim()),s=d=>{if(!l)return!0;const o=r(l,{sep:" "}),i=r(d,{sep:","});for(const a of o){let u=!1;for(const A of i)if(a.startsWith("-")){if(a.length>1&&A.includes(a.substring(1)))return!1;u=!0}else A.includes(a)&&(u=!0);if(!u)return!1}return!0};function c(){l=this.value,n(0,l)}return[l,s,c]}class Ut extends bt{constructor(t){super(),Bt(this,t,wt,Zt,G,{})}}new Ut({target:document.getElementById("app")});