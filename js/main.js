/* 인기지역 이미지 넘기는 기능 */
document.addEventListener("DOMContentLoaded", function () {
    const regions = document.querySelectorAll(".region");
    const button = document.querySelector(".regionbutton");

    let currentIndex = 0;
    const maxIndex = Math.ceil(regions.length / 5) - 1;

    button.addEventListener("click", function () {
        const nextIndex = currentIndex + 1;
        const start = nextIndex * 5;
        const end = start + 5;
        for (let i = 0; i < regions.length; i++) {
            if (i >= start && i < end) {
                regions[i].style.display = "block";
            } else {
                regions[i].style.display = "none";
            }
        }

        currentIndex = nextIndex;
        if (currentIndex >= maxIndex) {
            button.style.display = "none";
        }
    });
    regions.forEach(region => {
        region.style.animation = "myAnimation .5s ease-in .5s";
    });
});

/* 숙소 4개씩 보이는 기능 추가*/
document.addEventListener("DOMContentLoaded", function () {
    const lodgings = document.querySelectorAll(".lodging");
    const button = document.querySelector(".lodgingbutton");

    let currentIndex = 0;
    const maxIndex = Math.ceil(lodgings.length / 4) - 1;

    button.addEventListener("click", function () {
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
            button.style.display = "none";
        }
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
