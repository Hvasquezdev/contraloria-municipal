<template>
  <div class="register-page">
    <form-register></form-register>
  </div>
</template>

<script>
import FormRegister from '@/components/FormRegister.vue';

export default {
  name: 'register-page',
  components: {
    FormRegister,
  },
}
</script>