const menuIcon = document.querySelector('#menu-icon')
const navLinks = document.querySelector('.nav-links')

menuIcon.onclick = ()=> {
  navLinks.classList.toggle('active')
}





// document.addEventListener("DOMContentLoaded", function () {
//   // 모든 프로젝트 카드 요소를 가져옴
//   const projectCards = document.querySelectorAll(".project-card");

//   // 각 프로젝트 카드에 클릭 이벤트 추가
//   projectCards.forEach((card) => {
//       card.addEventListener("click", function () {
//           const title = card.querySelector("h3").textContent;
//           const description = card.querySelector("p").textContent;
//           const imgEl = card.querySelector('img').textContent;
//           console.log(imgEl);
          
//           alert(`프로젝트: ${title}\n\n${description} ${imgEl}`);
//           modal.classList.add('on');
//       });
//   });
// });

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