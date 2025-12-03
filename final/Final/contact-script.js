// contact-script.js
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('manaoForm');
  const successMessage = document.getElementById('successMessage');
  const resetBtn = document.getElementById('resetBtn');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission/download
    
    // Hide form, show success
    form.style.display = 'none';
    successMessage.style.display = 'block';
    
    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth' });
  });
  
  // Reset form when "Submit Another" clicked
  resetBtn.addEventListener('click', function() {
    form.style.display = 'block';
    successMessage.style.display = 'none';
    form.reset();
    form.scrollIntoView({ behavior: 'smooth' });
  });
});