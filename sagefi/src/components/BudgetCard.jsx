import React, { useState } from 'react';
import { IndianRupee } from 'lucide-react';

export default function BudgetCard({ budget, setBudget, budgetRemaining, budgetPercentage }) {
    const [showBudgetInput, setShowBudgetInput] = useState(false);
    const [tempBudget, setTempBudget] = useState(budget.toString());

    const saveBudget = () => {
        const newBudget = parseFloat(tempBudget);
        if (newBudget > 0) {
            setBudget(newBudget);
            setShowBudgetInput(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <p className="text-gray-600 text-sm mb-1">Budget Status</p>
                    <p className={`text-4xl font-bold ${budgetRemaining >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ₹{Math.abs(budgetRemaining).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                        {budgetRemaining >= 0 ? 'Remaining' : 'Over Budget'}
                    </p>
                </div>
                <button
                    onClick={() => setShowBudgetInput(!showBudgetInput)}
                    className="bg-green-100 p-4 rounded-full hover:bg-green-200 transition-colors"
                >
                    <IndianRupee className="w-8 h-8 text-green-600" />
                </button>
            </div>
            {showBudgetInput && (
                <div className="flex gap-2 mb-4">
                    <input
                        type="number"
                        value={tempBudget}
                        onChange={(e) => setTempBudget(e.target.value)}
                        placeholder="Set budget"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                    <button
                        onClick={saveBudget}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                        Save
                    </button>
                </div>
            )}
            <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Budget: ₹{budget.toFixed(2)}</span>
                    <span>{budgetPercentage.toFixed(0)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className={`h-2 rounded-full transition-all ${budgetPercentage > 100 ? 'bg-red-600' : budgetPercentage > 80 ? 'bg-yellow-500' : 'bg-green-600'
                            }`}
                        style={{ width: `${Math.min(budgetPercentage, 100)}%` }}
                    />
                </div>
            </div>
        </div>
    );
}