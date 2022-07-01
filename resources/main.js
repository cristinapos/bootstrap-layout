const cursor = document.querySelector('.ball-one');

const col = document.querySelectorAll('.col-3');

col.forEach((el) => el.addEventListener('mousemove', function(e) {
    cursor.style.display = "flex";
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
}))

col.forEach((el) => el.addEventListener('mouseleave', function(e) {
    cursor.style.top = 0 + "px";
    cursor.style.left = 0 + "px";
    cursor.style.display = "none";
}))
