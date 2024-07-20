const options = document.querySelectorAll('.options div');
const userImage = document.getElementById('user');
const compImage = document.getElementById('comp');
const resultText = document.querySelector('.txt p');
const sc=document.querySelector('span');
const btn = document.querySelector('button');
let score=0;
const choices =["rock", "paper", "scissors"];

const images = {
        rock: './rock.png',
        paper: './paper.png',
        scissors: './scissors.png'
};
let gameStarted = false;
options.forEach(option =>{
    option.addEventListener("click", function()
{
    if (!gameStarted) {
        btn.style.display = 'block';
        gameStarted = true;
    }
    userImage.src=images['rock'];
    compImage.src=images['rock'];
    userImage.classList.add('shake-user');
    compImage.classList.add('shake-comp');

    setTimeout(() => {
    const uchoice=option.querySelector("img").alt;
    const cchoice=getRandom();

    userImage.src=images[uchoice];
    compImage.src=images[cchoice];

    const winner=getWinner(uchoice,cchoice);
    display(winner);
   
    userImage.classList.remove('shake-user');
    compImage.classList.remove('shake-comp');
},1000);
});
});

function getRandom(){
const random=Math.floor((Math.random())*3);
return choices[random];
}

function getWinner(user,comp)
{
    
if(user==comp){
    return "It's a draw!!";
}
else if((user=="rock" && comp=="scissors") || (user=="scissors" && comp =="paper") || (user=="paper" && comp=="rock"))
    {
        score+=1;
        return "You won!";
        
    }
else{
        return "You lose!"
    }
}

function display(result){
    resultText.textContent=result;
    sc.innerHTML=score;
}

btn.addEventListener('click', () => {
    score = 0;
    sc.innerHTML = score;
    resultText.textContent = "Let's play!";
    userImage.src = images["rock"];
    compImage.src = images["rock"];
    btn.style.display = 'none';
    gameStarted = false;
});