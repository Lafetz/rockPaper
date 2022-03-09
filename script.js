function computerPlay(){
    let computer=Math.floor(Math.random()*3);
   if(computer==0)return 'paper';
   else if(computer==1)return 'rock';
   else return 'scissor'
}
function playround(computerselction,playerselection){
    let player=playerselection;
    if(computerselction=='paper'&&player=='scissor'){ return ' Win'}
    else if(computerselction=='paper'&&player=='rock'){return 'Lose'}
    else if(computerselction=='rock'&&player=='scissor'){return ' Lose'}
    else if(computerselction=='rock'&&player=='paper'){return ' Win'}
    else if(computerselction=='scissor'&&player=='rock'){return ' Win'}
    else if(computerselction=='scissor'&&player=='paper'){return ' Lose'}
    else if(computerselction==player)return 'Tie'
    else return 'ERROR'
}
function game(){
        
    console.log("YOU   COMPUTER")
    let scorePlayer=0;
    let scoreComputer=0;
    for(let i=0;i<5;++i){
        let playerselection=prompt('Enter Your choice');
        let computerselction=computerPlay();
       

        let round=playround(computerselction,playerselection)
            console.log(round);
       if(round=='Win') scorePlayer+=1;
       else if(round=='Lose') scoreComputer+=1;
      
       console.log(`${scorePlayer}   ${scoreComputer}`)
        
    }
    if (scorePlayer>scoreComputer)console.log("You Win");
    else if (scorePlayer<scoreComputer)console.log("You Lose");
    else console.log('It\'s a Tie') ;
}
   
game();
