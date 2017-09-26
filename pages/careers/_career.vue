<template>
  <article class="a-content">
    <div v-if="career" class="content-wrapper">

      <div class="content a-career-details-header">
        <div class="contained-content">
          <h3 class="a-career-title">{{ career.name }}</h3>
          <hr/>
          <p class="x-small">{{ career.sector }}</p>
        </div>
      </div>

      <div v-if="career.description" class="content content-bottom-space">
          <div class="contained-content">
            <h5 class="a-career-heading">The Role</h5>
            <p>{{ career.description }}</p>
          </div>
        </div>

      <div v-if="career.responsibilities" class="content content-bottom-space">
        <div class="contained-content">
          <h5 class="a-career-heading">Responsibilities</h5>
          <ul class="a-details-list a-responsibilities-list">
            <li v-for="responsibility in career.responsibilities">{{ responsibility }}</li>
          </ul>
        </div>
      </div>

      <div v-if="career.requirements" class="content content-bottom-space">
        <div class="contained-content">
          <h5 class="a-career-heading">Requirements</h5>
          <ul class="a-details-list a-requirements-list">
            <li v-for="requirement in career.requirements">{{ requirement }}</li>
          </ul>
        </div>
      </div>

      <div v-if="career.skills" class="content content-bottom-space">
        <div class="contained-content">
          <h5 class="a-career-heading">Skills</h5>
          <ul class="a-details-list a-skills-list">
            <li v-for="skill in career.skills">{{ skill }}</li>
          </ul>
        </div>
      </div>

      <div v-if="career.preferredSkills" class="content content-bottom-space">
        <div class="contained-content">
          <h5 class="a-career-heading">Preferred Skills</h5>
          <ul class="a-details-list a-preferred-skills-list">
            <li v-for="skill in career.preferredSkills">{{ skill }}</li>
          </ul>
        </div>
      </div>

      <div v-if="career.qualifications" class="content content-bottom-space">
        <div class="contained-content">
          <h5 class="a-career-heading">Qualifications</h5>
          <ul class="a-details-list a-qualifications-list">
            <li v-for="qualification in career.qualifications">{{ qualification }}</li>
          </ul>
        </div>
      </div>

      <div class="content" style="padding: 20px 20px 80px">
        <div class="contained-content">
          <h5 class="a-career-heading">How to Apply</h5>
          <p class="a-career-body">
            If you are interested in joining us, we’d love to hear from you. To apply for this role, send us an email on <a href="mailto:hr@amico.ai">hr@amico.ai</a> or click 'Apply' below. All your information will be kept confidential according to Equal Employment Opportunities guidelines.
          </p>

          <a-button
            label="Apply"
            type="secondary"
            href="mailto:hr@amico.ai">
          </a-button>

          <a-button
            @click.native="$router.go(-1)"
            label="Take me back"
            type="link"
            class="btn-back">
          </a-button>

        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" src="./_career.scss"></style>

<script>

import { filter } from 'lodash/filter' // eslint-disable-line no-unused-vars

import { CAREERS } from './careers.const'
import { aButton } from '~/components/amico-ui/aButton'

export default {
  components: {
    aButton
  },
  data () {
    return {
      CAREERS,
      careerId: null,
      career: null
    }
  },
  mounted () {
    let path = this.$route.path
    this.careerId = path.substr(path.lastIndexOf('/') + 1)
    this.career = CAREERS.filter(career => (career.link === this.careerId))[0]
  }
}
</script>
