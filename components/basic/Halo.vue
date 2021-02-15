<style lang="stylus" scoped>
.halo
  width 100%
  animation fade 1500ms infinite
  position absolute
  left 0%
  top 0%
  content url("~assets/images/project/desktop/background0.png")
  +RWD-below($tablet)
    content url("~assets/images/project/mobile/background0.png")

@keyframes fade
  from
    opacity 1.0
  50%
    opacity 0.4
  to
    opacity 1.0
</style>
<template lang="pug">
img.halo
</template>
<script>
export default {
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  // methods: {},
}
</script>
