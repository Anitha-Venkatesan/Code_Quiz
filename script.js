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
          answers: [
            "function = Geekfunc()",
            "function Geekfunc()",
           "function := Geekfunc()",
            "function : Geekfunc()"],
          correctAnswer: "2"
        },
        {
          question: "What is the JavaScript syntax for printing values in Console?",
          answers: [
            "print(5)",
            "console.print(5);",
            "console.log(5);",
            "print.console(5);"],
          correctAnswer: "3"
        },
        {
          question: "Which built-in method reverses the order of the elements of an array?",
          answers: [
            "reverse()",
            "changeOrder(order)",
            "sort(order)",
            "None of the above."], 
          correctAnswer: "1"
        },
        {
          question: "What does HTML stand for?",
          answers: [
              "Hyper Time Markup Language",
              "Hyperlinks and Text Markup Language",
              "Home Tool Markup Language",
              "Hyper Text Markup Language"], 
          correctAnswer: "4"
        },
        {
          question: "Which character is used to indicate an end tag?",
          answers: [
              "/",
              "<",
              ">",
              "*"], 
          correctAnswer: "1"
        },
        ];
    
    var i=0;
    //console.log(myQuestions.length);
    var answerButton=[];
    
    if(i<myQuestions.length)
    {
      questionEl.innerHTML= (myQuestions[i].question);
      var allChoicesArr=(myQuestions[i].answers);
      for(var j=0;j< allChoicesArr.length ;j++)
      {
          answerButton = allChoicesArr[j];
          var answer = document.getElementById('answer' + (j + 1));
          answer.innerHTML = (j + 1) + '. ' + answerButton;
       
      } 
      
      
     
      
         
        
      
      
      i++;
    }
    
  }



    

