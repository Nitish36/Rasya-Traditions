// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// FAQ Accordion Logic
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    // Check if the clicked item is already active
    const isActive = item.classList.contains('active');
    
    // Close all other FAQ items (Optional - remove this part if you want multiple open at once)
    faqItems.forEach(otherItem => {
      otherItem.classList.remove('active');
    });

    // If it wasn't active, open it
    if (!isActive) {
      item.classList.add('active');
    }
  });
});


// Video hover play logic
const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(card => {
  const video = card.querySelector('video');

  card.addEventListener('mouseenter', () => {
    video.play();
  });

  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; // Reset video to start
  });
});

// Update Ticket Display when Date is selected
// Force the date picker to open when clicking the ticket area
const dateContainer = document.querySelector('.ticket-date');
const actualInput = document.getElementById('appointment-date');

dateContainer.addEventListener('click', () => {
  try {
    // showPicker() is the modern way to trigger the calendar
    actualInput.showPicker();
  } catch (error) {
    // Fallback for older browsers
    actualInput.focus();
    actualInput.click();
  }
});

// Update Ticket Display when Date is selected (Keep your existing code below this)
actualInput.addEventListener('change', function() {
  if (this.value) {
    const date = new Date(this.value);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
    const year = date.getFullYear();

    document.getElementById('display-day').innerText = day < 10 ? '0' + day : day;
    document.getElementById('display-month').innerText = month;
    document.getElementById('display-year').innerText = year;
  }
});

// Add to Calendar Logic
// Add to Calendar Logic with Auto-Guest
const addCalBtn = document.querySelector('.add-cal-btn');

addCalBtn.addEventListener('click', () => {
  const selectedDate = document.getElementById('appointment-date').value;
  
  if (!selectedDate) {
    alert("Please select a date on the ticket first!");
    return;
  }

  // 1. Format the date for Google (YYYYMMDD)
  const dateObj = new Date(selectedDate);
  const formattedDate = selectedDate.replace(/-/g, '');
  
  // 2. Set the end date (Google needs an end date, usually +1 day for all-day events)
  const tomorrow = new Date(dateObj);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const formattedEndDate = tomorrow.toISOString().split('T')[0].replace(/-/g, '');

  // 3. Define the Details
  const title = encodeURIComponent("Saree Service Appointment - Rasya Traditions");
  const details = encodeURIComponent("Thank you for booking with Rasya Traditions! This is a reminder for your saree service appointment.");
  const location = encodeURIComponent("Rasya Traditions Studio");
  
  // 4. ADD YOUR FRIEND'S EMAIL HERE
  const guestEmail = "thanujakedila@gmail.com"; // <-- CHANGE THIS TO HER EMAIL

  // 5. Create the Google Calendar Link with 'add' parameter
  const gCalUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${formattedDate}/${formattedEndDate}&details=${details}&location=${location}&add=${guestEmail}&sf=true&output=xml`;
  
  window.open(gCalUrl, '_blank');
});

// WhatsApp Booking Function
function bookAppointment() {
  const dateValue = document.getElementById('appointment-date').value;
  if(!dateValue) {
    alert("Please select a date on the ticket first!");
    return;
  }
  
  const message = `Hi Rasya Traditions! I would like to book a Saree Service appointment for ${dateValue}. Please confirm my slot.`;
  const whatsappUrl = `https://wa.me/917975722193?text=${encodeURIComponent(message)}`;
  
  window.open(whatsappUrl, '_blank');
}



// Preloader Logic
window.addEventListener('load', () => {
  const loader = document.getElementById('preloader');
  
  // Add a slight delay for a smoother feel
  setTimeout(() => {
    loader.classList.add('fade-out');
  }, 1000); 
});

