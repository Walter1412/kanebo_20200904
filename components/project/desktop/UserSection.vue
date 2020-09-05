<style lang="stylus">
.section-user-wrapper
  with 100%
  padding-top 70px
.section-user-container
  width 100%
.section-user
  &-title
    position relative
    width 100%
    margin-bottom -11px
    z-index 2000
    img
      width 100%
  &-content
    position relative
</style>
<template lang="pug">
.section-user-wrapper
  .section-user-container
    .section-user
      .section-user-title
        slot(name="title")
      slot.section-user-content(name="content")

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
