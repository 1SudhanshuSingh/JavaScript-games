let userScore = document.querySelector('#user > span');
let compScore = document.querySelector('#comp > span');
let statusUpdate = document.querySelector('.status > span');
const rock = document.querySelector('#rock > img');
const paper = document.querySelector('#ppr > img');
const scissor = document.querySelector('#scr > img');
 
let uScore = 0;
let bScore = 0;

function main(){
rock.addEventListener('click', function(){
	game("r");
})
paper.addEventListener('click', function(){
	game("p");
})
scissor.addEventListener('click', function(){
	game("s");
})
}

function compChoice(){
	let compArray = ["r","p","s"];
	let compRandomNo = Math.floor(Math.random() * 3);
	return compArray[compRandomNo];
}

function game(userChoice){
	const bot = compChoice();
	switch(userChoice+bot){
		case "pr":
		case "rs":
		case "sp":
		win(userChoice,bot);
		break;
		case "ps":
		case "rp":
		case "sr":
		lose(userChoice,bot);
		break;
		default: draw(userChoice,bot);
		
	}
} 

function convertToText(letter){
	if(letter === "r") return "Rock";
	if(letter === "p") return "Paper";
	return "Scissor";
}
function win(user,bot){
	uScore++;
	if(uScore==10){
		alert("You Win! Thanks for playing game");
		window.location.reload();
	}
	userScore.innerHTML = uScore;
	compScore.innerHTML = bScore;
	statusUpdate.innerHTML = convertToText(user) + " (USER)".fontsize(2).sup()+ " beats " + convertToText(bot) +" (BOT)".fontsize(2).sup()+ ". User Wins";
}
function lose(user,bot){
	bScore++;
	if(bScore==10){
		alert("You Lose! Better luck next time.");
		window.location.reload();
	}
	compScore.innerHTML = bScore;
	userScore.innerHTML = uScore;
	statusUpdate.innerHTML = convertToText(bot) + " (BOT)".fontsize(2).sup() + " beats " + convertToText(user) + " (USER)".fontsize(2).sup() + ". Bot Wins";
}
function draw(){
	statusUpdate.innerHTML = "ITS A DRAWWWWW!";
}

main();	
