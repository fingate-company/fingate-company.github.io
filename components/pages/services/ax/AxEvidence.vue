<template>
  <section class="ax-section ax-evidence" aria-labelledby="ax-evidence-heading">
    <div class="container">
      <div class="ax-evidence__heading-row">
        <header class="ax-section__header" data-ax-reveal>
          <p class="ax-eyebrow ax-eyebrow--light">BEFORE / AFTER</p>
          <h2 id="ax-evidence-heading">
            실제 투입 공수 위에서,<br />
            AX 효과를 다시 계산했습니다.
          </h2>
        </header>
        <p class="ax-evidence__lead" data-ax-reveal>
          <span>자사 GA솔루션 ‘EPIKA'의 실제 투입 기록과 동일한 범위의 AX 재산정 결과를 월별로 비교분석 했습니다</span>
          <span>이 분석에는 감소하는 공수와 추가되는 통제 공수 모두가 포함되었습니다.</span>
        </p>
      </div>

      <article class="ax-evidence__comparison" data-ax-reveal aria-labelledby="change-chart-title">
        <div class="ax-evidence__comparison-head">
          <div>
            <span class="ax-evidence__kicker">ACTUAL / SIMULATED</span>
            <h3 id="change-chart-title">동일 범위 월별 투입 공수</h3>
          </div>
          <p>
            <span>자사 GA솔루션(EPIKA)의 PC, 모바일 전 범위 기준.</span>
            <span>기능과 품질은 동일하게 유지했습니다.</span>
          </p>
        </div>

        <dl class="ax-evidence__summary ax-evidence__summary--three" aria-label="실투입과 AX 재산정 핵심 비교">
          <div>
            <dt>총 수행 기간</dt>
            <dd><s>14개월</s> 12개월 <em>2개월 단축</em></dd>
          </div>
          <div class="ax-evidence__summary-result">
            <dt>총 투입 공수</dt>
            <dd><s>232</s> 139.9 M/M <em>92.1 M/M 절감</em></dd>
          </div>
          <div>
            <dt>최대 동시 투입</dt>
            <dd><s>19명</s> 13.9명 <em>5.1명 축소</em></dd>
          </div>
        </dl>

        <p class="ax-evidence__conversion">
          <span>실투입 232 M/M</span>
          <i aria-hidden="true"></i>
          <span>AX 재산정 139.9 M/M</span>
          <strong>39.7% 감소</strong>
        </p>

        <div class="ax-evidence__legend" aria-label="그래프 범례">
          <span><i class="ax-evidence__legend-key ax-evidence__legend-key--actual"></i>AS-IS 실제 투입</span>
          <span><i class="ax-evidence__legend-key ax-evidence__legend-key--simulated"></i>AX TO-BE 재산정</span>
          <span><i class="ax-evidence__legend-key ax-evidence__legend-key--shortened"></i>단축 구간</span>
          <span><i class="ax-evidence__legend-key ax-evidence__legend-key--peak"></i>최대 동시 투입</span>
        </div>

        <figure class="ax-model-chart">
          <figcaption>
            <strong>월별 동시 투입 인원 변화</strong>
            <span>각 노드의 합계가 총 투입 공수입니다.</span>
          </figcaption>

          <p class="ax-model-chart__scroll-hint" aria-hidden="true">그래프를 좌우로 움직여 14개월 전체를 확인할 수 있습니다.</p>

          <div class="ax-model-chart__viewport">
            <svg
              class="ax-model-chart__svg"
              viewBox="0 0 1120 560"
              role="img"
              aria-labelledby="effort-chart-title effort-chart-description"
            >
              <title id="effort-chart-title">AS-IS 실제 투입과 AX TO-BE 월별 투입 비교</title>
              <desc id="effort-chart-description">
                AS-IS 실제 투입은 14개월 동안 총 232 M/M이며 최대 19명입니다.
                동일 범위의 AX TO-BE 재산정은 12개월 동안 총 139.9 M/M이며 최대 13.9명입니다.
              </desc>

              <defs>
                <linearGradient id="ax-monthly-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#38c9d8" stop-opacity="0.28" />
                  <stop offset="100%" stop-color="#38c9d8" stop-opacity="0.02" />
                </linearGradient>
                <pattern id="ax-shortened-pattern" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="12" stroke="#d7b56b" stroke-opacity="0.13" stroke-width="4" />
                </pattern>
                <filter id="ax-monthly-glow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <clipPath id="ax-monthly-plot">
                  <rect :x="plot.left" :y="plot.top" :width="plot.width" :height="plot.height" rx="8" />
                </clipPath>
              </defs>

              <g class="ax-model-chart__grid" aria-hidden="true">
                <g v-for="tick in yTicks" :key="tick">
                  <line :x1="plot.left" :x2="plot.right" :y1="yPosition(tick)" :y2="yPosition(tick)" />
                  <text :x="plot.left - 18" :y="yPosition(tick) + 6" text-anchor="end">{{ tick }}</text>
                </g>
              </g>

              <text class="ax-model-chart__axis-title" :x="plot.left" y="22">월별 동시 투입 · 명</text>

              <g clip-path="url(#ax-monthly-plot)" aria-hidden="true">
                <rect
                  class="ax-model-chart__shortened-zone"
                  :x="shortenedZoneX"
                  :y="plot.top"
                  :width="plot.right - shortenedZoneX"
                  :height="plot.height"
                />
                <polygon class="ax-model-chart__monthly-area" :points="toBeAreaPoints" />
                <polyline class="ax-model-chart__line ax-model-chart__line--actual" :points="asIsPoints" />
                <polyline class="ax-model-chart__line ax-model-chart__line--simulated" :points="toBePoints" />

                <g v-for="node in asIsNodes" :key="`actual-${node.month}`">
                  <circle class="ax-model-chart__node ax-model-chart__node--actual" :cx="node.x" :cy="node.y" r="5" />
                </g>
                <g v-for="node in toBeNodes" :key="`simulated-${node.month}`">
                  <circle class="ax-model-chart__node ax-model-chart__node--simulated" :cx="node.x" :cy="node.y" r="5" />
                </g>
              </g>

              <line
                class="ax-model-chart__peak-line ax-model-chart__peak-line--actual"
                :x1="plot.left"
                :x2="plot.right"
                :y1="yPosition(19)"
                :y2="yPosition(19)"
                aria-hidden="true"
              />
              <text class="ax-model-chart__peak-label ax-model-chart__peak-label--actual" :x="plot.right - 8" :y="yPosition(19) - 12" text-anchor="end">
                실측 최대 19명
              </text>

              <line
                class="ax-model-chart__peak-line ax-model-chart__peak-line--simulated"
                :x1="plot.left"
                :x2="shortenedZoneX"
                :y1="yPosition(13.9)"
                :y2="yPosition(13.9)"
                aria-hidden="true"
              />
              <text class="ax-model-chart__peak-label ax-model-chart__peak-label--simulated" :x="shortenedZoneX - 12" :y="yPosition(13.9) - 12" text-anchor="end">
                AX 예상 최대 13.9명
              </text>

              <g class="ax-model-chart__endpoint" aria-hidden="true">
                <circle :cx="toBeEndNode.x" :cy="toBeEndNode.y" r="10" class="ax-model-chart__endpoint-ring" filter="url(#ax-monthly-glow)" />
                <circle :cx="toBeEndNode.x" :cy="toBeEndNode.y" r="5" class="ax-model-chart__endpoint-core" />
                <text :x="toBeEndNode.x - 8" :y="toBeEndNode.y + 34" text-anchor="end">AX 종료 · 12개월</text>
              </g>

              <text class="ax-model-chart__shortened-label" :x="(shortenedZoneX + plot.right) / 2" :y="plot.top + 54" text-anchor="middle">
                <tspan :x="(shortenedZoneX + plot.right) / 2">M13-M14</tspan>
                <tspan :x="(shortenedZoneX + plot.right) / 2" dy="25">2개월 단축 구간</tspan>
              </text>

              <g class="ax-model-chart__x-axis" aria-hidden="true">
                <g v-for="node in asIsNodes" :key="`axis-${node.month}`">
                  <line :x1="node.x" :x2="node.x" :y1="plot.bottom" :y2="plot.bottom + 8" />
                  <text :x="node.x" :y="plot.bottom + 34" text-anchor="middle">M{{ node.month }}</text>
                </g>
                <text :x="plot.right" :y="plot.bottom + 76" text-anchor="end">프로젝트 진행 개월</text>
              </g>
            </svg>
          </div>
        </figure>

        <section class="ax-worktype" aria-labelledby="worktype-heading">
          <div class="ax-worktype__heading">
            <div>
              <span class="ax-evidence__kicker">WORK SHIFT</span>
              <h4 id="worktype-heading">무엇이 줄고, 무엇이 남고, 무엇이 새로 생기는가</h4>
            </div>
            <p>
              <span>줄어드는 것은 만드는 일입니다.</span>
              <span>판단과 책임은 사람에게 남습니다.</span>
            </p>
          </div>

          <div class="ax-worktype__grid">
            <article v-for="item in workTypes" :key="item.label">
              <div class="ax-worktype__card-head">
                <div>
                  <strong>{{ item.label }}</strong>
                  <span>{{ item.roles }}</span>
                </div>
                <em :class="{ 'is-new': item.before === 0 }">{{ item.change }}</em>
              </div>
              <div class="ax-worktype__bars" aria-hidden="true">
                <span class="ax-worktype__bar ax-worktype__bar--actual" :style="{ width: `${item.beforeWidth}%` }"></span>
                <span class="ax-worktype__bar ax-worktype__bar--simulated" :style="{ width: `${item.afterWidth}%` }"></span>
              </div>
              <dl>
                <div><dt>실투입</dt><dd>{{ formatEffort(item.before) }}</dd></div>
                <div><dt>AX 재산정</dt><dd>{{ formatEffort(item.after) }}</dd></div>
              </dl>
            </article>
          </div>
        </section>

        <details class="ax-role-detail">
          <summary>
            <span>직군별 산정 근거 보기</span>
            <i aria-hidden="true"></i>
          </summary>
          <div class="ax-role-detail__grid">
            <article v-for="role in roles" :key="role.label">
              <div>
                <strong>{{ role.label }}</strong>
                <em :class="{ 'is-new': role.before === 0 }">{{ role.change }}</em>
              </div>
              <p><span>실투입 {{ formatEffort(role.before) }}</span><span>AX {{ formatEffort(role.after) }}</span></p>
              <small>{{ role.reason }}</small>
            </article>
          </div>
        </details>

        <aside class="ax-evidence__limit" aria-labelledby="ax-limit-heading">
          <span class="ax-evidence__limit-icon" aria-hidden="true">≠</span>
          <div>
            <h4 id="ax-limit-heading">하루 배포와 12개월 구축을 같은 단위로 비교하지 않습니다.</h4>
            <p>
              <span>DORA의 ‘1일 미만’은 코드 커밋부터 프로덕션 배포까지 걸리는 변경 리드타임입니다.</span>
              <span>이번 12개월은 기획·설계·개발·검증·승인·출시 준비를 모두 포함한 동일 범위 재산정 결과입니다.</span>
            </p>
          </div>
        </aside>

        <div class="ax-evidence__method">
          <p>
            <strong>AS-IS · 실측</strong>
            <span>당시 프로젝트를 수행한 실무 인력의 월별 실제 투입을 합산했습니다.</span>
            <span>232 M/M입니다.</span>
          </p>
          <p>
            <strong>TO-BE · 재산정</strong>
            <span>동일 범위와 산출물을 전제로 자동화 가능한 구간에만 절감률을 적용했습니다.</span>
            <span>AX 통제 역할 12 M/M은 새 비용으로 더했습니다.</span>
          </p>
          <p>
            <strong>업계 모델 · 해석 기준</strong>
            <span>COCOMO II처럼 규모가 커질수록 공수는 비선형으로 변하므로 다른 프로젝트에 같은 절감률을 일괄 적용하지 않습니다.</span>
            <span>고객 수치는 진단 단계에서 다시 산정합니다.</span>
          </p>
        </div>

        <p class="ax-evidence__note">
          <span>AS-IS는 실제 수행 기록이며, AX TO-BE는 같은 프로젝트를 현재 AX 체계로 수행한다고 가정한 보수적 시뮬레이션입니다.</span>
          <span>총사업비에는 인력투입비 외에 AX 셋업·모델 이용료·인프라·보안 검증 비용이 별도로 포함됩니다.</span>
        </p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
interface MonthlyNode {
  month: number
  value: number
  x: number
  y: number
}

const plot = {
  left: 82,
  right: 1048,
  top: 54,
  bottom: 454,
  width: 966,
  height: 400
}

const maximumPeople = 20
const yTicks = [0, 5, 10, 15, 20]
const asIsMonthly = [14, 14, 14, 16, 16, 16, 19, 18, 17.5, 17.5, 17.5, 17.5, 17.5, 17.5]
const toBeMonthly = [8, 8, 13.1, 13.1, 13.9, 12.1, 12.1, 12.1, 12.1, 12.1, 11.7, 11.6]

const yPosition = (people: number) => plot.bottom - (people / maximumPeople) * plot.height
const xPosition = (index: number) => plot.left + (index / (asIsMonthly.length - 1)) * plot.width
const formatEffort = (value: number) => `${Number.isInteger(value) ? value : value.toFixed(1)} M/M`

const toMonthlyNodes = (values: number[]): MonthlyNode[] => values.map((value, index) => ({
  month: index + 1,
  value,
  x: xPosition(index),
  y: yPosition(value)
}))

const asIsNodes = toMonthlyNodes(asIsMonthly)
const toBeNodes = toMonthlyNodes(toBeMonthly)
const toPoints = (nodes: MonthlyNode[]) => nodes.map((node) => `${node.x},${node.y}`).join(' ')
const asIsPoints = toPoints(asIsNodes)
const toBePoints = toPoints(toBeNodes)
const toBeEndNode = toBeNodes[toBeNodes.length - 1]
const shortenedZoneX = (toBeEndNode.x + asIsNodes[toBeNodes.length].x) / 2
const toBeAreaPoints = [
  `${toBeNodes[0].x},${plot.bottom}`,
  ...toBeNodes.map((node) => `${node.x},${node.y}`),
  `${toBeEndNode.x},${plot.bottom}`
].join(' ')

const workTypes = [
  { label: '만드는 일', roles: '개발 · 퍼블리싱 · 디자인', before: 172, after: 77.4, change: '-55%' },
  { label: '판단하는 일', roles: '기획 · 설계 · PMO', before: 51, after: 42.8, change: '-16%' },
  { label: '기반', roles: '인프라', before: 9, after: 7.7, change: '-15%' },
  { label: '통제', roles: '검사 · 승인 운영', before: 0, after: 12, change: '신설' }
].map((item) => {
  const maximum = Math.max(item.before, item.after)
  return {
    ...item,
    beforeWidth: maximum === 0 ? 0 : (item.before / maximum) * 100,
    afterWidth: maximum === 0 ? 0 : (item.after / maximum) * 100
  }
})

const roles = [
  { label: 'PMO', before: 14, after: 11.8, change: '-2.2', reason: '진척·이슈 자동 집계로 취합과 보고 공수를 줄입니다.' },
  { label: 'AX 리더', before: 0, after: 12, change: '+12 · 신설', reason: '검사·승인 게이트와 기준 문서를 운영합니다.' },
  { label: '기획', before: 28, after: 23.5, change: '-4.5', reason: '사람이 기준을 정하고 화면·정책 전개와 변경 반영은 자동화합니다.' },
  { label: '디자인', before: 11, after: 5, change: '-6', reason: '디자인 시스템을 기준으로 화면 변형과 반응형 대응을 생성합니다.' },
  { label: '퍼블리싱', before: 21, after: 9.4, change: '-11.6', reason: '화면 코드는 기준 문서에서 만들고 사람은 검수와 예외를 처리합니다.' },
  { label: '설계', before: 9, after: 7.5, change: '-1.5', reason: '판단 공수는 유지하고 정합성 검사만 자동화합니다.' },
  { label: '개발', before: 140, after: 63, change: '-77', reason: '생성·검사·수정 루프를 자동화하고 사람은 리뷰와 통합을 맡습니다.' },
  { label: '인프라', before: 9, after: 7.7, change: '-1.3', reason: '환경 구성과 배포 파이프라인의 반복 작업을 줄입니다.' }
]
</script>
