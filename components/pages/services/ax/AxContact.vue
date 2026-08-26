<template>
  <section class="ax-contact" aria-labelledby="ax-contact-heading">
    <div class="ax-contact__image" aria-hidden="true"></div>
    <div class="ax-contact__shade" aria-hidden="true"></div>
    <div class="container ax-contact__inner" data-ax-reveal>
      <p class="ax-eyebrow ax-eyebrow--light">START YOUR AX JOURNEY</p>
      <h2 id="ax-contact-heading">
        작은 과제에서부터 숫자를 확인해 보세요
      </h2>
      <p>
        AX적용 가능 범위와 작게 검증할 수 있는 시작점을 함께 찾겠습니다.
      </p>
      <NuxtLink to="/contact" class="ax-button ax-button--primary">
        문의하기
        <AxIcon name="arrow" />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import AxIcon from './AxIcon.vue'
</script>
