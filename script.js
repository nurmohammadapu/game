let userScore = 0;
let compScore = 0;
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");



const genComputerChoice = () =>{
    const options = ["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
   
};


choices.forEach((val)=>{
 
    val.addEventListener("click",()=>{
        const userChoice = val.getAttribute("id");
        console.log("Hello you are select");
        playGame(userChoice);
       

        
    });
});

const playGame = (userChoice) =>{
    console.log(userChoice);
    const comChoice = genComputerChoice();
    console.log(comChoice);
    if(userChoice===comChoice){
        console.log("Draw");
        msg.innerText = `You select ${userChoice} Computer select ${comChoice} Draw`;
        msg.style.backgroundColor = 'rgb(40, 114, 211)';
    }

    else if(userChoice==="rock" && comChoice==="paper" ||userChoice==="paper" && comChoice==="scissors" ||
    userChoice==="scissors" && comChoice==="rock" ){
        compWin();
        msg.innerText = `Computer Win! ${comChoice} beats Your  ${userChoice}`;
        msg.style.backgroundColor = 'red';
        if(compScore>=10){

            msg.innerText = "Game over.Computer win Play Again" ;
            
            userScore = 0;
            user.innerText = userScore ;
            compScore = 0;
            comp.innerText = compScore ;
            
        }
    }
    else{
        userWin();
        msg.innerText = `You Win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = 'green';
        if(userScore>=10){
            msg.innerText = "Game over.You win Play Again" ;
            
            userScore = 0;
            user.innerText = userScore ;
            compScore = 0;
            comp.innerText = compScore ;
            
        }
    }

};



const userWin = () =>{
    userScore++;
    user.innerText = userScore ;
    console.log("user:",userScore);

};
const compWin = () =>{
    compScore++;
    comp.innerText = compScore ;
    console.log("comp:",compScore);
    
};

