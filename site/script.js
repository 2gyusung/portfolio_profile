const menuIcon = document.querySelector('#menu-icon')
const navLinks = document.querySelector('.nav-links')

menuIcon.onclick = ()=> {
  navLinks.classList.toggle('active')
}



// 스크롤 이벤트 기능 
// gsap.registerPlugin(ScrollTrigger);


// gsap.to(".about", {
//     scrollTrigger: {
//       trigger: '.about',//객체기준범위
//       start: "0% 0%",//시작 지점
//       end: "100% 80%",//끝 지점
//       // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
//       scrub: 1,//부드러운 스크러빙
//       markers: true,//개발가이드선
//     },
//     x: 300,
//     rotation: 360
//   });

// 프로젝트 모달 기능 


// 모든 모달과 버튼을 선택
const modalButtons = document.querySelectorAll('.modal_btn');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close_btn');

// 각 버튼에 클릭 이벤트 추가
modalButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        modals[index].style.display = 'block'; // 해당하는 모달 열기
        console.log(`모달 ${index + 1} 열림`);
    });
});

// 각 닫기 버튼에 클릭 이벤트 추가
closeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        modals[index].style.display = 'none'; // 해당하는 모달 닫기
        console.log(`모달 ${index + 1} 닫힘`);
    });
});