<style lang="stylus" scoped>
.section0-wrapper
  width 100%
  padding-top 70px
.section0-container
  width 100%
.section0
  &-title
    width 100%
    background-image url('~assets/images/project/desktop/water.png')
    background-repeat no-repeat
    background-size contain
    padding-bottom width1920(80)
    animation hue 6s linear infinite

    img
      width 100%
@keyframes hue
  from
    filter hue-rotate(0deg)
  to
    filter hue-rotate(360deg)
</style>
<template lang="pug">
.section0-wrapper
  .section0-container
    .section0
      .section0-title
        slot(name="title")
      slot(name="content")

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
  methods: {},
}
</script>
