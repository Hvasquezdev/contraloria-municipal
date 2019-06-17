<template>
  <div class="profile-page">
    <div class="level">
      <div class="level-left">
        <h1 class="subtitle is-3">
          <span class="has-text-grey-light">Perfil de </span>
          <strong>Hector Vasquez</strong>
        </h1>
      </div>
      <div class="level-right">
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="form">
          <div class="field">
              <label class="label">Nombre Completo</label>
            <div class="field is-grouped">
              <base-input placeholder="Nombre" type="text" controlClass="is-expanded has-icons-left" className="is-large">
                <template v-slot:icon>
                  <span class="icon is-small">
                    <font-awesome-icon icon="user" />
                  </span>
                </template>
              </base-input>
              <base-input placeholder="Apellido" type="text" controlClass="is-expanded has-icons-left" className="is-large">
                <template v-slot:icon>
                  <span class="icon is-small">
                    <font-awesome-icon icon="user" />
                  </span>
                </template>
              </base-input>
            </div>
          </div>

          <div class="field">
            <label class="label">Usuario</label>
            <base-input placeholder="Usuario" type="text" controlClass="is-expanded has-icons-left" className="is-medium">
              <template v-slot:icon>
                <span class="icon is-small">
                  <font-awesome-icon icon="user-tag" />
                </span>
              </template>
            </base-input>
          </div>

          <div class="field">
            <label class="label">Contraseña</label>
            <base-input placeholder="Contraseña" type="password" controlClass="is-expanded has-icons-left" className="is-medium">
              <template v-slot:icon>
                <span class="icon is-small">
                  <font-awesome-icon icon="lock" />
                </span>
              </template>
            </base-input>
          </div>

          <div class="field">
            <div class="buttons">
              <base-button class="mdc-button--raised is-success">
                Guardar Cambios
              </base-button>
              <base-button class="mdc-button--unelevated is-light">
                Cancelar
              </base-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'profile-page',
  components: {
    BaseInput,
    BaseButton
  }
};
</script>

<style>
</style>
