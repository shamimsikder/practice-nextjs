import React from 'react'
import Link from 'next/link'

export default function Blogs() {

    const blogs = [
    {

        id: 1,
        title:"blog 1",
        desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."

    },
    {

        id: 2,
        title:"blog 2",
        desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."

    }
];

  return (
    <main >
        <div>This is blog page</div>
        <ul className='mt-4'>
            {
                blogs.map(
                    (blog) => (
                    <li className='mt-2' key={blog.id}>
                        <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </li>
                    )
                )
            }
        </ul>
    </main>
  )
}
