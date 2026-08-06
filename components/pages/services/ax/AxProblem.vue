<template>
  <section class="ax-section ax-problem" aria-labelledby="ax-problem-heading">
    <div class="container">
      <header class="ax-section__header ax-section__header--dark" data-ax-reveal>
        <p class="ax-eyebrow">WHY AX</p>
        <h2 id="ax-problem-heading">
          AI를 도입했는데,<br />
          왜 팀의 속도는 그대로일까요?
        </h2>
        <p>
          업무 하나는 빨라졌지만,<br />
          프로젝트 안에서는 여전히 같은 경험이 반복됩니다.
        </p>
      </header>

      <div class="ax-problem__cards" data-ax-stagger>
        <article v-for="item in problems" :key="item.number" class="ax-problem__card">
          <span class="ax-problem__number">CASE {{ item.number }}</span>
          <h3>{{ item.title }}</h3>
          <p>
            <span v-for="sentence in item.description" :key="sentence">{{ sentence }}</span>
          </p>
        </article>
      </div>

      <p class="ax-problem__statement" data-ax-reveal>
        세 장면의 공통점은 <strong>사람이나 도구</strong>가 아닙니다.<br />
        전달하고 확인하고 결정하는 방식이 그대로라는 것입니다.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const problems = [
  {
    number: '01',
    title: '보고를 준비하느라, 중요한 일이 잠시 멈춥니다',
    description: [
      '진행 상황을 확인하려고 여러 자료를 모아 다시 정리합니다.',
      '정작 중요한 문제는 보고가 끝난 뒤에야 함께 보게 됩니다.'
    ]
  },
  {
    number: '02',
    title: '담당자가 바뀌면, 시스템을 다시 배웁니다',
    description: [
      '문서는 남아 있어도 지금의 시스템과 다른 경우가 많습니다.',
      '새 담당자는 코드와 이전 기록을 살피며 업무를 다시 이해합니다.'
    ]
  },
  {
    number: '03',
    title: '만드는 일이 끝난 뒤에야, 검증을 시작합니다',
    description: [
      '하나를 고치면 어디까지 다시 확인해야 하는지 알기 어렵습니다.',
      '문제를 늦게 발견할수록 이미 끝낸 일을 다시 하게 됩니다.'
    ]
  }
]
</script>
