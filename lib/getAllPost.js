export default async function getAllPost (){

    const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');

    return posts.json();

}