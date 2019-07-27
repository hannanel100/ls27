class Circle{
    xCor: number;
    yCor: number;
    Color: string;
    Radius: number;

    constructor(xCor: number, yCor: number, Color: string, Radius: number){
        this.xCor = xCor;
        this.yCor = yCor;
        this.Color = Color;
        this.Radius = Radius;
    }

    display():string{
        return ` X Cordinates: ${this.xCor}, 
        Y Cordinates: ${this.yCor}, 
        Color: ${this.Color}, 
        Radius: ${this.Radius}`;
    }
    circleArea():number{
        return Math.PI*this.Radius*this.Radius;
    }
    circleCircumference():number{
        return 2*Math.PI*this.Radius;
    }
}

class Square{
    xCor: number;
    yCor: number;
    Color: string;
    Length: number;

    constructor(xCor: number, yCor: number, Color: string, Length: number){
        this.xCor = xCor;
        this.yCor = yCor;
        this.Color = Color;
        this.Length = Length;
    }

    display():string{
        return ` X Cordinates: ${this.xCor}, 
        Y Cordinates: ${this.yCor}, 
        Color: ${this.Color}, 
        Length: ${this.Length}`;
    }
    squareArea():number{
        return this.Length*this.Length;
    }
    squareCircumference():number{
        return 4*this.Length;
    }
}

class Rectangle{
    xCor: number;
    yCor: number;
    Color: string;
    Length: number;
    Width: number;

    constructor(xCor: number, yCor: number, Color: string, Length: number, Width: number){
        this.xCor = xCor;
        this.yCor = yCor;
        this.Color = Color;
        this.Length = Length;
        this.Width = Width;
    }

    display():string{
        return ` X Cordinates: ${this.xCor}, 
        Y Cordinates: ${this.yCor}, 
        Color: ${this.Color}, 
        Length: ${this.Length},
        Width: ${this.Width}`;
    }
    rectangleArea():number{
        return this.Length*this.Width;
    }
    rectangleCircumference():number{
        return (2*this.Length)+(2*this.Width);
    }

const c1 = new Circle(3,2, 'red', 3);