'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminCheck() {

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('isAdmin') !== 'true') {
    redirect("/login");
    }
  }, [redirect]);

  return null; 
}