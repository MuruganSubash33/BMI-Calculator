
function bmi()
{
    var w=parseInt(prompt("Enter your Weight:  ↓"))
    var h=parseInt(prompt("Enter your Height:  ↓"))
    var bmi=(w/((h/100) **2))
    document.write("your BMI is:"+bmi)


if(bmi<18.5)
{
    alert("low weight")
}
else if((bmi>18.5)&&(bmi<=20))
{
    alert("normal")
}
else if((bmi>20)&&(bmi<=24))
    {
        alert("weight")
    }
    else if((bmi>24) && (bmi<=28))
    {
        alert("obsiety")
    }
    else if((bmi>28) && (bmi<=32))
            {
                alert("severe obsiety")
            }
}
bmi();
