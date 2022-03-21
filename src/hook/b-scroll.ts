import BScroll from '@better-scroll/core'
import MouseWheel from '@better-scroll/mouse-wheel'
BScroll.use(MouseWheel)
import { onBeforeUnmount } from 'vue'

export function initBScroll(el: HTMLElement, option: object = {}) {
  const bs = new BScroll(el, {
    ...option,
    bounce: {
      top: true,
      bottom: true,
      left: true,
      right: true
    },
    mouseWheel: {
      speed: 20,
      invert: false,
      easeTime: 300
    }
  })

  const refresh: () => void = () => {
    bs?.refresh()
  }

  onBeforeUnmount(() => {
    bs?.destroy()
    window.removeEventListener('resize', refresh)
  })

  window.addEventListener('resize', refresh)
}
