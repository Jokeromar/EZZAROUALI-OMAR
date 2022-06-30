var block = document.getElementById("block");
var hole  = document.getElementById("hole");
var jumping = 0;
var counter = 0;
var topcounter =1;

hole.addEventListener('animationiteration',()=>{
    var random=-((Math.random()*300)+150);
    hole.style.top=random+"px";
    counter++;
    score=document.getElementById("score")
    score.innerHTML=" Score: "+counter;
});

setInterval(function(){
    var characterTop  = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
   
    if(jumping==0){
         character.style.top=(characterTop+Math.exp(1.2))+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("Left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("Top"));
    cTop = -(500-characterTop);
    if((characterTop>480) || ((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130))))
    {
        alert("Game over score:"+counter);
        character.style.top=70; 
        if (counter > topcounter){
           topcounter = counter;
         
         elem=document.getElementById('topscore');
         elem.innerHTML="Your New   Top Score Is "+topcounter;
        }

        
    counter=0 ; }
    
},15);
function jump(){
   
  jumping = 1;
  let jumpcount = 0;
    var jumpInterval = setInterval(function(){
         var characterTop  = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if ((characterTop>  6 ) ){
  character.style.top=(characterTop-Math.exp(1.5))+"px";
    }
    if (jumpcount>20){
        clearInterval(jumpInterval);
        jumping=0;
        jumpcount=0;
    }
        jumpcount++;


    },15);

}
