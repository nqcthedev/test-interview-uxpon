// Import the Intersection Observer polyfill
import 'intersection-observer';

// Select all <img> elements on the page
const images = document.querySelectorAll('img');

// Configuration options for Intersection Observer
const options = {
  threshold: 0.5, // Trigger when 50% of the element is visible
};

// Create an Intersection Observer instance
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // Check if the observed element is intersecting the viewport
    if (entry.isIntersecting) {
      const image = entry.target; // Get the observed image element
      image.src = image.dataset.src; // Load the image by setting its 'src' attribute
      image.onload = () => {
        image.style.opacity = 1; // Apply a fade-in effect when the image is loaded
      };
      observer.unobserve(image); // Stop observing the image after it's loaded
    }
  });
}, options);

// Start observing each image element
images.forEach((image) => {
  imageObserver.observe(image);
});

