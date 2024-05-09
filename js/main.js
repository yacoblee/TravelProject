/* 인기지역 이미지 넘기는 기능 */
document.addEventListener("DOMContentLoaded", function () {
    const regions = document.querySelectorAll(".region");
    const rightButton = document.querySelector(".regionright");
    const leftButton = document.querySelector(".regionleft");

    let currentIndex = 0;
    const maxIndex = Math.max(Math.ceil(regions.length / 5) - 1, 0); // 최소값을 0으로 설정하여 음수가 되지 않도록 보장합니다.

    updateButtonVisibility();

    rightButton.addEventListener("click", function () {
        if (currentIndex < maxIndex) {
            currentIndex++;
            slideRegions();
        }
    });

    leftButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            slideRegions();
        }
    });

    function slideRegions() {
        const start = currentIndex * 5;
        const end = Math.min(start + 5, regions.length);
        for (let i = 0; i < regions.length; i++) {
            if (i >= start && i < end) {
                regions[i].style.display = "block";
                regions[i].style.overflow = "hidden";
            } else {
                regions[i].style.display = "none";
            }
        }
        updateButtonVisibility();
    }

    function updateButtonVisibility() {
        rightButton.style.display = currentIndex < maxIndex ? "block" : "none";
        leftButton.style.display = currentIndex > 0 ? "block" : "none";
    }

    regions.forEach(region => {
        region.style.animation = "myAnimation .5s ease-in .5s";
    });
});

/* 숙소 4개씩 보이는 기능 추가*/
document.addEventListener("DOMContentLoaded", function () {
    const lodgings = document.querySelectorAll(".lodging");
    const leftButton = document.querySelector(".lodgingleft");
    const rightButton = document.querySelector(".lodgingright");

    let currentIndex = 0;
    const maxIndex = Math.ceil(lodgings.length / 4) - 1;

    leftButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            const start = currentIndex * 4;
            const end = Math.min(start + 4, lodgings.length);

            lodgings.forEach((lodging, index) => {
                if (index >= start && index < end) {
                    lodging.style.display = "block";
                } else {
                    lodging.style.display = "none";
                }
            });

            rightButton.style.display = "block";
        }
        if (currentIndex === 0) {
            leftButton.style.display = "none";
        }
    });

    rightButton.addEventListener("click", function () {
        const nextIndex = currentIndex + 1;
        const start = nextIndex * 4;
        const end = Math.min(start + 4, lodgings.length);

        lodgings.forEach((lodging, index) => {
            if (index >= start && index < end) {
                lodging.style.display = "block";
            } else {
                lodging.style.display = "none";
            }
        });

        currentIndex = nextIndex;
        if (currentIndex >= maxIndex) {
            rightButton.style.display = "none";
        }
        leftButton.style.display = "block";
    });

    lodgings.forEach(lodging => {
        lodging.style.transition = "transform 0.5s ease";
    });
});

/*추천 숙소 체크 기능*/
document.addEventListener('DOMContentLoaded', function () {
    const selectAreas = document.querySelector('.selectarea');
    const tabs = selectAreas.querySelectorAll('li');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => t.classList.remove('selected'));

            tab.classList.add('selected');
        });
    });
});
