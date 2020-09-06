<style lang="stylus">
.light
  position relative
  float left
  margin 18px 0 0 5px
  overflow hidden
  transition-duration 5s
  &:before
    content ''
    position absolute
    width 1000px
    height 20px
    background-image linear-gradient(to bottom,transparent,rgba(255,255,255,.5),transparent)
    transform rotate(-45deg)
    animation searchLights 2s ease-in 1s infinite

@keyframes searchLights
  0%
    left -200px
    top -300px

  100%
    left -160px
    top 800px
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
