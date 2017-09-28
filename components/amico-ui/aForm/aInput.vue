<template>
  <div class="a-field-group">
    <label class="a-form-label" :for="model">{{ label }}</label>
    <input
      :class="{'is-error': errors.has(model) }"
      :name="model"
      :type="type"
      :placeholder="label"
      :data-vv-as="label"
      :v-validate="validations"
      :v-model="model"
      class="a-form-input"
      type="type">
      <span
        v-if="messages && errors.has(model)"
        class="a-form-message">{{ errors.first(model) }}
      </span>
  </div>
</template>

<script>
export default {
  props: ['label', 'model', 'type', 'validations'],
  data () {
    return {
      messages: false
    }
  }
}
</script>
