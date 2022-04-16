function GroupSearch() {
  group.style.display = 'grid'
  container.style.display = 'none'
  iconSearch.style.display = 'none'
}

function githubProfile(githubLogin) {
  const url = `https://api.github.com/users/${githubLogin}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.message != 'Not Found') {
        emptyErrorText.style.display = 'none'
        IUserGithub.value = ''
        userName.innerHTML = data.name
        userName.style.color = 'var(--light)'
        userLogin.innerHTML = data.login
        userBio.innerHTML = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url

        if (userLogin.innerHTML == 'joaovic-tech') {
          seal.style.display = 'inline-block'
        }
      } else {
        emptyErrorText.style.display = 'flex'
        textError.innerHTML = `This <span style="color: var(--light)">${githubLogin}</span> user not found! <i class="fa-solid fa-face-sad-tear"></i>`
        userName.innerHTML = `This <span style="color: var(--light)">${githubLogin}</span> user not found! <i class="fa-solid fa-face-sad-tear"></i>`
        userName.style.color = 'red'
        userLogin.innerHTML = ''
        userBio.innerHTML = ''
        userLink.innerHTML = ''
        userImage.src = './images/UserIcon.jpg'
      }
    })
}
githubProfile('joaovic-tech')

/* this click event checks if the field is empty, 
otherwise it sends the username to the githubProfile function */

btnSearch.addEventListener('click', function (e) {
  e.preventDefault()
  if (IUserGithub.value.length > 0) {
    emptyErrorText.style.display = 'none'
    group.style.display = 'none'
    container.style.display = 'block'
    iconSearch.style.display = 'block'
    githubProfile(IUserGithub.value)
  } else {
    emptyErrorText.style.display = 'flex'
    textError.innerHTML = 'Empty text field!'
    IUserGithub.style.borderColor = 'red'
    label.style.color = 'red'
    IUserGithub.click()
  }
})
function LabelUsername() {
  if (
    IUserGithub.value.length > 0 ||
    IUserGithub.placeholder == 'empty text field'
  ) {
    label.classList.add('active')
  } else {
    label.classList.remove('active')
  }
}
