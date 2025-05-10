window.onload = function () {
    const topSection = document.querySelector('.top');
    const botSection = document.querySelector('.bot');

    setTimeout(() => {
      topSection.classList.add('visible');
      botSection.classList.add('visible');
    }, 60);
  };