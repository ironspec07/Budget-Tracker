import React from 'react';
import { BarChart3 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function WeeklyBarChart({ weeklyData }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-5 h-5 text-indigo-600" />
                <h2 className="text-xl font-semibold text-gray-800">Last 7 Days</h2>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip formatter={(value) => `₹${value.toFixed(2)}`} />
                    <Bar dataKey="amount" fill="#4f46e5" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}