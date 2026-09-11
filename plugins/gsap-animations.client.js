export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    const animations = new Map()

    const initAnimations = () => {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger
      if (!gsap || !ScrollTrigger) return

      // 이전 페이지의 트리거를 정리하고, 같은 요소를 다시 숨기지 않는다.
      for (const [element, animation] of animations) {
        if (!element.isConnected) {
          animation.scrollTrigger?.kill()
          animation.kill()
          animations.delete(element)
        }
      }

      // 초기 CSS와 동일하게 모션 감소 설정에서는 콘텐츠를 바로 표시한다.
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const animateOnce = (element, from, to) => {
        if (animations.has(element)) return
        animations.set(element, gsap.fromTo(element, from, to))
      }

      gsap.utils.toArray('.fade-in').forEach((element) => {
        const isInCompanyBusiness = !!element.closest('.company-business')
        if (isInCompanyBusiness) return
        const mainServicesSection = element.closest('.main-services')
        const isInServicesSection = !!mainServicesSection

        animateOnce(element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out',
            delay: 0.5,
            scrollTrigger: {
              trigger: element,
              start: 'top 60%',
              end: isInServicesSection ? () => mainServicesSection.offsetTop + mainServicesSection.offsetHeight : undefined,
              toggleActions: 'play none none none',
              invalidateOnRefresh: false,
            }
          }
        )
      })

      gsap.utils.toArray('.fade-in-left').forEach((element) => {
        animateOnce(element,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.inOut',
            scrollTrigger: { trigger: element, start: 'top 80%', toggleActions: 'play none none none' }
          }
        )
      })

      gsap.utils.toArray('.fade-in-right').forEach((element) => {
        animateOnce(element,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.inOut',
            scrollTrigger: { trigger: element, start: 'top 80%', toggleActions: 'play none none none' }
          }
        )
      })

      gsap.utils.toArray('.fade-in-scale').forEach((element) => {
        animateOnce(element,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'power2.inOut',
            scrollTrigger: { trigger: element, start: 'top 80%', toggleActions: 'play none none none' }
          }
        )
      })
    }

    let animationFrame = 0
    const runAnimations = () => {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(() => {
        initAnimations()
        window.ScrollTrigger?.refresh()
      })
    }

    // 새 페이지의 DOM이 준비된 뒤 실행한다. 첫 진입에서 두 훅이 호출돼도 중복 등록하지 않는다.
    nuxtApp.hook('app:mounted', runAnimations)
    nuxtApp.hook('page:finish', runAnimations)
  }
})
