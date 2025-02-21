const menuIcon = document.querySelector('#menu-icon')
const navLinks = document.querySelector('.nav-links')

menuIcon.onclick = ()=> {
  navLinks.classList.toggle('active')
}


// gsap

const textElements = gsap.utils.toArray('#about .b_txt');
textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'left 100%',
      end: 'left 60%',
      scrub: true,
    },
  });
});

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