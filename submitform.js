function submitForm() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Check if either username or password is empty
  if (!username || !password) {
    alert('Please enter both username and password');
    return;
  }

  // Make an API request to your backend for authentication
  fetch('http://your-backend-server/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
      // You can include the scanned QR code here if needed
      // qrCode: scannedQRCode,
    }),
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the backend
    alert(data.message); // This is just for demonstration; handle the response according to your application logic
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle errors
  });
}
