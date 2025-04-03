document.addEventListener('DOMContentLoaded', function () {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // Function to update the count
  function updateCount() {
    let count = parseInt(getCookie('count')) || 0; // Get existing count or default to 0
    count++; // Increment count
    setCookie('count', count, 7); // Update cookie (expires in 7 days)
    document.getElementById('count').textContent = count; // Display the updated count
  }

  // Run the function to update and display the count
  updateCount();
});
