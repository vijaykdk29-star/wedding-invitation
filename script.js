
function openInvitation() {
    const cover = document.getElementById("cover");
    const invitation = document.getElementById("invitation");

    cover.classList.add("hide");

    setTimeout(function () {
        cover.style.display = "none";
        invitation.classList.add("show");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 1000);
}


// Back To Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Wedding Countdown Timer
const weddingDate = new Date(
    "January 31, 2027 07:30:00 GMT+0530"
).getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

updateCountdown();

setInterval(updateCountdown, 1000);


// WhatsApp Share Function
function shareInvitation() {

    const message =
        "💍 Wedding Invitation 💍\n\n" +
        "Vijaykumar ❤️ Usharani\n\n" +
        "🌸 Reception: 30 January 2027 | 07:00 PM\n\n" +
        "🪷 Wedding: 31 January 2027 | 07:30 AM\n\n" +
        "📍 Venue: Smt B Tulasi Narayana Rao Kalyana Mantapa\n\n" +
        "We warmly invite you to celebrate our special day with us! ❤️";

    const whatsappURL =
        "https://wa.me/?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}
