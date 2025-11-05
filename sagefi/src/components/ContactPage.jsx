import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
                    <p className="text-gray-600 text-lg">We'd love to hear from you. Send us a message!</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    placeholder="How can we help?"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Your message..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none"
                                />
                            </div>
                            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                                Send Message
                            </button>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-indigo-100 p-3 rounded-lg">
                                        <Mail className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                                        <p className="text-gray-600">ironspec07@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-indigo-100 p-3 rounded-lg">
                                        <Phone className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                                        <p className="text-gray-600">+91 7784810682</p>
                                        <p className="text-gray-600">Mon-Fri, 9am-6pm EST</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-indigo-100 p-3 rounded-lg">
                                        <MapPin className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-1">Office</h3>
                                        <p className="text-gray-600">Kanpur</p>
                                        <p className="text-gray-600">Uttar Pradesh,India 208021</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
                            <h3 className="text-2xl font-semibold mb-4">Why Choose SageFi?</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="text-2xl">✓</span>
                                    <span>Track expenses effortlessly</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-2xl">✓</span>
                                    <span>Visual insights with charts</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-2xl">✓</span>
                                    <span>Budget management tools</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-2xl">✓</span>
                                    <span>Export your data anytime</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}