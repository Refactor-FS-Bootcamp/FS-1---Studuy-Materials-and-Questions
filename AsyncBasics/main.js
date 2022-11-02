const posts = [
    { title: 'JS Basics', summary: 'This post contains the basics of JS' },
    { title: 'DOM Basics', summary: 'This post contains the basics of DOM' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => output += `<h4>${post.title}</h4><p>${post.summary}</p>`);
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const num = 5;
            num > 4 ? resolve() : reject('Error: something is wrong');
        }, 2000)
    })
}

async function init(){
    try {
        await createPost({ title: 'Async Basics', summary: 'This post contains the basics of Async' })
        getPosts()
    } catch (error) {
        document.body.innerHTML = `${error}`
    }
}

init();

// createPost({ title: 'Async Basics', summary: 'This post contains the basics of Async' })
//             .then(getPosts)
//             .catch(err => document.body.innerHTML = `${err}`)

// function createPost(post, fn) {
//     setTimeout(() => {
//         posts.push(post);
//         fn()
//     }, 2000)
// }

// createPost({ title: 'Async Basics', summary: 'This post contains the basics of Async' }, getPosts);