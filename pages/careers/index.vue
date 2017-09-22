<template>
  <article class="a-content">

    <!-- CAREERS VIEW -->
    <section v-if="!isDetailsRouteVisible" class="a-careers">
      <!-- INTRO SECTION -->
      <div class="a-careers-intro">
        <div class="contained-content">

          <h2 class="a-intro-title">Come and join us!</h2>

          <!-- COMPANY VALUES MOBILE -->
          <div v-if="isMobile" class="a-company-values">
            <carousel
              :perPage="1"
              :perPageCustom="[[768, 2]]"
              :minSwipeDistance="30"
              :scrollPerPage="true"
              :navigationEnabled="false"
              :paginationEnabled="true"
              paginationColor="#008ae5"
              paginationActiveColor="#ffffff">

              <!-- FULFILMENT -->
              <slide>
                <div class="a-company-value">
                  <div class="a-value-header">
                    <img class="a-value-icon" alt="Career Fulfilment illustration" src="~/static/images/career-fulfilment.svg">
                    <h5 class="a-value-title">Fulfilment</h5>
                  </div>
                  <div class="a-value-content">
                    <p class="a-value-body small">
                      We are building a super talented team. Everyone here
                      holds each other to such high standards, that we end
                      up challenging ourselves.
                    </p>
                    <p class="a-value-body small">
                      As we work, we are not just developing products but
                      principally ourselves as professionals. And so after
                      a day at work we go back home with our heads held
                      high with pride.
                    </p>
                  </div>
                </div>
              </slide>

              <!-- PURPOSE -->
              <slide>
                <div class="a-company-value">
                  <div class="a-value-header">
                    <img class="a-value-icon" alt="Career Purpose illustration" src="~/static/images/career-purpose.svg" style="padding-left: 22px;">
                    <h5 class="a-value-title">Purpose</h5>
                  </div>
                  <div class="a-value-content">
                    <p class="a-value-body small">
                      Our every-day motivation comes from having a purpose that
                      is larger than ourselves.
                    </p>
                    <p class="a-value-body small">
                      We are working to achieve breakthroughs in Adaptive AI, a groundbreaking technology that is already transforming the future and will create lots of positive value in the world.
                    </p>
                  </div>
                </div>
              </slide>

              <!-- BENEFITS -->
              <slide>
                <div class="a-company-value">
                  <div class="a-value-header">
                      <img class="a-value-icon" alt="Career Benefits illustration" src="~/static/images/career-benefits.svg">
                    <h5 class="a-value-title">Benefits</h5>
                  </div>
                  <div class="a-value-content">
                    <p class="a-value-body small">
                      Working in a friendly and relaxed environment makes our productivity grow.
                    </p>
                    <p class="a-value-body small">
                      We offer flexible hours, competitive salaries, social events, a personal training fund, use of swimming pool, games room, free drinks, snacks and more. This is the true revenge of the nerds.
                    </p>
                  </div>
                </div>
              </slide>
            </carousel>
          </div>

          <!-- COMPANY VALUES DESKTOP -->
          <div v-else class="a-company-values">
            <!-- FULFILMENT -->
            <div class="a-company-value">
              <div class="a-value-wrapper">
                <div class="a-value-header">
                    <img class="a-value-icon" alt="Career Fulfilment illustration" src="~/static/images/career-fulfilment.svg">
                  <h5 class="a-value-title">Fulfilment</h5>
                </div>
                <div class="a-value-content">
                  <p class="a-value-body small">
                    We are building a super talented team. Everyone here
                    holds each other to such high standards, that we end
                    up challenging ourselves.
                  </p>
                  <p class="a-value-body small">
                    As we work, we are not just developing products but
                    principally ourselves as professionals. And so after
                    a day at work we go back home with our heads held
                    high with pride.
                  </p>
                </div>
              </div>
            </div>

            <!-- PURPOSE -->
            <div class="a-company-value">
              <div class="a-value-wrapper">
                <div class="a-value-header">
                  <img class="a-value-icon" alt="Career Purpose illustration" src="~/static/images/career-purpose.svg" style="padding-left: 22px;">
                  <h5 class="a-value-title">Purpose</h5>
                </div>
                <div class="a-value-content">
                  <p class="a-value-body small">
                    Our every-day motivation comes from having a purpose that
                    is larger than ourselves.
                  </p>
                  <p class="a-value-body small">
                    We are working to achieve breakthroughs in Adaptive AI, a groundbreaking technology that is already transforming the future and will create lots of positive value in the world.
                  </p>
                </div>
              </div>
            </div>

            <!-- BENEFITS -->
            <div class="a-company-value">
              <div class="a-value-wrapper">
                <div class="a-value-header">
                  <img class="a-value-icon" alt="Career Benefits illustration" src="~/static/images/career-benefits.svg">
                  <h5 class="a-value-title">Benefits</h5>
                </div>
                <div class="a-value-content">
                  <p class="a-value-body small">
                    Working in a friendly and relaxed environment makes our productivity grow.
                  </p>
                  <p class="a-value-body small">
                    We offer flexible hours, competitive salaries, social events, a personal training fund, use of swimming pool, games room, free drinks, snacks and more. This is the true revenge of the nerds.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- CAREER OPENINGS -->
      <div class="content alternate-content a-career-openings">
        <div class="contained-content">
          <div class="content-header">
            <h3 class="a-content-title">Openings</h3>
            <hr/>
          </div>
          <div class="a-openings">
            <div
              v-for="career in CAREERS" :key="career.name"
              class="a-opening">

              <nuxt-link
                :to="{name: 'career-details', params: {link: career.link, career: career, isDetailsRouteVisible: true}}" class="a-opening-link"
                @click.native="isDetailsRouteVisible = true">
                <p class="strong">{{ career.name }}</p>
                <p class="x-small">{{ career.sector }}</p>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CAREER DETAILS SUB VIEW -->
    <!-- <transition name="fade-in">
      <section v-if="isDetailsRouteVisible" class="a-career-details">
        <router-view></router-view>
      </section>
    </transition> -->

  </article>
</template>

<style lang="scss" src="./careers.scss"></style>

<script>
import { CAREERS } from './careers.const'
import { Slide, Carousel } from 'vue-carousel'

export default {
  components: {
    Slide,
    Carousel
  },
  data () {
    return {
      CAREERS,
      isMobile: true,
      isDetailsRouteVisible: false
    }
  },
  mounted () {
    if (window.innerWidth >= 920) {
      this.isMobile = false
    }
  },
  updated () {
    this.isDetailsRouteVisible = this.$route.params.isDetailsRouteVisible
  }
}
</script>
