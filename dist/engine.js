(function(root){
function rng(seed){return ()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return ((t^t>>>14)>>>0)/4294967296;};}
function shuffle(a,r){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function makeSet(bank,c,n,v){
 const pool=bank.filter(q=>c===-1||q.category===c);
 if(!Number.isInteger(c)||c< -1||c>4||!Number.isInteger(n)||n<1||n>pool.length||!Number.isInteger(v)||v<1||v>10)throw Error('ชุดสอบไม่ถูกต้อง');
 function take(rows,count,seed){const base=shuffle(rows,rng(seed));const offset=(v-1)%base.length;return [...base.slice(offset),...base.slice(0,offset)].slice(0,count);}
 let selected;
 if(c===4&&n===15){const quotas={Persona:2,Journey:2,Testing:3,Feedback:2,Evidence:2,Methods:4};selected=Object.entries(quotas).flatMap(([area,count],i)=>take(pool.filter(q=>q.researchArea===area),count,10110+i));}
 else if(c===1){const writing=pool.filter(q=>q.source?.key==='writing'),tracking=pool.filter(q=>q.source?.key==='tracking'),general=pool.filter(q=>!q.source);const w=Math.round(n*writing.length/pool.length),t=Math.round(n*tracking.length/pool.length);selected=[...take(writing,w,20110),...take(tracking,t,20111),...take(general,n-w-t,20112)];}
 else selected=take(pool,n,20261110+c*100);
 const r=rng(9187+v*211+c*31);return shuffle(selected,r).map(q=>({...q,choices:shuffle(q.options.map((text,i)=>({text,key:i})),r)}));
}
function score(qs,answers){return qs.reduce((n,q)=>n+(answers[q.id]===q.answer?1:0),0);}
const api={makeSet,score};if(typeof module!=='undefined')module.exports=api;else root.ExamEngine=api;
})(typeof window==='undefined'?globalThis:window);
