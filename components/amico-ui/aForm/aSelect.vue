<template>
  <div :class="{'is-visible': isDropdownVisible}" class="a-select a-form-input">
    <div @click="openDropdown" class="a-select-value">
      {{ selectedOption }}
      <span class="a-select-value-icon">
        <i class="icon icon-chevron-down"></i>
      </span>
    </div>
    <div v-show="isDropdownVisible" class="a-select-dropdown">
      <ul class="a-select-dropdown-list">
        <li v-for="option in selectOptions" :key="option" @click="setSelectedOption(option)" class="a-select-option">
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectOptions: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isDropdownVisible: false,
      selectedOption: this.selectOptions[0].label
    }
  },
  methods: {
    openDropdown () {
      this.isDropdownVisible = true
    },
    closeDropdown () {
      this.isDropdownVisible = false
    },
    setSelectedOption (selectedOptionValue) {
      this.selectedOption = selectedOptionValue.label
      this.$emit('onOptionChange', selectedOptionValue)
      this.closeDropdown()
    }
  }
}
</script>
