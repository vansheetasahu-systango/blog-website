'use client';

import Link from 'next/link';

export default function Logo() {
    return (
        <Link href="/">
            <img src="/logo.png" alt="logo" width="70" height="90" />
        </Link>
    );
}
