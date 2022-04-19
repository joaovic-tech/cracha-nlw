btnSearch.addEventListener('click', function (e) {
  e.preventDefault()
  if(ISearch.value.length > 0){
    GithubProfile(ISearch.value)
  }else{
    alert('empty text field')
  }
})

function GithubProfile(githubLogin) {
  const url = `https://api.github.com/users/${githubLogin}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if(data.message != 'Not Found'){
        userName.textContent = data.name
        userLogin.textContent = data.login
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
      }else{
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
modal_list.style.display = 'none'
function ShowModal(m){
  var modal = document.getElementById(m)
  modal.classList.toggle('showModal')
  if(modal_list.style.display == 'none'){
    modal_list.style.display = 'block'
  } else {
    modal_list.style.display = 'none'
  }
}