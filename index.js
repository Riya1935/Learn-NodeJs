var rect = {
	perimeter: (x, y) => (2*(x+y)),
	area: (x, y) => (x*y)
};

function SolveRect(l,b)  {
    console.log("solving for rectangle with l = " + l + " and width = " + b);
    if(l<=0 || b<=0)  {
        console.log("Length and Width of a rectangle should be greater than zero")
    }
    else {
        console.log("Perimeter of the rectangle with length = " + l + "and width = " + b + "is " + rect.perimeter(l,b));
        console.log("Area of the rectangle with length = " + l + "and width = " + b + "is " + rect.area(l,b));
    }
}

SolveRect(3,4);
SolveRect(2,9);
SolveRect(-3,5);