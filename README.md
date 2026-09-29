# SpendWise Dashboard Shell

A responsive, accessible financial dashboard layout built with semantic HTML5, CSS Grid, and Flexbox.

## Features & Architecture

1. **Grid & Flexbox Integration**:
   - **CSS Grid** is used for the overall 2-column main layout (`.dashboard-container`) and the dynamic card grid layout (`.card-grid`).
   - **Flexbox** handles content alignment inside navigation elements, header items, and structural internal layouts of the individual cards.
2. **CSS Variables & Theming**:
   - Palette colors (`--brand-color`, `--accent-color`, `--bg-surface`, `--text-primary`, `--text-secondary`) are scoped on `:root`.
   - Includes automatic **Dark Mode** via `@media (prefers-color-scheme: dark)`.
3. **Micro-interactions**:
   - Interactive cards transition vertically with elevation drop-shadows on `:hover` and `:focus` within `200ms`.
4. **Responsiveness**:
   - Breakpoint at `768px` transitions the CSS Grid areas into a single-column orientation suitable for mobile displays.
   # SpendWise - JavaScript Foundation

An interactive financial budgeting dashboard extension built with vanilla JavaScript.

## Features & JavaScript Concepts Implemented

1. **Variables & Data Types**:
   - `let` and `const` keywords used for managing dynamic budget calculations and category objects.
   - Handles `Numbers`, `Strings`, and `Booleans` with explicit parsing (`parseFloat`).

2. **User Input & Data Processing**:
   - Prompts users for monthly budget and category expenses (`Food`, `Transport`, `Utilities`).
   - Includes input validation to guard against non-numeric inputs (`isNaN`).

3. **Calculations & Math Operations**:
   - Calculates total expenses, remaining balances, and budget utilization percentages.

4. **Modular & Reusable Functions**:
   - `calculateRemainingBalance()`: Handles balance subtraction logic.
   - `calculatePercentageSpent()`: Computes total percentage of budget spent.
   - `formatCurrency()`: Formats numeric values to standard currency notation ($XX.XX).
   - `displayBudgetSummary()`: Logs structured reports directly to the browser console.