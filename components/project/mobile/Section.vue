<style lang="stylus" scoped>
.section0-wrapper
  width 100%
  padding-top width768(70)
.section0-container
  width 100%
.section0
  &-title
    position relative
    width 100%
    padding-bottom width768(80)
    img
      width 100%
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
