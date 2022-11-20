// let string = "papa papa papa"
// let arrayString = string.split(" ")
// console.log(arrayString);

let objet = {

}

for(let x in  objet){
    if(typeof(objet[x])==String)
        objet[x] = '_'+objet[x]+'_'
}
