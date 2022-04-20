btnSearch.addEventListener('click', function (e) {
  e.preventDefault()
  if (sidebar.className == 'active') {
    ISearch.value.length > 0
      ? GithubProfile(ISearch.value)
      : alert('Empty text field')
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
        userLogin.textContent = data.login
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
      } else {
        alert('User Not Found')
      }
    })
}
GithubProfile('joaovic-tech')

// function show siderbar
function ShowSidebar() {
  sidebar.classList.toggle('active')
}

// Show Modals Lists
function ShowModal(m) {
  const modalContainer = document.getElementById(m)
  modalContainer.classList.toggle('showModal')
}

function CloseModal(m) {
  const modal = document.getElementById(m)
  modal.classList.remove('showModal')
}
