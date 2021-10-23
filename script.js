const linksSocialMedia = {
  github: "SandroJuniorr",
  instagram: "sandrorogeriojunior",
  facebook: "maykbrito",
  youtube: "Rocketseat",
  twitter: "Rocketseat",
};

function changeSocialMediasLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
}
changeSocialMediasLinks();

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`
    
    fetch(url)
    .then(response =>  response.json())
    .then(data => {
        userName.textContent = data.name;
        userLink.href = data.html_url
        userBio.textContent = data.bio
        userPicture.src = data.avatar_url
        userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()