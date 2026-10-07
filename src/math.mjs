export function calculate(v){
  const keys=['hours','crew','wage','burden','travel','supplies','overhead','margin','visits','overrun','discount','actualHours'];
  for(const key of keys) if(!Number.isFinite(v[key])||v[key]<0) throw new Error('Invalid input: '+key);
  if(v.margin>=100||v.discount>=100||v.crew<1||!Number.isInteger(v.crew)||v.visits<1||!Number.isInteger(v.visits)||v.hours<=0) throw new Error('Invalid range');
  const loaded=v.wage*(1+v.burden/100), fixed=v.supplies+v.overhead;
  const cost=(v.hours+v.travel)*v.crew*loaded+fixed;
  const price=cost/(1-v.margin/100), discounted=price*(1-v.discount/100);
  const stressed=((v.hours*(1+v.overrun/100))+v.travel)*v.crew*loaded+fixed;
  const actual=(v.actualHours+v.travel)*v.crew*loaded+fixed;
  return {loaded,cost,price,profit:price-cost,monthly:discounted*v.visits,discounted,discountProfit:discounted-cost,stressed,stressProfit:discounted-stressed,actual,actualProfit:discounted-actual,breakEvenHours:loaded>0?(discounted-fixed)/(v.crew*loaded)-v.travel:null,margin:discounted>0?(discounted-stressed)/discounted*100:0};
}
