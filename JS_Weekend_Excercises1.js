

///// Ex1.1 

    
function YesOrNo(bool){
    if(bool == true){
        console.log("Yes");
    }
    else{
        console.log("No"); 
    }
}

YesOrNo(false); 


///// Ex2.1

const arrayExe2_1 = [19, 5, 42, 2, 77];

function Sum_of_lowest_numbers(arr){
    let minNumber1 = arrayExe2_1[0]; 
    let index = 0; 
    let minNumber2 = arrayExe2_1[0];
  
    ///In this case I could maybe use also sort function to to sort the array and sum the 
    //first two numbers but because its only 2 numbers i did this way 


    for(let i = 1; i<arr.length; i++){
        if(arr[i] < minNumber1){
            minNumber1 = arr[i];  
            index = i; 
        }
    }

    for(let i=1; i<arr.length; i++){
        if(arr[i] < minNumber2 && arr[i] != arr[index]){
            minNumber2 = arrayExe2_1[i]; 
        }
    }

    return minNumber1 + minNumber2; 

    
}


console.log(Sum_of_lowest_numbers(arrayExe2_1)); 



///// Ex2.2 - One and Zero - Binary

const arrayExe2_2 = [1, 1, 1, 1];


function BinaryConvert(arr){

//the base calculate of my function is - [0,1,1,0] = 6 --> 2^1+2+2 = 6
    
    let powerCounter = 0;
    let DecimalSum = 0; 

    for(let i=arr.length-1; i>=0; i--){
        if(arr[i] !=0 && arr[i] != 1){
            console.log("invalid array");
            return; 
        }
        else{
            if(arr[i] == 1){
                DecimalSum += Math.pow(2,powerCounter); 
                powerCounter++; 
                
            }
            else{
                powerCounter++; 
            }
        }

    }

        return DecimalSum; 
    
}

console.log(BinaryConvert(arrayExe2_2));


///// Ex2.3 - Find the Next Perfect Square
//מניחים שהמספר הוא חיובי ולכן לא נדרשת בדיקת קצה עבור זה שכן תחום הגדרה של שורש הוא גדול או שווה אפס

function findNextSquare(number){
    let n = Math.sqrt(number); 
    if(Number.isInteger(n) == true){
        return Math.pow(n+1,2);
    }
    else{
        return -1; 
    }
   

}

console.log(findNextSquare(121)); 


///// Ex2.4 - Unique

const arrayExe2_4 = [4,4,4,3,4,4]; 

function findUniq(arr){

    if(arr.length <3){
        console.log("invalid array"); 
        return;
    }
    

   arr.sort(function(a,b){ //sort the array
    return a-b;
   })

   if(arr[0] != arr[1]){ //option1: 33334 or option2: 34444
    return arr[0];
   }
   else{
    return arr[1];
   }


}

console.log(findUniq(arrayExe2_4));


///// Ex2.5 - Summation

function Summation(number){
    let sum = 0; 
    while(number>0){
        sum = sum + number;
        number--; 
    }

    return sum; 

}

console.log(Summation(6)); 

///// Ex2.6 - Years and Centuries

function centuryFromYear(year){
    if(year<0){
        console.log("invalid input"); 
    }

    return Math.ceil(year/100); 
}

console.log(centuryFromYear(1705)); 

///// Ex2.7 - Basic Math

function basicOp(str, number1, number2){
    let result; 

    if(str != '/' && str != '*' && str != '+' && str != '-'){ //check if the string\char input valid
        console.log("invalid input"); 
    }
    else{

        switch(str){

            case '/':
            r1esult = (number1/number2); 
            break; 

            case '*':
                result = (number1*number2);
                break; 

            case '+':
                result = (number1+number2);
                break;


            case '-':
                result = (number1-number2); 
                break; 

        }

        
    }

    return result; 
}

console.log(basicOp('+', 2,5)); 


////// Ex3.1 - Growth Of population

function nb_year(p0,percent,aug,p){

    if(p0 < 0 || p<0){
        console.log("invalid input"); 
        return; 
    }
    
    let percentConvert; 
    let populationToSurpass = p0; 
    let yearCounter = 0; 

    if(percent > 0){
        percentConvert = (percent/100); 
    }
    else{
        percentConvert = 0; 
    }

    while(populationToSurpass<p){
        populationToSurpass = populationToSurpass + (populationToSurpass*percentConvert) + aug; 
        yearCounter++; 
    }

    return yearCounter; 

}

console.log(nb_year(1500000, 2.5, 10000, 2000000)); 


///// Ex4.1 - Fibonacci 
function fibonacci(n){
   // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
   // n=6 , nextSum = 0 + 1; number1 = number2 = 1 number2 = nextSum = 1...

    if(n==0){
        return 0;
    }
    else if(n==1){
        return 1;
    }

    let number1 = 0, number2 = 1;
    let nextSum = 0; 
    let i = 2;  //staring to count after 2 numbers 
    while(i<=n){
        nextSum = number1 + number2; 
        number1 = number2; 
        number2 = nextSum; 
        i++;

    }

    return nextSum; 

}

console.log(fibonacci(6));




///// Ex5.1 - trimming string
function removeFirstAndLastChar(string){

if(string<=2){
    console.log("invalid input");
    return; 
}

let newString = string.slice(1,-1); 

return newString; 


}

console.log(removeFirstAndLastChar("hello"));

///// Ex5.2 - String Repeat
function repeatStr(num, string){

    if(num<0 || typeof string !== "string"){
        console.log("invalid input"); 
        return;
    }


    let i = 0; 
    let newStr = ""; 

    while(i<num){
        newStr += string; 
        i++;

    }

    return newStr; 

}

console.log(repeatStr(5,"Hello")); 

///// Ex5.3 - To Camel Case

function toCamelCase(str){
   
    let newStr = "";
    let CapitalChar = false; 
    let currentChar; 
    let i = 0; 

    while(i<str.length){
        
        currentChar = str[i]; 
        
        if(str[i] == '-' || str[i] == '_'){
            CapitalChar = true; 
            i++;
        }
        else{
            if(CapitalChar == true){
                currentChar =  currentChar.toUpperCase(); 
                newStr += currentChar;
                CapitalChar = false;
                i++;
            }
            else{
                newStr += currentChar; 
                i++;
            }
        }

    
    }

    return newStr; 


}

console.log(toCamelCase("the-stealth-warrior"));


///// Ex5.4 - To Weird Case
function toWeirdCase(str){

    let regExpWhiteSpace = /\s{2,}/; //check if there is more then 2 white spaces
    let isValidInput = regExpWhiteSpace.test(str); 
    if(isValidInput == true){
        console.log("invalid input more then 2 white spaces"); 
        return; 
    }
    
    let currentIndex = 0; 
    let newStr = ""; 

    while(currentIndex<str.length){

        let char = str[currentIndex]; 

        if(currentIndex%2==0){
            char = char.toUpperCase(); 
            newStr += char; 
            currentIndex++; 
        }
        else{
            char = char.toLowerCase(); 
            newStr += char; 
            currentIndex++;
        }


    }

    return newStr; 



}

console.log(toWeirdCase("string")); 

///// Ex5.5 - Abbreviate two words

function abbreviateName(str){

let name = "";    
let nameArr = str.split(' '); 


if(nameArr.length != 2 && nameArr[0] == ' ' && nameArr[1] == ' '){
    console.log("invalid input"); 
    return; 
}

let firstChar = nameArr[0][0].charAt(0); 
let secondChar = nameArr[1][1].charAt(0);

firstChar = firstChar.toUpperCase(); 
secondChar = secondChar.toUpperCase();

name = firstChar + "." + secondChar; 

return name; 


    
}

console.log(abbreviateName("gita iskayev"));


