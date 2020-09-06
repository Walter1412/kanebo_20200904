<style lang="stylus" scoped>
.dialog-wrapper
  width 100%
  height 100%
  position absolute
  left 0
  top 0
  display flex
  justify-content center
  align-items center
  background-color rgba(0, 0, 0, 0.3)
  z-index $zIndexObject['dialog']

.dialog-container
  min-width 400px
  background-color #ffffff

.dialog
  width 100%
  height 100%
</style>
<template lang="pug">
.dialog-wrapper
  .dialog-container
    component.dialog(:is="dialogComponentName")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      dialogComponentName: 'dialog/componentName',
    }),
  },
  watch: {
    $route() {
      this.setDialogComponent('')
    },
  },
  created() {},
  mounted() {},
  destroyed() {
    this.emptyDailogData()
    this.emptyDailogOptions()
  },
  methods: {
    ...mapActions({
      setDialogData: 'dialog/setData',
      setDialogConfig: 'dialog/setConfig',
    }),
    emptyDailogData() {
      this.setDialogData('')
    },
    emptyDailogOptions() {
      this.setDialogConfig({})
    },
  },
}
</script>
