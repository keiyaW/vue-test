import SkeletonBox from '@/components/SkeletonBox.vue'
export function lazyLoadComponent ({ componentFactory, loading, loadingData }, name) {
  let resolveComponent
  let observer
  return () => ({
    // We return a promise to resolve a
    // component eventually.
    component: new Promise((resolve) => {
      resolveComponent = resolve
    }),
    loading: {
      destroyed () {
        try {
          observer.unobserve(this.$el)
        } catch (e) {}
      },
      mounted () {
        // inspired from https://markus.oberlehner.net/blog/lazy-load-vue-components-when-they-become-visible/
        if (!('IntersectionObserver' in window)) {
          componentFactory().then(resolveComponent)
          return
        }
        observer = new IntersectionObserver((entries, self) => {
          if (entries[0].intersectionRatio <= 0) return
          self.unobserve(this.$el)
          componentFactory().then(resolveComponent)
          this.$emit('updateScreen', name)
        })
        observer.observe(this.$el)
      },
      render (createElement) {
        return createElement(loading, loadingData)
      }
    }
  })
}
export function getLazyComponent (param) {
  return {
    loading: SkeletonBox,
    loadingData: {
      props: {
        height: param.height,
        width: param.width,
        backgroundColor: param.backgroundColor
      }
    },
    componentFactory: param.component
  }
}
// delay in seconds
export function delayComponent ({ componentFactory, loading, loadingData }, delay = 0) {
  let resolver
  return () => ({
    // The component to load (should be a Promise)
    component: new Promise((resolve) => {
      resolver = resolve
    }),
    // A component to use while the async component is loading
    loading: {
      mounted () {
        setTimeout(() => {
          componentFactory().then(resolver)
        }, delay * 1000)
      },
      render (createElement) {
        return createElement(loading, loadingData)
      }
    }
  })
}