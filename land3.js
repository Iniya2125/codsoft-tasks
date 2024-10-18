// Open and close modal for booking
const modal = document.getElementById("bookingModal");
const bookButtons = document.querySelectorAll(".book-package");
const closeModal = document.querySelector(".close");

bookButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        modal.style.display = "block";
    });
});

closeModal.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle booking form submission
const bookingForm = document.getElementById("bookingForm");
bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for booking with Happy Days Agency! We will contact you soon.");
    modal.style.display = "none";
});
