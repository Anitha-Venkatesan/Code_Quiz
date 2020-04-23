var startBtn = document.getElementById('startButton');
var timerEl =document.getElementById('timer');
var divEl = document.getElementById('myDiv');
var sectionEl =document.getElementById('mySection');
var questionEl=document.getElementById('question');
var answer1Btn=document.getElementById('answer1');
var answer2Btn= document.getElementById('answer2');
var answer3Btn=document.getElementById('answer3');
var answer4Btn= document.getElementById('answer4');
var answerDiv = document.createElement("div");
//EventListener for click events
startBtn.addEventListener('click',countDownTimer);
answer1Btn.addEventListener('click', function() {
  checkAnswer(0);
});
answer2Btn.addEventListener('click',function() {
  checkAnswer(1);
});
answer3Btn.addEventListener('click',function() {
  checkAnswer(2);
});
answer4Btn.addEventListener('click',function() {
  checkAnswer(3);
});

var questionIndex=0;
var timerCount=0; 
var allChoicesArr;

//Timer function to start the timer
function countDownTimer()
{
 
 readQuestions();
 timerCount =75; 
 var Readtimer=setInterval(startTimer,1000);
    function startTimer()
    {
        if(timerCount >= 0){
          timerCount--;
          timerEl.textContent = "Time:" +timerCount;
          if(sectionEl.style.display==="none"){
           
            
            divEl.style.display="block";
            sectionEl.style.display="none";
          }
          
          else{
            sectionEl.style.display="block";
            divEl.style.display="none";
          }
        }
        if (timerCount == 0) {
          timerEl.textContent = "Time:0" +0;
          clearInterval(Readtimer); 
        } 
    }
} 
var myQuestions = [
  {
    question: "What is the syntax for creating a function in JavaScript named as Geekfunc?",
    answers: [
      "function = Geekfunc()",
      "function Geekfunc()",
      "function := Geekfunc()",
      "function : Geekfunc()"],
    correctAnswer: 1
  },
  {
    question: "What is the JavaScript syntax for printing values in Console?",
    answers: [
      "print(5)",
      "console.print(5);",
      "console.log(5);",
      "print.console(5);"],
    correctAnswer: 2
  },
  {
    question: "Which built-in method reverses the order of the elements of an array?",
    answers: [
      "reverse()",
      "changeOrder(order)",
      "sort(order)",
      "None of the above."], 
    correctAnswer: 0
  },
  {
    question: "What does HTML stand for?",
    answers: [
        "Hyper Time Markup Language",
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language",
        "Hyper Text Markup Language"], 
    correctAnswer: 3
  },
  {
    question: "Which character is used to indicate an end tag?",
    answers: [
        "/",
        "<",
        ">",
        "*"], 
    correctAnswer: 0
  },
  ];

 function readQuestions()
    {
      var answerButton=[];
      questionEl.innerHTML= (myQuestions[questionIndex].question);
      allChoicesArr=(myQuestions[questionIndex].answers);
      //console.log(allChoicesArr);
      for(var j=0;j< allChoicesArr.length ;j++)
      {
          answerButton = allChoicesArr[j];
          console.log(answerButton);
          var answer = document.getElementById('answer' + (j + 1));
          
          answer.innerHTML = (j + 1) + '. ' + answerButton;
          
          
      }
    }
    function checkAnswer(btnIndex)
    {
      if(myQuestions[questionIndex].correctAnswer === btnIndex)
      {
          answerDiv.style.display="block";
          answerDiv.innerHTML="Correct!";
          sectionEl.appendChild(answerDiv);
          var score =0;
          score = score+5;
          
      }
      else
      {
           timerCount -=10;
           timerEl.textContent = "Time:" +timerCount;
           answerDiv.style.display="block";
           answerDiv.innerHTML="Wrong!";
           sectionEl.appendChild(answerDiv);
           
      }
      setTimeout(function(){ 
        
        questionIndex++;
        answerDiv.style.display="none";
        readQuestions();}, 1000);
        
    }
    function result()
    {
      var score =0;


    }
    
    
  
    
    
 
      
      
      
    
  
  
     
   
    
  


