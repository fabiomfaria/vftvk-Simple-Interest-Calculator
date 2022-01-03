var principal = document.getElementById("principal").value;
var rateval   = document.getElementById("rate").value;


// interest rate update 
function updateRate() 
{
    rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}

// setfocus e clean
function cleanAndPosition()
{
    document.getElementById("principal").focus();
    document.getElementById("principal").value="";
    document.getElementById("rate").value = 10.25;
    document.getElementById("rate_val").innerText = "10.25%";
    document.getElementById("years").value = 1;
}

// investment calculation 
function compute()
{
     // valid principal value entry 
    if(document.getElementById("principal").value <= 0){
        alert("Enter a positive number");
        cleanAndPosition(); //setfocus e clean
    } else{
    principal      = document.getElementById("principal").value;
    var years      = parseInt(document.getElementById("years").value);
    // Calculating interest for the period 
    var interest   = principal * years * rateval/100;
    // finding the final year of the investment, converting string to integer 
       //getting the full current year
        // Getting the current date 
    var dateNow = new Date();
    var year       = years + parseInt(dateNow.getFullYear());
    // Calculating the accumulated profit 
    // setting at two tenths 
    var amount     = interest.toFixed(2);
    // <mark> text highlighting 
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,<br>at an interest rate of <mark>"+rateval+"%</mark>\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";
    }
}
    
