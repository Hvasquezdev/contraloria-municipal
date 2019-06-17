<template>
  <div id="home-page">
    <the-navbar></the-navbar>
    <section class="section">
      <div class="columns">
        <the-drawer></the-drawer>
        <main class="column">
          <router-view></router-view>
        </main>
      </div>
    </section>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';
import TheDrawer from '@/components/TheDrawer.vue';

export default {
  name: 'home-page',
  components: {
    TheNavbar,
    TheDrawer,
  },
}
</script>

<style lang="scss">
#home-page {
  width: 100%;
  height: 100vh;
}
</style>
