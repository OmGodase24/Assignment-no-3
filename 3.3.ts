class Circle
{
    Radius : number
    PI : number

    constructor(A : number)
    {
        this.Radius = A
        this.PI = 3.14
    }

    Area():number
    {
        let ans : number = 0;
        ans = this.PI * this.Radius * this.Radius
        return ans 
    }
}

class CircleX extends Circle
{
    constructor(A : number)
    {
        super(A)
    }

    Circumference():number
    {
        let Ans : number = 0;
        Ans = 2 * this.PI * this.Radius
        return Ans
    }

}

var Obj1 = new Circle(11)
var Obj2 = new CircleX(21)

var iRet : number = 0;

iRet = Obj1.Area()
console.log("Area of the circle is:"+iRet)

iRet = Obj2.Circumference()
console.log("Circmumference of Circle is:"+iRet)