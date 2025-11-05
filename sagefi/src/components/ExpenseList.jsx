import React from 'react';
import { Trash2, IndianRupee, Calendar } from 'lucide-react';

export default function ExpenseList({ expenses, categories, deleteExpense }) {
    const getCategoryInfo = (cat) => {
        return categories.find(c => c.value === cat) || categories[categories.length - 1];
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Transactions</h2>
            {expenses.length === 0 ? (
                <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                        <IndianRupee className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-500">No expenses yet. Add your first expense above!</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {expenses.map(expense => {
                        const catInfo = getCategoryInfo(expense.category);
                        return (
                            <div
                                key={expense.id}
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex items-center gap-4 flex-1">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${catInfo.color}`}>
                                        {catInfo.label}
                                    </span>
                                    <div className="flex-1">
                                        <p className="font-medium text-gray-800">{expense.description}</p>
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{new Date(expense.date).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="text-lg font-bold text-gray-800">
                                        ₹{expense.amount.toFixed(2)}
                                    </p>
                                    <button
                                        onClick={() => deleteExpense(expense.id)}
                                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                        aria-label="Delete expense"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}