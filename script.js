document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    var dummyUsername = "user";
    var dummyPassword = "password";
  
    if (username === dummyUsername && password === dummyPassword) {
      alert("Login successful!");
      window.location.href = "cv.html";
    } else {
      document.getElementById("error-message").innerText = "Invalid username or password";
    }
  });
  