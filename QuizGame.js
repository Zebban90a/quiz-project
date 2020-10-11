class QuizGame {
    constructor(entries) {
      this.quizes = entries.map(entry => new Quiz(entry));
      
      
      //
      /*for (let entry of entries) {
          this.quizes.push(new Quiz(entry));
          gdgdf
        }*/
        
        
    }
  
    createQuiz() {
     
  
      for (let i = 0; i < this.quizes.length; i++) {
        const quiz = document.getElementById("quiz");
        const quizQuestion = document.createElement("div");
        quizQuestion.setAttribute("class", "quizQuestion");
  
        const questionName = document.createElement("p");
        questionName.innerText = this.quizes[i].question;
  
        quizQuestion.appendChild(questionName);
        quiz.appendChild(quizQuestion);
  
          this.quizes[i].createAnswer(quiz)
        
  
      }
  
  }
      playerName () {
          let player = document.getElementById('namePlayer').value
          return player;
      }
     
      checkScore () {
     
          
          let score = 0;
          this.quizes.forEach(quiz => {
              
              score += quiz.getScore()
              
          });
          
          return score;
      }
      scoreBoard() {
          const quizScoreBoard = document.getElementById("quizScoreBoard");
          const playerName = document.getElementById("playerName");
          let score = this.checkScore();
          let player = this.playerName();
          quizScoreBoard.innerText = ("total score was " + score);
          playerName.innerText = ("player: " + player)
          this.newGame();
  
      }
      newGame () {
        let playAgain = document.getElementById("playAgain")
          playAgain.addEventListener("click", function(e) {
            window.location.href = window.location.href
          })
      }
  
    
  }