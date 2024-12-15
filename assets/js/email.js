function sendMail() {
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        message: document.getElementById("message").value ,
    }

    event.preventDefault();

    const serviceID = "service_ntxvl2v";
    const templateID = "template_s5dpc7p";

    email.js.send(serviceID,templateID,params)
    .then(
        res =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully");
        })
    .catch(err=>console.log(err));
}
