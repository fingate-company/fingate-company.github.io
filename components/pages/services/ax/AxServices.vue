<template>
  <section class="ax-section ax-services" aria-labelledby="ax-services-heading">
    <div class="container">
      <header class="ax-section__header ax-section__header--dark" data-ax-reveal>
        <p class="ax-eyebrow">WHAT WE DELIVER</p>
        <h2 id="ax-services-heading">
          무엇을 만들든,<br />
          같은 체계로 끝까지 수행합니다
        </h2>
        <p>
          웹·앱·업무 시스템·고객 서비스.<br />
          새로 만들거나 이미 운영 중이거나, 출발점과 관계없이 AX 체계로 연결합니다.
        </p>
      </header>

      <div class="ax-services__grid" data-ax-stagger>
        <article v-for="service in services" :key="service.title" class="ax-services__card">
          <div class="ax-services__topline">
            <span class="ax-services__icon">
              <AxIcon :name="service.icon" />
            </span>
            <span class="ax-services__label">{{ service.label }}</span>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <ul>
            <li v-for="deliverable in service.deliverables" :key="deliverable">
              {{ deliverable }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AxIcon from './AxIcon.vue'

type ServiceIcon = 'diagnosis' | 'build' | 'legacy' | 'internalize'

const services: Array<{
  label: string
  title: string
  description: string
  icon: ServiceIcon
  deliverables: string[]
}> = [
  {
    label: '01 · CONSULTING',
    title: 'AX 진단·컨설팅',
    description: '현재 개발·운영 체계와 병목을 분석하고, 적용 범위와 기대 효과, 검증 가능한 실증 과제를 설계합니다.',
    icon: 'diagnosis',
    deliverables: ['현행 진단', '적용 후보 과제', '기대 효과 구간', '실증 계획']
  },
  {
    label: '02 · DEVELOPMENT',
    title: 'AX 기반 신규 구축',
    description: '신규 서비스를 기획부터 디자인, 개발, QA, 배포, 운영까지 AX 방식으로 수행합니다.',
    icon: 'build',
    deliverables: ['기준 문서', 'UX/UI', '웹·앱·백엔드', '테스트·운영 문서']
  },
  {
    label: '03 · LEGACY',
    title: '레거시 AX 전환',
    description: '기존 코드와 업무 규칙을 분석해 기준 문서를 복원하고, 운영 중단 없이 기능 단위로 전환합니다.',
    icon: 'legacy',
    deliverables: ['코드 분석', '컨벤션 정렬', '기준 역추출', '점진 전환']
  },
  {
    label: '04 · ENABLEMENT',
    title: 'AX 내재화·운영 전환',
    description: '핀게이트의 작업 환경과 기준, 자동화 자산을 고객 조직에 이전하고 자립 운영을 준비합니다.',
    icon: 'internalize',
    deliverables: ['AX 하네스', '조직별 가이드', '공동 수행', '교육·관제']
  }
]
</script>
