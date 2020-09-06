<style lang="stylus" scoped>
.move
  transform translate(100%,0)
  animation-duration 2s transform
  transition-duration 2s
  &[data-is-on=true]
    transform translate(0,0)
</style>
<template lang="pug">
.move(:data-is-on="isOn" ref="move")
  slot
</template>

<script>
export default {
  props: {},
  data() {
    return {
      isOn: false,
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    ListenWindow.on('scroll', this.onScroll)
  },
  beforeDestroy() {
    ListenWindow.off('scroll', this.onScroll)
  },
  methods: {
    onScroll(data) {
      const top = this.$refs.move.getBoundingClientRect().top

      if (top < 200) {
        this.isOn = true
      }
    },
  },
}
</script>
