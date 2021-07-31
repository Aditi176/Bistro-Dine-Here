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
    Email = document.getElementById("Email_subscribe").value;
    if (Email) {
        alert("Subscribed !");
    }
    else{
        alert("Enter an Email ID to subscribe !")
    }
    
}