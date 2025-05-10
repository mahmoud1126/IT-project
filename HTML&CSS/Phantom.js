window.onload = function () {
    const toggleBtn = document.getElementById("b3");
    const sauceDiv = document.getElementById("d1");
  
    toggleBtn.addEventListener("click", function () {
      sauceDiv.style.display = "block";   
      toggleBtn.style.display = "none";  
    });
  };