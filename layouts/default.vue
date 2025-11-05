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
  
  const viewportWidth = 1920 // 고정 viewport 너비
  const screenWidth = window.innerWidth
  
  if (screenWidth < viewportWidth) {
    const scale = screenWidth / viewportWidth
    appRef.value.style.transform = `scale(${scale})`
    appRef.value.style.transformOrigin = 'top left'
    appRef.value.style.width = `${viewportWidth}px`
    appRef.value.style.height = `${window.innerHeight / scale}px`
  } else {
    appRef.value.style.transform = 'none'
    appRef.value.style.width = '100%'
    appRef.value.style.height = 'auto'
  }
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

