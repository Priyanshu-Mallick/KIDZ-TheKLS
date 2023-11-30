// Wait for the page to load
window.addEventListener('load', function () {
    // Select the preloader and content
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.content');

    // Hide the preloader and display the content after a delay (3 seconds in this case)
    setTimeout(function () {
        preloader.style.display = 'none';
        content.style.display = 'block';
    }, 3000); // Adjust the delay as needed
});
