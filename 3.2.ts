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

var obj = new Circle(11)

var iRet : number = 0;

iRet = obj.Area()

console.log("Area of the circle is:"+iRet)