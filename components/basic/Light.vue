<style lang="stylus" scoped>
.light
  position relative
  overflow hidden
  background-repeat no-repeat
  background-size 100%
  mask-size contain
  mask-repeat no-repeat

  &:before
    content ''
    display block
    position absolute
    transform skewX(-40deg)
    width 30%
    height 100%
    margin-left -80%
    top 0
    left 0
    background linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0))
    // animation searchLights 2s ease-in 0s infinite
    animation-name searchLights
    animation-duration 3s
    animation-timing-function linear
    // animation-delay 2s
    animation-iteration-count infinite
    // animation-direction alternate


@keyframes searchLights
  0%
    left 0
  100%
    left 300%
</style>
<template lang="pug">
.light
  slot

</template>

<script>
export default {
  components: {},
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
