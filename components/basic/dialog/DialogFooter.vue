<style lang="stylus" scoped>
.dialog-footer
  height 70px
  width 100%
  padding 20px 25px
  display flex
  justify-content space-between
</style>
<template lang="pug">
.dialog-footer
  .dialog-footer__left-zone
    slot(name="footerLeft")
  .dialog-footer__right-zone
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
  methods: {},
}
</script>
