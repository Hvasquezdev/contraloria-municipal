<template>
  <button ref="button" v-on="$listeners" class="button mdc-button" :class="buttonClass" v-bind="$attrs">
    <slot class="mdc-button__label" />
  </button>
</template>

<script>
import { MDCRipple } from '@material/ripple';

export default {
  inheritAttrs: false,
  props: {
    buttonClass: String
  },
  mounted() {
    this.ripple = new MDCRipple(this.$refs.button);
  },
  destroyed() {
    this.ripple.destroy();
  }
}
</script>

<style lang="scss" scoped>
@import "@material/button/mdc-button";

.button {
  font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
}

.is-fullwidth {
  width: 100%;
}

.is-success {
  @include mdc-button-container-fill-color(#23d160);
}

.is-white {
  @include mdc-button-container-fill-color(#fff);
  @include mdc-button-ink-color(#353535);
}

.is-dark {
 @include mdc-button-container-fill-color(#353535);
}

.is-light {
  @include mdc-button-container-fill-color(whitesmoke);
  @include mdc-button-ink-color(#353535);
  @include mdc-states-base-color(#35353556);	
}

.is-info {
  @include mdc-button-container-fill-color(#209bee);
}

.is-text-dark {
  @include mdc-button-ink-color(#353535);
  @include mdc-states-base-color(#353535);
}

.is-text-white {
  @include mdc-button-ink-color(#fff);
  @include mdc-states-base-color(#fff);
}

.is-outlined-white {
  @include mdc-button-container-fill-color(transparent);
  @include mdc-states-base-color(#fff);	
  @include mdc-button-icon-color(#fff);
  @include mdc-button-outline-color(rgba(255,255,255,0.2));
  @include mdc-button-ink-color(#fff);
  @include mdc-button-outline-width(1px);
}

.is-outlined-dark {
  @include mdc-button-container-fill-color(transparent);
  @include mdc-states-base-color(#353535);	
  @include mdc-button-icon-color(#353535);
  @include mdc-button-outline-color(rgba(53, 53, 53, 0.2));
  @include mdc-button-ink-color(#353535);
  @include mdc-button-outline-width(1px);
}

.facebook {
  @include mdc-button-container-fill-color(#3B5998)
}

.twitter {
  @include mdc-button-container-fill-color(#00ACEE);
}

.google {
  @include mdc-button-container-fill-color(#db3236);
}
</style>
