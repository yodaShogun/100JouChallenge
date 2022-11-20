function isLower(letter){
    return letter.toLowerCase() === letter
}

function isUpper(letter){
    return letter.toUpperCase() === letter
}

function LengthError(lengthMessage){
   return new Error(lengthMessage)
}

function SaltError(saltMessage){
    return new Error(saltMessage)
}

function BlankError(blankMessage){
    return new Error(blankMessage)
}

let checkInput = /^[a-zA-Z]+$/

const balistik = {
    alph : "abcdefghijklmnopqrstuvwxyz",
    salt : "Ux00",
    encrypt: function(str){
        if(checkInput.test(str)&&str.indexOf(' ')<0){
                let crypt = this.salt
                for(let el of str){
                    if(isLower(el)){
                        crypt += '.'+this.alph.indexOf(el)
                    }
                    else if(isUpper(el)){
                        crypt += '.'+0+this.alph.indexOf(el.toLowerCase())
                    }
                }
                crypt += '.'+str.length
                return crypt;
        }else
            throw new BlankError("WhiteSpace Not Valid")       
    },

    decrypt: function (str){
        let unCrypt = ""
        let splitCrypt = str.split('.')
        let cryptSalt = splitCrypt[0]
        let cryptlength = parseInt(splitCrypt[splitCrypt.length-1])
        splitCrypt.pop()
        splitCrypt.shift()

        if(cryptSalt != this.salt)
            throw new SaltError("Invalid Crypt ALgorithm")
        else{
            for (let x of splitCrypt){
                if(x.includes("0")){
                    x = x.replace('0', '')
                    unCrypt += this.alph[parseInt(x)].toUpperCase()
                }else
                    unCrypt += this.alph[parseInt(x)]
            }
            if(unCrypt.length != cryptlength)
                throw new LengthError("The length doesn't matched")
            else
                return unCrypt;
        }
    }
} 


// console.log(balistik.encrypt("ale"))
//console.log(balistik.encrypt("Avi"))
// console.log(balistik.decrypt("Ux00.015.14.11.8.2.4.6"));

console.log(balistik.decrypt("Ux00.015.14.11.8.2.4.6"));
console.log(balistik.decrypt("Ux00.00.21.8.3"));