
let crassIcon = document.querySelectorAll(".crass-icon");

crassIcon.forEach((icon) => {
   icon.addEventListener("click", () => {
      let productCategory = icon.closest(".product-compare-category");
      if (productCategory) {
         productCategory.remove();
      }
   });
});
