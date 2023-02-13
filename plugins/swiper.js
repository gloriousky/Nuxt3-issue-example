import SwiperClass, { Navigation, Pagination, Scrollbar } from 'Swiper';
import VueAwesomeSwiper, { Swiper, SwiperSlide } from 'vue-awesome-swiper';

// import swiper module styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

SwiperClass.use([Navigation, Pagination, Scrollbar]);
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueAwesomeSwiper, SwiperClass, Swiper, SwiperSlide);
});
