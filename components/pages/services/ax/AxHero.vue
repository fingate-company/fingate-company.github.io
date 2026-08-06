<template>
  <section class="ax-hero" aria-labelledby="ax-hero-heading">
    <div class="ax-hero__image" aria-hidden="true"></div>
    <div class="ax-hero__shade" aria-hidden="true"></div>
    <div class="ax-hero__grid" aria-hidden="true"></div>

    <div class="container ax-hero__inner">
      <div class="ax-hero__content">
        <p class="ax-eyebrow ax-eyebrow--light">FINGATE AX</p>
        <h1 id="ax-hero-heading" class="ax-hero__title">
          AI를 쓰는 개발을 넘어,<br />
          <em>AI가 일하는 개발 체계로</em>
        </h1>
        <p class="ax-hero__description">
          핀게이트는 하나의 기준에서 기획·디자인·개발·검증·운영이 이어지는 AX 수행 체계를 구축합니다.<br />
          신규 서비스는 처음부터, 레거시는 운영을 이어가며 전환합니다.
        </p>
        <ul class="ax-hero__scopes" aria-label="AX 서비스 범위">
          <li>AX 진단·컨설팅</li>
          <li>AX 기반 신규 구축</li>
          <li>레거시 AX 전환</li>
          <li>AX 내재화</li>
        </ul>
        <NuxtLink to="/contact" class="ax-button ax-button--primary">
          문의하기
          <AxIcon name="arrow" />
        </NuxtLink>
      </div>
    </div>

    <ScrollDown />
  </section>
</template>

<script setup lang="ts">
import ScrollDown from '~/components/common/ScrollDown.vue'
import AxIcon from './AxIcon.vue'
</script>
