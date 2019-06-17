<template>
  <div class="control" :class="controlClass">
    <input  
      v-bind="$attrs" 
      :class="className" 
      class="input"  
      :value="value" 
      @input="updateValue"
      v-on="listeners"
    >
    <slot name="icon"></slot>
  </div>
</template>

<script>
import { formFieldMixin } from '@/mixins/formFieldMixin.js'

export default {
  mixins: [formFieldMixin],
  props: {
    validator: {
      type: Object
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      }
    }, 
  }
}
</script>

<style lang="scss">
.control.has-icons-left .icon, 
.control.has-icons-right .icon {
  left: 0;
}
</style>
