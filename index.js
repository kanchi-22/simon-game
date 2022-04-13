let n = Math.floor(Math.random()*4 + 1);
let score = 0;
let win = true;
function playGame(){
    n = Math.floor(Math.random()*4 + 1);
    console.log(n);
    switch(n){
        case 1:
            $("#red").addClass("scaled");
            break;
        case 2:
            $("#green").addClass("scaled");
            break;
        case 3:
            $("#yellow").addClass("scaled");
            break;
        case 4:
            $("#blue").addClass("scaled");
            break;
    }
}
playGame();
let color = document.getElementsByClassName("color");
let scoreElem = document.getElementById("score");
for(let i = 0 ; i < 4 ; i++){
    color[i].addEventListener("click",function(){
            if(i == n-1){
                color[i].classList.remove("scaled");
                score++;
                scoreElem.innerText = `Score: ${score}`;
                playGame();
            }
            else{
                score = 0;
                scoreElem.innerText = `Score: ${score}`;
                alert("Game Over");
            }
    })
}