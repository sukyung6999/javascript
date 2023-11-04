// 💡 https://github.com/erumcoding/js-101-part-1
// 👉 이 아래 코드를 작성하세요.

const updateProfile = (userInfo) => {
    const name = document.querySelector('.name');
    const email = document.querySelector('.email');
    const website = document.querySelector('.website');

    name.innerText = `@${userInfo.name}`;
    email.innerText = userInfo.email;
    email.href = `mailto:${userInfo.email}`
    website.innerText = userInfo.website;
    website.href = `http://${userInfo.email}`
    website.target = '_blank'
}
const loadUserProfile = async () => {
    const userId = JSON.parse(localStorage.getItem('userId'));
    const userInfo = await getUserId(userId);

    updateProfile(userInfo);
}
loadUserProfile();