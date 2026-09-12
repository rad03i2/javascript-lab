const form = document.querySelector('#expenseForm');
const list = document.querySelector('#expenseList');
const total = document.querySelector('#total');
const storageKey = 'radwan-expenses';

let expenses = JSON.parse(localStorage.getItem(storageKey) || '[]');

function save() {
  localStorage.setItem(storageKey, JSON.stringify(expenses));
}

function render() {
  list.innerHTML = '';
  const sum = expenses.reduce((value, item) => value + item.amount, 0);
  total.textContent = sum.toFixed(2);

  expenses.forEach((expense) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span><strong>${expense.title}</strong><br>${expense.category}</span>
      <span>${expense.amount.toFixed(2)} <button class="delete" data-id="${expense.id}">×</button></span>
    `;
    list.appendChild(li);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.querySelector('#title').value.trim();
  const amount = Number(document.querySelector('#amount').value);
  const category = document.querySelector('#category').value;

  expenses.push({ id: crypto.randomUUID(), title, amount, category });
  save();
  render();
  form.reset();
});

list.addEventListener('click', (event) => {
  const button = event.target.closest('.delete');
  if (!button) return;
  expenses = expenses.filter((expense) => expense.id !== button.dataset.id);
  save();
  render();
});

render();
