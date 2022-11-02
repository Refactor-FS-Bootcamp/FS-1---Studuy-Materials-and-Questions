//Fetch API
async function fetchPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    let output = '';
    posts.forEach(post => output += `<h4>${post.title}</h4><p>${post.body}</p>`);
    document.body.innerHTML = output;
}

fetchPosts()