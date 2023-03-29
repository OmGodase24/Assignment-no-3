var Circle = /** @class */ (function () {
    function Circle(A) {
        this.Radius = A;
        this.PI = 3.14;
    }
    Circle.prototype.Area = function () {
        var ans = 0;
        ans = this.PI * this.Radius * this.Radius;
        return ans;
    };
    return Circle;
}());
var obj = new Circle(11);
var iRet = 0;
iRet = obj.Area();
console.log("Area of the circle is:" + iRet);
