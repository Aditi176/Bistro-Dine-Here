function book() {
    Name = document.getElementById("Full_Name").value;
    Email = document.getElementById("Email_ID").value;
    Mobile = document.getElementById("Mobile_Number").value;
    People = document.getElementById("people").value;
    Date1 = document.getElementById("date").value;
    Time = document.getElementById("Time_slot").value;
    
    if (Name == false || Email == false || Mobile == false || People == false || Date1 == false || Time == "Time Slot") {
        alert("Please fill all the fields!")
    }
    else{
        alert("Hello " + Name + ". Table booked successfully at  BISTRO!  " + "\n\nBooking details: \nName: " + Name + "\nEmail: " + Email + "\nMobile: " + Mobile + "\nNumber of people: " + People + "\nDate: " + Date1+ "\nTime: " + Time)
    }
    
}


document.getElementById("form_subscribe").onsubmit = 
function subscribe() {
    const Email1 = document.getElementById("Email_subscribe").value;
    if (Email1) 
    {
        Email.send({
          Host: "smtp.gmail.com",
          Username: "bistrodinehere@gmail.com",
          Password: "bistro#987",
          To: Email1,
          From: "bistrodinehere@gmail.com",
          Subject: "Subscribed to BISTRO",
          Body: "Thankyou for subscribing in BISTRO !",
        }).then((message) => {
          if (message == "OK") {
            alert("Subscribed successfully !");
          } 
          else {
            alert("Aww Snap! Error occurred while subscribing !");
          }
        });
    }
    else{
        alert("Enter an Email ID to subscribe !")
    }
    document.getElementById("Email_subscribe").value = "";
    
}