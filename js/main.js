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
function ShowModal(m){
  const modalContainer = document.getElementById(m)
  
  modalContainer.classList.toggle('showModal')
}

function CloseModal(m){
  const modal = document.getElementById(m)
  modal.classList.remove('showModal')
}

const root = document.documentElement; 
function ColorThemes(color){
  if(color == 'default'){
    root.style.setProperty('--color-primary', '#FF008E');
    root.style.setProperty('--color-secundary', '#FFCD1E');
  }
  if(color == 'blue'){
    root.style.setProperty('--color-primary', '#0047FF');
    root.style.setProperty('--color-secundary', '#57E5DC');
  }
  if(color == 'green'){
    root.style.setProperty('--color-primary', '#00FF19');
    root.style.setProperty('--color-secundary', '#57E5DC');
  }
  if(color == 'purple'){
    root.style.setProperty('--color-primary', '#D800B9');
    root.style.setProperty('--color-secundary', '#8257E5');
  }
  root.style.setProperty('--img-background', `url(../images/${color}-background.svg)`);
  root.style.setProperty('--img-light', `url(../images/${color}-light.svg)`);
  root.style.setProperty('--img-range', `url(../images/${color}-range.svg)`);
  closeModal.click()
}