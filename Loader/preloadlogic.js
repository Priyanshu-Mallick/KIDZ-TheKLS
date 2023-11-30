// Wait for the page to load
window.addEventListener('load', function () {
    // Select the preloader element
    const preloader = document.querySelector('.preloader');

    // Hide the preloader after a delay (3 seconds in this case)
    setTimeout(function () {
        preloader.style.display = 'none';

        // Redirect to the home page
        window.location.href = '../HomePage/home.html'; // Replace 'your_home_page_url_here' with your actual home page URL
    }, 3000); // Adjust the delay as needed
});
