const reviewItem1 = document.querySelector(".review-item:nth-child(1)");
const reviewItem2 = document.querySelector(".review-item:nth-child(2)");
const reviewItem3 = document.querySelector(".review-item:nth-child(3)");

const reviewDot1 = document.querySelector(".review-dot:nth-child(1)");
const reviewDot2 = document.querySelector(".review-dot:nth-child(2)");
const reviewDot3 = document.querySelector(".review-dot:nth-child(3)");

function switchSlides1() {
    reviewItem1.style.display = "block";
    reviewItem2.style.display = "none";
    reviewItem3.style.display = "none";
}

reviewDot1.onclick = switchSlides1;

function switchSlides2() {
    reviewItem1.style.display = "none";
    reviewItem2.style.display = "block";
    reviewItem3.style.display = "none";
}

reviewDot2.onclick = switchSlides2;

function switchSlides3() {
    reviewItem1.style.display = "none";
    reviewItem2.style.display = "none";
    reviewItem3.style.display = "block";
}

reviewDot3.onclick = switchSlides3;
