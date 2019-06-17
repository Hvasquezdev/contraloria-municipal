<template>
  <div class="profile-page">
    <div class="level">
      <div class="level-left">
        <h1 class="subtitle is-3">
          <span class="has-text-grey-light">Nuevo </span>
          <strong>Mensaje</strong>
        </h1>
      </div>
      <div class="level-right">
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="form">
          <div class="field">
              <label class="label">Titulo y Usuario</label>
            <div class="field is-grouped">
              <base-input placeholder="Titulo" type="text" controlClass="is-expanded has-icons-left" className="is-large">
                <template v-slot:icon>
                  <span class="icon is-small">
                    <font-awesome-icon icon="quote-left" />
                  </span>
                </template>
              </base-input>
              <base-input placeholder="Usuario" type="text" controlClass="is-expanded has-icons-left" className="is-large">
                <template v-slot:icon>
                  <span class="icon is-small">
                    <font-awesome-icon icon="user-tag" />
                  </span>
                </template>
              </base-input>
            </div>
          </div>

          <div class="field">
            <label class="label">Mensaje</label>
            <textarea class="textarea" placeholder="Escribe tu mensaje"></textarea>
          </div>

          <div class="field">
            <label class="label">Subir archivo (Opcional)</label>
            <div class="file is-info has-name">
              <label class="file-label">
                <input class="file-input" type="file" name="resume">
                <span class="file-cta">
                  <span class="file-icon">
                    <font-awesome-icon icon="upload" />
                  </span>
                  <span class="file-label">
                    Buscar archivo…
                  </span>
                </span>
                <span class="file-name">
                  archivoDePrueba.pdf
                </span>
              </label>
            </div>
          </div>

          <hr>

          <div class="field">
            <div class="buttons">
              <base-button class="mdc-button--raised is-success">
                Enviar
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
