<style lang="stylus" scoped>
.index
  width 100%
</style>
<template lang="pug">
.index
  template(v-if="isMobile")
    Mobile
  template(v-if="isDesktop")
    Desktop
</template>

<script>
import Desktop from '@/components/project/Desktop'
import Mobile from '@/components/project/Mobile'
export default {
  components: {
    Desktop,
    Mobile,
  },
  props: {},
  data() {
    return {
      isMobile: false,
      isDesktop: false,
    }
  },
  computed: {},
  watch: {},
  created() {
    ListenWindow.on('resize', (data) => {
      const { width } = data
      if (width <= 768) {
        this.isMobile = true
        this.isDesktop = false
      } else {
        this.isDesktop = true
        this.isMobile = false
      }
    })
  },
  mounted() {
    // ListenWindow.init()
    ListenWindow.onResize()
  },
  methods: {},
}
</script>
