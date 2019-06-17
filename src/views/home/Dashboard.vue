<template>
  <div class="dashboard">
    <div class="level">
      <div class="level-left">
        <h1 class="subtitle is-3">
          <span class="has-text-grey-light">Hola </span>
          <strong>Hector Vasquez</strong>
        </h1>
      </div>
      <div class="level-right">
        <div class="select">
          <select @change="changeStats">
            <option value="today" selected>Hoy</option>
            <option value="yesterday">Ayer</option>
          </select>
        </div>
      </div>
    </div>
    <div class="columns is-multiline" v-if="selectedStats">
      <div class="column is-12-tablet is-6-desktop is-4-widescreen">
        <div class="notification has-text" :class="{ 'is-warning': selectedStats.unread > 0, 'is-success': selectedStats.unread == 0 }">
          <p class="title is-1">{{ selectedStats.unread }}</p>
          <p class="subtitle is-4">Mensajes sin leer</p>
        </div>
      </div>
      <div class="column is-12-tablet is-6-desktop is-4-widescreen">
        <div class="notification is-info has-text">
          <p class="title is-1">{{ selectedStats.received }}</p>
          <p class="subtitle is-4">Mensajes recibidos</p>
        </div>
      </div>
      <div class="column is-12-tablet is-6-desktop is-4-widescreen">
        <div class="notification is-info has-text">
          <p class="title is-1">{{ selectedStats.sent }}</p>
          <p class="subtitle is-4">Mensajes enviados</p>
        </div>
      </div>

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
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      stats: {
        today: {
          unread: "0",
          received: "1",
          sent: "0",
        },
        yesterday: {
          unread: "0",
          received: "4",
          sent: "8",
        }
      },
      selectedStats: null,
    };
  },
  mounted() {
    this.selectedStats = this.stats.today;
  },
  methods: {
    changeStats(event) {
      this.selectedStats = this.stats[event.target.value];
    }
  }
};
</script>

<style lang="scss">
@import "@material/elevation/mdc-elevation";

</style>
