import test from 'node:test';import assert from 'node:assert/strict';import {calculate} from '../src/math.mjs';
const v={hours:3,crew:2,wage:18,burden:25,travel:.5,supplies:12,overhead:25,margin:25,visits:13,overrun:25,discount:0,actualHours:3.5};
test('crew time, margin, travel and monthly visits use consistent units',()=>{const r=calculate(v);assert.equal(r.cost,194.5);assert.equal(r.price,194.5/.75);assert.equal(r.monthly,r.price*13);assert.equal(r.actual,217);assert.equal(r.stressed,228.25)});
test('discount and overrun can turn a quote into a loss',()=>{assert.ok(calculate({...v,discount:20,overrun:50}).stressProfit<0)});
test('reject invalid or impossible input',()=>{for(const x of [{margin:100},{crew:1.5},{hours:NaN},{wage:-1},{visits:0}])assert.throws(()=>calculate({...v,...x}))});
test('zero labor costs do not produce infinite break-even time',()=>assert.equal(calculate({...v,wage:0}).breakEvenHours,null));
