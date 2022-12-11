// links the HTML form to JS
const form=document.getElementById("github-form")

// preventing default form settings
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    //fetches the input from the user
    const search=document.getElementById("search").value
    //rewrites the input into github name format
    const name=search.split(' ').join('')
    //fetches user data from the github API
    fetch("https://api.github.com/users/"+name)
    .then((result)=>result.json())
    .then((data)=>{
        // shows the user's avatar which creates a link to the user's repo in a new tab
        document.getElementById("user-list").innerHTML=`
        <a target="_blank" href="https://www.github.com/${name}"> <img src="${data.avatar_url}"/> </a>
        `
    })
})