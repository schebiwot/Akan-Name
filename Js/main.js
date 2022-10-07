var DaysOfTheWeek=["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];

function displayDay(){
    //read input
    var dd = parseInt(document.getElementById("date").value);
    var mm = parseInt(document.getElementById("month").value);
    var year = document.getElementById("year").value;
   
    var cc = parseInt(year.slice(0,2)); 
    var yy = parseInt(year.slice(2,4)); 

    if(dd <= 0 || dd > 31) alert("You have entered an invalid day");
    if(mm <= 0 || mm > 12) alert("You have entered an invalid month");

    var dayIndex = Math.floor(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);

    var bornDay=DaysOfTheWeek[dayIndex];

   

var name=null;
var gender = document.getElementById("gender").value;
if(gender=="female")
    {
    name=femaleNames[dayIndex]; 
    alert("Hello, your Akan Name is :" + name + " and you were born on a "+ bornDay)
    }
else
    {
        name=maleNames[dayIndex];
        alert("Hello, your Akan Name is :" + name + " and you were born on a "+ bornDay)
    }

}


