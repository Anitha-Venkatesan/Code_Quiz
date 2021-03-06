var startBtn = document.getElementById('startButton');
var initialBtn=document.getElementById('initials');
var goBack=document.getElementById('goBack');
var clearHighScore=document.getElementById('clearHighScore');
var answer1Btn=document.getElementById('answer1');
var answer2Btn= document.getElementById('answer2');
var answer3Btn=document.getElementById('answer3');
var answer4Btn= document.getElementById('answer4');
var navItem=document.getElementById('navitem');
var viewHighScore=document.getElementById('viewHighScore');
var timerEl =document.getElementById('timer');
var startdivEl = document.getElementById('startDiv');
var sectionEl =document.getElementById('mySection');
var scoreEl =document.getElementById('scoreDiv');
var initials=document.getElementById('initialInput');
var resultEl=document.getElementById('resultDiv');
var finalScore =document.getElementById('score');
var getHighScore=document.getElementById('getInput');
var questionEl=document.getElementById('question');
var answerDiv = document.createElement("div");

var readTimer;
var timerCount=0; 
var questionIndex=0;
var score=0;
var scorePage;
var allChoicesArr;
startdivEl.style.display="block";
scoreEl.style.display="none";
sectionEl.style.display="none";
resultEl.style.display="none";

//Timer function to start the timer
function countDownTimer()
{
  questionIndex=0;
  sectionEl.style.display="block";
  startdivEl.style.display="none";
 readQuestions();
 timerCount =75; 
 
 readTimer=setInterval(startTimer,1000);
    function startTimer()
    {
        if(timerCount >= 0){
          timerCount--;
          timerEl.textContent = "Time:" +timerCount;
        }
        if (timerCount == 0) {
          timerEl.textContent = "Time:00";
          clearInterval(readTimer); 
          navItem.style.display="none";
          sectionEl.style.display="none";
          scoreEl.style.display="block";
          finalScore.innerHTML= score; 
             
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
//function to read quesions and answers
function readQuestions()
    {

      var answerButton=[];
      questionEl.innerHTML= (myQuestions[questionIndex].question);
      allChoicesArr=(myQuestions[questionIndex].answers);
      for(var j=0;j< allChoicesArr.length ;j++)
      {
          answerButton = allChoicesArr[j];
          var answer = document.getElementById('answer' + (j + 1));
          
          answer.innerHTML = (j + 1) + '. ' + answerButton;
      }
    }
//function to check answers
 function checkAnswer(btnIndex)
    {
      answer1Btn.disabled = true;
      answer2Btn.disabled = true;
      answer3Btn.disabled = true;
      answer4Btn.disabled = true;
      if(myQuestions[questionIndex].correctAnswer === btnIndex)
      {
          answerDiv.style.display="block";
          answerDiv.innerHTML="Correct!";
          sectionEl.appendChild(answerDiv);
          score += 5;
      }    
      else
      {
          timerCount -=10;
          if(timerCount<0)
           {
             timerCount=0;
           }
           timerEl.textContent = "Time:" +timerCount;
           answerDiv.style.display="block";
           answerDiv.innerHTML="Wrong!";
           sectionEl.appendChild(answerDiv);  
      }
      finalScore.innerHTML= score; 

      var setTimer = setTimeout(function(){ 
        answer1Btn.disabled = false;
        answer2Btn.disabled = false;
        answer3Btn.disabled = false;
        answer4Btn.disabled = false;
        questionIndex++;
        answerDiv.style.display="none";
        if(questionIndex === myQuestions.length)
        {
              clearInterval(readTimer);
              //navItem.style.display="none";
              sectionEl.style.display="none";
              clearTimeout(setTimer);
              scoreEl.style.display="block";
              return;
        } else {
          readQuestions();
        }
      }, 750);    
           
    }
//function to calculate highscore
    function calculateHighScore()
    {
      localStorage.setItem(document.getElementById('initialInput').value,score);
           scoreEl.style.display="none";
           sectionEl.style.display="none";
           resultEl.style.display="block";
           navItem.style.display="none";
           var results = [];
           var enteredScore=[];
           var displayMaxScore=[];
           for(var z=0;z<localStorage.length;z++)
           {
               
            var keyValue=parseInt(localStorage.getItem(localStorage.key(z)));
            results.push({
              key: localStorage.key(z),
              score: keyValue
            });
            enteredScore.push(keyValue);
           }
          var maxScore =enteredScore.sort(function(a, b){return b-a});
          maxScore= maxScore[0];
          for(var z=0;z<results.length;z++)
          {
            if(results[z].score == maxScore)
            { 
              displayMaxScore.push(results[z].key);
            }
          }

          var displayName= displayMaxScore.join() + ":" + maxScore;
          getHighScore.innerHTML =displayName.toUpperCase();
          
    }
      
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
initialBtn.addEventListener('click',function (){
      calculateHighScore();
     });  

goBack.addEventListener('click',function(){
      startdivEl.style.display="block";
      scoreEl.style.display="none";
      resultEl.style.display="none";
      sectionEl.style.display="none";
      navItem.style.display="flex";
      timerEl.textContent = "Time:75";
      document.getElementById('initialInput').value="";
      score=0;
    });
clearHighScore.addEventListener('click',function(){
      localStorage.clear();
      getHighScore.innerHTML="";
      scoreEl.style.display="none";
      sectionEl.style.display="none";
    });
viewHighScore.addEventListener('click',function(){
      calculateHighScore();
      clearInterval(readTimer); 
      startdivEl.style.display="none";
      scoreEl.style.display="none";
      sectionEl.style.display="none";
      resultEl.style.display="block";
      navItem.style.display="none";
    });
             
              
      

          
        
    
    
    
   
   
   
    
    
    
    
  
    
    
 
      
      
      
    
  
  
     
   
    
  


