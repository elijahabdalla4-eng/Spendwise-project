// ==========================================================================
// SpendWise - JavaScript Foundation
// ==========================================================================

// 1. Store Initial Application Data (Variables & Data Types)
let totalBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// Category expense tracking object
const expenseCategories = {
  food: 0,
  transport: 0,
  utilities: 0
};

// 2. Reusable Helper Functions
/**
 * Calculates remaining balance given a total budget and total expenses.
 * @param {number} budget - Total income/budget.
 * @param {number} expenses - Total expenses.
 * @returns {number} Remaining balance.
 */
function calculateRemainingBalance(budget, expenses) {
  return budget - expenses;
}

/**
 * Calculates percentage of budget spent.
 * @param {number} budget - Total income/budget.
 * @param {number} expenses - Total expenses.
 * @returns {number} Percentage spent.
 */
function calculatePercentageSpent(budget, expenses) {
  if (budget === 0) return 0;
  return (expenses / budget) * 100;
}

/**
 * Formats numbers into standard currency string ($XX.XX).
 * @param {number} amount - Numeric value to format.
 * @returns {string} Formatted currency text.
 */
function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

// 3. Main Budget Initialization Function
function initSpendWise() {
  console.log("==========================================");
  console.log("      WELCOME TO SPENDWISE BUDGETING      ");
  console.log("==========================================");

  // Collect User Input via Prompt
  const userBudgetInput = prompt("Enter your total monthly budget ($):", "2000");
  totalBudget = parseFloat(userBudgetInput);

  // Input Validation
  if (isNaN(totalBudget) || totalBudget <= 0) {
    console.error("Invalid budget amount entered. Please reload and enter a valid number.");
    alert("Please enter a valid numeric budget amount.");
    return;
  }

  // Collect Expense Inputs
  const foodInput = prompt("Enter estimated spending for Food & Dining ($):", "450");
  const transportInput = prompt("Enter estimated spending for Transport ($):", "180");
  const utilitiesInput = prompt("Enter estimated spending for Utilities ($):", "210");

  expenseCategories.food = parseFloat(foodInput) || 0;
  expenseCategories.transport = parseFloat(transportInput) || 0;
  expenseCategories.utilities = parseFloat(utilitiesInput) || 0;

  // Perform Budget Calculations
  totalExpenses = expenseCategories.food + expenseCategories.transport + expenseCategories.utilities;
  remainingBalance = calculateRemainingBalance(totalBudget, totalExpenses);
  const percentSpent = calculatePercentageSpent(totalBudget, totalExpenses);

  // Display Results in Console
  displayBudgetSummary(percentSpent);
}

// 4. Function to Display Results cleanly in Console
function displayBudgetSummary(percentSpent) {
  console.log("\n--- FINANCIAL BREAKDOWN ---");
  console.log(`Total Monthly Budget:   ${formatCurrency(totalBudget)}`);
  console.log(`Food Spending:          ${formatCurrency(expenseCategories.food)}`);
  console.log(`Transport Spending:     ${formatCurrency(expenseCategories.transport)}`);
  console.log(`Utilities Spending:     ${formatCurrency(expenseCategories.utilities)}`);
  console.log("------------------------------------------");
  console.log(`Total Expenses:         ${formatCurrency(totalExpenses)}`);
  console.log(`Remaining Balance:      ${formatCurrency(remainingBalance)}`);
  console.log(`Budget Used:            ${percentSpent.toFixed(1)}%`);
  console.log("==========================================\n");

  // User Alert Summary
  if (remainingBalance >= 0) {
    alert(`Budget Summary:\n\nTotal Budget: ${formatCurrency(totalBudget)}\nTotal Spent: ${formatCurrency(totalExpenses)}\nRemaining Balance: ${formatCurrency(remainingBalance)}`);
  } else {
    alert(`⚠️ Warning: You are over budget by ${formatCurrency(Math.abs(remainingBalance))}!`);
  }
}

// Automatically start the prompt sequence when webpage loads
window.addEventListener("DOMContentLoaded", initSpendWise);