<template>
  <section class="ax-section ax-legacy" aria-labelledby="ax-legacy-heading">
    <div class="ax-legacy__glow" aria-hidden="true"></div>
    <div class="container">
      <div class="ax-legacy__intro">
        <header class="ax-section__header" data-ax-reveal>
          <p class="ax-eyebrow ax-eyebrow--light">TWO STARTING POINTS</p>
          <h2 id="ax-legacy-heading">
            처음부터 만들 수도,<br />
            이미 있는 시스템에서 시작할 수도 있습니다
          </h2>
          <p>
            신규 구축은 기준에서 결과를 만들고, 레거시 전환은 기존 결과에서 기준을 복원합니다.<br />
            출발점은 달라도 도착하는 AX 운영 체계는 같습니다.
          </p>
        </header>

        <div class="ax-legacy__switch" data-ax-reveal>
          <button
            v-for="(tab, index) in tabs"
            :key="tab.label"
            type="button"
            :class="{ active: activeTab === index }"
            :aria-pressed="activeTab === index"
            @click="activeTab = index"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <div class="ax-legacy__panel" data-ax-reveal>
        <Transition name="ax-panel" mode="out-in">
          <div :key="activeTab" class="ax-legacy__panel-inner">
            <div class="ax-legacy__panel-copy">
              <span>{{ currentTab.eyebrow }}</span>
              <h3>{{ currentTab.title }}</h3>
              <p>{{ currentTab.description }}</p>
              <strong>{{ currentTab.message }}</strong>
            </div>
            <ol class="ax-legacy__process">
              <li v-for="(step, index) in currentTab.steps" :key="step">
                <span>0{{ index + 1 }}</span>
                <p>{{ step }}</p>
              </li>
            </ol>
          </div>
        </Transition>
      </div>

      <div class="ax-legacy__record" data-ax-reveal>
        <div class="ax-legacy__record-title">
          <span>LEGACY TRANSFORMATION · PRINCIPLE</span>
          <h3>운영을 이어가며 AX 체계로 전환합니다</h3>
          <p>전환 대상을 기능 단위로 나누어 운영과 전환을 병행합니다</p>
        </div>
        <div class="ax-legacy__record-main">
          <strong>운영 유지</strong>
          <span>×</span>
          <strong>기능별 전환</strong>
        </div>
        <div class="ax-legacy__record-stats">
          <div v-for="stat in legacyStats" :key="stat.label">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </div>
        </div>
        <p class="ax-evidence__note">
          <span>전체 시스템을 한 번에 교체하지 않고 영향 범위를 확인한 기능부터 순차적으로 전환합니다.</span>
          <span>전환 기간은 시스템 규모·기술 부채·연동 복잡도·테스트 환경에 따라 달라집니다.</span>
          <span>고객사 적용 기간은 진단과 소규모 실증을 통해 산정합니다.</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const activeTab = ref(0)

const tabs = [
  {
    label: '신규 구축',
    eyebrow: 'NEW BUILD · FORWARD FLOW',
    title: '기준에서 결과를 만듭니다',
    description: '처음부터 문서·화면·코드·검증이 같은 기준을 보도록 설계해 전달과 재작업을 줄입니다.',
    message: '기획의 완성도가 곧 AX 결과의 품질이 됩니다.',
    steps: ['기준 확립', '기획 검수', '설계', '구현·자동 검증', '사람 승인·배포']
  },
  {
    label: '레거시 전환',
    eyebrow: 'LEGACY · REVERSE FLOW',
    title: '기존 결과에서 기준을 복원합니다',
    description: '기존 코드와 업무 규칙을 분석해 기준 문서를 역추출하고, 기능 단위로 AX 개발 체계에 편입합니다.',
    message: '시스템을 버리는 재구축이 아니라, 운영을 이어가며 개발 방식을 바꿉니다.',
    steps: ['전체 코드 분석', '컨벤션 정렬', '기준 문서 역추출', '기능 단위 점진 전환', 'AX 운영 진입']
  }
]

const currentTab = computed(() => tabs[activeTab.value])

const legacyStats = [
  { value: '코드', label: '전체 구조 분석' },
  { value: '연동', label: '외부 영향 추적' },
  { value: '화면', label: '업무 흐름 복원' },
  { value: '데이터', label: '정합성 확인' }
]
</script>
