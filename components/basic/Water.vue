<style lang="stylus" scoped>
.flow-colorful
    max-width 600px
    height 150px
    background linear-gradient(to right, red, orange, yellow, green, cyan, blue, purple)
    animation hue 6s linear infinite

@keyframes hue
  from
    filter hue-rotate(0deg)
  to
    filter hue-rotate(360deg)
</style>
<template lang="pug">
.flow-colorful
  img(src="~assets/images/project/desktop/banner0/title.png")

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
