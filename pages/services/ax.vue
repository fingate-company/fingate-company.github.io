<template>
  <div class="ax-page" :style="{ '--ax-hero-image': `url('${appBaseURL}images/ax/ax-hero.png')` }">
    <AxHero />
    <AxProblem />
    <AxSystem />
    <AxServices />
    <AxEvidence />
    <AxLegacy />
    <AxControl />
    <AxRoadmap />
    <AxFaq />
    <AxContact />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AxHero from '~/components/pages/services/ax/AxHero.vue'
import AxProblem from '~/components/pages/services/ax/AxProblem.vue'
import AxSystem from '~/components/pages/services/ax/AxSystem.vue'
import AxServices from '~/components/pages/services/ax/AxServices.vue'
import AxEvidence from '~/components/pages/services/ax/AxEvidence.vue'
import AxLegacy from '~/components/pages/services/ax/AxLegacy.vue'
import AxControl from '~/components/pages/services/ax/AxControl.vue'
import AxRoadmap from '~/components/pages/services/ax/AxRoadmap.vue'
import AxFaq from '~/components/pages/services/ax/AxFaq.vue'
import AxContact from '~/components/pages/services/ax/AxContact.vue'

const seoData = useSEO('services/ax')
useHead(seoData)

const appBaseURL = useRuntimeConfig().app.baseURL

let context: gsap.Context | null = null

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  context = gsap.context(() => {
    gsap.utils.toArray<HTMLElement>('[data-ax-reveal]').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 82%',
            once: true
          }
        }
      )
    })

    gsap.utils.toArray<HTMLElement>('[data-ax-stagger]').forEach((group) => {
      const children = Array.from(group.children)
      gsap.fromTo(
        children,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.72,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: group,
            start: 'top 82%',
            once: true
          }
        }
      )
    })

    gsap.utils.toArray<HTMLElement>('.ax-chart__fill').forEach((bar) => {
      gsap.fromTo(
        bar,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.25,
          ease: 'power3.out',
          transformOrigin: 'left center',
          scrollTrigger: {
            trigger: '.ax-evidence__comparison',
            start: 'top 72%',
            once: true
          }
        }
      )
    })

    ScrollTrigger.refresh()
  })
})

onBeforeUnmount(() => {
  context?.revert()
})
</script>
