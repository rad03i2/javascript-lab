const STORAGE_KEY = 'javascript-lab.expenses.v1';
const form = document.querySelector('#expense-form');
const list = document.querySelector('#expense-list');
const total = document.querySelector('#total');
const filter = document.querySelector('#category-filter');
let expenses = load();
function load(){ try { const value=JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]'); return Array.isArray(value)?value:[]; } catch { return []; } }
function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses)); }
function money(value){ return new Intl.NumberFormat(undefined,{style:'currency',currency:'USD'}).format(value); }
function render(){
  const category=filter.value; const shown=category==='all'?expenses:expenses.filter(x=>x.category===category);
  list.replaceChildren(...shown.map(expense=>{ const li=document.createElement('li'); const text=document.createElement('span'); text.textContent=`${expense.description} · ${expense.category} · ${money(expense.amount)}`; const button=document.createElement('button'); button.type='button'; button.textContent='Delete'; button.addEventListener('click',()=>{expenses=expenses.filter(x=>x.id!==expense.id);save();render();}); li.append(text,button); return li; }));
  total.textContent=money(shown.reduce((sum,x)=>sum+x.amount,0));
  const categories=[...new Set(expenses.map(x=>x.category))].sort(); const selected=filter.value; filter.innerHTML='<option value="all">All categories</option>'; for(const c of categories){const o=document.createElement('option');o.value=c;o.textContent=c;filter.append(o);} filter.value=categories.includes(selected)?selected:'all';
}
form.addEventListener('submit',event=>{event.preventDefault(); const data=new FormData(form); const amount=Number(data.get('amount')); const description=String(data.get('description')).trim(); const category=String(data.get('category')).trim(); if(!description||!category||!Number.isFinite(amount)||amount<=0) return; expenses.unshift({id:crypto.randomUUID(),description,category,amount,createdAt:new Date().toISOString()}); save(); form.reset(); render();});
filter.addEventListener('change',render); render();
