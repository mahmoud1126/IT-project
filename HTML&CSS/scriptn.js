const bookBtn = document.getElementById("book_table");
const nextPage = 'hhh.html';

window.addEventListener("load", function () {
  setTimeout(function() {
    bookBtn.classList.remove("hidden");
    bookBtn.classList.add("show");
  }, 500);
});

bookBtn.addEventListener('click', function() {
  const parent = bookBtn.parentElement;
  bookBtn.remove();
  const burgerIcon = document.createElement('img');
  burgerIcon.src = 'assets/images/burger-sign.png';
  burgerIcon.classList.add('burger-icon');
  parent.appendChild(burgerIcon);

  burgerIcon.addEventListener('animationend', function() {
    window.location.href=nextPage;
  });
});

