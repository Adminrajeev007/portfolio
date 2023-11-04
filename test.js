const imageContainer = document.querySelector('.image-container');
const overlay = document.querySelector('.overlay');

imageContainer.addEventListener('mousemove', function(e) {
    const xPos = e.offsetX;
    overlay.style.width = xPos + 'px';
});

imageContainer.addEventListener('mouseleave', function() {
    overlay.style.width = '50%';
});
