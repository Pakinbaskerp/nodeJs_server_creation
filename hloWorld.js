const intro=confirm("you want to play rock paper scissor");
let computer;
if(intro){
    let player=prompt("enter the option");
    player=player.trim().toLowerCase();
    if(player==="rock"||player==="scissor"||player==="paper"){
        let computerchoice=Math.floor(Math.random()*3+1);
        computer=computerchoice===1?"rock":computerchoice===2?"paper":"scissors";
        
      let result=player===computer?"tie":player==="rock"&&computer==="paper"?"computer wins":
      player==="scissors"&& computer==="rock"?"computer wins":player==="paper"&& computer==="scissors"?"computer wins":"player win"

         alert(result); 
         let replay=confirm("playAgin");
    replay?location.reload():alert("ok thks play again")
       
    }
    else{
        alert("you enter wrong choice");
    }
   
    
}
else{
    alert("ok may be next time");
}
