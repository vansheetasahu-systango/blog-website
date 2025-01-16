'use client';

import { Search } from 'lucide-react';

export default function SearchButton() {
    return (
        <div className="flex-1 max-w-lg">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 hover:text-black">
                    <Search />
                </button>
            </div>
        </div>
    );
}
