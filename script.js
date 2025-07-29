const object = document.getElementById("obs");
    const dino = document.getElementById("dino");
    document.addEventListener("keydown",function(event){
        if(event.key == "Enter"){
            object.classList.add("obs-move");
        }
        if(event.key == "Escape"){
            object.classList.remove("obs-move");
        }

    })

    document.addEventListener("keydown", function(event) {
        if (event.key === "w") {
            dino.classList.add("jump");
            setTimeout(() => {
                dino.classList.remove("jump");
            }, 1500);
        }
    }
);


    let score = 0;
    let isGiveScore = false;
    const timer = setInterval(() => {
        const dinoRange = dino.getBoundingClientRect();
        const obsRange = object.getBoundingClientRect();
        const check = dinoRange.right > obsRange.left && 
            dinoRange.left < obsRange.right &&
            dinoRange.bottom > obsRange.top &&
            dinoRange.top < obsRange.bottom;
        if (check) {
            alert("Game Over");
            clearInterval(timer);
             object.classList.remove("obs-move");
        }
        if(!isGiveScore && obsRange.left> dinoRange.right){
            score++;
            const scoreBoard = document.querySelector("h3");
            scoreBoard.innerText = "Score: " + score;
            scoreBoard.style.textAlign="center"
            console.log("Score: " + score);
            isGiveScore = true;
        }

        if(dinoRange.right > obsRange.left){
            isGiveScore=false;
        }
    }, 100);
