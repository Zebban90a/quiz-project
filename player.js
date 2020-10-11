class Quiz {
  constructor(entry) {
    this.id = entry.id;
    this.question = entry.question;
    this.answers = entry.answers;
    this.correctAnswers = Object.values(entry.correct_answers).map(value => value === "true");
    this.checkBoxes = [];
  }
  getScore() {

    let plusScore = 0;
    let minusScore = 0;
    for (let i = 0; i < this.checkBoxes.length; i++) {
        if (this.checkBoxes[i]) {
            
            if (this.checkBoxes[i].checked && this.correctAnswers[i]){
                plusScore++;
               
            }
            if (this.checkBoxes[i].checked && this.correctAnswers[i] === false) {
                minusScore++;
                
            }

        }
        
    }
    return Math.max(0, plusScore-minusScore);
  }
  createQuestion () {
      let question = null;
      for(let answer of this.answers) {
          this.createAnswer(question)
      }
  }
  createAnswer(parent) {
    
    
    for (let answerObj in this.answers) {
        if (this.answers[answerObj]) {
            const answers = document.createElement("ul");
            answers.setAttribute("class", "answers");

            const answer = document.createElement("li");

            const checkbox = document.createElement("input");
            
            checkbox.type = "checkbox";
            checkbox.name = "name";
            checkbox.value = "value";
            checkbox.id = "checkBox";

            
            answer.innerText = this.answers[answerObj];
            
            answers.appendChild(answer);
            answer.appendChild(checkbox);
            parent.appendChild(answers);

            this.checkBoxes.push(checkbox)
        }
        else {
            this.checkBoxes.push(null)
        }
    } 
  }
}

class QuizGame {
  constructor(entries) {
    this.quizes = entries.map(entry => new Quiz(entry));
    this.name;
    
    
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
        let player = document.getElementById('input')
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
        let score = this.checkScore();
        quizScoreBoard.innerText = ("total score was " + score);

    }

  
}
    

fetch(
  "https://quizapi.io/api/v1/questions?apiKey=lml4s9waHBde1ptauFgVcsrkFJ3Nbs5XvrVnJa0C&limit=10"
)
  .then((response) => response.json())
  .then((data) => {
    
    let game = new QuizGame(data);
    
    let btnStartGame = document.getElementById("btnStartGame");
    btnStartGame.addEventListener("click", function(game) {
        let Hide = document.getElementById('myModal');
        Hide.style.display = "none"

        game.createQuiz();

    }.bind(null, game));
    
    
    let btnCalc = document.getElementById("btnCalc");
    btnCalc.addEventListener("click", function (game) {
        let Hide = document.getElementById('quiz');
        Hide.style.display = "none"
        game.scoreBoard();

            
    }.bind(null, game));

    
    
    
  });
