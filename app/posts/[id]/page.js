import getPost from '@/lib/getPost';
import React from 'react';

export async function generateMetadata({params}){

    const {id} = params;
    const post = await getPost(id)

    return {
        title: post.title,
        description: post.body,
      }
      

}

export default async function Post({params}) {

    const {id} = params;
    const post = await getPost(id)

    return (
        <main>
            <h1 className='mb-5'>{id}</h1>
            <h1 className='mb-5'>{post.title}</h1>
            <p>{post.body}</p>
        </main>
    );
}