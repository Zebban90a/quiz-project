document.addEventListener("DOMContentLoaded", function() {

const questions = document.getElementById('questions');
document.getElementById("scoreboard").style.visibility = "hidden";




fetch("https://quizapi.io/api/v1/questions?apiKey=lml4s9waHBde1ptauFgVcsrkFJ3Nbs5XvrVnJa0C&limit=10")
    .then(response => response.json())
    .then(result => {
        
        for (obj of result) {

            var arrayAnswers = []
            arrayAnswers.push(obj.answers.answer_a)
            
            console.log(result);
            
            const question = document.createElement('div')
            question.setAttribute('class', 'question')

            const questionName = document.createElement('p')
            questionName.innerText = obj.question

            question.appendChild(questionName);
            
            questions.appendChild(question);

            const answers = document.createElement('ul')
            answers.setAttribute('class', 'answers')

            const answer = document.createElement('li')

            const checkbox = document.createElement('input')
            checkbox.type = "checkbox"; 
            checkbox.name = "name"; 
            checkbox.value = "value"; 
            checkbox.id = "checkBox"; 
            

            answer.innerText = obj.answers.answer_a;


            answers.appendChild(answer);
            answer.appendChild(checkbox)
            questions.appendChild(answers);
    
        }

        let btnCalc = document.getElementById("btnCalc");
        btnCalc.addEventListener("click", function () {
            let Hide = document.getElementById('questions');
            Hide.style.display = "none"
            document.getElementById("scoreboard").style.visibility = "visible";
            
    })
       
        })

    })
        

    //})    

 /*
        //return questions.map(function(question) {
            //let tr = createNode ('tr')
            //let td = createNode ('td')

           // td.innerHTML = 

           /*append (tr, td) 
           append (ul, tr)
           console.log(questions);
       
        })

        for (let i=0; i < result.length; i++)
        
        
    })

    https://randomuser.me/api/?results=10
https://quizapi.io/api/v1/questions?apiKey=lml4s9waHBde1ptauFgVcsrkFJ3Nbs5XvrVnJa0C&limit=10 */ 