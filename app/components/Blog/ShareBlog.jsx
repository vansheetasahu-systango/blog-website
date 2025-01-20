 'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ShareBlog() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const updateUserStatus = () => {
      const userStatus = localStorage.getItem("user") === "loggedIn";
      setUser(userStatus);
    };
  
    // Run on mount
    updateUserStatus();
  
    // Listen for localStorage changes
    window.addEventListener("storage", updateUserStatus);
    return () => window.removeEventListener("storage", updateUserStatus);
  }, []);
  

  return (
    <div>
      {user && (
        <Link
          href="/blog/create"
          className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 shadow-md transition-all duration-200"
        >
          Create New Blog Form
        </Link>
      )}
    </div>
  );
}
