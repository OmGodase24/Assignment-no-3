
class Arithematic
{
    No1 : number
    No2 : number

    constructor(A : number,B:number)
    {
        this.No1 = A
        this.No2 = B
    }

    Addition():number
    {
        let Ans : number = 0;
        Ans = this.No1 + this.No2
        return Ans
    }

    Subtraction():number
    {
        let Ans : number = 0;
        Ans = this.No1 - this.No2
        return Ans
    }

    Multiplication():number
    {
        let Ans : number = 0;
        Ans = this.No1 * this.No2
        return Ans
    }

    Division():number
    {
        let Ans : number = 0;
        Ans = this.No1 / this.No2
        return Ans
    }

}

var Obj1 = new Arithematic(11,10)
var Obj2 = new Arithematic(21,11)

var Ret : number = 0

Ret = Obj1.Addition()
console.log("Addtion is:"+Ret)

Ret = Obj1.Subtraction()
console.log("Subtraction is:"+Ret)

Ret = Obj1.Multiplication()
console.log("Multiplication is:"+Ret)

Ret = Obj1.Division()
console.log("Division is:"+Ret)

Ret = Obj2.Addition()
console.log("Addtion is:"+Ret)

Ret = Obj2.Subtraction()
console.log("Subtraction is:"+Ret)

Ret = Obj2.Multiplication()
console.log("Multiplication is:"+Ret)

Ret = Obj2.Division()
console.log("Division is:"+Ret)

