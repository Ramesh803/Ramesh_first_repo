// function oneventclick() {
//     var value = document.getElementById("id1");
//     value.innerText = "This is java script function";
// }


// function mySecondFunction(){
//     var eventvalue = document.getElementById("id1");
//     window.alert(eventvalue.value);
// }

// function onPress(){
//     var value = document.getElementById("id1");
//     document.write("My name is " + value.value);
// }


// function myFirstDemoFunction() {
//     var oInp = document.getElementById("num");
//     var oInp1 = document.getElementById("num1");
//     var input1 = parseInt(oInp.value);
//     var input2 = parseInt(oInp1.value);
//     alert(square(input1, input2));
// }

// const square = function(number1, number2) {
//     return number1 * number2;
// }
// ==============================
// function onPress(){
// 	var oInpUsr = document.getElementById("usr").value;
// 	var oPass = document.getElementById("password").value;
// 	if(oInpUsr === oPass){
// 		document.write("<h1>Your Name is: </h1>" + oInpUsr + "<h1>Your Password is: </h1>" + oPass);
// 	}

// 	else {
// 		alert("Your Name and Password are not same")
// 	  }
    

// }


function jsBlockingIO() {

    window.alert("Wife wants to go to office");
    //TImer in JS
    //code will execute async
    setTimeout(function(){
        window.alert("Husband back from office");
    },10000);
    
    window.alert("She left for office");

}

function jsNonBlockingIO() {

    window.alert("Wife wants to go to office");
    //TImer in JS
    //code will execute async
    setTimeout(10000);
    window.alert("Husband back from office");
    window.alert("She left for office");


}