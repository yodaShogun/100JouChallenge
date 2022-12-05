let limit = 1;

let generator = [
    {
        "title": "100JouChallenge",
        "date": "10-10-2022",
        "body": "Every fuckin day the adrenaline grow up",
    },
    {
        "title": "BootCamp",
        "date": "14-11-2022",
        "body": "Almost done with this goals, keep going my man",
    },
    {
        "title": "BeastMode",
        "date": "03-11-2022",
        "body": "you waste enough time in your life bro, get fucking up and chase your goals",
    }
]  


document.getElementById("wrapper").addEventListener('click',(e)=>{
    console.log(`${e.currentTarget}`);
})

let post = document.getElementById("postList")
let code = document.getElementById('format')
code.textContent=  `${JSON.stringify(generator)}`

for(el in generator){
    let title = document.createElement("h1")
    let time = document.createElement("h2")
    let desc = document.createElement("p")
    title.textContent = `${generator[el].title}`
    time.textContent = `${generator[el].date}`
    desc.textContent = `${generator[el].body}`
    title.style.fontSize = "20px"
    time.style.fontSize = "12px"
    post.appendChild(title)
    post.appendChild(time)
    post.appendChild(desc)
}

const sel = document.querySelector('select')

for (el in generator){
    let opt = document.createElement('option')
    opt.value = el
    opt.text = `${parseInt(el)+1}`
    sel.appendChild(opt)
}  

const shwBtn = document.querySelector('#show')

shwBtn.addEventListener('click',()=>{
    
    post.textContent = ""

    limit = document.querySelector('select').value

    console.log(limit);

    let spliter = generator.splice(0,limit)

    code.textContent =  `${JSON.stringify(spliter)}`

    for(el in spliter){
        let title = document.createElement("h1")
        let time = document.createElement("h2")
        let desc = document.createElement("p")
        title.textContent = `${spliter[el].title}`
        time.textContent = `${spliter[el].date}`
        desc.textContent = `${spliter[el].body}`
        title.style.fontSize = "20px"
        time.style.fontSize = "12px"
        post.appendChild(title)
        post.appendChild(time)
        post.appendChild(desc)
    } 
})







