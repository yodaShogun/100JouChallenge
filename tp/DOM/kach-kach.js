//Firstly
let idWrapper = document.getElementById('wrapper')
idWrapper.querySelector('div:nth-child(3)>span').textContent = "kachèt révélé";

//Secondly
let wrapperDiv = document.getElementsByClassName('div-wrapper')
wrapperDiv[0].getElementsByTagName('div').item(3).textContent = "kachèt révélé"

//Thirdly
document.querySelectorAll('#wrapper>div span')[1].textContent = "kachèt révélé"