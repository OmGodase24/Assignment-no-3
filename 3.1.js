var Arithematic = /** @class */ (function () {
    function Arithematic(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithematic.prototype.Addition = function () {
        var Ans = 0;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithematic.prototype.Subtraction = function () {
        var Ans = 0;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    Arithematic.prototype.Multiplication = function () {
        var Ans = 0;
        Ans = this.No1 * this.No2;
        return Ans;
    };
    Arithematic.prototype.Division = function () {
        var Ans = 0;
        Ans = this.No1 / this.No2;
        return Ans;
    };
    return Arithematic;
}());
var Obj1 = new Arithematic(11, 10);
var Obj2 = new Arithematic(21, 11);
var Ret = 0;
Ret = Obj1.Addition();
console.log("Addtion is:" + Ret);
Ret = Obj1.Subtraction();
console.log("Subtraction is:" + Ret);
Ret = Obj1.Multiplication();
console.log("Multiplication is:" + Ret);
Ret = Obj1.Division();
console.log("Division is:" + Ret);
Ret = Obj2.Addition();
console.log("Addtion is:" + Ret);
Ret = Obj2.Subtraction();
console.log("Subtraction is:" + Ret);
Ret = Obj2.Multiplication();
console.log("Multiplication is:" + Ret);
Ret = Obj2.Division();
console.log("Division is:" + Ret);
