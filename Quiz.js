class Quiz {
    constructor(entry) {
      this.question = entry.question;
      this.answers = entry.answers;
      this.correctAnswers = Object.values(entry.correct_answers).map(value => value === "true");
      this.checkBoxes = [];
    }
  
    combineCheckboxAndCorrectAnswer (checkBox, i) {
      return [checkBox ? checkBox.checked : false, this.correctAnswers[i]];
    }
  
    filtercheckbox (checkBoxAndAnswer) {
      return checkBoxAndAnswer[0];
    }
    checkAnswer (checkBoxAndAnswer) {
      
      if (checkBoxAndAnswer[1]){
        return +1
       
      }
      if (checkBoxAndAnswer[1] === false) {
        return -1
        
      }
      
    }
    getScore() {
      
      var score = this.checkBoxes
      .map(this.combineCheckboxAndCorrectAnswer.bind(this)) //kombinera metoden com
      .filter(this.filtercheckbox)
      .map(this.checkAnswer)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0); 
      return Math.max(0, score)
  
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