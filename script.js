
window.onload = function () {
  document.getElementById('background-music').play();
  
  const messages = [
    "Tunggu sebentar...",
    "Malam ini tidak biasa...",
    "Kamu seperti malam yang tenang...",
    "Terima kasih telah hadir di semesta waktuku...",
    "Apa pun yang terjadi nanti...",
    "Dan jika malam ini terasa berbeda..."
  ];

  let currentMessage = 0;

  function showNextMessage() {
    if (currentMessage < messages.length) {
      const messageElement = document.getElementById(`message${currentMessage + 1}`);
      messageElement.style.display = "block";
      messageElement.textContent = messages[currentMessage];
      currentMessage++;
      setTimeout(showNextMessage, 3000); // show next message every 3 seconds
    } else {
      setTimeout(function() {
        const finalMessage = document.createElement('h1');
        finalMessage.textContent = "Selamat ulang tahun, Fendik!";
        finalMessage.style.color = '#00FF00'; // greenish aurora color
        finalMessage.style.fontSize = "3rem";
        document.querySelector('.text-container').appendChild(finalMessage);
      }, 1000);
    }
  }

  showNextMessage();
};
