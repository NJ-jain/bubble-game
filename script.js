function makeBubbles(){
    clutter="";
    for(i=1;i<=60;i++){
        rn=Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">
         ${rn}           
    </div>`
    }
    document.querySelector("#bubbles").innerHTML=clutter;
    }
    var timer=60;
    score=0;
    function timerSetter(){
    setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timer").textContent=timer;
        }
        else{
          document.querySelector("#bubbles").innerHTML=`<h1>Game Over <br> <span>Your Score is:${score}</span></h1>`;
          document.querySelector("#score").textContent = `--`;
          document.querySelector("#timer").textContent = `--`;
          document.querySelector("#hit").textContent = `--`;
        }
    },1000)
    }
    function hitSetter(){
      ht =Math.floor(Math.random()*10);
      document.querySelector("#hit").textContent=ht;
    }
    function scoreSetter(newscore){
       score=newscore;
       document.querySelector("#score").textContent=score;
    }
    document.querySelector("#bubbles").addEventListener("click",function(dets){
      if( Number(dets.target.textContent)===ht){
        scoreSetter(score+=10)
        makeBubbles();
        hitSetter();
        // document.querySelector("#score").textContent=score;
      }
        //  console.log(dets)

    });
    // makeBubbles();
    // timerSetter();
    // hitSetter();
    // scoreSetter(score);
    document.querySelector("#start_button").addEventListener("click" , function(){
      document.querySelector("#start").style.top = `100vh`; 
      // document.querySelector("#timer").innerHTML = `60`;
      makeBubbles();
      timerSetter();
      hitSetter();
      scoreSetter(score);
    })