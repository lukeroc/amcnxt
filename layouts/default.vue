<template>
  <div>
    <div class="a-menu">
      <div class="a-logo">
        <nuxt-link to="/">Logo</nuxt-link>
      </div>
      <nav class="a-menu-links">
        <nuxt-link class="a-menu-link" :to="{name: 'careers'}">Careers</nuxt-link>
        <nuxt-link class="a-menu-link" :to="{name: 'press'}">Press</nuxt-link>
        <nuxt-link class="a-menu-link" :to="{name: 'blog'}">Blog</nuxt-link>
      </nav>
    </div>

    <nuxt/>
  </div>
</template>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.a-menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 0 32px;
  background: #e3e3e3;

  .a-menu-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;

    .a-menu-link {
      margin: 0 16px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
