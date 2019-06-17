<template>
  <div class="dashboard">
    <div class="level">
      <div class="level-left">
        <h1 class="subtitle is-3">
          <span class="has-text-grey-light">Mensajes </span>
          <strong>Recibidos</strong>
        </h1>
      </div>
      <div class="level-right">
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>#</th>
              <th>Titulo</th>
              <th>Usuario</th>
              <th>Estado</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>#</th>
              <th>Titulo</th>
              <th>Usuario</th>
              <th>Estado</th>
              <th>Fecha</th>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <td>
                <strong>1</strong>
              </td>
              <td>
                Titulo del mensaje
              </td>
              <td>
                <a href="#">Ronaldo Cardenas</a>
              </td>
              <td>
                <span class="tag is-success">Visto</span>
              </td>
              <td>
                <span class="tag is-success">09/06/2019</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>2</strong>
              </td>
              <td>
                Titulo del mensaje
              </td>
              <td>
                <a href="#">Ronaldo Cardenas</a>
              </td>
              <td>
                <span class="tag is-warning">Sin leer</span>
              </td>
              <td>
                <span class="tag is-success">02/06/2019</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
