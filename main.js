const social_media_links = {
    github: "GuruDevOp7884",
    youtube:"UCN10VlBQuOlkk0IfKwX-thA",
    facebook: "gustavo.alves.108889",
    instagram: "guru_zzz",
    twitter: "Mctvp123"

}

function change_social_media_links(){
   for (let li of social_links.children) {
       const social = li.getAttribute('class')

       li.children[0].href= `https://${social}.com/${social_media_links[social]}`
   }
}

change_social_media_links()

function get_github_profile_infos(){
    const url= `https://api.github.com/users/${social_media_links.github}`

     fetch(url)
     .then(response => response.json() )
     .then(data => { 
        //user_name.textContent = data.name
        user_bio.textContent = data.bio
        user_link.href = data.html_url
        user_image.src = data.avatar_url
        user_login.textContent = data.login
     })
} 
get_github_profile_infos()