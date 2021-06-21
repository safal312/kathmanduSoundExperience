document.addEventListener('DOMContentLoaded', () => {
    let audio = document.getElementById("sound");
    let street = document.getElementById("street");
    let wedding = document.getElementById("wedding");
    let market = document.getElementById("market");

    audio.addEventListener("timeupdate", () => {
        let time = audio.currentTime;

        if (time > 2) {
            if (!street.classList.contains("reveal")) {
                street.classList.add("reveal");
            }
        } 
        if (time > 20) {
            if (!wedding.classList.contains("reveal")) {
                wedding.classList.add("reveal");
            }
        } 
        if (time > 50) {
            if (!market.classList.contains("reveal")) {
                market.classList.add("reveal");
            }
        } 
        console.log(audio.currentTime);
    })
    
})