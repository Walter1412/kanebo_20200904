<style lang="stylus" scoped>
.default-wrapper
  width 100vw
  position relative
  overflow-x hidden
.default-container
  width 100%
.default
  width 100%
.menu
  position absolute
  left 0
  top 0
  width width1920(97)
  margin-top 40px
  margin-left 40px
  cursor pointer
  +RWD-below($tablet)
    margin-top 20px
    margin-left 20px
    width width768(70)
    img
      content url('~assets/images/project/desktop/menu.png')

  img
    width 100%
  z-index $zIndexObject['toTop']
.to-top
  position fixed
  right 0
  bottom 0
  width width1920(97)
  margin-right 40px
  margin-bottom 40px
  cursor pointer
  +RWD-below($tablet)
    width width768(97)
    margin-right 20px
    margin-bottom 20px

  img
    width 100%
  z-index $zIndexObject['toTop']
</style>
<template lang="pug">
.default-wrapper
  .default-container
    main.defult
      Nuxt.kanebo
  .menu(@click="displayMenu")
    img(src="~assets/images/project/desktop/menu_button.png")
  transition(name="page")
    template(v-if="isDiaplayTop")
      .to-top(@click="scrollToTop")
        img(src="~assets/images/project/desktop/to_top.png")
  transition(name="page")
    Dialog(v-if="isDialogDisplay")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {},
  props: {},
  data() {
    return {
      isDiaplayTop: false,
    }
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
    ListenWindow.on('scroll', this.onScoll)
  },
  beforeDestroy() {
    ListenWindow.off('scroll', this.onScoll)
  },
  methods: {
    ...mapActions({
      setDialogComponentName: 'dialog/setComponentName',
      setDialogDisplay: 'dialog/setDisplay',
    }),
    displayMenu() {
      if (this.isDialogDisplay) {
        this.setDialogComponentName('')
      } else {
        this.setDialogComponentName('MenuBar')
      }
    },
    scrollToTop() {
      this.scrollTo(0)
    },
    scrollTo(value = 0) {
      window.scrollTo({ top: value, behavior: 'smooth' })
    },
    onScoll({ scrollTop }) {
      if (scrollTop > 500) {
        this.isDiaplayTop = true
      } else {
        this.isDiaplayTop = false
      }
    },
  },
}
</script>
