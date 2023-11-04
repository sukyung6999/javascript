const feed = document.querySelector('.feed');
const getUserId = (id) => {
    const URL = `https://jsonplaceholder.typicode.com/users/${id}`;
    
    return fetch(URL)
        .then((response) => response.json())
        .then((data) => data)
}

const createPost = async ({
    userId, 
    body
}) => {

    const post = document.createElement('div');
    const user = document.createElement('a');
    const article = document.createElement('div');

    post.className = 'post';
    user.className = 'user';
    article.className = 'article';

    const userInfo = await getUserId(userId);
    user.innerText = `@${userInfo.username}`;
    article.innerText = body;

    post.append(user, article);
    feed.append(post);

    user.href = './user.html';
    user.addEventListener('click', () => {
        localStorage.setItem('userId', JSON.stringify(userInfo.id));
    })
}
const getAllPost = () => {
    const URL = 'https://jsonplaceholder.typicode.com/posts';

    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((post) => {
                createPost(post);
            })
        })
}
if (feed) {
    getAllPost();
}