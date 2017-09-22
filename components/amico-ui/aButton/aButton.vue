<template>

	<router-link
		v-if="to"
		:to="to"
		:class="[`a-button-${type}`, `a-button-${size}`, {'a-button-disabled': isLoading || isDisabled}]"
		class="a-button">
			<a-spinner v-if="isLoading"></a-spinner>
			<span v-else class="a-button-text">
		  	<i v-if="iconLeft" :class="iconLeft" class="a-button-icon a-button-icon-left icon"></i>
		  	<span v-if="label" class="a-button-label">{{label}}</span>
		  	<i v-if="iconRight" :class="iconRight" class="a-button-icon a-button-icon-right icon"></i>
			</span>
	</router-link>

  <a
  	v-else
		:class="[`a-button-${type}`, `a-button-${size}`, {'a-button-disabled': isLoading || isDisabled}]"
		:href="href"
  	class="a-button">
			<a-spinner v-if="isLoading"></a-spinner>
			<span v-else class="a-button-text">
	  		<i v-if="iconLeft" :class="iconLeft" class="a-button-icon a-button-icon-left icon"></i>
	  		<span v-if="label" class="a-button-label">{{label}}</span>
	  		<i v-if="iconRight" :class="iconRight" class="a-button-icon a-button-icon-right icon"></i>
			</span>
  </a>
</template>

<style lang="scss" src="./aButton.scss"></style>

<script>
import { aSpinner } from 'components/amico-ui/aSpinner'

export default {
  props: ['type', 'size', 'label', 'iconLeft', 'iconRight', 'isLoading', 'isDisabled', 'to', 'href'],
  components: {
    aSpinner
  }
}
</script>
