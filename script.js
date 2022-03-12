const buttons=document.querySelectorAll("button")
const rock=document.querySelector('.rock')
const paper=document.querySelector('.paper')
const scissor=document.querySelector('.scissor')
let scoreHuman=0;
let scoreComputer=0;

rock.addEventListener('click',()=>{
    computerselction=computerPlay();
    const round= playround(computerselction,'rock')
    const score=roundScore(round);
    scores(score);
    ScoreBoard(score,'rock',computerselction);
})
paper.addEventListener('click',()=>{
    computerselction=computerPlay();
    const round= playround(computerselction,'paper')
    const score=roundScore(round);
    scores(score);
    ScoreBoard(score,'paper',computerselction);    
})
scissor.addEventListener('click',()=>{
    computerselction=computerPlay();
    const round= playround(computerselction,'scissor')
    const score=roundScore(round);
    scores(score);
    ScoreBoard(score,'scissor',computerselction);
})












function scores(round){
    if(round==1)scoreHuman+=1;
    else if(round==-1)scoreComputer+=1;
    else return; 
}

function computerPlay(){
  
    let computer=Math.floor(Math.random()*3);
   if(computer==0)return 'paper';
   else if(computer==1)return 'rock';
   else return 'scissor'

}
function playround(computerselction,playerselection){
    let player=playerselection;
    if(computerselction=='paper'&&player=='scissor'){ return 'Win'}
    else if(computerselction=='paper'&&player=='rock'){return 'Lose'}
    else if(computerselction=='rock'&&player=='scissor'){return 'Lose'}
    else if(computerselction=='rock'&&player=='paper'){return 'Win'}
    else if(computerselction=='scissor'&&player=='rock'){return 'Win'}
    else if(computerselction=='scissor'&&player=='paper'){return 'Lose'}
    else  return 'Tie'
}
   
  function roundScore(round){
      if(round=='Win') return 1;
      else if(round=="Lose") return -1;
      else return 0
  }
  
  function ScoreBoard(score,playerc,computerc){
     
      const divH=document.querySelector("#scoreHuman");
      const divC=document.querySelector("#scoreComputer");
      const humanChoice=document.querySelector("#humanchoice");
      const computerChoice=document.querySelector("#computerchoice");
      const totals=document.querySelector("#total")
      console.log(scoreHuman)
      console.log(scoreComputer)
      humanChoice.textContent=playerc;
      computerChoice.textContent=computerc;
      if(score==1) divH.textContent=scoreHuman;
      if(score==-1) divC.textContent=scoreComputer;
         
      if(scoreHuman==5){
        totals.textContent='you win'
        buttons.forEach(button=>button.disabled=true);
        setTimeout(restart,5000);
      }
           
          
     else if(scoreComputer==5){

        totals.textContent='you Lose'
        buttons.forEach(button=>button.disabled=true);
      setTimeout(restart,5000);
       
      }
      else return;

     
    

      function restart(){
        humanChoice.textContent='none';
        computerChoice.textContent='none';
        divH.textContent=0;
        divC.textContent=0;
        scoreHuman=0;
        scoreComputer=0;
        totals.textContent='-';
        buttons.forEach(button=>button.disabled=false);

      }
  }
 






