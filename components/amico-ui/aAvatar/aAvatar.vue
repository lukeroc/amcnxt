<template>
  <figure class="a-avatar">
    <a
      @click="$router.push({name: 'account-settings'})"
      class="a-avatar-link">
        <div
          :class="appearance"
          :style="`background: url(${source}) no-repeat center center; background-size: cover;`"
          class="a-avatar-image">
        </div>

        <div v-if="name || caption" class="a-avatar-details">
          <h2 v-if="name" class="a-avatar-name">{{name}}</h2>
          <h6 v-if="caption" v-html="caption" class="a-avatar-caption a-light-heading"></h6>
        </div>
    </a>
  </figure>
</template>

<style lang="scss" src="./aAvatar.scss"></style>

<script>
export default {
  props: [
    'src',
    'name',
    'caption',
    'appearance'
  ],
  computed: {
    source () {
      return this.src ? this.src : '../../../../static/images/avatars/default.png'
    }
  }
}
</script>
