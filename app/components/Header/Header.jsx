'use client'

import { Home, List, MessageCircle, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AuthContextProvider from '@/app/lib/contexts/AuthContext';
import LoginButton from '../LoginButton';

export default function Header() {
    const [theme, setTheme] = useState(() => {
         
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'light';
        }
        return 'light';
    });

    useEffect(() => {
        
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <>
            <nav className="flex justify-between items-center px-7 py-3 border-b">
                <Link href={'/'}>
                    <img src="logo.png" alt="logo" width="70" height="90" />
                </Link>
                <ul className="flex gap-6 items-center">
                    <Link href={'/'}>
                        <li className="flex items-center gap-2">
                            <Home />
                            Home
                        </li>
                    </Link>
                    <Link href={'/categories'}>
                        <li className="flex items-center gap-2">
                            <List />
                            Categories
                        </li>
                    </Link>
                    <Link href={'/contact'}>
                        <li className="flex items-center gap-2">
                            <MessageCircle />
                            Contact Us
                        </li>
                    </Link>
                </ul>

                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="flex items-center gap-2 border px-3 py-1 rounded"
                    >
                        {theme === 'light' ? <Sun /> : <Moon />}
                        {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                    </button>
                    <AuthContextProvider>
                        <LoginButton />
                    </AuthContextProvider>
                </div>
            </nav>

 
            <style jsx global>{`
                :root {
                    --background-color: white;
                    --text-color: black;
                }

                [data-theme='dark'] {
                    --background-color: black;
                    --text-color: white;
                }

                body {
                    background-color: var(--background-color);
                    color: var(--text-color);
                    transition: background-color 0.3s, color 0.3s;
                }
            `}</style>
        </>
    );
}
