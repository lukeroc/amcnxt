<template>
  <header class="a-header">
    <a-menu></a-menu>
    <a-hero v-if="$route.name === 'index'"></a-hero>
  </header>
</template>

<script>
import aHero from './aHero'
import aMenu from './aMenu'

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
