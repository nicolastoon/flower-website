function changeImage(id) {
    const img = document.getElementById(id);
    if (!img) return;

    const drawing = img.querySelector('.drawing');
    const photo = img.querySelector('.photo');

    img.addEventListener('mouseenter', function () {
        photo.style.opacity = 1;
        drawing.style.opacity = 0;
    });

    img.addEventListener('mouseout', function () {
        drawing.style.opacity = 1;
        photo.style.opacity = 0;
    });
};

changeImage('b-shot');
