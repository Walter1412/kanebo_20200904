<style lang="stylus" scoped>
.water
  width 40%
  border 1px solid red
  position absolute
  left 0
  top 0
  animation hue 5s linear infinite
  img
    width 100%

@keyframes hue
  from
    filter hue-rotate(0deg)
  to
    filter hue-rotate(360deg)
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
