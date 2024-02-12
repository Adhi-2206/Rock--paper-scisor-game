let userscore=0;
let compscor=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
//generate the random number
const genCompChoice = () => {
    const options=["rock","paper","Scissors"];
   const randIdx= Math.floor(Math.random()*3);
   return  options[randIdx];
};

const drawGame=() => {
    msg.innerText="Game Was Draw,Play Again";
    msg.style.backgroundColor="blue";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin) {
        userscore++;
        userScorePara.innerText=userscore;
        console.log("you win");
        msg.innerText=`You Win!  Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }else{
        compscor++;
        compScorePara.innerText=compscor;
        
        msg.innerText=`You Lose!  ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    
    }
};


const playgame =(userchoice) => {
    console.log("user choice=",userchoice);
    //generate computer choice
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);

    if(userchoice === compChoice)
    {
        //Draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userchoice === "rock"){
           userWin=  compChoice === "paper" ? false :true;
        } 
        else if(userchoice === "paper")
         {
          userWin=compChoice==="Scissors"? false:true;
         }else{
            compChoice==="rock"?false:true;
         }

         showWinner(userWin,userchoice,compChoice);
        }

};



choices.forEach((choice)=> {
   
    choice.addEventListener("click",() => {
    const userchoice=choice.getAttribute("id");
    console.log("choice was clicked",userchoice);
    playgame(userchoice);
    });
});