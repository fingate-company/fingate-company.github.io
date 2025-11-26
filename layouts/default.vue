<template>
  <div class="app" ref="appRef">
    <a href="#main" class="skip-link">본문으로 건너뛰기</a>
    <AppHeader />
    <main id="main" class="main">
      <slot />
    </main>
    <AppFooter />
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import ScrollToTop from '~/components/common/ScrollToTop.vue'

const appRef = ref<HTMLElement | null>(null)

// 화면 크기에 맞춰 자동 스케일 조정
const updateScale = () => {
  if (typeof window === 'undefined' || !appRef.value) return
  
  // viewport meta tag가 스케일링을 처리하므로 별도 처리 불필요
  appRef.value.style.width = '100%'
  appRef.value.style.height = 'auto'
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    updateScale()
    window.addEventListener('resize', updateScale)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateScale)
  }
})
</script>

