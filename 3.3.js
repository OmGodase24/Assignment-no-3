var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(A) {
        return _super.call(this, A) || this;
    }
    CircleX.prototype.Circumference = function () {
        var Ans = 0;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    };
    return CircleX;
}(Circle));
var Obj1 = new Circle(11);
var Obj2 = new CircleX(21);
var iRet = 0;
iRet = Obj1.Area();
console.log("Area of the circle is:" + iRet);
iRet = Obj2.Circumference();
console.log("Circmumference of Circle is:" + iRet);
