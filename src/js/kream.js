// DOM 선택
const openMenuButton = document.querySelector('.kream--button-open');
const closeMenuButton = document.querySelector('.kream--button-close');
const navMember = document.querySelector('.kream--member');
const buttonMores = document.querySelectorAll('.kream--more');
const mediaQuery = window.matchMedia('(max-width: 640px)');

// 슬라이드 메뉴 상태 관리
let isNavMemberOpen = false;

// 메뉴 열기 함수
function openNavMember() {
  if (!mediaQuery.matches) return; // 모바일 환경이 아니면 실행하지 않음

  navMember.classList.remove('translate-x-full'); // 슬라이드 인
  navMember.classList.add('translate-x-0');
  document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
  isNavMemberOpen = true;
}

// 메뉴 닫기 함수
function closeNavMember() {
  if (!mediaQuery.matches) return;

  navMember.classList.remove('translate-x-0');
  navMember.classList.add('translate-x-full'); // 슬라이드 아웃
  document.body.style.overflow = ''; // 배경 스크롤 복원
  isNavMemberOpen = false;
}

// 더보기 버튼 클릭 핸들러
function handleButtonMore(event) {
  const list = event.target.previousElementSibling;
  const items = list.querySelectorAll('li:nth-child(n+2)');

  items.forEach((item) => {
    if (item.classList.contains('hidden')) {
      item.classList.replace('hidden', 'block');
    } else {
      item.classList.replace('block', 'hidden');
    }
  });

  event.target.classList.add('hidden');
}

// 통합된 화면 크기 변경 처리 함수
function handleResize(e) {
  if (!e.matches) {
    // 데스크톱 크기로 변경되었을 때
    // 모바일 메뉴 관련 클래스 모두 제거
    navMember.classList.remove('translate-x-full', 'z-10');
    document.body.style.overflow = '';
    isNavMemberOpen = false;
  } else {
    // 모바일 크기로 변경되었을 때
    // 모바일 메뉴 기본 스타일 적용
    navMember.classList.add('translate-x-full', 'z-10');

    // 더보기 버튼과 리스트 초기화
    buttonMores.forEach((buttonMore) => {
      const list = buttonMore.previousElementSibling;
      const items = list.querySelectorAll('li:nth-child(n+2)');

      items.forEach((item) => {
        if (item.classList.contains('block')) {
          item.classList.replace('block', 'hidden');
        }
      });

      // 숨겨진 more 버튼 다시 표시
      buttonMore.classList.remove('hidden');
    });
  }
}

// 이벤트 리스너
openMenuButton.addEventListener('click', openNavMember);
closeMenuButton.addEventListener('click', closeNavMember);

// 모바일 환경에서 메뉴 외부 클릭 시 닫기
document.addEventListener('click', (e) => {
  if (isNavMemberOpen && !navMember.contains(e.target) && !openMenuButton.contains(e.target)) {
    closeNavMember();
  }
});

// ESC 키로 메뉴 닫기
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && isNavMemberOpen) {
    closeNavMember();
  }
});

// 더보기 버튼 이벤트 바인딩
buttonMores.forEach((buttonMore) => {
  buttonMore.addEventListener('click', handleButtonMore);
});

// 미디어 쿼리 변경 감지
mediaQuery.addEventListener('change', handleResize);

// 초기 로드 시 현재 화면 크기에 맞게 처리
handleResize(mediaQuery);
