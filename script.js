// Modal element ko select karna
const modal = document.getElementById("bookingModal");

// Modal open karne ka function
function openBookingForm() {
    modal.style.display = "block";
}

// Modal close karne ka function
function closeBookingForm() {
    modal.style.display = "none";
}

// Background par click hone se bhi modal close ho jaye
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function sendToWhatsApp(event) {
    event.preventDefault(); // Page refresh rokne ke liye

    try {
        // 1. User input values lena aur extra spaces hatana (trim)
        const name = document.getElementById("name").value.trim();
        const userPhone = document.getElementById("userPhone").value.trim();
        const date = document.getElementById("bookingDate").value;
        const service = document.getElementById("service").value;
        const address = document.getElementById("address").value.trim();

        // 2. Custom Validation
        if (!name || !userPhone || !address || !date) {
            alert("Kripaya sabhi zaroori jankari bharein!");
            return; // Agar form poora nahi hai, toh aage mat badho
        }

        // Aapka Business number
        const phoneNumber = "919507914397";

        // 3. Message format update kiya gaya
        const message = `Hello CleanHome Services,\n\nI want to book a service.\n\n*Name:* ${name}\n*Contact No:* ${userPhone}\n*Service:* ${service}\n*Address:* ${address}\n*Preferred Date:* ${date}\n\nPlease confirm my booking.`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // 4. Redirect hone se pehle chhota alert
        alert("Thank you! Aapko WhatsApp par redirect kiya jaa raha hai...");

        window.open(whatsappURL, "_blank");

        // Form reset aur close karein
        document.getElementById("bookingForm").reset();
        closeBookingForm();

    } catch (error) {
        console.error("WhatsApp error:", error);
        alert("Kuch galat ho gaya, kripaya thodi der baad try karein.");
    }
}