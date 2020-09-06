<style lang="stylus" scoped>
.index
  width 100%
</style>
<template lang="pug">
.index
  template(v-if="isMobile")
    Mobile
  template(v-else)
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
    }
  },
  computed: {},
  watch: {},
  created() {
    ListenWindow.on('resize', (data) => {
      const { width } = data
      if (width < 769) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    })
  },
  mounted() {},
  methods: {},
}
</script>
