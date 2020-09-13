<style lang="stylus" scoped>
.users1
  // background-color #fdfdfc
  // padding-top width1920(90)
  padding-bottom 0
  .user
    position relative
    img
      width 100%
    &-image
      width 100%

    &-2-icon
      left 37%
      top 0%
      width width786(120)
    .user0-more
      position absolute
      bottom 19%
      right 46%
    .user1-more
      position absolute
      bottom 18%
      right 6%
    .user2-more
      position absolute
      bottom 18%
      right 48%

  .swiper-pagination
    bottom width768(60)

  .swiper-slide
    padding 0
</style>
<template lang="pug">
.users1.swiper-container(ref="users")
  // Additional required wrapper
  .swiper-wrapper
    // Slides
    .user.swiper-slide
      img.user-image(alt="" src="~assets/images/project/mobile/users1/user0.png")
      a.more.user0-more(href="https://www.instagram.com/p/CBdIC9yJ51T/?igshid=5wr90vrig61m" target="_blank")
        img(alt="" src="~assets/images/project/mobile/more.png")
    .user.swiper-slide
      img.user-image(alt="" src="~assets/images/project/mobile/users1/user1.png")
      a.more.user1-more(href="https://www.instagram.com/p/CBDX2gxpmo-/?igshid=12ch9txlq283k" target="_blank")
        img(alt="" src="~assets/images/project/mobile/more.png")
    .user.swiper-slide
      img.user-image(alt="" src="~assets/images/project/mobile/users1/user2.png")
      a.more.user2-more(href="https://www.instagram.com/p/CBAswD8JE-l/?igshid=17k3ffsn2kyae" target="_blank")
        img(alt="" src="~assets/images/project/mobile/more.png")
  .swiper-pagination
  //- .swiper-button-prev
  //- .swiper-button-next

</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      usersSwiper: null,
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.swiperInit()
    },
    swiperInit() {
      // const Swiper = _swiper.default
      this.usersSwiper = new Swiper(this.$refs.users, {
        // spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          // nextEl: '.swiper-button-next',
          // prevEl: '.swiper-button-prev',
        },
      })
    },
  },
}
</script>
