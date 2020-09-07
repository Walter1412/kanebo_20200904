import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
Swiper.use([Navigation, Pagination, Autoplay])
;((global) => {
  global.Swiper = Swiper
})(window)
