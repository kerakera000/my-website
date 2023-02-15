document.addEventListener("DOMContentLoaded", function(){

    let navBtn = document.getElementById("nav-btn");
    document.getElementById('nav-btn').addEventListener('click', () => {
        navBtn.classList.toggle("active");
        document.getElementById('HeaderNav').classList.toggle("active");
        document.getElementById('header-id').classList.toggle("active");
    });
});