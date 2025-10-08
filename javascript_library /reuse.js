function onMagic(){
    //step 1: get all the elements with class name box-title ---> array 
    var aBoxTitle = document.getElementsByClassName("box-title");

    //step 2: loop over the array elements (ui) --> inside each loop pass, we will process
	// first i value 0 because it an Array
	// i < aBoxTitle.length i=++ means example we have 3 records the loop will continue until
	// i value less than aBoxTitle 
	// example = i = 0, i = 1 and i = 2 every time + 1 adding
	// then i = 3 and aBoxTitle also three records condition fail and loop end

    for(var i=0; i<aBoxTitle.length; i++){
        //Step 3: each loop pass, we get access to individual elements one by one
        var oTitleElement = aBoxTitle[i];

        // Step 4: Change the background color and text color of each element
        oTitleElement.style.backgroundColor = "black";
        oTitleElement.style.color = "white";
    }
}