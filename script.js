/* ================================= */
/* PAGE SYSTEM */
/* ================================= */

let currentPage = 1;

const pages = document.querySelectorAll(".page");

const music = document.getElementById("bgMusic");


/* ================================= */
/* SHOW PAGE */
/* ================================= */

function showPage(number) {

    pages.forEach((page, index) => {

        if (index === number - 1) {

            page.classList.add("active");

        } else {

            page.classList.remove("active");

        }

    });

    currentPage = number;

}


/* ================================= */
/* START BIRTHDAY */
/* ================================= */

function startBirthday() {

    /*
        Musik dicoba dimainkan
        setelah user menekan tombol.
    */

    music.play().catch(() => {});

    showPage(2);

}


/* ================================= */
/* NEXT PAGE */
/* ================================= */

function nextPage() {

    if (currentPage < pages.length) {

        showPage(currentPage + 1);

    }

}


/* ================================= */
/* MUSIC CONTROL */
/* ================================= */

function toggleMusic() {

    if (music.paused) {

        music.play().catch(() => {});

    } else {

        music.pause();

    }

}


/* ================================= */
/* KEYBOARD NAVIGATION */
/* ================================= */

document.addEventListener("keydown", function(event) {

    if (
        event.key === "ArrowRight" &&
        currentPage < pages.length
    ) {

        nextPage();

    }


    if (
        event.key === "ArrowLeft" &&
        currentPage > 1
    ) {

        showPage(currentPage - 1);

    }

    function openPhoto(image) {

    const popup = document.getElementById("photoPopup");
    const popupImage = document.getElementById("popupImage");

    popupImage.src = image.src;

    popup.classList.add("active");

}


function closePhoto() {

    const popup = document.getElementById("photoPopup");

    popup.classList.remove("active");

}

});

function openPhoto(image) {

    const popup = document.getElementById("photoPopup");
    const popupImage = document.getElementById("popupImage");

    popupImage.src = image.src;

    popup.classList.add("active");

}


function closePhoto() {

    const popup = document.getElementById("photoPopup");

    popup.classList.remove("active");

}