const LinkSocialMedia = {
  github: 'joaovic-tech',
  youtube: 'joaovic.tech',
  facebook: 'joaovic.tech',
  instagram: 'joaovic.tech',
  twitter: 'joaovic.tech'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinkSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileOnfos() {
  const url = `https://api.github.com/users/${LinkSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileOnfos()
