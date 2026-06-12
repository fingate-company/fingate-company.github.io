/* ========================================
   통합 사이트 설정 (중앙 관리)
   ======================================== */

export const SITE_CONFIG = {
  // 기본 정보
  name: '핀게이트',
  title: '핀게이트 - 보험을 가장 잘 아는 인슈어테크 기업',
  description: '실무에서 검증된 IT 경험과 혁신 기술로 고객의 비즈니스 가치를 높입니다. Cloud, MSA, 통합시스템 등 보험 IT 전문 솔루션을 제공합니다.',
  keywords: '인슈어테크, 보험IT, 핀게이트, 보험시스템, Cloud, MSA, 통합시스템, GA시스템, 원스톱상담솔루션',
  author: '핀게이트',
  
  // 언어 및 지역
  language: 'ko',
  locale: 'ko_KR',
  
  // URL 및 이미지
  baseUrl: 'https://fingate.kr/',
  defaultImage: '/images/services/service2-hero.png',
  favicon: '/favicon.svg',
  
  // 테마
  themeColor: '#2563eb',
  
  // 기업 정보
  office: {
    name: '한형규',
    registrationNumber: '349-81-02732',
    email: 'withus@fingate.kr',
    phone: '070-7954-2241',
    address: '서울특별시 중구 칠패로 28, 3층 (주)핀게이트',
    reserved: 'FINGATE @ 2023. All rights reserved.'
  },
  
  // EmailJS 설정 (값은 환경변수에서 주입: GitHub Actions Secrets / 로컬 .env)
  // ⚠️ 키를 코드에 하드코딩하지 말 것 — 빌드 결과 JS에 그대로 노출됨.
  //    도용 방지는 EmailJS 대시보드의 Allowed Origins(https://fingate.kr) 설정으로 처리.
  emailjs: {
    serviceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID || '',
    templateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
    publicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
    toEmail: process.env.NUXT_PUBLIC_EMAILJS_TO_EMAIL || ''
  },
  
  // SEO 기본값
  seo: {
    type: 'website',
    robots: 'index,follow',
    image: '/images/services/service2-hero.png'
  }

} as const

// 하위 호환성을 위한 별칭
export const CONTACT_INFO = SITE_CONFIG.office
