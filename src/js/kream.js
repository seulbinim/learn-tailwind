// DOM 선택
const openMenuButton = document.querySelector('.kream--button-open');
const closeMenuButton = document.querySelector('.kream--button-close');
const navMember = document.querySelector('.kream--member');
const buttonMores = document.querySelectorAll('.kream--more');
const mediaQuery = window.matchMedia('(max-width: 640px)');

// 슬라이드 메뉴 상태 관리
let isNavMemberOpen = false;

// 더보기 버튼 클릭 시 상태 관리
let expandedLists = {}; // 각 더보기 버튼에 대해 열린 상태를 저장

// 메뉴 열기/닫기 함수
function openNavMember() {
  if (!mediaQuery.matches) return;
  navMember.classList.remove('translate-x-full');
  navMember.classList.add('translate-x-0');
  document.body.style.overflow = 'hidden';
  isNavMemberOpen = true;
}

function closeNavMember() {
  if (!mediaQuery.matches) return;
  navMember.classList.remove('translate-x-0');
  navMember.classList.add('translate-x-full');
  document.body.style.overflow = '';
  isNavMemberOpen = false;
}

// 더보기 버튼 클릭 핸들러
function handleButtonMore(event) {
  const button = event.currentTarget;
  const list = button.previousElementSibling;
  if (!list || list.tagName !== 'UL') return;

  // 현재 리스트의 상태 추적
  const listId = button.dataset.listId; // 버튼의 data-attribute로 리스트를 식별

  // 숨겨진 항목들 표시
  const hiddenItems = list.querySelectorAll('li.hidden');

  hiddenItems.forEach((item) => {
    item.classList.remove('hidden');
    item.classList.add('block');
  });

  // 더보기 버튼 숨기기
  button.classList.add('hidden');

  // 리스트의 상태를 저장
  expandedLists[listId] = true;
}

// 화면 크기 변경 처리 함수
function handleResize() {
  if (mediaQuery.matches) {
    // 모바일 뷰
    navMember.classList.add('translate-x-full');

    // 각 더보기 버튼과 관련 리스트 초기화
    buttonMores.forEach((button) => {
      const list = button.previousElementSibling;
      const listId = button.dataset.listId; // 버튼의 data-attribute로 리스트를 식별

      // 모든 li 항목을 초기 상태로 되돌림
      const items = list.querySelectorAll('li');
      items.forEach((item) => {
        item.classList.add('hidden');
        item.classList.remove('block');
      });

      // 더보기 버튼 표시
      button.classList.remove('hidden');

      // 열린 상태가 저장되어 있다면 해당 항목만 표시
      if (expandedLists[listId]) {
        items.forEach((item) => {
          item.classList.remove('hidden');
          item.classList.add('block');
        });
        button.classList.add('hidden'); // 버튼 숨김
      }
    });
  } else {
    // 데스크탑 뷰
    navMember.classList.remove('translate-x-full');
    document.body.style.overflow = '';
    isNavMemberOpen = false;

    // 모든 li 항목을 표시하고 더보기 버튼 숨김
    buttonMores.forEach((button) => {
      const list = button.previousElementSibling;
      const items = list.querySelectorAll('li');

      items.forEach((item) => {
        item.classList.remove('hidden');
        item.classList.add('block');
      });

      button.classList.add('hidden'); // 더보기 버튼 숨김
    });
  }
}

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

// 이벤트 리스너
if (openMenuButton) {
  openMenuButton.addEventListener('click', openNavMember);
}
if (closeMenuButton) {
  closeMenuButton.addEventListener('click', closeNavMember);
}

// 더보기 버튼 이벤트 바인딩
buttonMores.forEach((button) => {
  button.addEventListener('click', handleButtonMore);
});

// 초기 로드 시 현재 화면 크기에 맞게 처리
handleResize();

// 미디어 쿼리 변경 감지
mediaQuery.addEventListener('change', handleResize);
