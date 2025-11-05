import React from 'react';
import TotalExpenseCard from './TotalExpenseCard';
import BudgetCard from './BudgetCard';
import FilterBar from './FilterBar';
import CategoryPieChart from './Charts/CategoryPieChart';
import WeeklyBarChart from './Charts/WeeklyBarChart';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

export default function DashboardPage({
    expenses,
    filteredExpenses,
    totalExpenses,
    budget,
    setBudget,
    budgetRemaining,
    budgetPercentage,
    viewMode,
    setViewMode,
    filterCategory,
    setFilterCategory,
    categories,
    exportData,
    categoryData,
    weeklyData,
    description,
    setDescription,
    amount,
    setAmount,
    category,
    setCategory,
    date,
    setDate,
    addExpense,
    handleKeyPress,
    deleteExpense
}) {
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 pt-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Your Financial Dashboard</h1>
                    <p className="text-gray-600">Manage your expenses wisely</p>
                </div>

                {/* Budget & Total Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <TotalExpenseCard
                        totalExpenses={totalExpenses}
                        transactionCount={filteredExpenses.length}
                    />
                    <BudgetCard
                        budget={budget}
                        setBudget={setBudget}
                        budgetRemaining={budgetRemaining}
                        budgetPercentage={budgetPercentage}
                    />
                </div>

                {/* Filters and Export */}
                <FilterBar
                    viewMode={viewMode}
                    setViewMode={setViewMode}
                    filterCategory={filterCategory}
                    setFilterCategory={setFilterCategory}
                    categories={categories}
                    exportData={exportData}
                />

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <CategoryPieChart categoryData={categoryData} />
                    <WeeklyBarChart weeklyData={weeklyData} />
                </div>

                {/* Add Expense Form */}
                <ExpenseForm
                    description={description}
                    setDescription={setDescription}
                    amount={amount}
                    setAmount={setAmount}
                    category={category}
                    setCategory={setCategory}
                    date={date}
                    setDate={setDate}
                    categories={categories}
                    addExpense={addExpense}
                    handleKeyPress={handleKeyPress}
                />

                {/* Expense List */}
                <ExpenseList
                    expenses={filteredExpenses}
                    categories={categories}
                    deleteExpense={deleteExpense}
                />
            </div>
        </div>
    );
}