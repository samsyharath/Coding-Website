function validateForm() {
    let x = document.forms["myForm"]["phonenumber"].value;
    if (x == "") {
        alert("Please provide a phone number.");
        return false;
    }
}

function openForm() {
    document.getElementById("news-Form").style.display = "block";
}
  
function closeForm() {
    document.getElementById("news-Form").style.display = "none";
}
