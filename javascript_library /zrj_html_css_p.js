function submitEvent(event){
   event.preventDefault();  // Prevents the form from submitting and refreshing the page

   const username = document.getElementById("usr").value;
   const passw = document.getElementById("pass").value;

   const user = 'Ramesh';
   const password = "Jigini";

   if(usename === user && passw === password){

    document.querySelector('.mainDiv').style.display = 'none';
     // Show the personal information container
        document.getElementById('personalInfoContainer').classList.remove('tmaindiv');
    // Fill in the personal information dynamically
        document.getElementById('fullName').textContent = 'Ramesh';
        document.getElementById('email').textContent = 'rameshreddk206@gmail.com';
        document.getElementById('Phone').textContent = '9676567412';
    } else {
        // If login fails, show an error message
        alert('Invalid username or password!');
   }
}