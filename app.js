document.addEventListener("DOMContentLoaded", function() {
    /*console.log("Tere!");

    let hello ="hello world";
    console.log(hello);

    let rangeStart = 1;
    let rangeEnd = 100;
    let numberToCheck = 61;
    let inRange = false;

    for(let i = rangeStart; i <= rangeEnd; i++) {
        if(numberToCheck === i) {
            inRange = true;
            break;
        }
    }*/

    /*if (inRange) {
        console.log("number is in range");
    } else {
        console.log("number is out of rage");
    }*/

    //Ternary opereator- saab kasutada kui on ainult 2 valikut
    /*let result = inRange? "In range" : "Out of range";
    console.log(result);*/

    //korrutustabel- program to display the multiplication tabel of given number 
    //Test data
    //number : 5
    // expected output 
    // 5x1 =5;, 5x2= 10;*/

    /*let number = 5;
    

    for (let i = 1; i <= 10; i++) {
        let string = `${number} x ${i} = ${number *i}`;
        console.log(string);

        //console.log(number, " X ", i, " = ", number*i);   
    } */

    let stringLength;
    let string = "Hello world!";
    stringLength = string.length;
    console.log(stringLength);


    /*for(let i =0; i < 12; i++) {
        console.log(string[i]);
    } */

    /*for(let i= string.length-1; i>=0; i--){
        console.log(string[i]);
        
    }*/
    for (let i =0; i <12, i++ ) {
        if(string[i] === `o`){
            console.log(`*`);
        }
    } else {
            console.log(string[i]);
        }
    let subtitute = string.subtitute("o", "*");

    console.log(subsitute); 




});