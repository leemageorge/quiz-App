
const questions = [{
    question: "Which is the biggest continent in the world?",
    answers:[
        {text:"North America", correct:false},
        {text:"Asia", correct:true},
        {text:"Africa", correct:false},
        {text:"Australia", correct:false},
    ]
    
},
{
    question: "Which is longest river in the world?",
    answers:[
        {text:"Great Ganga", correct:false},
        {text:"Amazon",correct:false},
        {text:"Nile",correct:true},
        {text:"Niger",correct:false},
     
    ]
},
{
    question: "Which is India’s first super computer?",
    answers:[
        {text:"Param8000", correct:true},
        {text:"param80000",correct:false},
        {text:"param800",correct:false},
        {text:"Nparam8r",correct:false},
    ]
},
{
    question: "Which bank is called bankers bank of India?",
    answers:[
        {text:"Punjab National Bank", correct:false},
        {text:"State Bank of India",correct:false},
        {text:"ICICI Bank",correct:false},
        {text:"Reserve Bank of India",correct:true},
    ]
},
{
    question: "Which is largest flower in the world?",
    answers:[
        {text:"Jasmine", correct:false},
        {text:"Balloon Flower",correct:false},
        {text:"Rafflesia",correct:true},
        {text:"Camellia",correct:false},
    ]
},

]

const questionEl = document.getElementById("question");
const answerButtons =document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn")

let currentQuestionIndex=0;
let score =0;

function startQuiz(){
    currentQuestionIndex=0;
    score =0;
    nextBtn.innerHTML ="Next"
    showQuestion();
}
function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionEl.innerHTML = questionNo +"."+ currentQuestion.question; 
    
    currentQuestion.answers.forEach(answer=>{
    const button = document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn")
    answerButtons.appendChild(button);
    if(answer.correct){
       button.dataset.correct= answer.correct
    }
    button.addEventListener('click', selectAnswer);
    });    
}

function resetState(){
    nextBtn.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
   const selectButton = e.target;
   const isCorrect = selectButton.dataset.correct === "true"
   if(isCorrect){
    selectButton.classList.add("correct")
    score++;
   }else{
    selectButton.classList.add("incorrect")
   }
   Array.from(answerButtons.children).forEach(button =>{
    if (button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
  
   });
   nextBtn.style.display = "block";
 }
function showScore(){
    resetState();
    questionEl.innerHTML=`You scored ${score} out of ${questions.length}`
    nextBtn.innerHTML="Play Again";
    nextBtn.style.display="block";
}
 function handleChanheNext(){
   currentQuestionIndex++
   if(currentQuestionIndex < questions.length){
    showQuestion()
   }else{
    showScore()
   }
 }
nextBtn.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length){
       handleChanheNext()
    }else{
        startQuiz()
    }

})
startQuiz()