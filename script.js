var startBtn = document.getElementById('startButton');
var timerEl =document.getElementById('timer');
var divEl = document.getElementById('myDiv');
var sectionEl =document.getElementById('mySection');
var questionEl=document.getElementById('question');
var answer1Btn=document.getElementById('answer1');
var answer2Btn= document.getElementById('answer2');
var answer3Btn=document.getElementById('answer3');
var answer4Btn= document.getElementById('answer4');



function countDownTimer()
{
    
    readQuestions();
    var timerCount =75; 
    var Readtimer=setInterval(startTimer,1000);
    
    function startTimer()
    {
      
        if(timerCount >= 0)
         {
          timerCount--;
          timerEl.textContent = "Time:" +timerCount;
          if(sectionEl.style.display ==="none")
          {
            
            divEl.style.display="block";
            sectionEl.style.display="none";
          }
          else
          {
            
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


  

startBtn.addEventListener('click',countDownTimer);
 
  
 function readQuestions()
    {
       
       var myQuestions = [
        {
          question: "What is the syntax for creating a function in JavaScript named as Geekfunc?",
          answers: {
            1 : "function = Geekfunc()",
            2 : "function Geekfunc()",
            3 : "function := Geekfunc()",
            4 : "function : Geekfunc()"},
          correctAnswer: "2"
        },
        {
          question: "What is the JavaScript syntax for printing values in Console?",
          answers: {
            1 : "print(5)",
            2 : "console.print(5);",
            3 : "console.log(5);",
            4 : "print.console(5);"},
          correctAnswer: "3"
        },
        {
          question: "Which built-in method reverses the order of the elements of an array?",
          answers: {
            1 : "reverse()",
            2 : "changeOrder(order)",
            3 : "sort(order)",
            4 : "None of the above."}, 
          correctAnswer: "1"
        },
        {
          question: "What does HTML stand for?",
          answers: {
              1 : "Hyper Time Markup Language",
              2 : "Hyperlinks and Text Markup Language",
              3 : "Home Tool Markup Language",
              4 : "Hyper Text Markup Language"}, 
          correctAnswer: "4"
        },
        {
          question: "Which character is used to indicate an end tag?",
          answers: {
              1 : "/",
              2 : "<",
              3 : ">",
              4 : "*"}, 
          correctAnswer: "1"
        },
        ];
    
    var i=0;var j=0;var k=0;
    console.log(myQuestions.length);
    
    if(i<myQuestions.length)
    {
      questionEl.innerHTML= (myQuestions[i].question);
      var allChoicesArr=Object.keys(myQuestions[i].answers);
      var allAnswersArr =Object.values(myQuestions[i].answers);
      console.log(allChoicesArr.concat(allAnswersArr));
      console.log(allAnswersArr);
      if(j< allChoicesArr.length && k<allAnswersArr.length)
      {
          answer1Btn.innerHTML=allChoicesArr[j].concat(allAnswersArr[k]);
          j++;k++;
          answer2Btn.innerHTML=allChoicesArr[j].concat(allAnswersArr[k]);
          j++;k++;
          answer3Btn.innerHTML=allChoicesArr[j].concat(allAnswersArr[k]);
          j++;k++;
          answer4Btn.innerHTML=allChoicesArr[j].concat(allAnswersArr[k]);
        
      }
      
      
  
      i++;
    }
    
  }



    

