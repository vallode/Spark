document.addEventListener("DOMContentLoaded", () => {
    let text = document.querySelector(".post").textContent;
    let word_count = text.replace(/[^\w ]/g, "").split(/\s+/).length;

    let reading_time_minutes = Math.floor(word_count / 250) + 1;
    document.querySelector(".reading-time").innerHTML = `~${reading_time_minutes} min <i class="fas fa-clock"></i>`;
});