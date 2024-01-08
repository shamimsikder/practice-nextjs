import getAllPost from '@/lib/getAllPost';
import Link from 'next/link';
import React from 'react';

export default async function page() {

    const posts = await getAllPost()

    return (
        <main>
            
            <h1>All Post</h1>
            <ul>
                {posts.map(
                    post => 
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                    )
                }
            </ul>

        </main>
    );
}
