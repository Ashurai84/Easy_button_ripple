// const btn = document.querySelector(".btn");

// btn.addEventListener("mouseover", (event) => {
//     const x = event.pageX - btn.offsetLeft;
//     const y = event.pageY - btn.offsetTop;

//     btn.style.setProperty("--xpos", x + "px");
//     btn.style.setProperty("--ypos", y + "px");
// });


// Function to create ripple effect on an element
function createRipple(event) {
  const button = event.currentTarget;

  // Create span element for ripple
  const ripple = document.createElement('span');
  ripple.classList.add('ripple-effect');

  // Calculate size & position
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = size + 'px';

  // Calculate position of ripple origin relative to button
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';

  // Append ripple to button/card
  button.appendChild(ripple);

  // Remove ripple after animation completes
  ripple.addEventListener('animationend', () => {
    ripple.remove();
  });
}

// Attach ripple effect to all elements with 'ripple-btn' and 'card' classes
document.querySelectorAll('.ripple-btn, .card').forEach(el => {
  el.addEventListener('click', createRipple);
});
