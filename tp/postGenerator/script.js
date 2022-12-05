let limit =3, postArray = []

async function getData(numberLimit){

    const getPostUrl = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"GET"
    })

    if(!getPostUrl.ok)
        document.body.innerHTML = "<h1 class=text-center align-middle>An Error Was Occured Wait a moment....</h1>"
    else{
       postArray = await getPostUrl.json()
       localStorage.setItem('data',postArray.length)
       let postLimit = postArray.splice(",",numberLimit)
       dynamicPost(postLimit)
       document.querySelector("code").innerHTML = `${JSON.stringify(postLimit)}`
    }
}

function dynamicPost(jsonData){
    for(el in jsonData){
        let title = document.createElement("h1")
        let desc = document.createElement('span')
        let divider = document.createElement('hr')
        title.className = "fs-6 bold mt-2"
        desc.className = "fw-lighter text-center mt-0"
        title.append(`${jsonData[el].title}`)
        desc.append(`${jsonData[el].body}`)
        document.querySelector('#postWrapper').appendChild(title)
        document.querySelector('#postWrapper').appendChild(desc)
        document.querySelector('#postWrapper').appendChild(divider)
    }

    for(el in postArray){
        var opt = document.createElement("option")
        if(el == limit)
            opt.selected = true
        opt.value = el
        opt.text = el
        document.querySelector("select").add(opt)
    } 
}

getData(limit)

let total = document.createElement('span')
total.append(localStorage.getItem('data'))
document.querySelector('select').after(total)

let showPost = document.querySelector('#show')

showPost.addEventListener('click',()=>{

    document.querySelector('#postWrapper').innerHTML = ""
    document.querySelector('code').textContent = ""
    limit = document.querySelector('select').value
    document.querySelector('select').innerHTML = ''
    getData(limit)

}) 

let resetPost = document.querySelector('#reset')

resetPost.addEventListener('click',()=>{

    document.querySelector('code').innerHTML = ""
    document.querySelector('#postWrapper').innerHTML = ""
    document.querySelector('select').innerHTML = ''
    getData(limit=3)
 
})




