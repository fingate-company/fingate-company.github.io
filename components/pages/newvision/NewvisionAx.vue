<template>
  <section ref="sectionRef" class="newvision-ax" aria-labelledby="newvision-ax-heading">
    <div class="container">
      <div class="newvision-ax__card">
        <div class="newvision-ax__image" aria-hidden="true"></div>
        <div class="newvision-ax__shade" aria-hidden="true"></div>
        <div class="newvision-ax__content">
          <p class="newvision-ax__eyebrow">FROM AI PRODUCT TO AX DELIVERY</p>
          <h2 id="newvision-ax-heading">
            AI로 만드는 제품을 넘어, AI가 일하는 방식까지
          </h2>
          <p>
            핀게이트는 보험 업무를 AI로 혁신하는 동시에 기획·디자인·개발·검증·운영 전 과정을 AX 체계로 전환합니다.
          </p>
          <ul aria-label="핀게이트 AX 범위">
            <li>AX 진단·컨설팅</li>
            <li>AX 기반 신규 구축</li>
            <li>레거시 AX 전환</li>
          </ul>
          <NuxtLink to="/services/ax" class="button newvision-ax__button">
            자세히 보기
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const sectionRef = ref<HTMLElement | null>(null)
let context: gsap.Context | null = null

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  context = gsap.context(() => {
    gsap.fromTo(
      '.newvision-ax__card',
      { opacity: 0, y: 56 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 74%',
          once: true
        }
      }
    )
  }, sectionRef.value || undefined)
})

onBeforeUnmount(() => {
  context?.revert()
})
</script>
