<style lang="stylus" scoped>
.footer
  padding-bottom width768(70)
  padding-top width768(70)
  width 100%
  position relative
  img
    width 100%
  &-pse-link
    position absolute
    left 36%
    top 43%
    display inline-block
    width width768(210)
    height 10%
  &-kanebo-link
    position absolute
    left 69%
    bottom 16%
    display inline-block
    width width768(230)
    height 10%
</style>
<template lang="pug">
footer.footer
  img(src="~assets/images/project/mobile/footer/content.png")
  a.footer-pse-link(href="https://pse.is/MV4GF" target="_blank")
  a.footer-kanebo-link(href="http://www.kanebo-tw.net/" target="_blank")
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
