<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <swiper :slides-per-view="1" :space-between="0">
      <swiper-slide v-for="item in 3">Slide Item</swiper-slide>
    </swiper>
  </div>
</template>
