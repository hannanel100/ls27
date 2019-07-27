"use strict";
var Circle = /** @class */ (function () {
    function Circle(xCor, yCor, Color, Radius) {
        this.xCor = xCor;
        this.yCor = yCor;
        this.Color = Color;
        this.Radius = Radius;
    }
    Circle.prototype.display = function () {
        return " X Cordinates: " + this.xCor + ", \n        Y Cordinates: " + this.yCor + ", \n        Color: " + this.Color + ", \n        Radius: " + this.Radius;
    };
    Circle.prototype.circleArea = function () {
        return Math.PI * this.Radius * this.Radius;
    };
    Circle.prototype.circleCircumference = function () {
        return 2 * Math.PI * this.Radius;
    };
    return Circle;
}());
var Square = /** @class */ (function () {
    function Square(xCor, yCor, Color, Length) {
        this.xCor = xCor;
        this.yCor = yCor;
        this.Color = Color;
        this.Length = Length;
    }
    Square.prototype.display = function () {
        return " X Cordinates: " + this.xCor + ", \n        Y Cordinates: " + this.yCor + ", \n        Color: " + this.Color + ", \n        Length: " + this.Length;
    };
    Square.prototype.squareArea = function () {
        return this.Length * this.Length;
    };
    Square.prototype.squareCircumference = function () {
        return 4 * this.Length;
    };
    return Square;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(xCor, yCor, Color, Length, Width) {
        this.c1 = new Circle(3, 2, 'red', 3);
        this.xCor = xCor;
        this.yCor = yCor;
        this.Color = Color;
        this.Length = Length;
        this.Width = Width;
    }
    Rectangle.prototype.display = function () {
        return " X Cordinates: " + this.xCor + ", \n        Y Cordinates: " + this.yCor + ", \n        Color: " + this.Color + ", \n        Length: " + this.Length + ",\n        Width: " + this.Width;
    };
    Rectangle.prototype.rectangleArea = function () {
        return this.Length * this.Width;
    };
    Rectangle.prototype.rectangleCircumference = function () {
        return (2 * this.Length) + (2 * this.Width);
    };
    return Rectangle;
}());
