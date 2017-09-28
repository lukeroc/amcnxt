<template>
  <section class="a-app">

    <!-- APP TEMPLATE -->
    <template v-if="isBrowserSupported">
      <a-header></a-header>
      <nuxt/>
      <a-footer></a-footer>
    </template>

    <!-- UNSUPPORTED BROWSERS -->
    <template v-else>
      <a-browser-support></a-browser-support>
    </template>

  </section>
</template>

<style lang="scss">
@import "../assets/scss/vendor/all";
@import "../assets/scss/base/all";
@import "../assets/scss/layout/all";
@import "../assets/scss/component/all";
</style>

<script>
import { isIE } from '~/plugins'
import { aBrowserSupport } from '~/components/amico-ui/aBrowserSupport'
import { aHeader } from '~/components/amico/aHeader'
import { aFooter } from '~/components/amico/aFooter'

export default {
  components: {
    aHeader,
    aFooter,
    aBrowserSupport
  },
  plugins: [
    isIE
  ],
  data () {
    return {
      isBrowserSupported: true
    }
  },
  mounted () {
    let isIeBrowser = isIE()
    if (isIeBrowser && isIeBrowser < 12) {
      this.isBrowserSupported = false
    }
  }
}
</script>
