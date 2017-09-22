<template>
  <header class="a-header">
    <a-hero v-if="$route.name === 'index'"></a-hero>
    <a-menu></a-menu>
  </header>
</template>

<style lang="scss" src="./aHeader.scss"></style>

<script>
import aHero from './aHero/aHero'
import aMenu from './aMenu/aMenu'

export default {
  components: {
    aHero,
    aMenu
  },
  data () {
    return {
      isMobile: true,
      isMobileMenuVisible: false
    }
  },
  mounted () {
    if (window.innerWidth >= 920) {
      this.isMobile = false
    }
  }
}
</script>

<style lang="scss">
.a-header {
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  width: 100%;

  @media (min-width: 920px) {
    display: block;
  }

  .a-menu {
    position: relative;
    top: auto;
    bottom: auto;

    @media (min-width: 920px) {
      position: absolute;
      bottom: 0;
    }
  }
}
</style>
