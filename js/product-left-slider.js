const thumbnails = document.querySelectorAll(".thumbnail");
const displayedImage = document.getElementById("displayedImage");
const borderFrame = document.querySelector(".border-frame");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0;

// Function to update the displayed image and move the border
function updateImage(index) {
    displayedImage.src = thumbnails[index].src;
    borderFrame.style.transform = `translateX(${index * 70}px)`;
}

// Next button click event
nextBtn.addEventListener("click", () => {
    if (currentIndex < thumbnails.length - 1) {
        currentIndex++;
        updateImage(currentIndex);
    }
});

// Previous button click event
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage(currentIndex);
    }
});

// Initial positioning of the border frame
updateImage(currentIndex);
