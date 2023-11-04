const updateProfile = (userInfo) => {
    const name = document.querySelector('.name');
    const email = document.querySelector('.email');
    const website = document.querySelector('.website');

    name.innerText = `@${userInfo.name} (${userInfo.username})`;
    email.innerText = userInfo.email;
    website.innerText = userInfo.website;
}

const loadUserProfile = async () => {
    const userId = JSON.parse(localStorage.getItem('userId'));
    const userInfo = await getUserId(userId);

    updateProfile(userInfo);
}
loadUserProfile();