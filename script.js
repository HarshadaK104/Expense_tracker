let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expnese-table-body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function() {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '') {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <=0 ) {
        alert('Please enter a valid amount')
        return;
    }
    if(date === '') {
        alert('Please select a date')
        return;
    }
    expenses.push({category, amount, date});

    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expensesTableBody.removeChild(newRow);
    });

    const expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);

});

for (const expense of expenses) {
    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.inserRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expensesTableBody.removeChild(newRow);
    });
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
}

let expense = [document.getElementById("amount-input").value];
let totalBudget = 0; // Default budget value

// Function to calculate the remaining balance
function calculateBalance(expense, totalBudget) {
    const totalExpenses = expense.reduce((acc, expens) => acc + expens, 0);
    const remainingBalance = totalBudget - expense;
    return remainingBalance;
    console.log(remainingBalance);
}

// Function to check the balance and show an alert if it's less than 70%
function checkBalance() {
    const remainingBalance = calculateBalance(expense, totalBudget);
    const threshold = 0.7 * totalBudget; // 70% threshold
    if (remainingBalance < threshold) {
        alert("Your balance is less than 70% of your budget!");
    } else {
        alert("Your balance is healthy.");
    }
}

// Function to update the budget
function updateBudget() {
    totalBudget = parseFloat(document.getElementById("budget").value);
   // console.log();
    updateBalance();
}

// Update the balance displayed on the page
function updateBalance() {
    const remainingBalance = calculateBalance(expense, totalBudget);
    document.getElementById("balance").textContent = `Balance: $${remainingBalance}`;
}

// Event listeners
document.getElementById("checkBalance").addEventListener("click", checkBalance);
document.getElementById("updateBudget").addEventListener("click", updateBudget);

// Call the updateBalance function to display the initial balance
//updateBalance();
