let matrix = [], bingoBalls = [], duplicate = []
let mx = 5, my = 5, chance = 2, item = 0
let matrixMedianX = Math.floor(mx/2), matrixMedianY = Math.floor(my/2);
let bingoOrNot = false;

function generateNumber(min, max){ 
    return Math.floor(Math.random()*(max-min))
} 

function generateMatrix(){
    for(let x=0; x<mx; x++){

        let matrixRow = []

        for(let y=0; y<mx; y++){

            if( x == matrixMedianX && y == matrixMedianY)
                matrixRow.push("X")
            else{

                do{
                    item = generateNumber(0,99) 
                }while((duplicate.includes(item)))

                matrixRow.push(item)
                duplicate.push(item)
            }
        }

        console.table(matrixRow.join('\t\t'));
        matrix.push(matrixRow)
    }
} 


let user = prompt("Enter your Name")

function player(message=''){
    alert(`User: ${user}\nChance: ${chance}\n${message}`)
}

player()

generateMatrix()


    
setTimeout(()=>{

    while(chance>0){
        
        while(bingoBalls.length<5){

            let balls = matrix[generateNumber(0,5)][generateNumber(0,5)]

                if(balls == 'X')
                    matrix[generateNumber(0,5)][generateNumber(0,5)]
                else
                    bingoBalls.push(balls)           
        }   

        alert("\nYour bingo Balls: "+bingoBalls+'\n')
        console.log(bingoBalls);
        
        for(let x=0; x<mx; x++){

            for(let y=0; y<my; y++){

                if(bingoBalls.includes(matrix[x][y])){

                    matrix[x][y] = '['+matrix[x][y]+']'

                    if(bingoBalls.includes(matrix[x][y])){

                        if(bingoBalls.includes(matrix[x-1][y])){

                            if(bingoBalls.includes(matrix[x+1][y])){

                                if(bingoBalls.includes(matrix[x][y-1])){

                                    if(bingoBalls.includes(matrix[x][y+1]))
                                        bingoOrNot = true
                                }
                            }
                        }
                    }
                    else
                        bingoOrNot = false;
                }
                else
                    matrix[x][y] = matrix[x][y]
            }
        }

        bingoBalls = []
        chance -= 1
        bingoOrNot ? player("You're Bingo") : player("You're Lost")  

        console.table(matrix);

        if(chance == 0){
            if(confirm("Wanna play again")){
                chance = 2
                matrix = []
                generateMatrix()
            }
            else
                break
        }
    }

}, 2000)


