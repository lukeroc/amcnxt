<template>
  <div class="a-accordions">
    <div v-for="(accordion, index) in accordionData" :key="accordion" class="a-accordion">

      <input v-if="accordionType === 'single'" :id="`a-accordion-${index}`" :name="accordionGroup" type="radio" class="a-accordion-input">

      <input v-if="accordionType === 'multiple'" :id="`a-accordion-${index}`" :name="accordionGroup" type="checkbox" class="a-accordion-input">

      <label :for="`a-accordion-${index}`" class="a-accordion-label">{{ accordion.label }}</label>

      <div class="a-accordion-content">
        <p>{{ accordion.content }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./aAccordion.scss"></style>

<script>
  export default {
    props: {
      accordionType: {
        type: String,
        required: true
      },
      accordionGroup: {
        type: String,
        required: true
      },
      accordionData: {
        type: [Array, Object],
        required: true
      }
    }
  }
</script>
