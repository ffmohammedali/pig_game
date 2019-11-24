/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//document.querySelector('#current-'+activePlayer).textContent = dice;

//document.querySelector('#score-'+activePlayer).innerHTML = '<hm>' + dice + '</hm>';

/*var x= document.querySelector('#current-0').textContent;
console.log(x);
//document.querySelector('.dice').style.display = 'none';

document.querySelector('#score-0').textContent = 34;
document.querySelector('#score-1').innerHTML = '<gg>' + dice +'</gg>';
//document.querySelector('.dice').style.display = 'none';
*/


var scores,roundScore,activePlayer,gamePlaying,detsix;

inn();

document.querySelector('.btn-roll').addEventListener('click',function()
                                                     {
    
 if(gamePlaying)
     {
        var dice = Math.floor(Math.random() * 6)+1; 
    
   var diceDom=document.querySelector('.dice');
   diceDom.style.display = 'block'; 
    diceDom.src ='dice-'+dice+'.png';
if(detsix==6 && dice==6)
           {
               nextPlayer();
           }
      detsix=dice;
        
if(dice!=1)
    {
        roundScore+=dice;
        document.querySelector('#current-'+activePlayer).textContent =roundScore; 
       
        
    }
    else
    {
        nextPlayer();
    }
         
             if(scores[activePlayer]>=20)
        {
            
          document.querySelector('#name-'+activePlayer).textContent ='winner';
            
 document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            
                  document.querySelector('.dice').style.display='none';   
            
   document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('winner');        
            gamePlaying=false;
            
        }
    
    

     }
    
    
});

document.querySelector('.btn-hold').addEventListener('click',function(){
   if(gamePlaying)
       {
         scores[activePlayer]+=roundScore;
    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
    
    if(scores[activePlayer]>=20)
        {
            
          document.querySelector('#name-'+activePlayer).textContent ='winner';
            
 document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            
                  document.querySelector('.dice').style.display='none';   
            
   document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('winner');        
            gamePlaying=false;
            
        }
    
    
    
    
    
    
    
    nextPlayer();
    
       
       }
   
    
});

document.querySelector('.btn-new').addEventListener('click',inn);

function nextPlayer()
{
   roundScore=0;
        document.querySelector('#current-0').textContent = 0;
        document.querySelector('#current-1').textContent = 0;
        
        
        activePlayer === 0 ? activePlayer =1 :activePlayer= 0;
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none'; 
    
    
    
}

function inn()
{
  scores =[0,0];
roundScore = 0;
activePlayer = 0;
    detsix=0;
    gamePlaying =true;
document.getElementById('score-1').textContent = 0;
document.getElementById('score-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.querySelector('.dice').style.display= 'none';  
  document.getElementById('name-0').textContent='player 1';  
     document.getElementById('name-1').textContent='player 2';
     document.querySelector('.player-0-panel').classList.remove('winner'); 
      document.querySelector('.player-1-panel').classList.remove('winner'); 
     document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
         document.querySelector('.player-0-panel').classList.add('active');
}
