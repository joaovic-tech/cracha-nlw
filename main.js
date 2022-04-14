function githubProfile(githubLogin) {
  const url = `https://api.github.com/users/${githubLogin}`
  fetch(url).then(response => response.json()).then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
  })
}
githubProfile('joaovic-tech')

/* Evento de clique para pegar o valor do input e envias para function githubProfile*/
btnSearch.addEventListener('click', function(e) {
  e.preventDefault();
  githubProfile(IUserGithub.value)
})

IUserGithub.addEventListener('click', function(){
  if(label.className == 'active'){
    label.classList.remove('active')
  }else {
    label.classList.add('active')
  }
})