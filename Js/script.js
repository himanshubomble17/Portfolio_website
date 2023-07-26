function sendemail() {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "username",
      Password: "password",
      To: 'receiver@gmail.com',
      From: document.getElementById("email").value,
      Subject: "Contact Enquiry",
      Body: "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone no: " + document.getElementById("phone").value
        + "<br> Mesage: " + document.getElementById("message").value


    }).then(
      message => alert("Succesfully Sent")
    );
  }
  




  
  
