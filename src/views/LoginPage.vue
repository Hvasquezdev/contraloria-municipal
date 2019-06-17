<template>
  <div class="login-page">
    <form-login></form-login>
  </div>
</template>

<script>
import FormLogin from '@/components/FormLogin.vue';

export default {
  name: 'login-page',
  components: {
    FormLogin,
  },
}
</script>
