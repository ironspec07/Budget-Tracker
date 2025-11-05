import React from 'react';
import { IndianRupee, Home, MessageSquare, Menu, X } from 'lucide-react';

export default function NavBar({ currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen }) {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('dashboard')}>
                        <div className="bg-indigo-600 p-2 rounded-lg">
                            <IndianRupee className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-indigo-600">SageFi</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        <button
                            onClick={() => setCurrentPage('dashboard')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${currentPage === 'dashboard' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            <Home className="w-5 h-5" />
                            <span>Dashboard</span>
                        </button>
                        <button
                            onClick={() => setCurrentPage('contact')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${currentPage === 'contact' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            <MessageSquare className="w-5 h-5" />
                            <span>Contact Us</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <button
                            onClick={() => {
                                setCurrentPage('dashboard');
                                setMobileMenuOpen(false);
                            }}
                            className={`w-full flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${currentPage === 'dashboard' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            <Home className="w-5 h-5" />
                            <span>Dashboard</span>
                        </button>
                        <button
                            onClick={() => {
                                setCurrentPage('contact');
                                setMobileMenuOpen(false);
                            }}
                            className={`w-full flex items-center gap-2 px-4 py-3 rounded-lg transition-colors mt-2 ${currentPage === 'contact' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            <MessageSquare className="w-5 h-5" />
                            <span>Contact Us</span>
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}