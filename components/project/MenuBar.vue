<style lang="stylus" scoped>
.menu-item
  width width1920(610)
  margin-bottom 20px
  cursor pointer
  +RWD-below($tablet)
    width width768(420)
  img
    width 100%
</style>
<template lang="pug">
.menu-bar
  .menu-item(@click="getWhere('desktop-product0')")
    img(src="~assets/images/project/desktop/menu/0.png")
  .menu-item(@click="getWhere('desktop-product1')")
    img(src="~assets/images/project/desktop/menu/1.png")
  .menu-item(@click="getWhere('desktop-product2')")
    img(src="~assets/images/project/desktop/menu/2.png")
  .menu-item(@click="getWhere('desktop-product3')")
    img(src="~assets/images/project/desktop/menu/3.png")
  .menu-item(@click="getWhere('desktop-product4')")
    img(src="~assets/images/project/desktop/menu/4.png")
  .menu-item(@click="getWhere('desktop-product5')")
    img(src="~assets/images/project/desktop/menu/5.png")
  .menu-item(@click="getWhere('desktop-product6')")
    img(src="~assets/images/project/desktop/menu/6.png")
  .menu-item(@click="getWhere('desktop-product7')")
    img(src="~assets/images/project/desktop/menu/7.png")
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    ...mapActions({
      setDialogComponentName: 'dialog/setComponentName',
    }),
    getWhere(name = 'desktop-banner0') {
      const { offsetTop } = document.getElementsByClassName(name)[0]
      this.goWhaere(offsetTop)
    },
    goWhaere(value = 0) {
      window.scrollTo({ top: value, behavior: 'smooth' })
      this.setDialogComponentName('')
    },
  },
}
</script>
