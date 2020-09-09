<style lang="stylus" scoped>
.water
  width width1920(660)
  position absolute
  right 55%
  top 5%
  // animation hue 5s linear infinite
  +RWD-below($tablet)
    right 68%
    top 0%
  img
    width 100%

@keyframes hue
  from
    filter hue-rotate(0deg)
  to
    filter hue-rotate(180deg)
</style>
<template lang="pug">
.water
  img(src="~assets/images/project/desktop/water.png")

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
