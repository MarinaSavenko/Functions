 /////////////
 let quaest = prompt('Яка офеційна назва JavaScript?', '')  
 if (quaest == 'ECMAScript'){
    alert('right');
 }else {
    alert('wrong');
 } 
 
//////////////
 let quaest = prompt('Яка офеційна назва JavaScript?', '');
 
 quaest == 'ECMAScript' ? alert('right') : alert('wrong');


///////////
 let quaest = prompt('Яка офеційна назва JavaScript?', '');
 switch(quaest) {
    case 'ECMAScript' : alert('right'); break;
    default: alert('wrong'); break;
 }
 
////////////
 let numb = Number(prompt('Введіть число'));
  if (numb>0) {
    alert(1);
  } else if (numb<0){
    alert(-1);
  } else {
    alert(0);
  }



//////////////////
  let numb = Number(prompt('Введіть число'));
  (numb>0) ? alert(1) : (numb<0)? alert(-1) : alert(0);


/////////////////
  let message = (login =='Працівник') ? 'Привіт': (login == 'Директор') ?  'Вітаю' : (login == ''?) : '';


/////////////////
let age = Number(prompt('How old are u?', ''));
  if (age >= 14 && age <= 90){
    alert('It is from 14 to 90 years');
  } else {
    alert('It isn`t from 14 to 90 years');
  }


//////////
  let answer = prompt('Who is there?');
 if (answer == 'Admin'){
     let password = prompt('Password?');
     if (password=='TheMaster'){
         alert('Welcome!');
         }
     else if(password != 'TheMaster'){
         alert('Wrong password');
         }
     else if (password == null){
         alert('Canceled');
         }
     }else if (answer != 'Admin'){
         alert('I do not know you');
     }else {
         alert('Canceled');
     }



///////
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}


/////
let num;
do {
   num = prompt('Enter number');
} while (num <=100 );