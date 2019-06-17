<template>
  <div class="login-page-container">
    <div class="form-wrapper mdc-elevation--z3">
      <div class="form">
        <h1 class="form-title">
          Ingresa tus datos
        </h1>
        <div class="field">
          <base-input placeholder="Usuario" type="text" controlClass="has-icons-left" className="is-medium">
            <template v-slot:icon>
              <span class="icon is-small">
                <font-awesome-icon icon="user-tag" :style="{ color: '#bdbdbd' }" />
              </span>
            </template>
          </base-input>
        </div>
        <div class="field">
          <base-input placeholder="Contraseña" type="password" controlClass="has-icons-left" className="is-medium">
            <template v-slot:icon>
              <span class="icon is-small">
                <font-awesome-icon icon="lock" :style="{ color: '#bdbdbd' }" />
              </span>
            </template>
          </base-input>
        </div>
        <base-button class="mdc-button--raised is-success is-fullwidth">
          Iniciar Sesion
        </base-button>
        <div class="form-end-text">
          <span>
            ¿No tienes cuenta?
          </span>
          <router-link to="/register" tag="a">Registrate!</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
import BaseInput from '@/components/BaseInput.vue';

export default {
  components: {
    BaseButton,
    BaseInput
  }
}
</script>

<style lang="scss" scoped>
@import "@material/elevation/mdc-elevation";

body {
  background: #f7f7f7;
  height: 100vh;
  width: 100vw;
}

.login-page-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.form-wrapper {
  width: 100%;
  max-width: 420px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  padding: 60px 55px 30px 55px;
  margin: auto;
}

.form {
  width: 100%;
}

.form > .form-title {
  display: block;
  text-align: center;
  padding-bottom: 25px;
  margin: 0;
  font-size: 25px;
  font-weight: 500;
  text-transform: uppercase;
}

.form > .form-group {
  display: flex;
  flex-direction: column;
}

.form-group > .button:not(:last-child) {
  margin-bottom: 15px;
}

.form-end-text {
  display: block;
  text-align: center;
  color: #999999;
  font-size: 16px;
  line-height: 1.4; 
  padding-top: 35px;
}

.form-end-text > a {
  text-decoration: none;
  color: #23d160;
  font-weight: 500;
}

.button {
  position: relative;
}
.button > i {
  position: absolute;
  left: 15px;
  font-size: 16px;
}

</style>