<template>
  <article class="a-content a-article">

    <!-- MOBILE HEADER -->
    <div v-if="isMobile" class="content">
      <div class="contained-content">
        <div class="a-article-header">
          <h1 class="a-article-title">
            {{ title }}
          </h1>
          <hr />
          <p class="a-article-date x-small">{{ publishDate }}</p>
        </div>
      </div>
    </div>

    <!-- MOBILE ARTICLE INTRO -->
    <div
      v-if="isMobile"
      :style="`background:url(/images/${featuredImageMob}) #f7f8fa no-repeat;`"
      class="a-article-intro">
    </div>

    <!-- DESKTOP ARTICLE INTRO -->
    <div
      v-else
      :style="`background:url(/images/${featuredImage}) #f7f8fa no-repeat;`"
      class="a-article-intro">
    </div>

    <!-- ARTICLE CONTENT -->
    <div class="a-article-content">

      <!-- DESKTOP ARTICLE HEADER -->
      <div v-if="!isMobile" class="content content-top-space">
        <div class="contained-content">
          <div class="a-article-header">
            <h1 class="a-article-title">
              {{ title }}
            </h1>
            <hr class="a-article-separator" />
            <p class="a-article-date x-small">{{ publishDate }}</p>
          </div>
        </div>
      </div>

      <!-- ARTICLE TEXT -->
      <slot name="a-article-content"></slot>
    </div>
  </article>
</template>

<style lang="scss" src="./aArticle.scss"></style>

<script>
export default {
  props: ['title', 'publishDate', 'featuredImage', 'featuredImageMob'],
  data () {
    return {
      isMobile: true
    }
  },
  mounted () {
    if (window.innerWidth >= 920) {
      this.isMobile = false
    }
  }
}
</script>
