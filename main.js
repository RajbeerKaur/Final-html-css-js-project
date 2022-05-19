//margin
m=0;

 //take variable y
var y;

//write function starting with start button
           
function start()
{
// end point is y
   y=setInterval(run,100) ;
   
   
   //write the run function
   function run()
{
    
    if(m==1200)   //if margin equal to 1200 then clear interval stop the car
   {
       clearInterval(x);
       m=0;
   }
   else{
    m+=5;
   
   //img id
    var x=document.getElementById("img");             
    
     //(call by margin left)
}
    x.style.marginLeft=m+'px';                           
}
}
//this function stop the car on y point
function stop()
{
    clearInterval(y)
}

