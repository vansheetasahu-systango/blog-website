 
async function fetchBlogs() {
    const res = await fetch('https://6787e220c4a42c9161089db1.mockapi.io/blogs', { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch blogs');
    }
    return res.json();
}

export default async function BlogList() {
    const blogs = await fetchBlogs();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
                <div key={blog.id} className="p-4 border rounded shadow">
                    <img
                        src={blog.thumbnail || '/default-thumbnail.jpg'}
                        alt={blog.title || 'Untitled'}
                        className="w-full h-40 object-cover rounded"
                    />
                    <h2 className="text-lg font-bold mt-2">{blog.title || 'Untitled'}</h2>
                    <p className="text-gray-700">{blog.content?.slice(0, 100) || 'No description available'}...</p>
                    <p className="text-sm text-gray-500">By {blog.author || 'Anonymous'}  </p>
                    <p className="text-sm text-gray-500">
      on {blog.date ? new Date(blog.date).toLocaleDateString() : 'Unknown date'}
</p>

                </div>
            ))}
        </div>
    );
}

