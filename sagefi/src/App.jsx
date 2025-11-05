import React, { useState, useMemo } from 'react';
import NavBar from './components/NavBar';
import DashboardPage from './components/DashboardPage';
import ContactPage from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('food');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [filterCategory, setFilterCategory] = useState('all');
  const [viewMode, setViewMode] = useState('all');
  const [budget, setBudget] = useState(1000);

  const categories = [
    { value: 'food', label: '🍔 Food', color: 'bg-orange-100 text-orange-800', chartColor: '#fb923c' },
    { value: 'transport', label: '🚗 Transport', color: 'bg-blue-100 text-blue-800', chartColor: '#3b82f6' },
    { value: 'shopping', label: '🛍️ Shopping', color: 'bg-pink-100 text-pink-800', chartColor: '#ec4899' },
    { value: 'entertainment', label: '🎬 Entertainment', color: 'bg-purple-100 text-purple-800', chartColor: '#a855f7' },
    { value: 'bills', label: '📄 Bills', color: 'bg-red-100 text-red-800', chartColor: '#ef4444' },
    { value: 'other', label: '📦 Other', color: 'bg-gray-100 text-gray-800', chartColor: '#6b7280' }
  ];

  const addExpense = () => {
    if (!description.trim() || !amount || parseFloat(amount) <= 0) return;

    const newExpense = {
      id: Date.now(),
      description: description.trim(),
      amount: parseFloat(amount),
      category,
      date,
      timestamp: new Date().toISOString()
    };

    setExpenses([newExpense, ...expenses]);
    setDescription('');
    setAmount('');
    setCategory('food');
    setDate(new Date().toISOString().split('T')[0]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addExpense();
    }
  };

  const filteredExpenses = useMemo(() => {
    let filtered = expenses;

    if (filterCategory !== 'all') {
      filtered = filtered.filter(exp => exp.category === filterCategory);
    }

    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    if (viewMode === 'monthly') {
      filtered = filtered.filter(exp => {
        const expDate = new Date(exp.date);
        return expDate.getMonth() === currentMonth && expDate.getFullYear() === currentYear;
      });
    } else if (viewMode === 'weekly') {
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      filtered = filtered.filter(exp => new Date(exp.date) >= weekAgo);
    }

    return filtered;
  }, [expenses, filterCategory, viewMode]);

  const totalExpenses = filteredExpenses.reduce((sum, exp) => sum + exp.amount, 0);
  const budgetRemaining = budget - totalExpenses;
  const budgetPercentage = (totalExpenses / budget) * 100;

  const categoryData = useMemo(() => {
    const data = categories.map(cat => ({
      name: cat.label,
      value: filteredExpenses
        .filter(exp => exp.category === cat.value)
        .reduce((sum, exp) => sum + exp.amount, 0),
      color: cat.chartColor
    })).filter(item => item.value > 0);
    return data;
  }, [filteredExpenses]);

  const weeklyData = useMemo(() => {
    const last7Days = [];
    const now = new Date();

    for (let i = 6; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      const dateStr = date.toISOString().split('T')[0];
      const dayExpenses = expenses
        .filter(exp => exp.date === dateStr)
        .reduce((sum, exp) => sum + exp.amount, 0);

      last7Days.push({
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        amount: dayExpenses
      });
    }

    return last7Days;
  }, [expenses]);

  const exportData = () => {
    const csvContent = [
      ['Date', 'Description', 'Category', 'Amount'],
      ...filteredExpenses.map(exp => [
        exp.date,
        exp.description,
        exp.category,
        exp.amount.toFixed(2)
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sagefi-expenses-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {currentPage === 'dashboard' ? (
        <DashboardPage
          expenses={expenses}
          filteredExpenses={filteredExpenses}
          totalExpenses={totalExpenses}
          budget={budget}
          setBudget={setBudget}
          budgetRemaining={budgetRemaining}
          budgetPercentage={budgetPercentage}
          viewMode={viewMode}
          setViewMode={setViewMode}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          categories={categories}
          exportData={exportData}
          categoryData={categoryData}
          weeklyData={weeklyData}
          description={description}
          setDescription={setDescription}
          amount={amount}
          setAmount={setAmount}
          category={category}
          setCategory={setCategory}
          date={date}
          setDate={setDate}
          addExpense={addExpense}
          handleKeyPress={handleKeyPress}
          deleteExpense={deleteExpense}
        />
      ) : (
        <ContactPage />
      )}
    </div>
  );
}