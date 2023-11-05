const feed = document.querySelector('.feed');
const getUserInfo = (id) => {
  const userURL = `https://jsonplaceholder.typicode.com/users/${id}`

  return fetch(userURL)
          .then((response) => response.json())
          .then((data) => data)
}

const createPost = async (data) => {

  const post = document.createElement('div');
  const user = document.createElement('a');
  const article = document.createElement('div');

  post.className = 'post';
  user.className = 'user';
  article.className = 'article';

  const userInfo = await getUserInfo(data.userId);
  user.innerText = `@${userInfo.username}`;
  article.innerText = data.body;

  user.href = './user.html';
  user.addEventListener('click', () => {
    localStorage.setItem('userId', JSON.stringify(data.userId));
  });

  post.append(user, article);
  feed.append(post);
}

const getPostList = () => {
  const URL = 'https://jsonplaceholder.typicode.com/posts';

  fetch(URL)
    .then((response) => response.json())
    .then((posts) => {
      posts.forEach((post) => {
        createPost(post);
      })
    })
}

if (feed) {
  getPostList();
}