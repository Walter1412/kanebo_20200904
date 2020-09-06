<style lang="stylus">
.footer
  padding-bottom width1920(70)
  padding-top width1920(70)
  width 100%
  position relative
  img
    width 100%
  &-pse-link
    position absolute
    left 28%
    top 36%
    display inline-block
    width width1920(326)
    height 10%
  &-kanebo-link
    position absolute
    left 48%
    bottom 16%
    display inline-block
    width width1920(370)
    height 10%
</style>
<template lang="pug">
footer.footer
  img(src="~assets/images/project/desktop/footer/content.png")
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
