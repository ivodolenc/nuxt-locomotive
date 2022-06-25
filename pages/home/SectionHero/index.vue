<template>
  <div
    data-section-hero
    class="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none p-10"
  >
    <div class="z-30 w-full max-w-[60vw] lg:max-w-[40vw]">
      <figure class="relative block pt-[100%]">
        <img
          data-img-star
          data-src="/images/star.png"
          class="lazyload absolute top-0 left-0 w-full h-full object-cover opacity-0 transform scale-0"
          alt=""
          draggable="false"
        />
      </figure>
    </div>
    <div
      class="z-10 absolute w-full max-w-screen-xl xl:max-w-[80vw] overflow-hidden p-10"
    >
      <SvgTitle data-svg-title class="opacity-0 transform translate-y-[150%]" />
    </div>
  </div>
</template>

<script>
import SvgTitle from './SvgTitle'

export default {
  components: {
    SvgTitle
  }
}
</script>

<style scoped>
[data-section-hero]::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.13;
  background-image: url('/images/grain.gif');
}
</style>
