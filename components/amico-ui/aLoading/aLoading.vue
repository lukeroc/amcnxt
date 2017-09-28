<template>
  <p class="a-content-body">
    <span class="a-loading">{{ label }}</span>
  </p>
</template>

<style lang="scss" src="./aLoading.scss"></style>

<script>
export default {
  props: ['label']
}
</script>
