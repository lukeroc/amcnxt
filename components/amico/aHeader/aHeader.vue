<template>
  <header :class="{'home-header': $route.name === 'index'}" class="a-header">
    <template v-if="$route.name === 'index'">
      <a-hero></a-hero>
      <a-menu></a-menu>
    </template>
    <template v-else>
      <a-menu></a-menu>
    </template>
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
