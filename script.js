let slideIndex = 0;
const sliderImages = document.getElementsByClassName('slider-image');

function slideImages() {
  // Hide all images
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }

  // Increment slide index
  slideIndex++;

  // Reset slide index if it exceeds the number of images
  if (slideIndex > sliderImages.length) {
    slideIndex = 1;
  }

  // Display the current image
  sliderImages[slideIndex - 1].style.display = 'block';
}

// Call the slideImages function every 3 seconds (adjust the timing as needed)
setInterval(slideImages, 3000);