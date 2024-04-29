/* 인기지역 이미지 넘기는 기능 */
document.addEventListener("DOMContentLoaded", function () {
    const regions = document.querySelectorAll(".region");
    const button = document.querySelector(".regionbutton");

    let currentIndex = 0;
    const maxIndex = Math.ceil(regions.length / 3) - 1;

    button.addEventListener("click", function () {
        const nextIndex = currentIndex + 1;
        const start = nextIndex * 3;
        const end = start + 4;
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
        region.style.transition = "transform 0.5s ease";
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

// document.addEventListener("DOMContentLoaded", function () {
//     const regions = document.querySelectorAll(".region");
//     const button = document.querySelector(".regionbutton");
//     const regionInner = document.querySelector(".region_inner");

//     let currentIndex = 0;
//     const maxIndex = Math.ceil(regions.length / 3) - 1;
//     let isMouseDown = false;
//     let startX;
//     let scrollLeft;

//     button.addEventListener("click", function () {
//         const nextIndex = currentIndex + 1;
//         const start = nextIndex * 3;
//         const end = start + 3;

//         for (let i = 0; i < regions.length; i++) {
//             if (i >= start && i < end) {
//                 regions[i].style.display = "block";
//             } else {
//                 regions[i].style.display = "none";
//             }
//         }

//         currentIndex = nextIndex;

//         if (currentIndex >= maxIndex) {
//             button.style.display = "none";
//         }
//     });

//     regions.forEach(region => {
//         region.style.transition = "transform 0.3s ease";
//         region.addEventListener("mousedown", (e) => {
//             isMouseDown = true;
//             startX = e.pageX - region.offsetLeft;
//             scrollLeft = region.scrollLeft;
//         });

//         region.addEventListener("mouseleave", () => {
//             isMouseDown = false;
//         });

//         region.addEventListener("mouseup", () => {
//             isMouseDown = false;
//         });

//         region.addEventListener("mousemove", (e) => {
//             if (!isMouseDown) return;
//             e.preventDefault();
//             const x = e.pageX - region.offsetLeft;
//             const walk = (x - startX) * 2; // 조절할 스크롤 속도
//             region.scrollLeft = scrollLeft - walk;
//         });
//     });
// });