const getUserDetail = async () => {
  const userId = JSON.parse(localStorage.getItem('userId'));
  const userInfo = await getUserInfo(userId);

  const name = document.querySelector('.name');
  const email = document.querySelector('.email');
  const website = document.querySelector('.website');

  name.innerText = `${userInfo.name} (@${userInfo.username})`;
  email.innerText = userInfo.email;
  website.innerText = userInfo.website;
}
getUserDetail();