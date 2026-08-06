<template>
  <section class="ax-section ax-control" aria-labelledby="ax-control-heading">
    <div class="container">
      <header class="ax-section__header ax-section__header--dark" data-ax-reveal>
        <p class="ax-eyebrow">CONTROLLED DELIVERY</p>
        <h2 id="ax-control-heading">
          빠른 것만으로는 충분하지 않습니다
        </h2>
        <p>
          결과가 기준에 맞는지, 누가 승인했는지, 데이터와 비용은 통제되는지.<br />
          속도와 함께 확인할 수 있어야 AX입니다.
        </p>
      </header>

      <div class="ax-control__grid" data-ax-stagger>
        <article v-for="item in controls" :key="item.title" class="ax-control__card">
          <span class="ax-control__icon"><AxIcon :name="item.icon" /></span>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </article>
      </div>

      <div class="ax-control__architecture" data-ax-reveal>
        <div class="ax-control__architecture-label">
          <span>AX DELIVERY ARCHITECTURE</span>
          <strong>고객의 기준이 들어가고,<br />결과와 근거가 남습니다.</strong>
        </div>
        <div class="ax-control__architecture-flow" aria-label="고객 기준과 자산, 핀게이트 AX 수행과 통제, 고객 귀속 결과의 전달 아키텍처">
          <div>
            <span>INPUT</span>
            <strong>고객 기준·자산</strong>
            <small>업무 정책 · 소스코드 · 디자인</small>
          </div>
          <AxIcon name="arrow" />
          <div class="is-active">
            <span>FINGATE AX</span>
            <strong>수행·검증·승인</strong>
            <small>하네스 · 에이전트 · 품질 게이트</small>
          </div>
          <AxIcon name="arrow" />
          <div>
            <span>OUTPUT</span>
            <strong>고객 귀속 결과</strong>
            <small>코드 · 문서 · 테스트 · 이력</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AxIcon from './AxIcon.vue'

type ControlIcon = 'quality' | 'approval' | 'security' | 'cost' | 'audit' | 'neutral'

const controls: Array<{ title: string; description: string; icon: ControlIcon }> = [
  {
    title: '품질 게이트',
    description: '문서·화면·코드·테스트가 하나의 기준과 일치하는지 자동으로 대조합니다.',
    icon: 'quality'
  },
  {
    title: '사람 승인',
    description: '사람이 변경 이유와 검증 결과를 확인한 뒤 승인한 결과만 반영합니다.',
    icon: 'approval'
  },
  {
    title: '보안 경계',
    description: '업무 데이터는 정해진 경계 안에 두고 허용된 요청만 외부 처리 환경으로 전달합니다.',
    icon: 'security'
  },
  {
    title: '비용 관제',
    description: '계정·업무·모델별 사용량을 측정하고 예산 한도와 처리 위치를 관리합니다.',
    icon: 'cost'
  },
  {
    title: '감사 추적',
    description: '변경, 검증, 승인, 사용량 이력을 보존해 진행 상황과 판단 근거를 추적합니다.',
    icon: 'audit'
  },
  {
    title: '기술 중립성',
    description: '모델과 인프라는 목적과 보안 정책에 따라 교체할 수 있도록 구성합니다.',
    icon: 'neutral'
  }
]
</script>
