<style lang="stylus" scoped>
.default-wrapper
  width 100vw
.default-container
  width 100%
.default
  width 100%
</style>
<template lang="pug">
.default-wrapper
  .default-container
    main.defult
      Nuxt.kanebo

  transition(name="page")
    Dialog(v-if="isDialogDisplay")
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
      isDialogDisplay: 'dialog/isDisplay',
    }),
  },
  watch: {
    dialogComponentName(newValue) {
      if (this.isValid(newValue)) {
        this.setDialogDisplay(true)
      } else {
        this.setDialogDisplay(false)
      }
    },
  },
  created() {},
  mounted() {
    // ListenWindow.on('scroll', (data) => {
    //   console.log(data)
    // })
  },
  methods: {
    ...mapActions({
      setDialogDisplay: 'dialog/setDiaplay',
    }),
  },
}
</script>
