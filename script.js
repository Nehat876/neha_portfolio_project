function submitForm() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let feedback = document.getElementById("feedback").value;

    if (name && phone && email && feedback) {
        document.getElementById("message").innerHTML =
            "Thank you for your feedback, " + name + "!";
    } else {
        document.getElementById("message").innerHTML =
            "Please fill all fields!";
    }
}
fetch("https://my-portfolio-backend-qs2n.onrender.com", {
  method: "GET"
})
.then(res => res.text())
.then(data => console.log(data)); 