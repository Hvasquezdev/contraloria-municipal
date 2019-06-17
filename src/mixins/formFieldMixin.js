export const formFieldMixin = {
  inheritAttrs: false,
  props: {
    className: {
      type: String,
      default: ''
    },
    controlClass: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    value: [String, Number]
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
}
