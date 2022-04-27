btnSearch.addEventListener('click', function (e) {
  e.preventDefault()
  if (sidebar.className == 'active') {
    if (ISearch.value.length > 0) {
      GithubProfile(ISearch.value)
      if (ISearch.value == 'joaovic-tech') {
        message.style.display = 'flex'
        msg_success.style.display = 'block'
        textAdmin.innerHTML =
          "Hey that's me! <i class='fa-solid fa-face-smile-wink'></i>"
        function Message() {
          message.style.display = 'none'
          msg_success.style.display = 'none'
        }
        setTimeout(Message, 3000)
      } else {
        textAdmin.innerHTML =
          'User found <i class="fa-solid fa-circle-check"></i>'
      }
      ISearch.value = ''
    }
  } else {
    sidebar.classList.add('active')
  }
})

function GithubProfile(githubLogin) {
  const url = `https://api.github.com/users/${githubLogin}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.message != 'Not Found') {
        userName.textContent = data.name
        document.title = `${data.name} | User Card`
        userLogin.textContent = data.login
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        repository.textContent = data.public_repos
        followers.textContent = data.followers
        following.textContent = data.following
        // Authentication Message
        function Message() {
          message.style.display = 'none'
          msg_success.style.display = 'none'
        }
        if (githubLogin != 'joaovic-tech') {
          message.style.display = 'flex'
          msg_success.style.display = 'block'
          setTimeout(Message, 3000)
        }
      } else {
        GithubProfile('joaovic-tech')
        message.style.display = 'flex'
        msg_error.style.display = 'block'
        function Message() {
          message.style.display = 'none'
          msg_error.style.display = 'none'
        }
        setTimeout(Message, 3000)
      }
    })
}
var pathURL = window.location.href
if (pathURL != 'https://badge-github.vercel.app/') {
  pathURL = pathURL.replace('https://badge-github.vercel.app/', '')
  if(pathURL != '#modal_color' || pathURL != '#modal_mode' || pathURL != '#modal_about'){
    GithubProfile(pathURL)
  }
} else {
  GithubProfile('joaovic-tech')
}
