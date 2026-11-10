(function(root){
function rng(seed){return ()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return ((t^t>>>14)>>>0)/4294967296;};}
function shuffle(a,r){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function makeSet(bank,c,n,v){const pool=bank.filter(q=>c===-1||q.category===c);if(!Number.isInteger(n)||n<1||n>pool.length||v<1||v>10)throw Error('ชุดสอบไม่ถูกต้อง');const base=shuffle(pool,rng(20261106+c*100));const offset=(v-1)%base.length;const selected=[...base.slice(offset),...base.slice(0,offset)].slice(0,n);const r=rng(9187+v*211+c*31);return selected.map(q=>({...q,choices:shuffle(q.options.map((text,i)=>({text,key:i})),r)}));}
function score(qs,answers){return qs.reduce((n,q)=>n+(answers[q.id]===q.answer?1:0),0);}
const api={makeSet,score};if(typeof module!=='undefined')module.exports=api;else root.ExamEngine=api;
})(typeof window==='undefined'?globalThis:window);
