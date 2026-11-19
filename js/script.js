// 스크롤 위치에 따라 네비게이션 메뉴를 강조하는 코드

// 1) 강조 기능을 적용할 대상: 모든 섹션(section 태그)
const sections = document.querySelectorAll("section");

// 2) 네비게이션 링크들 (href="#about" 같은 링크)
const navLinks = document.querySelectorAll(".nav-links a");

// 3) 섹션이 화면에 보이는지 감시하는 도구 (IntersectionObserver)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // 섹션이 화면 가운데 근처에 보일 때만 실행
      if (entry.isIntersecting) {
        const id = entry.target.id; // 예: "about"

        // 모든 링크에서 active 클래스를 지우고
        navLinks.forEach((link) => link.classList.remove("active"));

        // 지금 보이는 섹션에 해당하는 링크에만 active 클래스를 추가
        const currentLink = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (currentLink) {
          currentLink.classList.add("active");
        }
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" } // 화면 가운데 띠 영역을 기준으로 판단
);

// 4) 모든 섹션을 감시 대상으로 등록
sections.forEach((section) => observer.observe(section));
