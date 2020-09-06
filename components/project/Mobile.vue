<style lang="stylus" scoped>
.section3
  &-water
    top 36%
  &-head
    position absolute
    right 0%
    top 0%
    width width768(330) !important
.section5
  padding-top 0
</style>
<template lang="pug">
.mobile
  MobileBanner0
  MobileSection.desktop-product0
    template(slot="title")
      Water
      img(src="~assets/images/project/mobile/section0/title.png")
    template(slot="content")
      MobileProducts0
  MobileSection.desktop-product1
    template(slot="title")
      Water
      img(src="~assets/images/project/mobile/section1/title.png")
    template(slot="content")
      MobileProducts1
  MobileUserSection
    template(slot="title")
      img(src="~assets/images/project/mobile/users0/title.png")
    template(slot="content")
      MobileUser0
  MobileBanner1
  MobileSection.desktop-product2
    template(slot="title")
      Water
      img(src="~assets/images/project/mobile/section2/title.png")
    template(slot="content")
      MobileProducts2
  MobileSection.desktop-product3
    template(slot="title")
      Water.section3-water
      img(src="~assets/images/project/mobile/section3/title.png")
      img.section3-head(src="~assets/images/project/mobile/section3/head.png")
    template(slot="content")
      MobileProducts3
  MobileBanner2
  MobileSection.desktop-product4
    template(slot="title")
      Water
      img(src="~assets/images/project/mobile/section4/title.png")
    template(slot="content")
      MobileProducts4
  MobileUserSection
    template(slot="title")
      img(src="~assets/images/project/mobile/users1/title.png")
    template(slot="content")
      MobileUser1
  MobileBanner3
  MobileProducts5.desktop-product5
  MobileProducts6.desktop-product6
  MobileProducts7.desktop-product7
  MobileFooter

</template>

<script>
import MobileBanner0 from '@/components/project/mobile/Banner0'
import MobileBanner1 from '@/components/project/mobile/Banner1'
import MobileBanner2 from '@/components/project/mobile/Banner2'
import MobileBanner3 from '@/components/project/mobile/Banner3'
import MobileSection from '@/components/project/mobile/Section'
import MobileUserSection from '@/components/project/mobile/UserSection'
import MobileProducts0 from '@/components/project/mobile/Products0'
import MobileProducts1 from '@/components/project/mobile/Products1'
import MobileProducts2 from '@/components/project/mobile/Products2'
import MobileProducts3 from '@/components/project/mobile/Products3'
import MobileProducts4 from '@/components/project/mobile/Products4'
import MobileProducts5 from '@/components/project/mobile/Products5'
import MobileProducts6 from '@/components/project/mobile/Products6'
import MobileProducts7 from '@/components/project/mobile/Products7'
import MobileUser0 from '@/components/project/mobile/User0'
import MobileUser1 from '@/components/project/mobile/User1'
import MobileFooter from '@/components/project/mobile/Footer'
export default {
  components: {
    MobileBanner0,
    MobileBanner1,
    MobileBanner2,
    MobileBanner3,
    MobileSection,
    MobileUserSection,
    MobileProducts0,
    MobileProducts1,
    MobileProducts2,
    MobileProducts3,
    MobileProducts4,
    MobileProducts5,
    MobileProducts6,
    MobileProducts7,
    MobileUser0,
    MobileUser1,
    MobileFooter,
  },
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
