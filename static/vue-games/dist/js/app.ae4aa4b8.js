(function(){"use strict";var t={8130:function(t,e,r){var s=r(3751),n=r(641);const a={id:"app"};function o(t,e,r,s,o,l){const i=(0,n.g2)("TestComponent"),c=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)("div",a,[(0,n.bF)(i),(0,n.bF)(c)])}const l=t=>((0,n.Qi)("data-v-44085c86"),t=t(),(0,n.jt)(),t),i=l((()=>(0,n.Lk)("h1",null,"Hello from TestComponent!",-1))),c=[i];function u(t,e,r,s,a,o){return(0,n.uX)(),(0,n.CE)("div",null,c)}var d={name:"TestComponent"},p=r(6262);const m=(0,p.A)(d,[["render",u],["__scopeId","data-v-44085c86"]]);var k=m,h={name:"App",components:{TestComponent:k}};const L=(0,p.A)(h,[["render",o]]);var b=L,v=r(5220),f=r(33);const w=t=>((0,n.Qi)("data-v-8ff62e76"),t=t(),(0,n.jt)(),t),y={class:"container",style:{width:"500px"}},g={key:0,class:"container"},x={class:"row m-auto"},C={class:"col"},I={class:"row"},_=w((()=>(0,n.Lk)("label",{for:"word-length",class:"form-label col"},"Word Length",-1))),E=["value"],A=w((()=>(0,n.Lk)("div",{class:"row m-auto"},[(0,n.Lk)("ol",null,[(0,n.Lk)("li",null,"Choose Word Length"),(0,n.Lk)("li",null,[(0,n.eW)("Press "),(0,n.Lk)("strong",null,"Play!")]),(0,n.Lk)("li",null,"How many anagrams can you make in a minute?")])],-1))),X={key:1,class:"container"},O={class:"row"},j={class:"col d-flex justify-content-between"},N=w((()=>(0,n.Lk)("hr",null,null,-1))),S={class:"row"},P={class:"display-5 text-center"},T={class:"row"},G={class:"row text-center"},M={key:2,class:"container"},Q=w((()=>(0,n.Lk)("div",{class:"row"},[(0,n.Lk)("h4",{class:"display-4 text-center"},"Time's Up")],-1))),V={class:"row d-flex flex-col text-center"},W=w((()=>(0,n.Lk)("p",null,"You got",-1))),U={class:"display-3"},F=w((()=>(0,n.Lk)("p",null,"Anagrams",-1))),B={class:"row d-flex flex-col text-center"};function H(t,e,r,a,o,l){return(0,n.uX)(),(0,n.CE)("div",y,["start"==o.screen?((0,n.uX)(),(0,n.CE)("div",g,[(0,n.Lk)("div",x,[(0,n.Lk)("div",C,[(0,n.Lk)("div",I,[_,(0,n.bo)((0,n.Lk)("select",{id:"word-length",class:"form-select col","onUpdate:modelValue":e[0]||(e[0]=t=>o.wordLength=t)},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(Object.keys(o.anagrams),(t=>((0,n.uX)(),(0,n.CE)("option",{key:t,value:t},(0,f.v_)(t),9,E)))),128))],512),[[s.u1,o.wordLength]])])])]),A,(0,n.Lk)("button",{class:"btn btn-primary w-100",onClick:e[1]||(e[1]=(...t)=>l.play&&l.play(...t))},"Play!")])):"play"==o.screen?((0,n.uX)(),(0,n.CE)("div",X,[(0,n.Lk)("div",O,[(0,n.Lk)("div",j,[(0,n.Lk)("span",null,"Score: "+(0,f.v_)(o.score),1),(0,n.Lk)("span",null,"Time Left: "+(0,f.v_)(o.timeLeft),1)]),N]),(0,n.Lk)("div",S,[(0,n.Lk)("output",P,(0,f.v_)(o.currentWord)+" ("+(0,f.v_)(l.guessesLeft)+" left)",1)]),(0,n.Lk)("div",T,[(0,n.bo)((0,n.Lk)("input",{class:"form-control","onUpdate:modelValue":e[2]||(e[2]=t=>o.userInput=t)},null,512),[[s.Jo,o.userInput]])]),(0,n.Lk)("div",G,[(0,n.Lk)("ol",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(o.correctGuesses,(t=>((0,n.uX)(),(0,n.CE)("li",{key:t},(0,f.v_)(t),1)))),128))])])])):"end"==o.screen?((0,n.uX)(),(0,n.CE)("div",M,[Q,(0,n.Lk)("div",V,[W,(0,n.Lk)("div",U,(0,f.v_)(o.score),1),F]),(0,n.Lk)("div",B,[(0,n.Lk)("button",{onClick:e[3]||(e[3]=(...t)=>l.play&&l.play(...t)),class:"btn btn-primary w-100 m-1"},"Play Again"),(0,n.Lk)("button",{onClick:e[4]||(e[4]=t=>o.screen="start"),class:"btn btn-secondary w-100 m-1"},"Back to Start Screen")])])):(0,n.Q3)("",!0)])}r(4114);const J={5:[["abets","baste","betas","beast","beats"],["acres","cares","races","scare"],["alert","alter","later"],["angel","angle","glean"],["baker","brake","break"],["bared","beard","bread","debar"],["dater","rated","trade","tread"],["below","bowel","elbow"],["caret","cater","crate","trace","react"]],6:[["arrest","rarest","raster","raters","starer"],["carets","caters","caster","crates","reacts","recast","traces"],["canter","nectar","recant","trance"],["danger","gander","garden","ranged"],["daters","trades","treads","stared"]],7:[["allergy","gallery","largely","regally"],["aspired","despair","diapers","praised"],["claimed","decimal","declaim","medical"],["dearths","hardest","hatreds","threads","trashed"],["detains","instead","sainted","stained"]],8:[["parroted","predator","prorated","teardrop"],["repaints","painters","pantries","pertains"],["restrain","retrains","strainer","terrains","trainers"],["construe","counters","recounts","trounces"]]};var K=J;function q(t,e){return Math.floor(Math.random()*(e-t)+t)}var Y={name:"AnagramGame",data(){return{userName:"",score:0,timeLeft:60,anagrams:K,currentWord:"",anagramList:[],wordLength:5,screen:"start",correctGuesses:[],userInput:"",interval:null}},computed:{guessesLeft(){return this.anagramList.length-this.correctGuesses.length-1}},methods:{play(){this.score=0,this.screen="play",this.newAnagramList(),this.interval=setInterval((()=>{this.timeLeft-=1}),1e3)},checkAnswer(){const t=this.userInput.toLowerCase();this.anagramList.includes(t)&&!this.correctGuesses.includes(t)&&this.currentWord!==t&&(this.correctGuesses.push(t),this.userInput="",this.score+=1,this.correctGuesses.length==this.anagramList.length-1&&this.newAnagramList())},newAnagramList(){const t=[...this.anagramList],e=this.anagrams[this.wordLength];this.anagramList=[...e[q(0,e.length)]];while(this.anagramList[0]===t[0])this.anagramList=[...e[q(0,e.length)]];this.currentWord=this.anagramList[q(0,this.anagramList.length)],this.correctGuesses=[]},async recordScore(){}},watch:{userInput(){this.checkAnswer()},timeLeft(t){0==t&&(this.screen="end",this.timeLeft=60,clearInterval(this.interval),this.recordScore())}}};const D=(0,p.A)(Y,[["render",H],["__scopeId","data-v-8ff62e76"]]);var z=D;const R=t=>((0,n.Qi)("data-v-90813b1c"),t=t(),(0,n.jt)(),t),Z={class:"container",style:{width:"500px"}},$={key:0,class:"container"},tt={class:"row"},et={class:"col"},rt={class:"row"},st=R((()=>(0,n.Lk)("label",{for:"operation",class:"form-label col-3"},"Operation",-1))),nt=["value"],at={class:"row"},ot=R((()=>(0,n.Lk)("label",{for:"max-number",class:"form-label col-3"},"Max Number",-1))),lt=R((()=>(0,n.Lk)("div",{class:"row m-auto"},[(0,n.Lk)("ol",null,[(0,n.Lk)("li",null,"Choose Operation and Max Number"),(0,n.Lk)("li",null,[(0,n.eW)("Press "),(0,n.Lk)("strong",null,"Play!")]),(0,n.Lk)("li",null,"How many questions can you get in a minute?")])],-1))),it={key:1,class:"container"},ct={class:"row"},ut={class:"col d-flex justify-content-between"},dt=R((()=>(0,n.Lk)("hr",null,null,-1))),pt={class:"row"},mt={class:"display-5 text-center"},kt={class:"row"},ht={class:"row m-auto",style:{width:"300px"}},Lt={class:"row gx-1"},bt={class:"col-4"},vt={class:"col-4"},ft={class:"col-4"},wt={class:"row gx-1"},yt={class:"col-4"},gt={class:"col-4"},xt={class:"col-4"},Ct={class:"row gx-1"},It={class:"col-4"},_t={class:"col-4"},Et={class:"col-4"},At={class:"row gx-1"},Xt={class:"col-4"},Ot={class:"col-8"},jt={key:2,class:"container"},Nt=R((()=>(0,n.Lk)("div",{class:"row"},[(0,n.Lk)("h4",{class:"display-4 text-center"},"Time's Up")],-1))),St={class:"row d-flex flex-col text-center"},Pt=R((()=>(0,n.Lk)("p",null,"You answered",-1))),Tt={class:"display-3"},Gt=R((()=>(0,n.Lk)("p",null,"questions",-1))),Mt={class:"row d-flex flex-col text-center"};function Qt(t,e,r,a,o,l){return(0,n.uX)(),(0,n.CE)("div",Z,["start"==o.screen?((0,n.uX)(),(0,n.CE)("div",$,[(0,n.Lk)("div",tt,[(0,n.Lk)("div",et,[(0,n.Lk)("div",rt,[st,(0,n.bo)((0,n.Lk)("select",{id:"operation",class:"form-select col","onUpdate:modelValue":e[0]||(e[0]=t=>o.operation=t)},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(o.operations,((t,e)=>((0,n.uX)(),(0,n.CE)("option",{key:e,value:t},(0,f.v_)(e),9,nt)))),128))],512),[[s.u1,o.operation]])]),(0,n.Lk)("div",at,[ot,(0,n.bo)((0,n.Lk)("input",{id:"max-number",class:"form-control col",type:"number",min:"1",max:"100","onUpdate:modelValue":e[1]||(e[1]=t=>o.maxNumber=t)},null,512),[[s.Jo,o.maxNumber]])])])]),lt,(0,n.Lk)("button",{class:"btn btn-primary w-100",onClick:e[2]||(e[2]=(...t)=>l.play&&l.play(...t))},"Play!")])):"play"==o.screen?((0,n.uX)(),(0,n.CE)("div",it,[(0,n.Lk)("div",ct,[(0,n.Lk)("div",ut,[(0,n.Lk)("span",null,"Score: "+(0,f.v_)(o.score),1),(0,n.Lk)("span",null,"Time Left: "+(0,f.v_)(o.timeLeft),1)]),dt]),(0,n.Lk)("div",pt,[(0,n.Lk)("output",mt,(0,f.v_)(o.number1)+" "+(0,f.v_)(o.operation)+" "+(0,f.v_)(o.number2)+" = ",1)]),(0,n.Lk)("div",kt,[(0,n.bo)((0,n.Lk)("input",{class:"form-control m-auto","onUpdate:modelValue":e[3]||(e[3]=t=>o.userInput=t),style:{width:"200px"}},null,512),[[s.Jo,o.userInput]])]),(0,n.Lk)("div",ht,[(0,n.Lk)("div",Lt,[(0,n.Lk)("div",bt,[(0,n.Lk)("button",{onClick:e[4]||(e[4]=t=>o.userInput+="1"),class:"btn btn-primary w-100"},"1")]),(0,n.Lk)("div",vt,[(0,n.Lk)("button",{onClick:e[5]||(e[5]=t=>o.userInput+="2"),class:"btn btn-primary w-100"},"2")]),(0,n.Lk)("div",ft,[(0,n.Lk)("button",{onClick:e[6]||(e[6]=t=>o.userInput+="3"),class:"btn btn-primary w-100"},"3")])]),(0,n.Lk)("div",wt,[(0,n.Lk)("div",yt,[(0,n.Lk)("button",{onClick:e[7]||(e[7]=t=>o.userInput+="4"),class:"btn btn-primary w-100"},"4")]),(0,n.Lk)("div",gt,[(0,n.Lk)("button",{onClick:e[8]||(e[8]=t=>o.userInput+="5"),class:"btn btn-primary w-100"},"5")]),(0,n.Lk)("div",xt,[(0,n.Lk)("button",{onClick:e[9]||(e[9]=t=>o.userInput+="6"),class:"btn btn-primary w-100"},"6")])]),(0,n.Lk)("div",Ct,[(0,n.Lk)("div",It,[(0,n.Lk)("button",{onClick:e[10]||(e[10]=t=>o.userInput+="7"),class:"btn btn-primary w-100"},"7")]),(0,n.Lk)("div",_t,[(0,n.Lk)("button",{onClick:e[11]||(e[11]=t=>o.userInput+="8"),class:"btn btn-primary w-100"},"8")]),(0,n.Lk)("div",Et,[(0,n.Lk)("button",{onClick:e[12]||(e[12]=t=>o.userInput+="9"),class:"btn btn-primary w-100"},"9")])]),(0,n.Lk)("div",At,[(0,n.Lk)("div",Xt,[(0,n.Lk)("button",{onClick:e[13]||(e[13]=t=>o.userInput+="0"),class:"btn btn-primary w-100"},"0")]),(0,n.Lk)("div",Ot,[(0,n.Lk)("button",{onClick:e[14]||(e[14]=t=>o.userInput=""),class:"btn btn-primary w-100"},"Clear")])])])])):"end"==o.screen?((0,n.uX)(),(0,n.CE)("div",jt,[Nt,(0,n.Lk)("div",St,[Pt,(0,n.Lk)("div",Tt,(0,f.v_)(o.score),1),Gt]),(0,n.Lk)("div",Mt,[(0,n.Lk)("button",{onClick:e[15]||(e[15]=(...t)=>l.play&&l.play(...t)),class:"btn btn-primary w-100 m-1"},"Play Again"),(0,n.Lk)("button",{onClick:e[16]||(e[16]=t=>o.screen="start"),class:"btn btn-secondary w-100 m-1"},"Back to Start Screen")])])):(0,n.Q3)("",!0)])}var Vt={name:"MathGame",data(){return{score:0,screen:"start",maxNumber:30,operation:"+",operations:{Addition:"+",Subtraction:"-",Multiplication:"x",Division:"/"},number1:0,number2:0,userInput:"",interval:null,timeLeft:60}},methods:{play(){this.screen="play",this.getNewQuestion(),this.interval=setInterval((()=>{this.timeLeft--}),1e3)},getNewQuestion(){let t=q(0,this.maxNumber+1),e=q(0,this.maxNumber+1);"-"==this.operation?(this.number1=Math.max(t,e),this.number2=Math.min(t,e)):"/"==this.operation?(this.number1=t*e,this.number2=e):(this.number1=t,this.number2=e)},async recordScore(){}},computed:{correctAnswer(){if(""==this.userInput.trim())return!1;const t=parseInt(this.userInput);return"+"==this.operation?t===this.number1+this.number2:"-"==this.operation?t===this.number1-this.number2:"x"==this.operation?t===this.number1*this.number2:"/"==this.operation&&t===this.number1/this.number2}},watch:{userInput(){this.correctAnswer&&(this.score++,this.getNewQuestion(),this.userInput="")},timeLeft(t){0===t&&(clearInterval(this.interval),this.timeLeft=60,this.screen="end",this.recordScore())}}};const Wt=(0,p.A)(Vt,[["render",Qt],["__scopeId","data-v-90813b1c"]]);var Ut=Wt;const Ft=[{path:"/anagram-hunt",component:z},{path:"/math-facts",component:Ut}],Bt=(0,v.aE)({history:(0,v.LA)(),routes:Ft});var Ht=Bt;const Jt=(0,n.Lk)("h1",null,"Hello from BaseVue",-1),Kt=[Jt];function qt(t,e,r,s,a,o){return(0,n.uX)(),(0,n.CE)("div",null,Kt)}var Yt={name:"BaseVue"};const Dt=(0,p.A)(Yt,[["render",qt]]);var zt=Dt;const Rt=(0,s.Ef)(b);Rt.component("BaseVue",zt),Rt.use(Ht),Rt.mount("#app")}},e={};function r(s){var n=e[s];if(void 0!==n)return n.exports;var a=e[s]={exports:{}};return t[s].call(a.exports,a,a.exports,r),a.exports}r.m=t,function(){var t=[];r.O=function(e,s,n,a){if(!s){var o=1/0;for(u=0;u<t.length;u++){s=t[u][0],n=t[u][1],a=t[u][2];for(var l=!0,i=0;i<s.length;i++)(!1&a||o>=a)&&Object.keys(r.O).every((function(t){return r.O[t](s[i])}))?s.splice(i--,1):(l=!1,a<o&&(o=a));if(l){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[s,n,a]}}(),function(){r.d=function(t,e){for(var s in e)r.o(e,s)&&!r.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};r.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,a,o=s[0],l=s[1],i=s[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(i)var u=i(r)}for(e&&e(s);c<o.length;c++)a=o[c],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(u)},s=self["webpackChunkvue_games"]=self["webpackChunkvue_games"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=r.O(void 0,[504],(function(){return r(8130)}));s=r.O(s)})();
//# sourceMappingURL=app.ae4aa4b8.js.map