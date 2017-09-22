<template>
  <section class="a-home-wrapper">
    <a-header></a-header>
    <nuxt/>
    <a-footer></a-footer>
  </section>
</template>

<style lang="scss">
@import "../assets/scss/vendor/all";
@import "../assets/scss/base/all";
@import "../assets/scss/layout/all";
@import "../assets/scss/component/all";
</style>

<script>
import { aHeader } from '~/components/amico/aHeader'
import { aFooter } from '~/components/amico/aFooter'

export default {
  components: {
    aHeader,
    aFooter
  }
}
</script>
