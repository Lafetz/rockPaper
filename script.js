function computerPlay(){
    let computer=Math.floor(Math.random()*3);
   if(computer==0)return 'Paper';
   else if(computer==1)return 'Rock';
   else return 'Scissor'


}
console.log(computerPlay());