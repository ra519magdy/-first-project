//start  answer q1
var userNumber =Number(prompt("enter your Number"));
window.alert(userNumber);

//star answer q2
var num1 =Number(prompt("enter your number"));
if (num1%3==0 && num1%4==0)
{
    window.alert("yes");
}
 else
 
 {
   window.alert("no");
 }
 //start answer q3
var userNumber1=Number(prompt("enter your number"));
var userNumber2=Number(prompt("enter your number"));

if(userNumber1>userNumber2)
{
    window.alert(userNumber1);
}
 else if(userNumber2>userNumber1)
{
 window.alert(userNumber2);
}
//*start answer q4
var userNumber=Number(prompt("enter your number "));
if (userNumber<0)
{
    window.alert("negative"); 
}
else
{
    window.alert("positve");
}
//start q5
var userNumber1=Number(prompt("enter your own number ..."));
var userNumber2=Number(prompt("enter your own number..."));
var userNumber3=Number(prompt("enter your  own number..."));
if (userNumber1>userNumber2 && userNumber1 >userNumber3 )
{
  window.alert("the number" + userNumber1 + "is the max" )
}
else if (userNumber2>userNumber1 && userNumber2>userNumber3)
{
  window.alert("the number" + userNumber2 + "is the max")
}
 else if (userNumber3>userNumber1 && userNumber3>userNumber2 )
{
  window.alert("the number" + userNumber3 + "is the max")
}
 
//start answer q6/7
var number =Number(prompt("enter number"));
if(number%2==0)
{
    window.alert("even");
}
else
{
    window.alert("odd");
}
//start answer q8
var userLetter=prompt("enter your letter")
if (userLetter=="a")
{
    window.alert("vowel")
}
else if (userLetter=="e")
{
  window.alert("vowel")
}

else if (userLetter=="i")
{
  window.alert("vowel");
}

else if (userLetter=="o")
{
  window.alert("vowel");
}
else if (userLetter=="u")
{
  window.alert("vowel");
}
else
{
  window.alert("consonant")
}
//start q9
var x =prompt("Enter Number :");
var ch="";
for(var i=1;i<=x;i++)
{
    if(i%2==0)
    {
        ch+=i+" ";
    }
    else
    {
        continue;
    }
}
window.alert(ch);


//start q10
var number =Number(prompt("ENTER YOUR NUMBER "));
var result ="";
for (i = 1 ;i < 12 ; i++ );
result=number*i;
window.alert(result);

//start q12
var number1 =Number(prompt("enter your number "));
var number2 =Number(prompt("enter your number "));
var result = Math.pow(number1 , number2 );
window.alert(result)

///start q13
var userMark1 = prompt("enter you mark");
var userMark2 = prompt("enter you mark");
var userMark3 = prompt("enter you mark");
var userMark4 = prompt("enter you mark");
var userMark5 = prompt("enter you mark");
var  total= Number (userMark1)+ Number (userMark2) + Number (userMark3)  +  Number (userMark4) + Number (userMark5);
var Average=total/5;
var percentage=(total/500)*100;
window.alert ("total is"  + total  + "Average"  + Average +  "percentage "  +  percentage  + "%");


//star answer q13
var month =Number(prompt("enter your month number"));

if (month==1)
{
  window.alert("31");
}

 else if (month==2)
{
  window.alert("28");
}

 else if (month==3)
{
  window.alert("31");
}

 else if (month==4)
{
  window.alert("30");
}

 else if (month==5)
{
  window.alert("31");
}

 else if (month==6)
{
  window.alert("30");
}

 else if (month==7)
{
  window.alert("31");
}

else if (month==8)
{
  window.alert("31");
}

else if (month==9)
{
  window.alert("30");
}

else if (month==10)
{
  window.alert("31");
}

else if (month==11)
{
  window.alert("30");
}

else if (month==12)
{
  window.alert("31");
}
//start q14
var subject1 =prompt("Physics");
var subject2 =prompt("Chemistry");
var subject3 =prompt("Biology");
var subject4 =prompt("Mathematics");
var subject5 =prompt("Computer");
var total=Number(subject1)+Number(subject2)+Number(subject3)+Number(subject4)+Number(subject5);
var percentage=(total/100)*100;
if(percentage>=90)
{
    window.alert("Percentage ="+percentage+"% "+"Grade A");
}
else if(percentage>=80 && percentage<90)
{
    window.alert("Percentage ="+percentage+"% "+"Grade B");
}
else if(percentage>=70 && percentage<80)
{
    window.alert("Percentage ="+percentage+"% "+"Grade C");
}
else if(percentage>=60 && percentage<70)
{
    window.alert("Percentage ="+percentage+"% "+"Grade D");
}
else if(percentage>=40 && percentage<60)
{
    window.alert("Percentage ="+percentage+"% "+"Grade E");
}
else if(percentage<40)
{
    window.alert("Percentage ="+percentage+"% "+"Grade F");
}


//start answer q15
var month =prompt("enter month");

 switch(month){

  case "January":
  window.alert ("31");
  break;



  case "February":
  window.alert ("28");
  break;

  case "March":
  window.alert ("31");
  break;
  
 case "April ":
 window.alert ("30");
 break;
    
 case "May":
 window.alert ("31");
 break;
 
 case "June":
  window.alert ("30");
  break;


 case "July	":
 window.alert ("31");
 break;

  case "August":
  window.alert ("31");
  break;
  
  case "September":
  window.alert ("30");
  break;
       
  case "October":
  window.alert ("31");
  break;
  

  case "November ":
  window.alert ("30");
  break;
           
  case "December":
  window.alert ("31");
   break;


  default:
  window.alert("dont know");


}    
//start q16
var alphabet= prompt(" enter alphabet ")
switch (alphabet)
{
 case "a":
 window.alert("vowel");
 break;

 case "e":
  window.alert("vowel");
  break;
 
 case "o":
 window.alert("vowel");
 break;   

 case "u":
  window.alert("vowel");
  break;
 
 case "i":
 window.alert("vowel");
 break;   

default:
window.alert("consonant");

}
//start q17 
var number1=Number( prompt("enter number"));
var number2= Number (prompt("enter number"));
switch( number1 > number2 )
{
  case true:
  window.alert(" the" +"Number1" +"the max");
  break;

  case false:
  window.alert(" the" + "Number2" + "the max");
  break;
  

}
//start q18

var weatherNumber=prompt("enter your weather number");
switch (weatherNumber%2==0)

{    
    
    case true:
    window.alert("even");
    break;
    default:
    window.alert("odd");

}


//start answer q19
var number1 =Number( prompt ("enter your number he"));
switch( number1 > 0 ) 
{
    case true:
    window.alert("positave");
    break;

    case false:
    window.alert("negative");
    break;
    case  0:
    window.alert("0") ;
}
//start answer q20
var num1 =Number(prompt("enter your number to cal"));
var opreator =prompt("enter your opreator");
var num2 =Number(prompt("enter your number to cal"));
var result;

switch(opreator)
{
  case "+":
   result= (num1)+ (num2);
   window.alert (result);
   break;

   case "-":
   result= (num1)- (num2);
   window.alert (result);
   break;
 
   case "/":
   result= (num1)/(num2);
   window.alert (result);
   break;
   
   case "*+":
    result= (num1)*(num2);
    window.alert (result);
    break;

}