// // Get the image element
// const image = document.querySelector('.image');

// // Add an event listener for the scroll event
// window.addEventListener('scroll', () => {
//   // Get the current scroll position
//   const scrollPosition = window.pageYOffset;

//   // Calculate the new position of the image based on the scroll position
//   const newPosition = scrollPosition * 0.5; // Adjust the speed of the effect

//   // Update the transform property of the image
//   image.style.transform = `translateY(${newPosition}px)`;
// });
const imageContainer = document.querySelector('.image-container');
const videoOverlay = document.querySelector('.video-overlay');

imageContainer.addEventListener('scroll', () => {
  const scrollTop = imageContainer.scrollTop;
  const scrollHeight = imageContainer.scrollHeight - imageContainer.clientHeight;

  if (scrollTop >= scrollHeight) {
    videoOverlay.style.display = 'block';
  } else {
    videoOverlay.style.display = 'none';
  }
});