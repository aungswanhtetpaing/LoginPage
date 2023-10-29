function scanQRCode() {
  Quagga.init({
    inputStream: {
      name: "Live",
      type: "LiveStream",
      target: document.querySelector('#scanButton'), // Specify the element to attach the camera stream
    },
    decoder: {
      readers: ["ean_reader"], // Use the appropriate reader for your QR codes
    },
  }, function(err) {
    if (err) {
      console.error(err);
      alert("Error initializing camera for QR code scanning");
      return;
    }
    
    Quagga.start();
  });

  Quagga.onDetected(function(result) {
    var code = result.codeResult.code;
    alert('QR Code scanned: ' + code);

    // Do something with the scanned QR code, e.g., fill a form field
    document.getElementById('username').value = code;
    
    // Stop the camera stream
    Quagga.stop();
  });
}
