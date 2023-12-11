document.getElementById('quizbook').style.display = 'none'
document.getElementById('todobook').style.display = 'none'

// let quizbtn = document.getElementById('quizbtn')
// quizbtn.style.borderLeft = '4px solid aqua'
//     quizbtn.style.borderRadius = '10px'
quizbtn.onfocus = function(){
    document.getElementById('quizbook').style.display = 'block'
    document.getElementById('todobook').style.display = 'none'
    quizbtn.style.borderLeft = '4px solid aqua'
    quizbtn.style.borderRadius = '10px'
    todobtn.style.borderLeft = 'none'
    todobtn.style.borderRadius = 'none'
}

let todobtn = document.getElementById('todobtn')
todobtn.onfocus = function(){
    document.getElementById('quizbook').style.display = 'none'
    document.getElementById('todobook').style.display = 'block'
    todobtn.style.borderLeft = '4px solid aqua'
    todobtn.style.borderRadius = '10px'
    quizbtn.style.borderLeft = 'none'
    quizbtn.style.borderRadius = 'none'
}
// for changing to icons










let question = document.getElementById('questions')
let score = document.getElementById('score')
let quesno = 0;
question.textContent = quesno;

let scoreno = 0;
score.textContent = scoreno;
// question.textContent = quesno;
// score . textContent = scoreno;







// giving checked question number (for question one)
let wrong1 = document.getElementById('wrong1');
let wrong11 = document.getElementById('wrong11');
let wrong111 = document.getElementById('wrong111');

wrong1.onchange = function(){
  if (this.checked){
  quesno = 1;
  question.textContent = quesno;
  }
}
wrong11.onchange = function(){
  if (this.checked){
  quesno = 1;
  question.textContent = quesno;
  }
}
wrong111.onchange = function(){
  if (this.checked){
  quesno = 1;
  question.textContent = quesno;
  }
}
// for question 2
let wrong2 = document.getElementById('wrong2');
let wrong22 = document.getElementById('wrong22');
let wrong222 = document.getElementById('wrong222');

wrong2.onchange = function(){
  if (this.checked){
  quesno = 2;
  question.textContent = quesno;
  }
}
wrong22.onchange = function(){
  if (this.checked){
  quesno = 2;
  question.textContent = quesno;
  }
}
wrong222.onchange = function(){
  if (this.checked){
  quesno = 2;
  question.textContent = quesno;
  }
}
// for question 3
let wrong3 = document.getElementById('wrong3');
let wrong33 = document.getElementById('wrong33');
let wrong333 = document.getElementById('wrong333');

wrong3.onchange = function(){
  if (this.checked){
  quesno = 3;
  question.textContent = quesno;
  }
}
wrong33.onchange = function(){
  if (this.checked){
  quesno = 3;
  question.textContent = quesno;
  }
}
wrong333.onchange = function(){
  if (this.checked){
  quesno = 3;
  question.textContent = quesno;
  }
}
// for question 4
let wrong4 = document.getElementById('wrong4');
let wrong44 = document.getElementById('wrong44');
let wrong444 = document.getElementById('wrong444');

wrong4.onchange = function(){
  if (this.checked){
  quesno = 4;
  question.textContent = quesno;
  }
}
wrong44.onchange = function(){
  if (this.checked){
  quesno = 4;
  question.textContent = quesno;
  }
}
wrong444.onchange = function(){
  if (this.checked){
  quesno = 4;
  question.textContent = quesno;
  }
}
// for question 5
let wrong5 = document.getElementById('wrong5');
let wrong55 = document.getElementById('wrong55');
let wrong555 = document.getElementById('wrong555');

wrong5.onchange = function(){
  if (this.checked){
  quesno = 5;
  question.textContent = quesno;
  }
}
wrong55.onchange = function(){
  if (this.checked){
  quesno = 5;
  question.textContent = quesno;
  }
}
wrong555.onchange = function(){
  if (this.checked){
  quesno = 5;
  question.textContent = quesno;
  }
}
// for question 6
let wrong6 = document.getElementById('wrong6');
let wrong66 = document.getElementById('wrong66');
let wrong666 = document.getElementById('wrong666');

wrong6.onchange = function(){
  if (this.checked){
  quesno = 6;
  question.textContent = quesno;
  }
}
wrong66.onchange = function(){
  if (this.checked){
  quesno = 6;
  question.textContent = quesno;
  }
}
wrong666.onchange = function(){
  if (this.checked){
  quesno = 6;
  question.textContent = quesno;
  }
}
// for question 7
let wrong7 = document.getElementById('wrong7');
let wrong77 = document.getElementById('wrong77');
let wrong777 = document.getElementById('wrong777');

wrong7.onchange = function(){
  if (this.checked){
  quesno = 7;
  question.textContent = quesno;
  }
}
wrong77.onchange = function(){
  if (this.checked){
  quesno = 7;
  question.textContent = quesno;
  }
}
wrong777.onchange = function(){
  if (this.checked){
  quesno = 7;
  question.textContent = quesno;
  }
}
// for question 8
let wrong8 = document.getElementById('wrong8');
let wrong88 = document.getElementById('wrong88');
let wrong888 = document.getElementById('wrong888');

wrong8.onchange = function(){
  if (this.checked){
  quesno = 8;
  question.textContent = quesno;
  }
}
wrong88.onchange = function(){
  if (this.checked){
  quesno = 8;
  question.textContent = quesno;
  }
}
wrong888.onchange = function(){
  if (this.checked){
  quesno = 8;
  question.textContent = quesno;
  }
}
// for question 9
let wrong9 = document.getElementById('wrong9');
let wrong99 = document.getElementById('wrong99');
let wrong999 = document.getElementById('wrong999');

wrong9.onchange = function(){
  if (this.checked){
  quesno = 9;
  question.textContent = quesno;
  }
}
wrong99.onchange = function(){
  if (this.checked){
  quesno = 9;
  question.textContent = quesno;
  }
}
wrong999.onchange = function(){
  if (this.checked){
  quesno = 9;
  question.textContent = quesno;
  }
}
// for question 10
let wrong10 = document.getElementById('wrong10');
let wrong1010 = document.getElementById('wrong1010');
let wrong101010 = document.getElementById('wrong101010');

wrong10.onchange = function(){
  if (this.checked){
  quesno = 10;
  question.textContent = quesno;
  }
}
wrong1010.onchange = function(){
  if (this.checked){
  quesno = 10;
  question.textContent = quesno;
  }
}
wrong101010.onchange = function(){
  if (this.checked){
  quesno = 10;
  question.textContent = quesno;
  }
}
// End of of wrong checks




document.getElementById('correct1').onchange = function() {
    if (this.checked) {
      quesno =  1;
      question.textContent = quesno
      scoreno = scoreno + 1;
      
      

    } else {
      alert('wrong')
    }
  };

//   when i click next let it take me to the next page
document.getElementById('book1').style.display = 'block'
 document.getElementById('book2').style.display = 'block'
 document.getElementById('book3').style.display = 'none'
 document.getElementById('book4').style.display = 'none'
 document.getElementById('book5').style.display = 'none'
 document.getElementById('book6').style.display = 'none'
 document.getElementById('book7').style.display = 'none'
 document.getElementById('book8').style.display = 'none'
 document.getElementById('book9').style.display = 'none'
 document.getElementById('book10').style.display = 'none'
 let next1 = document.getElementById('next1')

  //  next1.onfocus = function(){
  //   document.getElementById('book1').style.display = 'none'
  //   document.getElementById('book3').style.display = 'none'
  //   document.getElementById('book4').style.display = 'none'
  //   document.getElementById('book5').style.display = 'none'
  //   document.getElementById('book6').style.display = 'none'
  //   document.getElementById('book7').style.display = 'none'
  //   document.getElementById('book8').style.display = 'none'
  //   document.getElementById('book9').style.display = 'none'
  //   document.getElementById('book10').style.display = 'none'
  //   document.getElementById('book2').style.display = 'block'
    
  //  }
     
     




  document.getElementById('correct2').onchange = function() {
    if (this.checked) {
        quesno =  2;
        question.textContent = quesno
         scoreno = scoreno + 1;
    } else {
      alert("The checkbox is not checked.");
    }
  };

  let next2 = document.getElementById('next2')

   next2.onfocus = function(){
    document.getElementById('book1').style.display = 'none'
    document.getElementById('book2').style.display = 'none'
    document.getElementById('book4').style.display = 'block'
    document.getElementById('book5').style.display = 'none'
    document.getElementById('book6').style.display = 'none'
    document.getElementById('book7').style.display = 'none'
    document.getElementById('book8').style.display = 'none'
    document.getElementById('book9').style.display = 'none'
    document.getElementById('book10').style.display = 'none'
    document.getElementById('book3').style.display = 'block'
    

   }

  document.getElementById('correct3').onchange = function() {
    if (this.checked) {
        quesno =  3;
        question.textContent = quesno
        scoreno = scoreno + 1;
    } else {
      alert("The checkbox is not checked.");
    }
  };

  let next3 = document.getElementById('next3')

  //  next3.onfocus = function(){
  //   document.getElementById('book1').style.display = 'none'
  //   document.getElementById('book2').style.display = 'none'
  //   document.getElementById('book3').style.display = 'none'
  //   document.getElementById('book4').style.display = 'block'
  //   document.getElementById('book5').style.display = 'none'
  //   document.getElementById('book6').style.display = 'none'
  //   document.getElementById('book7').style.display = 'none'
  //   document.getElementById('book8').style.display = 'none'
  //   document.getElementById('book9').style.display = 'none'
  //   document.getElementById('book10').style.display = 'none'
    

  //  }


  document.getElementById('correct4').onchange = function() {
    if (this.checked) {
        quesno =  4;
        question.textContent = quesno
        scoreno = scoreno + 1;
    } else {
      alert("The checkbox is not checked.");
    }
  };

  let next4 = document.getElementById('next4')

  next4.onfocus = function(){
   document.getElementById('book1').style.display = 'none'
   document.getElementById('book2').style.display = 'none'
   document.getElementById('book3').style.display = 'none'
   document.getElementById('book4').style.display = 'none'
   document.getElementById('book5').style.display = 'block'
   document.getElementById('book6').style.display = 'block'
   document.getElementById('book7').style.display = 'none'
   document.getElementById('book8').style.display = 'none'
   document.getElementById('book9').style.display = 'none'
   document.getElementById('book10').style.display = 'none'
   

  }


  document.getElementById('correct5').onchange = function() {
    if (this.checked) {
        quesno =  5;
        question.textContent = quesno
        scoreno = scoreno + 1;
    } else {
      alert("The checkbox is not checked.");
    }
  };

  let next5 = document.getElementById('next5')

  // next5.onfocus = function(){
  //  document.getElementById('book1').style.display = 'none'
  //  document.getElementById('book2').style.display = 'none'
  //  document.getElementById('book3').style.display = 'none'
  //  document.getElementById('book4').style.display = 'none'
  //  document.getElementById('book5').style.display = 'none'
  //  document.getElementById('book6').style.display = 'block'
  //  document.getElementById('book7').style.display = 'none'
  //  document.getElementById('book8').style.display = 'none'
  //  document.getElementById('book9').style.display = 'none'
  //  document.getElementById('book10').style.display = 'none'
   

  // }


//   six

document.getElementById('correct6').onchange = function() {
    if (this.checked) {
        quesno =  6;
        question.textContent = quesno
        scoreno = scoreno + 1;
    } else {
      alert("The checkbox is not checked.");
    }
  };

  let next6 = document.getElementById('next6')

  next6.onfocus = function(){
   document.getElementById('book1').style.display = 'none'
   document.getElementById('book2').style.display = 'none'
   document.getElementById('book3').style.display = 'none'
   document.getElementById('book4').style.display = 'none'
   document.getElementById('book5').style.display = 'none'
   document.getElementById('book6').style.display = 'none'
   document.getElementById('book7').style.display = 'block'
   document.getElementById('book8').style.display = 'block'
   document.getElementById('book9').style.display = 'none'
   document.getElementById('book10').style.display = 'none'
   

  }


//   seven

document.getElementById('correct7').onchange = function() {
    if (this.checked) {
        quesno =  7;
        question.textContent = quesno
        scoreno = scoreno + 1;
    } else {
      alert("The checkbox is not checked.");
    }
  };

  let next7 = document.getElementById('next7')

  // next7.onfocus = function(){
  //  document.getElementById('book1').style.display = 'none'
  //  document.getElementById('book2').style.display = 'none'
  //  document.getElementById('book3').style.display = 'none'
  //  document.getElementById('book4').style.display = 'none'
  //  document.getElementById('book5').style.display = 'none'
  //  document.getElementById('book6').style.display = 'none'
  //  document.getElementById('book7').style.display = 'none'
  //  document.getElementById('book8').style.display = 'block'
  //  document.getElementById('book9').style.display = 'none'
  //  document.getElementById('book10').style.display = 'none'
   

  // }


//   eight


document.getElementById('correct8').onchange = function() {
    if (this.checked) {
        quesno =  8;
        question.textContent = quesno
        scoreno = scoreno + 1;
    } else {
      alert("The checkbox is not checked.");
    }
  };

  let next8 = document.getElementById('next8')

  next8.onfocus = function(){
   document.getElementById('book1').style.display = 'none'
   document.getElementById('book2').style.display = 'none'
   document.getElementById('book3').style.display = 'none'
   document.getElementById('book4').style.display = 'none'
   document.getElementById('book5').style.display = 'none'
   document.getElementById('book6').style.display = 'none'
   document.getElementById('book7').style.display = 'none'
   document.getElementById('book8').style.display = 'none'
   document.getElementById('book9').style.display = 'block'
   document.getElementById('book10').style.display = 'block'
   

  }


//   ninth

document.getElementById('correct9').onchange = function() {
    if (this.checked) {
        quesno =  9;
        question.textContent = quesno
        scoreno = scoreno + 1;
    } else {
      alert("The checkbox is not checked.");
    }
  };

  let next9 = document.getElementById('next9')

  // next9.onfocus = function(){
  //  document.getElementById('book1').style.display = 'none'
  //  document.getElementById('book2').style.display = 'none'
  //  document.getElementById('book3').style.display = 'none'
  //  document.getElementById('book4').style.display = 'none'
  //  document.getElementById('book5').style.display = 'none'
  //  document.getElementById('book6').style.display = 'none'
  //  document.getElementById('book7').style.display = 'none'
  //  document.getElementById('book8').style.display = 'none'
  //  document.getElementById('book9').style.display = 'none'
  //  document.getElementById('book10').style.display = 'block'
   

  // }

//   ten

document.getElementById('correct10').onchange = function() {
    if (this.checked) {
        quesno =  10;
        question.textContent = quesno
        scoreno = scoreno + 1;
        // localStorage.setItem('score', scoreno)
    } else {
      alert("The checkbox is not checked.");
    }
  };

let submit = document.getElementById('next10')
submit.onfocus =  function(){
    // score . textContent = localStorage.getItem('score');
    let comment = document.getElementById('comment')
    score.textContent = scoreno;
if( scoreno === 10){
       comment.textContent = 'Excellent!, you won $100'
       comment.style.color = 'rgb(48, 201, 48)'
}else if(scoreno > 5){
  comment.textContent = 'Very good!'
  comment.style.color = 'rgb(48, 201, 48)'
}else if( scoreno === 5){
  comment.textContent = 'Average!'
  comment.style.color = 'orange'
}else if ( scoreno === 0){
  comment.textContent = 'Try again!'
  comment.style.color = 'red'
}else if ( scoreno < 2){
  comment.textContent = 'You can do better, read more'
  comment.style.color = 'orange'
}else if (scoreno < 5){
  comment.textContent = 'Nice! you can do better'
  comment.style.color = 'orange'
}


    document.getElementById('book1').style.display = 'none'
   document.getElementById('book2').style.display = 'none'
   document.getElementById('book3').style.display = 'none'
   document.getElementById('book4').style.display = 'none'
   document.getElementById('book5').style.display = 'none'
   document.getElementById('book6').style.display = 'none'
   document.getElementById('book7').style.display = 'none'
   document.getElementById('book8').style.display = 'none'
   document.getElementById('book9').style.display = 'none'
   document.getElementById('book10').style.display = 'none'
   
   
  
    
}
