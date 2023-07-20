const filterItem = document.querySelector(".portfolio-category");
const portfolioItem = document.querySelectorAll(".portfolio-box");

filterItem.addEventListener("click", (e) => {
  if (e.target.classList.contains("item")) {
    let filterName = e.target.getAttribute("data-type");
    portfolioItem.forEach((item) => {
      let filtered = item.getAttribute("data-type");
      if (filtered === filterName || filterName === "all") {
        item.classList.remove("hidden");
        item.classList.add("show");
      } else {
        item.classList.add("hidden");
        item.classList.remove("show");
      }
    });
  }
});
