                              /* chapter 1 */
/* question 1 */
alert("welcome to my website");
/* question 2 */
alert("Error! Please enter a valid password");
/* question 3 */
alert("Welcom to JS Land\r\nHappy Coding");
/* question 4 */
alert("Welcom to JS Land");
alert("Happy Coding\r\n Prevent this page from creating additional dialogs.");
/* question 5 */
console.log("Hello... I can run JS throuh my web browser console");
/* question 6 */
//i used alert in my project
/* question 7 */
//i used script tag in head,body(before HTML),body(inside page HTML),
//body(after your page HTML)
                               /* chapter 2 */
 /* question 1 */
 var username = ""; 
 /* question 2 */   
 var myName = "Shanza Riaz";  
 /* question 3 */    
 var message = "Hello World";
alert(message); 
/* question 4 */
var name = "Jhone Doe";
var age ="15 years old";
var skill="certified mobile application development";
alert(name);
alert(age);
alert(skill);
/* question 5 */
var a ="PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(a);
/* question 6 */
var email="example@example.com";
alert("my email address is " + email);
/* question 7 */
var book="A smarter\n way to learn JavaScript";
alert("I am trying to lraen from the book "+ book);
/* question 8 */
document.getElementById("html");
/* question 9 */
var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(a);
                /* chapter 3 */
/* question 1 */
var age="I am 15 years old";
alert(age);
/* question 2 */
var a= 14 ;
alert("You have visited this site " + a + " times");
/* question 3 */
var birthYear ="1990"; 
document.write("My birth year is "+birthYear+"<br> Data type of my declared variable is number");
/* question 4 */
var visitorname ="Jhon Doe"
var producttitle="ordered";
var quantity="5 T-shirt(s)";
 
document.write(visitorname +" "+producttitle+" "+quantity +" on XYZ clothing store");
                     /* chapter 4 */
/* question 1 */
var a ="My";
var b ="name is";
var c ="shanza";
 
document.write(a +" "+b+" "+c );
/* question 2 */
//legal variables
var $a ="heloo";
var name ="shanza";
var MyName ="shanza riaz";
var shan1="legal";
var SHANZA="name";
//illegal variables
//var 1digit="1";
//var array ="";
//var myvar ="";
//var my name="";
//var ?a ="";

/* question 3 */
var heading="Rules for naming JS variables";
var rule1 ="variable names can only containes,numbers,$, and _.For example : $my_1stvariable";
var rule2 ="variable must begin with a letter, $ or_. For example : $name, _name or name";
var rule3="variable names are case sensitive";
var rule4="variable names should not be JS keyword";

document.write("<h1>"+heading+"</h1>"+"<br><br><br>"+rule1+"<br>"+rule2+"<br>"+rule3+"<br>"+rule4);
                          /* chapter 5 */

 /* question 1 */
 var a = 3;
 var b= 5;
 var c = a+b;
 document.write("Sum of 3 and 5 is "+c);
 /* question 2 */
 //subtraction
 var a = 3;
var b= 5;
var c = a-b;
document.write("Sum of 3 and 5 is "+c);
//multiplication
var a = 3;
var b= 5;
var c = a*b;
document.write("Sum of 3 and 5 is "+c);
//division
var a = 3;
var b= 5;
var c = a/b;
document.write("Sum of 3 and 5 is "+c);
//modulus
var a = 3;
var b= 5;
var c = a%b;
document.write("Sum of 3 and 5 is "+c);
/* question 3 */
// a part
var a ="??";
//b part
document.write("value after variable declaration is: "+a +"<br>");
//c part
var a = 5 ;
document.write("initial value is: "+a+ "<br>");
//d part
var b = ++a;
//f part
document.write("value after increment is: "+b+ "<br>");
//g part
var b = b+7;
//h part
document.write("value after addition is: "+b +"<br>");
//i part
var c= --b;
//j part
document.write("value after decrement is: "+c+ "<br>");
//k part
var d = 0/3;
//L part
document.write("The remainder is "+d);
/* question 4 */
var tickeprice= 600;
var more = 5 * tickeprice;
document.write("Total cost to buy 5 tickets is "+more +" PKR");
/* question 5 */
var a = 4;
var b = a*1;
var c = a*2;
var d = a*3;
var e = a*4;
var f = a*5;
var g = a*6;
var h = a*7;
var i = a*8;
var j = a*9;
var k = a*10;

document.write("Table of 4" + "<br>" +
 "4*1= "+b+ "<br>"+
"4*2= "+c+ "<br>"+
"4*3= "+d+ "<br>"+
"4*4= "+e+ "<br>"+
"4*5= "+f+ "<br>"+
"4*6= "+g+ "<br>"+
"4*7= "+h+ "<br>"+
"4*8= "+i+ "<br>"+
"4*9= "+j+ "<br>"+
"4*10= "+k+ "<br>");

/* question 6 */
var c = 25;
var convertf = (c*9/5)+32;
var f = 70;
var convertc = (f-32)*5/9;
document.write("25°C is "+convertf+"°F"+"<br>"+"70°F is "+convertc+"°c");
/* question 7 */
var item1= 650;
var quantity=item1*3;
var item2= 100;
var quantity2=item2*7;
var charges = 100;
var total= quantity+quantity2+charges;


document.write("<h1>"+"Shopping Cart"+"</h1>" +"<br><br>"+
"Price of item 1 is "+item1+ "<br>"+
"Quantity of item 1 is 3"+"<br>"+
"Price of item 2 is "+item2+ "<br>"+
"Quantity of item 2 is 7"+"<br>"+
"Shipping Charges "+charges+"<br><br>"+"Total charges "+total);
/* question 8 */
var totalmarks = 980;
var obtainmarks = 804;
var percentage = obtainmarks/totalmarks*100;

document.write("<h1>"+"Marks Sheet"+"</h1>"+"<br><br>"+"Total marks: "
+totalmarks+"<br>"+"Marks obtain: "+obtainmarks+"<br>"+"Percentage: "+percentage+"%");
/* question 9 */
var dolar = 10;
var ryal = 25;
var pkr = dolar*104.80 + ryal*28 ;
document.write("<h1>"+"Currency in PKR"+"</h1>"+"<br><br>"+"Total Currency in PKR: "+pkr);
/* question 10 */
var first = 5;
var add = first+5*10/2;
document.write(add);
/* question 11 */
var currentyear = 2016;
var birthyear = 1992;
var totalage = currentyear - birthyear;
document.write("<h1>"+"Age Calculator"+"</h1>"+"<br><br>"+"Current Year: "+currentyear+"<br>"
+"Birth Year: "+"<br>"+"Your Age is: "+totalage);
/* question 12 */
var radius = 20 ;
var pie = 3.142;
var cercum = 2 * pie * radius;
var area = pie * radius*radius;
document.write("<h1>"+"The Geometerizer"+"</h1>"+"<br><br>"+"Radius of a circle: "+radius+"<br>"
+"The cercumference is: "+cercum+"<br>"+"The area is: "+area);
/* question 13 */

var favrouit = "choclate chip";
var current = 15;
var estimate = 65;
var snacks = 3;
var totalsnacks = (estimate - current) * snacks;
document.write("<h1>"+"The Lifetime Supply Calculator"+"</h1>"+"<br><br>"+"Current age: "+current+"<br>"+
"Estimated maximum age: "+estimate+"<br>"+"Amount of snacke per day: "+snacks+"<br>"+"You will need "+totalsnacks+
 favrouit+" to last you until the ripe old age of 65");


                    /* chapter 6-9 */
/* question 1 */                    

var a = 10;
var a = ++a;
var a = a++;
var a = --a;
var a = a--;
document.write("Result:"+ "<br>" + "The value of a is: 10" + "<br>" + "......................................." + 
"<br>" + "The value of ++a is: 11" + "<br>" + "Now the value of a is: 11" + "<br><br><br>" + "The value of a++ is: 11" +
 "<br>" + "Now the value of a is: 12" + "<br><br><br>" + "The value of --a is: 11" +
 "<br>" + "Now the value of a is: 11" + "<br><br><br>" + "The value of a-- is: 11" +
 "<br>" + "Now the value of a is: 10" + "<br><br><br>" );

/* question 2 */ 
var a = 2;
var b = 1;
var r =  --a - --b + ++b + b-- ;
document.write("--a = 1" +"<br>"+ "--a - --b = 1" +"<br>"+ " --a - --b + ++b = 2" +"<br>"+ "--a - --b + ++b + b-- = 3"
+ "<br><br>" + "a is "+a + "<br>" + "b is "+b+ "<br>"+"result is "+r); 
/* question 3 */ 
var a = "hello";
var b = "Enter your name"
var c = prompt(a , b);
alert(c+" welcome to this website"); 
/* question 4 */  
/* question 5 */  
var a = +prompt("Enter your number");
if(a ==""){
    for (var i =1 ; i<=10; i++){
        document.write(5*i + "<br>");
}}
else{
for (var i =1 ; i<=10; i++){
    document.write(a*i + "<br>");
}
}
/* question 6 */
var sub1= prompt("Enter your first subject name","");
var sub2= prompt("Enter your second subject name","");
var sub3= prompt("Enter your third subject name","");
var entersub1 = sub1;
var entersub2 = sub2;
var entersub3 = sub3;
var totalmarks = 100;
var alltotalmarks = totalmarks*3;
var obtainmarks1 = +prompt("enter your first subject marks");
var obtainmarks2 = +prompt("enter your second subject marks");
var obtainmarks3 = +prompt("enter your third subject marks");
var eobtainmarks1 = obtainmarks1;
var eobtainmarks2 = obtainmarks2;
var eobtainmarks3 = obtainmarks3;
var totalobtain = obtainmarks1+obtainmarks1+obtainmarks1;
var percentage1 = (obtainmarks1/totalmarks)*100;
var percentage2 = (obtainmarks2/totalmarks)*100;
var percentage3 = (obtainmarks3/totalmarks)*100;
var totalpercentage =(totalobtain/alltotalmarks)*100;
document.write("Subject "+ "<br>" + sub1+"<br>"+sub2+"<br>"+sub3+"<br>");
document.write("Total Marks"+"<br>"+totalmarks+"<br>"+totalmarks+"<br>"+totalmarks+"<br>"+totalmarks+"<br>"+alltotalmarks+"<br>");
document.write("Obtain Marks"+"<br>"+eobtainmarks1+"<br>"+eobtainmarks2+"<br>"+eobtainmarks3+"<br>"+totalobtain+"<br>");
document.write("Percentage"+"<br>"+percentage1+"%"+"<br>"+percentage2+"%"+"<br>"+percentage3+"%"+"<br>"+totalpercentage+"%"+"<br>");

                            /* chapter 9-11 */

/* question 1 */
var city = prompt("Enter city name","");

if(city == "karachi"){
alert("Welcome to city of lights");

}
else{
    alert("welcome to another city");
}



/* question 2 */
var gender = prompt("Enter your gender","");

if(gender == "male"){
alert("Good Morning Sir");

}
else{
    alert("Good Morning mam");
}

/* question 3 */
var roadsignalinput1 = prompt("enter signal", "");
var roadsignalinput2 = prompt("enter signal", "");
var roadsignalinput3 = prompt("enter signal", "");
var roadsignal1 = roadsignalinput1;
var roadsignal2 = roadsignalinput2;
var roadsignal3 = roadsignalinput3;
if(roadsignal1 == "red" ){
    document.write("Must Stop");
}
if(roadsignal2 == "yellow"){
    document.write("Ready to move");
}
if(roadsignal3 == "green"){
    document.write("move now");
}

/* question 4 */
var fuel= +prompt("Enter your remaining fule","");
var remaining = fuel;
if(remaining<0.25){
    document.write("Please refill the fuel in your car")
}
else{
    document.write("your petrol is enough");
}
/* question 5 */
//all alerts are run in this code
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
 if("car" < "cat"){
    alert("car is smaller than cat");
    }
/* question 6 */
var submarks1 = +prompt("enter first subject marks","");
var submarks2 = +prompt("enter second subject marks","");
var submarks3 = +prompt("enter third subject marks","");
var totalmarks = +prompt("enter total marks ","");
var marksobt = submarks1+submarks2+submarks3;
var percent = (marksobt/totalmarks)*100;
document.write("<h1>"+"Marks sheet"+"</h1>");
if(percent <"60"){
 document.write("grade c "+ "sorry fail" );
}
else if(percent =="60"){
    document.write("grade B "+ "you need to improve" );
   }
else if(percent <"70"){
    document.write("grade A "+ "Good" );
   }
else if(percent <"80"){
    document.write("grade A-one "+ "Excellent" );
   }
   /* question 7 */
   var secret = 6;
var secretinput = +prompt("Enter number", "");
if (secretinput == secret ){
    document.write("Bingo! correct answer");
}
if (secretinput == "1" ){
    document.write("Close enough to the correct answer");
}
   /* question 8 */
   var num =+prompt("enter number","");

if (num % 3 == 0){
    document.write("number is divisible by 3");
}
else{
    document.write("number is not divisible by 3");
}
   /* question 9 */
   var num =+prompt("enter number","");

if (num % 2 == 0){
    document.write("number is even");
}
else{
    document.write("number is odd");
}
   /* question 10 */
   var temp = +prompt("enter temperature","");
   if(temp>40){
       document.write("It is too hot outside.");
   }
   else if(temp>30){
       document.write("The Weather today is Normal.");
   }
   else if(temp>20){
       document.write("Today’s Weather is cool.");
   }
   else if(temp>10){
       document.write("OMG! Today’s weather is so Cool.");
   }
   /* question 11 */
   var val1 = +prompt("enter first value", "");
var val2 = +prompt("enter second value", "");
var operator = prompt("enter sign", "");

if (operator == "+"){
    document.write(val1+val2);
}
else if (operator == "-"){
    document.write(val1-val2);
}
else if (operator == "*"){
    document.write(val1*val2);
}
else if (operator == "/"){
    document.write(val1/val2);
}
else if (operator == "%"){
    document.write(val1%val2);
}
                               /* chapter 12-13 */
/* question 1 */   
var ch= prompt("Enter any character","");
if (ch>=65 && ch<=90){
    document.write("Character is a capital letter");
}
else if (ch>=97 && ch<=122){
    document.write("Character is a small letter");
}
else if (ch>=48 && ch<=57){
    document.write("Character is a digit");
}
else if ((ch>0 && ch<=47)||(ch>=58 && ch<=64)||
       (ch>=91 && ch<=96)||(ch>=123 && ch<=127)){
        document.write("Character is a special symbol");
       }
/* question 2 */ 
var integer1 = +prompt("enter number","");
var integer2 = +prompt("enter number","");
if(integer1>integer2){
    document.write(integer1);
}
else if(integer2>integer1){
    document.write(integer2);
}
else if (integer1==integer2){
    document.write(integer2)
} 

/* question 3 */ 
var number = +prompt("enter number","");
if(number>0){
    document.write("number is positive");

}
else if(number<=0){
    document.write("number is negative");
}
/* question 4 */
var vowel = prompt("enter alphabet","");
if(vowel=="a"){
    document.write("true");
}
else if(vowel=="e"){
    document.write("true");
}
else if(vowel=="i"){
    document.write("true");
}
else if(vowel=="o"){
    document.write("true");
}
else if(vowel=="u"){
    document.write("true");
}

else{
    document.write("false");
}

/* question 5 */ 
var pass1 = prompt("enter password","");
var pass2 = prompt("confirm pass","");
if(pass1==pass2){
    document.write("Correct! The password you entered matches the original password");
}

else if (pass1 == ""){
    document.write(" Please enter your password");
}

else if(pass1!=pass2){
    document.write(pass2);
}

/* question 6 */ 
var hour = prompt("enter number","");

if (hour < 18) {
document.write("Good day");
}
else{
    document.write("Good evening");
}
/* question 7 */ 
var time = +prompt("enter time","");

if(time>=0000 && time<1200){
document.write("good morning!");
}
else if(time>=1200 && time<1700){
    document.write("good afternoon!");
    }
 else if(time>=1700 && time<2100){
        document.write("good evening!");
        }
  else if(time>=2100 && time<2359){
            document.write("good night!");
            }
                    /* chapter 14-16 */
/* question 1 */ 
var studentname = [];
/* question 2 */ 
var objectA = {}
var objectB = new Object()
/* question 3 */ 
var days_of_week = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
/* question 4 */ 
var intarray = ["1","2","3"];
/* question 5 */ 
var boolArray = [true,false];
/* question 6 */ 
var mixedArray = [1, "Bob", "Now is", true];

/* question 7 */ 
var qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.phil","phD"];

document.write("<h1>"+"Qualification:"+"<br><br>"+"1)"+qualification[0]+
"<br>"+"2)"+qualification[1]+"<br>"+"3)"+qualification[2]+"<br>"+
"4)"+qualification[3]+"<br>"+"5)"+qualification[4]+"<br>"+"6)"
+qualification[5]+"<br>"+"7)"+qualification[6]+"<br>"+"8)"+qualification[7]
+"<h1>"
);                    
/* question 8 */
var student = ["Michael","Jhon","Tony"];
var marks = ["320","230","480"];
var percentage1 = (marks[0]/500)*100;
var percentage2 = (marks[1]/500)*100;
var percentage3 = (marks[2]/500)*100;
document.write("Score of "+ student[0]+ " is "+marks[0]+".Percentage:"+percentage1
+"%"+"<br>"+"Score of "+ student[1]+ " is "+marks[1]+".Percentage:"+percentage2
+"%"+"<br>"+"Score of "+ student[2]+ " is "+marks[2]+".Percentage:"+percentage3
+"%"); 
/* question 9 */ 
//a part
var color = ["red","green","yellow","white","grey"];
document.write(color+"<br>");
//b part
var add_start = prompt("enter color","");
color.unshift(add_start);
document.write(color+"<br>");
//c part
color.push(add_start);
document.write(color+"<br>");
//d part
var add1 = prompt("enterfirst color","");
var add2 = prompt("enterfirst color","");
color.unshift(add1,add2);
document.write(color+"<br>")
color.shift()
// e part
document.write(color+"<br>")
color.pop()
document.write(color+"<br>")
//f part
var any = prompt("enterfirst color ","");
color.splice(2,1,any)
//g part
var any = prompt("enterfirst color ","");
color.slice(2,1,any)

/* question 10 */ 
var score = ["320","230","480","120"];

document.write("Scores of Students : "+ score[0]+","+ score[1]+","+
 score[2]+","+ score[3]+","+"<br>");
 score.sort();
 document.write("Order Score of Students : "+score);
/* question 11 */ 
var cities_list = ["Karachi","Lahore","Islamabad","Quetta","Pashawar"];
document.write("Cities list:"+"<br>"+cities_list+"<br>");
var selected_cities = cities_list;
selected_cities.shift()
selected_cities.shift()
selected_cities.pop()
document.write("Selected Cities list:"+"<br>"+selected_cities);
/* question 12 */
var array = ["This","is","my","cat"];

document.write("Array:"+"<br>"+array+"<br><br>");
document.write("String:"+"<br>"+array.join(' '));
/* question 13 */
var devices = ["Keyboard","mouse","printer","monitor"];
document.write("Devices:"+"<br>"+devices+"<br><br>"+"Out"+"<br>");
devices.shift()
document.write(devices+"<br>")
devices.shift()
document.write(devices+"<br>")
devices.shift()
document.write(devices+"<br>")
devices.shift()
document.write(devices+"<br>")
devices.shift()
document.write(devices+"<br>")
/* question 14 */ 
var devices = ["Keyboard","mouse","printer","monitor"];
document.write("Devices:"+"<br>"+devices+"<br><br>"+"Out"+"<br>");
devices.pop()
document.write(devices+"<br>");
devices.pop()
document.write(devices+"<br>");
devices.pop()
document.write(devices+"<br>");
devices.pop()
document.write(devices+"<br>");
/* question 15 */  
var phone = ["apple","samsung","motorola","nokia","sony&haier"];
document.write("<select>"+"<option>"+phone[0]+"</option>"+
"<option>"+phone[1]+"</option>"+
"<option>"+phone[2]+"</option>"+
"<option>"+phone[3]+"</option>"+
"<option>"+phone[4]+"</option>"+
"<option>"+phone[5]+"</option>"+"</select>");
            

                                   /* chapter 17-20 */
/* question 1 */ 
var twoD = [[], []];
/* question 2 */
var multidimension_array = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];
document.write(multidimension_array[0]+"<br>");
document.write(multidimension_array[1]+"<br>");
document.write(multidimension_array[2]+"<br>"); 
/* question 3 */
for (i=1; i<=10; i++){
    document.write(i+"<br>")
} 
/* question 4 */ 
var num = +prompt("Enter the number to show its multiplication table","");
var length = +prompt("Enter lenght multiplication table","");
for(i=1; i<=length; i++){
    document.write(num+"*"+i+"="+num*i+"<br>");
} 
/* question 5 */ 
var fruit = ["apple","banana","mango","orange","stawberry"];
for (i=0; i<= fruit.length; i++){
    document.write("<br>"+"Element at index"+ i+fruit[i]);
}
/* question 6 */ 
document.write("Counting:"+"<br><br>")
for(i=1; i<=15; i++){
   
    document.write(i+",")
}
document.write("<br><br>"+"Reverse counting:"+"<br><br>")
for(i=10; i>=1; i--){
    document.write(i+",")
}
document.write("<br><br>"+"Even:"+"<br><br>");
for(i=0; i<=20; i++){
    if(i%2 ==0){
        document.write(i+",");
    }
   
}
document.write("<br><br>"+"Odd:"+"<br><br>");
for(i=0; i<=20; i++){
    if(i%2 !==0){
        document.write(i+",");
    }
   
}
document.write("<br><br>"+"Series:"+"<br><br>");
for(i=2; i<=20; i++){
    if(i%2 ==0){
        document.write(i+"K,");
    }
   
}
/* question 7 */ 
var items = ["cake","apple pie","cookie","chips","patties"];
var search = prompt("Welcom to ABC bakery.What do you want to order sir/ma'am"
,"");
 if (items.indexOf(search) !==-1){
     alert(search+" is available  in our bakery");
 }
else{
    alert("we are sorry. "+search+" is not available in our bakery");
}
/* question 8 */ 
var array = [24,53,78,91,12];
var largest= 0;

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}
document.write("Array items: "+array)
document.write("<br>"+"The largest number is "+largest);
/* question 9 */ 
const arr = [24,52,78,91,12];
let min = Number.POSITIVE_INFINITY
for (const value of arr) {
  min = Math.min(min, value)
}
document.write("Array items: "+arr)
document.write("<br>"+"The smallest number is "+min);
/* question 10 */ 
var num = 5;
for(i=1; i<=20; i++){
    document.write(num*i+",");
} 