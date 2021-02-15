<style lang="stylus" scoped>
.water
  width width1920(660)
  position absolute
  right 64%
  top 5%
  animation hue 5s linear infinite
  +RWD-below($tablet)
    right 68%
    top 0%
  img
    width 100%

@keyframes hue
  from
    filter rotate(0deg)
  to
    filter rotate(360deg)
</style>
<template lang="pug">
.water
  img(alt="" src="~assets/images/project/desktop/water.png")

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
