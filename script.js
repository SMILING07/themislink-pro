document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('trial-form');
    const message = document.getElementById('form-message');
    
    // ------------------------------------------------------------------
    // NEW ADDITION: Smooth Scrolling Logic
    // ------------------------------------------------------------------

    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default jump behavior
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Scroll to the top of the element
                });
            }
        });
    });


    // ------------------------------------------------------------------
    // EXISTING LOGIC: Form Submission
    // ------------------------------------------------------------------
    
    // Simple form submission handler (simulates sending data)
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop the default form submission

        // Get user inputs
        const fullName = form.querySelector('input[placeholder="Full Name"]').value;
        const email = form.querySelector('input[placeholder="Email Address"]').value;
        const firmName = form.querySelector('input[placeholder="Firm/Institution Name"]').value;

        // Simulate successful submission logic
        message.textContent = `Thank you, ${fullName}! Your 7-Day Trial and Demo request has been received. Check your inbox (${email}) for next steps.`;
        
        // Clear the form fields
        form.reset();

        console.log("Demo Request Submitted:", { fullName, email, firmName });
    });
});