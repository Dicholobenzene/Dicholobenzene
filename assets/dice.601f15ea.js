import{_ as D,r as m,o as _,c as f,b as r,w as o,a,e as l,t as d,F as c}from"./index.8b314bfd.js";const b={data(){return{dice_result:0,max_number:0,bonus_number:0}},methods:{rollDice(u){this.dice_result=Math.ceil(Math.random()*u),this.max_number=u,console.log(this.dice_result),this.bonus_number=0}}};function k(u,e,C,v,i,t){const n=m("el-button");return _(),f(c,null,[r(n,{onClick:e[0]||(e[0]=s=>t.rollDice(2))},{default:o(()=>[l("D2")]),_:1}),r(n,{onClick:e[1]||(e[1]=s=>t.rollDice(4))},{default:o(()=>[l("D4")]),_:1}),r(n,{onClick:e[2]||(e[2]=s=>t.rollDice(6))},{default:o(()=>[l("D6")]),_:1}),r(n,{onClick:e[3]||(e[3]=s=>t.rollDice(8))},{default:o(()=>[l("D8")]),_:1}),r(n,{onClick:e[4]||(e[4]=s=>t.rollDice(12))},{default:o(()=>[l("D12")]),_:1}),r(n,{onClick:e[5]||(e[5]=s=>t.rollDice(20))},{default:o(()=>[l("D20")]),_:1}),r(n,{onClick:e[6]||(e[6]=s=>t.rollDice(100))},{default:o(()=>[l("D100")]),_:1}),a("h1",null,[l("D"+d(i.max_number)+"\u7684\u7ED3\u679C\u662F",1),a("b",null,d(i.dice_result),1)])],64)}const p=D(b,[["render",k]]);export{p as default};