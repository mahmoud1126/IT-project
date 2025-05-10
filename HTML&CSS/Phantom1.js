// الكود الخاص بزر عرض الصوص
window.onload = function () {
  const toggleBtn = document.getElementById("b3");
  const sauceDiv = document.getElementById("d1");

  if (toggleBtn && sauceDiv) {
    toggleBtn.addEventListener("click", function () {
      sauceDiv.style.display = "block";
      toggleBtn.style.display = "none";
    });
  }
};

function searchTable() {
  const cells = document.querySelectorAll("#t td");
  cells.forEach(cell => {
    cell.style.backgroundColor = "transparent";
  });

  const input = document.getElementById("searchInput").value.toLowerCase();
  if (!input) return;

  cells.forEach(cell => {
    if (cell.textContent.toLowerCase().includes(input)) {
      const row = cell.parentNode;
      Array.from(row.children).forEach(cell => {
        cell.style.backgroundColor = "brown";
      })
    }
  });
}
