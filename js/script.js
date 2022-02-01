function calculateBMI(){

    var weight=parseFloat(document.getElementById("txt-weight").value);
    var heightcm=parseFloat(document.getElementById("txt-height").value);
    var heightm=heightcm/100;

    var bmi=(weight/(heightm*heightm)).toFixed(2);

    document.getElementById("txt-bmi").innerHTML="BMI: "+bmi;

    if(bmi<18.5){
        document.getElementById("txt-remark").innerHTML="Underweight";
    }
    else if(bmi>=18.5 && bmi<=24.9){
        document.getElementById("txt-remark").innerHTML="Normal";
    }
    else if(bmi>=25 && bmi<=29.9){
        document.getElementById("txt-remark").innerHTML="overweight";
    }
    else if(bmi>=30){
        document.getElementById("txt-remark").innerHTML="Obese";
    }
}