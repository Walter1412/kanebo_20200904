<style lang="stylus" scoped>
.desktop
  width 100%
  .section5
    background-image url('~assets/images/project/desktop/section5/background.png')
    background-size cover
    background-color #fefcfe
    background-position center center
    background-repeat no-repeat
    padding-top 0
</style>
<template lang="pug">
.desktop
  Banner0.desktop-banner0
  //- 緊緻精華特區
  Section.desktop-product0
    template(slot="title")
      Water
      img(src="~assets/images/project/desktop/section0/title.png")
    template(slot="content")
      Products0
  //- 年度回饋
  Section.desktop-product1
    template(slot="title")
      Water
      img(src="~assets/images/project/desktop/section1/title.png")
    template(slot="content")
      Products1
  UserSection.desktop-user0
    template(slot="title")
      img(src="~assets/images/project/desktop/users0/title.png")
    template(slot="content")
      User0
  Banner1.desktop-banner1
  //- 雙重保濕
  Section.desktop-product2
    template(slot="title")
      Water
      img(src="~assets/images/project/desktop/section2/title.png")
    template(slot="content")
      Products2
  //- 女神推
  Section.desktop-product3
    template(slot="content")
      Products3
  Banner2.desktop-banner2
  //- 潔淨特優專區
  Section.desktop-product4
    template(slot="title")
      Water
      img(src="~assets/images/project/desktop/section4/title.png")
    template(slot="content")
      Products4
  UserSection.desktop-user1
    template(slot="title")
      img(src="~assets/images/project/desktop/users1/title.png")
    template(slot="content")
      User1
  Banner3.desktop-banner3
  //- 彩妝超夯好物
  Section.section5.desktop-product5
    template(slot="title")
      Water
      img(src="~assets/images/project/desktop/section5/title.png")
    template(slot="content")
      Products5
  Products6.desktop-product6
  Products7.desktop-product7
  Footer
</template>

<script>
import Banner0 from '@/components/project/desktop/Banner0'
import Banner1 from '@/components/project/desktop/Banner1'
import Banner2 from '@/components/project/desktop/Banner2'
import Banner3 from '@/components/project/desktop/Banner3'
import Products0 from '@/components/project/desktop/Products0'
import Products1 from '@/components/project/desktop/Products1'
import Products2 from '@/components/project/desktop/Products2'
import Products3 from '@/components/project/desktop/Products3'
import Products4 from '@/components/project/desktop/Products4'
import Products5 from '@/components/project/desktop/Products5'
import Products6 from '@/components/project/desktop/Products6'
import Products7 from '@/components/project/desktop/Products7'
import User0 from '@/components/project/desktop/User0'
import User1 from '@/components/project/desktop/User1'
import Section from '@/components/project/desktop/Section'
import UserSection from '@/components/project/desktop/UserSection'
import Footer from '@/components/project/desktop/Footer'
export default {
  components: {
    Banner0,
    Banner1,
    Banner2,
    Banner3,
    Section,
    Products0,
    Products1,
    Products2,
    Products3,
    Products4,
    Products5,
    Products6,
    Products7,
    User0,
    User1,
    UserSection,
    Footer,
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
