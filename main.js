//margin
m=0;

//take variable y
var y;

//write function 
//starting with start button
function start()
{
   // end point is y
   y=setInterval(run,100) ;
}

//this function stop the car on y point
function stop()
{
    clearInterval(y)
}
