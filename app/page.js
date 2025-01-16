//  import Image from "next/image";
// import Header from "./components/Header/Header";
// export const dynamic = 'force-dynamic'

import BlogList from './components/BlogList';

export default function Home() {
    return (
        <main className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-4">Welcome to the Blog Website</h1>
            <BlogList />
        </main>
    );
}
