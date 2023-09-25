// const carousel = document.querySelector(".carousel");

// let isDragging = flase, startX, startScrollLeft;

// const dragStart = (e) => {
//     isDragging = true;
//     carousel.classList.add("dragging");
//     startX = e.pagex;
//     startScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//     if(!isDragging) return;
//     carousel.scrollleft = startScrollLeft - (e.pagex - startX);
// }

// const dragstop = () => {
//     isDragging =false;
//     carousel.classList.remove("dragging");
// }

// carousel.addEventListener("mousedown", dragStart)
// carousel.addEventListener("mousemove", dragging)
// carousel.addEventListener("mouseup", dragstop)