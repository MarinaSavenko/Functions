//First
function sayHello(name){
    console.log("Hello, " + name);
}
sayHello("Ann");

//Second
function greetUser(timeofday = 'day', name =''){
    console.log('Good ' + timeofday +', '+ name);
}
greetUser(undefined, 'Ann');
  
//third
function isEven(a = 5){
    if (a%2 === 0){
        console.log('Even');
    }else {
        console.log('Not even')
    }
    
}
isEven(4);

//fourth
function repeatText(text = "text", n = 5){
    if (n>=1){
        let i=0;
        let repeat;
        while(i<n){
        repeat = repeat + text;
        i++;
        }
        console.log(repeat);
        return repeat;
            }else {
        console.log('invalid value of n')
    }
}
repeatText("hello", 5);

//fifth
function square(x){
    y = x*x;
    console.log('Квадрат числа '+ x +' равен ' + y);
    return y;
}
square(5);





