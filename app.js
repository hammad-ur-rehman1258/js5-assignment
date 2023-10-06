//                         chp 26-30
// //1. Write a program that takes a positive integer from user & display the following in your browser.
// var num1=+prompt("Enter a positive integer");
// //a. number
// document.write("number: " +num1+"<br>");
// //b. round off value of the number
// document.write("round off value:"+Math.round(num1) +"<br>");
// //c. floor value of the number
// document.write("floor value:"+Math.floor(num1)+"<br>" );
// //d. ceil value of the number
// document.write("ceil value:"+Math.ceil(num1) );

// //2. Write a program that takes a negative floating point number from user & display the following in your browser.
// var num1=+prompt("Enter a negative floating number");
// //a. number
// document.write("number: " +num1+"<br>");
// //b. round off value of the number
// document.write("round off value:"+Math.round(num1) +"<br>");
// //c. floor value of the number
// document.write("floor value:"+Math.floor(num1)+"<br>" );
// //d. ceil value of the number
// document.write("ceil value:"+Math.ceil(num1) );

// //3. Write a program that displays the absolute value of a number.
// var num1=+prompt("Enter a number");
// document.write("The absolute value of "+num1+" is "+Math.abs(num1));

// //4. Write a program that simulates a dice using random() method of JS Math class.
// var num1=Math.random();
// num1=Math.round(num1);
// var dice=(num1*2)+4;
// document.write("random dice value: "+dice);

// //5. Write a program that simulates a coin toss using random() method of JS Math class.
// var num1=Math.random();
// num1=Math.round(num1);
// var ran=num1+1;
// if(ran===1){
//    document.write(ran+"<br>Random coin value: Tails");
// }
// else{
//     document.write(ran+"<br>Random coin value: Heads");
// }

// //6. Write a program that shows a random number between 1 and 100 in your browser.
// var num1=Math.random();
// num1=(num1*100)
// var ran=Math.round(num1);
// document.write("Random number between 1 and 100: "+ran);

// //7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
// var weight=prompt("Enter your weight");
// var x=parseInt(weight);
// document.write("The weight of the user is: "+x+" kilograms");

// //8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
// var num1=Math.random();
// num1=(num1*10)
// var ran=Math.round(num1);
// var inp=+prompt("ENter a number between 1 and 10");
// if (inp==ran){
//     alert("Congtratulations!")
// }
// else{

//     alert("Try again");
// }

//          chp 31-34
// //1. Write a program that displays current date and time in your browser.
// var date=new Date();
// document.write(date);


// //2. Write a program that alerts the current month in words. 
// var date=new Date();
// var month=date.getMonth();
// var arr=["january","february","march","april","may","june","july","august","september","october","november","december"];
// document.write("Current month: "+arr[month]);


// //3. Write a program that alerts the first 3 letters of the current day.
// var date=new Date();
// var day=date.getDay();
// var arr=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// document.write("Current month: "+arr[day]);

// //4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
// var date=new Date();
// var day=date.getDay();
// var arr=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// if(arr[day]=="Sun"||arr[day]=="Sat"){
//     alert("It's Fun day");
// }

// //5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.
// var time=new Date();
// var date=time.getDate();
// if(date<=15){
//     alert("First fifteen days of the month");
// }
// else{
//     alert("Last days of the month");
// }

// //6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
// var date=new Date();
// var janDate=date.getTime();
// document.write("Current Date: "+date+"<br>");
// document.write("Elapsed milliseconds since january 1 , 1970: "+janDate+"<br>");
// document.write("Elapsed minutes since january 1 , 1970: "+(janDate/60000));

// //7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
// var date=new Date();
// var x=date.getHours();
// if(x>=0 && x<=11){
//     alert("It's AM");
// }
// else{
//     alert("It's PM");
// }

// //8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.
// var laterDate=new Date("december 31, 2020");
// document.write("Later Date: "+laterDate);

// //9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
// var ram=new Date("march 22, 2023");
// var lastRam=new Date("june 18, 2015");
// var days=ram-lastRam;
// document.write((days/ (1000 * 60 * 60 * 24))+" days have passed since 1st Ramadan, 2015");

// //10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
// var curr=new Date();
// var ref=new Date("january 1, 2015");
// var diff=curr-ref;
// document.write("On reference date "+curr+" "+(ref/1000)+"seconds had passed since start of 2015");

// //11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.
// var curr=new Date();
// var pastHour=new Date(curr);
// pastHour.setHours(curr.getHours()-1);
// document.write("current date: "+curr+"<br>1 hour ago, it was "+pastHour);

// //12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
// var curr=new Date();
// var hundredYearsBack=new Date(curr);
// hundredYearsBack.setFullYear(curr.getFullYear()-100);
// document.write("Current date: "+curr+"<br>100 years back, it was: "+hundredYearsBack);

// //13. Write a program to ask the user about his age. Calculate and show his birth year in your browser
// var age=+prompt("ENter your age");
// var curr=new Date();
// var currYears=curr.getFullYear();
// document.write("Your age is "+age+"<br>Your birth year is "+(currYears-age));

// //14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places.
// var name=prompt("Enter your Name");
// var month=["January","February","March","April","May","June","July","August","September","October","November","December"];
// var currMonth=new Date();
// var x=month[currMonth.getMonth()];
// var unit=16;
// var Totalunit=+prompt("Total Unit ");
// var nap=Totalunit*unit;
// var latesur=350;
// var gap=nap+latesur;

// document.write("K-ELECTRIC"+"<br>");
// document.write("Customer Name: "+name+"<br>");
// document.write("Month: "+x+"<br>");
// document.write("Number of Unit : " +Totalunit+"<br>");
// document.write("CHarges per Unit: "+unit+"<br>");
// document.write("Net Amount Payable: "+nap+"<br>");
// document.write("Late Surcharges : "+latesur+"<br>");
// document.write("Gross Amount PayAble : "+gap);
