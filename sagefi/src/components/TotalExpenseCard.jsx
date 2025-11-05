import React from 'react';
import { TrendingDown } from 'lucide-react';

export default function TotalExpenseCard({ totalExpenses, transactionCount }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <p className="text-gray-600 text-sm mb-1">Total Expenses</p>
                    <p className="text-4xl font-bold text-indigo-600">
                        ₹{totalExpenses.toFixed(2)}
                    </p>
                </div>
                <div className="bg-indigo-100 p-4 rounded-full">
                    <TrendingDown className="w-8 h-8 text-indigo-600" />
                </div>
            </div>
            <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                    {transactionCount} {transactionCount === 1 ? 'transaction' : 'transactions'} recorded
                </p>
            </div>
        </div>
    );
}