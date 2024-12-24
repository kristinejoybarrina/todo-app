document.addEventListener('DOMContentLoaded', (event) => {
    const box = document.getElementById('box1');
  
    box.addEventListener('mouseover', () => {
      box.style.border = '1px solid #106CBD'; // Add border on hover
    });
  
    box.addEventListener('mouseout', () => {
      box.style.border = 'none'; // Remove border when not hovering
    });
  });

document.addEventListener('DOMContentLoaded', (event) => {
    const box = document.getElementById('box2');
  
    box.addEventListener('mouseover', () => {
      box.style.border = '1px solid #106CBD'; // Add border on hover
    });
  
    box.addEventListener('mouseout', () => {
      box.style.border = 'none'; // Remove border when not hovering
    });
  });

document.addEventListener('DOMContentLoaded', (event) => {
    const box = document.getElementById('box3');
  
    box.addEventListener('mouseover', () => {
      box.style.border = '1px solid #106CBD'; // Add border on hover
    });
  
    box.addEventListener('mouseout', () => {
      box.style.border = 'none'; // Remove border when not hovering
    });
  });

  document.addEventListener('DOMContentLoaded', (event) => {
    const box = document.getElementById('acc-logo');

    box.addEventListener('click', () => {
      window.location.href = 'login.html'; // Redirect to login.html on click
    });

    box.addEventListener('mouseover', () => {
      box.style.color = '#0E487C'; // Change color on hover
      border.style.border = '1px solid #000000';
    });

    box.addEventListener('mouseout', () => {
      box.style.color = ''; // Reset color when not hovering
    });
  });
