import React from 'react';
import { Filter, Download } from 'lucide-react';

export default function FilterBar({
    viewMode,
    setViewMode,
    filterCategory,
    setFilterCategory,
    categories,
    exportData
}) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-gray-600" />
                    <span className="font-semibold text-gray-800">Filters:</span>
                </div>
                <select
                    value={viewMode}
                    onChange={(e) => setViewMode(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                >
                    <option value="all">All Time</option>
                    <option value="monthly">This Month</option>
                    <option value="weekly">Last 7 Days</option>
                </select>
                <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                >
                    <option value="all">All Categories</option>
                    {categories.map(cat => (
                        <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                </select>
                <button
                    onClick={exportData}
                    className="ml-auto flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                    <Download className="w-5 h-5" />
                    <span>Export CSV</span>
                </button>
            </div>
        </div>
    );
}