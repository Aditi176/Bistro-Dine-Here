function book() {
    Name = document.getElementById("Full_Name").value;
    Email = document.getElementById("Email_ID").value;
    Mobile = document.getElementById("Mobile_Number").value;
    People = document.getElementById("people").value;
    Date1 = document.getElementById("date").value;
    Time = document.getElementById("Time_slot").value;
    
    alert("Hello " + Name + ". Table booked successfully at  BISTRO!  " + "\n\nBooking details: \nName: " + Name + "\nEmail: " + Email + "\nMobile: " + Mobile + "\nNumber of people: " + People + "\nDate: " + Date1+ "\nTime: " + Time)
}


function subscribe() {
    Email1 = document.getElementById("Email_subscribe").value;
    if (Email1) 
    {
        alert("Subscribed !");
        // Email.send({
        //   Host: "alt2.gmail-smtp-in.l.google.com",
        //   Username: "techadiyt@gmail.com",
        //   Password: "tech987#",
        //   To: "Email1",
        //   From: "techadiyt@gmail.com",
        //   Subject: "Subscribed to BISTRO",
        //   Body: "Thankyou for subscribing in BISTRO !",
        // }).then((message) => alert("mail sent successfully"));
    }
    else{
        alert("Enter an Email ID to subscribe !")
    }
    
}