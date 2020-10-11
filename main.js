  fetch(
  "https://quizapi.io/api/v1/questions?apiKey=lml4s9waHBde1ptauFgVcsrkFJ3Nbs5XvrVnJa0C&limit=10"
)
  .then((response) => response.json())
  .then((data) => {
    
    let game = new QuizGame(data);
    
    let btnStartGame = document.getElementById("btnStartGame");
    btnStartGame.addEventListener("click", function(game) {
        document.getElementById('myModal').style.display = "none"

        game.createQuiz();
        document.getElementById("btnCalc").style.display = "block";
        

    }.bind(null, game));
    
    
    let btnCalc = document.getElementById("btnCalc");
    btnCalc.addEventListener("click", function (game) {
        document.getElementById('quiz').style.display = "none"
        document.getElementById("btnCalc").style.display = "none";
        document.getElementById("scoreBoard").style.display = "block";
        game.scoreBoard();
        

            
    }.bind(null, game));

    
    
    
  });
