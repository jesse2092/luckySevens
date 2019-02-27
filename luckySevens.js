/*
Name: Isai Chavarri
Date Created: 2/26/2019
Date Last Revised: 2/26/2019
*/

//Function to roll two dices.
function rollDices(){
	var total=Math.floor(Math.random()*6+1)+Math.floor(Math.random()*6+1);
	return total;
}

function luckySevens(){
	var startNum=document.forms['luckyGame']['startingBet'].value;
	startNum=Number(startNum);
	//  Checking if the value given is a positive number.
	if(startNum<=0 || isNaN(startNum)){
		alert("Starting bet needs to be a postive amount");
		
		document.forms['luckyGame']['startingBet'].focus();
		
		return false;
	}	
	//Variables to keep track of max money won, the count, and how long it takes to lose it all. 
	var money=startNum;
	var count=0;
	var maxMoney=startNum;
	var maxCount=0;
	var game;
	//The game being played
	while(money >0){
		game=rollDices();
		count=count+1;
		if(game==7){
			money=money+4;
			if(money > maxMoney){
				maxMoney=money;
				maxCount=count;
			}
		}
		else{
			money=money-1;
		}
	}
	startNum=startNum.toFixed(2);
	maxMoney=maxMoney.toFixed(2);
	document.getElementById('titleTable').style.display='block'
	document.getElementById('results').style.display='block'
	document.getElementById('startBet').innerText='$'+startNum;
	document.getElementById('goingBroke').innerText=count;
	document.getElementById('highWon').innerText='$'+maxMoney;
	document.getElementById('highCount').innerText=maxCount;
	return false;
}