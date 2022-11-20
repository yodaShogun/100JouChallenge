class MissingParameterError extends Error{
    constructor(message){
        super(message)
        this.name = "PARAMETER_ERROR"
    }
}

class InfinityResultError extends Error{
    constructor(message){
        super(message)
        this.name = "INFINITY_ERROR"
    }
}

class ZeroDivisionError extends Error{
    constructor(message){
        super(message)
        this.name = "DIVISION_ERROR"
    }
}

class NegativeNumberError extends Error{
    constructor(message){
        super(message)
        this.name = "NEGATIVENUMBER_ERROR"
    }
}

class ValueError extends Error{
    constructor(message){
        super(message)
        this.name = "VALUE_ERROR"
    }
} 

class TypeError extends Error{
    constructor(message){
        super(message)
        this.name = "TYPE_ERROR"
    }
}


class Basic{

    a

    add(){
        let some = Array.from(arguments)
        if(some.length<2){
           throw new MissingParameterError("Too Less Argument")
        }else{
            this.a = 0
            for(let x=0; x<some.length; x++){
                if(Number(some[x]))
                    this.a += some[x]
                else
                    throw new TypeError("The Method excepting for a Number")
            }
            return this.a
        }
    } 

    substract(){
        let moins = arguments
        if(moins.length<2){
            throw new MissingParameterError("Too Less Argument")
        }else{
                if(Number(moins[0]) || Number(moins[1]))
                    this.a = moins[0] - moins[1]
                else
                    throw new TypeError("The Method excepting for a Number")
            return this.a
        }
    } 

    multiply(){
        let mult = Array.from(arguments)
        this.a = 1
        if(mult.length<2){
            throw new MissingParameterError("Too Less Argument")
        }else{
            for(let x of mult){
                if(Number(x))
                    this.a *= x
                else
                    throw new TypeError("The Method excepting for a Number")
            }
            return this.a
        } 
    } 

    divide(){
        let div = Array.from(arguments)
        if(div.length<2 || div.length>2)
            throw new ValueError("OutOfBounds")
        else if(div[0] == 0 && div[1] == 0)
            throw new ZeroDivisionError("Invalid Denominator")
        else if(div[1] == 0)
            throw new InfinityResultError("Invalid Operator")
        else
            return this.a = div[0]/div[1]
    } 

}

class Calculator extends Basic{
    
    
    fact(){
        if(Number.isInteger(arguments))
            throw new TypeError("Invalid Parameter")
        else{
            if(arguments.length == 0)
                throw new MissingParameterError("Missing Parameter")
            else if(arguments.length>1)
                throw new ValueError("OutOfBounds")
            else{
                if(arguments[0] == 0)
                    return super.a = 1
                else
                    return arguments[0]*this.fact(arguments[0]-1)
            }
        }
    }

    avg(){
        let av  = 0

        if(arguments.length<2)
            throw new MissingParameterError("Missing Parameter")
        else{
            for(let el of arguments){
                if(Number.isInteger(el))
                    av += parseFloat(el)  
                else
                    throw new TypeError("Number was excepted but an Other founded")
            }
            return av/arguments.length
        }
    } 

    arr(){

        if(arguments.length>2)
            throw new TypeError("OutOfBounds")
        else{
            if(arguments[0]>arguments[1])
                throw new TypeError("Invalid Parameter")
            else if(arguments[0]<0 || arguments[1]<0)
                throw new NegativeNumberError("Positive Number Was Excepted But Negative Found")
            else if(arguments[0]==0)
                throw new ValueError("Zero does not accepted in this case")
            else{
                let p = arguments[1]-arguments[0]
                return super.divide(this.fact(arguments[1]),this.fact(p))
            }
        }
    } 

    exp(){
        if(arguments.length>2)
            throw new TypeError("OutOfBounds")
        else if (arguments[0] == 0)
            return 0
        else if(!Number.isInteger(arguments[1]))
            throw new TypeError("Not Integer")
        else
            return arguments[0]**arguments[1]
    }

    comb(){
        if(arguments.length>2)
            throw new TypeError("OutOfBounds")
        else{
            if(arguments[0]>arguments[1])
                throw new TypeError("Invalid Parameter")
            else if(arguments[0]<0 || arguments[1]<0)
                throw new NegativeNumberError("Positive Number Was Excepted But Negative Found")
            else if(arguments[0]==0)
                return arguments[0] = 1
            else{
                let p = arguments[1]-arguments[0]
                return super.divide(this.fact(arguments[1]),super.multiply(this.fact(arguments[0]),this.fact(p)))
            }
        }
    }
}

let calc = new Calculator()

console.log(`Adisyon 2+3=5 ${(calc.add(2,3) === 5 || calc.add(2,3) === 5.0) ? "✅": "❌"}`, calc.add(2,3) )
console.log(`Adisyon 2.3 + 6.1=8.4 ${(calc.add(2.3, 6.1) === 8.4 || calc.add(2.3, 6.1) === 8.399999999999999) ? "✅": "❌"}`, calc.add(2.3, 6.1) )
console.log(`Soustraksyon 10-3=7 ${calc.substract(10,3) === 7 ? "✅": "❌"}`, calc.substract(10,3) )
console.log(`Miltiplikasyon 15*3=45 ${calc.multiply(15,3) === 45 ? "✅": "❌"}`, calc.multiply(15,3) )
console.log(`Miltiplikasyon 15 * (-1)=-15 ${calc.multiply(15,3) === 45 ? "✅": "❌"}`, calc.multiply(15,-1) )
console.log(`Ekspozan 2e3=8 ${calc.exp(2,3) === 8 ? "✅": "❌"}`, calc.exp(2,3) )
console.log(`Ekspozan 2e0=1 ${calc.exp(2,0) === 1 ? "✅": "❌"}`, calc.exp(2,0) )
console.log(`Ekspozan 2e-3=0.125 ${calc.exp(2,-3) === 0.125 ? "✅": "❌"}`, calc.exp(2,-3) )
console.log(`Ekspozan 0e0=0 ${calc.exp(0,0) === 0 ? "✅": "❌"}`, calc.exp(0,0) )
console.log(`Ekspozan 2e-1=0.5 ${calc.exp(2,-1) === 0.5 ? "✅": "❌"}`,  calc.exp(2,-1) )
console.log(`Faktoryèl 4!=24 ${calc.fact(4) === 24 ? "✅": "❌"}`, calc.fact(4) )
console.log(`Faktoryèl 0!=1 ${calc.fact(0) === 1 ? "✅": "❌"}`, calc.fact(0) )
console.log(`Mwayèn avg(2,4)=3 ${calc.avg(2,4) === 3 ? "✅": "❌"}`, calc.avg(2,4) )
console.log(`Mwayèn avg(-4,-5)=-4.5 ${calc.avg(-4,-5) === -4.5 ? "✅": "❌"}`, calc.avg(-4,-5) )
console.log(`Konbinezan 2 nan 4=6 ${calc.comb(2,4) === 6 ? "✅": "❌"}`, calc.comb(2,4) )
console.log(`Konbinezan 0 nan 2=1 ${calc.comb(0,2) === 1 ? "✅": "❌"}`, calc.comb(0,2) )
console.log(`Konbinezan 0 nan 0=1 ${calc.comb(0,0) === 1 ? "✅": "❌"}`, calc.comb(0,0) )
console.log(`Aranjman 2 nan 4=12 ${calc.arr(2,4) == 12 ? "✅": "❌"}`,  calc.arr(2,4) )
console.log('-------------------------')
// Tcheke erè

console.log('EKZEKISYON SA YO DWE JENERE ERE')
console.log('-------------------------')

try{
	console.log("Mwayèn [3,5,3,'25',6]=ValueError ❌", calc.avg(3,5,3,"25",6) )
}catch(err){
  console.log(`calc.avg(3,5,3,'25',6) ${err.name} ✅`)
} 

try{
	console.log('calc.add(2)=MissingParameterError ❌', calc.add(2) )
}catch(err){
  console.log(`calc.add(2) ${err.name} ✅`)
} 
try{
	console.log('calc.substract(14)=MissingParameterError ❌',  calc.substract(14) )
}catch(err){
  console.log(`calc.substract(14) ${err.name} ✅`)
} 
try{
	console.log('calc.divide(13,0)=ZeroDivisionError ❌',  calc.divide(13,0) )
}catch(err){
  console.log(`calc.divide(13,0) ${err.name} ✅`)
} 
try{
	console.log('calc.divide(0,0)=InfinityError ❌',  calc.divide(0,0) )
}catch(err){
  console.log(`calc.divide(0,0) ${err.name} ✅`)
} 
try{
	console.log('calc.multiply(15)=MissingParameterError ❌',  calc.multiply(15) )
}catch(err){
  console.log(`calc.multiply(15) ${err.name} ✅`)
} 

try{
	console.log('calc.fact(-3)=ValueError ❌',  calc.fact(-3) )
}catch(err){
  console.log(`calc.fact(-3) ${err.name} ✅`)
} 
try{
	console.log('calc.fact(3.4)=TypeError|ValueError ❌',  calc.fact(3.4) )
}catch(err){
  console.log(`calc.fact(3.4) ${err.name} ✅`)
} 
try{
	console.log('calc.arr(0,0)=ValueError ❌',  calc.arr(0,0) )
}catch(err){
  console.log(`calc.arr(0,0) ${err.name} ✅`)
} 
try{
	console.log('calc.arr(0,4)=ValueError ❌',  calc.arr(0,4) )
}catch(err){
  console.log(`calc.arr(0,4) ${err.name} ✅`)
} 
try{
	console.log('calc.arr(4,0)=ValueError ❌',  calc.arr(4,0) )
}catch(err){
  console.log(`calc.arr(4,0) ${err.name} ✅`)
} 
try{
	console.log('calc.arr(-1,4)=ValueError ❌',  calc.arr(-1,4) )
}catch(err){
  console.log(`calc.arr(-1,4) ${err.name} ✅`)
} 
try{
	console.log('calc.arr(2,4.4)=TypeErro|ValueError ❌',  calc.arr(-2,4.4) )
}catch(err){
  console.log(`calc.arr(2,4.4) ${err.name} ✅`)
} 
try{
	console.log('calc.comb(4,2)=ValueError ❌',  calc.comb(4,2) )
}catch(err){
  console.log(`calc.comb(4,2) ${err.name} ✅`)
} 
try{
	console.log('calc.comb(0,-4)=ValueError ❌',  calc.comb(0,-4) )
}catch(err){
  console.log(`calc.comb(0,-4) ${err.name} ✅`)
} 
try{
	console.log('calc.comb(-1,4)=ValueError ❌',  calc.comb(-1,4) )
}catch(err){
  console.log(`calc.comb(-1,4) ${err.name} ✅`)
} 
try{
	console.log('calc.arr(4,2)=ValueError ❌',  calc.arr(4,2) )
}catch(err){
  console.log(`calc.arr(4,2) ${err.name} ✅`)
} 

try{
	console.log('calc.exp(2,2.3)=TypeError|ValueError ❌',  calc.exp(2,2.3) )
}catch(err){
  console.log(`calc.exp(2,2.3) ${err.name} ✅`)
} 

try{
	console.log('calc.avg(2)=MissingParameter ❌',  calc.avg(2) )
}catch(err){
  console.log(`calc.avg(2) ${err.name} ✅`)
}