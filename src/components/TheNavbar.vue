<template>
  <nav class="navbar has-shadow">
    <div class="navbar-brand">
      <div class="navbar-item">
        <small>Contraloria del Municipio Heres</small>
      </div>
      <div class="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <base-button class="mdc-button--raised is-dark" @click="$router.push('/login')">
            Cerrar Sesion
          </base-button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'the-navbar',

  components: {
    BaseButton,
  },
}
</script>

<style lang="scss">
</style>
