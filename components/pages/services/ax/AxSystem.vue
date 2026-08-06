<template>
  <section class="ax-section ax-system" aria-labelledby="ax-system-heading">
    <div class="container">
      <header class="ax-section__header" data-ax-reveal>
        <p class="ax-eyebrow ax-eyebrow--light">FINGATE AX SYSTEM</p>
        <h2 id="ax-system-heading">
          도구 도입이 아니라,<br />
          일하는 방식의 전환입니다
        </h2>
        <p>
          핀게이트 AX는 하나의 기준 문서를 중심으로 AI가 반복 실무를 수행하고,<br />
          자동 검증과 사람의 승인을 거쳐 결과를 반영하는 통제된 개발 체계입니다.
        </p>
      </header>

      <ol class="ax-system__flow" data-ax-stagger>
        <li v-for="(step, index) in steps" :key="step.title" class="ax-system__step">
          <span class="ax-system__index">0{{ index + 1 }}</span>
          <div class="ax-system__node" aria-hidden="true">
            <span></span>
          </div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </li>
      </ol>

      <div class="ax-system__principle" data-ax-reveal>
        <span>HUMAN IN CONTROL</span>
        <p>
          AI가 만드는 일을 맡고, 사람은 기준을 정하고 판단합니다.<br />
          <strong>승인되지 않은 결과는 반영되지 않습니다.</strong>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: '하나의 기준',
    description: '요구사항, 정책, 화면, 연동 규격을 하나의 기준으로 정리합니다.'
  },
  {
    title: 'AI 수행',
    description: '설계, 코드, 테스트, 문서와 보고를 기준에 맞춰 생성합니다.'
  },
  {
    title: '자동 검증',
    description: '산출물이 기준과 일치하는지 반복해서 검사하고 수정합니다.'
  },
  {
    title: '사람 승인',
    description: '사람이 결과와 근거를 확인한 뒤 반영 여부를 결정합니다.'
  },
  {
    title: '기록 축적',
    description: '변경, 검증, 승인, 진척 이력이 다음 업무의 자산으로 남습니다.'
  }
]
</script>
