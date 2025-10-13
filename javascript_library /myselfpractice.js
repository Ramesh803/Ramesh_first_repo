function firstf(){
    console.log("First function event")
}

function greet(name){
    console.log("Hello" + name)

    greet = ("Ramesh");
    console.log(greet);
}

 function myFunction() {
                alert('Hey Jigini I love you');
            }


function mySecondFunction(){
	//Obtaining the object of our input field from DOM
	var oInp = document.getElementById("num");
	var emp = {"empid":100};
	emp.salary = 9000;
	console.log(emp);
	var empStr = JSON.stringify(emp);
	console.log(empStr);
	empStr = '{"x":10, "y":"abc"}';
	emp = JSON.parse(empStr);
	console.log(emp);

	alert(oInp.value);
}