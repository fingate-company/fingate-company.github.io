<template>
  <section class="ax-section ax-faq" aria-labelledby="ax-faq-heading">
    <div class="container">
      <div class="ax-faq__layout">
        <header class="ax-section__header ax-section__header--dark" data-ax-reveal>
          <p class="ax-eyebrow">QUESTIONS, ANSWERED</p>
          <h2 id="ax-faq-heading">
            좋은 질문일수록,<br />
            AX는 더 잘 견뎌야 합니다
          </h2>
          <p>속도보다 먼저 확인해야 할 질문에 답합니다.</p>
        </header>

        <div class="ax-faq__list" data-ax-reveal>
          <details v-for="(item, index) in faqs" :key="item.question" :open="index === 0">
            <summary>
              <span>0{{ index + 1 }}</span>
              <strong>{{ item.question }}</strong>
              <i aria-hidden="true"></i>
            </summary>
            <p>
              <span v-for="sentence in item.answer" :key="sentence">{{ sentence }}</span>
            </p>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqs = [
  {
    question: 'AI가 만든 결과를 믿어도 됩니까?',
    answer: ['믿는 대신 검증합니다.', '기준 대조, 자동 검사, 사람 승인까지 통과한 결과만 시스템에 반영합니다.']
  },
  {
    question: '우리 데이터가 외부로 나가지 않습니까?',
    answer: ['업무 데이터와 소스코드의 저장 위치는 고객의 보안 정책에 맞춥니다.', '외부 처리가 필요한 경우에도 허용된 요청만 전달하고 그 이력을 남깁니다.']
  },
  {
    question: '기존 개발 조직은 어떻게 됩니까?',
    answer: ['역할이 없어지는 것이 아니라 반복 작업에서 판단과 승인 중심으로 이동합니다.', '공동 수행과 교육으로 고객 조직의 자립 운영을 지원합니다.']
  },
  {
    question: '모든 기술 스택에 적용할 수 있습니까?',
    answer: ['현재 구조와 컨벤션을 먼저 진단하고 고객 환경에 맞는 하네스와 기준을 구성합니다.', '기술적 전제가 맞지 않는 영역은 진단 단계에서 명확히 구분합니다.']
  },
  {
    question: '같은 절감률을 보장합니까?',
    answer: ['아닙니다.', '공개된 AS-IS 수치는 실제 수행 기록이며, AX TO-BE는 동일 범위를 전제로 한 보수적 재산정입니다.', '고객사의 효과는 대상 시스템을 진단하고 작은 과제로 실증해 확인합니다.']
  }
]
</script>
