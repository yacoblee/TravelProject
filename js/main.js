

const regions = document.querySelectorAll('.region');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    regions[currentIndex].style.opacity = 0;

    currentIndex = (currentIndex + 1) % regions.length;

    regions[currentIndex].style.opacity = 1;
});

regions[currentIndex].style.opacity = 1;
setInterval(() => {
    regions[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % regions.length;
    regions[currentIndex].style.opacity = 1;
}, 5000);

for (let i = 4; i < regions.length; i++) {
    regions[i].style.opacity = 0;
    regions[i].style.display = 'none';
}
