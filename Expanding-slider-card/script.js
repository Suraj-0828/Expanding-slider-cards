document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
  
    slides.forEach(slide => {
      slide.addEventListener("click", function() {
        // Remove active class from all slides
        slides.forEach(s => s.classList.remove("active"));
  
        // Add active class to the clicked slide
        this.classList.add("active");
      });
    });
  });