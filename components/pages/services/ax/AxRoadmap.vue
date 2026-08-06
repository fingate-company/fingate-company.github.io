<template>
  <section class="ax-section ax-roadmap" aria-labelledby="ax-roadmap-heading">
    <div class="container">
      <header class="ax-section__header" data-ax-reveal>
        <p class="ax-eyebrow ax-eyebrow--light">START SMALL, SCALE WITH PROOF</p>
        <h2 id="ax-roadmap-heading">
          크게 믿기보다,<br />
          작게 확인하십시오
        </h2>
        <p>
          실제 체계를 확인하고, 작은 과제에서 귀사의 수치를 측정한 뒤,<br />
          검증된 범위만 확장합니다.
        </p>
      </header>

      <ol class="ax-roadmap__steps" data-ax-stagger>
        <li v-for="(step, index) in roadmap" :key="step.title">
          <span class="ax-roadmap__number">0{{ index + 1 }}</span>
          <div class="ax-roadmap__dot" aria-hidden="true"></div>
          <div class="ax-roadmap__copy">
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
            <small>{{ step.outcome }}</small>
          </div>
        </li>
      </ol>

      <p class="ax-roadmap__statement" data-ax-reveal>
        각 단계의 결과를 확인한 뒤<br />
        <strong>다음 단계 진행 여부를 결정할 수 있습니다.</strong>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const roadmap = [
  {
    title: '소개 세션',
    description: '실제 수행 체계와 적용 사례를 확인합니다.',
    outcome: '확인 · AX 체계의 실재'
  },
  {
    title: '현행 진단',
    description: '현재 구조와 병목을 분석하고 실증 과제를 선정합니다.',
    outcome: '산출 · 적용 범위와 기대 효과'
  },
  {
    title: '소규모 실증',
    description: '실제 과제를 수행해 속도, 품질, 통제 수준을 측정합니다.',
    outcome: '측정 · 귀사 과제의 실제 수치'
  },
  {
    title: '확산·내재화',
    description: '검증된 범위부터 확대하고 공동 수행으로 방법을 이전합니다.',
    outcome: '전환 · 자립 운영 체계'
  }
]
</script>
