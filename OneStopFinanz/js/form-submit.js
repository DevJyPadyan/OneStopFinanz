function sendMail(subject, message_body){
    var link = "mailto:padhunarayanan97@gmail.com"
         + "?cc=padmavathynarayananofzl@gmail.com"
         + "&subject=" + escape(subject)
         + "&body=" + escape(message_body);
    window.location.href = link;
};

function submitForm(event){
    event.preventDefault();
    var nameValue = document.getElementById("name").value;
    var emailValue = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phone").value;
    var appointmentDateTime = document.getElementById("appointment").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var message_body = "Name :" + nameValue + "\n" +
                        "Email :" + emailValue + "\n" +
                        "Phone No. :" + phoneNumber+ "\n" +
                        "Appointment Date&Time:" + appointmentDateTime + "\n" +
                        "Message:" +message+ "\n";
    document.getElementById("form-submit").reset();
    sendMail(subject, message_body);
    
}