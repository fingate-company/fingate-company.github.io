# 🏢 FinGate - 보험 인슈어테크 홈페이지

> 최첨단 기술과 전문성을 바탕으로 고객의 성공을 지원하는 보험 IT 솔루션 기업

[![Nuxt 3](https://img.shields.io/badge/Nuxt-3.8.0-00DC82?logo=nuxt.js)](https://nuxt.com/)
[![Vue 3](https://img.shields.io/badge/Vue-3.4.0-4FC08D?logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-100%25-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02)](https://greensock.com/gsap/)
[![Lenis](https://img.shields.io/badge/Lenis-1.3.11-FF6B6B)](https://lenis.studiofreight.com/)

---

## ✨ 주요 특징

- ✅ **TypeScript 100%** - 모든 Vue 컴포넌트 타입 안정성 보장
- ✅ **GSAP 애니메이션** - ScrollTrigger, Context API로 최적화된 인터랙션
- ✅ **Lenis 스무스 스크롤** - 부드러운 스크롤 경험 제공
- ✅ **복잡한 스크롤 애니메이션** - NewvisionAgenda sticky 구현, 타임라인 기반 3분할 순차 등장 (0~0.40, 0.40~0.70, 0.70~끝), 양방향 스크롤 지원 (역방향 재생)
- ✅ **인덱스 기반 애니메이션** - 동적 요소 순차 등장 (0.7초 + 0.6초 간격)
- ✅ **GSAP 최적화** - ref 기반 애니메이션 제어, 클래스 선택자 중복 애니메이션 방지
- ✅ **성능 최적화** - RAF, Throttle, Intersection Observer, GPU 가속
- ✅ **이미지 관리** - `public/images` 정적 자산 + `@nuxt/image` 모듈, 크기 명시와 lazy 속성으로 최적화
- ✅ **접근성 기본 구성** - Skip Link, sr-only, :focus-visible, 올바른 ARIA 사용
- ✅ **SEO 지원** - 메타태그, Sitemap, Robots.txt (스크립트로 자동 생성)
- ✅ **반응형 디자인** - 모바일(~1024px) / 데스크톱(1024px+) / 대형 화면(2560px+) 대응
- ✅ **모듈화된 SCSS** - 페이지별 분리, 유틸리티 최적화, 미디어 쿼리 체계화
- ✅ **SITE_CONFIG 중앙 관리** - 연락처 정보, 회사 정보 통합 관리
- ✅ **회사소개 페이지 완성** - 6개 섹션 (히어로, 성장, 강점, 사업영역, 연혁, 연락처)
- ✅ **서비스 페이지 완성** - Service1 (GA 통합 운영 시스템) 6개 섹션 구현
- ✅ **Service2 페이지 완성** - 원스톱 상담지원 솔루션 6개 섹션 구현
- ✅ **연락처 페이지 완성** - 히어로, 연락처 정보, 문의 폼 (EmailJS 통합)
- ✅ **2560px 대형 화면 최적화** - clamp() 함수 및 미디어 쿼리로 확장성 보장
- ✅ **폼 검증 간소화** - 통합 에러 메시지, 시스템 alert() 사용
- ✅ **Viewport 최적화** - 모바일에서 적절한 크기로 표시되도록 viewport 메타 태그 설정 (width=1920)
- ✅ **Carousel 최적화** - Service1 carousel viewport 고정 대응, 정확한 크기 계산 및 애니메이션 재시작 처리

---

## 🚀 빠른 시작

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행 (http://localhost:3000)
npm run dev

# 3. 프로덕션 빌드 (SEO 파일 자동 생성)
npm run build

# 4. 정적 사이트 생성 (GitHub Pages, Netlify 등)
npm run generate

# 5. 빌드 미리보기
npm run preview
```

---

## 🛠 기술 스택

| 분류 | 기술 | 버전 |
|------|------|------|
| **프레임워크** | Nuxt 3 | 3.8.0 |
| **UI 라이브러리** | Vue 3 | 3.4.0 |
| **타입** | TypeScript | 5.3.0 |
| **애니메이션** | GSAP + ScrollTrigger | 3.13.0 |
| **스무스 스크롤** | Lenis | 1.3.11 |
| **스타일** | SCSS (모듈화) | - |
| **이미지 최적화** | @nuxt/image | latest |
| **이메일** | EmailJS | Latest |
| **상태관리** | Pinia, VueUse | Latest |

---

## 📁 프로젝트 구조

```
office_homepage/
├── 📂 components/
│   ├── layout/
│   │   ├── AppHeader.vue           # 헤더 (TypeScript)
│   │   └── AppFooter.vue           # 푸터 (TypeScript)
│   ├── pages/
│   │   ├── main/
│   │   │   ├── MainHero.vue        # 메인 히어로
│   │   │   ├── MainServices.vue    # 서비스 소개
│   │   │   ├── MainCompany.vue     # 회사 소개
│   │   │   ├── MainPartners.vue    # 파트너사
│   │   │   ├── MainVision.vue      # 비전
│   │   │   └── MainBanner.vue      # 배너
│   │   ├── newvision/
│   │   │   ├── NewvisionHero.vue   # 뉴비전 히어로
│   │   │   ├── NewvisionAgenda.vue # 아젠다
│   │   │   ├── NewvisionNextstep.vue # 넥스트스텝
│   │   │   ├── NewvisionValue.vue  # 가치
│   │   │   └── NewvisionContact.vue # 연락
│   │   ├── company/
│   │   │   ├── CompanyHero.vue        # 회사 히어로 섹션
│   │   │   ├── CompanyGrowth.vue      # 성장 가치 카드 섹션
│   │   │   ├── CompanyStrength.vue    # 회사 강점 슬라이더
│   │   │   ├── CompanyBusiness.vue    # 사업 영역 섹션
│   │   │   ├── CompanyHistory.vue     # 회사 연혁 + AI 히어로 섹션
│   │   │   └── CompanyContact.vue      # 연락처 정보 + 지도 섹션
│   │   ├── services/
│   │   │   ├── service1/
│   │   │   │   ├── Service1Hero.vue        # Service1 히어로 섹션
│   │   │   │   ├── Service1Reason.vue     # 선택 이유 섹션 (carousel)
│   │   │   │   ├── Service1Solution.vue    # 솔루션 소개 섹션
│   │   │   │   ├── Service1Total.vue       # 통합 서비스 carousel 섹션 (13개 서비스)
│   │   │   │   ├── Service1Revolution.vue  # 지그재그 혁신 섹션
│   │   │   │   ├── Service1Custom.vue      # 커스터마이징 POINT 섹션
│   │   │   │   └── Service1Contact.vue     # 고객사 로고 + CTA 섹션
│   │   │   └── service2/
│   │   │       ├── Service2Hero.vue        # Service2 히어로 섹션
│   │   │       ├── Service2Recommend.vue   # 추천 섹션 (말풍선 애니메이션)
│   │   │       ├── Service2Onestop.vue     # 원스톱 섹션 (11개 카드 대시보드)
│   │   │       ├── Service2Manage.vue      # 고객 관리 섹션 (순차 애니메이션)
│   │   │       ├── Service2Diagnosis.vue   # 보험 진단 섹션 (인터랙티브 버튼)
│   │   │       └── Service2Report.vue      # 리포트 섹션
│   │   └── contact/
│   │       ├── ContactHero.vue         # 연락처 히어로 섹션
│   │       ├── ContactInfo.vue         # 연락처 정보 + 지도 섹션
│   │       └── ContactForm.vue         # EmailJS 통합, 시스템 alert 알림
│   └── Icon.vue                     # SVG 아이콘
│
├── 📂 pages/
│   ├── index.vue                    # 메인 페이지
│   ├── company.vue                  # 회사소개
│   ├── contact.vue                  # 연락처
│   ├── newvision.vue                # 뉴비전
│   └── services/
│       ├── service1.vue             # GA 통합 운영 시스템
│       └── service2.vue             # 원스톱 상담지원 솔루션
│
├── 📂 assets/scss/
│   ├── main.scss                    # SCSS 진입점
│   ├── _variables.scss              # 색상, 폰트, 간격 변수
│   ├── _mixins.scss                 # 재사용 믹스인
│   ├── _base.scss                   # CSS Reset, 공통 버튼
│   ├── _layouts.scss                # 헤더, 푸터 스타일
│   ├── _animations.scss             # GSAP 애니메이션 클래스
│   ├── _utilities.scss              # 유틸리티 클래스
│   ├── _pages.scss                  # 페이지별 스타일 통합
│   ├── _pages-main.scss             # 메인 페이지
│   ├── _pages-company.scss          # 회사소개 페이지
│   ├── _pages-service1.scss         # Service1 페이지 (GA 통합 운영 시스템)
│   ├── _pages-service2.scss         # Service2 페이지 (원스톱 상담지원 솔루션)
│   ├── _pages-newvision.scss        # 뉴비전 페이지
│   └── _pages-contact.scss          # 연락처 페이지
│
├── 📂 plugins/
│   ├── gsap.client.js               # GSAP + ScrollTrigger 전역 설정
│   ├── lenis.client.js              # Lenis 스무스 스크롤 + 섹션 스냅
│   └── gsap-animations.client.js   # 공통 GSAP 애니메이션
│
├── 📂 config/
│   ├── seo.ts                       # SEO 메타 데이터 (중앙 관리)
│   └── site.ts                      # 사이트 설정 (회사 정보, 네비게이션)
│
├── 📂 composables/
│   └── useSEO.ts                    # SEO 컴포저블
│
├── 📂 utils/
│   └── performance.ts               # throttle, debounce, RAF 유틸
│
├── 📂 scripts/
│   ├── generate-sitemap.js          # Sitemap 자동 생성
│   └── generate-robots.js           # Robots.txt 자동 생성
│
├── 📂 public/
│   ├── images/                      # 이미지 리소스
│   ├── sitemap.xml                  # 자동 생성
│   └── robots.txt                   # 자동 생성
│
├── nuxt.config.ts                   # Nuxt 설정 (폰트, 빌드 최적화)
├── package.json                     # 의존성 및 스크립트
└── tsconfig.json                    # TypeScript 설정
```

---

## ⚡ 성능/접근성 최적화

### 적용된 최적화 기법

#### 1. **JavaScript/TypeScript**
```typescript
✅ GSAP Context API           // 메모리 누수 방지, 자동 cleanup
✅ RequestAnimationFrame      // 부드러운 DOM 업데이트 (커스텀 커서)
✅ Intersection Observer      // 지연 애니메이션, 뷰포트 진입 감지
✅ Event Delegation           // 이벤트 리스너 최소화
✅ Passive Event Listeners    // 스크롤 성능 향상
✅ Throttle/Debounce         // 이벤트 최적화
```

#### 2. **CSS/SCSS**
```scss
✅ GPU 가속                   // will-change, transform3d, backface-visibility
✅ CSS Containment           // contain: layout style paint
✅ 유틸리티 클래스 최적화      // m-0~400 → m-0~100 (축소)
✅ 페이지별 SCSS 분리         // 유지보수성 향상
✅ content-visibility: auto   // 퍼스트뷰 아래 섹션 지연 렌더링 (메인/뉴비전)
```

#### 3. **이미지**
```typescript
✅ Lazy Loading              // loading="lazy"
✅ 크기/비율 명시            // width/height 지정으로 CLS 방지
✅ Nuxt Image                // webp/avif 품질 80, responsive screens 설정
✅ 정적 자산 활용            // public/images 경로 관리
```

#### 4. **빌드/서버**
```typescript
✅ Vendor 청크 분리          // gsap, lenis, vue 별도 번들
✅ 폰트 Preload             // Pretendard, Poppins
✅ Tree Shaking             // 미사용 코드 제거
✅ Nitro 압축               // gzip/brotli 활성화 (compressPublicAssets)
```

### 접근성 (A11y)
```css
/* 1) 스크린리더 전용 */
.sr-only { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }

/* 2) Skip Link */
.skip-link { position:absolute; left:-9999px; top:auto; width:1px; height:1px; overflow:hidden; }
.skip-link:focus { position:fixed; left:16px; top:16px; z-index:9999; padding:8px 12px; background:#000; color:#fff; border-radius:8px; width:auto; height:auto; overflow:visible; }

/* 3) 키보드 포커스 가시화 */
:focus-visible { outline:2px solid currentColor; outline-offset:2px; }
a:focus-visible, button:focus-visible, [role="button"]:focus-visible { outline:2px solid currentColor; outline-offset:2px; }
```
- 레이아웃에 Skip Link 추가: `layouts/default.vue` 상단 `<a href="#main" class="skip-link">본문으로 건너뛰기</a>`
- 메인 콘텐츠에 `id="main"` 부여
- 장식용 비디오는 `aria-hidden="true"`로 스크린리더 제외
- 링크 카드에서 불필요한 ARIA role 제거

### 문서 언어
- `nuxt.config.ts` → `app.head.htmlAttrs.lang = 'ko'`

### Lighthouse 점수 (예상)
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

---

## 🎬 주요 컴포넌트 & 기능

| 컴포넌트 | 설명 | 주요 기능 |
|---------|------|----------|
| **MainHero** | 메인 히어로 섹션 | 비디오 배경, 마스크 텍스트 애니메이션, GSAP Timeline |
| **MainServices** | 서비스 소개 섹션 | 카드 분산 애니메이션, NuxtLink 통합, 각 카드 링크화 |
| **MainCompany** | 회사 소개 섹션 | 카드 분산 애니메이션, 커스텀 커서 (RAF), Event Delegation |
| **MainVision** | 비전 섹션 | 순차 등장 애니메이션, CSS Hover 효과, GSAP 완료 후 CSS 전환 |
| **MainPartners** | 파트너사 섹션 | 로고 Stagger 애니메이션 |
| **MainBanner** | CTA 배너 | ref 기반 등장 애니메이션 |
| **NewvisionHero** | 뉴비전 히어로 섹션 | 비디오 배경, 기본 fade-in 애니메이션 |
| **NewvisionAgenda** | 아젠다 섹션 | sticky 구현, GSAP 통합 제어, 카드와 텍스트 동기화 |
| **NewvisionNextstep** | 넥스트스텝 섹션 | 인덱스 기반 순차 등장 (0.7초 + 0.6초 간격), 6개 POINT 카드 |
| **NewvisionValue** | 가치 섹션 | 인덱스 기반 순차 등장, 버튼 클릭 시 콘텐츠 전환 애니메이션 |
| **NewvisionContact** | 연락 섹션 | 단순 fade-in 애니메이션, CTA 버튼 |
| **ContactForm** | 연락 폼 | EmailJS 통합, 시스템 alert() 알림, 간소화된 폼 검증 |

### Company 컴포넌트

| 컴포넌트 | 설명 | 주요 기능 |
|---------|------|----------|
| **CompanyHero** | 회사 히어로 섹션 | 회사 소개 메인 섹션, 배경 이미지 최적화 |
| **CompanyGrowth** | 성장 가치 섹션 | 4개 가치 카드 그리드 레이아웃, 순차 등장 애니메이션 |
| **CompanyStrength** | 회사 강점 섹션 | 커스텀 슬라이더 (Composition API) |
| **CompanyBusiness** | 사업 영역 섹션 | 동적 비즈니스 카드 그리드, 배경 오버레이 효과 |
| **CompanyHistory** | 회사 연혁 섹션 | 타임라인 스크롤 애니메이션, AI 히어로 섹션 통합 |
| **CompanyContact** | 연락처 섹션 | SITE_CONFIG 기반 연락처 정보, 지도 |

### Service2 컴포넌트

| **Service2Hero** | Service2 히어로 섹션 | 히어로 섹션, 기본 fade-in 애니메이션 |
| **Service2Recommend** | 추천 섹션 | 말풍선 애니메이션, 순차 등장 (stagger 효과), ref 기반 제어 |
| **Service2Onestop** | 원스톱 섹션 | 11개 카드 대시보드, 순차 등장, ref 기반 제어 |
| **Service2Manage** | 고객 관리 섹션 | 순차 애니메이션, ref 기반 제어 |
| **Service2Diagnosis** | 진단 섹션 | 인터랙티브 버튼, Transition 애니메이션, 자동 롤링 (3초) |
| **Service2Report** | 리포트 섹션 | 리포트 섹션, fade-in 애니메이션 |

### 주요 애니메이션 예시

#### 1. **Lenis 스무스 스크롤**
```javascript
// Lenis로 스무스 스크롤 구현 (섹션 스냅 미사용)
```

#### 2. **NewvisionAgenda 타임라인 기반 스크롤 애니메이션**
```javascript
// 200rem 영역을 분할하여 텍스트 순차 등장, 양방향 스크롤 지원 (역방향 재생)
// scrub: true로 스크롤에 따라 정방향/역방향 자동 재생
```

#### 3. **인덱스 기반 순차 등장 (NewvisionNextstep, NewvisionValue)**
```javascript
children.forEach((child, index) => {
  gsap.fromTo(child, { opacity: 0, y: 50 }, {
    opacity: 1, y: 0, delay: 0.7 + (index * 0.6)
  })
})
```

#### 4. **커스텀 커서 (MainCompany)**
```javascript
// 마우스 위치에 정확히 중앙 정렬, transform: translate(-50%, -50%) 사용
// 카드 호버 시에만 표시, requestAnimationFrame으로 최적화
requestAnimationFrame(() => {
  cursor.style.left = `${e.clientX}px`
  cursor.style.top = `${e.clientY}px`
})
```

---

## 🔍 SEO

### 자동 생성 파일

```bash
# SEO 파일만 생성
npm run generate:seo

# 개별 생성
npm run generate:sitemap  # sitemap.xml
npm run generate:robots   # robots.txt
```

### 페이지별 SEO 적용

```typescript
// pages/index.vue
<script setup lang="ts">
const seoData = useSEO('index')
useHead(seoData)
</script>
```

### 포함된 SEO 기능
- ✅ 메타 태그 (title, description, keywords, OG, Twitter)
- ✅ Canonical URL
- ✅ JSON-LD 구조화 데이터 (Organization, WebSite)
- ✅ Sitemap.xml (스크립트로 생성)
- ✅ Robots.txt (스크립트로 생성)
- ✅ Dublin Core 메타태그

---

## 🎨 스타일 가이드

### 색상 팔레트

```scss
// 브랜드 컬러
$color-primary: #12A2B8;           // 메인 브랜드 (핀게이트 청록)
$color-primary-light: #60a5fa;     // 라이트 블루

// 텍스트
$color-text-primary: #12A2B8;      // 메인 컬러 텍스트
$color-text-white: #ffffff;        // 흰색
$color-text-black: #111111;        // 검정
$color-text-gray: #444444;         // 회색
$color-text-secondary: #64748b;    // 부가 텍스트
$color-text-light: #cbd5e1;        // 연한 회색

// 배경
$color-bg-primary: #12A2B8;        // 메인 배경
$color-bg-white: #ffffff;          // 흰색 배경
$color-bg-dark: #0A0A10;           // 다크 배경
$color-bg-secondary: #f8fafc;      // 세컨더리 배경
$color-bg-quaternary: #DDDDDD;     // 보더 색상
```

### 타이포그래피

```scss
// 폰트 패밀리
$font-family-primary: 'Pretendard Variable', ...;

// 폰트 굵기
$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
```

### 반응형

```scss
// 컨테이너 (assets/scss/_mixins.scss)
@include container-responsive; // max-width: 1400px, 2560px 이상에서 1680px로 확장

// 대형 화면 (assets/scss/_variables.scss)
@media (min-width: $breakpoint-xl) { // $breakpoint-xl: 2560px
  // 대형 화면 전용 스타일
}
```

### 반응형 디자인 전략

#### 1. **clamp() 함수 활용**
```scss
// 유연한 크기 조정
font-size: clamp(2.4rem, 1.25vw, 3rem);
padding: clamp(2rem, 1vw, 2.5rem);
```

#### 2. **레이아웃 기준값**
```scss
// 기본 컨테이너 기준 (1400px)
.container {
  padding-top: 26rem;
}

// 2560px 대형 화면
@media (min-width: 2560px) {
  .container {
    padding-top: 32.5rem;
  }
}
```

---

## 📦 사용 가능한 스크립트

```bash
# 개발
npm run dev              # 개발 서버 실행 (http://localhost:3000)
npm run clean            # 캐시 정리 (.nuxt, node_modules/.vite 삭제)

# 빌드
npm run build            # 프로덕션 빌드 (SEO 파일 자동 생성)
npm run generate         # 정적 사이트 생성 (SEO 파일 자동 생성)
npm run preview          # 빌드 미리보기

# 타입 체크
npm run type-check       # TypeScript 타입 검증

# SEO
npm run generate:seo     # Sitemap + Robots.txt 생성
npm run generate:sitemap # Sitemap.xml만 생성
npm run generate:robots  # Robots.txt만 생성
```

---

## 🚢 배포

- 사이트 기본 URL은 `config/site.ts`의 `baseUrl`에서 관리됩니다.
- SEO 스크립트(`scripts/generate-*.js`)는 `process.env.NUXT_PUBLIC_BASE_URL`을 우선 사용하며, 없으면 기본값을 사용합니다.

### 환경 변수 (선택)

```.env
# EmailJS 설정 (연락 폼)
NUXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NUXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NUXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NUXT_PUBLIC_EMAILJS_TO_EMAIL=your_email@domain.com
```

> 참고: EmailJS 설정은 `config/site.ts`에 기본값이 있어 환경 변수가 없어도 작동합니다.

### Netlify 배포

1. **빌드 설정**
   - Build command: `npm run generate`
   - Publish directory: `dist`

2. **환경 변수** (선택사항)
   - Netlify 대시보드에서 환경 변수 설정
   - 설정하지 않아도 기본값으로 작동

### GitHub Pages 배포

1. **리포지토리 설정**
   - GitHub 리포지토리 → Settings → Pages
   - Source: `Deploy from a branch` 선택
   - Branch: `gh-pages` / `/ (root)` 선택 후 Save

2. **배포 명령어**
   ```bash
   # 1. 정적 사이트 생성
   npm run generate

   # 2. dist 폴더를 gh-pages 브랜치에 배포
   # (배포 준비 스크립트가 자동으로 dist/public을 dist로 이동)
   npm run deploy
   ```

   **참고**: `npm run deploy`는 자동으로 `dist/public`의 내용을 `dist` 루트로 이동시킵니다.

3. **배포 URL**
   - 사이트 주소: `https://fingate.kr/office_homepage/`
   - 배포 후 몇 분 정도 소요될 수 있습니다.

4. **커스텀 도메인 설정**
   - `public/CNAME` 파일에 도메인을 설정하면 배포 시 자동으로 포함됩니다.
   - 현재 설정: `fingate.kr`
   - 다른 도메인을 사용하려면 `public/CNAME` 파일을 수정하세요.
   - 배포 스크립트가 자동으로 `CNAME` 파일을 포함하므로 도메인 설정이 유지됩니다.

5. **주의사항**
   - `gh-pages` 브랜치에는 `dist` 폴더의 내용만 포함됩니다.
   - `main` 브랜치에서 개발을 계속 진행할 수 있습니다.
   - 배포 전에 반드시 `npm run generate`로 빌드를 완료하세요.
   - 커스텀 도메인 설정이 사라지지 않도록 `public/CNAME` 파일이 있는지 확인하세요.

### Vercel 배포

```bash
# Vercel CLI 사용
vercel --prod
```

---

## 🔧 커스터마이징

### 색상 변경

```scss
// assets/scss/_variables.scss
$color-primary: #YOUR_COLOR;  // 메인 브랜드 컬러 변경
```

### 회사 정보 수정

```typescript
// config/site.ts
export const SITE_CONFIG = {
  company: {
    name: 'Your Company',
    nameEn: 'YOUR_COMPANY',
    // ...
  }
}
```

### SEO 수정

```typescript
// config/seo.ts
export const SEO_DEFAULTS = {
  siteName: 'Your Site',
  title: 'Your Title',
  // ...
}
```

---

## 📞 연락처

- **회사명**: 핀게이트 (FinGate)
- **이메일**: withus@fingate.kr
- **전화**: 070-7954-2241
- **팩스**: 02-6008-0048
- **주소**: 서울특별시 중구 칠패로 28, 3층 (주)핀게이트

---

## 📄 라이선스

Copyright © 2023-2025 FinGate. All rights reserved.

---

## 🙏 기여

프로젝트 개선 제안이나 버그 리포트는 언제나 환영합니다!

---

<div align="center">

**Made with ❤️ by FinGate Team**

[🏠 홈페이지](https://fingate.co.kr) · [📧 문의하기](mailto:withus@fingate.kr)

</div>
