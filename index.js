var rect = require('./rectangle');

function SolveRect(l,b)  {
    console.log("solving for rectangle with l = " + l + " and width = " + b);
    rect(l,b,(err,rectangle) => {
        if(err) {
            console.log("ERROR: ", err.message);
        }
        else {
            console.log("The perimter of the rectangle of dimensions l = " + l + " and b = " + b + " is " + rectangle.perimeter());
            console.log("The area of the rectangle of dimensions l = " + l + " and b = " + b + " is " + rectangle.area());
        }
    });
   console.log("This statement after the call to rect()");  
};

SolveRect(3,4);
SolveRect(2,9);
SolveRect(-3,5);