

//////
let user = {};
user.name = 'Ivan';
user.surname = 'Smith';
console.log(user);
user.name = 'Petro';
console.log(user);
delete user.name;
console.log(user);

////
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  //let sum = salaries.John + salaries.Ann + salaries.Pete;
  //alert(sum);
  let sum = 0;
  for (let name in salaries){
    sum = sum + salaries[name];
  }
   console.log(sum);

////
let menu = {
    width: 200,
    height: 300,
    title: "Моє меню"
  };
  function multiplyNumeric(menu){
      for (let key in menu){
        if (typeof(menu.[key] == 'number')){
            menu.[key] = menu.[key]*2;
        }
      }
  };
  multiplyNumeric(menu);


 ////
 let menu = {
    width: 200,
    height: 300,
    title: "Моє меню"
  }
  function multiplyNumeric(menu){
      for (let key in menu){
      if (typeof menu[key] == 'number'){
          console.log( menu[key]*2);
      }
  }
  }
  multiplyNumeric(menu); 